function buildPixelIconSvg(grid: string[]): string {
  const w = grid[0].length;
  const h = grid.length;
  let rects = '';
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (grid[y][x] === '#') {
        rects += `<rect x="${x}" y="${y}" width="1" height="1"/>`;
      }
    }
  }
  return `<svg viewBox="0 0 ${w} ${h}" width="16" height="16" fill="currentColor" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">${rects}</svg>`;
}

const skillPixelMaps: Record<string, string[]> = {
  design: [
    '........',
    '..####..',
    '.#....#.',
    '.#.##.#.',
    '.#.##.#.',
    '.#....#.',
    '..####..',
    '...##...',
  ],
  development: [
    '#......#',
    '.#....#.',
    '..#..#..',
    '...##...',
    '..#..#..',
    '.#....#.',
    '#......#',
    '........',
  ],
    '3d': [
    '..####..',
    '.#....#.',
    '#......#',
    '#.####.#',
    '#......#',
    '#......#',
    '.#....#.',
    '..####..',
  ],
  ai: [
    '..####..',
    '.#.##.#.',
    '#.#..#.#',
    '#..##..#',
    '#..##..#',
    '#.#..#.#',
    '.#.##.#.',
    '..####..',
  ],
};

export function getSkillIcon(category: string): string {
  const map = skillPixelMaps[category];
  return map ? buildPixelIconSvg(map) : '';
}
