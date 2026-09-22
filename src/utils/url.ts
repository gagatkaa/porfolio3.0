const rawBase = import.meta.env.BASE_URL;

export const basePath = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export function withBase(path = ''): string {
  return `${basePath}${path.replace(/^\/+/, '')}`;
}
