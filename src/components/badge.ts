import { getLang } from "../i18n";

interface BadgeDef {
  id: string;
  name: string;
  nameZh: string;
  sprint: number;
  type: string;
  desc: string;
  descZh: string;
}

export function renderBadge(badge: BadgeDef, earned: boolean): string {
  const lang = getLang();
  const name = lang === "zh" ? badge.nameZh : badge.name;
  const desc = lang === "zh" ? badge.descZh : badge.desc;
  const icon = badge.type === "project" ? "🏆" : "⭐";

  return `
    <div class="${earned ? "badge-earned" : "badge-locked"} rounded-lg p-3 text-center">
      <div class="text-lg mb-1">${earned ? icon : "🔒"}</div>
      <div class="text-xs font-bold">${name}</div>
      <div class="text-xs opacity-70 mt-1">${desc}</div>
    </div>
  `;
}
