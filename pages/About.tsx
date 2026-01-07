
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Target, Building2, ShieldCheck, GraduationCap, ArrowDown } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const About: React.FC = () => {
  return (
    <div className="bg-white selection:bg-nova-violet selection:text-white">
      
      {/* 1. HEADER PRINCIPAL - PLEIN ÉCRAN */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="L'Excellence Technologique" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nova-black/75 backdrop-blur-[2px]" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-nova-violet font-black tracking-[0.6em] uppercase text-[10px] block mb-8">
              Rapport de Mission Institutionnelle
            </span>
            <h1 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] text-white leading-[0.85] mb-12">
              L'EXCELLENCE AU <br />
              <span className="text-nova-violet italic font-light">SERVICE DE LA NATION.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Le Tech Nova Challenge s'affirme comme le pilier national de la détection et de l'accompagnement des talents technologiques au Bénin.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
        >
           <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* 2. SECTION TRANSITION - TEXTE ÉPURÉ (Image retirée comme demandé) */}
      <section className="py-32 px-6 bg-white border-b border-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-nova-black uppercase tracking-tighter leading-none mb-10">
              BÂTIR LES <br /><span className="text-nova-violet italic font-light">INFRASTRUCTURES DU FUTUR.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
              Notre approche repose sur la synergie entre les institutions académiques et le secteur productif pour garantir une souveraineté technologique durable au Bénin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. CONTENU INFORMATIF - TON INSTITUTIONNEL */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-24">
            <div className="border-l-4 border-nova-violet pl-12">
               <h2 className="text-3xl font-black uppercase mb-8 tracking-tighter text-nova-black">Vision et Engagement National</h2>
               <p className="text-xl text-gray-500 font-light leading-relaxed">
                 Le Tech Nova Challenge n'est pas seulement un concours de programmation ; c'est un cadre institutionnel de valorisation du mérite. Nous œuvrons pour que chaque projet innovant puisse trouver le soutien technique et financier nécessaire à sa concrétisation, participant ainsi activement au Plan National de Développement.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <GlassCard className="p-12 border-gray-100 bg-gray-50/50">
                 <Target className="text-nova-violet mb-8" size={40} />
                 <h3 className="text-xl font-black uppercase mb-6">Objectifs de Développement</h3>
                 <ul className="text-gray-500 text-sm font-light space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-nova-violet mt-1.5" />
                      <span>Identification des solutions techniques à fort impact social.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-nova-violet mt-1.5" />
                      <span>Renforcement des capacités professionnelles des étudiants.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-nova-violet mt-1.5" />
                      <span>Promotion de l'entrepreneuriat technologique local.</span>
                    </li>
                 </ul>
              </GlassCard>
              
              <GlassCard className="p-12 border-gray-100 bg-gray-50/50">
                 <Building2 className="text-nova-violet mb-8" size={40} />
                 <h3 className="text-xl font-black uppercase mb-6">Cadre de Coopération</h3>
                 <p className="text-gray-500 text-sm font-light leading-relaxed">
                   En partenariat avec des institutions telles que Sèmè City et les écoles polytechniques nationales, nous garantissons un standard d'excellence académique et une rigueur technique dans l'évaluation de chaque dossier.
                 </p>
              </GlassCard>
            </div>

            <div className="pt-24 border-t border-gray-100">
               <h2 className="text-3xl font-black uppercase mb-12 tracking-tighter text-center">Nos Valeurs Fondamentales</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                  <div>
                     <ShieldCheck className="mx-auto text-nova-violet mb-6" size={48} />
                     <h4 className="font-black uppercase text-xs mb-3 tracking-widest">Intégrité</h4>
                     <p className="text-[11px] text-gray-400 uppercase leading-relaxed font-bold">Un processus de sélection transparent et impartial.</p>
                  </div>
                  <div>
                     <Globe className="mx-auto text-nova-violet mb-6" size={48} />
                     <h4 className="font-black uppercase text-xs mb-3 tracking-widest">Inclusion</h4>
                     <p className="text-[11px] text-gray-400 uppercase leading-relaxed font-bold">Favoriser l'accès à l'innovation sur tout le territoire.</p>
                  </div>
                  <div>
                     <GraduationCap className="mx-auto text-nova-violet mb-6" size={48} />
                     <h4 className="font-black uppercase text-xs mb-3 tracking-widest">Excellence</h4>
                     <p className="text-[11px] text-gray-400 uppercase leading-relaxed font-bold">La recherche constante de la qualité scientifique.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
