import { loadState, recordGame } from "../state";
import { t, getLang } from "../i18n";
import { loadContent } from "../content";

interface FlashMatchData {
  "flash-match": {
    pairs: { term: string; termZh: string; definition: string; definitionZh: string }[];
  };
}

export async function renderFlashMatch(sprintId: number): Promise<string> {
  const data = await loadContent<FlashMatchData>(`sprint-${sprintId}/games.json`);
  const lang = getLang();
  const allPairs = data["flash-match"].pairs;

  const shuffled = [...allPairs].sort(() => Math.random() - 0.5);
  const pairs = shuffled.slice(0, 6);

  const terms = pairs.map((p, i) => ({
    id: i,
    text: lang === "zh" ? p.termZh : p.term,
  }));
  const defs = [...pairs]
    .sort(() => Math.random() - 0.5)
    .map((p) => ({
      id: pairs.indexOf(p),
      text: lang === "zh" ? p.definitionZh : p.definition,
    }));

  (window as any).__flashMatchState = {
    sprintId,
    selectedTerm: null as number | null,
    matched: new Set<number>(),
    attempts: 0,
    startTime: Date.now(),
    total: pairs.length,
  };

  const termsHtml = terms
    .map(
      (t) => `
    <button id="term-${t.id}" onclick="window.__selectTerm(${t.id})"
            class="terminal-card p-2 text-left text-sm text-ap-green hover:bg-ap-green-dim transition-colors">
      ${t.text}
    </button>
  `
    )
    .join("");

  const defsHtml = defs
    .map(
      (d) => `
    <button id="def-${d.id}" onclick="window.__selectDef(${d.id})"
            class="terminal-card p-2 text-left text-sm text-ap-text hover:bg-ap-surface-hover transition-colors">
      ${d.text}
    </button>
  `
    )
    .join("");

  return `
    <a href="#/sprint/${sprintId}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">← ${t("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath flash-match</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${t("games.flash-match")}</h1>
    <p class="text-ap-text-muted text-xs mb-6">Tap a term, then tap its matching definition.</p>

    <div id="flash-match-area" class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-2">${termsHtml}</div>
      <div class="flex flex-col gap-2">${defsHtml}</div>
    </div>
    <div id="flash-match-result" class="mt-6 hidden"></div>
  `;
}

(window as any).__selectTerm = (id: number) => {
  const gs = (window as any).__flashMatchState;
  if (gs.matched.has(id)) return;
  document.querySelectorAll("[id^='term-']").forEach((el) => el.classList.remove("ring-1", "ring-ap-green"));
  document.getElementById(`term-${id}`)?.classList.add("ring-1", "ring-ap-green");
  gs.selectedTerm = id;
};

(window as any).__selectDef = (id: number) => {
  const gs = (window as any).__flashMatchState;
  if (gs.selectedTerm === null || gs.matched.has(id)) return;

  gs.attempts++;
  const termEl = document.getElementById(`term-${gs.selectedTerm}`);
  const defEl = document.getElementById(`def-${id}`);

  if (gs.selectedTerm === id) {
    gs.matched.add(id);
    termEl?.classList.add("opacity-30");
    defEl?.classList.add("opacity-30");
    termEl?.classList.remove("ring-1", "ring-ap-green");
    gs.selectedTerm = null;

    if (gs.matched.size === gs.total) {
      const elapsed = Math.round((Date.now() - gs.startTime) / 1000);
      const accuracy = Math.round((gs.total / gs.attempts) * 100);
      const score = Math.min(100, accuracy);

      const state = loadState();
      recordGame(state, `s${gs.sprintId}-flash-match`, score);

      const resultEl = document.getElementById("flash-match-result");
      if (resultEl) {
        resultEl.classList.remove("hidden");
        resultEl.innerHTML = `
          <div class="terminal-card p-4 text-center">
            <div class="text-ap-green text-2xl font-bold glow-green mb-2">✓ Complete!</div>
            <div class="text-ap-text text-sm">${t("games.score")}: ${score}% | Time: ${elapsed}s | Attempts: ${gs.attempts}</div>
            <div class="flex gap-3 justify-center mt-4">
              <button onclick="window.dispatchEvent(new HashChangeEvent('hashchange'))"
                      class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
                ${t("games.play-again")}
              </button>
              <a href="#/sprint/${gs.sprintId}/games" class="text-ap-text-muted text-sm border border-ap-border rounded px-4 py-2 hover:bg-ap-surface-hover">
                ${t("games.back")}
              </a>
            </div>
          </div>
        `;
      }
    }
  } else {
    defEl?.classList.add("border-ap-red");
    setTimeout(() => defEl?.classList.remove("border-ap-red"), 500);
    termEl?.classList.remove("ring-1", "ring-ap-green");
    gs.selectedTerm = null;
  }
};
