
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Target, Users2, ShieldCheck, Globe2, Lightbulb, Cpu, Award } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const AnimatedShape = ({ delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 0.4, scale: 1 }}
    animate={{ 
      rotate: [0, 90, 0],
      borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%", "30% 70% 70% 30% / 30% 30% 70% 70%"] 
    }}
    transition={{ 
      duration: 15, 
      repeat: Infinity, 
      delay,
      opacity: { duration: 2 } 
    }}
    className={`absolute bg-nova-violet/10 blur-3xl -z-10 ${className}`}
  />
);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progressY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative pt-40 pb-32 bg-white overflow-hidden selection:bg-nova-violet selection:text-white">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed top-0 left-0 w-1 h-full bg-gray-50 z-50">
        <motion.div style={{ height: progressY }} className="w-full bg-nova-violet" />
      </div>
      <AnimatedShape className="w-[500px] h-[500px] -top-20 -left-20" />
      <AnimatedShape className="w-[400px] h-[400px] top-1/2 -right-20" delay={2} />

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* HEADER SECTION */}
        <header className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">L'Essence de Nova</span>
            <h1 className="editorial-title text-[clamp(2.5rem,10vw,10rem)] leading-[0.85] text-nova-black mb-16">
              LE CATALYSEUR DE <br />
              <span className="text-nova-violet italic font-light">L'EXCELLENCE.</span>
            </h1>
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-7">
                <p className="text-2xl md:text-4xl font-light text-gray-400 leading-tight">
                  Le <span className="text-nova-black font-black">Tech Nova Challenge</span> est le premier concours technologique de référence au Bénin, conçu pour révéler le potentiel innovant des jeunes talents.
                </p>
              </div>
              <div className="md:col-span-5 pt-4">
                <p className="text-gray-500 leading-relaxed border-l border-gray-100 pl-8">
                  Une initiative née de la nécessité de bâtir un avenir technologique durable, ancrée dans les réalités béninoises pour répondre aux défis du développement local.
                </p>
              </div>
            </div>
          </motion.div>
        </header>

        {/* SECTION 1: ORIGINES ET HISTOIRE */}
        <section className="mb-64">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-12 -left-12 text-[15rem] font-black text-gray-50 -z-10 select-none">2025</div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">La Genèse</h2>
              <div className="space-y-6 text-gray-500 font-light text-lg leading-relaxed">
                <p>
                  Tout commence en <span className="text-nova-violet font-bold">2025</span>. Un tournant décisif s'opère dans l'écosystème béninois. Autour de <span className="text-nova-black font-bold">l'INSTI de Lokossa</span> et avec le soutien de la <span className="text-nova-black font-bold">FEUNSTIM</span> et <span className="text-nova-black font-bold">Odacesoft</span>, l'innovation trouve son arène.
                </p>
                <p>
                  La première finale, tenue le 30 juillet 2025, a vu des binômes visionnaires pitcher des solutions allant de l'IA à la gestion urbaine. Un accompagnement holistique, incluant des coachings intensifs au CAEB Lokossa, a posé les bases de notre méthode.
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-50 rounded-3xl flex items-center justify-center overflow-hidden relative group">
                <motion.div whileHover={{ scale: 1.1 }} className="absolute inset-0 bg-nova-violet/5 flex items-center justify-center">
                   <Cpu size={48} className="text-nova-violet opacity-20" />
                </motion.div>
              </div>
              <div className="aspect-square bg-nova-violet rounded-3xl flex items-center justify-center mt-12">
                 <Award size={48} className="text-white" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: MISSION ET ODD */}
        <section className="mb-64">
          <div className="text-center mb-24">
            <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Notre Impact</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Transformer les Idées<br/>en Solutions <span className="text-nova-violet italic font-light">Réelles.</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="text-center group">
              <div className="w-16 h-16 bg-nova-violet/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-nova-violet group-hover:text-white transition-colors duration-500">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Mission ODD</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Aligner l'innovation tech sur les Objectifs de Développement Durable pour un impact social et économique tangible.
              </p>
            </GlassCard>
            <GlassCard className="text-center group" delay={0.1}>
              <div className="w-16 h-16 bg-nova-violet/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-nova-violet group-hover:text-white transition-colors duration-500">
                <Globe2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Ancrage Local</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Favoriser des solutions adaptées aux réalités ouest-africaines, loin des modèles importés inadaptés.
              </p>
            </GlassCard>
            <GlassCard className="text-center group" delay={0.2}>
              <div className="w-16 h-16 bg-nova-violet/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-nova-violet group-hover:text-white transition-colors duration-500">
                <Users2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Collaboration</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Stimuler l'esprit entrepreneurial via des binômes obligatoires, créant un réseau soudé d'innovateurs.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* SECTION 3: ÉLIGIBILITÉ ET PROCESS */}
        <section className="mb-64 py-32 bg-nova-black rounded-[4rem] text-white px-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-nova-violet/10 blur-[100px]" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">Démocratiser<br/><span className="text-nova-violet italic">L'Innovation.</span></h2>
              <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
                Le concours s'adresse exclusivement aux jeunes béninois en formations techniques et professionnelles. L'évaluation repose uniquement sur <span className="text-white font-bold italic">l'originalité</span> et la <span className="text-white font-bold italic">faisabilité</span>.
              </p>
              <ul className="space-y-6">
                {[
                  { icon: <ShieldCheck />, text: "Binômes stables de deux personnes" },
                  { icon: <Rocket />, text: "Aucune expérience préalable exigée" },
                  { icon: <Lightbulb />, text: "Projets à fort impact social" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="text-nova-violet">{item.icon}</div>
                    <span className="font-medium tracking-tight uppercase text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-xl border border-white/10">
              <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-nova-violet">Le Parcours</h3>
              <div className="space-y-8">
                {[
                  { label: "Inscription", detail: "Formulaire en ligne + Dossier technique" },
                  { label: "Pré-sélection", detail: "Pitch oral devant jury expert" },
                  { label: "Coaching", detail: "Immersion prototypage & communication" },
                  { label: "Grand Final", detail: "Événement public & remise des trophées" }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="text-nova-violet font-black">0{i+1}</span>
                    <div>
                      <div className="font-bold uppercase tracking-widest text-sm mb-1">{step.label}</div>
                      <div className="text-gray-500 text-xs">{step.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: PARTENAIRES ET SOUTIENS */}
        <section className="mb-64">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Écosystème</span>
              <h2 className="text-5xl font-black tracking-tighter uppercase leading-[0.9]">Une Infrastructure de <span className="text-nova-violet italic font-light">Confiance.</span></h2>
            </div>
            <p className="text-gray-400 max-w-sm font-light">
              Nous collaborons avec les leaders du secteur pour offrir un environnement propice à l'éclosion des talents.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-30">
            <div className="text-center font-black text-2xl tracking-tighter grayscale hover:grayscale-0 transition-all cursor-default">FEUNSTIM</div>
            <div className="text-center font-black text-2xl tracking-tighter grayscale hover:grayscale-0 transition-all cursor-default">ODACESOFT</div>
            <div className="text-center font-black text-2xl tracking-tighter grayscale hover:grayscale-0 transition-all cursor-default">INSTI LOKOSSA</div>
            <div className="text-center font-black text-2xl tracking-tighter grayscale hover:grayscale-0 transition-all cursor-default text-nova-violet">INGCO BÉNIN</div>
          </div>
        </section>

        {/* SECTION 5: PERSPECTIVES 2026 */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-nova-violet/5 py-32 rounded-[5rem] border border-nova-violet/10 relative overflow-hidden"
          >
             <div className="relative z-10">
                <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Le Futur de Nova</span>
                <h2 className="editorial-title text-[clamp(2rem,7vw,7rem)] leading-none text-nova-black mb-12">
                   HORIZON <span className="text-nova-violet italic font-light">2026.</span>
                </h2>
                <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto mb-16 px-6">
                  Le Tech Nova Challenge vise à scaler son impact, en intégrant plus d'ODD et des phases internationales. L'édition 2026 confirmera notre rôle de moteur de changement.
                </p>
                <div className="flex flex-col items-center gap-6">
                  <div className="flex gap-4">
                    <a href="tel:0191921284" className="text-nova-black font-black uppercase tracking-widest text-xs hover:text-nova-violet transition-colors">
                      01 91 92 12 84
                    </a>
                    <span className="text-gray-200">|</span>
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">@TechNovaChallenge</span>
                  </div>
                  <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.4em]">Incarner l'excellence. Bâtir l'avenir.</p>
                </div>
             </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default About;
