import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function gradientText(...inputs: ClassValue[]) {
  return cn(
    "bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent",
    inputs
  )
}

export function softGlowShadow(...inputs: ClassValue[]) {
  return cn("shadow-[0_24px_55px_rgba(4,7,17,0.45)]", inputs)
}
