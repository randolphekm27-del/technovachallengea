
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
    { name: 'Les Étapes', path: '/stages' },
    { name: 'Règlement', path: '/rules' },
    { name: 'Archives', path: '/archive' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 pointer-events-none flex justify-center pt-6`}>
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            pointer-events-auto flex items-center justify-between px-6 md:px-8 py-3 
            ${scrolled ? 'w-[90%] md:w-auto glass rounded-full shadow-2xl' : 'w-full max-w-7xl rounded-none'} 
            transition-all duration-700 ease-in-out
          `}
        >
          {/* Logo */}
          <Link to="/" className="text-sm md:text-base font-black tracking-tighter text-nova-black flex items-center gap-2">
            <span className="w-6 h-6 bg-nova-violet rounded-full flex-shrink-0" />
            <span className="hidden sm:inline">TECH NOVA <span className="text-nova-violet">2025</span></span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 mx-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-[9px] uppercase tracking-[0.2em] font-black transition-all duration-300 relative group ${isActive(link.path) ? 'text-nova-violet' : 'text-nova-black/40 hover:text-nova-black'}`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.span layoutId="activeNav" className="absolute -bottom-1 left-0 w-full h-[2px] bg-nova-violet" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Button 
              size="sm" 
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[90] bg-white/80 md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black uppercase tracking-tighter hover:text-nova-violet transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button size="lg" onClick={() => { setMobileMenuOpen(false); navigate('/participate'); }} className="mt-8">Participer</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
