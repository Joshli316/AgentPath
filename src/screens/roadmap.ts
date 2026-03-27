import { loadState, updateBonusProject } from "../state";
import { t } from "../i18n";
import { loadShared } from "../content";
import { escapeHtml, localize } from "../utils";
import type { SprintMeta, BonusProject } from "../types";

export async function renderRoadmap(): Promise<string> {
  const state = loadState();
  const sprints = await loadShared<SprintMeta[]>("sprints.json");

  const sprintsHtml = sprints
    .map((sprint) => {
      const title = localize(sprint, "title");
      const project = localize(sprint, "project");
      const isComplete = !!state.projects[`s${sprint.id}`];
      const isActive = sprint.id === state.currentSprint;
      const isLocked = sprint.id > state.currentSprint;

      let status = t("roadmap.locked");
      let statusColor = "text-ap-text-muted";
      let nodeColor = "border-ap-border";
      let lineColor = "border-ap-border";

      if (isComplete) {
        status = t("roadmap.complete");
        statusColor = "text-ap-green";
        nodeColor = "border-ap-green bg-ap-green-dim";
        lineColor = "border-ap-green";
      } else if (isActive) {
        status = t("roadmap.active");
        statusColor = "text-ap-amber";
        nodeColor = "border-ap-amber bg-ap-amber-dim";
      }

      return `
        <div class="flex gap-4 ${isLocked ? "opacity-40" : ""}">
          <div class="flex flex-col items-center">
            <div class="w-8 h-8 rounded-full border-2 ${nodeColor} flex items-center justify-center text-xs font-bold ${isComplete ? "text-ap-green" : isActive ? "text-ap-amber" : "text-ap-text-muted"}">
              ${isComplete ? "✓" : sprint.id}
            </div>
            ${sprint.id < 6 ? `<div class="w-0 h-12 border-l-2 border-dashed ${lineColor}"></div>` : ""}
          </div>
          <div class="pb-8 flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-ap-text font-bold text-sm">Sprint ${sprint.id}: ${escapeHtml(title)}</span>
              <span class="${statusColor} text-xs">${status}</span>
            </div>
            <div class="text-ap-text-muted text-xs">${t("roadmap.weeks")} ${sprint.weeks} — ${escapeHtml(project)}</div>
            ${isActive ? `<a href="#/sprint/${sprint.id}" class="text-ap-green text-xs hover:underline mt-1 inline-block">${t("roadmap.view-sprint")} →</a>` : ""}
          </div>
        </div>
      `;
    })
    .join("");

  // Bonus projects
  let bonusHtml = "";
  try {
    const bonusProjects = await loadShared<BonusProject[]>("bonus-projects.json");
    const difficultyColors: Record<string, string> = {
      easy: "text-ap-green bg-ap-green-dim",
      medium: "text-ap-amber bg-ap-amber-dim",
      hard: "text-ap-red bg-ap-red-dim",
    };

    bonusHtml = bonusProjects.map((bp) => {
      const title = localize(bp, "title");
      const desc = localize(bp, "description");
      const bpStatus = state.bonusProjects[bp.id];

      return `
        <div class="terminal-card p-3">
          <div class="flex items-center justify-between mb-1">
            <span class="text-ap-text font-bold text-sm">${escapeHtml(title)}</span>
            <span class="${difficultyColors[bp.difficulty]} text-xs px-2 py-0.5 rounded">${escapeHtml(bp.difficulty)}</span>
          </div>
          <div class="text-ap-text-muted text-xs mb-2">${escapeHtml(desc)}</div>
          <div class="flex items-center justify-between">
            <div class="flex gap-1 flex-wrap">${bp.skills.map((s: string) => `<span class="text-ap-indigo text-xs bg-ap-indigo-dim px-1.5 py-0.5 rounded">${escapeHtml(s)}</span>`).join("")}</div>
            ${!bpStatus
              ? `<button onclick="window.__startBonus('${escapeHtml(bp.id)}')" class="text-ap-green text-xs border border-ap-green rounded px-2 py-1 hover:bg-ap-green-dim">${t("roadmap.start")}</button>`
              : bpStatus === "in-progress"
              ? `<button onclick="window.__completeBonus('${escapeHtml(bp.id)}')" class="text-ap-amber text-xs border border-ap-amber rounded px-2 py-1 hover:bg-ap-amber-dim">${t("roadmap.mark-complete")}</button>`
              : `<span class="text-ap-green text-xs">✓ ${t("roadmap.done")} (+200 XP)</span>`}
          </div>
        </div>
      `;
    }).join("");
  } catch {}

  return `
    <div class="text-ap-green text-sm mb-1">$ agentpath roadmap</div>
    <h1 class="text-ap-text text-xl font-bold mb-6">${t("roadmap.title")}</h1>
    <div class="ml-2">${sprintsHtml}</div>

    ${bonusHtml ? `
    <div class="mt-10">
      <div class="text-ap-green text-sm mb-1">$ agentpath bonus --list</div>
      <h2 class="text-ap-text text-lg font-bold mb-4">${t("roadmap.bonus-title")} (12)</h2>
      <div class="flex flex-col gap-3">${bonusHtml}</div>
    </div>
    ` : ""}
  `;
}

(window as any).__startBonus = (id: string) => {
  const state = loadState();
  updateBonusProject(state, id, "in-progress");
  window.dispatchEvent(new HashChangeEvent("hashchange"));
};

(window as any).__completeBonus = (id: string) => {
  const state = loadState();
  updateBonusProject(state, id, "complete");
  window.dispatchEvent(new HashChangeEvent("hashchange"));
};
