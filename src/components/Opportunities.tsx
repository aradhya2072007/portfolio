import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckSquare } from 'lucide-react'
import { staggerContainer, staggerItem } from '../utils/animations'

const opportunities = [
  {
    title: 'Vibe Coding Roles',
    tag: 'Creative & Technical',
    description: 'Positions focusing on aesthetic logic, smooth micro-interactions, and premium UI execution.',
  },
  {
    title: 'Frontend Internships',
    tag: 'Industry Experience',
    description: 'Opportunities to collaborate with developer teams, learn modern workflows, and build web apps.',
  },
  {
    title: 'AI/ML Learning Projects',
    tag: 'Emerging Tech',
    description: 'Collaborative projects implementing LLM agents, prompt engineering frameworks, and automation.',
  },
  {
    title: 'Open Source Contributions',
    tag: 'Collaboration',
    description: 'Contributing to open public repositories to write better, cleaner code with the global community.',
  },
  {
    title: 'Freelance Projects',
    tag: 'Practical Growth',
    description: 'Designing and building landing pages, dashboards, and custom tools to solve real-world problems.',
  },
]

export default function Opportunities() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="opportunities" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-secondary text-sm tracking-[0.3em] uppercase mb-3">05 / Status</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            <span className="text-gradient glow-text">Open To Opportunities</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            I am actively looking to collaborate, learn, and build. Here is what I am currently open to.
          </p>
        </motion.div>

        {/* Opportunity checklist with stagger */}
        <motion.div
          className="glass p-6 md:p-10 space-y-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {opportunities.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex gap-4 items-start py-6 border-b border-white/5 last:border-b-0 first:pt-0 last:pb-0 group"
              variants={staggerItem}
            >
              <div className="text-cyan mt-1 flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                <CheckSquare size={20} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-text-primary font-bold text-base md:text-lg group-hover:text-cyan transition-colors duration-200">
                    {item.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan/10 text-cyan uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
