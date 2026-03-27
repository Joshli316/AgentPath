import { loadState, getLevelInfo } from "../state";
import { t, getLang } from "../i18n";
import { loadShared } from "../content";
import { progressBarHtml } from "../components/progress-bar";
import { localize, terminalCardHeader } from "../utils";
import type { SprintMeta } from "../types";

export async function renderDashboard(): Promise<string> {
  const state = loadState();
  const sprints = await loadShared<SprintMeta[]>("sprints.json");
  const sprintIdx = Math.max(0, Math.min(sprints.length - 1, state.currentSprint - 1));
  const sprint = sprints[sprintIdx];
  const lang = getLang();
  const levelInfo = getLevelInfo(state);

  const sprintTitle = localize(sprint, "title");
  const projectTitle = localize(sprint, "project");
  const levelTitle = lang === "zh" ? levelInfo.current.title.split(" ")[0] : levelInfo.current.titleEn;

  const totalLessons = sprint.days.filter((d) => d.type === "lesson").length;
  const completedLessons = sprint.days
    .filter((d) => d.type === "lesson")
    .filter((d) => state.lessons[`s${sprint.id}-${d.ref}`]).length;
  const projectDone = state.projects[`s${sprint.id}`] || false;
  const sprintProgress = Math.round(
    ((completedLessons + (projectDone ? 1 : 0)) / (totalLessons + 1)) * 100
  );

  const dayIdx = Math.max(0, Math.min(sprint.days.length - 1, state.currentDay - 1));
  const currentDay = sprint.days[dayIdx];
  let todayTask = "";
  let todayTime = "";
  let todayRoute = "";

  if (currentDay) {
    if (currentDay.type === "lesson") {
      const lessonNum = currentDay.ref.replace("lesson-", "");
      todayTask = `${t("sprint.lesson")} ${lessonNum}`;
      todayTime = "~20 " + t("lesson.min");
      todayRoute = `#/sprint/${sprint.id}/lesson/${lessonNum}`;
    } else if (currentDay.type === "project") {
      todayTask = projectTitle;
      todayTime = "~60 " + t("lesson.min");
      todayRoute = `#/sprint/${sprint.id}/project`;
    } else {
      todayTask = t("sprint.review");
      todayTime = "~30 " + t("lesson.min");
      todayRoute = `#/sprint/${sprint.id}/games`;
    }
  }

  return `
    <!-- Status bar -->
    <div class="flex items-center justify-between mb-8">
      <div class="flex items-center gap-6">
        <div class="text-ap-green font-bold text-3xl glow-green">${state.xp.toLocaleString()} <span class="text-sm font-normal">${t("dash.xp")}</span></div>
        <div class="text-ap-amber font-bold text-2xl glow-amber">🔥 ${state.streak} <span class="text-sm font-normal">${t("dash.streak")}</span></div>
      </div>
      <div class="text-ap-text-dim text-base">${t("dash.level")} ${state.level}: ${levelTitle}</div>
    </div>

    <!-- Current Sprint Card -->
    <div class="terminal-card mb-6">
      ${terminalCardHeader(t("dash.current-sprint"))}
      <div class="p-5">
        <div class="flex items-center gap-2 mb-2">
          <span class="bg-ap-green-dim text-ap-green text-sm font-bold px-2.5 py-1 rounded">Sprint ${sprint.id}</span>
          <span class="text-ap-text-muted text-sm">${t("dash.day-of", { n: state.currentDay })}</span>
        </div>
        <div class="text-ap-text text-2xl font-bold mb-1">${sprintTitle}</div>
        <div class="text-ap-text-dim text-base mb-4">${projectTitle}</div>
        ${progressBarHtml(sprintProgress)}
      </div>
    </div>

    <!-- Today's Task -->
    <div class="terminal-card mb-6">
      <div class="p-5">
        <div class="text-ap-green text-sm mb-3">$ agentpath --today</div>
        <a href="${todayRoute}" class="flex items-center justify-between group">
          <div>
            <div class="text-ap-text text-xl font-bold group-hover:text-ap-green transition-colors">${todayTask}</div>
            <div class="text-ap-text-muted text-sm mt-1">${todayTime}</div>
          </div>
          <span class="text-ap-green text-3xl group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>

    <!-- Level Progress -->
    <div class="terminal-card">
      <div class="p-5">
        <div class="text-ap-text-dim text-sm mb-2">${t("dash.level")} ${state.level} → ${levelInfo.next ? levelInfo.next.level : "MAX"}</div>
        ${progressBarHtml(levelInfo.progress, levelInfo.next ? `${levelInfo.next.xp - state.xp} ${t("dash.xp-to-next")}` : "MAX LEVEL")}
      </div>
    </div>
  `;
}
