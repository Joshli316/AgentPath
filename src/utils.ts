import { getLang } from "./i18n";

// HTML escape to prevent XSS from JSON content
const escapeMap: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export function escapeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (ch) => escapeMap[ch]);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function localize(obj: any, field: string): string {
  const lang = getLang();
  const zhKey = `${field}Zh`;
  if (lang === "zh" && zhKey in obj) {
    return String(obj[zhKey]);
  }
  return String(obj[field] ?? "");
}

export function terminalCardHeader(label: string): string {
  return `
    <div class="terminal-card-header">
      <div class="terminal-dot terminal-dot-red" aria-hidden="true"></div>
      <div class="terminal-dot terminal-dot-yellow" aria-hidden="true"></div>
      <div class="terminal-dot terminal-dot-green" aria-hidden="true"></div>
      <span class="text-ap-text-muted text-xs ml-2">${escapeHtml(label)}</span>
    </div>`;
}
