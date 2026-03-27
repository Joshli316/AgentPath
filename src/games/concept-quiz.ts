import { loadState, recordGame } from "../state";
import { t, getLang } from "../i18n";
import { loadContent } from "../content";
import { escapeHtml } from "../utils";

interface QuizData {
  "concept-quiz": {
    questions: { q: string; qZh: string; options: string[]; answer: number }[];
  };
}

export async function renderConceptQuiz(sprintId: number): Promise<string> {
  const data = await loadContent<QuizData>(`sprint-${sprintId}/games.json`);
  const lang = getLang();
  const questions = data["concept-quiz"]?.questions || [];
  if (questions.length === 0) {
    return `<div class="text-ap-text-muted text-sm">$ error: no quiz questions found for sprint ${sprintId}</div>`;
  }

  (window as any).__quizState = {
    sprintId,
    questions,
    current: 0,
    correct: 0,
    answered: false,
  };

  return renderQuestion(0, questions, lang, sprintId);
}

function renderQuestion(
  index: number,
  questions: { q: string; qZh: string; options: string[]; answer: number }[],
  lang: string,
  sprintId: number
): string {
  const q = questions[index];
  const questionText = lang === "zh" ? q.qZh : q.q;

  const optionsHtml = q.options
    .map(
      (opt, i) => `
    <button id="opt-${i}" onclick="window.__answerQuiz(${i})"
            class="terminal-card p-3 text-left text-sm text-ap-text hover:bg-ap-surface-hover transition-colors w-full">
      <span class="text-ap-green mr-2">${String.fromCharCode(65 + i)}.</span> ${escapeHtml(opt)}
    </button>
  `
    )
    .join("");

  return `
    <a href="#/sprint/${sprintId}/games" class="text-ap-text-muted text-xs hover:text-ap-green transition-colors">← ${t("games.back")}</a>
    <div class="text-ap-green text-sm mt-3 mb-1">$ agentpath quiz --question ${index + 1}/${questions.length}</div>
    <h1 class="text-ap-text text-xl font-bold mb-2">${t("games.concept-quiz")}</h1>
    <div class="text-ap-text-muted text-xs mb-6">${index + 1} / ${questions.length}</div>

    <div id="quiz-area">
      <div class="text-ap-text text-sm font-bold mb-4">${escapeHtml(questionText)}</div>
      <div class="flex flex-col gap-2">${optionsHtml}</div>
    </div>
    <div id="quiz-feedback" class="mt-4" role="status" aria-live="polite"></div>
    <div id="quiz-next" class="mt-4 hidden" role="status" aria-live="polite"></div>
  `;
}

(window as any).__answerQuiz = (selected: number) => {
  const qs = (window as any).__quizState;
  if (qs.answered) return;
  qs.answered = true;

  const q = qs.questions[qs.current];
  const isCorrect = selected === q.answer;
  if (isCorrect) qs.correct++;

  const selectedEl = document.getElementById(`opt-${selected}`);
  const correctEl = document.getElementById(`opt-${q.answer}`);

  if (isCorrect) {
    selectedEl?.classList.add("border-ap-green", "bg-ap-green-dim");
  } else {
    selectedEl?.classList.add("border-ap-red", "bg-ap-red-dim");
    correctEl?.classList.add("border-ap-green", "bg-ap-green-dim");
  }

  for (let i = 0; i < q.options.length; i++) {
    const el = document.getElementById(`opt-${i}`);
    el?.classList.add("pointer-events-none");
  }

  const feedbackEl = document.getElementById("quiz-feedback");
  if (feedbackEl) {
    feedbackEl.innerHTML = isCorrect
      ? `<div class="text-ap-green text-sm">✓ ${t("games.correct")}</div>`
      : `<div class="text-ap-red text-sm">✗ ${t("games.wrong-answer")} ${String.fromCharCode(65 + q.answer)}</div>`;
  }

  const nextEl = document.getElementById("quiz-next");
  if (nextEl) {
    nextEl.classList.remove("hidden");
    if (qs.current < qs.questions.length - 1) {
      nextEl.innerHTML = `
        <button onclick="window.__nextQuestion()"
                class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
          ${t("games.next")} →
        </button>
      `;
    } else {
      const score = Math.round((qs.correct / qs.questions.length) * 100);
      const state = loadState();
      recordGame(state, `s${qs.sprintId}-concept-quiz`, score);

      nextEl.innerHTML = `
        <div class="terminal-card p-4 text-center">
          <div class="text-ap-green text-2xl font-bold glow-green mb-2">${score}%</div>
          <div class="text-ap-text text-sm">${qs.correct}/${qs.questions.length} ${t("games.correct-count")}</div>
          <div class="flex gap-3 justify-center mt-4">
            <button onclick="window.dispatchEvent(new HashChangeEvent('hashchange'))"
                    class="text-ap-green text-sm border border-ap-green rounded px-4 py-2 hover:bg-ap-green-dim">
              ${t("games.play-again")}
            </button>
            <a href="#/sprint/${qs.sprintId}/games" class="text-ap-text-muted text-sm border border-ap-border rounded px-4 py-2 hover:bg-ap-surface-hover">
              ${t("games.back")}
            </a>
          </div>
        </div>
      `;
    }
  }
};

(window as any).__nextQuestion = () => {
  const qs = (window as any).__quizState;
  if (qs.current >= qs.questions.length - 1) return;
  qs.current++;
  qs.answered = false;
  const lang = getLang();
  const main = document.querySelector("main");
  if (main) {
    main.innerHTML = renderQuestion(qs.current, qs.questions, lang, qs.sprintId);
  }
};
