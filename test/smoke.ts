/**
 * Smoke test — validates build output and JSON content integrity.
 * Run: npx tsx test/smoke.ts
 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
let passed = 0;
let failed = 0;

function assert(condition: boolean, msg: string) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${msg}`);
  } else {
    failed++;
    console.log(`  ✗ ${msg}`);
  }
}

function fileExists(path: string): boolean {
  return existsSync(join(ROOT, path));
}

function readJson(path: string): any {
  return JSON.parse(readFileSync(join(ROOT, path), "utf-8"));
}

// --- Build output ---
console.log("\nBuild output:");
assert(fileExists("dist/app.js"), "dist/app.js exists");
assert(fileExists("dist/styles.css"), "dist/styles.css exists");
assert(fileExists("dist/index.html"), "dist/index.html exists");
assert(fileExists("dist/favicon.svg"), "dist/favicon.svg exists");
assert(fileExists("dist/manifest.json"), "dist/manifest.json exists");

// --- index.html ---
console.log("\nindex.html:");
const html = readFileSync(join(ROOT, "index.html"), "utf-8");
assert(html.includes('name="viewport"'), "has viewport meta");
assert(html.includes('id="app"'), "has #app div");
assert(html.includes("app.js"), "references app.js");
assert(html.includes("styles.css"), "references styles.css");

// --- Content JSON validation ---
console.log("\nContent JSON:");
const sprints = readJson("content/shared/sprints.json");
assert(Array.isArray(sprints) && sprints.length === 6, "sprints.json has 6 sprints");
assert(sprints.every((s: any) => s.id && s.title && s.titleZh && s.days?.length === 10), "all sprints have required fields and 10 days");

const badges = readJson("content/shared/badges.json");
assert(Array.isArray(badges) && badges.length === 12, "badges.json has 12 badges");

const glossary = readJson("content/shared/glossary.json");
assert(Array.isArray(glossary) && glossary.length >= 40, `glossary.json has ${glossary.length} terms (≥40)`);

const bonusProjects = readJson("content/shared/bonus-projects.json");
assert(Array.isArray(bonusProjects) && bonusProjects.length === 12, "bonus-projects.json has 12 projects");

const nextSteps = readJson("content/shared/next-steps.json");
assert(Array.isArray(nextSteps) && nextSteps.length === 12, "next-steps.json has 12 items");

// --- Sprint 1 lessons ---
console.log("\nSprint 1 content:");
for (const lang of ["en", "zh"]) {
  for (const num of ["01", "02", "03"]) {
    const path = `content/${lang}/sprint-1/lesson-${num}.json`;
    assert(fileExists(path), `${path} exists`);
    const lesson = readJson(path);
    assert(lesson.id === `lesson-${num}`, `${path} has correct id`);
    assert(Array.isArray(lesson.steps) && lesson.steps.length >= 8, `${path} has ${lesson.steps.length} steps (≥8)`);
  }
  const projectPath = `content/${lang}/sprint-1/project.json`;
  assert(fileExists(projectPath), `${projectPath} exists`);
  const project = readJson(projectPath);
  assert(project.milestones?.length >= 3, `${projectPath} has ${project.milestones?.length} milestones`);

  const gamesPath = `content/${lang}/sprint-1/games.json`;
  assert(fileExists(gamesPath), `${gamesPath} exists`);
  const games = readJson(gamesPath);
  assert(games["flash-match"]?.pairs?.length >= 10, `${gamesPath} flash-match has ${games["flash-match"]?.pairs?.length} pairs`);
  assert(games["concept-quiz"]?.questions?.length >= 8, `${gamesPath} concept-quiz has ${games["concept-quiz"]?.questions?.length} questions`);
  assert(games["prompt-builder"]?.challenges?.length >= 1, `${gamesPath} prompt-builder has challenges`);
}

// --- Bundle size ---
console.log("\nBundle size:");
const jsSize = readFileSync(join(ROOT, "dist/app.js")).length;
const cssSize = readFileSync(join(ROOT, "dist/styles.css")).length;
assert(jsSize < 100_000, `app.js is ${(jsSize / 1024).toFixed(1)}KB (<100KB)`);
assert(cssSize < 50_000, `styles.css is ${(cssSize / 1024).toFixed(1)}KB (<50KB)`);

// --- Summary ---
console.log(`\n${"=".repeat(40)}`);
console.log(`Results: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
