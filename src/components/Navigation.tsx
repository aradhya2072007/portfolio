import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Journey', href: '#learning-journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
      setMobileOpen(false)
    } else {
      setHidden(false)
    }
    setScrolled(latest > 50)
  })

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-cyan/10 shadow-[0_2px_20px_rgba(0,217,255,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-text-primary font-bold text-lg tracking-wider hover:text-cyan transition-colors"
        >
          Aradhya<span className="text-cyan">.</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-secondary text-sm font-medium hover:text-cyan transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Aradhya_Tiwari_Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/30 text-cyan text-sm font-medium hover:bg-cyan/10 hover:border-cyan/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-cyan/10 px-6 pb-6"
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-secondary text-sm font-medium hover:text-cyan transition-colors tracking-wide uppercase py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Aradhya_Tiwari_Resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/30 text-cyan text-sm font-medium w-fit"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
