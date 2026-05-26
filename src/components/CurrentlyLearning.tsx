import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { staggerContainer, staggerItem } from '../utils/animations'

const currentTopics = [
  {
    title: 'Prompt Engineering',
    description: 'Understanding how to communicate with AI models effectively to generate reliable output.',
  },
  {
    title: 'RCIO Framework',
    description: 'Learning structured thinking for AI responses using Role, Context, Input, and Output.',
  },
  {
    title: 'Agentic AI',
    description: 'Exploring how autonomous AI agents can execute multi-step workflows and complex tasks.',
  },
  {
    title: 'React Hooks',
    description: 'Deep diving into useState, useEffect, and useContext for robust React state management.',
  },
  {
    title: 'Responsive Design',
    description: 'Building modern interfaces that adapt fluidly and look stunning on any screen size.',
  },
  {
    title: 'n8n Workflows',
    description: 'Creating seamless API automation and integrations without writing extensive backend code.',
  },
  {
    title: 'Web Performance',
    description: 'Learning strategies to optimize load times, image rendering, and script execution speeds.',
  },
]

export default function CurrentlyLearning() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="currently-learning" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-secondary text-sm tracking-[0.3em] uppercase mb-3">02 / Mindset</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            <span className="text-gradient glow-text">What I'm Currently Learning</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            A snapshot of the core concepts, frameworks, and methodologies I am currently focusing on to expand my skillset.
          </p>
        </motion.div>

        {/* Staggered topic cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {currentTopics.map((topic) => (
            <motion.div
              key={topic.title}
              className="glass p-5 flex items-start gap-4 hover-lift"
              variants={staggerItem}
              whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
            >
              <div className="text-cyan mt-0.5 flex-shrink-0">
                <CheckCircle size={18} />
              </div>
              <div>
                <h3 className="text-text-primary font-bold text-base mb-1">{topic.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{topic.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
