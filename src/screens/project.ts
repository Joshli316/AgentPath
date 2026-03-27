import { loadState, completeMilestone, completeProject } from "../state";
import { t, getLang } from "../i18n";
import { loadContent, loadShared } from "../content";
import { escapeHtml, localize } from "../utils";
import type { SprintMeta } from "../types";

interface ProjectData {
  id: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  milestones: { id: string; label: string; labelZh: string }[];
  hints: Record<string, string[]>;
  stretch: string[];
  stretchZh: string[];
}

export async function renderProject(sprintId: number): Promise<string> {
  const state = loadState();
  const project = await loadContent<ProjectData>(`sprint-${sprintId}/project.json`);
  const lang = getLang();
  const title = localize(project, "title");
  const desc = localize(project, "description");
  const projectKey = `s${sprintId}`;
  const isComplete = !!state.projects[projectKey];

  const allMilestonesDone = project.milestones.every(
    (m) => !!state.milestones[`${projectKey}-${m.id}`]
  );

  const milestonesHtml = project.milestones
    .map((m) => {
      const key = `${projectKey}-${m.id}`;
      const done = !!state.milestones[key];
      const label = localize(m, "label");
      const hints = project.hints[m.id] || [];

      return `
        <div class="terminal-card p-3 mb-2">
          <div class="flex items-center gap-3">
            <button onclick="window.__toggleMilestone('${key}', ${sprintId})"
                    role="checkbox" aria-checked="${done ? "true" : "false"}" aria-label="${escapeHtml(label)}"
                    class="w-6 h-6 border ${done ? "bg-ap-green border-ap-green text-ap-bg" : "border-ap-text-muted"} rounded text-xs flex items-center justify-center flex-shrink-0">
              ${done ? "✓" : ""}
            </button>
            <span class="text-sm ${done ? "text-ap-text-dim line-through" : "text-ap-text"}">${escapeHtml(label)}</span>
          </div>
          ${
            !done && hints.length > 0
              ? `<details class="mt-2 ml-8">
                  <summary class="text-ap-amber text-xs cursor-pointer hover:underline">${t("project.stuck")}</summary>
                  <div class="mt-2 flex flex-col gap-1">
                    ${hints.map((h, i) => `<div class="text-ap-text-dim text-xs">💡 ${t("project.hint")} ${i + 1}: ${escapeHtml(h)}</div>`).join("")}
                  </div>
                </details>`
              : ""
          }
        </div>
      `;
    })
    .join("");

  const stretchList = lang === "zh" ? project.stretchZh : project.stretch;
  const stretchHtml = stretchList
    .map((s) => `<li class="text-ap-text-dim text-sm">${escapeHtml(s)}</li>`)
    .join("");

  return `
    <a href="#/sprint/${sprintId}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">← Sprint ${sprintId}</a>
    <div class="text-ap-green text-xs mt-3 mb-1">$ agentpath project --sprint ${sprintId}</div>
    <h1 class="text-ap-text text-3xl font-bold mb-2">${escapeHtml(title)}</h1>
    <p class="text-ap-text-dim text-base mb-6">${escapeHtml(desc)}</p>

    <div class="text-ap-green text-xs font-bold uppercase mb-3">${t("project.milestones")}</div>
    ${milestonesHtml}

    ${
      allMilestonesDone && !isComplete
        ? `<button onclick="window.__completeProject('${projectKey}', ${sprintId})"
             class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm mt-4 hover:opacity-90 transition-opacity">
             ${t("project.mark-complete")}
           </button>`
        : ""
    }
    ${isComplete ? `<div class="text-ap-green font-bold text-sm mt-4">✓ ${t("project.complete")} (+300 XP)</div>` : ""}

    <div class="mt-8">
      <div class="text-ap-amber text-xs font-bold uppercase mb-2">${t("project.stretch")}</div>
      <ul class="list-disc list-inside flex flex-col gap-1">${stretchHtml}</ul>
    </div>
  `;
}

(window as any).__toggleMilestone = (key: string, _sprintId: number) => {
  const state = loadState();
  if (!state.milestones[key]) {
    completeMilestone(state, key);
  }
  window.dispatchEvent(new HashChangeEvent("hashchange"));
};

(window as any).__completeProject = async (projectKey: string, sprintId: number) => {
  const state = loadState();
  // Load sprint skills data for radar chart
  try {
    const sprints = await loadShared<SprintMeta[]>("sprints.json");
    const sprint = sprints[sprintId - 1];
    completeProject(state, projectKey, sprint?.skills);
  } catch {
    completeProject(state, projectKey);
  }
  // Advance to next sprint
  if (state.currentSprint === sprintId && sprintId < 6) {
    state.currentSprint = sprintId + 1;
    state.currentDay = 1;
    const { saveState } = await import("../state");
    saveState(state);
  }
  window.dispatchEvent(new HashChangeEvent("hashchange"));
};
