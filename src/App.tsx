import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [view, setView] = useState<string>('home')

  return (
    <div className="min-h-screen bg-white text-black font-body">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-white bg-opacity-80 backdrop-blur-md shadow-sm z-100 px-6 md:px-12 flex items-center justify-between">
        <div className="text-2xl font-bold font-serif text-black cursor-pointer" onClick={() => setView('home')}>
          DesAIn
        </div>
        <nav className="flex items-center gap-8 font-body">
          <button onClick={() => setView('about')} className="text-sm font-medium text-black uppercase tracking-wider hover:opacity-70 transition-opacity">
            About
          </button>
          <button onClick={() => setView('contact')} className="text-sm font-medium text-black uppercase tracking-wider hover:opacity-70 transition-opacity">
            Contact
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-20 gap-12"
            >
              <div className="w-full md:w-1/2 flex flex-col items-start space-y-8">
                <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight text-gray-900">
                  UX/UI & AI<br />
                  <span className="text-gray-400 italic">Content Designer</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-md">
                  Crafting digital experiences where human empathy meets artificial intelligence.
                </p>
                <button
                  onClick={() => setView('contact')}
                  className="bg-black text-white px-8 py-3 rounded-md text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors"
                >
                  Contact Me
                </button>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-right">
                <p className="text-gray-400 text-lg">Welcome to my portfolio</p>
              </div>
            </motion.div>
          )}
          {view === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex items-center justify-center px-6 py-20"
            >
              <div className="max-w-2xl">
                <h2 className="text-4xl font-serif mb-8">About Me</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  I'm a UX/UI designer and AI content creator passionate about building beautiful, functional digital experiences.
                </p>
                <button
                  onClick={() => setView('home')}
                  className="text-black underline hover:no-underline"
                >
                  ← Back to Home
                </button>
              </div>
            </motion.div>
          )}
          {view === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex items-center justify-center px-6 py-20"
            >
              <div className="max-w-2xl text-center">
                <h2 className="text-4xl font-serif mb-8">Get in Touch</h2>
                <p className="text-gray-600 text-lg mb-6">
                  I'd love to hear from you. Reach out to discuss your project or just say hello!
                </p>
                <button
                  onClick={() => setView('home')}
                  className="text-black underline hover:no-underline"
                >
                  ← Back to Home
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
