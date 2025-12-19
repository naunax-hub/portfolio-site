import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Lightbulb, Monitor, Rocket, Search, Target, ChevronDown, Play, Filter, ChevronRight, Share2, Instagram as InstaIcon, PinIcon, Database, Terminal } from 'lucide-react'

export default function App() {
  const [view, setView] = useState<string>('home')
  const [currentProject, setCurrentProject] = useState<string>('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [view])

  // NAVIGATION
  const GlobalHeader = () => (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white bg-opacity-80 backdrop-blur-md shadow-sm z-100 px-6 md:px-12 flex items-center justify-between transition-all duration-300">
      <div className="text-2xl font-bold font-serif text-black cursor-pointer" onClick={() => setView('home')}>
        DesAIn
      </div>
      <nav className="flex items-center gap-8 font-body relative">
        <div className="relative group">
          <button className="flex items-center gap-2 text-sm font-medium text-black uppercase tracking-wider hover:opacity-70 transition-opacity">
            Projects
            <ChevronDown size={14} />
          </button>
          <AnimatePresence>
            {true && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full right-0 mt-6 w-80 bg-white shadow-xl rounded-lg border border-gray-100 overflow-hidden py-2 z-50"
              >
                {[
                  { title: 'Restaurant Experience', category: 'UX/UI Design', action: () => { setCurrentProject('restaurant'); setView('project'); } },
                  { title: 'Retail Experience', category: 'UX/UI Design', action: () => { setCurrentProject('retail'); setView('project'); } },
                  { title: 'Diesel Redesign', category: 'AI Content Design', action: () => { setCurrentProject('diesel'); setView('project'); } },
                  { title: 'Art Projects', category: 'Visual Art', action: () => { setCurrentProject('art'); setView('project'); } },
                ].map((project, i) => (
                  <div
                    key={i}
                    onClick={project.action}
                    className="px-6 py-4 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0 transition-colors"
                  >
                    <h4 className="font-serif text-lg text-black mb-1">{project.title}</h4>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{project.category}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button onClick={() => setView('contact')} className="text-sm font-medium text-black uppercase tracking-wider hover:opacity-70 transition-opacity">
          Contact
        </button>
      </nav>
    </header>
  )

  // HOME PAGE
  if (view === 'home') {
    return (
      <div className="min-h-screen bg-white text-black font-body">
        <GlobalHeader />
        <main className="pt-20">
          <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-20 gap-12 overflow-hidden pt-32">
            <div className="w-full md:w-1/2 flex flex-col items-start space-y-8 z-10">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-sm md:text-base font-body italic text-gray-500 tracking-wide"
              >
                Hello, I'm Laura Memmola
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-5xl md:text-7xl font-serif font-medium leading-tight text-gray-900"
              >
                UX/UI
                <br />
                <span className="text-gray-400 italic">AI Content</span>
                <br />
                Designer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="font-body text-lg md:text-xl text-gray-600 leading-relaxed max-w-md"
              >
                Crafting digital experiences where human empathy meets artificial intelligence. Designing the future, one pixel at a time.
              </motion.p>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                onClick={() => setView('contact')}
                className="bg-black text-white px-8 py-3 rounded-md text-sm font-medium tracking-wide transition-all duration-300 font-body hover:bg-gray-800"
              >
                Contact Me
              </motion.button>
            </div>
          </section>
        </main>
        <footer className="bg-white pt-32 pb-12 border-t border-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-serif mb-12 max-w-4xl mx-auto leading-tight">
              Let's connect and share ideas and projects.
            </h2>
            <button
              onClick={() => setView('contact')}
              className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg font-medium tracking-wide hover:bg-gray-800 transition-colors font-body mb-24"
            >
              Contact Me
            </button>
          </div>
        </footer>
      </div>
    )
  }

  // PROJECT PAGES
  if (view === 'project') {
    const projectContent: Record<string, any> = {
      restaurant: {
        title: 'Restaurant Experience',
        category: 'UX/UI Design',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
        description: 'A comprehensive ecosystem for restaurant management, optimizing workflows from kitchen to front-of-house.',
      },
      retail: {
        title: 'Retail Experience',
        category: 'UX/UI Design',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
        description: 'Revolutionizing the shopping journey by blending self-scanning autonomy with mobile versatility.',
      },
      diesel: {
        title: 'Diesel Redesign',
        category: 'AI Content Design',
        image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?auto=format&fit=crop&q=80&w=800',
        description: 'Leveraging generative AI to explore new visual languages and narrative structures for modern luxury brands.',
      },
    }

    const project = projectContent[currentProject] || projectContent.restaurant

    return (
      <div className="min-h-screen bg-white text-black font-body">
        <GlobalHeader />
        <main className="pt-40 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <button
              onClick={() => setView('home')}
              className="text-black mb-12 flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              ← Back
            </button>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">{project.title}</h1>
            <p className="text-gray-400 text-lg mb-12">{project.category}</p>
            <img src={project.image} alt={project.title} className="w-full rounded-lg mb-12" />
            <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
          </div>
        </main>
      </div>
    )
  }

  // CONTACT PAGE
  if (view === 'contact') {
    return (
      <div className="min-h-screen bg-white text-black font-body">
        <GlobalHeader />
        <main className="pt-40 pb-20">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <h1 className="text-5xl md:text-7xl font-serif mb-8">Get in Touch</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              I'd love to hear from you. Let's discuss your project or just say hello!
            </p>
            <button
              onClick={() => setView('home')}
              className="text-black underline hover:no-underline transition-all"
            >
              ← Back to Home
            </button>
          </div>
        </main>
      </div>
    )
  }
}
