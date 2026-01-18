
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Activity, Crown, TrendingUp, ArrowUpRight } from 'lucide-react';

interface VotingTeam {
  id: string;
  name: string;
  members: string;
  image: string;
  votes: number;
}

const WinnersVoting: React.FC = () => {
  const [teams, setTeams] = useState<VotingTeam[]>([]);
  const LIMIT = 2000;

  useEffect(() => {
    const load = () => {
      const saved = localStorage.getItem('tnc_voting_teams');
      if (saved) {
        const parsed = JSON.parse(saved);
        setTeams(parsed.sort((a: any, b: any) => b.votes - a.votes));
      }
    };
    load();
    const interval = setInterval(load, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-nova-black min-h-screen pt-40 pb-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        
        <header className="text-center mb-32 relative">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block p-5 bg-nova-violet/20 border border-nova-violet/40 rounded-3xl text-nova-violet mb-12 shadow-[0_0_50px_rgba(124,58,237,0.3)]">
             <Trophy size={64} />
          </motion.div>
          <h1 className="editorial-title text-[clamp(2rem,10vw,10rem)] text-white leading-none uppercase">
            ÉVOLUTION <br /><span className="text-nova-violet italic font-light">DU SCRUTIN GAGNANTS.</span>
          </h1>
          <p className="mt-8 text-white/40 font-black uppercase tracking-[0.6em] text-[10px]">Vote Final — Pondération 40%</p>
        </header>

        <div className="flex items-center gap-4 mb-16 border-b border-white/5 pb-8">
           <Activity className="text-nova-violet animate-pulse" size={20} />
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Flux de Données Sécurisé — Re-calcul en direct</span>
        </div>

        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {teams.map((team, i) => (
              <motion.div
                key={team.id}
                layout
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="bg-white/5 border border-white/10 p-10 rounded-[3rem] flex flex-col md:flex-row items-center gap-12 group relative overflow-hidden hover:bg-white/[0.08] transition-colors"
              >
                 {/* Rank Visual */}
                 <div className="text-7xl font-black text-white/5 group-hover:text-nova-violet/20 transition-all duration-700 absolute -left-4 top-1/2 -translate-y-1/2 select-none">
                    #{i + 1}
                 </div>

                 {/* Leader Message Overlay */}
                 {i === 0 && team.votes > 0 && (
                   <div className="absolute top-0 right-0 px-8 py-2 bg-nova-violet text-white text-[8px] font-black uppercase tracking-widest rounded-bl-3xl flex items-center gap-2">
                     <Crown size={12} /> LEADER ACTUEL DU SCRUTIN
                   </div>
                 )}

                 <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-white/10 flex-shrink-0 relative z-10">
                    <img src={team.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                 </div>

                 <div className="flex-grow relative z-10 text-center md:text-left">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 flex items-center justify-center md:justify-start gap-4">
                      {team.name}
                      {i === 0 && <span className="text-nova-violet text-[10px] animate-pulse">(Prend la tête)</span>}
                    </h3>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{team.members}</p>
                 </div>

                 <div className="text-center md:text-right relative z-10">
                    <div className="flex flex-col gap-2">
                       <span className="text-[10px] font-black uppercase text-nova-violet tracking-[0.3em]">Score Gagnant</span>
                       <span className="text-5xl font-black text-white leading-none">{team.votes.toLocaleString()}</span>
                       <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                          {team.votes} / {LIMIT} <span className="text-[8px] opacity-50">Objectif 2000</span>
                       </span>
                    </div>
                 </div>
                 
                 {/* High Performance Progress Bar */}
                 <div className="absolute bottom-0 left-0 h-1.5 bg-white/5 w-full">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (team.votes / LIMIT) * 100)}%` }}
                      className={`h-full ${i === 0 ? 'bg-nova-violet shadow-[0_0_20px_rgba(124,58,237,1)]' : 'bg-gray-600'}`} 
                    />
                 </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <footer className="mt-40 text-center space-y-8">
            <p className="text-white/20 font-serif italic text-xl max-w-2xl mx-auto leading-relaxed">
              "La transparence est le socle de l'excellence. Chaque suffrage est certifié par notre protocole de vérification cryptographique."
            </p>
            <div className="inline-flex items-center gap-6 px-10 py-4 bg-white/5 rounded-full border border-white/10">
               <span className="text-[9px] font-black uppercase text-gray-500 tracking-[0.5em]">TNC Certification Board — 2026</span>
            </div>
        </footer>
      </div>
      <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] bg-nova-violet/5 blur-[150px] rounded-full pointer-events-none" />
    </div>
  );
};

export default WinnersVoting;
