import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Quote } from 'lucide-react'
import { cardHover } from '../utils/animations'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-secondary text-sm tracking-[0.3em] uppercase mb-3">04 / Story</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            <span className="text-gradient glow-text">About Me & Education</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* About Me narrative */}
          <motion.div
            className="lg:col-span-7 glass p-8 relative overflow-hidden h-full flex flex-col justify-center hover-lift"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={cardHover}
          >
            <Quote size={40} className="text-cyan/10 absolute -top-2 -left-2" />
            <h3 className="text-lg font-bold text-cyan mb-4 uppercase tracking-wider flex items-center gap-2">
              My Philosophy
            </h3>
            <p className="text-text-primary text-sm md:text-base leading-relaxed mb-4">
              I'm passionate about learning and building projects that solve real problems. I love experimenting with new technologies, especially at the intersection of AI and web development.
            </p>
            <p className="text-text-primary text-sm md:text-base leading-relaxed mb-4">
              As a <strong className="text-cyan">Vibe Coder</strong>, I believe code should not just work—it should feel right. I'm excited about open-source, creative coding, and working with teams that push the boundaries of what's possible.
            </p>
            <p className="text-text-primary text-sm md:text-base leading-relaxed italic text-cyan/90">
              "Every bug is a learning opportunity, and every feature is a chance to create something meaningful."
            </p>
          </motion.div>

          {/* Education Details Card */}
          <motion.div
            className="lg:col-span-5 glass p-8 border-l-2 border-l-coral/40 relative overflow-hidden hover-lift"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={cardHover}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-bold text-coral uppercase tracking-wider">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-text-primary font-bold text-lg leading-tight">
                  Newton School of Technology
                </h4>
                <p className="text-cyan text-sm font-medium mt-1">
                  B.Tech in Computer Science (ADYPU)
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral/10 border border-coral/20 text-coral text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
                Currently Pursuing
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-text-secondary text-xs uppercase tracking-wider block mb-1">
                  Primary Focus
                </span>
                <p className="text-text-primary text-xs leading-relaxed">
                  Web development fundamentals and emerging AI technologies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
