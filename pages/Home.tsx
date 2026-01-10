
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Globe, Target, Zap, Rocket, Users, Award, ShieldCheck, Microscope, Cpu
} from 'lucide-react';
import Button from '../components/Button';

const LetterReveal: React.FC<{ text: string, delay?: number, className?: string }> = ({ text, delay = 0, className = "" }) => {
  const letters = text.split("");
  return (
    <h1 className={`${className} flex flex-wrap justify-center overflow-hidden`}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0, rotate: 10 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: false }}
          transition={{ 
            duration: 1, 
            delay: delay + (i * 0.03), 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

const MuseumBlock: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
};

const ObjectiveCard: React.FC<{ text: string, idx: number }> = ({ text, idx }) => (
  <MuseumBlock delay={idx * 0.1}>
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      className="museum-glass p-10 rounded-[2.5rem] h-full flex flex-col justify-between border border-black/5 group transition-all duration-700"
    >
      <div className="w-10 h-10 rounded-xl bg-nova-black text-white flex items-center justify-center mb-8 group-hover:bg-nova-violet transition-colors">
        <Target size={18} />
      </div>
      <p className="text-sm font-bold leading-relaxed uppercase tracking-tight text-nova-black">
        {text}
      </p>
    </motion.div>
  </MuseumBlock>
);

const Home: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="relative w-full bg-white grid-blueprint">
      
      {/* SECTION 1 : HERO IMMERSIF */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-black/5">
        <motion.div 
          style={{ y: useTransform(smoothProgress, [0, 0.2], [0, 150]) }}
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        >
          <div className="absolute top-0 left-0 w-full h-full grid-blueprint" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-black/10 rounded-full"
          />
        </motion.div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center space-y-12">
            <LetterReveal 
              text="Et c'est reparti pour TECH NOVA CHALLENGE" 
              className="editorial-title text-[clamp(2rem,9vw,9rem)]"
            />
            
            <MuseumBlock delay={0.8}>
              <motion.div 
                style={{ scaleX: useTransform(smoothProgress, [0, 0.1], [0, 1]) }}
                className="h-px bg-nova-black/10 w-48 mx-auto mb-12"
              />
              <p className="text-lg md:text-2xl text-nova-black font-medium tracking-tight max-w-2xl mx-auto text-balance">
                Premier concours de référence pour l'innovation technologique des jeunes au Bénin.
              </p>
            </MuseumBlock>

            <MuseumBlock delay={1.2}>
              <Button size="lg" onClick={() => navigate('/edition-2026')}>DÉCOUVRIR LE DÉFI</Button>
            </MuseumBlock>
          </div>
        </div>
      </section>

      {/* SECTION 2 : CONTEXTE & OUVERTURE NATIONALE */}
      <section className="py-20 px-6 bg-white border-b border-black/5 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <MuseumBlock>
            <p className="text-2xl md:text-4xl text-nova-black font-light leading-[1.6] tracking-tight">
              Pour cette édition 2026, le plus grand concours d'innovation Tech, <span className="font-black text-nova-violet">TECH NOVA CHALLENGE</span>, s'ouvre à tout le Bénin. Ce rendez-vous incontournable de l’ingéniosité étudiante élargit son horizon et invite toutes les universités et écoles techniques du pays à participer à cette aventure collective. Mais avant tout, clarifions les concepts qui fondent cette compétition unique en son genre.
            </p>
          </MuseumBlock>
        </div>
        
        {/* Abstract Benin Map Parallax */}
        <motion.div 
          style={{ 
            y: useTransform(smoothProgress, [0.1, 0.3], [100, -100]),
            opacity: useTransform(smoothProgress, [0.1, 0.2, 0.3], [0, 0.1, 0])
          }}
          className="absolute right-0 top-0 h-full pointer-events-none"
        >
          <svg viewBox="0 0 400 600" className="h-full w-auto text-nova-violet fill-none stroke-current stroke-[0.5]">
             <path d="M150,50 L200,80 L250,150 L280,300 L250,500 L180,550 L120,520 L80,400 L100,200 Z" />
          </svg>
        </motion.div>
      </section>

      {/* SECTION 3 : DÉFINITION DU CONCEPT */}
      <section className="py-20 px-6 bg-nova-gray/20 relative border-b border-black/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <MuseumBlock>
              <h2 className="editorial-title text-5xl md:text-8xl mb-12">
                C'est quoi le <br />
                <span className="text-nova-violet italic font-light">TECH NOVA CHALLENGE ?</span>
              </h2>
            </MuseumBlock>
            <MuseumBlock delay={0.2}>
              <div className="museum-glass p-12 rounded-[4rem] text-lg md:text-xl font-medium leading-relaxed space-y-8">
                <p>
                  Le TECH NOVA CHALLENGE est une compétition innovante conçue pour promouvoir les talents, l’innovation et la créativité parmi les jeunes ayant suivi une formation technique ou professionnelle dans les domaines des sciences et techniques. 
                </p>
                <p>
                  Il s'agit d'une première au Bénin, offrant une plateforme inédite pour encourager et célébrer l’ingéniosité des jeunes esprits. Le nom même de l’événement résume son ambition : <strong className="font-black uppercase">TECH</strong> pour la technologie, <strong className="font-black uppercase">NOVA</strong> pour la nouveauté et l’éclat des idées, et <strong className="font-black uppercase">CHALLENGE</strong> pour l’esprit de défi et de compétition qu’il incarne.
                </p>
              </div>
            </MuseumBlock>
          </div>
        </div>
      </section>

      {/* SECTION 4 : BUT DU TECH NOVA CHALLENGE */}
      <section className="py-20 px-6 bg-white border-b border-black/5">
        <div className="container mx-auto max-w-4xl text-center">
          <MuseumBlock>
            <motion.div 
              style={{ width: useTransform(smoothProgress, [0.3, 0.4], ["0%", "100%"]) }}
              className="h-px bg-nova-black/10 mx-auto mb-20"
            />
            <h2 className="editorial-title text-4xl md:text-6xl mb-16 leading-tight">Le but du TECH NOVA CHALLENGE</h2>
            <p className="text-xl md:text-2xl text-nova-black font-light leading-relaxed italic border-l-4 border-nova-violet pl-10 text-left">
              Le but fondamental de cette compétition est de promouvoir l’esprit d’équipe, l’innovation technologique et l’excellence dans le domaine des sciences et techniques industrielles, ainsi que dans les disciplines littéraires chez les jeunes Béninois. L’événement cherche à inspirer ces derniers à explorer et développer des solutions techniques novatrices ayant un impact positif et concret sur la société.
            </p>
          </MuseumBlock>
        </div>
      </section>

      {/* SECTION 5 : OBJECTIFS 2026 */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <MuseumBlock>
            <h2 className="editorial-title text-4xl md:text-8xl mb-24 text-center">Nos objectifs pour 2026</h2>
          </MuseumBlock>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ObjectiveCard idx={1} text="Encourager l’innovation en stimulant la créativité des jeunes et en leur offrant une tribune pour exposer leurs projets les plus audacieux." />
            <ObjectiveCard idx={2} text="Favoriser l’apprentissage et la collaboration en créant un environnement d’échange, de formation gratuite et de travail d’équipe." />
            <ObjectiveCard idx={3} text="Reconnaître les talents émergents en récompensant officiellement l’ingéniosité et l’engagement des meilleurs binômes." />
            <ObjectiveCard idx={4} text="Promouvoir l’entrepreneuriat en accompagnant les participants dans la transformation de leurs idées en projets concrets et viables." />
            <ObjectiveCard idx={5} text="Renforcer les compétences techniques en offrant aux jeunes des formations complémentaires pour exceller dans leur parcours professionnel." />
          </div>
        </div>
      </section>

      {/* SECTION 6 : SOUTIENS INSTITUTIONNELS */}
      <section className="py-20 px-6 bg-nova-gray/10 border-y border-black/5 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          {/* Fix: museum-reveal typo corrected to MuseumBlock */}
          <MuseumBlock>
            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-24 text-center max-w-4xl mx-auto">
              TECH NOVA CHALLENGE est grandement soutenu par de très grandes écoles et universités techniques du Bénin.
            </h3>
          </MuseumBlock>

          <div className="grid lg:grid-cols-2 gap-12 mb-32">
            <MuseumBlock delay={0.1}>
              <div className="museum-glass p-12 rounded-[3.5rem] h-full">
                <p className="text-nova-black font-medium leading-relaxed">
                  En effet, pour l’édition 2025 – la première édition – TECH NOVA CHALLENGE a bénéficié du parrainage officiel du Professeur Titulaire <strong className="text-nova-violet">Gustave DJEDATIN</strong>, Directeur de l’École Nationale Supérieure d’Enseignement Technique (ENSET), et de la Professeur Titulaire <strong className="text-nova-violet">Clotilde GUIDI TOGNON</strong>, Directrice de l’Institut National Supérieur de Technologie Industrielle (INSTI). Leur implication institutionnelle et personnelle a donné un rayonnement exceptionnel à ce projet étudiant.
                </p>
              </div>
            </MuseumBlock>
            <MuseumBlock delay={0.2}>
              <div className="museum-glass p-12 rounded-[3.5rem] h-full">
                <p className="text-nova-black font-medium leading-relaxed">
                  De plus, le concours a reçu le soutien indéfectible de la société de vente d’équipements techniques <strong className="font-black">WISANE (INGCO)</strong>, partenaire officiel de l’événement. Loin d’être de simples sponsors, ces acteurs ont prouvé à quel point investir dans les jeunes, c’est investir dans l’avenir ; à quel point cette compétition constitue un atout majeur pour le développement technologique, l’employabilité et l’émergence d’une culture de l’innovation chez les étudiants béninois.
                </p>
              </div>
            </MuseumBlock>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
             {["ENSET", "INSTI", "INGCO", "SÈMÈ CITY"].map((partner, i) => (
               <MuseumBlock key={partner} delay={i * 0.1}>
                 <div className="px-12 py-6 rounded-full border border-black/5 bg-white/50 backdrop-blur-md grayscale hover:grayscale-0 transition-all duration-700 flex items-center gap-4">
                    {partner === "INGCO" && <img src="https://i.postimg.cc/6qhn75My/ingco_logo_png.png" className="h-5" alt="Ingco" />}
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">{partner}</span>
                 </div>
               </MuseumBlock>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 : ALBUM PARALLAX 2025 */}
      <section className="relative h-[120vh] bg-white overflow-hidden py-32 border-b border-black/5">
        <MuseumBlock>
           <h3 className="text-center text-nova-violet font-black tracking-[0.8em] uppercase text-[10px] mb-24">Archives — Édition 2025</h3>
        </MuseumBlock>
        
        <div className="container mx-auto max-w-7xl relative h-full">
          {/* Layer 1 - Deep Background */}
          <motion.div 
            style={{ y: useTransform(smoothProgress, [0.6, 0.8], [200, -200]) }}
            className="absolute left-[5%] top-[10%] w-64 h-80 rounded-[3rem] overflow-hidden border border-black/5 shadow-xl opacity-60"
          >
            <img src="https://i.postimg.cc/VNY36Mt9/formation.jpg" className="w-full h-full object-cover" alt="Formation" />
          </motion.div>

          {/* Layer 2 - Mid Left */}
          <motion.div 
            style={{ y: useTransform(smoothProgress, [0.6, 0.8], [0, -350]) }}
            className="absolute left-[25%] top-[5%] w-80 h-[500px] rounded-[4rem] overflow-hidden border border-black/10 z-20 shadow-2xl"
          >
            <img src="https://i.postimg.cc/XJvS2F7Y/FINALE_PRESElection.jpg" className="w-full h-full object-cover" alt="Finale" />
          </motion.div>

          {/* Layer 3 - Main Center */}
          <motion.div 
            style={{ 
              y: useTransform(smoothProgress, [0.6, 0.8], [400, -100]),
              scale: useTransform(smoothProgress, [0.65, 0.75], [0.95, 1.05])
            }}
            className="absolute left-1/2 -translate-x-1/2 top-[15%] w-[80%] md:w-[600px] h-[700px] rounded-[5rem] overflow-hidden border-2 border-nova-violet/10 z-30 shadow-3xl group cursor-pointer"
          >
            <img src="https://i.postimg.cc/tg28VTdM/BON_FINALISTES.jpg" className="w-full h-full object-cover" alt="Vainqueurs" />
            <div className="absolute inset-0 bg-nova-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-nova-black"><Globe size={24} /></div>
            </div>
          </motion.div>

          {/* Layer 4 - Right Float */}
          <motion.div 
            style={{ y: useTransform(smoothProgress, [0.6, 0.8], [600, 0]) }}
            className="absolute right-[5%] top-[30%] w-72 h-[450px] rounded-[3.5rem] overflow-hidden border border-black/5 z-20"
          >
            <img src="https://i.postimg.cc/fLsjZj0N/visite_scop.jpg" className="w-full h-full object-cover" alt="Visite SCOP" />
          </motion.div>

          {/* Layer 5 - Bottom Right Foreground */}
          <motion.div 
            style={{ y: useTransform(smoothProgress, [0.6, 0.8], [800, 200]) }}
            className="absolute right-[20%] top-[60%] w-56 h-72 rounded-[2.5rem] overflow-hidden border border-black/5 z-40 opacity-40 blur-[1px]"
          >
            <img src="https://i.postimg.cc/BZk9gXrw/récré.jpg" className="w-full h-full object-cover" alt="Échanges" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 : MISSION */}
      <section className="py-24 px-6 bg-white border-b border-black/5">
        <div className="container mx-auto max-w-4xl text-center">
          <MuseumBlock>
             <h2 className="editorial-title text-5xl md:text-8xl mb-12">Mission :</h2>
             <p className="text-xl md:text-3xl text-nova-black font-light leading-[1.8] text-balance">
               La mission de <span className="font-black text-nova-violet">TECH NOVA CHALLENGE</span> est de stimuler le potentiel des jeunes techniciens béninois en leur offrant une plateforme pour développer et présenter des projets techniques innovants. En facilitant l’accès à la formation, au mentorat et à la reconnaissance, l’événement aspire à former une nouvelle génération de professionnels créatifs et entreprenants, prêts à relever les défis technologiques et socio-économiques du pays.
             </p>
          </MuseumBlock>
        </div>
      </section>

      {/* SECTION 9 : VISION */}
      <section className="py-24 px-6 bg-nova-gray/5 border-b border-black/5">
        <div className="container mx-auto max-w-4xl text-center">
          <MuseumBlock>
             <h2 className="editorial-title text-5xl md:text-8xl mb-12">Vision :</h2>
             <p className="text-xl md:text-3xl text-nova-black font-light leading-[1.8] text-balance">
               Notre vision est de faire du <span className="font-black text-nova-violet">TECH NOVA CHALLENGE</span> le premier événement de référence pour l’innovation technique chez les jeunes au Bénin. Nous visons à en faire un catalyseur durable de l’innovation, un accélérateur de carrières et un creuset de collaborations entre le monde académique et l’industrie, contribuant activement au développement technologique et économique national.
             </p>
          </MuseumBlock>
        </div>
      </section>

      {/* SECTION 10 : PUBLIC CIBLE */}
      <section className="py-32 px-6 bg-white relative">
        <div className="container mx-auto max-w-5xl">
          <MuseumBlock>
            <h2 className="editorial-title text-5xl md:text-8xl mb-24 text-center">Public cible :</h2>
            <div className="p-12 md:p-24 bg-nova-gray/20 rounded-[4rem] border border-black/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-nova-violet/5 blur-[100px] -mr-32 -mt-32" />
               
               <div className="space-y-12">
                 <p className="text-2xl md:text-4xl text-nova-black font-bold leading-[1.4] tracking-tighter">
                   Le <span className="text-nova-violet">TECH NOVA CHALLENGE</span> s’adresse aux jeunes talents béninois âgés de 16 à 23 ans, actuellement inscrits en cycle de licence (ou équivalent) dans n’importe quelle filière ou institution universitaire du Bénin. 
                 </p>
                 
                 <div className="h-px bg-nova-black/10 w-full" />
                 
                 <div className="space-y-8 text-lg md:text-xl font-medium text-nova-black/70 leading-relaxed">
                    <p>
                      La compétition est volontairement ouverte à tous les domaines d’études – scientifiques, techniques, professionnels, voire littéraires – à condition que les projets soumis mettent en avant une innovation technologique et démontrent une faisabilité technique. 
                    </p>
                    <p>
                      Les participants doivent former des binômes et partager la même passion pour l’innovation, la création de valeur et l’impact social.
                    </p>
                 </div>
               </div>
               
               <div className="mt-20 pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-12 rounded-full bg-nova-violet/5 flex items-center justify-center text-nova-violet"><Users size={24} /></div>
                     <span className="text-[10px] font-black uppercase tracking-widest">Binômes de Talents</span>
                  </div>
                  <Button size="lg" onClick={() => navigate('/participate')}>Postuler maintenant</Button>
               </div>
            </div>
          </MuseumBlock>
        </div>
      </section>

      {/* FINAL SILENCE — MUSEUM CLOSURE */}
      <section className="py-24 text-center border-t border-black/5 bg-white">
         <p className="text-[10px] font-black tracking-[0.6em] text-nova-black/20 uppercase">
            Tech Nova Challenge — Éducation, Innovation, Futur.
         </p>
      </section>
    </div>
  );
};

export default Home;
