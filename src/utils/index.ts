import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export const mergeCn = (...classNames: ClassValue[]) => {
  return twMerge(clsx(classNames));
};

export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
