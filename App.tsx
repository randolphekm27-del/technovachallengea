import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Youtube, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Participate from './pages/Participate';
import Edition2026 from './pages/Edition2026';
import Winners2025 from './pages/Winners2025';
import Gallery from './pages/Gallery';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';

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
            <Route path="/deroulement" element={<PageWrapper><Edition2026 /></PageWrapper>} />
            <Route path="/laureats-2025" element={<PageWrapper><Winners2025 /></PageWrapper>} />
            <Route path="/galerie" element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/partenaires" element={<PageWrapper><Partners /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/participate" element={<PageWrapper><Participate /></PageWrapper>} />
            <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
            <Route path="/admin" element={<PageWrapper><Admin /></PageWrapper>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <footer className="py-32 md:py-40 bg-nova-black text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-nova-violet/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 md:gap-20 mb-24">
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-white font-black tracking-tighter text-3xl md:text-4xl mb-8"
              >
                TECH NOVA <span className="text-nova-violet italic font-light">CHALLENGE</span>
              </motion.div>
              <p className="text-gray-500 max-w-sm font-light leading-relaxed text-base md:text-lg">
                Le premier concours d'innovation technologique au Bénin. Nous bâtissons l'infrastructure du futur avec les talents d'aujourd'hui.
              </p>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet mb-10">Exploration</h4>
              <ul className="space-y-5 text-sm font-bold uppercase tracking-widest text-gray-400">
                <li><Link to="/" className="hover:text-white transition-all duration-300">Accueil</Link></li>
                <li><Link to="/deroulement" className="hover:text-white transition-all duration-300">Déroulement</Link></li>
                <li><Link to="/laureats-2025" className="hover:text-white transition-all duration-300">Lauréats 2025</Link></li>
                <li><Link to="/galerie" className="hover:text-white transition-all duration-300">Galerie</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet mb-10">Support</h4>
              <ul className="space-y-5 text-sm font-bold uppercase tracking-widest text-gray-400">
                <li><Link to="/contact" className="hover:text-white transition-all duration-300">Contact</Link></li>
                <li><Link to="/partenaires" className="hover:text-white transition-all duration-300">Partenaires</Link></li>
                <li><Link to="/participate" className="hover:text-white transition-all duration-300 text-nova-red">Postuler 2026</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet mb-10">Réseaux</h4>
              <ul className="space-y-5">
                <li>
                  <a 
                    href="https://chat.whatsapp.com/Ef1uogHPWVU8ilVpjEcn4D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-green-500 transition-all duration-300"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/@TechNovaChallenge" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-red-600 transition-all duration-300"
                  >
                    <Youtube size={18} />
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-gray-600 text-[9px] md:text-[10px] uppercase font-bold tracking-[0.4em] text-center md:text-left">
              © 2025-2026 Tech Nova Benin. L'excellence est notre seul standard.
            </div>
            {/* Lien Admin retiré du footer pour plus de discrétion */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;