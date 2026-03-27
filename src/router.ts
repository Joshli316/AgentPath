type RouteHandler = (params: Record<string, string>) => void;

interface Route {
  pattern: RegExp;
  keys: string[];
  handler: RouteHandler;
}

const routes: Route[] = [];

export function route(path: string, handler: RouteHandler): void {
  const keys: string[] = [];
  const pattern = new RegExp(
    "^" +
      path
        .replace(/:(\w+)/g, (_, key) => {
          keys.push(key);
          return "([^/]+)";
        })
        .replace(/\//g, "\\/") +
      "$"
  );
  routes.push({ pattern, keys, handler });
}

export function navigate(path: string): void {
  window.location.hash = path;
}

export function startRouter(): void {
  const handleRoute = () => {
    const hash = window.location.hash.slice(1) || "/";
    for (const r of routes) {
      const match = hash.match(r.pattern);
      if (match) {
        const params: Record<string, string> = {};
        r.keys.forEach((key, i) => {
          params[key] = match[i + 1];
        });
        r.handler(params);
        return;
      }
    }
    // Default to dashboard
    navigate("/");
  };

  window.addEventListener("hashchange", handleRoute);
  handleRoute();
}
