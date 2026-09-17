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
  return `<svg viewBox="0 0 ${w} ${h}" width="24" height="24" fill="currentColor" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">${rects}</svg>`;
}

const desktopPixelMaps: Record<string, string[]> = {
  projects: [
    '........',
    '.######.',
    '#......#',
    '########',
    '#.....##',
    '#.....##',
    '#.....##',
    '.######.',
  ],
  about: [
    '..####..',
    '.#....#.',
    '.#....#.',
    '..####..',
    '...##...',
    '..####..',
    '.#....#.',
    '........',
  ],
  contact: [
    '..####..',
    '.##..##.',
    '##.##.##',
    '##....##',
    '##.##.##',
    '.##..##.',
    '..####..',
    '........',
  ],
  terminal: [
    '########',
    '#......#',
    '#..##..#',
    '#.#..#.#',
    '#.##...#',
    '#......#',
    '#......#',
    '########',
  ],
};

export function getDesktopIcon(label: string): string {
  const map = desktopPixelMaps[label];
  return map ? buildPixelIconSvg(map) : '';
}