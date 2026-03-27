import { loadState } from "../state";
import { t } from "../i18n";
import { loadShared } from "../content";
import { localize } from "../utils";
import type { SprintMeta } from "../types";

export async function renderSprint(sprintId: number): Promise<string> {
  const state = loadState();
  const sprints = await loadShared<SprintMeta[]>("sprints.json");
  const sprint = sprints[sprintId - 1];
  if (!sprint) return `<div class="text-ap-red">Sprint not found</div>`;

  const title = localize(sprint, "title");
  const project = localize(sprint, "project");

  const daysHtml = sprint.days
    .map((day) => {
      let icon = "📖";
      let label = t("sprint.lesson");
      let route = `#/sprint/${sprintId}/lesson/${day.ref.replace("lesson-", "")}`;
      let completed = false;

      if (day.type === "lesson") {
        completed = !!state.lessons[`s${sprintId}-${day.ref}`];
      } else if (day.type === "project") {
        icon = "🔨";
        label = t("sprint.project");
        route = `#/sprint/${sprintId}/project`;
        completed = !!state.projects[`s${sprintId}`];
      } else {
        icon = "◆";
        label = t("sprint.review");
        route = `#/sprint/${sprintId}/games`;
      }

      const isCurrent = day.day === state.currentDay && sprintId === state.currentSprint;
      const isLocked = sprintId > state.currentSprint;

      return `
        <a href="${isLocked ? "#" : route}"
           class="terminal-card p-3 flex items-center gap-3 ${isCurrent ? "ring-1 ring-ap-green" : ""} ${isLocked ? "opacity-40 cursor-not-allowed" : "hover:bg-ap-surface-hover cursor-pointer"} transition-colors">
          <div class="text-lg w-8 text-center">${completed ? '<span class="text-ap-green">✓</span>' : icon}</div>
          <div class="flex-1">
            <div class="text-ap-text text-sm font-bold">${t("dash.day-of", { n: day.day }).split("/")[0].trim()}</div>
            <div class="text-ap-text-muted text-xs">${label}</div>
          </div>
          ${isCurrent ? `<span class="text-ap-green text-xs">← ${t("sprint.current")}</span>` : ""}
        </a>
      `;
    })
    .join("");

  return `
    <div class="text-ap-green text-sm mb-1">$ agentpath sprint ${sprintId}</div>
    <div class="flex items-center gap-2 mb-1">
      <span class="bg-ap-green-dim text-ap-green text-xs font-bold px-2 py-0.5 rounded">Sprint ${sprintId}</span>
      <span class="text-ap-text-muted text-xs">Weeks ${sprint.weeks}</span>
    </div>
    <h1 class="text-ap-text text-2xl font-bold mb-1">${title}</h1>
    <p class="text-ap-text-dim text-sm mb-6">${t("sprint.project")}: ${project}</p>

    <div class="flex flex-col gap-2">
      ${daysHtml}
    </div>
  `;
}
