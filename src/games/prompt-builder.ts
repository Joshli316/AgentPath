import { loadState, recordGame } from "../state";
import { t } from "../i18n";
import { loadContent } from "../content";
import { escapeHtml, terminalCardHeader, localize } from "../utils";

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
  const challenges = data["prompt-builder"]?.challenges || [];
  if (challenges.length === 0) {
    return `<div class="text-ap-text-muted text-sm">$ error: no prompt-builder challenges found for sprint ${sprintId}</div>`;
  }
  const challenge = challenges[0];

  (window as any).__pbState = {
    sprintId,
    challenges,
    currentChallenge: 0,
    placed: [] as string[],
    available: [...challenge.parts].sort(() => Math.random() - 0.5),
    recorded: false,
  };

  return renderChallenge(challenge, sprintId);
}

function renderChallenge(
  challenge: { instruction: string; instructionZh: string; parts: string[]; correct: string[] },
  sprintId: number
): string {
  const pbs = (window as any).__pbState;
  const instruction = localize(challenge, "instruction");

  return `
    <a href="#/sprint/${sprintId}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">← ${t("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath prompt-builder</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${t("games.prompt-builder")}</h1>
    <p class="text-ap-text text-sm mb-6">${escapeHtml(instruction)}</p>

    <div class="terminal-card mb-4">
      ${terminalCardHeader("your code")}
      <div id="pb-placed" class="p-3 min-h-[80px]">${renderPlaced(pbs)}</div>
    </div>

    <div class="text-ap-text-muted text-xs mb-2">${t("games.available-parts")}</div>
    <div id="pb-available" class="mb-4">${renderAvailable(pbs)}</div>

    <button onclick="window.__checkPromptBuilder()"
            class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm hover:opacity-90 transition-opacity">
      ${t("games.check")}
    </button>
    <div id="pb-result" class="mt-4" role="status" aria-live="polite"></div>
  `;
}

function renderPlaced(pbs: any): string {
  if (pbs.placed.length === 0) {
    return `<span class="text-ap-text-muted text-xs">${t("games.tap-to-build")}</span>`;
  }
  return pbs.placed
    .map(
      (part: string, i: number) => `
      <button onclick="window.__removePart(${i})"
              class="code-block px-2 py-1 text-xs cursor-pointer hover:ring-1 hover:ring-ap-red transition-all inline-block m-1 bg-ap-green-dim">
        ${escapeHtml(part)}
      </button>
    `
    )
    .join("");
}

function renderAvailable(pbs: any): string {
  return pbs.available
    .map(
      (part: string, i: number) => `
    <button onclick="window.__placePart(${i})"
            class="code-block px-2 py-1 text-xs cursor-pointer hover:ring-1 hover:ring-ap-green transition-all inline-block m-1">
      ${escapeHtml(part)}
    </button>
  `
    )
    .join("");
}

// Targeted DOM updates — no full page re-render
function refreshPbUI(): void {
  const pbs = (window as any).__pbState;
  const placedEl = document.getElementById("pb-placed");
  const availableEl = document.getElementById("pb-available");
  if (placedEl) placedEl.innerHTML = renderPlaced(pbs);
  if (availableEl) availableEl.innerHTML = renderAvailable(pbs);
}

(window as any).__placePart = (index: number) => {
  const pbs = (window as any).__pbState;
  const part = pbs.available.splice(index, 1)[0];
  pbs.placed.push(part);
  refreshPbUI();
};

(window as any).__removePart = (index: number) => {
  const pbs = (window as any).__pbState;
  const part = pbs.placed.splice(index, 1)[0];
  pbs.available.push(part);
  refreshPbUI();
};

(window as any).__checkPromptBuilder = () => {
  const pbs = (window as any).__pbState;
  const challenge = pbs.challenges[pbs.currentChallenge];
  const isCorrect = JSON.stringify(pbs.placed) === JSON.stringify(challenge.correct);

  const resultEl = document.getElementById("pb-result");
  if (isCorrect && !pbs.recorded) {
    pbs.recorded = true;
    const state = loadState();
    recordGame(state, `s${pbs.sprintId}-prompt-builder`, 100);
  }
  if (resultEl) {
    resultEl.innerHTML = isCorrect
      ? `
        <div class="terminal-card p-4 text-center">
          <div class="text-ap-green text-2xl font-bold glow-green mb-2">✓ ${t("games.complete")}</div>
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
        <div class="text-ap-red text-sm mb-2">${t("games.not-quite")}</div>
        <div class="text-ap-text-muted text-xs">${t("games.expected")}</div>
        <div class="code-block text-xs mt-1">${challenge.correct.map(escapeHtml).join("\n")}</div>
      `;
  }
};
