import { loadState, saveState } from "./state";

const strings: Record<string, Record<string, string>> = {
  // Navigation
  "nav.dashboard": { en: "Dashboard", zh: "仪表盘" },
  "nav.sprint": { en: "Sprint", zh: "冲刺" },
  "nav.games": { en: "Games", zh: "游戏" },
  "nav.roadmap": { en: "Roadmap", zh: "路线图" },
  "nav.profile": { en: "Profile", zh: "个人" },

  // Dashboard
  "dash.today": { en: "Today", zh: "今天" },
  "dash.current-sprint": { en: "Current Sprint", zh: "当前冲刺" },
  "dash.day-of": { en: "Day {n} of 10", zh: "第{n}天 / 共10天" },
  "dash.xp": { en: "XP", zh: "经验值" },
  "dash.streak": { en: "day streak", zh: "天连续" },
  "dash.level": { en: "Level", zh: "等级" },

  // Sprint
  "sprint.objectives": { en: "Sprint Objectives", zh: "冲刺目标" },
  "sprint.lesson": { en: "Lesson", zh: "课程" },
  "sprint.project": { en: "Project", zh: "项目" },
  "sprint.review": { en: "Review & Games", zh: "复习与游戏" },

  // Lesson
  "lesson.complete": { en: "Mark Complete", zh: "标记完成" },
  "lesson.completed": { en: "Completed", zh: "已完成" },
  "lesson.try-it": { en: "Try it in iTerm", zh: "在iTerm中试试" },
  "lesson.key-terms": { en: "Key Terms", zh: "关键术语" },
  "lesson.min": { en: "min", zh: "分钟" },

  // Project
  "project.milestones": { en: "Milestones", zh: "里程碑" },
  "project.stuck": { en: "Stuck? Get a hint", zh: "卡住了？获取提示" },
  "project.hint": { en: "Hint", zh: "提示" },
  "project.stretch": { en: "Stretch Goals", zh: "额外目标" },
  "project.complete": { en: "Project Complete!", zh: "项目完成！" },
  "project.mark-complete": { en: "Mark Project Complete", zh: "标记项目完成" },

  // Games
  "games.select": { en: "Choose a Game", zh: "选择游戏" },
  "games.flash-match": { en: "Flash Match", zh: "闪配" },
  "games.concept-quiz": { en: "Concept Quiz", zh: "概念测验" },
  "games.prompt-builder": { en: "Prompt Builder", zh: "提示构建" },
  "games.score": { en: "Score", zh: "得分" },
  "games.best": { en: "Best", zh: "最佳" },
  "games.play-again": { en: "Play Again", zh: "再玩一次" },
  "games.back": { en: "Back to Games", zh: "返回游戏" },

  // Roadmap
  "roadmap.title": { en: "Your 12-Week Journey", zh: "你的12周旅程" },
  "roadmap.locked": { en: "Locked", zh: "未解锁" },
  "roadmap.active": { en: "Active", zh: "进行中" },
  "roadmap.complete": { en: "Complete", zh: "已完成" },

  // Profile
  "profile.skills": { en: "Skills Radar", zh: "技能雷达" },
  "profile.badges": { en: "Badges", zh: "徽章" },
  "profile.stats": { en: "Stats", zh: "统计" },
  "profile.export": { en: "Export for Resume", zh: "导出简历" },
  "profile.total-xp": { en: "Total XP", zh: "总经验值" },
  "profile.projects-done": { en: "Projects Done", zh: "完成项目" },
  "profile.days-active": { en: "Days Active", zh: "活跃天数" },
  "profile.longest-streak": { en: "Longest Streak", zh: "最长连续" },
};

let currentLang: "en" | "zh" = "en";

export function initI18n(): void {
  const state = loadState();
  currentLang = state.lang;
}

export function t(key: string, replacements?: Record<string, string | number>): string {
  const entry = strings[key];
  if (!entry) return key;
  let text = entry[currentLang] || entry.en || key;
  if (replacements) {
    for (const [k, v] of Object.entries(replacements)) {
      text = text.replace(`{${k}}`, String(v));
    }
  }
  return text;
}

export function getLang(): "en" | "zh" {
  return currentLang;
}

export function setLang(lang: "en" | "zh"): void {
  currentLang = lang;
  const state = loadState();
  state.lang = lang;
  saveState(state);
}

export function toggleLang(): void {
  setLang(currentLang === "en" ? "zh" : "en");
}
