
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  ArrowDown
} from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

type Category = 'All' | 'Formation' | 'Visite' | 'Finale';

interface GalleryImage {
  id: number;
  src: string;
  category: Category;
}

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const images: GalleryImage[] = [
    // FINALE
    { id: 1, category: 'Finale', src: 'https://i.postimg.cc/g2vWrmTp/FINALISTE_PREMIER.jpg' },
    { id: 2, category: 'Finale', src: 'https://i.postimg.cc/nc9ZbvKs/FINALISTE_2EME.jpg' },
    { id: 3, category: 'Finale', src: 'https://i.postimg.cc/bwQhdpBY/FINALISTE_3EME.jpg' },
    { id: 4, category: 'Finale', src: 'https://i.postimg.cc/tg28VTdM/BON_FINALISTES.jpg' },
    { id: 5, category: 'Finale', src: 'https://i.postimg.cc/XJvS2F7Y/FINALE_PRESElection.jpg' },
    
    // VISITES
    { id: 6, category: 'Visite', src: 'https://i.postimg.cc/5tTTmrGQ/visite_scopp.jpg' },
    { id: 7, category: 'Visite', src: 'https://i.postimg.cc/wvzcHcs3/visite_scop1.jpg' },
    { id: 8, category: 'Visite', src: 'https://i.postimg.cc/fLsjZj0N/visite_scop.jpg' },
    { id: 9, category: 'Visite', src: 'https://i.postimg.cc/mkJPZB62/SCOPPP.jpg' },
    { id: 10, category: 'Visite', src: 'https://i.postimg.cc/FF8zLFDK/SCOPP.jpg' },
    { id: 11, category: 'Visite', src: 'https://i.postimg.cc/5tVFF99s/SCOP_E.jpg' },
    { id: 12, category: 'Visite', src: 'https://i.postimg.cc/4xT3W8D2/SCOP_1.jpg' },
    { id: 13, category: 'Visite', src: 'https://i.postimg.cc/wBLcSbMG/SCOP.jpg' },
    { id: 14, category: 'Visite', src: 'https://i.postimg.cc/CMXTNz3c/IGCO_PARTENAIRE_NEGOCE.jpg' },

    // FORMATIONS
    { id: 15, category: 'Formation', src: 'https://i.postimg.cc/VNY36Mt9/formation.jpg' },
    { id: 16, category: 'Formation', src: 'https://i.postimg.cc/SsP5Dvv2/formationsr.jpg' },
    { id: 17, category: 'Formation', src: 'https://i.postimg.cc/j519ZF1V/formationss.jpg' },
    { id: 18, category: 'Formation', src: 'https://i.postimg.cc/JnFgP22F/formationsss.jpg' },
    { id: 19, category: 'Formation', src: 'https://i.postimg.cc/BZk9gXrw/récré.jpg' },
    { id: 20, category: 'Formation', src: 'https://i.postimg.cc/5yFrGmc1/fin_formation.jpg' }
  ];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const categories: Category[] = ['All', 'Formation', 'Visite', 'Finale'];

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      
      {/* SECTION 1 : HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2000" 
            alt="Archives Visuelles" 
            className="w-full h-full object-cover brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nova-black/60 via-nova-black/40 to-white/10" />
        </motion.div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-nova-violet font-black tracking-[0.6em] uppercase text-[10px] block mb-8">
              Médiathèque Officielle
            </span>
            <h1 className="editorial-title text-[clamp(2.5rem,10vw,12rem)] text-white leading-[0.85] mb-12">
              L'HISTOIRE <br />
              <span className="text-nova-violet italic font-light">EN IMAGES.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Explorez les moments forts, l'engagement et l'excellence qui définissent le Tech Nova Challenge.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
        >
           <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* SECTION 2 : FILTRES & GALERIE */}
      <section className="py-24 md:py-40 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-24">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] md:text-xs font-black uppercase tracking-[0.3em] px-8 py-3 rounded-full transition-all duration-500 border ${
                  activeCategory === cat 
                    ? 'bg-nova-violet text-white border-nova-violet shadow-lg shadow-nova-violet/20 scale-105' 
                    : 'text-gray-400 border-gray-100 hover:border-nova-violet/30 hover:text-nova-violet'
                }`}
              >
                {cat === 'All' ? 'Tous les moments' : cat}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative"
                >
                  <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-sm">
                    <motion.img 
                      src={img.src} 
                      alt="Capture Tech Nova"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Overlay discret au survol sans texte */}
                    <div className="absolute inset-0 bg-nova-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="py-40 text-center">
              <Camera className="mx-auto text-gray-200 mb-6" size={64} />
              <p className="text-gray-400 font-light text-xl italic">Aucun moment capturé dans cette catégorie pour l'instant.</p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3 : CTA */}
      <section className="py-48 bg-gray-50 border-t border-gray-100 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
           <h2 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] text-nova-black mb-12 leading-[0.85]">
              VOTRE MOMENT <br />
              <span className="text-nova-violet italic font-light">EST PROCHE.</span>
           </h2>
           <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
             Rejoignez l'édition 2026 et faites partie de l'histoire visuelle de l'innovation au Bénin.
           </p>
           <div className="flex flex-col md:flex-row justify-center gap-8">
              <Button size="lg" onClick={() => navigate('/participate')}>Candidater pour 2026</Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/edition-2026')}>Voir le programme</Button>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;
