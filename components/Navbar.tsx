
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Globe, Mail, LayoutDashboard, User } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Check login state
    const checkLogin = () => {
      const user = localStorage.getItem('tnc_user_name');
      setIsLoggedIn(!!user);
    };
    
    checkLogin();
    // Re-check on storage changes (for local simulations)
    window.addEventListener('storage', checkLogin);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', checkLogin);
    };
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isDarkHeroPage = ['/', '/about', '/edition-2026', '/laureats-2025', '/galerie', '/partenaires', '/contact'].includes(location.pathname);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Édition 2026', path: '/edition-2026' },
    { name: 'Lauréats 2025', path: '/laureats-2025' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Partenaires', path: '/partenaires' },
  ];

  const logoSrc = "https://i.postimg.cc/pdGN9ZKD/logotncf.png";

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 pointer-events-none flex justify-center ${scrolled ? 'pt-4' : 'pt-6 md:pt-8'}`}>
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            pointer-events-auto flex items-center justify-between px-5 md:px-10 py-3 
            ${scrolled ? 'w-[94%] md:w-auto glass rounded-full shadow-2xl border-white/20' : 'w-full max-w-7xl rounded-none border-transparent'} 
            transition-all duration-700 ease-in-out
          `}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center z-[110]" onClick={() => setMobileMenuOpen(false)}>
            <img 
              src={logoSrc} 
              alt="Tech Nova Challenge" 
              className={`h-9 md:h-12 w-auto object-contain rounded-lg p-1 transition-all duration-500 ${scrolled ? 'bg-white/50' : isDarkHeroPage && !mobileMenuOpen ? 'bg-white' : 'bg-white/50'}`}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 mx-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[9px] uppercase tracking-[0.25em] font-black transition-all duration-300 relative py-2 ${
                  isActive(link.path) ? 'text-nova-violet' : scrolled ? 'text-nova-black/50 hover:text-nova-black' : isDarkHeroPage ? 'text-white/70 hover:text-white' : 'text-nova-black/50 hover:text-nova-black'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div layoutId="activeNav" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-nova-violet rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side - Dynamic Button */}
          <div className="flex items-center gap-3 md:gap-4 z-[110]">
            <AnimatePresence mode="wait">
              {isLoggedIn ? (
                <motion.div
                  key="dashboard-btn"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Button 
                    size="sm" 
                    variant="accent"
                    onClick={() => navigate('/dashboard')}
                    className="hidden md:inline-flex"
                  >
                    <LayoutDashboard size={14} className="mr-2" /> Mon Espace
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="participate-btn"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Button 
                    size="sm" 
                    variant={scrolled ? "accent" : isDarkHeroPage && !mobileMenuOpen ? "outline" : "accent"}
                    onClick={() => navigate('/participate')}
                    className={`hidden md:inline-flex ${!scrolled && isDarkHeroPage && !mobileMenuOpen ? 'border-white text-white hover:bg-white hover:text-nova-black' : ''}`}
                  >
                    Participer
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-all duration-500 ${
                mobileMenuOpen 
                  ? 'bg-nova-black text-white' 
                  : scrolled 
                    ? 'bg-nova-black/5 text-nova-black' 
                    : isDarkHeroPage ? 'bg-white/10 text-white backdrop-blur-md' : 'bg-nova-black/5 text-nova-black'
              }`}
            >
              {mobileMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-white overflow-hidden flex flex-col"
          >
            <div className="relative flex-grow flex flex-col justify-center px-8 pt-20">
              <nav className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center justify-between py-3 border-b border-gray-50 transition-all ${
                        isActive(link.path) ? 'text-nova-violet' : 'text-nova-black'
                      }`}
                    >
                      <span className="text-3xl font-black uppercase tracking-tighter italic group-active:translate-x-4 transition-transform duration-300">
                        {link.name}
                      </span>
                      <ArrowRight className={isActive(link.path) ? 'text-nova-violet' : 'text-gray-200'} size={24} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <Button 
                  size="md" 
                  variant="accent"
                  onClick={() => { setMobileMenuOpen(false); navigate(isLoggedIn ? '/dashboard' : '/participate'); }} 
                  className="w-full py-4"
                >
                  {isLoggedIn ? 'Mon Espace' : 'Postuler 2026'}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
