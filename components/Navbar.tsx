
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

  // Filtrage des liens dynamiques
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

  // Appliquer le masquage Admin
  navLinks = navLinks.filter(link => !siteConfig.hiddenPages.includes(link.path));

  // Appliquer la réorganisation
  if (siteConfig.isReorganized) {
    const archivesToHide = ['/laureats-2025', '/equipe-2026', '/galerie'];
    navLinks = navLinks.filter(link => !archivesToHide.includes(link.path));
    // Insérer le bouton Hub
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
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 flex justify-center ${scrolled ? 'pt-4' : 'pt-8'}`}>
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            flex items-center justify-between px-8 md:px-10 py-3 
            ${scrolled 
              ? 'w-[96%] md:w-auto bg-white/95 backdrop-blur-md rounded-full border border-black/10 shadow-2xl' 
              : 'w-[96%] md:w-auto bg-black/40 backdrop-blur-sm rounded-full border border-white/10 shadow-lg'} 
            transition-all duration-700 ease-in-out
          `}
        >
          <Link to="/" className="flex items-center z-[110]" onClick={() => setMobileMenuOpen(false)}>
            <img 
              src="https://i.postimg.cc/pdGN9ZKD/logotncf.png" 
              alt="Tech Nova Challenge" 
              className="h-9 md:h-10 w-auto object-contain transition-all duration-500 rounded-lg p-1 bg-white shadow-sm"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8 mx-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] uppercase tracking-[0.25em] font-black transition-all duration-300 relative py-2 ${
                  isActive(link.path) 
                    ? (scrolled ? 'text-nova-red' : 'text-white underline decoration-nova-violet decoration-2 underline-offset-8') 
                    : (scrolled ? 'text-nova-black hover:text-nova-red' : 'text-white/90 hover:text-white drop-shadow-md')
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 z-[110]">
            <AnimatePresence mode="wait">
              {isLoggedIn ? (
                <div className="relative">
                  <Button 
                    key="dashboard-btn"
                    size="sm" 
                    onClick={() => navigate('/dashboard')}
                    className={`hidden md:inline-flex ${!scrolled ? '!bg-nova-violet !text-white' : ''}`}
                  >
                    <LayoutDashboard size={14} className="mr-2" /> Mon Espace
                  </Button>
                  {unreadCount > 0 && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-nova-red text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                    >
                      {unreadCount}
                    </motion.div>
                  )}
                </div>
              ) : (
                <Button 
                  key="participate-btn"
                  size="sm" 
                  onClick={() => navigate('/participate')}
                  className={`hidden md:inline-flex ${!scrolled ? '!bg-white !text-nova-black shadow-none border-none' : ''}`}
                >
                  <Rocket size={14} className="mr-2" /> Postuler
                </Button>
              )}
            </AnimatePresence>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-full transition-all duration-500 relative ${scrolled ? 'bg-nova-gray border border-black/5 text-nova-black' : 'bg-white/20 text-white border border-white/20'}`}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[90] bg-white overflow-hidden flex flex-col pt-32"
          >
            <div className="flex-grow flex flex-col px-10">
              <nav className="space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div key={link.path} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                    <Link to={link.path} onClick={() => setMobileMenuOpen(false)} className={`block py-4 border-b border-black/5 transition-all ${isActive(link.path) ? 'text-nova-red' : 'text-nova-black'}`}>
                      <span className="text-3xl font-black uppercase tracking-tighter">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto mb-20">
                <Button size="lg" variant="accent" className="w-full" onClick={() => { setMobileMenuOpen(false); navigate(isLoggedIn ? '/dashboard' : '/participate'); }}>
                  {isLoggedIn ? 'Mon Espace' : 'Postuler 2026'}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
