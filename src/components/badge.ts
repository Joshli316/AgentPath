import { localize, escapeHtml } from "../utils";
import type { BadgeDef } from "../types";

export function renderBadge(badge: BadgeDef, earned: boolean): string {
  const name = localize(badge, "name");
  const desc = localize(badge, "desc");
  const icon = badge.type === "project" ? "🏆" : "⭐";
  const statusText = earned ? "Earned" : "Locked";

  return `
    <div class="${earned ? "badge-earned" : "badge-locked"} rounded-lg p-3 text-center" role="listitem" aria-label="${escapeHtml(name)} — ${statusText}">
      <div class="text-lg mb-1" aria-hidden="true">${earned ? icon : "🔒"}</div>
      <div class="text-xs font-bold">${escapeHtml(name)}</div>
      <div class="text-xs opacity-70 mt-1">${escapeHtml(desc)}</div>
      <span class="sr-only">${statusText}</span>
    </div>
  `;
}
