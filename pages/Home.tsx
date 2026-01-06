import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Fingerprint, Layers } from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Section 1 — Hero Statement */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h1 className="editorial-title text-[clamp(3.5rem,15vw,13rem)] text-nova-black mb-6">
              L'innovation est une <span className="text-nova-violet">page blanche.</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-xl md:text-3xl text-gray-400 font-light mb-12 tracking-tight"
            >
              Laissez le futur s’écrire par vos mains.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <Button size="lg">Participer</Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Subtle background element */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-nova-violet/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* Section 2 — Manifeste (What is Tech Nova) */}
      <section className="py-64 bg-nova-black text-white px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <span className="text-nova-violet font-bold tracking-[0.4em] uppercase text-xs">Le Manifeste</span>
            <h2 className="text-4xl md:text-7xl font-light leading-tight tracking-tight">
              Tech Nova Challenge n'est pas qu'une compétition. C'est le <span className="text-nova-violet font-bold italic">catalyseur</span> d'une génération qui refuse de voir son talent rester silencieux.
            </h2>
            <div className="flex justify-end pt-12">
              <p className="max-w-md text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                Nous identifions, formons et propulsons les architectes numériques du Bénin. Dans un monde saturé, l'excellence est la seule monnaie de valeur.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Why Participate (Piliers) */}
      <section className="py-40 px-6">
        <div className="container mx-auto">
          <div className="mb-24 text-center">
            <h2 className="editorial-title text-5xl md:text-8xl text-nova-black">Pourquoi nous ?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard delay={0.1}>
              <Cpu className="text-nova-violet w-12 h-12 mb-8" />
              <h3 className="text-2xl font-bold mb-4">Pure Tech</h3>
              <p className="text-gray-500 font-light text-lg">Un focus strict sur la robustesse technique et l'innovation réelle. Pas de fioritures, juste du code.</p>
            </GlassCard>
            <GlassCard delay={0.2}>
              <Fingerprint className="text-nova-violet w-12 h-12 mb-8" />
              <h3 className="text-2xl font-bold mb-4">Légitimité</h3>
              <p className="text-gray-500 font-light text-lg">Un jury composé d'experts internationaux et de leaders de l'écosystème béninois.</p>
            </GlassCard>
            <GlassCard delay={0.3}>
              <Layers className="text-nova-violet w-12 h-12 mb-8" />
              <h3 className="text-2xl font-bold mb-4">Propulsion</h3>
              <p className="text-gray-500 font-light text-lg">Plus qu'un prix, un accès direct à des investisseurs et un mentorat de classe mondiale.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Section 5 — Call To Action */}
      <section className="py-80 bg-white text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="editorial-title text-5xl md:text-[8rem] text-nova-black mb-16 leading-none">
            Oserez-vous <br />
            <span className="text-nova-violet">écrire l'histoire ?</span>
          </h2>
          <div className="flex justify-center">
            <Button size="lg" className="scale-125">Déposer ma candidature</Button>
          </div>
          <div className="mt-24 text-gray-300 font-bold uppercase tracking-[0.5em] text-[10px]">
            Tech Nova Challenge — Édition 2025
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;