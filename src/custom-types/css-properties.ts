export type FontSize = `${number}rem` | `${number}px`;
export type FontWeight =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | "bold"
  | "bolder"
  | "lighter"
  | "normal"
  | "inherit"
  | "initial"
  | "unset"
  | `var(--${string})`;
