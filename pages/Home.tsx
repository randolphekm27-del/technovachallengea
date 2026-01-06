
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, Lightbulb, Code, Target, Zap, Shield, Globe } from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

// Composant pour animer le texte mot par mot
const WordReveal = ({ text, className = "", delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-2 mr-[0.2em]">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: delay + (i * 0.05), 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

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
      
      {/* SECTION 1 — HERO CINÉMATIQUE (CORRIGÉE POUR LE NAVBAR) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 md:pt-40 pb-20 overflow-hidden">
        <motion.div 
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto text-center"
        >
          <h1 className="editorial-title text-[clamp(2rem,9vw,9rem)] font-black text-nova-black leading-[0.85] mb-12">
            <WordReveal text="PREMIER CONCOURS" /> <br />
            <motion.span 
              initial={{ opacity: 0, rotateX: 45 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="inline-block italic font-light text-nova-violet"
            >
              D'INNOVATION
            </motion.span><br />
            <WordReveal text="TECHNOLOGIQUE AU BÉNIN." delay={0.4} />
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-sm md:text-xl text-gray-400 font-light max-w-2xl mx-auto tracking-tight leading-relaxed mb-16"
          >
            Tech Nova Challenge est le point de rencontre entre l'ambition pure et la technologie de rupture. Une nation se construit sur ses talents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="relative inline-block"
          >
            {/* Lueur pulsante derrière le bouton */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-nova-violet blur-2xl -z-10"
            />
            <Button size="lg" onClick={() => navigate('/participate')}>Participer</Button>
          </motion.div>
        </motion.div>
        
        {/* Background Decorative Circles */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-nova-black rounded-full"
           />
        </div>
      </section>

      {/* SECTION 2 — MANIFESTE */}
      <section className="relative py-40 md:py-64 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-12 mb-20">
              <motion.span 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8"
              >
                Manifeste
              </motion.span>
              <div className="space-y-6">
                {[
                  "Nous ne cherchons pas des participants.", 
                  "Nous cherchons des bâtisseurs.", 
                  "Des visionnaires.", 
                  "Des esprits capables de transformer", 
                  "une ligne de code en un levier", 
                  "de souveraineté numérique."
                ].map((text, i) => (
                  <motion.h2 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
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
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.1 }}
              className="editorial-title text-5xl md:text-9xl text-white leading-none mb-4"
            >
              AUDIENCE
            </motion.h2>
            <p className="text-nova-violet font-bold tracking-[0.3em] uppercase text-xs">Qui sont les acteurs du changement ?</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Code />, title: "Développeurs", desc: "Maîtres de la stack, architectes du code robuste." },
              { icon: <Lightbulb />, title: "Innovateurs", desc: "Esprits disruptifs voyant au-delà du possible." },
              { icon: <Users />, title: "Étudiants", desc: "La relève académique assoiffée de défis réels." }
            ].map((item, i) => (
              <GlassCard key={i} delay={i * 0.1} className="bg-white/5 border-white/10 group hover:bg-white/10">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="mb-10 text-nova-violet transition-transform duration-500"
                >
                  {React.cloneElement(item.icon as React.ReactElement, { size: 40, strokeWidth: 1 })}
                </motion.div>
                <h3 className="text-white text-2xl font-black mb-4 uppercase">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — DÉROULEMENT */}
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
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
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="p-2 bg-nova-violet/5 rounded-lg text-nova-violet"
                   >
                     {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                   </motion.div>
                   <span className="font-bold tracking-widest text-xs uppercase group-hover:text-nova-violet transition-colors">{item.label}</span>
                </div>
              </motion.div>
            ))}
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
              <WordReveal text="PRÊT À ÉCRIRE" /> <br />
              <WordReveal text="L'HISTOIRE ?" className="text-nova-violet" delay={0.3} />
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
