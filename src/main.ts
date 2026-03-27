import { route, startRouter } from "./router";
import { loadState, updateStreak } from "./state";
import { initI18n, toggleLang, getLang } from "./i18n";
import { clearCache } from "./content";
import { renderNav, getNavPadding } from "./components/nav";

const app = document.getElementById("app")!;

function renderShell(content: string): string {
  return `
    <div class="${getNavPadding()} min-h-screen">
      <header class="flex items-center justify-between px-4 py-3 border-b border-ap-border md:ml-0">
        <div class="flex items-center gap-2">
          <svg viewBox="0 0 70 20" width="56" height="16" class="inline-block" role="img" aria-label="AgentPath logo">
            <title>AgentPath</title>
            <circle cx="8" cy="10" r="6" fill="#00ff88" opacity="0.3" stroke="#00ff88" stroke-width="1"/>
            <circle cx="8" cy="10" r="2" fill="#00ff88"/>
            <line x1="14" y1="10" x2="26" y2="10" stroke="#00ff88" stroke-width="1" stroke-dasharray="2,2"/>
            <circle cx="32" cy="10" r="4" fill="none" stroke="#00ff88" stroke-width="1"/>
            <line x1="36" y1="10" x2="48" y2="10" stroke="#00ff88" stroke-width="1" stroke-dasharray="2,2"/>
            <circle cx="54" cy="10" r="4" fill="none" stroke="#00ff88" stroke-width="1"/>
          </svg>
          <span class="text-ap-text font-bold text-sm">AgentPath</span>
          <span class="text-ap-green text-xs opacity-70">智路</span>
        </div>
        <button onclick="window.__toggleLang()" aria-label="Toggle language" class="text-ap-text-muted text-xs border border-ap-border rounded px-2 py-1 hover:text-ap-green hover:border-ap-green transition-colors">
          ${getLang() === "en" ? "中文" : "EN"}
        </button>
      </header>
      <main class="p-4 max-w-3xl mx-auto">
        ${content}
      </main>
    </div>
    ${renderNav()}
  `;
}

function render(content: string): void {
  app.innerHTML = renderShell(content);
}

function showLoading(): void {
  app.innerHTML = renderShell(`
    <div class="flex items-center justify-center py-20">
      <div class="text-ap-green text-sm glow-green">Loading...</div>
    </div>
  `);
}

function showError(msg: string): void {
  app.innerHTML = renderShell(`
    <div class="terminal-card p-6 text-center">
      <div class="text-ap-red text-lg font-bold mb-2">Error</div>
      <div class="text-ap-text-dim text-sm">${msg}</div>
      <a href="#/" class="text-ap-green text-sm hover:underline mt-4 inline-block">← Back to Dashboard</a>
    </div>
  `);
}

// Expose toggleLang to onclick
(window as any).__toggleLang = () => {
  toggleLang();
  clearCache();
  window.dispatchEvent(new HashChangeEvent("hashchange"));
};

// Initialize
initI18n();
const state = loadState();
updateStreak(state);

// Routes with loading states and error handling
route("/", async () => {
  showLoading();
  try {
    const { renderDashboard } = await import("./screens/dashboard");
    render(await renderDashboard());
  } catch (e) { showError("Failed to load dashboard"); }
});

route("/sprint/:id", async (params) => {
  showLoading();
  try {
    const { renderSprint } = await import("./screens/sprint");
    render(await renderSprint(Number(params.id)));
  } catch (e) { showError("Failed to load sprint"); }
});

route("/sprint/:id/lesson/:num", async (params) => {
  showLoading();
  try {
    const { renderLesson } = await import("./screens/lesson");
    render(await renderLesson(Number(params.id), params.num));
  } catch (e) { showError("Failed to load lesson"); }
});

route("/sprint/:id/project", async (params) => {
  showLoading();
  try {
    const { renderProject } = await import("./screens/project");
    render(await renderProject(Number(params.id)));
  } catch (e) { showError("Failed to load project"); }
});

route("/sprint/:id/games", (params) => {
  import("./screens/games").then(({ renderGames }) => {
    render(renderGames(Number(params.id)));
  });
});

route("/sprint/:id/games/:game", async (params) => {
  showLoading();
  try {
    const sprintId = Number(params.id);
    const game = params.game;
    if (game === "flash-match") {
      const { renderFlashMatch } = await import("./games/flash-match");
      render(await renderFlashMatch(sprintId));
    } else if (game === "concept-quiz") {
      const { renderConceptQuiz } = await import("./games/concept-quiz");
      render(await renderConceptQuiz(sprintId));
    } else if (game === "prompt-builder") {
      const { renderPromptBuilder } = await import("./games/prompt-builder");
      render(await renderPromptBuilder(sprintId));
    }
  } catch (e) { showError("Failed to load game"); }
});

route("/roadmap", async () => {
  showLoading();
  try {
    const { renderRoadmap } = await import("./screens/roadmap");
    render(await renderRoadmap());
  } catch (e) { showError("Failed to load roadmap"); }
});

route("/profile", async () => {
  showLoading();
  try {
    const { renderProfile } = await import("./screens/profile");
    render(await renderProfile());
  } catch (e) { showError("Failed to load profile"); }
});

startRouter();
