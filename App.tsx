
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Process from './pages/Process';
import Participate from './pages/Participate';
import Archive from './pages/Archive';

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/participate" element={<Participate />} />
        </Routes>
      </main>
      <footer className="py-12 border-t border-gray-100 mt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-nova-black font-bold tracking-tighter text-xl">
            TECH NOVA <span className="text-nova-violet">CHALLENGE</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 Tech Nova Benin. Tous droits réservés.
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-nova-violet transition-colors">Twitter</a>
            <a href="#" className="hover:text-nova-violet transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-nova-violet transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
