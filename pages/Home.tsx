import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Target, Zap, ArrowDown, X, Maximize2, Building, GraduationCap
} from 'lucide-react';
import Button from '../components/Button';

// Composant de révélation de texte cinématique
const ElegantReveal: React.FC<{ text: string, delay?: number, className?: string }> = ({ text, delay = 0, className = "" }) => {
  const words = text.split(" ");
  return (
    <h1 className={`${className} flex flex-wrap justify-center text-center`}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mx-[0.1em] md:mx-[0.15em] mb-[0.1em]">
          {word.split("").map((char, charIdx) => (
            <span key={charIdx} className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ 
                  duration: 0.7, 
                  delay: delay + (wordIdx * 0.08) + (charIdx * 0.02), 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
};

// Bloc générique pour les entrées douces
const MuseumBlock: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative z-10 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Visionneuse d'image (Lightbox)
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => { e.stopPropagation(); onClose(); }}
        >
          <X size={40} />
        </motion.button>
        <motion.img 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          src={src} 
          alt="Visualisation plein écran"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

const IndustrialSlideshow = () => {
  const images = [
    "https://i.postimg.cc/RZNVP2FG/wisanenn.jpg",
    "https://i.postimg.cc/sgvDnbXx/wisane_a_la_finale_d.jpg",
    "https://i.postimg.cc/cLr4DPHR/wisane_a_la_finale.jpg",
    "https://i.postimg.cc/Vkps24rX/wisane_a_la_final.jpg",
    "https://i.postimg.cc/wTWjQ96z/shiis_wisane.jpg",
    "https://i.postimg.cc/Z52YXjBD/promoteur_avec_sponsor_oficiel.jpg",
    "https://i.postimg.cc/dVLtWg1t/prsentation_de_wisane.jpg",
    "https://i.postimg.cc/2SV8Hg6q/paretenaire_oficle.jpg",
    "https://i.postimg.cc/2SV8Hg6z/mat-riel-ingco.jpg"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const mainRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const heroImageScale = useTransform(smoothProgress, [0, 0.2], [1, 1.15]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={mainRef} className="relative w-full bg-white selection:bg-nova-violet selection:text-white overflow-x-hidden">
      
      {/* VISIONNEUSE GLOBALE */}
      <Lightbox src={selectedImage} onClose={() => setSelectedImage(null)} />

      {/* SECTION 1 : HEADER */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-6 py-32">
        <motion.div 
          style={{ scale: heroImageScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          {/* Ajustement luminosité : 0.90 (10% de filtre noir) */}
          <img 
            src="https://i.postimg.cc/tgyMnJq1/belle_vue_d_ensemble_des_lauréats_avec_le_dg.jpg"
            alt="Tech Nova Challenge Team"
            className="w-full h-full object-cover brightness-[0.90] saturate-[1.1]"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/20 z-[1]" />
        <div className="absolute inset-0 grid-blueprint z-[2]" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-8 md:space-y-16">
            <ElegantReveal 
              text="RETOUR DU TECH NOVA CHALLENGE" 
              className="editorial-title"
            />
            
            <MuseumBlock delay={0.8}>
              <p className="text-base md:text-2xl text-white font-medium tracking-tight max-w-3xl mx-auto font-serif italic px-4 leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,1)]">
                L'excellence technologique béninoise se donne à nouveau rendez-vous pour une édition 2026 mémorable.
              </p>
            </MuseumBlock>

            <MuseumBlock delay={1}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 pt-4">
                <Button size="lg" variant="accent" onClick={() => navigate('/participate')} className="w-full sm:w-auto shadow-[0_10px_30px_rgba(0,0,0,0.3)]">POSTULER MAINTENANT</Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/deroulement')} className="w-full sm:w-auto !border-white/60 !text-white hover:!bg-white hover:!text-black backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)]">LE PROGRAMME</Button>
              </div>
            </MuseumBlock>
          </div>
        </div>
      </section>

      {/* SECTION 2 : CONTEXTE */}
      <section className="py-24 md:py-40 px-6 bg-white relative">
        <div className="container mx-auto max-w-5xl">
          <MuseumBlock>
            <p className="text-xl md:text-4xl text-nova-black font-light leading-[1.6] tracking-tight font-display mb-16 md:mb-24 text-center md:text-left">
              Pour cette édition 2026, le plus grand concours d'innovation Tech, <span className="font-black text-nova-violet uppercase">TECH NOVA CHALLENGE</span>, s'ouvre à tout le Bénin. Ce rendez-vous incontournable élargit son horizon et invite toutes les écoles techniques du pays à participer à cette épopée collective.
            </p>
          </MuseumBlock>
          
          <MuseumBlock delay={0.3}>
            <div 
              className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setSelectedImage("https://i.postimg.cc/bwMWB6L0/travaille_équipe.png")}
            >
              <img 
                src="https://i.postimg.cc/bwMWB6L0/travaille_équipe.png" 
                alt="Travail d'équipe Nova" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 flex items-center justify-center text-nova-black opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                <Maximize2 size={18} />
              </div>
            </div>
            <p className="mt-6 text-center text-gray-400 font-serif italic font-light text-sm md:text-base">L'innovation est le fruit d'une synergie collective et de la passion d'agir.</p>
          </MuseumBlock>
        </div>
      </section>

      {/* SECTION 3 : DÉFINITION */}
      <section className="py-24 md:py-40 px-6 bg-nova-gray/10 border-y border-black/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <MuseumBlock>
              <h2 className="editorial-title !text-nova-black text-4xl md:text-7xl mb-8 md:mb-12 !tracking-tight !normal-case text-center lg:text-left leading-tight md:leading-none !text-shadow-none">
                C'est quoi le <br />
                <span className="text-nova-violet italic font-light">TECH NOVA CHALLENGE ?</span>
              </h2>
            </MuseumBlock>
            <MuseumBlock delay={0.2}>
              <div className="museum-glass p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] text-base md:text-xl font-medium leading-relaxed space-y-6 md:space-y-8 shadow-sm">
                <p>
                  Le <span className="font-black text-nova-violet">TECH NOVA CHALLENGE</span> est une plateforme innovante dédiée à la promotion des talents et de la créativité parmi les jeunes formés aux sciences techniques et industrielles. 
                </p>
                <p className="font-serif italic text-nova-black/70">
                  Le nom résume notre vision : <strong className="font-black uppercase text-nova-black">TECH</strong> pour la technologie, <strong className="font-black uppercase text-nova-black">NOVA</strong> pour l’éclat de la nouveauté, et <strong className="font-black uppercase text-nova-black">CHALLENGE</strong> pour l’esprit de dépassement que nous cultivons.
                </p>
              </div>
            </MuseumBlock>
          </div>
        </div>
      </section>

      {/* SECTION 4 : LE BUT */}
      <section className="py-24 md:py-40 px-6 bg-white border-b border-black/5">
        <div className="container mx-auto max-w-4xl">
          <MuseumBlock>
             <h2 className="text-3xl md:text-7xl text-nova-black font-black uppercase tracking-tighter mb-12 md:mb-16 text-center">NOTRE RAISON D'ÊTRE</h2>
             <p className="text-lg md:text-3xl text-nova-black font-light leading-relaxed italic font-serif border-l-4 md:border-l-8 border-nova-violet pl-6 md:pl-16 text-left">
               Notre but fondamental est de promouvoir l’esprit d’équipe et l’excellence technologique chez les jeunes Béninois. Nous cherchons à inspirer une nouvelle génération capable d'explorer et de développer des solutions techniques novatrices ayant un impact positif et concret sur la société.
             </p>
          </MuseumBlock>
        </div>
      </section>

      {/* SECTION 5 : OBJECTIFS 2026 */}
      <section className="py-24 md:py-40 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <MuseumBlock>
            <h2 className="text-nova-black text-3xl md:text-8xl mb-16 md:mb-24 text-center font-black uppercase tracking-tighter leading-none">OBJECTIFS 2026</h2>
          </MuseumBlock>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              "Encourager l’innovation en offrant une tribune aux projets les plus audacieux.",
              "Favoriser l’apprentissage collaboratif par des sessions de formation de haut niveau.",
              "Reconnaître les talents émergents en récompensant officiellement l’ingéniosité.",
              "Promouvoir l’entrepreneuriat en accompagnant la transformation des idées en projets viables.",
              "Renforcer les compétences techniques pour exceller dans le parcours professionnel."
            ].map((text, idx) => (
              <MuseumBlock key={idx} delay={idx * 0.1}>
                <div className="museum-glass p-8 md:p-14 rounded-[2rem] md:rounded-[3.5rem] h-full flex flex-col border border-black/5 group hover:shadow-2xl hover:border-nova-violet/20 transition-all duration-700">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-nova-red text-white flex items-center justify-center mb-6 md:mb-10 group-hover:bg-nova-violet transition-colors">
                    <Target size={18} />
                  </div>
                  <p className="text-sm md:text-base font-bold leading-relaxed uppercase tracking-tight text-nova-black">
                    {text}
                  </p>
                </div>
              </MuseumBlock>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 : PARRAINAGE ACADÉMIQUE 2025 */}
      <section className="py-24 md:py-48 px-6 bg-nova-gray/5 border-y border-black/5 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          
          {/* Introduction de la section */}
          <MuseumBlock className="mb-32 text-center max-w-5xl mx-auto">
            <h2 className="editorial-title !text-nova-black text-center text-3xl md:text-6xl !tracking-tighter !normal-case leading-tight md:leading-none mb-12 !text-shadow-none">
              L'ENGAGEMENT DE NOS <br />
              <span className="text-nova-violet italic font-light">PARRAINS ACADÉMIQUES.</span>
            </h2>
            <div className="text-base md:text-xl text-nova-black/60 font-medium leading-relaxed space-y-6">
              <p>
                Le <span className="text-nova-black font-black">Tech Nova Challenge</span> ne serait pas ce qu'il est sans l'engagement fort et visionnaire de ses parrains académiques. Ces figures majeures de l'enseignement supérieur technique au Bénin incarnent la confiance institutionnelle et l'excellence qui donnent à notre compétition toute sa crédibilité et son envergure.
              </p>
              <p className="font-serif italic">
                Ils ne sont pas de simples soutiens de façade, mais de véritables piliers qui partagent notre conviction profonde : l'avenir technologique du Bénin se construit aujourd'hui, par et pour sa jeunesse créative. Leur patronage est un sceau de qualité, garantissant que ce concours s'inscrit dans une démarche éducative rigoureuse et ambitieuse.
              </p>
              <p>
                Nous sommes fiers et honorés de compter sur leur leadership inspirant pour guider cette aventure.
              </p>
            </div>
          </MuseumBlock>

          {/* Profil 1 : ENSET (Directeur) - Texte Gauche, Image Droite, Slide Droite */}
          <div className="grid lg:grid-cols-12 gap-12 md:gap-24 mb-40 items-center">
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet">Notre Parrain</h3>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-nova-black leading-none">
                  Professeur Titulaire <br /> Gustave DJEDATIN
                </h2>
                <p className="text-sm md:text-lg font-bold uppercase tracking-tight text-nova-violet">
                  Directeur de l'École Nationale Supérieure d'Enseignement Technique (ENSET)
                </p>
                <div className="h-px bg-nova-violet/10 w-24" />
                <p className="text-base md:text-xl text-nova-black/70 font-medium leading-relaxed italic border-l-2 border-nova-violet pl-6 font-serif">
                  Son leadership et son engagement indéfectible en faveur de l'innovation pédagogique font de lui un guide essentiel pour notre concours. Son parrainage symbolise l'excellence académique et technique que nous cherchons à promouvoir auprès de chaque participant.
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-5">
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                animate={{ 
                  brightness: [1, 1.05, 1],
                  scale: [1, 1.01, 1] 
                }}
                transition={{ 
                  x: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 1 },
                  brightness: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 group cursor-pointer"
                onClick={() => setSelectedImage("https://i.postimg.cc/d1NHf98c/le_directeur_de_l_enset_a_la_phase_finale_prise_de_parole.jpg")}
              >
                <img 
                  src="https://i.postimg.cc/d1NHf98c/le_directeur_de_l_enset_a_la_phase_finale_prise_de_parole.jpg" 
                  alt="Professeur Gustave DJEDATIN" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nova-black/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>

          {/* Profil 2 : INSTI (Directrice) - Image Gauche, Texte Droite, Slide Gauche */}
          <div className="grid lg:grid-cols-12 gap-12 md:gap-24 mb-48 items-center">
            <div className="lg:col-span-5">
               <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  animate={{ 
                    brightness: [1, 1.03, 1],
                    scale: [1, 1.01, 1] 
                  }}
                  transition={{ 
                    x: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 1 },
                    brightness: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                  }}
                  className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 group cursor-pointer"
                  onClick={() => setSelectedImage("https://i.postimg.cc/d0Pq0Yyq/DIRECTRICE_INSTI.jpg")}
                >
                  <img 
                    src="https://i.postimg.cc/d0Pq0Yyq/DIRECTRICE_INSTI.jpg" 
                    alt="Professeur Clotilde GUIDI TOGNON" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nova-black/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
            </div>
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet">Notre Marraine</h3>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-nova-black leading-none">
                  Professeur Titulaire <br /> Clotilde GUIDI TOGNON
                </h2>
                <p className="text-sm md:text-lg font-bold uppercase tracking-tight text-nova-violet">
                  Directrice de l'Institut National Supérieur de Technologie Industrielle (INSTI)
                </p>
                <div className="h-px bg-nova-violet/10 w-24" />
                <p className="text-base md:text-xl text-nova-black/70 font-medium leading-relaxed italic border-l-2 border-nova-violet pl-6 font-serif">
                  Son soutien actif et sa vision stratégique pour l'industrie technologique béninoise renforcent l'impact de Tech Nova Challenge. Son parrainage assure un ancrage solide dans la réalité du secteur industriel et ouvre aux lauréats des perspectives concrètes d'avenir.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Soutien Industriel Stratégique */}
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 mb-24 md:mb-48 items-center border-t border-black/5 pt-24">
             <div className="lg:col-span-5 order-last lg:order-first">
               <MuseumBlock delay={0.4}>
                  <div className="relative aspect-square rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl group cursor-pointer h-auto sm:h-[400px] md:h-[500px]">
                    <IndustrialSlideshow />
                    <div className="absolute inset-0 bg-gradient-to-t from-nova-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pointer-events-none">
                       <span className="text-white/80 text-[9px] md:text-[10px] uppercase font-black tracking-widest block mb-1 md:mb-2">Wisane (Ingco)</span>
                       <span className="text-white text-xl md:text-2xl font-black uppercase">Soutien Stratégique</span>
                    </div>
                  </div>
               </MuseumBlock>
             </div>
             <div className="lg:col-span-7">
               <MuseumBlock>
                  <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                    <div className="p-3 md:p-4 bg-nova-red text-white rounded-2xl shadow-xl shadow-nova-red/20">
                      <Building size={24} className="md:w-8 md:h-8" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-red">Secteur Industriel</span>
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-nova-black leading-relaxed mb-8 md:mb-10">
                    Nous recevons le soutien indéfectible de <span className="text-nova-red font-black uppercase tracking-tighter">WISANE (INGCO)</span>, partenaire officiel de l’événement depuis son origine.
                  </div>
                  <p className="text-sm md:text-lg text-nova-black/60 leading-relaxed font-medium font-serif italic mb-8 md:mb-10">
                    "Investir dans les jeunes, c’est investir dans l’avenir de notre industrie technologique nationale."
                  </p>
                  <div className="h-px bg-nova-red/10 w-full mb-8 md:mb-10" />
                  <img src="https://i.postimg.cc/6qhn75My/ingco_logo_png.png" alt="INGCO" className="h-10 md:h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
               </MuseumBlock>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER SILENCE */}
      <footer className="py-16 md:py-24 text-center border-t border-black/5 bg-white">
         <p className="text-[8px] md:text-[10px] font-black tracking-[0.5em] md:tracking-[0.8em] text-nova-black/20 uppercase font-display px-4">
            Tech Nova Challenge — Innovation, Excellence, Bénin.
         </p>
      </footer>
    </div>
  );
};

export default Home;