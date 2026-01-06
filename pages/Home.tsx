
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, Lightbulb, Code, Target, Zap, Shield, Globe } from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroTextY = useTransform(smoothProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full bg-white selection:bg-nova-violet selection:text-white">
      
      {/* SECTION 1 — HERO CINÉMATIQUE */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <motion.div 
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto text-center"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] font-black tracking-[0.6em] text-nova-violet uppercase mb-12 block"
          >
            L'excellence technologique nationale
          </motion.span>
          <h1 className="editorial-title text-[clamp(2.5rem,11vw,11rem)] font-black text-nova-black leading-[0.82] mb-12">
            FORGER LA<br />
            <span className="italic font-light">SOUVERAINETÉ</span><br />
            <span className="text-nova-violet">PAR L'IMPACT.</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-400 font-light max-w-2xl mx-auto tracking-tight leading-relaxed">
            Tech Nova Challenge est le point de rencontre entre l'ambition pure et la technologie de rupture. Une nation se construit sur ses talents.
          </p>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 flex flex-col items-center gap-4"
        >
          <span className="text-[9px] font-bold tracking-[0.4em] text-gray-300 uppercase">Découvrir l'histoire</span>
          <div className="w-px h-12 bg-gradient-to-b from-nova-violet to-transparent" />
        </motion.div>
      </section>

      {/* SECTION 2 — MANIFESTE */}
      <section className="relative py-40 md:py-64 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-12 mb-20">
              <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Manifeste</span>
              <div className="space-y-6">
                {["Nous ne cherchons pas des participants.", "Nous cherchons des bâtisseurs.", "Des visionnaires.", "Des esprits capables de transformer", "une ligne de code en un levier", "de souveraineté numérique."].map((text, i) => (
                  <motion.h2 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className={`text-3xl md:text-6xl font-black tracking-tighter leading-none uppercase ${i % 2 !== 0 ? 'text-nova-violet' : 'text-nova-black'}`}
                  >
                    {text}
                  </motion.h2>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — AUDIENCE */}
      <section className="relative py-40 bg-nova-black px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="mb-24">
            <h2 className="editorial-title text-5xl md:text-9xl text-white opacity-10 leading-none mb-4">AUDIENCE</h2>
            <p className="text-nova-violet font-bold tracking-[0.3em] uppercase text-xs">Qui sont les acteurs du changement ?</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Code />, title: "Développeurs", desc: "Maîtres de la stack, architectes du code robuste." },
              { icon: <Lightbulb />, title: "Innovateurs", desc: "Esprits disruptifs voyant au-delà du possible." },
              { icon: <Users />, title: "Étudiants", desc: "La relève académique assoiffée de défis réels." }
            ].map((item, i) => (
              <GlassCard key={i} delay={i * 0.1} className="bg-white/5 border-white/10 group hover:bg-white/10">
                <div className="mb-10 text-nova-violet group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 40, strokeWidth: 1 })}
                </div>
                <h3 className="text-white text-2xl font-black mb-4 uppercase">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — POURQUOI */}
      <section className="relative py-48 bg-white px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <h2 className="text-4xl md:text-7xl font-light tracking-tighter leading-tight text-nova-black">
              Le Bénin ne manque pas de talents. Il manque de <span className="text-nova-violet font-black italic">passerelles</span>.
            </h2>
            <div className="h-px w-24 bg-nova-violet mx-auto" />
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
              Nous avons créé Tech Nova pour briser le plafond de verre. Pour que l'innovation locale ne reste pas un prototype, mais devienne un moteur économique national.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — DÉROULEMENT (ANIMATED LOOPS) */}
      <section className="relative py-40 bg-white px-6 border-t border-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-24">
            <div>
              <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-4">Le Parcours</span>
              <h2 className="text-5xl font-black tracking-tighter uppercase">4 Étapes Vers<br/>Le Sommet</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { step: "01", label: "CANDIDATURE", icon: <Target /> },
              { step: "02", label: "SÉLECTION", icon: <Shield /> },
              { step: "03", label: "MENTORAT", icon: <Zap /> },
              { step: "04", label: "FINALE", icon: <Globe /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                  className="text-6xl font-black text-gray-50 mb-6 group-hover:text-nova-violet/10 transition-colors"
                >
                  {item.step}
                </motion.div>
                <div className="flex items-center gap-4 text-nova-black">
                   <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                    className="p-2 bg-nova-violet/5 rounded-lg text-nova-violet"
                   >
                     {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                   </motion.div>
                   <span className="font-bold tracking-widest text-xs uppercase group-hover:text-nova-violet transition-colors">{item.label}</span>
                </div>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-gray-100" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — IMPACT */}
      <section className="relative py-64 bg-nova-black overflow-hidden px-6">
        <motion.div 
          style={{ x: useTransform(smoothProgress, [0.6, 1], [0, -200]) }}
          className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap pointer-events-none select-none"
        >
          <span className="text-[25vw] font-black text-white/5 leading-none uppercase">SOUVERAINETÉ IMPACT EXCELLENCE FUTUR</span>
        </motion.div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl text-white font-black leading-none uppercase mb-12">
              Une vision qui<br/>dépasse les<br/><span className="text-nova-violet italic">frontières.</span>
            </h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              Nous ne formons pas seulement des techniciens. Nous forgeons les leaders qui porteront la voix du Bénin sur la scène technologique mondiale.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA FINAL */}
      <section className="relative py-64 bg-white px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] text-nova-black mb-20 leading-tight">
              PRÊT À ÉCRIRE<br />
              <span className="text-nova-violet">L'HISTOIRE ?</span>
            </h2>
            <Button size="lg" className="scale-110 md:scale-125" onClick={() => navigate('/participate')}>Participer</Button>
            <p className="mt-20 text-[10px] font-bold tracking-[0.4em] text-gray-300 uppercase">
              Clôture des inscriptions : 15 octobre 2025
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
