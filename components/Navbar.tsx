
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Édition 2026', path: '/edition-2026' },
    { name: 'Lauréats 2025', path: '/laureats-2025' },
    { name: 'Partenaires', path: '/partenaires' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-700 pointer-events-none flex justify-center pt-6">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            pointer-events-auto flex items-center justify-between px-6 md:px-10 py-3 
            ${scrolled ? 'w-[92%] md:w-auto glass rounded-full shadow-2xl border-white/20' : 'w-full max-w-7xl rounded-none border-transparent'} 
            transition-all duration-700 ease-in-out
          `}
        >
          {/* Logo */}
          <Link to="/" className="text-sm md:text-base font-black tracking-tighter text-nova-black flex items-center gap-2">
            <div className="w-6 h-6 bg-nova-violet rounded-full flex-shrink-0" />
            <span className="hidden sm:inline uppercase">TECH NOVA <span className="text-nova-violet italic font-light">CHALLENGE</span></span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 mx-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[9px] uppercase tracking-[0.25em] font-black transition-all duration-300 relative py-2 ${isActive(link.path) ? 'text-nova-violet' : 'text-nova-black/50 hover:text-nova-black'}`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div layoutId="activeNav" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-nova-violet rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Button 
              size="sm" 
              variant="primary"
              onClick={() => navigate('/participate')}
              className="hidden md:inline-flex text-[9px] py-2 px-6"
            >
              Participer
            </Button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-nova-black"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[90] bg-white md:hidden flex flex-col pt-32 px-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter text-nova-black mb-8"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-auto pb-12">
              <Button size="lg" onClick={() => { setMobileMenuOpen(false); navigate('/participate'); }} className="w-full">PARTICIPER</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
