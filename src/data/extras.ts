export type ExtraType = '3d' | 'drawing';

export interface ExtraItem {
  title: string;
  type: ExtraType;
  image?: string;
  note?: string;
}

export const extras: ExtraItem[] = [
  { title: 'car', type: '3d', note: 'Modelling & render study' },
  { title: 'bow', type: '3d', note: 'Modelling & render study' },
  { title: 'plane', type: '3d', note: 'Modelling & render study' },
  { title: 'cannon', type: 'drawing', note: 'Sketch study' },
  { title: 'tower', type: 'drawing', note: 'Sketch study' },
  { title: 'cave', type: 'drawing', note: 'Sketch study' },
];

export const extraGroups: { type: ExtraType; label: string }[] = [
  { type: '3d', label: '3d' },
  { type: 'drawing', label: 'drawing' },
];