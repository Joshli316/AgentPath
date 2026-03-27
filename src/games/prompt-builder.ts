import { loadState, recordGame } from "../state";
import { t, getLang } from "../i18n";
import { loadContent } from "../content";

interface PromptBuilderData {
  "prompt-builder": {
    challenges: {
      instruction: string;
      instructionZh: string;
      parts: string[];
      correct: string[];
    }[];
  };
}

export async function renderPromptBuilder(sprintId: number): Promise<string> {
  const data = await loadContent<PromptBuilderData>(`sprint-${sprintId}/games.json`);
  const lang = getLang();
  const challenges = data["prompt-builder"].challenges;
  const challenge = challenges[0];

  (window as any).__pbState = {
    sprintId,
    challenges,
    currentChallenge: 0,
    placed: [] as string[],
    available: [...challenge.parts].sort(() => Math.random() - 0.5),
  };

  return renderChallenge(challenge, lang, sprintId);
}

function renderChallenge(
  challenge: { instruction: string; instructionZh: string; parts: string[]; correct: string[] },
  lang: string,
  sprintId: number
): string {
  const pbs = (window as any).__pbState;
  const instruction = lang === "zh" ? challenge.instructionZh : challenge.instruction;

  const availableHtml = pbs.available
    .map(
      (part: string, i: number) => `
    <button onclick="window.__placePart(${i})"
            class="code-block px-2 py-1 text-xs cursor-pointer hover:ring-1 hover:ring-ap-green transition-all inline-block m-1">
      ${part}
    </button>
  `
    )
    .join("");

  const placedHtml =
    pbs.placed.length > 0
      ? pbs.placed
          .map(
            (part: string, i: number) => `
      <button onclick="window.__removePart(${i})"
              class="code-block px-2 py-1 text-xs cursor-pointer hover:ring-1 hover:ring-ap-red transition-all inline-block m-1 bg-ap-green-dim">
        ${part}
      </button>
    `
          )
          .join("")
      : `<span class="text-ap-text-muted text-xs">Tap code parts below to build the call...</span>`;

  return `
    <a href="#/sprint/${sprintId}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">← ${t("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath prompt-builder</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${t("games.prompt-builder")}</h1>
    <p class="text-ap-text text-sm mb-6">${instruction}</p>

    <div class="terminal-card mb-4">
      <div class="terminal-card-header">
        <div class="terminal-dot terminal-dot-red"></div>
        <div class="terminal-dot terminal-dot-yellow"></div>
        <div class="terminal-dot terminal-dot-green"></div>
        <span class="text-ap-text-muted text-xs ml-2">your code</span>
      </div>
      <div id="pb-placed" class="p-3 min-h-[80px]">${placedHtml}</div>
    </div>

    <div class="text-ap-text-muted text-xs mb-2">Available parts:</div>
    <div id="pb-available" class="mb-4">${availableHtml}</div>

    <button onclick="window.__checkPromptBuilder()"
            class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm hover:opacity-90 transition-opacity">
      Check
    </button>
    <div id="pb-result" class="mt-4"></div>
  `;
}

(window as any).__placePart = (index: number) => {
  const pbs = (window as any).__pbState;
  const part = pbs.available.splice(index, 1)[0];
  pbs.placed.push(part);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
};

(window as any).__removePart = (index: number) => {
  const pbs = (window as any).__pbState;
  const part = pbs.placed.splice(index, 1)[0];
  pbs.available.push(part);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
};

(window as any).__checkPromptBuilder = () => {
  const pbs = (window as any).__pbState;
  const challenge = pbs.challenges[pbs.currentChallenge];
  const isCorrect = JSON.stringify(pbs.placed) === JSON.stringify(challenge.correct);

  const score = isCorrect ? 100 : 0;
  const state = loadState();
  recordGame(state, `s${pbs.sprintId}-prompt-builder`, score);

  const resultEl = document.getElementById("pb-result");
  if (resultEl) {
    resultEl.innerHTML = isCorrect
      ? `
        <div class="terminal-card p-4 text-center">
          <div class="text-ap-green text-2xl font-bold glow-green mb-2">✓ Correct!</div>
          <div class="flex gap-3 justify-center mt-4">
            <button onclick="window.dispatchEvent(new HashChangeEvent('hashchange'))"
                    class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
              ${t("games.play-again")}
            </button>
            <a href="#/sprint/${pbs.sprintId}/games" class="text-ap-text-muted text-sm border border-ap-border rounded px-4 py-2 hover:bg-ap-surface-hover">
              ${t("games.back")}
            </a>
          </div>
        </div>
      `
      : `
        <div class="text-ap-red text-sm mb-2">Not quite — try rearranging the parts.</div>
        <div class="text-ap-text-muted text-xs">Expected:</div>
        <div class="code-block text-xs mt-1">${challenge.correct.join("\n")}</div>
      `;
  }
};
