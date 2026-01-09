
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  MapPin, 
  Trophy, 
  Users,
  Eye,
  ArrowDown,
  Filter
} from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

type Category = 'All' | 'Formation' | 'Visite' | 'Finale' | 'Pitch';

interface GalleryImage {
  id: number;
  src: string;
  category: Category;
  title: string;
  desc: string;
}

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const images: GalleryImage[] = [
    // FORMATIONS
    { id: 1, category: 'Formation', title: 'Atelier Pitch Deck', desc: 'Préparation intensive au CAEB de Lokossa.', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200' },
    { id: 2, category: 'Formation', title: 'Session Mentoring', desc: 'Échanges avec les experts de Sèmè City.', src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200' },
    { id: 3, category: 'Formation', title: 'Workshops Technique', desc: 'Immersion dans les outils de développement.', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200' },
    
    // VISITES
    { id: 4, category: 'Visite', title: 'Sèmè City', desc: 'Découverte des laboratoires d\'innovation.', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200' },
    { id: 5, category: 'Visite', title: 'Lab SCOP', desc: 'Exploration des technologies de prototypage.', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200' },
    
    // FINALE
    { id: 6, category: 'Finale', title: 'Cérémonie Officielle', desc: 'L\'apothéose de l\'édition 2025.', src: 'https://images.unsplash.com/photo-1475721027185-403429803274?auto=format&fit=crop&q=80&w=1200' },
    { id: 7, category: 'Finale', title: 'Proclamation', desc: 'Le moment de la victoire.', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200' },
    
    // PITCH
    { id: 8, category: 'Pitch', title: 'Pitch Session', desc: 'Convaincre le jury en 3 minutes.', src: 'https://images.unsplash.com/photo-1475721027185-403429803274?auto=format&fit=crop&q=80&w=1200' },
    { id: 9, category: 'Pitch', title: 'Q&A Jury', desc: 'Défendre sa solution technique.', src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200' }
  ];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const categories: Category[] = ['All', 'Formation', 'Visite', 'Finale', 'Pitch'];

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      
      {/* SECTION 1 : HERO PLEIN ÉCRAN */}
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
        
        {/* Scroll Indicator */}
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
          
          {/* Navigation des Catégories */}
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

          {/* Grille de la Galerie */}
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
                    <img 
                      src={img.src} 
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Overlay d'information au survol */}
                    <div className="absolute inset-0 bg-nova-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                       <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <span className="text-nova-violet font-black uppercase tracking-widest text-[9px] mb-2 block">{img.category}</span>
                          <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-2">{img.title}</h3>
                          <p className="text-gray-300 text-sm font-light">{img.desc}</p>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* État vide si aucune image */}
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
