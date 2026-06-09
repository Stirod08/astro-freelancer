export const icons = [
  "android",
  "apple",
  "card",
  "map-pin",
  "palette"
] as const;

export type IconName = typeof icons[number];
