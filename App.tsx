
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Youtube, MessageCircle, Facebook, Linkedin } from 'lucide-react';
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
import Team2026 from './pages/Team2026';
import LiveProgress from './pages/LiveProgress';

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
            <Route path="/etapes-en-cours" element={<PageWrapper><LiveProgress /></PageWrapper>} />
            <Route path="/laureats-2025" element={<PageWrapper><Winners2025 /></PageWrapper>} />
            <Route path="/equipe-2026" element={<PageWrapper><Team2026 /></PageWrapper>} />
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
                <li><Link to="/etapes-en-cours" className="hover:text-nova-red transition-all duration-300">Live Étapes</Link></li>
                <li><Link to="/deroulement" className="hover:text-white transition-all duration-300">Déroulement</Link></li>
                <li><Link to="/laureats-2025" className="hover:text-white transition-all duration-300">Lauréats 2025</Link></li>
                <li><Link to="/equipe-2026" className="hover:text-white transition-all duration-300">Équipe 2026</Link></li>
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
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/2290196313068?text=Bonjour%20Tech%20Nova%20Challenge%2C%20je%20vous%20contacte%20pour%20obtenir%20des%20informations%20relatives%20%C3%A0%20la%20comp%C3%A9tition%202026..." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white hover:border-green-500 hover:scale-110 transition-all duration-300 shadow-lg"
                  title="WhatsApp"
                >
                  <MessageCircle size={28} />
                </a>
                <a 
                  href="https://www.facebook.com/share/1Ei8G8HHvC/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110 transition-all duration-300 shadow-lg"
                  title="Facebook"
                >
                  <Facebook size={28} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tech-nova-challenge-44b10b359" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white hover:border-blue-700 hover:scale-110 transition-all duration-300 shadow-lg"
                  title="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
                <a 
                  href="https://www.tiktok.com/@tech.nova.challen?is_from_webapp=1&sender_device=pc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:border-white/40 hover:scale-110 transition-all duration-300 shadow-lg"
                  title="TikTok"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    width="28" 
                    height="28" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.59-5.71-.29-2.81 1.43-5.63 3.99-6.9 1.05-.53 2.25-.8 3.44-.76v4.04c-.45-.06-.91-.02-1.35.09-1.17.26-2.14 1.15-2.48 2.29-.46 1.42.16 3.12 1.46 3.88.76.47 1.68.61 2.56.41 1.06-.21 1.93-.99 2.28-1.99.11-.33.16-.68.16-1.03V.02z" />
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@TechNovaChallenge" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-600 hover:scale-110 transition-all duration-300 shadow-lg"
                  title="YouTube"
                >
                  <Youtube size={28} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-gray-600 text-[9px] md:text-[10px] uppercase font-bold tracking-[0.4em] text-center md:text-left leading-relaxed">
              © 2025-2026 Tech Nova Benin. <br className="md:hidden" /> L'excellence est notre seul standard.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
