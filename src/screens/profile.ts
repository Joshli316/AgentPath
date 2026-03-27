import { loadState, getLevelInfo } from "../state";
import { t, getLang } from "../i18n";
import { loadShared } from "../content";
import { escapeHtml, localize, terminalCardHeader } from "../utils";
import { renderRadarChart } from "../components/radar-chart";
import { renderBadge } from "../components/badge";
import type { BadgeDef, NextStep } from "../types";

export async function renderProfile(): Promise<string> {
  const state = loadState();
  const badges = await loadShared<BadgeDef[]>("badges.json");
  const lang = getLang();
  const levelInfo = getLevelInfo(state);
  const levelTitle = lang === "zh" ? levelInfo.current.title.split(" ")[0] : levelInfo.current.titleEn;

  const badgesHtml = badges
    .map((b) => renderBadge(b, state.badges.includes(b.id)))
    .join("");

  const projectsDone = Object.values(state.projects).filter(Boolean).length;
  const daysActive = Object.keys(state.lessons).length + Object.keys(state.milestones).length;

  // Next steps section
  let nextStepsHtml = "";
  try {
    const nextSteps = await loadShared<NextStep[]>("next-steps.json");
    const categoryColors: Record<string, string> = {
      "Certification": "text-ap-green bg-ap-green-dim",
      "Community": "text-ap-indigo bg-ap-indigo-dim",
      "Portfolio": "text-ap-amber bg-ap-amber-dim",
      "Personal Brand": "text-ap-amber bg-ap-amber-dim",
      "Networking": "text-ap-indigo bg-ap-indigo-dim",
      "Skill Depth": "text-ap-green bg-ap-green-dim",
      "Emerging Tech": "text-ap-red bg-ap-red-dim",
      "Research": "text-ap-indigo bg-ap-indigo-dim",
      "Career": "text-ap-amber bg-ap-amber-dim",
      "Mastery": "text-ap-green bg-ap-green-dim",
      "Deep Understanding": "text-ap-red bg-ap-red-dim",
    };

    nextStepsHtml = nextSteps.map((ns, i) => {
      const title = localize(ns, "title");
      const desc = localize(ns, "description");
      const cat = localize(ns, "category");
      const colorClass = categoryColors[ns.category] || "text-ap-text-muted bg-ap-surface";

      return `
        <div class="terminal-card p-3">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-ap-green text-xs font-bold">${String(i + 1).padStart(2, "0")}.</span>
            <span class="text-ap-text font-bold text-sm">${escapeHtml(title)}</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <span class="${colorClass} text-xs px-1.5 py-0.5 rounded">${escapeHtml(cat)}</span>
            ${ns.url ? `<a href="${escapeHtml(ns.url)}" target="_blank" rel="noopener" class="text-ap-indigo text-xs hover:underline">Link →</a>` : ""}
          </div>
          <div class="text-ap-text-muted text-xs">${escapeHtml(desc)}</div>
        </div>
      `;
    }).join("");
  } catch (e) { console.warn("Failed to load next-steps.json", e); }

  return `
    <div class="text-ap-green text-sm mb-1">$ agentpath profile</div>
    <div class="flex items-center gap-3 mb-6">
      <div class="w-12 h-12 rounded-full bg-ap-green-dim border border-ap-green flex items-center justify-center text-ap-green font-bold text-lg">${state.level}</div>
      <div>
        <div class="text-ap-text font-bold">${t("dash.level")} ${state.level}: ${levelTitle}</div>
        <div class="text-ap-text-dim text-xs">${state.xp.toLocaleString()} ${t("dash.xp")}</div>
      </div>
    </div>

    <!-- Skills Radar -->
    <div class="terminal-card mb-6">
      ${terminalCardHeader(t("profile.skills"))}
      <div class="p-4">${renderRadarChart(state.skills)}</div>
    </div>

    <!-- Badges -->
    <div class="mb-6">
      <div class="text-ap-green text-xs font-bold uppercase mb-3">${t("profile.badges")}</div>
      <div class="grid grid-cols-3 gap-2" role="list" aria-label="${t("profile.badges")}">${badgesHtml}</div>
    </div>

    <!-- Stats -->
    <div class="terminal-card mb-6">
      <div class="p-4">
        <div class="text-ap-green text-xs font-bold uppercase mb-3">${t("profile.stats")}</div>
        <div class="grid grid-cols-2 gap-3">
          <div class="text-center">
            <div class="text-ap-green text-xl font-bold">${state.xp.toLocaleString()}</div>
            <div class="text-ap-text-muted text-xs">${t("profile.total-xp")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-amber text-xl font-bold">${state.streak}</div>
            <div class="text-ap-text-muted text-xs">${t("profile.current-streak")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-text text-xl font-bold">${projectsDone}</div>
            <div class="text-ap-text-muted text-xs">${t("profile.projects-done")}</div>
          </div>
          <div class="text-center">
            <div class="text-ap-text text-xl font-bold">${daysActive}</div>
            <div class="text-ap-text-muted text-xs">${t("profile.days-active")}</div>
          </div>
        </div>
      </div>
    </div>

    ${nextStepsHtml ? `
    <!-- Next Steps -->
    <div class="mb-6">
      <div class="text-ap-green text-xs font-bold uppercase mb-3">${t("profile.next-steps")}</div>
      <div class="flex flex-col gap-2">${nextStepsHtml}</div>
    </div>
    ` : ""}

    <!-- Export -->
    <button onclick="window.__exportResume()"
            class="w-full border border-ap-green text-ap-green py-3 rounded text-sm hover:bg-ap-green-dim transition-colors">
      ${t("profile.export")}
    </button>
  `;
}

(window as any).__exportResume = () => {
  const state = loadState();
  const levelInfo = getLevelInfo(state);
  const text = `AgentPath 智路 — Skills Summary\nLevel: ${state.level} (${levelInfo.current.titleEn})\nXP: ${state.xp}\nSkills: Python ${state.skills.python}/5, LLM APIs ${state.skills["llm-apis"]}/5, Agent Frameworks ${state.skills["agent-frameworks"]}/5, RAG ${state.skills.rag}/5, MCP ${state.skills.mcp}/5, Multi-Agent ${state.skills["multi-agent"]}/5`;

  navigator.clipboard.writeText(text).then(() => {
    alert(t("alert.copied"));
  }).catch(() => {
    alert("Clipboard access denied / 剪贴板访问被拒绝");
  });
};
