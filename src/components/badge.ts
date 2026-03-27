import { localize, escapeHtml } from "../utils";
import type { BadgeDef } from "../types";

export function renderBadge(badge: BadgeDef, earned: boolean): string {
  const name = localize(badge, "name");
  const desc = localize(badge, "desc");
  const icon = badge.type === "project" ? "🏆" : "⭐";

  return `
    <div class="${earned ? "badge-earned" : "badge-locked"} rounded-lg p-3 text-center">
      <div class="text-lg mb-1" aria-hidden="true">${earned ? icon : "🔒"}</div>
      <div class="text-xs font-bold">${escapeHtml(name)}</div>
      <div class="text-xs opacity-70 mt-1">${escapeHtml(desc)}</div>
    </div>
  `;
}
