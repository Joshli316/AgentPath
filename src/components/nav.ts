import { t } from "../i18n";
import { loadState } from "../state";

const tabs = [
  { id: "dashboard", path: "/", icon: "⌂", key: "nav.dashboard" },
  { id: "sprint", path: "/sprint/1", icon: "▶", key: "nav.sprint" },
  { id: "games", path: "/sprint/1/games", icon: "◆", key: "nav.games" },
  { id: "roadmap", path: "/roadmap", icon: "◇", key: "nav.roadmap" },
  { id: "profile", path: "/profile", icon: "○", key: "nav.profile" },
];

function getActiveTab(): string {
  const hash = window.location.hash.slice(1) || "/";
  if (hash === "/") return "dashboard";
  if (hash.includes("/games")) return "games";
  if (hash.includes("/sprint")) return "sprint";
  if (hash.includes("/roadmap")) return "roadmap";
  if (hash.includes("/profile")) return "profile";
  return "dashboard";
}

export function renderNav(): string {
  const state = loadState();
  const active = getActiveTab();

  const sprintNum = state.currentSprint;
  tabs[1].path = `/sprint/${sprintNum}`;
  tabs[2].path = `/sprint/${sprintNum}/games`;

  const tabsHtml = tabs
    .map(
      (tab) => `
      <button
        onclick="window.location.hash='${tab.path}'"
        aria-label="${t(tab.key)}"
        role="tab"
        ${active === tab.id ? 'aria-selected="true" aria-current="page"' : 'aria-selected="false"'}
        class="flex flex-col items-center gap-1 py-2 px-3 min-h-[44px] min-w-[44px] text-xs transition-colors
          ${active === tab.id ? "text-ap-green" : "text-ap-text-muted hover:text-ap-text-dim"}"
      >
        <span class="text-lg" aria-hidden="true">${tab.icon}</span>
        <span>${t(tab.key)}</span>
      </button>
    `
    )
    .join("");

  return `
    <nav aria-label="Main navigation" class="fixed bottom-0 left-0 right-0 bg-ap-surface border-t border-ap-border nav-bottom z-50
                md:fixed md:top-0 md:left-0 md:bottom-0 md:w-48 md:border-t-0 md:border-r md:flex-col">
      <div class="flex justify-around md:flex-col md:justify-start md:pt-6 md:gap-1" role="tablist" aria-label="App sections">
        ${tabsHtml}
      </div>
    </nav>
  `;
}

export function getNavPadding(): string {
  return "pb-20 md:pb-0 md:pl-48";
}
