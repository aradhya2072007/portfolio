import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, MapPin } from 'lucide-react'
import AnimatedText from './AnimatedText'

/* Lightweight floating particles (15 total, GPU-friendly) */
function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 5,
      isCoral: Math.random() > 0.7,
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle ${p.isCoral ? 'particle-coral' : ''}`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

/* Simple, static SVG doodle character with minimal float animation */
function DoodleCharacter() {
  return (
    <motion.div
      className="relative w-full max-w-[280px] md:max-w-[350px] aspect-square mx-auto"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 300 400" className="w-full h-full" fill="none">
        {/* Background glow */}
        <circle cx="150" cy="180" r="100" fill="rgba(0,217,255,0.015)" />
        
        {/* Head */}
        <circle cx="150" cy="100" r="40" stroke="#00D9FF" strokeWidth="2" fill="rgba(0,217,255,0.03)" />
        
        {/* Eyes & Smile */}
        <circle cx="138" cy="95" r="2.5" fill="#00D9FF" />
        <circle cx="162" cy="95" r="2.5" fill="#00D9FF" />
        <path d="M 138 110 Q 150 120 162 110" stroke="#00D9FF" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Neck & Body */}
        <line x1="150" y1="140" x2="150" y2="160" stroke="#00D9FF" strokeWidth="2" />
        <rect x="110" y="160" width="80" height="100" rx="8" stroke="#00D9FF" strokeWidth="2" fill="rgba(0,217,255,0.03)" />
        
        {/* Left Arm */}
        <line x1="110" y1="180" x2="70" y2="220" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round" />
        <line x1="70" y1="220" x2="60" y2="240" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round" />
        
        {/* Right Arm (waving pose) */}
        <line x1="190" y1="180" x2="225" y2="150" stroke="#FF6B5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="225" y1="150" x2="235" y2="120" stroke="#FF6B5B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="235" cy="114" r="5" stroke="#FF6B5B" strokeWidth="1.5" fill="rgba(255,107,91,0.05)" />
        
        {/* Legs */}
        <line x1="130" y1="260" x2="120" y2="330" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round" />
        <line x1="120" y1="330" x2="105" y2="345" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round" />
        <line x1="170" y1="260" x2="180" y2="330" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round" />
        <line x1="180" y1="330" x2="195" y2="345" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round" />
        
        {/* Laptop */}
        <rect x="120" y="220" width="60" height="4" rx="1" fill="#00D9FF" opacity="0.6" />
        <rect x="125" y="200" width="50" height="20" rx="2" stroke="#00D9FF" strokeWidth="1.5" fill="rgba(0,217,255,0.05)" />
        <line x1="132" y1="208" x2="148" y2="208" stroke="#00D9FF" strokeWidth="1" opacity="0.4" />
        <line x1="132" y1="213" x2="160" y2="213" stroke="#FF6B5B" strokeWidth="1" opacity="0.4" />
        
        {/* Floating code symbols (static) */}
        <text x="50" y="110" fill="#00D9FF" fontSize="13" opacity="0.25">{"</>"}</text>
        <text x="240" y="190" fill="#FF6B5B" fontSize="12" opacity="0.25">{"{}"}</text>
        <text x="45" y="240" fill="#00D9FF" fontSize="9" opacity="0.2">AI</text>
      </svg>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Radial background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,217,255,0.06)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(255,107,91,0.04)_0%,_transparent_50%)]" />
      <Particles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-8">
          {/* Text content */}
          <motion.div
            className="flex-1 md:max-w-[60%]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Location badge */}
            <motion.div
              className="flex items-center gap-2 text-text-secondary text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <MapPin size={14} className="text-coral animate-pulse" />
              <span>Pune, India</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              className="text-cyan font-semibold tracking-[0.2em] uppercase text-xs mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hello, I'm
            </motion.p>
            
            {/* Name with animated glow pulse */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-text-primary mb-3 leading-tight glow-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Aradhya Tiwari
            </motion.h1>
            
            {/* Title with gradient */}
            <motion.p
              className="text-lg md:text-xl font-medium mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <span className="text-gradient">Frontend Developer | AI Engineering Student | Exploring Vibe Coding</span>
            </motion.p>

            {/* Typewriter tagline with blinking cursor */}
            <div className="text-base md:text-lg font-light text-text-secondary leading-relaxed mb-6 max-w-lg">
              <AnimatedText
                text="I'm learning to build amazing products. Every day is a new discovery."
                mode="typewriter"
                typewriterSpeed={30}
                delay={1.2}
                showCursor={true}
              />
            </div>

            {/* Subtle sub-description */}
            <motion.p
              className="text-text-secondary text-sm mb-10 max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.8 }}
            >
              Exploring the exciting intersection of design, web development, and AI tools as a Vibe Coder.
            </motion.p>

            {/* CTA button with press feedback */}
            <motion.a
              href="#learning-journey"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-cyan/30 text-cyan text-sm font-medium btn-interactive group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Journey
              <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Doodle character - fades in from bottom */}
          <motion.div
            className="flex-1 md:max-w-[40%]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <DoodleCharacter />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with bounce */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={20} className="text-cyan/40" />
      </motion.div>
    </section>
  )
}
