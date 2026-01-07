
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, CheckCircle2, HelpCircle, ArrowDown } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Edition2026: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      
      {/* HEADER PLEIN ÉCRAN */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
          alt="Édition 2026" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nova-black/80 backdrop-blur-[1px]" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-nova-violet font-black tracking-[0.6em] uppercase text-[10px] block mb-8">
              Calendrier Officiel
            </span>
            <h1 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] text-white leading-[0.85] mb-12">
              L'AVENIR EN <br />
              <span className="text-nova-violet italic font-light">CONSTRUCTION — 2026.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Consultez les modalités officielles et les thématiques retenues pour la seconde édition nationale de l'innovation.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
           <ArrowDown size={32} />
        </div>
      </section>

      {/* THÉMATIQUES ET MODALITÉS */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
               <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none text-nova-black">Axe Stratégique <br /><span className="text-nova-violet">2026</span></h2>
               <p className="text-gray-500 font-light text-xl mb-10 leading-relaxed">
                 Le thème central de l'année est dédié à : <span className="font-bold text-nova-black italic">"Les solutions numériques au service de la durabilité environnementale"</span>. 
               </p>
               <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-nova-violet mb-4">Critères de sélection</h4>
                  <p className="text-xs text-gray-400 leading-relaxed uppercase font-bold tracking-widest">Le comité scientifique privilégiera les projets intégrant l'Intelligence Artificielle et l'IoT pour la gestion des ressources naturelles.</p>
               </div>
            </div>

            <div className="lg:col-span-7">
               <h3 className="text-2xl font-black uppercase mb-12 border-b border-gray-100 pb-6 text-nova-black">Agenda Prévisionnel</h3>
               <div className="space-y-12">
                  {[
                    { period: "Janv — Fév 2026", title: "Appel National à Candidatures", desc: "Phase de dépôt des dossiers par binômes sur le portail officiel." },
                    { period: "Mars 2026", title: "Évaluation Technique", desc: "Expertise des solutions proposées par les commissions spécialisées." },
                    { period: "Avril 2026", title: "Ateliers d'Accompagnement", desc: "Sessions de coaching technique et de perfectionnement du prototype." },
                    { period: "Mai 2026", title: "Finale et Remise de Prix", desc: "Présentation devant le jury national et remise des bourses d'excellence." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-12 items-start group">
                       <span className="text-nova-violet font-black text-xs uppercase tracking-widest w-32 pt-1">{step.period}</span>
                       <div>
                          <h4 className="text-xl font-black uppercase mb-3 text-nova-black group-hover:text-nova-violet transition-colors">{step.title}</h4>
                          <p className="text-gray-400 font-light text-sm leading-relaxed">{step.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-64 px-6 text-center bg-gray-50">
         <div className="container mx-auto max-w-4xl">
            <h2 className="editorial-title text-[clamp(2.5rem,8vw,6rem)] font-black text-nova-black mb-16 leading-tight">
               CONSULTER LE <br /><span className="text-nova-violet italic font-light">RÈGLEMENT OFFICIEL.</span>
            </h2>
            <Button size="lg" onClick={() => navigate('/participate')}>Modalités de participation</Button>
         </div>
      </section>
    </div>
  );
};

export default Edition2026;
