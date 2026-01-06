
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold tracking-tighter text-nova-black">
          TECH NOVA <span className="text-nova-violet">CHALLENGE</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-nova-violet' : 'text-nova-black hover:text-nova-violet'}`}
          >
            Accueil
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-nova-violet' : 'text-nova-black hover:text-nova-violet'}`}
          >
            À Propos
          </Link>
          <Link 
            to="/process" 
            className={`text-sm font-medium transition-colors ${isActive('/process') ? 'text-nova-violet' : 'text-nova-black hover:text-nova-violet'}`}
          >
            Le Parcours
          </Link>
        </div>

        <div>
          <Button size="sm">Participer</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
