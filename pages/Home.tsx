import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Target, Users, Zap, Award, ArrowDown, Quote, X, Maximize2, Building, GraduationCap
} from 'lucide-react';
import Button from '../components/Button';

// Composant de révélation de texte cinématique
const ElegantReveal: React.FC<{ text: string, delay?: number, className?: string }> = ({ text, delay = 0, className = "" }) => {
  const words = text.split(" ");
  return (
    <h1 className={`${className} flex flex-wrap justify-center text-center`}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mx-[0.15em] mb-[0.1em]">
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

// Visionneuse d'image (Lightbox) utilisant un PORTAIL
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
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [0.85, 0]);

  const supportersPhotos = [
    "https://i.postimg.cc/d1VNnfZx/les_trophées.jpg",
    "https://i.postimg.cc/wBHGRMq1/les_finalistes_et_l_equipe_tnc.jpg",
    "https://i.postimg.cc/26S9TtLJ/membre_du_jury_avec_un_membre_de_wisane.jpg",
    "https://i.postimg.cc/7hCsrTVV/prise_de_la_directrice_de_l_insti_et_du_dg_enset.jpg",
    "https://i.postimg.cc/PJL3n842/beau_moment_de_la_finale_la_directrice_de_l_insti.jpg"
  ];

  return (
    <div ref={mainRef} className="relative w-full bg-white selection:bg-nova-violet selection:text-white">
      
      {/* VISIONNEUSE GLOBALE */}
      <Lightbox src={selectedImage} onClose={() => setSelectedImage(null)} />

      {/* SECTION 1 : HEADER */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-6 py-32">
        <motion.div 
          style={{ scale: heroImageScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://i.postimg.cc/tgyMnJq1/belle_vue_d_ensemble_des_lauréats_avec_le_dg.jpg"
            alt="Tech Nova Challenge Team"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-[1]" />
        <div className="absolute inset-0 grid-blueprint z-[2]" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-16">
            <ElegantReveal 
              text="Et c'est reparti pour TECH NOVA CHALLENGE" 
              className="editorial-title"
            />
            
            <MuseumBlock delay={0.8}>
              <p className="text-lg md:text-2xl text-white font-medium tracking-tight max-w-3xl mx-auto font-serif italic px-6 leading-relaxed drop-shadow-md">
                Premier concours de référence pour l'innovation technologique des jeunes au Bénin.
              </p>
            </MuseumBlock>

            <MuseumBlock delay={1}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button size="lg" variant="accent" onClick={() => navigate('/participate')}>POSTULER MAINTENANT</Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/deroulement')} className="!border-white/40 !text-white hover:!bg-white hover:!text-black">DÉCOUVRIR LE DÉFI</Button>
              </div>
            </MuseumBlock>
          </div>
        </div>
      </section>

      {/* SECTION 2 : CONTEXTE */}
      <section className="py-40 px-6 bg-white relative">
        <div className="container mx-auto max-w-5xl">
          <MuseumBlock>
            <p className="text-2xl md:text-4xl text-nova-black font-light leading-[1.6] tracking-tight font-display mb-24">
              Pour cette édition 2026, le plus grand concours d'innovation Tech, <span className="font-black text-nova-violet uppercase">TECH NOVA CHALLENGE</span>, s'ouvre à tout le Bénin. Ce rendez-vous incontournable de l’ingéniosité étudiante élargit son horizon et invite toutes les universités et écoles techniques du pays à participer à cette aventure collective. Mais avant tout, clarifions les concepts qui fondent cette compétition unique en son genre.
            </p>
          </MuseumBlock>
          
          <MuseumBlock delay={0.3}>
            <div 
              className="relative w-full aspect-video md:aspect-[21/9] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setSelectedImage("https://i.postimg.cc/tgyMnJq1/belle_vue_d_ensemble_des_lauréats_avec_le_dg.jpg")}
            >
              <img 
                src="https://i.postimg.cc/tgyMnJq1/belle_vue_d_ensemble_des_lauréats_avec_le_dg.jpg" 
                alt="Tech Nova Challenge 2025" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/95 flex items-center justify-center text-nova-black opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <Maximize2 size={20} />
              </div>
            </div>
          </MuseumBlock>
        </div>
      </section>

      {/* SECTION 3 : DÉFINITION */}
      <section className="py-40 px-6 bg-nova-gray/10 border-y border-black/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <MuseumBlock>
              <h2 className="editorial-title !text-nova-black text-5xl md:text-7xl mb-12 !tracking-tight !normal-case text-left leading-none">
                C'est quoi le <br />
                <span className="text-nova-violet italic font-light">TECH NOVA CHALLENGE ?</span>
              </h2>
            </MuseumBlock>
            <MuseumBlock delay={0.2}>
              <div className="museum-glass p-10 md:p-16 rounded-[4rem] text-lg md:text-xl font-medium leading-relaxed space-y-8 shadow-sm">
                <p>
                  Le <span className="font-black text-nova-violet">TECH NOVA CHALLENGE</span> est une compétition innovante conçue pour promouvoir les talents, l’innovation et la créativité parmi les jeunes ayant suivi une formation technique ou professionnelle dans les domaines des sciences et techniques. 
                </p>
                <p className="font-serif italic text-nova-black/70">
                  Le nom même de l’événement résume son ambition : <strong className="font-black uppercase text-nova-black">TECH</strong> pour la technologie, <strong className="font-black uppercase text-nova-black">NOVA</strong> pour la nouveauté et l’éclat des idées, et <strong className="font-black uppercase text-nova-black">CHALLENGE</strong> pour l’esprit de défi et de compétition qu’il incarne.
                </p>
              </div>
            </MuseumBlock>
          </div>
        </div>
      </section>

      {/* SECTION 4 : LE BUT */}
      <section className="py-40 px-6 bg-white border-b border-black/5">
        <div className="container mx-auto max-w-4xl text-center">
          <MuseumBlock>
             <h2 className="text-4xl md:text-7xl text-nova-black font-black uppercase tracking-tighter mb-16">Le but du TECH NOVA CHALLENGE</h2>
             <p className="text-xl md:text-3xl text-nova-black font-light leading-relaxed italic font-serif border-l-8 border-nova-violet pl-10 md:pl-16 text-left">
               Le but fondamental de cette compétition est de promouvoir l’esprit d’équipe, l’innovation technologique et l’excellence dans le domaine des sciences et techniques industrielles, ainsi que dans les disciplines littéraires chez les jeunes Béninois. L’événement cherche à inspirer ces derniers à explorer et développer des solutions techniques novatrices ayant un impact positif et concret sur la société.
             </p>
          </MuseumBlock>
        </div>
      </section>

      {/* SECTION 5 : OBJECTIFS 2026 */}
      <section className="py-40 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <MuseumBlock>
            <h2 className="text-nova-black text-4xl md:text-8xl mb-24 text-center font-black uppercase tracking-tighter leading-none">Nos objectifs pour 2026</h2>
          </MuseumBlock>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Encourager l’innovation en stimulant la créativité des jeunes et en leur offrant une tribune pour exposer leurs projets les plus audacieux.",
              "Favoriser l’apprentissage et la collaboration en créant un environnement d’échange, de formation gratuite et de travail d’équipe.",
              "Reconnaître les talents émergents en récompensant officiellement l’ingéniosité et l’engagement des meilleurs binômes.",
              "Promouvoir l’entrepreneuriat en accompagnant les participants dans la transformation de leurs idées en projets concrets et viables.",
              "Renforcer les compétences techniques en offrant aux jeunes des formations complémentaires pour exceller dans leur parcours professionnel."
            ].map((text, idx) => (
              <MuseumBlock key={idx} delay={idx * 0.1}>
                <div className="museum-glass p-10 md:p-14 rounded-[3.5rem] h-full flex flex-col border border-black/5 group hover:shadow-2xl hover:border-nova-violet/20 transition-all duration-700">
                  <div className="w-12 h-12 rounded-2xl bg-nova-red text-white flex items-center justify-center mb-10 group-hover:bg-nova-violet transition-colors">
                    <Target size={20} />
                  </div>
                  <p className="text-base font-bold leading-relaxed uppercase tracking-tight text-nova-black">
                    {text}
                  </p>
                </div>
              </MuseumBlock>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 : SOUTIENS INSTITUTIONNELS - NOUVEAU DESIGN ÉDITORIAL */}
      <section className="py-48 px-6 bg-nova-gray/10 border-y border-black/5 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <MuseumBlock className="mb-32">
            <h2 className="editorial-title !text-nova-black text-center text-4xl md:text-6xl !tracking-tighter !normal-case leading-none mb-12">
              TECH NOVA CHALLENGE est grandement soutenu par de très grandes écoles et universités techniques du Bénin.
            </h2>
          </MuseumBlock>

          {/* ACADÉMIQUE */}
          <div className="grid lg:grid-cols-12 gap-16 mb-40 items-center">
            <div className="lg:col-span-7">
              <MuseumBlock>
                <div className="flex items-center gap-6 mb-12">
                  <div className="p-4 bg-nova-violet text-white rounded-2xl shadow-xl shadow-nova-violet/20">
                    <GraduationCap size={32} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-nova-violet">Parrainage Académique</span>
                </div>
                <div className="text-xl md:text-3xl font-light text-nova-black leading-relaxed italic font-serif border-l-4 border-nova-violet pl-10 mb-10">
                  "En effet, pour l’édition 2025 – la première édition – TECH NOVA CHALLENGE a bénéficié du parrainage officiel du <span className="text-nova-violet font-black">Professeur Titulaire Gustave DJEDATIN</span>, Directeur de l’ENSET, et de la <span className="text-nova-violet font-black">Professeur Titulaire Clotilde GUIDI TOGNON</span>, Directrice de l’INSTI."
                </div>
                <p className="text-lg text-nova-black/60 leading-relaxed font-medium">
                  Leur implication institutionnelle et personnelle a donné un rayonnement exceptionnel à ce projet étudiant, ancrant la compétition dans l'excellence académique nationale.
                </p>
              </MuseumBlock>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-6">
              <MuseumBlock delay={0.2}>
                 <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-black/5 flex items-center justify-center aspect-square group cursor-pointer" onClick={() => setSelectedImage("https://i.postimg.cc/tgRf7YDZ/ENSET.png")}>
                    <img src="https://i.postimg.cc/tgRf7YDZ/ENSET.png" alt="ENSET" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                 </div>
              </MuseumBlock>
              <MuseumBlock delay={0.4}>
                 <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-black/5 flex items-center justify-center aspect-square group cursor-pointer" onClick={() => setSelectedImage("https://i.postimg.cc/s2f81vKG/INSTI_LOKOSSA.png")}>
                    <img src="https://i.postimg.cc/s2f81vKG/INSTI_LOKOSSA.png" alt="INSTI" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                 </div>
              </MuseumBlock>
            </div>
          </div>

          {/* INDUSTRIEL */}
          <div className="grid lg:grid-cols-12 gap-16 mb-48 items-center flex-row-reverse">
             <div className="lg:col-span-5 order-last lg:order-first">
               <MuseumBlock delay={0.3}>
                  <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setSelectedImage("https://i.postimg.cc/26S9TtLJ/membre_du_jury_avec_un_membre_de_wisane.jpg")}>
                    <img src="https://i.postimg.cc/26S9TtLJ/membre_du_jury_avec_un_membre_de_wisane.jpg" alt="Wisane Partner" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-nova-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-10 left-10">
                       <span className="text-white/60 text-[10px] uppercase font-black tracking-widest block mb-2">Partenaire Industriel</span>
                       <span className="text-white text-2xl font-black uppercase">WISANE (INGCO)</span>
                    </div>
                  </div>
               </MuseumBlock>
             </div>
             <div className="lg:col-span-7">
               <MuseumBlock>
                  <div className="flex items-center gap-6 mb-12">
                    <div className="p-4 bg-nova-red text-white rounded-2xl shadow-xl shadow-nova-red/20">
                      <Building size={32} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-nova-red">Soutien Industriel</span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-nova-black leading-relaxed mb-10">
                    De plus, le concours a reçu le soutien indéfectible de la société de vente d’équipements techniques <span className="text-nova-red font-black uppercase tracking-tighter">WISANE (INGCO)</span>, partenaire officiel de l’événement.
                  </div>
                  <p className="text-lg text-nova-black/60 leading-relaxed font-medium font-serif italic mb-10">
                    "Loin d’être de simples sponsors, ces acteurs ont prouvé à quel point investir dans les jeunes, c’est investir dans l’avenir ; à quel point cette compétition constitue un atout majeur pour le développement technologique, l’employabilité et l’émergence d’une culture de l’innovation chez les étudiants béninois."
                  </p>
                  <div className="h-px bg-nova-red/10 w-full mb-10" />
                  <img src="https://i.postimg.cc/6qhn75My/ingco_logo_png.png" alt="INGCO" className="h-16 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity" />
               </MuseumBlock>
             </div>
          </div>

          {/* ALBUM MOMENTS FORTS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {supportersPhotos.map((src, i) => (
              <MuseumBlock key={i} delay={i * 0.1} className={i % 2 === 0 ? 'mt-8' : ''}>
                <div 
                  className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-black/5 shadow-lg group cursor-pointer relative"
                  onClick={() => setSelectedImage(src)}
                >
                  <img src={src} alt={`TNC 2025 ${i}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/95 p-4 rounded-full text-nova-black shadow-2xl">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>
              </MuseumBlock>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 : MISSION & VISION */}
      <section className="py-64 bg-nova-black text-white relative overflow-hidden px-6">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-32">
            <MuseumBlock>
              <div className="w-20 h-20 bg-nova-violet rounded-3xl flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(124,58,237,0.4)]">
                <Award size={32} />
              </div>
              <h2 className="editorial-title text-5xl font-black text-white leading-none mb-8">Mission :</h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed italic font-serif border-l-4 border-nova-violet pl-10">
                La mission de TECH NOVA CHALLENGE est de stimuler le potentiel des jeunes techniciens béninois en leur offrant une plateforme pour développer et présenter des projets techniques innovants. En facilitant l’accès à la formation, au mentorat et à la reconnaissance, l’événement aspire à former une nouvelle génération de professionnels créatifs et entreprenants, prêts à relever les défis technologiques et socio-économiques du pays.
              </p>
            </MuseumBlock>

            <MuseumBlock delay={0.2}>
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-10">
                <Zap size={32} className="text-nova-violet" />
              </div>
              <h2 className="editorial-title text-5xl font-black text-white leading-none mb-8">Vision :</h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Notre vision est de faire du TECH NOVA CHALLENGE le premier événement de référence pour l’innovation technique chez les jeunes au Bénin. Nous visons à en faire un catalyseur durable de l’innovation, un accélérateur de carrières et un creuset de collaborations entre le monde académique et l’industrie, contribuant activement au développement technologique et économique national.
              </p>
            </MuseumBlock>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-nova-violet/5 blur-[150px] rounded-full pointer-events-none" />
      </section>

      {/* SECTION 8 : PUBLIC CIBLE */}
      <section className="py-40 px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <MuseumBlock>
            <h2 className="text-nova-black text-5xl md:text-8xl mb-24 text-center font-black uppercase tracking-tighter">Public cible :</h2>
            <div className="p-10 md:p-20 bg-nova-gray/20 rounded-[4rem] border border-black/5 relative overflow-hidden backdrop-blur-sm">
               <div className="absolute top-0 right-0 w-80 h-80 bg-nova-violet/5 blur-[120px] -mr-40 -mt-40 pointer-events-none" />
               
               <div className="space-y-12 relative z-10">
                 <p className="text-2xl md:text-5xl text-nova-black font-bold leading-tight tracking-tighter font-display">
                   Le <span className="text-nova-violet uppercase">TECH NOVA CHALLENGE</span> s’adresse aux jeunes talents béninois âgés de 16 à 23 ans, inscrits en cycle de licence. 
                 </p>
                 
                 <div className="h-px bg-nova-black/10 w-full" />
                 
                 <div className="space-y-10 text-xl md:text-2xl font-light text-nova-black/60 leading-relaxed font-serif italic">
                    <p>
                      La compétition est volontairement ouverte à tous les domaines d’études – scientifiques, techniques, professionnels, voire littéraires – à condition que les projets soumis mettent en avant une innovation technologique et démontrent une faisabilité technique. Les participants doivent former des binômes et partager la même passion pour l’innovation, la création de valeur et l’impact social.
                    </p>
                 </div>
               </div>
               
               <div className="mt-24 pt-16 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="flex items-center gap-6">
                     <div className="w-16 h-16 rounded-3xl bg-nova-violet/5 flex items-center justify-center text-nova-violet"><Users size={32} /></div>
                     <div className="text-left">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-nova-black block mb-1">Collaboration</span>
                        <span className="text-xs font-medium text-gray-400 uppercase">Binômes Passionnés</span>
                     </div>
                  </div>
                  <Button size="lg" variant="accent" onClick={() => navigate('/participate')}>Postuler maintenant</Button>
               </div>
            </div>
          </MuseumBlock>
        </div>
      </section>

      {/* FOOTER SILENCE */}
      <footer className="py-24 text-center border-t border-black/5 bg-white">
         <p className="text-[10px] font-black tracking-[0.8em] text-nova-black/20 uppercase font-display">
            Tech Nova Challenge — Éducation, Innovation, Futur.
         </p>
      </footer>
    </div>
  );
};

export default Home;