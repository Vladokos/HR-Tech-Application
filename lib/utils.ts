// Этот код определяет утилиту cn для удобного объединения классов CSS, особенно с использованием Tailwind CSS
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
