import { getLang } from "./i18n";

const cache = new Map<string, unknown>();

export async function loadContent<T>(path: string): Promise<T> {
  const lang = getLang();
  const fullPath = `content/${lang}/${path}`;

  if (cache.has(fullPath)) {
    return cache.get(fullPath) as T;
  }

  const res = await fetch(fullPath);
  if (!res.ok) {
    // Fallback to English
    const fallback = `content/en/${path}`;
    if (cache.has(fallback)) return cache.get(fallback) as T;
    const fbRes = await fetch(fallback);
    if (!fbRes.ok) throw new Error(`Content not found: ${path}`);
    const data = await fbRes.json();
    cache.set(fallback, data);
    return data as T;
  }

  const data = await res.json();
  cache.set(fullPath, data);
  return data as T;
}

export async function loadShared<T>(path: string): Promise<T> {
  const fullPath = `content/shared/${path}`;

  if (cache.has(fullPath)) {
    return cache.get(fullPath) as T;
  }

  const res = await fetch(fullPath);
  if (!res.ok) throw new Error(`Shared content not found: ${path}`);
  const data = await res.json();
  cache.set(fullPath, data);
  return data as T;
}

export function clearCache(): void {
  cache.clear();
}
