
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, Users, ShieldCheck, 
  ArrowRight, GraduationCap, Building2, 
  Target, Zap, BookOpen, Scale, Award,
  CheckCircle2, Rocket, HeartHandshake, Sparkles, ChevronDown
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

// Fix: Explicitly typing RevealText as React.FC with optional children to ensure children prop is correctly recognized in JSX, 
// then safely convert to string for text processing.
const RevealText: React.FC<{ children?: React.ReactNode, className?: string, delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const textContent = typeof children === 'string' ? children : (React.Children.toArray(children).join(''));
  const words = textContent.split(" ");
  return (
    <p className={`${className} overflow-hidden flex flex-wrap justify-center`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: delay + (i * 0.05), 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

const PatronageCard = ({ label, name, sub, img, delay }: { label: string, name: string, sub: string, img: string, delay: number }) => {
  return (
    <div className="relative pt-20 pb-10 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center group cursor-default"
      >
        <motion.div
          whileHover={{ scale: 0.96, rotateX: 1, rotateY: -1 }}
          className="relative z-10 ml-20 md:ml-32 w-full bg-white/90 backdrop-blur-xl rounded-[3rem] p-10 md:p-16 border-[0.5px] border-nova-violet/20 shadow-2xl shine-container perspective-content"
        >
          <div className="flex flex-col">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.3 }}
              className="text-nova-violet font-black uppercase tracking-[0.5em] text-[10px] mb-6"
            >
              {label}
            </motion.span>
            <h3 className="text-nova-black font-black text-2xl md:text-4xl uppercase tracking-tighter leading-none mb-4">
              {name}
            </h3>
            <span className="text-gray-400 font-medium text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-80">
              {sub}
            </span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08, y: -20, rotate: 2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0 z-20 w-40 h-56 md:w-64 md:h-80 -mt-16 -ml-6 md:-ml-12 pointer-events-none"
        >
          <img
            src={img}
            alt={name}
            className="w-full h-full object-contain filter drop-shadow-[0_40px_60px_rgba(0,0,0,0.4)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Cinematic Parallax Transform
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroTranslateY = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const heroImageUrl = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2400";

  return (
    <div ref={containerRef} className="relative w-full bg-white selection:bg-nova-red selection:text-white overflow-x-hidden">
      
      {/* SESSION 1 : HERO - ULTRA IMMERSIVE */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Layer 0: Depth Background */}
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity, y: heroTranslateY }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={heroImageUrl} 
            alt="Innovation" 
            className="w-full h-full object-cover grayscale brightness-[0.3]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nova-black/80 via-nova-black/40 to-white/10" />
        </motion.div>

        {/* Layer 1: Ambient Glows */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-[50vw] h-[50vw] bg-nova-violet/20 blur-[150px] rounded-full pointer-events-none" 
        />
        
        {/* Layer 2: Main Content Reveal */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-center"
          >

            {/* Stage 2: Main Title - Line by Line */}
            <div className="mb-14 perspective-card">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="editorial-title text-[clamp(2.5rem,7vw,7rem)] font-black text-white leading-[0.9] tracking-tighter"
              >
                BIENVENUE AU <br />
                <span className="text-nova-violet italic font-light drop-shadow-[0_10px_30px_rgba(124,58,237,0.3)]">TECH NOVA CHALLENGE !</span>
              </motion.h1>
            </div>

            {/* Stage 3: Emotional Text */}
            <div className="max-w-4xl mx-auto mb-16">
              <RevealText delay={1.2} className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                Le premier concours de référence pour l'innovation technologique des jeunes au Bénin pour bâtir demain aujourd'hui.
              </RevealText>
            </div>

            {/* Stage 4: Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="flex flex-col md:flex-row items-center justify-center gap-10"
            >
              <Button size="lg" variant="accent" onClick={() => navigate('/edition-2026')}>
                L'ÉDITION 2026
              </Button>
              <button 
                onClick={() => navigate('/about')}
                className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.5em] text-white/50 hover:text-white transition-all duration-500"
              >
                Vision Institutionnelle 
                <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 400 }}><ArrowRight size={18} /></motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Scroller Indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white">Scroll</span>
          <ChevronDown size={24} className="text-white" />
        </motion.div>
      </section>

      {/* SESSION 2 : DÉFINITION - EMERGENCE */}
      <section className="py-64 px-6 bg-white relative overflow-hidden">
        <div className="absolute -left-40 top-40 w-[60vw] h-[60vw] bg-nova-violet/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-40"
          >
            <span className="text-nova-violet font-bold tracking-[0.6em] uppercase text-[11px] block mb-14">Le Programme</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black mb-20 leading-tight">
              Qu'est ce que le <br />
              <span className="text-nova-violet italic font-light uppercase underline decoration-nova-violet/20 underline-offset-12">TECH NOVA CHALLENGE ?</span>
            </h2>
            <div className="text-2xl md:text-3xl text-gray-400 font-light leading-relaxed space-y-16">
              <RevealText delay={0.2}>
                Le TNC est un concours national d’innovation technologique qui accompagne les jeunes talents universitaires vers des solutions concrètes.
              </RevealText>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-nova-black font-medium border-l-[6px] border-nova-violet pl-14 text-left py-4"
              >
               Il accompagne les porteurs de projets tout au long du processus, de l’idée à la concrétisation, avec un suivi, du mentorat et un soutien financier.
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SESSION 3 : ANCRAGE INSTITUTIONNEL - DEPTH & PARALLAX */}
      <section className="py-64 px-6 bg-gray-50 border-y border-gray-100 relative overflow-visible">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-24 md:gap-32 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 sticky top-32"
            >
              <span className="text-nova-violet font-bold tracking-[0.6em] uppercase text-[11px] block mb-14">Ancrage Institutionnel</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-nova-black leading-none mb-16">
                UN SOUTIEN <br /><span className="text-nova-violet">D'EXCEPTION.</span>
              </h2>
              <div className="space-y-14 text-xl text-gray-500 font-light leading-relaxed">
                <p>
                  Le TECH NOVA CHALLENGE bénéficie du patronage officiel des plus prestigieuses universités scientifiques du Bénin, notamment l’École Nationale Supérieure d’Enseignement Technique (ENSET) et l’Institut National Supérieur de Technologie Industrielle (INSTI), qui soutiennent et encadrent son organisation.
                </p>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-12 bg-white rounded-[3rem] border border-nova-violet/10 flex items-center gap-10 group shadow-lg transition-all shine-container"
                >
                  <div className="w-20 h-20 bg-nova-violet/5 rounded-3xl flex items-center justify-center text-nova-violet">
                    <HeartHandshake size={40} />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-nova-violet">Partenaire Officiel</span>
                    <div className="text-3xl font-black text-nova-black mt-1 uppercase">WISANE (INGCO)</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-24 md:space-y-32 pt-20 lg:pt-0">
               <PatronageCard 
                 label="PARRAINAGE"
                 name="Prof. Gustave DJEDATIN"
                 sub="DIRECTEUR DE L'ENSET"
                 img="https://lh3.googleusercontent.com/d/1yDq595M_rA74uUatJj6k-uN_p_fQ7G9F"
                 delay={0.2}
               />
               
               <PatronageCard 
                 label="MARRAINAGE"
                 name="Prof. Clotilde GUIDI TOGNON"
                 sub="DIRECTRICE DE L'INSTI"
                 img="https://lh3.googleusercontent.com/d/1vQG_H8-p-q-m_p-q-m_p-q-m_p-q-m_p"
                 delay={0.4}
               />
            </div>
          </div>
        </div>
      </section>

      {/* SESSION 4 : CIBLE - INTERACTIVE GRID */}
      <section className="py-64 px-6 bg-white overflow-hidden relative">
        <div className="container mx-auto max-w-5xl">
          <header className="text-center mb-40">
            <span className="text-nova-violet font-bold tracking-[0.6em] uppercase text-[11px] block mb-10">Éligibilité</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-nova-black">À qui s'adresse <br /><span className="text-nova-violet italic font-light">ce défi ?</span></h2>
          </header>

          <div className="space-y-24 text-2xl md:text-3xl font-light text-gray-500 leading-relaxed">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-12 group"
            >
              <div className="mt-3 text-nova-violet p-4 bg-nova-violet/5 rounded-3xl group-hover:bg-nova-violet group-hover:text-white transition-all duration-700">
                <Users size={48} />
              </div>
              <span>
                Le <strong className="text-nova-black font-black">Tech Nova Challenge</strong> vise les jeunes talents béninois passionnés par la technique et l'innovation, âgés de <strong className="text-nova-black">15 à 25 ans</strong>.
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-12 group"
            >
              <div className="mt-3 text-nova-violet p-4 bg-nova-violet/5 rounded-3xl group-hover:bg-nova-violet group-hover:text-white transition-all duration-700">
                <Zap size={48} />
              </div>
              <span>
                La participation se fait exclusivement <strong className="text-nova-black">en binôme</strong>. L'interdisciplinarité entre inventeur et gestionnaire est la clé du succès.
              </span>
            </motion.div>

            <GlassCard className="mt-32 p-16 md:p-24 border-gray-100 bg-gray-50/50">
  <div className="text-[11px] font-black uppercase tracking-[0.4em] text-nova-violet mb-12">
    Un parcours structuré en 3 étapes clés
  </div>

  <div className="grid md:grid-cols-3 gap-16">
    {[
      {
        title: "Sélection",
        desc: "Les candidats soumettent un dossier technique solide accompagné d’une vidéo de pitch, permettant d’évaluer la pertinence, la faisabilité et l’impact de leur projet."
      },
      {
        title: "Immersion",
        desc: "Les équipes retenues bénéficient d’une formation intensive de 3 jours, axée sur le renforcement des compétences techniques, entrepreneuriales et stratégiques."
      },
      {
        title: "Apothéose",
        desc: "Les projets finalistes sont présentés lors d’une finale publique devant un jury d’experts, marquant l’aboutissement du parcours et la mise en lumière des meilleures solutions."
      }
    ].map((step, idx) => (
      <motion.div
        key={idx}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 + idx * 0.1 }}
      >
        <h4 className="text-nova-black font-black uppercase text-base">
          {idx + 1}. {step.title}
        </h4>
        <p className="text-base leading-relaxed text-gray-400 font-light">
          {step.desc}
        </p>
      </motion.div>
    ))}
  </div>
</GlassCard>

          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-40 p-16 md:p-32 bg-nova-black text-white rounded-[5rem] relative overflow-hidden text-center shine-container shadow-3xl"
          >
            <motion.h3 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 relative z-10"
            >
              Rejoignez l'élite technologique
            </motion.h3>
            <div className="flex justify-center relative z-10">
              <Button size="lg" variant="accent" onClick={() => navigate('/participate')}>Postuler maintenant</Button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-nova-violet/20 via-transparent to-nova-red/10 pointer-events-none" />
            <div className="absolute -top-1/2 -right-1/4 w-[60vw] h-[60vw] bg-nova-violet/10 blur-[150px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* SESSION 7 : PERSPECTIVES 2026 - HORIZON REVEAL */}
      <section className="py-80 px-6 bg-gray-50 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <span className="text-nova-violet font-bold tracking-[0.6em] uppercase text-[11px] block mb-14">Futur & Horizons</span>
          <h2 className="editorial-title text-[clamp(3rem,12vw,14rem)] text-nova-black mb-20 leading-[0.8]">
            HORIZON <br />
            <span className="text-nova-violet italic font-light">2026.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mb-32 text-left">
             {[
               { price: "500.000 FCFA", sub: "1er Prix + Excellence", icon: <Award size={48} className="text-nova-red" /> },
               { price: "300.000 FCFA", sub: "2e Prix + Mérite", icon: <Award size={48} className="text-nova-violet" /> },
               { price: "200.000 FCFA", sub: "3e Prix + Distinction", icon: <Award size={48} className="text-gray-300" /> }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                 className="p-12 bg-white rounded-[3.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-700 shine-container"
               >
                  <motion.div 
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="mb-10"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-3xl font-black text-nova-black mb-2">{item.price}</div>
                  <div className="text-[11px] uppercase font-bold tracking-[0.4em] text-gray-400">{item.sub}</div>
               </motion.div>
             ))}
          </div>
          
          <div className="max-w-3xl mx-auto space-y-16">
            <RevealText className="text-2xl text-gray-500 font-light leading-relaxed">
              La deuxième édition, qui se déroulera de janvier à mai 2026, s’ouvre à tous les talents du Bénin ! Cette année, vous aurez l’opportunité de passer vos idées du papier à la réalité grâce à une phase de prototypage guidée et complète.
            </RevealText>
            <div className="flex flex-col md:flex-row justify-center gap-10">
               <Button size="lg" variant="accent" onClick={() => navigate('/participate')}>Postuler pour 2026</Button>
               <Button variant="outline" size="lg" onClick={() => navigate('/edition-2026')}>Voir le Programme</Button>
            </div>
          </div>
        </div>
        
        {/* Deep Atmospheric Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-nova-violet/5 blur-[200px] rounded-full pointer-events-none" />
      </section>

    </div>
  );
};

export default Home;
