import type { Variants, TargetAndTransition } from 'framer-motion'

/**
 * Reusable Framer Motion animation variants for consistent, smooth 60fps transitions.
 * All animations use transform + opacity only (GPU-accelerated).
 */

// Stagger container variant for orchestrating child animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

// Stagger child items that fade in from below
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

// Hover interaction for cards: subtle lift + glow
export const cardHover: TargetAndTransition = {
  scale: 1.02,
  transition: { duration: 0.25, ease: 'easeOut' as const },
}

// Tap/press feedback for buttons
export const buttonTap: TargetAndTransition = {
  scale: 0.95,
}
