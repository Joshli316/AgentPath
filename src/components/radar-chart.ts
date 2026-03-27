export function renderRadarChart(skills: Record<string, number>, maxValue: number = 5): string {
  const labels: { key: string; label: string }[] = [
    { key: "python", label: "Python" },
    { key: "llm-apis", label: "LLM APIs" },
    { key: "agent-frameworks", label: "Agents" },
    { key: "rag", label: "RAG" },
    { key: "mcp", label: "MCP" },
    { key: "multi-agent", label: "Multi-Agent" },
  ];

  const cx = 150, cy = 150, r = 100;
  const n = labels.length;

  function polarToCart(angle: number, radius: number): [number, number] {
    const a = (angle - 90) * (Math.PI / 180);
    return [cx + radius * Math.cos(a), cy + radius * Math.sin(a)];
  }

  const rings = [0.2, 0.4, 0.6, 0.8, 1.0];
  const gridLines = rings
    .map((ring) => {
      const points = labels
        .map((_, i) => {
          const angle = (360 / n) * i;
          return polarToCart(angle, r * ring).join(",");
        })
        .join(" ");
      return `<polygon points="${points}" fill="none" stroke="#334155" stroke-width="0.5"/>`;
    })
    .join("");

  const axes = labels
    .map((_, i) => {
      const angle = (360 / n) * i;
      const [x, y] = polarToCart(angle, r);
      return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#334155" stroke-width="0.5"/>`;
    })
    .join("");

  const dataPoints = labels
    .map((l, i) => {
      const val = (skills[l.key] || 0) / maxValue;
      const angle = (360 / n) * i;
      return polarToCart(angle, r * val).join(",");
    })
    .join(" ");

  const labelEls = labels
    .map((l, i) => {
      const angle = (360 / n) * i;
      const [x, y] = polarToCart(angle, r + 20);
      const anchor = x < cx - 10 ? "end" : x > cx + 10 ? "start" : "middle";
      const val = skills[l.key] || 0;
      return `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="#94a3b8" font-size="10" font-family="monospace">${l.label} (${val})</text>`;
    })
    .join("");

  const dots = labels
    .map((l, i) => {
      const val = (skills[l.key] || 0) / maxValue;
      const angle = (360 / n) * i;
      const [x, y] = polarToCart(angle, r * val);
      return `<circle cx="${x}" cy="${y}" r="3" fill="#00ff88"/>`;
    })
    .join("");

  const a11yTable = labels
    .map((l) => `<tr><td>${l.label}</td><td>${skills[l.key] || 0} / ${maxValue}</td></tr>`)
    .join("");

  return `
    <svg viewBox="0 0 300 300" class="mx-auto w-full max-w-[300px]" role="img" aria-label="Skills radar chart showing levels for ${labels.map(l => l.label).join(', ')}">
      <title>Skills Radar</title>
      <desc>${labels.map(l => `${l.label}: ${skills[l.key] || 0}/${maxValue}`).join(', ')}</desc>
      ${gridLines}
      ${axes}
      <polygon points="${dataPoints}" fill="rgba(0,255,136,0.15)" stroke="#00ff88" stroke-width="1.5"/>
      ${dots}
      ${labelEls}
    </svg>
    <table class="sr-only" aria-label="Skills data">
      <thead><tr><th>Skill</th><th>Level</th></tr></thead>
      <tbody>${a11yTable}</tbody>
    </table>
  `;
}
