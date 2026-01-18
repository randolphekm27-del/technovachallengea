
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LayoutDashboard, Rocket, Bell, Activity, Layers } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [siteConfig, setSiteConfig] = useState({
    hiddenPages: [] as string[],
    isReorganized: false
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const checkStatus = () => {
      const user = localStorage.getItem('tnc_user_name');
      setIsLoggedIn(!!user);

      const configStr = localStorage.getItem('tnc_site_config');
      if (configStr) {
        setSiteConfig(JSON.parse(configStr));
      }

      if (user) {
        const broadcastsStr = localStorage.getItem('tnc_broadcasts');
        const lastRead = localStorage.getItem('tnc_last_read_colis') || '0';
        if (broadcastsStr) {
          const broadcasts = JSON.parse(broadcastsStr);
          const newItems = broadcasts.filter((b: any) => new Date(b.timestamp).getTime() > parseInt(lastRead));
          setUnreadCount(newItems.length);
        }
      }
    };
    
    checkStatus();
    const interval = setInterval(checkStatus, 2000); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  let navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Live Étapes', path: '/etapes-en-cours' },
    { name: 'Déroulement', path: '/deroulement' },
    { name: 'Vote Public', path: '/vote' },
    { name: 'Vote Gagnants', path: '/vote-gagnants' },
    { name: 'Lauréats 2025', path: '/laureats-2025' },
    { name: 'Équipe 2026', path: '/equipe-2026' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Partenaires', path: '/partenaires' },
  ];

  navLinks = navLinks.filter(link => !siteConfig.hiddenPages.includes(link.path));

  if (siteConfig.isReorganized) {
    const archivesToHide = ['/laureats-2025', '/equipe-2026', '/galerie'];
    navLinks = navLinks.filter(link => !archivesToHide.includes(link.path));
    const partnersIndex = navLinks.findIndex(l => l.path === '/partenaires');
    const hubLink = { name: 'Rétrospectives', path: '/archives' };
    if (partnersIndex !== -1) {
      navLinks.splice(partnersIndex, 0, hubLink);
    } else {
      navLinks.push(hubLink);
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[250] pointer-events-none flex justify-center pt-6 md:pt-8 transition-all duration-700">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            pointer-events-auto
            flex items-center justify-between px-6 md:px-10 py-3 
            ${scrolled 
              ? 'w-[92%] md:w-auto bg-white/95 backdrop-blur-xl rounded-full border border-black/10 shadow-2xl' 
              : 'w-[92%] md:w-auto bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-lg'} 
            transition-all duration-700 ease-in-out
          `}
        >
          <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <img 
              src="https://i.postimg.cc/pdGN9ZKD/logotncf.png" 
              alt="TNC Logo" 
              className="h-8 md:h-10 w-auto object-contain transition-all duration-500 rounded-lg p-1 bg-white"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 mx-8 xl:mx-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[9px] xl:text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-300 relative py-2 ${
                  isActive(link.path) 
                    ? (scrolled ? 'text-nova-red' : 'text-white underline decoration-nova-violet decoration-2 underline-offset-8') 
                    : (scrolled ? 'text-nova-black hover:text-nova-red' : 'text-white/90 hover:text-white')
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <AnimatePresence mode="wait">
              {isLoggedIn ? (
                <div className="relative">
                  <Button 
                    key="dashboard-btn"
                    size="sm" 
                    onClick={() => navigate('/dashboard')}
                    className={`hidden md:inline-flex ${!scrolled ? '!bg-nova-violet !text-white' : ''}`}
                  >
                    <LayoutDashboard size={14} className="mr-2" /> Espace
                  </Button>
                  {unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-nova-red text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white">
                      {unreadCount}
                    </div>
                  )}
                </div>
              ) : (
                <Button 
                  key="participate-btn"
                  size="sm" 
                  onClick={() => navigate('/participate')}
                  className={`hidden md:inline-flex ${!scrolled ? '!bg-white !text-nova-black shadow-none border-none' : ''}`}
                >
                  Postuler
                </Button>
              )}
            </AnimatePresence>
            
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className={`lg:hidden p-2.5 rounded-full transition-all duration-500 relative z-[300] shadow-xl ${
                scrolled 
                  ? 'bg-nova-black text-white' 
                  : 'bg-white text-nova-black'
              }`}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[200] bg-white overflow-y-auto flex flex-col pt-32 pb-20 px-6"
          >
            <div className="flex-grow flex flex-col">
              <nav className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div key={link.path} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                    <Link to={link.path} onClick={() => setMobileMenuOpen(false)} className={`block py-5 border-b border-black/5 transition-all ${isActive(link.path) ? 'text-nova-red' : 'text-nova-black'}`}>
                      <span className="text-2xl font-black uppercase tracking-tighter">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-12 space-y-4">
                <Button size="lg" variant="accent" className="w-full" onClick={() => { setMobileMenuOpen(false); navigate(isLoggedIn ? '/dashboard' : '/participate'); }}>
                  {isLoggedIn ? 'Mon Dashboard' : 'Postuler 2026'}
                </Button>
                {isLoggedIn && (
                  <Button variant="outline" size="lg" className="w-full" onClick={() => {
                     localStorage.removeItem('tnc_user_name');
                     setIsLoggedIn(false);
                     setMobileMenuOpen(false);
                     navigate('/');
                  }}>Déconnexion</Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
