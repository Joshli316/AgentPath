import { loadState, saveState, completeLesson } from "../state";
import { t, getLang } from "../i18n";
import { loadContent } from "../content";
import { escapeHtml, localize, terminalCardHeader } from "../utils";

interface LessonStep {
  type: "text" | "code" | "callout" | "try-it" | "key-terms";
  content?: string;
  language?: string;
  variant?: "tip" | "warning" | "info";
  prompt?: string;
  terms?: { term: string; termZh: string; definition: string; definitionZh: string }[];
}

interface Lesson {
  id: string;
  title: string;
  titleZh: string;
  duration: number;
  steps: LessonStep[];
}

function renderStep(step: LessonStep): string {
  const lang = getLang();

  switch (step.type) {
    case "text":
      return `<div class="text-ap-text text-sm leading-relaxed mb-4">${escapeHtml(step.content || "")}</div>`;

    case "code":
      return `
        <div class="code-block mb-4">
          <div class="text-ap-text-muted text-xs mb-2">${escapeHtml(step.language || "code")}</div>
          <pre><code>${escapeHtml(step.content || "")}</code></pre>
        </div>
      `;

    case "callout": {
      const colors: Record<string, string> = {
        tip: "border-ap-green bg-ap-green-dim",
        warning: "border-ap-amber bg-ap-amber-dim",
        info: "border-ap-indigo bg-ap-indigo-dim",
      };
      const icons: Record<string, string> = { tip: "💡", warning: "⚠️", info: "ℹ️" };
      const variant = step.variant || "info";
      return `
        <div class="border-l-2 ${colors[variant]} p-3 rounded-r mb-4">
          <div class="text-sm">${icons[variant]} ${escapeHtml(step.content || "")}</div>
        </div>
      `;
    }

    case "try-it":
      return `
        <div class="terminal-card mb-4">
          ${terminalCardHeader("iTerm")}
          <div class="p-3">
            <div class="text-ap-green text-xs mb-2">$ ${t("lesson.try-it")}</div>
            <div class="text-ap-text text-sm font-mono">${escapeHtml(step.prompt || "")}</div>
          </div>
        </div>
      `;

    case "key-terms":
      return `
        <div class="mb-4">
          <div class="text-ap-green text-xs font-bold mb-2 uppercase">${t("lesson.key-terms")}</div>
          <div class="flex flex-col gap-2">
            ${(step.terms || [])
              .map(
                (term) => `
              <div class="terminal-card p-2">
                <span class="text-ap-green font-bold text-sm">${escapeHtml(lang === "zh" ? term.termZh : term.term)}</span>
                <span class="text-ap-text-muted text-xs ml-2">— ${escapeHtml(lang === "zh" ? term.definitionZh : term.definition)}</span>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;

    default:
      return "";
  }
}

export async function renderLesson(sprintId: number, lessonNum: string): Promise<string> {
  const state = loadState();
  const lesson = await loadContent<Lesson>(`sprint-${sprintId}/lesson-${lessonNum.padStart(2, "0")}.json`);
  const lang = getLang();
  const title = localize(lesson, "title");
  const lessonKey = `s${sprintId}-lesson-${lessonNum.padStart(2, "0")}`;
  const isCompleted = !!state.lessons[lessonKey];

  const stepsHtml = lesson.steps.map(renderStep).join("");

  return `
    <a href="#/sprint/${sprintId}" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">← Sprint ${sprintId}</a>
    <div class="flex items-center gap-3 mt-3 mb-1">
      <span class="text-ap-green text-xs">${t("sprint.lesson")} ${lessonNum}</span>
      <span class="text-ap-text-muted text-xs">~${lesson.duration} ${t("lesson.min")}</span>
    </div>
    <h1 class="text-ap-text text-xl font-bold mb-6">${title}</h1>

    ${stepsHtml}

    <div class="mt-8 mb-4">
      ${
        isCompleted
          ? `<div class="text-ap-green text-sm font-bold">✓ ${t("lesson.completed")} (+50 XP)</div>`
          : `<button onclick="window.__completeLesson('${lessonKey}', ${sprintId})"
               class="w-full bg-ap-green text-ap-bg font-bold py-3 rounded text-sm hover:opacity-90 transition-opacity">
               ${t("lesson.complete")}
             </button>`
      }
    </div>
  `;
}

// Expose to onclick
(window as any).__completeLesson = (lessonKey: string, sprintId: number) => {
  const state = loadState();
  completeLesson(state, lessonKey);
  if (sprintId === state.currentSprint) {
    const lessonsInSprint = Object.keys(state.lessons).filter((k) => k.startsWith(`s${sprintId}-`)).length;
    state.currentDay = Math.min(lessonsInSprint + 1, 10);
    saveState(state);
  }
  window.dispatchEvent(new HashChangeEvent("hashchange"));
};
