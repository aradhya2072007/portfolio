import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Smile, Compass, Flame } from 'lucide-react'
import { staggerContainer, staggerItem, cardHover } from '../utils/animations'

const skillCategories = [
  {
    icon: Smile,
    title: 'Comfortable With',
    description: 'Technologies I work with daily and feel confident using.',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Git/GitHub', 'REST APIs', 'Tailwind CSS'],
    color: 'cyan' as const,
  },
  {
    icon: Compass,
    title: 'Exploring',
    description: 'Concepts and tools I am building projects with right now.',
    skills: ['Python (Backend)', 'Prompt Engineering', 'AI/Automation tools', 'Data visualization', 'n8n'],
    color: 'coral' as const,
  },
  {
    icon: Flame,
    title: 'Want to Learn',
    description: 'Skills I plan to tackle next to continue my developer journey.',
    skills: ['Advanced React Patterns', 'AI Web Integration', 'Full-stack development', 'Design systems'],
    color: 'cyan' as const,
  },
]

export default function Skills() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-secondary text-sm tracking-[0.3em] uppercase mb-3">03 / Toolkit</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            <span className="text-gradient glow-text">My Skill Matrix</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Honest mapping of where I stand with different tools, libraries, and frameworks as I continue to grow.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const isCyan = category.color === 'cyan'

            return (
              <motion.div
                key={category.title}
                className="glass p-6 md:p-8 hover-lift flex flex-col justify-between"
                variants={staggerItem}
                whileHover={cardHover}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isCyan ? 'bg-cyan/10 text-cyan' : 'bg-coral/10 text-coral'}`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary uppercase tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-xs md:text-sm mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors duration-200 cursor-default ${
                        isCyan
                          ? 'border-cyan/20 text-cyan/80 bg-cyan/5 hover:border-cyan/40 hover:text-cyan'
                          : 'border-coral/20 text-coral/80 bg-coral/5 hover:border-coral/40 hover:text-coral'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
