import Navigation from './components/Navigation'
import Hero from './components/Hero'
import LearningJourney from './components/LearningJourney'
import Projects from './components/Projects'
import CurrentlyLearning from './components/CurrentlyLearning'
import Skills from './components/Skills'
import About from './components/About'
import Opportunities from './components/Opportunities'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <LearningJourney />
        <Projects />
        <CurrentlyLearning />
        <Skills />
        <About />
        <Opportunities />
        <Contact />
      </main>
    </div>
  )
}
