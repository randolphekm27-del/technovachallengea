import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  ArrowDown,
  X,
  Maximize2
} from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

type Category = 'Formation' | 'Visite' | 'Finale';

interface GalleryImage {
  id: number;
  src: string;
  category: Category;
}

// Lightbox Component
const Lightbox: React.FC<{ src: string | null, onClose: () => void }> = ({ src, onClose }) => {
  if (!src) return null;
  return createPortal(
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
        onClick={onClose}
      >
        <motion.button 
          className="absolute top-8 right-8 text-white hover:text-nova-red transition-colors z-[10000]"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
        >
          <X size={40} />
        </motion.button>
        <motion.img 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          src={src} 
          alt="Visualisation"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images: GalleryImage[] = [
    // NEW IMAGES - Added and categorized
    { id: 101, category: 'Finale', src: 'https://i.postimg.cc/kGV1PtcF/vue_d_ensemble_des_finaliste_(_les_deuxiemes_).jpg' },
    { id: 102, category: 'Finale', src: 'https://i.postimg.cc/66cY5ZpR/deuxieme_laur-ats.jpg' },
    { id: 103, category: 'Finale', src: 'https://i.postimg.cc/7hCsrTVV/prise_de_la_directrice_de_l_insti_et_du_dg_enset.jpg' },
    { id: 104, category: 'Finale', src: 'https://i.postimg.cc/sXH6LJpg/Les_membres_de_la_soci-t-WISANE_A_la_finale_de_tnc.jpg' },
    { id: 105, category: 'Finale', src: 'https://i.postimg.cc/d1NHf98c/le_directeur_de_l_enset_a_la_phase_finale_prise_de_parole.jpg' },
    { id: 106, category: 'Finale', src: 'https://i.postimg.cc/NG9KCqrG/vue_d_ensemble.jpg' },
    { id: 107, category: 'Finale', src: 'https://i.postimg.cc/VsrJZQbz/prise_d_ensemble_finale.jpg' },
    { id: 108, category: 'Finale', src: 'https://i.postimg.cc/MZMn32jq/embassadrice_eddition_2025_avec_les_sponsors.jpg' },
    { id: 109, category: 'Finale', src: 'https://i.postimg.cc/wBHGRMq1/les_finalistes_et_l_equipe_tnc.jpg' },

    // PREVIOUS IMAGES (Filtered: Removed first 4 as requested, keeping relevant ones)
    { id: 5, category: 'Finale', src: 'https://i.postimg.cc/XJvS2F7Y/FINALE_PRESElection.jpg' },
    { id: 21, category: 'Finale', src: 'https://i.postimg.cc/kGGyhQHK/COUPE_OU_TROPHEE.jpg' },
    { id: 22, category: 'Finale', src: 'https://i.postimg.cc/2yyxXQtb/embassadrice_de_TNC.jpg' },
    { id: 24, category: 'Finale', src: 'https://i.postimg.cc/y8D8YkMQ/promoteur-tnc.jpg' },
    { id: 6, category: 'Visite', src: 'https://i.postimg.cc/5tTTmrGQ/visite_scopp.jpg' },
    { id: 7, category: 'Visite', src: 'https://i.postimg.cc/wvzcHcs3/visite_scop1.jpg' },
    { id: 8, category: 'Visite', src: 'https://i.postimg.cc/fLsjZj0N/visite_scop.jpg' },
    { id: 23, category: 'Visite', src: 'https://i.postimg.cc/cLwBj4Dd/a_scop_s.jpg' },
    { id: 15, category: 'Formation', src: 'https://i.postimg.cc/VNY36Mt9/formation.jpg' },
    { id: 16, category: 'Formation', src: 'https://i.postimg.cc/SsP5Dvv2/formationsr.jpg' },
    { id: 17, category: 'Formation', src: 'https://i.postimg.cc/j519ZF1V/formationss.jpg' },
    { id: 18, category: 'Formation', src: 'https://i.postimg.cc/JnFgP22F/formationsss.jpg' },
    { id: 19, category: 'Formation', src: 'https://i.postimg.cc/BZk9gXrw/r-cr-.jpg' },
    { id: 20, category: 'Formation', src: 'https://i.postimg.cc/5yFrGmc1/fin_formation.jpg' }
  ];

  const filteredImages = activeCategory 
    ? images.filter(img => img.category === activeCategory)
    : [];

  const categories: Category[] = ['Formation', 'Visite', 'Finale'];

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      <Lightbox src={selectedImage} onClose={() => setSelectedImage(null)} />
      
      {/* SECTION 1 : HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          {/* Opacité fortement diminuée : brightness de 0.1 à 0.8 */}
          <img 
            src="https://i.postimg.cc/fLsjZj0N/visite_scop.jpg" 
            alt="Archives Visuelles" 
            className="w-full h-full object-cover brightness-[0.8]"
          />
          {/* Overlay allégé */}
          <div className="absolute inset-0 bg-nova-black/20" />
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
              Explorez les moments charnières, l'engagement et l'excellence qui forgent l'identité du Tech Nova Challenge.
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
      <section className="py-24 md:py-40 px-6 bg-white min-h-[600px]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center mb-16">
            <p className="text-nova-black/40 font-black uppercase tracking-[0.3em] text-[10px] mb-8">
              Sélectionnez une catégorie pour explorer
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] md:text-xs font-black uppercase tracking-[0.3em] px-8 py-4 rounded-full transition-all duration-500 border ${
                    activeCategory === cat 
                      ? 'bg-nova-violet text-white border-nova-violet shadow-lg shadow-nova-violet/20 scale-105' 
                      : 'text-gray-400 border-gray-100 hover:border-nova-violet/30 hover:text-nova-violet'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-md">
                    <motion.img 
                      src={img.src} 
                      alt="Capture Tech Nova"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-nova-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-nova-black shadow-xl">
                          <Maximize2 size={20} />
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {!activeCategory && (
            <div className="py-24 text-center border-2 border-dashed border-gray-100 rounded-[3rem]">
              <Camera className="mx-auto text-gray-200 mb-6" size={64} />
              <p className="text-gray-400 font-black text-xs uppercase tracking-[0.4em]">Choisissez une thématique pour commencer l'immersion</p>
            </div>
          )}

          {activeCategory && filteredImages.length === 0 && (
            <div className="py-24 text-center">
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
             Rejoignez l'édition 2026 et inscrivez votre nom dans l'histoire technologique du Bénin.
           </p>
           <div className="flex flex-col md:flex-row justify-center gap-8">
              <Button size="lg" onClick={() => navigate('/participate')}>Candidater pour 2026</Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/deroulement')}>Voir le programme</Button>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;