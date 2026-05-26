import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
  mode?: 'word' | 'character' | 'typewriter'
  typewriterSpeed?: number
  showCursor?: boolean
}

/**
 * Versatile animated text component with three modes:
 * - 'word': Reveals text word-by-word with stagger (scroll-triggered)
 * - 'character': Reveals text character-by-character with stagger (scroll-triggered)
 * - 'typewriter': Classic typewriter effect with blinking cursor (auto-plays)
 */
export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  speed = 0.08,
  mode = 'word',
  typewriterSpeed = 30,
  showCursor = true,
}: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  // Typewriter mode state
  const [displayedText, setDisplayedText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (mode !== 'typewriter' || !isInView) return

    let index = 0
    let intervalId: any = null

    const timer = setTimeout(() => {
      intervalId = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.substring(0, index))
          index++
        } else {
          clearInterval(intervalId)
        }
      }, typewriterSpeed)
    }, delay * 1000)

    return () => {
      clearTimeout(timer)
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [text, mode, typewriterSpeed, isInView, delay])

  // Typewriter mode render
  if (mode === 'typewriter') {
    return (
      <span ref={ref} className={`inline ${className}`}>
        {displayedText}
        {showCursor && <span className="typewriter-cursor" />}
      </span>
    )
  }

  // Word / character stagger mode render
  const items = mode === 'word' ? text.split(' ') : text.split('')

  return (
    <span ref={ref} className={`inline ${className}`}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.35,
            delay: delay + i * speed,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
        >
          {item}{mode === 'word' ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  )
}
