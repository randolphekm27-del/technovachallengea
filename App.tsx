
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Participate from './pages/Participate';
import Edition2026 from './pages/Edition2026';
import Winners2025 from './pages/Winners2025';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/edition-2026" element={<Edition2026 />} />
          <Route path="/laureats-2025" element={<Winners2025 />} />
          <Route path="/partenaires" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="py-24 bg-nova-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="text-white font-black tracking-tighter text-3xl mb-8">
                TECH NOVA <span className="text-nova-violet">CHALLENGE</span>
              </div>
              <p className="text-gray-500 max-w-sm font-light">
                Le premier concours d'innovation technologique au Bénin. Nous bâtissons l'infrastructure du futur avec les talents d'aujourd'hui.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-nova-violet mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm font-light text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#/about" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#/edition-2026" className="hover:text-white transition-colors">Édition 2026</a></li>
                <li><a href="#/laureats-2025" className="hover:text-white transition-colors">Lauréats 2025</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-nova-violet mb-8">Support</h4>
              <ul className="space-y-4 text-sm font-light text-gray-400">
                <li><a href="#/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#/partenaires" className="hover:text-white transition-colors">Partenaires</a></li>
                <li><a href="#/participate" className="hover:text-white transition-colors">Devenir Candidat</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em]">
              © 2025-2026 Tech Nova Benin. Design by Editorial Studio.
            </div>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
              <a href="#" className="hover:text-nova-violet transition-colors">Twitter</a>
              <a href="#" className="hover:text-nova-violet transition-colors">Instagram</a>
              <a href="#" className="hover:text-nova-violet transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
