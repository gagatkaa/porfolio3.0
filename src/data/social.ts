export interface SocialLink {
  label: string;
  url: string;
  display: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'github', url: 'https://github.com/gagatkaa', display: 'github.com/gagatkaa' },
  { label: 'linkedin', url: 'https://www.linkedin.com/in/agata-tomaszewska-136a66249/', display: 'linkedin.com/in/agata-tomaszewska' },
  { label: 'linktree', url: 'https://linktr.ee/atomaszewska', display: 'linktr.ee/atomaszewska' },
  { label: 'cv', url: '', display: 'open CV' },
];

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

const pixelMaps: Record<string, string[]> = {
  github: [
    '..####..',
    '.##..##.',
    '##.##.##',
    '##....##',
    '##.##.##',
    '.##..##.',
    '..####..',
    '...##...',
  ],
  linkedin: [
    '.######.',
    '.##.....',
    '.##.###.',
    '.##...##',
    '.##...##',
    '.##...##',
    '.##..##.',
    '..###...',
  ],
  linktree: [
    '...##...',
    '..####..',
    '.######.',
    '.##..##.',
    '...##...',
    '...##...',
    '..####..',
    '..####..',
  ],
  mail: [
    '..####..',
    '.##..##.',
    '##.##.##',
    '##....##',
    '##.##.##',
    '.##..##.',
    '..####..',
    '........',
  ],
  cv: [
    '.#####..',
    '##...##.',
    '##.###..',
    '##...##.',
    '##.###..',
    '##...##.',
    '##...##.',
    '.#####..',
  ],
};

export function getSocialIcon(label: string): string {
  const map = pixelMaps[label];
  return map ? buildPixelIconSvg(map) : '';
}
