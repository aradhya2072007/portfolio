import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll-triggered animations using Intersection Observer.
 * Triggers once when the element enters the viewport, then stops observing.
 */
export function useScrollAnimation(threshold = 0.1, rootMargin = '0px 0px -80px 0px') {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const current = ref.current
    if (!current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(current)

    return () => {
      observer.unobserve(current)
    }
  }, [threshold, rootMargin])

  return { ref, isVisible }
}
