import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Folder, ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from './Icons'

const projects = [
  {
    title: 'Scarlett Force',
    description: 'A dynamic and interactive web application built with modern frontend technologies. Features responsive design, smooth animations, and intuitive user interactions.',
    tech: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    features: ['Responsive design', 'Smooth animations', 'Interactive UI'],
    github: 'https://github.com/aradhya2072007/Scarlett_Force',
    color: 'cyan' as const,
  },
  {
    title: 'Tech News App',
    description: 'A real-time tech news aggregation application that fetches and displays the latest technology news using REST APIs. Features category filtering and clean UI.',
    tech: ['React', 'REST APIs', 'JavaScript'],
    features: ['Real-time news fetching', 'Category filtering', 'Clean UI'],
    github: 'https://github.com/aradhya2072007/tech-news-app',
    color: 'coral' as const,
  },
  {
    title: 'Smart City Dashboard',
    description: 'A comprehensive dashboard displaying city metrics and analytics. Includes interactive charts, real-time data updates, and responsive layout for various devices.',
    tech: ['React', 'Data Visualization', 'JavaScript'],
    features: ['Interactive charts', 'Real-time data', 'Analytics display'],
    github: 'https://github.com/aradhya2072007/smart-city-dashboard',
    color: 'cyan' as const,
  },
  {
    title: 'StudyFlow Tracker',
    description: 'A comprehensive study tracking and productivity management tool designed to help students monitor their learning progress with task organization and analytics.',
    tech: ['React', 'JavaScript', 'Local Storage'],
    features: ['Task organization', 'Time tracking', 'Progress analytics'],
    github: 'https://github.com/aradhya2072007/studyflow-tracker',
    color: 'coral' as const,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isCyan = project.color === 'cyan'

  return (
    <motion.div
      ref={ref}
      className="glass relative overflow-hidden group cursor-default hover-lift"
      initial={{ opacity: 0, y: 40, x: index % 2 === 0 ? -20 : 20 }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
    >
      {/* Project number watermark */}
      <span className={`absolute -top-6 -right-4 text-[10rem] font-black leading-none opacity-[0.03] pointer-events-none select-none ${
        isCyan ? 'text-cyan' : 'text-coral'
      }`}>
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Top accent bar */}
      <div className={`h-1 w-full ${
        isCyan
          ? 'bg-gradient-to-r from-cyan/60 via-cyan/30 to-transparent'
          : 'bg-gradient-to-r from-coral/60 via-coral/30 to-transparent'
      }`} />

      <div className="p-8 md:p-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            isCyan ? 'bg-cyan/10 text-cyan' : 'bg-coral/10 text-coral'
          } group-hover:scale-110 transition-transform duration-300`}>
            <Folder size={22} />
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-cyan hover:border-cyan/40 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)] transition-all duration-300"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitHubIcon size={16} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-cyan hover:border-cyan/40 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)] transition-all duration-300"
              aria-label={`Open ${project.title}`}
            >
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 text-text-primary ${
          isCyan ? 'group-hover:text-cyan' : 'group-hover:text-coral'
        }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          {project.features.map((feature) => (
            <span key={feature} className="inline-flex items-center gap-1.5 text-xs text-text-secondary mr-4 mb-1">
              <span className={`w-1 h-1 rounded-full ${isCyan ? 'bg-cyan' : 'bg-coral'}`} />
              {feature}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={t}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 ${
                (i + index) % 2 === 0
                  ? 'border-cyan/20 text-cyan/70 hover:bg-cyan/10 hover:text-cyan'
                  : 'border-coral/20 text-coral/70 hover:bg-coral/10 hover:text-coral'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom hover glow */}
      <div className={`absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        isCyan
          ? 'bg-gradient-to-r from-transparent via-cyan/50 to-transparent'
          : 'bg-gradient-to-r from-transparent via-coral/50 to-transparent'
      }`} />
    </motion.div>
  )
}

export default function Projects() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-text-secondary text-sm tracking-[0.3em] uppercase mb-4">03 / Work</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase">
            <span className="text-gradient glow-text">Featured Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/aradhya2072007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan/30 text-cyan text-sm font-medium btn-interactive group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHubIcon size={18} className="text-cyan" />
            View All Projects on GitHub
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
