import { route, startRouter } from "./router";
import { loadState, updateStreak } from "./state";
import { initI18n, toggleLang, getLang } from "./i18n";
import { clearCache } from "./content";
import { renderNav, getNavPadding } from "./components/nav";

const app = document.getElementById("app")!;

function render(content: string): void {
  app.innerHTML = `
    <div class="${getNavPadding()} min-h-screen">
      <header class="flex items-center justify-between px-4 py-3 border-b border-ap-border md:ml-0">
        <div class="flex items-center gap-2">
          <svg viewBox="0 0 70 20" width="56" height="16" class="inline-block">
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
        <button onclick="window.__toggleLang()" class="text-ap-text-muted text-xs border border-ap-border rounded px-2 py-1 hover:text-ap-green hover:border-ap-green transition-colors">
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

// Routes
route("/", async () => {
  const { renderDashboard } = await import("./screens/dashboard");
  render(await renderDashboard());
});

route("/sprint/:id", async (params) => {
  const { renderSprint } = await import("./screens/sprint");
  render(await renderSprint(Number(params.id)));
});

route("/sprint/:id/lesson/:num", async (params) => {
  const { renderLesson } = await import("./screens/lesson");
  render(await renderLesson(Number(params.id), params.num));
});

route("/sprint/:id/project", async (params) => {
  const { renderProject } = await import("./screens/project");
  render(await renderProject(Number(params.id)));
});

route("/sprint/:id/games", (params) => {
  import("./screens/games").then(({ renderGames }) => {
    render(renderGames(Number(params.id)));
  });
});

route("/sprint/:id/games/:game", async (params) => {
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
});

route("/roadmap", async () => {
  const { renderRoadmap } = await import("./screens/roadmap");
  render(await renderRoadmap());
});

route("/profile", async () => {
  const { renderProfile } = await import("./screens/profile");
  render(await renderProfile());
});

startRouter();
