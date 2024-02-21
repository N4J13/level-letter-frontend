import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateImageUrl = (url: string) => {
  return `http://localhost:3333/${url}`;
};

export const initialFromUserName = (name: string) => {
  return name[0].toUpperCase();
};
