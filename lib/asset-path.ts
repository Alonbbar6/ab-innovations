/** Prefixes a /public asset path with the GitHub Pages basePath when one is set. */
export function assetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
