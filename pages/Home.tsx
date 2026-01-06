import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Target, Award, ArrowUpRight, Cpu, Layers, Fingerprint } from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

const ParallaxImage = ({ src, alt, speed = 0.1, className = "" }: { src: string, alt: string, speed?: number, className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={containerRef} className={`overflow-hidden rounded-[2.5rem] soft-border ${className}`}>
      <motion.img 
        style={{ y, scale: 1.1 }} 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-1000 ease-out"
      />
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="bg-nova-white overflow-x-hidden">
      
      {/* 1. HERO STATEMENT - MUSEUM STYLE */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl"
          >
            <h1 className="editorial-title text-[clamp(4rem,15vw,14rem)] font-black text-nova-black tracking-tighter mb-8">
              L'INNOVATION<br />EST UNE PAGE<br />
              <span className="text-nova-violet">BLANCHE.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-16">
              <p className="text-2xl md:text-3xl text-gray-400 font-light max-w-2xl leading-tight">
                Laissez le futur s’écrire par vos mains. <br />
                <span className="text-nova-black font-normal">Tech Nova Challenge 2025</span> — Le rendez-vous de l'élite technologique au Bénin.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Button size="lg">Participer</Button>
                <button className="flex items-center gap-2 group text-nova-black font-bold text-lg uppercase tracking-widest border-b-2 border-transparent hover:border-nova-violet transition-all pb-1">
                  Découvrir <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. LE MANIFESTE - DARK EDITORIAL */}
      <section className="py-64 bg-nova-black text-nova-white px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-16"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-nova-violet"></div>
              <span className="text-nova-violet font-bold tracking-[0.4em] uppercase text-xs">Manifeste</span>
            </div>
            <h2 className="text-4xl md:text-8xl font-bold leading-[0.9] tracking-tight max-w-5xl">
              Nous cherchons les bâtisseurs qui voient dans chaque <span className="italic font-light text-gray-500 underline decoration-nova-violet decoration-2 underline-offset-8">ligne de code</span> une solution.
            </h2>
            <div className="grid md:grid-cols-2 gap-20 pt-20">
              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                Le Bénin ne manque pas de talents, il manque de tremplins. Tech Nova est ce pont entre l'idée brute et l'impact national.
              </p>
              <div className="flex items-end justify-start md:justify-end">
                <div className="text-nova-violet font-black text-9xl opacity-10 leading-none">2025</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. LES PILIERS - GRID */}
      <section className="py-40 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <div className="max-w-2xl">
              <span className="text-nova-violet font-bold tracking-widest uppercase text-xs mb-4 block">Excellence</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">Piliers d'Impact</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard delay={0.1}>
              <div className="w-16 h-16 bg-nova-violet/10 rounded-2xl flex items-center justify-center text-nova-violet mb-10"><Cpu size={32} strokeWidth={1.5} /></div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-nova-black">Technologie Pure</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-light">De l'IA générative aux systèmes décentralisés, maîtrisez les outils qui redéfinissent le possible.</p>
            </GlassCard>
            <GlassCard delay={0.2}>
              <div className="w-16 h-16 bg-nova-violet/10 rounded-2xl flex items-center justify-center text-nova-violet mb-10"><Fingerprint size={32} strokeWidth={1.5} /></div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-nova-black">Identité Locale</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-light">Des solutions pensées par des Béninois, pour des défis africains. L'authenticité est notre force.</p>
            </GlassCard>
            <GlassCard delay={0.3}>
              <div className="w-16 h-16 bg-nova-violet/10 rounded-2xl flex items-center justify-center text-nova-violet mb-10"><Layers size={32} strokeWidth={1.5} /></div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-nova-black">Excellence UX</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-light">Parce que l'innovation n'est utile que si elle est accessible. Le design est au cœur de notre démarche.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 4. VISION IMMERSIVE */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Space Tech"
            speed={0.15}
            className="w-full h-full rounded-none"
          />
          <div className="absolute inset-0 bg-nova-black/60"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="text-nova-white text-6xl md:text-[10rem] font-black tracking-tighter mb-12 leading-[0.85]">
            DÉPASSEZ<br />VOS LIMITES.
          </h2>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-nova-black scale-110">
            Rejoindre l'élite
          </Button>
        </motion.div>
      </section>

      {/* 5. FINAL CTA - PURE WHITE */}
      <section className="py-80 px-6 text-center bg-nova-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="editorial-title text-[clamp(4rem,14vw,12rem)] font-black tracking-tighter mb-20 leading-none text-nova-black">
            LE FUTUR<br />EST <span className="text-nova-violet">ICI.</span>
          </h2>
          <Button size="lg" className="scale-125 mb-16">Déposer ma candidature</Button>
          
          <div className="flex justify-center items-center gap-6 text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">
            <span>Ouverture Mai 2025</span>
            <div className="w-2 h-2 rounded-full bg-nova-violet"></div>
            <span>Bénin National</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;