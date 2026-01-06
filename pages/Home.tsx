
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
        style={{ y, scale: 1.15 }} 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700 ease-out"
      />
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="bg-nova-white overflow-x-hidden">
      
      {/* 1. HERO EDITORIAL */}
      <section className="relative min-h-screen flex items-center px-6 pt-20">
        <div className="container mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-7xl md:text-[10rem] font-black text-nova-black leading-[0.82] tracking-tighter mb-10">
                TECH<br />NOVA<br />
                <span className="text-nova-violet">2025</span>
              </h1>
              <p className="text-2xl text-gray-400 font-light max-w-xl leading-relaxed">
                Le futur ne se prédit pas, il se code. <br />Rejoignez l'élite technologique du Bénin.
              </p>
              <div className="mt-12 flex items-center gap-8">
                <Button size="lg">Participer</Button>
                <button className="flex items-center gap-2 group text-nova-black font-semibold text-lg">
                  Découvrir le challenge <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-4 relative h-[650px] hidden lg:block">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
              alt="Cyber Intelligence"
              speed={-0.15}
              className="h-full w-full shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 2. LE MANIFESTE */}
      <section className="py-40 bg-nova-black text-nova-white px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <span className="text-nova-violet font-bold tracking-[0.4em] uppercase text-xs">Manifeste</span>
            <h2 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight">
              L'innovation est une <span className="italic font-light text-gray-500">page blanche</span> sur laquelle vous allez graver l'avenir du Bénin.
            </h2>
            <div className="h-px w-24 bg-nova-violet"></div>
            <p className="text-xl md:text-3xl text-gray-400 font-light max-w-3xl leading-relaxed">
              Nous cherchons les bâtisseurs, les rêveurs et les pragmatiques qui voient dans chaque ligne de code une solution pour notre pays.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. LES PILIERS D'EXCELLENCE */}
      <section className="py-40 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl font-black tracking-tighter mb-6">Piliers d'Impact</h2>
              <p className="text-gray-500 text-xl leading-relaxed font-light">Une compétition bâtie sur des fondations solides pour garantir un succès durable à vos projets.</p>
            </div>
            <div className="text-nova-violet font-black text-[12rem] opacity-[0.03] leading-none select-none">03</div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <GlassCard delay={0.1}>
              <div className="text-nova-violet mb-8"><Cpu size={48} strokeWidth={1} /></div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-nova-black">Technologie Pure</h3>
              <p className="text-gray-500 leading-relaxed font-light">Maîtrisez les outils de demain, de l'IA générative aux systèmes décentralisés.</p>
            </GlassCard>
            <GlassCard delay={0.2}>
              <div className="text-nova-violet mb-8"><Fingerprint size={48} strokeWidth={1} /></div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-nova-black">Identité Locale</h3>
              <p className="text-gray-500 leading-relaxed font-light">Des solutions pensées par des Béninois pour résoudre des défis africains concrets.</p>
            </GlassCard>
            <GlassCard delay={0.3}>
              <div className="text-nova-violet mb-8"><Layers size={48} strokeWidth={1} /></div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-nova-black">Excellence UX</h3>
              <p className="text-gray-500 leading-relaxed font-light">Parce qu'une technologie n'est rien sans une expérience humaine fluide et intuitive.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 4. VISION IMMERSIVE */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Space Tech"
            speed={0.25}
            className="w-full h-full rounded-none"
          />
          <div className="absolute inset-0 bg-nova-black/50"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="text-nova-white text-5xl md:text-[7rem] font-black tracking-tighter mb-12 leading-none">
            DÉPASSEZ VOS <br /> PROPRES LIMITES.
          </h2>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-nova-black">
            Explorer le programme
          </Button>
        </motion.div>
      </section>

      {/* 5. ROADMAP 2025 */}
      <section className="py-40 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24">
            <span className="text-nova-violet font-bold tracking-widest uppercase text-xs mb-4 block">Processus</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-nova-black">Calendrier de l'Aventure</h2>
          </div>
          <div className="space-y-4">
            {[
              { num: "01", date: "MAI", title: "Inscriptions Nationales", desc: "Ouverture du portail pour soumettre vos concepts disruptifs." },
              { num: "02", date: "JUIN", title: "Sélection & Jury", desc: "Analyse rigoureuse des projets par notre comité d'experts internationaux." },
              { num: "03", date: "JUILLET", title: "Le Grand Bootcamp", desc: "Immersion technique et mentorat intensif pour les finalistes à Cotonou." },
              { num: "04", date: "SEPTEMBRE", title: "La Grande Finale", desc: "Le pitch final et le couronnement des meilleurs innovateurs du pays." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row items-center gap-10 p-12 hover:bg-gray-50 rounded-[2.5rem] transition-all duration-500 soft-border border-transparent hover:border-gray-100"
              >
                <div className="text-4xl font-light text-gray-200 group-hover:text-nova-violet transition-colors duration-500">{step.num}</div>
                <div className="w-24 text-nova-violet font-bold tracking-tighter text-xl">{step.date}</div>
                <div className="flex-grow">
                  <h4 className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-500">{step.title}</h4>
                  <p className="text-gray-500 font-light">{step.desc}</p>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight className="text-nova-violet" size={40} strokeWidth={1} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ECOSYSTÈME NOVA */}
      <section className="py-40 px-6 bg-gray-50/50">
        <div className="container mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Community"
              speed={-0.08}
              className="h-[550px] shadow-2xl"
            />
          </div>
          <div className="space-y-10">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight text-nova-black">
              Plus qu'une compétition, <span className="text-nova-violet">un écosystème.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              En rejoignant Tech Nova Challenge, vous intégrez un réseau puissant de mentors, d'investisseurs et d'alumni.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-gray-100">
              <div className="hover:translate-y-[-5px] transition-transform">
                <div className="text-5xl font-black text-nova-black">15M+</div>
                <div className="text-gray-400 uppercase tracking-widest text-[10px] mt-3 font-bold">Prix Cumulés (CFA)</div>
              </div>
              <div className="hover:translate-y-[-5px] transition-transform">
                <div className="text-5xl font-black text-nova-black">500+</div>
                <div className="text-gray-400 uppercase tracking-widest text-[10px] mt-3 font-bold">Innovateurs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-64 px-6 text-center bg-nova-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-7xl md:text-[11rem] font-black tracking-tighter mb-16 leading-[0.85] text-nova-black">
            ÉCRIVEZ<br />LE FUTUR<br /> <span className="text-nova-violet">ICI.</span>
          </h2>
          <Button size="lg" className="scale-125 mb-12">Déposer ma candidature</Button>
          <div className="flex justify-center items-center gap-4 text-gray-400 font-medium">
            <span className="w-8 h-px bg-gray-200"></span>
            Clôture le 30 Avril 2025
            <span className="w-8 h-px bg-gray-200"></span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
