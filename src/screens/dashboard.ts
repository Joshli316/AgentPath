import { loadState, getLevelInfo } from "../state";
import { t, getLang } from "../i18n";
import { loadShared } from "../content";
import { progressBarHtml } from "../components/progress-bar";

interface SprintMeta {
  id: number;
  title: string;
  titleZh: string;
  project: string;
  projectZh: string;
  weeks: string;
  days: { day: number; type: string; ref: string }[];
}

export async function renderDashboard(): Promise<string> {
  const state = loadState();
  const sprints = await loadShared<SprintMeta[]>("sprints.json");
  const sprint = sprints[state.currentSprint - 1];
  const lang = getLang();
  const levelInfo = getLevelInfo(state);

  const sprintTitle = lang === "zh" ? sprint.titleZh : sprint.title;
  const projectTitle = lang === "zh" ? sprint.projectZh : sprint.project;
  const levelTitle = lang === "zh" ? levelInfo.current.title.split(" ")[0] : levelInfo.current.titleEn;

  const totalLessons = sprint.days.filter((d) => d.type === "lesson").length;
  const completedLessons = sprint.days
    .filter((d) => d.type === "lesson")
    .filter((d) => state.lessons[`s${sprint.id}-${d.ref}`]).length;
  const projectDone = state.projects[`s${sprint.id}`] || false;
  const sprintProgress = Math.round(
    ((completedLessons + (projectDone ? 1 : 0)) / (totalLessons + 1)) * 100
  );

  const currentDay = sprint.days[state.currentDay - 1];
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
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <div class="text-ap-green font-bold text-xl glow-green">${state.xp.toLocaleString()} <span class="text-xs font-normal">${t("dash.xp")}</span></div>
        <div class="text-ap-amber font-bold glow-amber">🔥 ${state.streak} <span class="text-xs font-normal">${t("dash.streak")}</span></div>
      </div>
      <div class="text-ap-text-dim text-sm">${t("dash.level")} ${state.level}: ${levelTitle}</div>
    </div>

    <!-- Current Sprint Card -->
    <div class="terminal-card mb-6">
      <div class="terminal-card-header">
        <div class="terminal-dot terminal-dot-red"></div>
        <div class="terminal-dot terminal-dot-yellow"></div>
        <div class="terminal-dot terminal-dot-green"></div>
        <span class="text-ap-text-muted text-xs ml-2">${t("dash.current-sprint")}</span>
      </div>
      <div class="p-4">
        <div class="flex items-center gap-2 mb-1">
          <span class="bg-ap-green-dim text-ap-green text-xs font-bold px-2 py-0.5 rounded">Sprint ${sprint.id}</span>
          <span class="text-ap-text-muted text-xs">${t("dash.day-of", { n: state.currentDay })}</span>
        </div>
        <div class="text-ap-text text-lg font-bold mb-1">${sprintTitle}</div>
        <div class="text-ap-text-dim text-sm mb-3">${projectTitle}</div>
        ${progressBarHtml(sprintProgress)}
      </div>
    </div>

    <!-- Today's Task -->
    <div class="terminal-card mb-6">
      <div class="p-4">
        <div class="text-ap-green text-xs mb-2">$ agentpath --today</div>
        <a href="${todayRoute}" class="flex items-center justify-between group">
          <div>
            <div class="text-ap-text font-bold group-hover:text-ap-green transition-colors">${todayTask}</div>
            <div class="text-ap-text-muted text-xs mt-1">${todayTime}</div>
          </div>
          <span class="text-ap-green text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>

    <!-- Level Progress -->
    <div class="terminal-card">
      <div class="p-4">
        <div class="text-ap-text-dim text-xs mb-2">${t("dash.level")} ${state.level} → ${levelInfo.next ? levelInfo.next.level : "MAX"}</div>
        ${progressBarHtml(levelInfo.progress, levelInfo.next ? `${levelInfo.next.xp - state.xp} XP to next` : "MAX LEVEL")}
      </div>
    </div>
  `;
}
