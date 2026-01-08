
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Participate from './pages/Participate';
import Edition2026 from './pages/Edition2026';
import Winners2025 from './pages/Winners2025';
import Gallery from './pages/Gallery';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

// Fix: Explicitly typing PageWrapper as React.FC to ensure children prop is correctly recognized in JSX
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-nova-red selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/edition-2026" element={<PageWrapper><Edition2026 /></PageWrapper>} />
            <Route path="/laureats-2025" element={<PageWrapper><Winners2025 /></PageWrapper>} />
            <Route path="/galerie" element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/partenaires" element={<PageWrapper><Partners /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/participate" element={<PageWrapper><Participate /></PageWrapper>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <footer className="py-40 bg-nova-black text-white relative overflow-hidden">
        {/* Footer Ambient Background */}
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-nova-violet/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-20 mb-24">
            <div className="col-span-1 md:col-span-2">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-white font-black tracking-tighter text-4xl mb-10"
              >
                TECH NOVA <span className="text-nova-violet italic font-light">CHALLENGE</span>
              </motion.div>
              <p className="text-gray-500 max-sm font-light leading-relaxed text-lg">
                Le premier concours d'innovation technologique au Bénin. Nous bâtissons l'infrastructure du futur avec les talents d'aujourd'hui.
              </p>
            </div>
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-nova-violet mb-10">Exploration</h4>
              <ul className="space-y-6 text-sm font-light text-gray-400">
                <li><a href="/" className="hover:text-nova-red transition-all duration-300">Accueil</a></li>
                <li><a href="#/about" className="hover:text-nova-red transition-all duration-300">À propos</a></li>
                <li><a href="#/edition-2026" className="hover:text-nova-red transition-all duration-300">Édition 2026</a></li>
                <li><a href="#/laureats-2025" className="hover:text-nova-red transition-all duration-300">Lauréats 2025</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-nova-violet mb-10">Support</h4>
              <ul className="space-y-6 text-sm font-light text-gray-400">
                <li><a href="#/contact" className="hover:text-nova-red transition-all duration-300">Contact</a></li>
                <li><a href="#/partenaires" className="hover:text-nova-red transition-all duration-300">Partenaires</a></li>
                <li><a href="#/participate" className="hover:text-nova-red transition-all duration-300">Postuler</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.4em]">
              © 2025-2026 Tech Nova Benin. Excellence Institutionnelle.
            </div>
            <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">
              <a href="#" className="hover:text-white transition-all duration-500">Twitter</a>
              <a href="#" className="hover:text-white transition-all duration-500">Instagram</a>
              <a href="#" className="hover:text-white transition-all duration-500">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
