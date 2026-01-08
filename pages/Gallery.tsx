
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Maximize2, Camera, MapPin, 
  GraduationCap, Trophy, Users, LayoutGrid,
  ArrowRight
} from 'lucide-react';
import Button from '../components/Button';

type Category = 'All' | 'Formation' | 'Visite' | 'Finale' | 'Pitch';

interface GalleryImage {
  id: number;
  src: string;
  category: Category;
  title: string;
  desc: string;
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    // FORMATIONS
    { id: 1, category: 'Formation', title: 'Atelier Pitch Deck', desc: 'Préparation intensive au CAEB de Lokossa.', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200' },
    { id: 2, category: 'Formation', title: 'Soft Skills Training', desc: 'Session sur le leadership et la collaboration.', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200' },
    { id: 3, category: 'Formation', title: 'Mentorat Technique', desc: 'Échanges entre étudiants et experts industriels.', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200' },
    
    // VISITES
    { id: 4, category: 'Visite', title: 'Immersion Sèmè City', desc: 'Découverte des laboratoires SCOP à Cotonou.', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200' },
    { id: 5, category: 'Visite', title: 'Industrie Locale', desc: 'Visite technique des installations de production.', src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200' },
    
    // FINALE
    { id: 6, category: 'Finale', title: 'Cérémonie de Remise', desc: 'L’apogée de l’édition 2025.', src: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1200' },
    { id: 7, category: 'Finale', title: 'Jury de Sélection', desc: 'Délibération finale des experts.', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200' },
    { id: 8, category: 'Finale', title: 'Le Grand Podium', desc: 'Célébration des lauréats 2025.', src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1200' },
    
    // PITCH
    { id: 9, category: 'Pitch', title: 'Demo Day', desc: 'Présentation des prototypes fonctionnels.', src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200' },
    { id: 10, category: 'Pitch', title: 'Innovation Show', desc: 'Questions-réponses avec le jury.', src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200' },
    { id: 11, category: 'Pitch', title: 'Focus Technique', desc: 'Détails des solutions logicielles.', src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200' },
    { id: 12, category: 'Finale', title: 'Networking Night', desc: 'Rencontres entre partenaires et étudiants.', src: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=1200' },
  ];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const categories: Category[] = ['All', 'Formation', 'Visite', 'Pitch', 'Finale'];

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 md:pt-60 md:pb-40 px-6 overflow-hidden bg-nova-black">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <span className="text-nova-violet font-black tracking-[0.6em] uppercase text-[10px] block mb-8">
              Archives Visuelles
            </span>
            <h1 className="editorial-title text-[clamp(2.5rem,10vw,12rem)] text-white leading-[0.85] mb-12">
              MÉMOIRE DU <br />
              <span className="text-nova-violet italic font-light">MOUVEMENT.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              Revivez chaque étape de la première édition. Des prémices de l'idée à l'apothéose finale.
            </p>
          </motion.div>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-nova-violet/5 blur-[150px] rounded-full pointer-events-none" />
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-[72px] md:top-[88px] z-50 py-6 md:py-8 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 overflow-x-auto">
          <div className="flex items-center justify-start md:justify-center gap-2 md:gap-4 min-w-max pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-6 py-2 md:px-8 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300
                  ${activeCategory === cat 
                    ? 'bg-nova-black text-white shadow-xl' 
                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-nova-black'}
                `}
              >
                {cat === 'All' ? 'Tout voir' : cat + 's'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-12 md:py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
          >
            <AnimatePresence mode='popLayout'>
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div 
                    onClick={() => setSelectedImage(img)}
                    className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden cursor-zoom-in bg-gray-100 relative"
                  >
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                    />
                    
                    {/* Overlay info on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-nova-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                       <span className="text-nova-violet font-black uppercase tracking-widest text-[9px] mb-2">{img.category}</span>
                       <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-2">{img.title}</h3>
                       <p className="text-gray-300 text-xs font-light leading-relaxed mb-6">{img.desc}</p>
                       <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-nova-black">
                          <Maximize2 size={16} />
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-nova-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-nova-violet transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-6xl w-full grid lg:grid-cols-12 gap-10 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lg:col-span-8 aspect-[4/3] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
                 <img 
                   src={selectedImage.src} 
                   alt={selectedImage.title} 
                   className="w-full h-full object-cover"
                 />
              </div>
              
              <div className="lg:col-span-4 text-white">
                <span className="text-nova-violet font-black tracking-widest uppercase text-xs block mb-6">Archive 2025 — {selectedImage.category}</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                  {selectedImage.title}
                </h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                  {selectedImage.desc}
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                    <Camera size={20} className="text-nova-violet" />
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Photographie</div>
                      <div className="text-sm font-bold">Archives Officielles TNC</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA SECTION */}
      <section className="py-24 md:py-48 bg-gray-50 px-6 text-center overflow-hidden relative">
         <div className="container mx-auto max-w-4xl relative z-10">
            <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-10 md:mb-12">Rejoignez l'Aventure</span>
            <h2 className="editorial-title text-[clamp(2rem,10vw,8rem)] text-nova-black mb-12 md:mb-16 leading-[0.85]">
               VOTRE VISAGE <br />
               <span className="text-nova-violet italic font-light uppercase">ICI EN 2026.</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
               <Button size="lg" className="w-full md:w-auto" onClick={() => window.location.hash = '/participate'}>INSCRIPTION 2026</Button>
               <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => window.location.hash = '/edition-2026'}>LE PROGRAMME</Button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Gallery;
