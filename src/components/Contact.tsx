import { useRef, ComponentType } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from './Icons'
import { staggerContainer, staggerItem } from '../utils/animations'

const contactLinks = [
  { icon: Mail as ComponentType<{ size?: number; className?: string }>, label: 'aradhya2072007@gmail.com', href: 'mailto:aradhya2072007@gmail.com', type: 'email' },
  { icon: Phone as ComponentType<{ size?: number; className?: string }>, label: '+91 9329191200', href: 'tel:+919329191200', type: 'phone' },
  { icon: LinkedInIcon, label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/aradhya-tiwari-774514382/', type: 'social' },
  { icon: GitHubIcon, label: 'GitHub Profile', href: 'https://github.com/aradhya2072007', type: 'social' },
]

function ContactLink({ link }: { link: typeof contactLinks[0] }) {
  const Icon = link.icon

  return (
    <motion.a
      href={link.href}
      target={link.type === 'social' ? '_blank' : undefined}
      rel={link.type === 'social' ? 'noopener noreferrer' : undefined}
      className="glass flex items-center gap-4 p-5 md:p-6 group hover-lift"
      variants={staggerItem}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="w-12 h-12 rounded-full border border-cyan/20 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,217,255,0.3)] transition-all duration-300 flex-shrink-0">
        <Icon size={20} className="text-text-secondary group-hover:text-cyan transition-colors" />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-text-primary group-hover:text-cyan transition-colors font-medium block truncate">
          {link.label}
        </span>
        <span className="text-text-secondary text-xs capitalize">{link.type}</span>
      </div>
      {link.type === 'social' && (
        <ExternalLink size={14} className="text-text-secondary group-hover:text-cyan transition-colors flex-shrink-0" />
      )}
    </motion.a>
  )
}

export default function Contact() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          ref={titleRef}
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-text-secondary text-sm tracking-[0.3em] uppercase mb-4">06 / Contact</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-tight">
            <span className="text-text-primary">Let's</span>
            <br />
            <span className="text-coral text-glow-coral relative group cursor-default">
              Connect
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-coral transition-all duration-500 group-hover:w-full rounded-full" />
            </span>
          </h2>
          <p className="text-text-secondary mt-6 text-lg max-w-lg">
            Have a project idea or want to collaborate? I'd love to hear from you.
          </p>

          <div className="flex items-center gap-2 mt-4 text-text-secondary text-sm">
            <MapPin size={14} className="text-coral" />
            <span>Pune, India</span>
          </div>
        </motion.div>

        {/* Contact links with stagger */}
        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {contactLinks.map((link) => (
            <ContactLink key={link.label} link={link} />
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-20 pt-8 border-t border-white/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-text-secondary text-sm">
            © 2025 Aradhya Tiwari. Built with passion, React & Tailwind CSS.
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
