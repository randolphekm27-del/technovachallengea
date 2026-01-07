
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, CheckCircle2, ArrowDown } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Winners2025: React.FC = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      
      {/* HEADER PLEIN ÉCRAN */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=2000" 
          alt="Palmarès 2025" 
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-nova-black/85 backdrop-blur-[2px]" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-nova-violet font-black tracking-[0.6em] uppercase text-[10px] block mb-8">
              Bilan de l'Édition I
            </span>
            <h1 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] text-white leading-[0.85] mb-12">
              PALMARÈS DE <br />
              <span className="text-nova-violet italic font-light">L'EXCELLENCE — 2025.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Retour sur les solutions innovantes primées lors de la première édition nationale.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30">
           <ArrowDown size={32} className="animate-bounce" />
        </div>
      </section>

      {/* LES TROIS LAURÉATS */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                rank: "Premier Prix d'Excellence", 
                names: "BOKO Béoula & NTCHA Siméon", 
                project: "Irrigation Agricole Automatisée", 
                desc: "Système de pompage intelligent pour l'optimisation des cultures rurales.",
                prize: "150 000 FCFA"
              },
              { 
                rank: "Deuxième Prix d'Excellence", 
                names: "ISSAKA Awa & FOLARIN Mourchid", 
                project: "Conservation Thermique", 
                desc: "Solution innovante pour la réduction des pertes post-récolte.",
                prize: "100 000 FCFA"
              },
              { 
                rank: "Troisième Prix d'Excellence", 
                names: "ROUFAI Aïssatou & ZANVO Horeb", 
                project: "Orientation Éducative", 
                desc: "Plateforme numérique de conseil académique pour la jeunesse.",
                prize: "50 000 FCFA"
              }
            ].map((winner, i) => (
              <GlassCard key={i} className={`p-12 text-center ${i === 0 ? 'border-nova-violet border-2' : ''}`}>
                <Trophy className="mx-auto text-nova-violet mb-8" size={48} />
                <div className="text-[10px] font-black uppercase tracking-widest text-nova-violet mb-4">{winner.rank}</div>
                <h3 className="text-2xl font-black uppercase mb-2 text-nova-black leading-tight">{winner.names}</h3>
                <div className="text-gray-400 font-bold text-xs uppercase mb-8 tracking-widest">{winner.project}</div>
                <p className="text-gray-500 font-light text-sm mb-10 leading-relaxed">{winner.desc}</p>
                <div className="pt-8 border-t border-gray-100 font-black text-xl text-nova-black">{winner.prize}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* TABLEAU RÉCAPITULATIF */}
      <section className="py-40 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-16 text-nova-black">Liste Officielle des Finalistes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b-2 border-nova-black">
                     <th className="py-6 text-[10px] font-black uppercase tracking-widest">Binôme</th>
                     <th className="py-6 text-[10px] font-black uppercase tracking-widest">Établissement</th>
                     <th className="py-6 text-[10px] font-black uppercase tracking-widest">Projet Distinction</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-100 font-light text-sm">
                  {[
                    ["ADOKINSSI Marc & NOUNAWA A.", "INSTI Lokossa", "Suivi Énergétique Intelligent"],
                    ["OLLIHIDE Cyrille & ONABIYI M.", "ENSET Lokossa", "VentiloSmart Adaptatif"],
                    ["BALLO Y. & DJOTCHI L.", "ENSET Lokossa", "SAM - Alerte Inondations"],
                    ["SANOU F. & NAGASSI J.", "ENSTP", "Gestion Écologique Déchets"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white transition-colors">
                       <td className="py-6 font-bold">{row[0]}</td>
                       <td className="py-6 text-gray-400">{row[1]}</td>
                       <td className="py-6 font-black text-nova-violet uppercase tracking-tight">{row[2]}</td>
                    </tr>
                  ))}
               </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Winners2025;
