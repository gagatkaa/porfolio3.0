export type ExtraType = '3d' | 'drawing';

export interface ExtraItem {
  title: string;
  type: ExtraType;
  link?: string;
  note?: string;
}

export const extras: ExtraItem[] = [
  { title: 'vintagecar', type: '3d', link: 'https://www.artstation.com/artwork/obZraW', note: 'Modelling & render study' },
  { title: 'stylizedbow', type: '3d', link: 'https://www.artstation.com/artwork/blB8og', note: 'Modelling & render study' },
  { title: 'stylizedplane', type: '3d', link: 'https://www.artstation.com/artwork/1xxzro', note: 'Modelling & render study' },
  { title: 'colorstudy', type: 'drawing', link: 'https://www.artstation.com/artwork/EvvkVq', note: 'Sketch study' },
  { title: 'compositionstudy', type: 'drawing', link: 'https://www.artstation.com/artwork/39v3lg', note: 'Sketch study' },
  { title: 'cavecomposition', type: 'drawing', link: 'https://www.artstation.com/artwork/XgDrqY', note: 'Sketch study' },
];

export const extraGroups: { type: ExtraType; label: string }[] = [
  { type: '3d', label: '3d' },
  { type: 'drawing', label: 'drawing' },
];