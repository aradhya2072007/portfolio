import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Brain, Sparkles, FolderGit } from 'lucide-react'
import { staggerContainer, staggerItem, cardHover } from '../utils/animations'

const learningAreas = [
  {
    icon: Code,
    title: 'Frontend Development',
    whatLabel: "What I'm Learning",
    whatText: 'React, JavaScript, HTML5, CSS3',
    whyLabel: 'Why it Matters',
    whyText: 'Building interactive, responsive web applications',
    focusLabel: 'Current Focus',
    focusText: 'Component-based architecture, state management',
    footer: { type: 'projects' as const, label: 'Related Projects', items: ['Scarlett Force', 'Tech News App', 'Smart City Dashboard'] },
    color: 'cyan' as const,
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    whatLabel: "What I'm Learning",
    whatText: 'Prompt Engineering, RCIO Framework, Agentic AI, n8n workflows',
    whyLabel: 'Why it Matters',
    whyText: 'Automating tasks and building intelligent systems',
    focusLabel: 'Current Focus',
    focusText: 'Understanding AI concepts, building automation workflows',
    footer: { type: 'tools' as const, label: "Tools I'm Exploring", items: ['n8n', 'Notion', 'LLMs (Claude, GPT)'] },
    color: 'coral' as const,
  },
  {
    icon: Sparkles,
    title: 'Vibe Coding',
    whatLabel: 'What is Vibe Coding?',
    whatText: 'A creative approach to coding where logic meets aesthetics, building interfaces that feel right',
    whyLabel: "Why I'm Interested",
    whyText: 'Combining design thinking with clean code to create delightful user experiences',
    focusLabel: 'Skills Needed',
    focusText: 'UI/UX principles, smooth animations, user feedback loops, creative problem-solving',
    footer: { type: 'approach' as const, label: 'My Approach', items: ['Learning by building projects, experimenting with interactions, seeking feedback'] },
    color: 'cyan' as const,
  },
]

function LearningCard({ area, index }: { area: typeof learningAreas[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = area.icon
  const isCyan = area.color === 'cyan'

  return (
    <motion.div
      ref={ref}
      className="glass p-8 border-l-2 relative overflow-hidden flex flex-col justify-between hover-lift"
      style={{
        borderLeftColor: isCyan ? 'rgba(0, 217, 255, 0.4)' : 'rgba(255, 107, 91, 0.4)',
      }}
      initial={{ opacity: 0, x: index === 0 ? -30 : index === 2 ? 30 : 0, y: index === 1 ? 30 : 0 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={cardHover}
    >
      <div>
        {/* Card header with icon + title */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 ${isCyan ? 'bg-cyan/10 text-cyan' : 'bg-coral/10 text-coral'}`}>
            <Icon size={20} />
          </div>
          <h3 className={`text-xl font-bold uppercase ${isCyan ? 'text-cyan' : 'text-coral'}`}>{area.title}</h3>
        </div>

        {/* Info sections */}
        <div className="space-y-4 text-sm">
          <div>
            <span className="text-text-secondary font-semibold block mb-1 text-xs uppercase tracking-wider">{area.whatLabel}</span>
            <p className="text-text-primary leading-relaxed">{area.whatText}</p>
          </div>
          <div>
            <span className="text-text-secondary font-semibold block mb-1 text-xs uppercase tracking-wider">{area.whyLabel}</span>
            <p className="text-text-primary leading-relaxed">{area.whyText}</p>
          </div>
          <div>
            <span className="text-text-secondary font-semibold block mb-1 text-xs uppercase tracking-wider">{area.focusLabel}</span>
            <p className="text-text-primary leading-relaxed">{area.focusText}</p>
          </div>
        </div>
      </div>

      {/* Footer tags */}
      <div className="mt-8 pt-4 border-t border-white/5">
        <span className="text-text-secondary text-xs uppercase tracking-wider block mb-2 flex items-center gap-1">
          {area.footer.type === 'projects' && <FolderGit size={12} className="text-cyan" />}
          {area.footer.label}
        </span>
        {area.footer.type === 'approach' ? (
          <p className="text-text-primary text-xs italic leading-relaxed">{area.footer.items[0]}</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {area.footer.items.map((item) => (
              <span
                key={item}
                className={`px-2.5 py-1 rounded-md text-xs transition-colors duration-200 ${
                  isCyan
                    ? 'bg-cyan/5 border border-cyan/10 text-cyan hover:bg-cyan/15'
                    : 'bg-coral/5 border border-coral/10 text-coral hover:bg-coral/15'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function LearningJourney() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="learning-journey" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-text-secondary text-sm tracking-[0.3em] uppercase mb-3">01 / Exploration</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase">
            <span className="text-gradient glow-text">My Learning Journey</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            I'm currently a student exploring emerging technologies. Here is how I structure my learning across frontend development, AI systems, and aesthetics.
          </p>
        </motion.div>

        {/* Cards grid with stagger */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {learningAreas.map((area, i) => (
            <LearningCard key={area.title} area={area} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
