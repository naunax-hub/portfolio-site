
import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PROJECTS } from './constants/projects';
import ProjectDetail from './components/ProjectDetail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | string>('home');

  const handleProjectClick = (id: string) => {
    setCurrentView(id);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  return (
    <div className="antialiased selection:bg-black selection:text-white">
      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <Home key="home" onProjectSelect={handleProjectClick} />
        ) : (
          <ProjectDetail 
            key={currentView}
            project={PROJECTS[currentView]} 
            onNavigate={handleProjectClick}
            onBack={handleBackToHome}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

interface HomeProps {
  onProjectSelect: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ onProjectSelect }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <header className="px-6 py-20 md:py-40 max-w-7xl mx-auto">
        <h1 className="text-7xl md:text-[10rem] font-serif font-bold leading-none tracking-tight mb-8">
          Selected<br />Works.
        </h1>
        <p className="max-w-xl text-xl text-black/60 font-medium">
          A collection of design-led projects focusing on digital ecosystems, retail innovation, and AI-driven visual languages.
        </p>
      </header>

      <main className="px-6 pb-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40">
          {Object.values(PROJECTS).map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-40' : ''}`}
              onClick={() => onProjectSelect(project.id)}
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-gray-100">
                <img 
                  src={project.heroImage} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <span className="text-xs uppercase tracking-widest text-black/40 mb-2 block">
                {project.category}
              </span>
              <h3 className="text-3xl font-serif italic mb-2">{project.title}</h3>
              <p className="text-black/60 line-clamp-2">{project.description}</p>
              <div className="mt-4 inline-flex items-center gap-2 font-bold text-sm tracking-widest group-hover:gap-4 transition-all">
                VIEW PROJECT 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="font-serif italic text-4xl">Elegance Studio</div>
          <div className="flex gap-10 text-xs uppercase tracking-[0.2em] font-bold text-white/50">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default App;
