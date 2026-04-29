import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1], // Custom "Linear" style easing
}

export const stagger = (delay = 0.1) => ({
  animate: {
    transition: {
      staggerChildren: delay,
    },
  },
})

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition },
}
