import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateImageUrl = (url: string) => {
  return `http://localhost:3333/${url}`;
};

export const firstLetterUppercase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
} 

