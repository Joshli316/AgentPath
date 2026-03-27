const STORAGE_KEY = "agentpath";

export interface AppState {
  currentSprint: number;
  currentDay: number;
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string;
  lessons: Record<string, boolean>;
  milestones: Record<string, boolean>;
  projects: Record<string, boolean>;
  games: Record<string, { bestScore: number; plays: number }>;
  badges: string[];
  skills: Record<string, number>;
  lang: "en" | "zh";
  bonusProjects: Record<string, "in-progress" | "complete">;
}

const DEFAULT_STATE: AppState = {
  currentSprint: 1,
  currentDay: 1,
  xp: 0,
  level: 1,
  streak: 0,
  lastActiveDate: "",
  lessons: {},
  milestones: {},
  projects: {},
  games: {},
  badges: [],
  skills: { python: 0, "llm-apis": 0, "agent-frameworks": 0, rag: 0, mcp: 0, "multi-agent": 0 },
  lang: "en",
  bonusProjects: {},
};

const LEVELS = [
  { level: 1, title: "新手 Novice", titleEn: "Novice", xp: 0 },
  { level: 2, title: "学徒 Apprentice", titleEn: "Apprentice", xp: 1000 },
  { level: 3, title: "构建者 Builder", titleEn: "Builder", xp: 3000 },
  { level: 4, title: "工匠 Craftsman", titleEn: "Craftsman", xp: 6000 },
  { level: 5, title: "架构师 Architect", titleEn: "Architect", xp: 10000 },
  { level: 6, title: "智者 Agent Master", titleEn: "Agent Master", xp: 15000 },
];

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Validate critical fields are correct types to protect against corruption
      if (typeof parsed !== "object" || parsed === null) {
        throw new Error("Invalid state shape");
      }
      const merged = { ...DEFAULT_STATE, ...parsed };
      // Clamp numeric fields to safe ranges
      merged.xp = Math.max(0, Number(merged.xp) || 0);
      merged.level = Math.max(1, Math.min(6, Number(merged.level) || 1));
      merged.streak = Math.max(0, Number(merged.streak) || 0);
      merged.currentSprint = Math.max(1, Math.min(6, Number(merged.currentSprint) || 1));
      merged.currentDay = Math.max(1, Math.min(10, Number(merged.currentDay) || 1));
      // Ensure object fields are objects
      if (typeof merged.lessons !== "object" || merged.lessons === null) merged.lessons = {};
      if (typeof merged.milestones !== "object" || merged.milestones === null) merged.milestones = {};
      if (typeof merged.projects !== "object" || merged.projects === null) merged.projects = {};
      if (typeof merged.games !== "object" || merged.games === null) merged.games = {};
      if (typeof merged.skills !== "object" || merged.skills === null) {
        merged.skills = { ...DEFAULT_STATE.skills };
      } else {
        // Deep merge: ensure new default skill keys are present for existing users
        merged.skills = { ...DEFAULT_STATE.skills, ...merged.skills };
      }
      if (!Array.isArray(merged.badges)) merged.badges = [];
      if (typeof merged.bonusProjects !== "object" || merged.bonusProjects === null) merged.bonusProjects = {};
      // Validate lang
      if (merged.lang !== "en" && merged.lang !== "zh") merged.lang = "en";
      return merged;
    }
  } catch {
    // Corrupted localStorage — reset to defaults
    localStorage.removeItem(STORAGE_KEY);
  }
  return { ...DEFAULT_STATE };
}

export function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage full or unavailable — fail silently
    console.warn("AgentPath: unable to save state to localStorage");
  }
}

export function addXP(state: AppState, amount: number): AppState {
  state.xp = Math.max(0, state.xp + Math.max(0, amount));
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (state.xp >= LEVELS[i].xp) {
      state.level = LEVELS[i].level;
      break;
    }
  }
  saveState(state);
  return state;
}

export function updateStreak(state: AppState): AppState {
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  if (state.lastActiveDate === today) return state;

  // Calculate yesterday in local time
  const yesterdayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  const yesterday = `${yesterdayDate.getFullYear()}-${String(yesterdayDate.getMonth() + 1).padStart(2, "0")}-${String(yesterdayDate.getDate()).padStart(2, "0")}`;

  if (state.lastActiveDate === yesterday) {
    state.streak += 1;
  } else {
    state.streak = 1;
  }
  state.lastActiveDate = today;
  saveState(state);
  return state;
}

export function completeLesson(state: AppState, lessonId: string): AppState {
  if (!state.lessons[lessonId]) {
    state.lessons[lessonId] = true;
    addXP(state, 50);
    updateStreak(state);
  }
  return state;
}

export function completeMilestone(state: AppState, milestoneId: string): AppState {
  if (!state.milestones[milestoneId]) {
    state.milestones[milestoneId] = true;
    addXP(state, 100);
    updateStreak(state);
  }
  return state;
}

export function completeProject(state: AppState, sprintId: string, sprintSkills?: Record<string, number>): AppState {
  if (!state.projects[sprintId]) {
    state.projects[sprintId] = true;
    addXP(state, 300);
    const badgeMap: Record<string, string> = {
      s1: "first-agent",
      s2: "orchestrator",
      s3: "rag-master",
      s4: "protocol-builder",
      s5: "commander",
      s6: "graduate",
    };
    if (badgeMap[sprintId] && !state.badges.includes(badgeMap[sprintId])) {
      state.badges.push(badgeMap[sprintId]);
    }
    // Apply sprint skill points to radar chart
    if (sprintSkills) {
      for (const [skill, points] of Object.entries(sprintSkills)) {
        state.skills[skill] = Math.min(5, (state.skills[skill] || 0) + points);
      }
    }
    updateStreak(state);
  }
  return state;
}

export function recordGame(state: AppState, gameId: string, score: number): AppState {
  const xpEarned = Math.min(50, Math.max(10, Math.round(score / 2)));
  const existing = state.games[gameId] || { bestScore: 0, plays: 0 };
  state.games[gameId] = {
    bestScore: Math.max(existing.bestScore, score),
    plays: existing.plays + 1,
  };
  if (score === 100) {
    const quizBadgeMap: Record<string, string> = {
      "s1-concept-quiz": "api-master",
      "s2-concept-quiz": "framework-king",
      "s3-concept-quiz": "vector-hero",
      "s4-concept-quiz": "mcp-pro",
      "s5-concept-quiz": "monitor-king",
      "s6-concept-quiz": "interview-pro",
    };
    if (quizBadgeMap[gameId] && !state.badges.includes(quizBadgeMap[gameId])) {
      state.badges.push(quizBadgeMap[gameId]);
    }
  }
  addXP(state, xpEarned);
  updateStreak(state);
  return state;
}

export function updateBonusProject(state: AppState, projectId: string, status: "in-progress" | "complete"): AppState {
  state.bonusProjects[projectId] = status;
  if (status === "complete") {
    addXP(state, 200);
    updateStreak(state);
    // addXP and updateStreak already call saveState
  } else {
    saveState(state);
  }
  return state;
}

export function getLevelInfo(state: AppState) {
  const current = LEVELS.find((l) => l.level === state.level) || LEVELS[0];
  const next = LEVELS.find((l) => l.level === state.level + 1);
  const progress = next
    ? ((state.xp - current.xp) / (next.xp - current.xp)) * 100
    : 100;
  return { current, next, progress };
}

export { LEVELS };
