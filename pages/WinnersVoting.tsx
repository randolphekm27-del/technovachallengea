
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Sparkles, Activity } from 'lucide-react';

interface VotingTeam {
  id: string;
  name: string;
  members: string;
  image: string;
  votes: number;
}

const WinnersVoting: React.FC = () => {
  const [teams, setTeams] = useState<VotingTeam[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('tnc_voting_teams');
    if (saved) {
      const parsed = JSON.parse(saved);
      setTeams(parsed.sort((a: any, b: any) => b.votes - a.votes));
    }
  }, []);

  return (
    <div className="bg-nova-black min-h-screen pt-40 pb-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <header className="text-center mb-32">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="inline-block p-4 bg-nova-violet/20 border border-nova-violet/40 rounded-3xl text-nova-violet mb-12">
             <Trophy size={48} />
          </motion.div>
          <h1 className="editorial-title text-[clamp(2rem,10vw,10rem)] text-white leading-none uppercase">
            ÉVOLUTION <br /><span className="text-nova-violet italic font-light">DU SCRUTIN.</span>
          </h1>
        </header>

        <div className="space-y-12 max-w-4xl mx-auto">
          {teams.map((team, i) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[3rem] flex items-center gap-12 group relative overflow-hidden"
            >
               <div className="text-5xl font-black text-nova-violet/20 group-hover:text-nova-violet transition-all duration-500">
                  #{i + 1}
               </div>
               <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0">
                  <img src={team.image} className="w-full h-full object-cover" />
               </div>
               <div className="flex-grow">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">{team.name}</h3>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{team.members}</p>
               </div>
               <div className="text-right">
                  <span className="text-[10px] font-black uppercase text-nova-violet tracking-[0.3em] block mb-2">Suffrages</span>
                  <span className="text-4xl font-black text-white">{team.votes.toLocaleString()}</span>
               </div>
               
               {/* Progress bar background */}
               <div className="absolute bottom-0 left-0 h-1 bg-nova-violet shadow-[0_0_20px_rgba(124,58,237,1)]" 
                    style={{ width: `${(team.votes / (teams[0]?.votes || 1)) * 100}%` }} />
            </motion.div>
          ))}
        </div>
        
        <footer className="mt-40 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-3 bg-white/5 rounded-full border border-white/10">
               <Activity size={16} className="text-nova-violet animate-pulse" />
               <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Mise à jour en temps réel — Huissier assermenté TNC</span>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default WinnersVoting;
