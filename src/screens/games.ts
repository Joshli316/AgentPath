import { loadState } from "../state";
import { t } from "../i18n";

export function renderGames(sprintId: number): string {
  const state = loadState();

  const games = [
    {
      id: "flash-match",
      icon: "⚡",
      name: t("games.flash-match"),
      desc: t("games.match-desc"),
      route: `#/sprint/${sprintId}/games/flash-match`,
      best: state.games[`s${sprintId}-flash-match`]?.bestScore,
    },
    {
      id: "concept-quiz",
      icon: "🧠",
      name: t("games.concept-quiz"),
      desc: t("games.quiz-desc"),
      route: `#/sprint/${sprintId}/games/concept-quiz`,
      best: state.games[`s${sprintId}-concept-quiz`]?.bestScore,
    },
    {
      id: "prompt-builder",
      icon: "🔧",
      name: t("games.prompt-builder"),
      desc: t("games.builder-desc"),
      route: `#/sprint/${sprintId}/games/prompt-builder`,
      best: state.games[`s${sprintId}-prompt-builder`]?.bestScore,
    },
  ];

  const cardsHtml = games
    .map(
      (g) => `
    <a href="${g.route}" class="terminal-card p-4 hover:bg-ap-surface-hover transition-colors block">
      <div class="flex items-center gap-3">
        <div class="text-2xl">${g.icon}</div>
        <div class="flex-1">
          <div class="text-ap-text font-bold text-sm">${g.name}</div>
          <div class="text-ap-text-muted text-xs">${g.desc}</div>
        </div>
        ${g.best !== undefined ? `<div class="text-ap-green text-xs">${t("games.best")}: ${g.best}%</div>` : ""}
      </div>
    </a>
  `
    )
    .join("");

  return `
    <a href="#/sprint/${sprintId}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">← Sprint ${sprintId}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath games --sprint ${sprintId}</div>
    <h1 class="text-ap-text text-3xl font-bold mb-6">${t("games.select")}</h1>
    <div class="flex flex-col gap-3">${cardsHtml}</div>
  `;
}
