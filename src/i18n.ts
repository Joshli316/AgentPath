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
  "dash.streak": { en: "day streak", zh: "天连续学习" },
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
  "profile.days-active": { en: "Items Done", zh: "完成项数" },
  "profile.longest-streak": { en: "Longest Streak", zh: "最长连续" },
  "profile.current-streak": { en: "Current Streak", zh: "当前连续" },
  "profile.next-steps": { en: "Next Steps — Keep Growing", zh: "下一步——继续成长" },

  // Games (in-game strings)
  "games.match-instruction": { en: "Tap a term, then tap its matching definition.", zh: "点击术语，然后点击匹配的定义。" },
  "games.correct": { en: "Correct!", zh: "正确！" },
  "games.wrong-answer": { en: "Wrong — the answer is", zh: "错误——答案是" },
  "games.next": { en: "Next", zh: "下一题" },
  "games.complete": { en: "Complete!", zh: "完成！" },
  "games.time": { en: "Time", zh: "用时" },
  "games.attempts": { en: "Attempts", zh: "尝试次数" },
  "games.correct-count": { en: "correct", zh: "正确" },
  "games.match-desc": { en: "Match terms to definitions", zh: "将术语与定义匹配" },
  "games.quiz-desc": { en: "Test your knowledge", zh: "测试你的知识" },
  "games.builder-desc": { en: "Assemble API calls", zh: "组装API调用" },
  "games.check": { en: "Check", zh: "检查" },
  "games.not-quite": { en: "Not quite — try rearranging the parts.", zh: "不太对——试试重新排列。" },
  "games.expected": { en: "Expected:", zh: "预期：" },
  "games.available-parts": { en: "Available parts:", zh: "可用部分：" },
  "games.tap-to-build": { en: "Tap code parts below to build the call...", zh: "点击下方代码片段来构建调用..." },

  // Roadmap extras
  "roadmap.weeks": { en: "Weeks", zh: "周" },
  "roadmap.bonus-title": { en: "Bonus Projects", zh: "额外项目" },
  "roadmap.start": { en: "Start", zh: "开始" },
  "roadmap.mark-complete": { en: "Complete", zh: "完成" },
  "roadmap.done": { en: "Done", zh: "已完成" },
  "roadmap.view-sprint": { en: "View Sprint", zh: "查看冲刺" },

  // Dashboard extras
  "dash.xp-to-next": { en: "XP to next", zh: "经验值到下一级" },

  // Sprint extras
  "sprint.current": { en: "current", zh: "当前" },
  "sprint.day-n": { en: "Day {n}", zh: "第{n}天" },

  // Clipboard / alerts
  "alert.copied": { en: "Copied to clipboard!", zh: "已复制到剪贴板！" },
};

let currentLang: "en" | "zh" = "en";

export function initI18n(): void {
  const state = loadState();
  currentLang = state.lang;
  document.documentElement.lang = currentLang;
}

export function t(key: string, replacements?: Record<string, string | number>): string {
  const entry = strings[key];
  if (!entry) return key;
  let text = entry[currentLang] || entry.en || key;
  if (replacements) {
    for (const [k, v] of Object.entries(replacements)) {
      text = text.replaceAll(`{${k}}`, String(v));
    }
  }
  return text;
}

export function getLang(): "en" | "zh" {
  return currentLang;
}

export function setLang(lang: "en" | "zh"): void {
  currentLang = lang;
  document.documentElement.lang = lang;
  const state = loadState();
  state.lang = lang;
  saveState(state);
}

export function toggleLang(): void {
  setLang(currentLang === "en" ? "zh" : "en");
}
