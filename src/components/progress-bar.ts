export function progressBar(percent: number, width: number = 20): string {
  const clamped = Math.max(0, Math.min(100, percent));
  const filled = Math.round((clamped / 100) * width);
  const empty = width - filled;
  return `<span class="text-ap-green">` + "▓".repeat(filled) + `</span>` +
         `<span class="text-ap-text-muted">` + "░".repeat(empty) + `</span>`;
}

export function progressBarHtml(percent: number, label?: string): string {
  const clamped = Math.max(0, Math.min(100, percent));
  return `
    <div class="flex items-center gap-3" role="progressbar" aria-valuenow="${Math.round(clamped)}" aria-valuemin="0" aria-valuemax="100" aria-label="${label || `${Math.round(clamped)}% complete`}">
      <div class="progress-terminal text-sm whitespace-nowrap" aria-hidden="true">${progressBar(clamped, 15)}</div>
      <span class="text-ap-text-dim text-xs">${Math.round(clamped)}%</span>
      ${label ? `<span class="text-ap-text-muted text-xs">${label}</span>` : ""}
    </div>
  `;
}
