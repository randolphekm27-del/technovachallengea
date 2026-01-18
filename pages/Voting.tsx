
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { Trophy, ArrowDown, Sparkles, ChevronRight, X, TrendingUp, Crown } from 'lucide-react';
import Button from '../components/Button';

interface VotingTeam {
  id: string;
  name: string;
  members: string;
  image: string;
  votes: number;
}

const Voting: React.FC = () => {
  const [teams, setTeams] = useState<VotingTeam[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<VotingTeam | null>(null);
  const [voteCount, setVoteCount] = useState(1);
  const LIMIT = 1000;

  useEffect(() => {
    const load = () => {
      const saved = localStorage.getItem('tnc_voting_teams');
      if (saved) {
        // Tri initial par nombre de votes décroissant
        const parsed = JSON.parse(saved);
        setTeams(parsed.sort((a: any, b: any) => b.votes - a.votes));
      }
    };
    load();
    const interval = setInterval(load, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleVote = () => {
    if (!selectedTeam) return;
    const updated = teams.map(t => t.id === selectedTeam.id ? { ...t, votes: t.votes + voteCount } : t);
    // Re-trier immédiatement après le vote
    const sorted = [...updated].sort((a, b) => b.votes - a.votes);
    setTeams(sorted);
    localStorage.setItem('tnc_voting_teams', JSON.stringify(sorted));
    setSelectedTeam(null);
  };

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white pb-32">
      
      {/* Hero Vote */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black overflow-hidden px-6">
        <div className="absolute inset-0">
          <img src="https://i.postimg.cc/tgyMnJq1/belle_vue_d_ensemble_des_lauréats_avec_le_dg.jpg" className="w-full h-full object-cover opacity-30 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-nova-black via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-nova-violet font-black tracking-[0.8em] uppercase text-[10px] block mb-8">Voix du Peuple 2026</span>
            <h1 className="editorial-title text-[clamp(2rem,10vw,10rem)] text-white leading-[0.8]">
              VOTE DU <br /><span className="text-nova-violet italic font-light">PUBLIC.</span>
            </h1>
            <p className="mt-12 text-xl md:text-3xl text-white font-black uppercase tracking-widest italic">
              Votez pour l'équipe de votre choix !
            </p>
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-12 text-white/20"><ArrowDown size={32} /></motion.div>
      </section>

      {/* Classement Dynamique */}
      <section className="py-24 md:py-40 px-6 bg-[#FAFAFB]">
        <div className="container mx-auto max-w-7xl">
           
           <div className="flex items-center gap-4 mb-16 justify-center md:justify-start">
              <TrendingUp className="text-nova-violet" size={24} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Évolution du Classement en Temps Réel</span>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence mode="popLayout">
                {teams.map((team, i) => (
                  <motion.div
                    key={team.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative bg-white border border-gray-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 group flex flex-col h-full"
                  >
                    {/* Leader Badge */}
                    {i === 0 && team.votes > 0 && (
                      <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="absolute top-6 left-6 z-20 px-4 py-2 bg-nova-violet text-white text-[8px] font-black uppercase tracking-widest rounded-full flex items-center gap-2 shadow-xl">
                        <Crown size={12} fill="white" /> CE BINÔME VIENT DE PRENDRE LA TÊTE
                      </motion.div>
                    )}

                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img src={team.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-nova-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8">
                         <div className="text-nova-violet font-black text-[40px] leading-none mb-2 opacity-50">#{i + 1}</div>
                         <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">{team.name}</h3>
                         <p className="text-white/60 text-[9px] uppercase font-bold tracking-widest truncate">{team.members}</p>
                      </div>
                    </div>

                    <div className="p-10 flex-grow flex flex-col justify-between">
                       <div className="space-y-6 mb-10">
                          <div className="flex items-center justify-between">
                             <span className="text-[10px] font-black uppercase text-gray-400">Progression Public</span>
                             <span className="text-sm font-black text-nova-violet">{Math.min(100, (team.votes / LIMIT) * 100).toFixed(1)}%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                             <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(100, (team.votes / LIMIT) * 100)}%` }} className="h-full bg-nova-violet" />
                          </div>
                          <div className="text-[11px] font-black text-nova-black text-center tracking-widest">
                            {team.votes} / {LIMIT} VOTES
                          </div>
                       </div>
                       <Button className="w-full" variant="accent" onClick={() => setSelectedTeam(team)}>Soutenir ce Binôme</Button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
           </div>
        </div>
      </section>

      {/* Modal Vote (Inchangé mais avec handleVote mis à jour) */}
      <AnimatePresence>
        {selectedTeam && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
             <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white w-full max-w-xl rounded-[4rem] p-12 relative overflow-hidden">
                <button onClick={() => setSelectedTeam(null)} className="absolute top-10 right-10 text-gray-300 hover:text-nova-black"><X size={32} /></button>
                <div className="text-center mb-10">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-nova-violet shadow-2xl"><img src={selectedTeam.image} className="w-full h-full object-cover" /></div>
                   <h2 className="text-3xl font-black text-nova-black uppercase tracking-tighter">{selectedTeam.name}</h2>
                </div>
                <div className="space-y-10">
                   <div className="flex items-center justify-center gap-8">
                      <button onClick={() => setVoteCount(Math.max(1, voteCount - 1))} className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-3xl font-light hover:bg-nova-violet hover:text-white transition-all">-</button>
                      <span className="text-6xl font-black text-nova-black w-24 text-center">{voteCount}</span>
                      <button onClick={() => setVoteCount(voteCount + 1)} className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-3xl font-light hover:bg-nova-violet hover:text-white transition-all">+</button>
                   </div>
                   <div className="bg-gray-50 p-6 rounded-[2rem] text-center border border-gray-100">
                      <span className="text-[10px] font-black uppercase text-gray-400 block mb-1">Contribution</span>
                      <span className="text-2xl font-black text-nova-black">{voteCount * 500} FCFA</span>
                   </div>
                   <Button className="w-full py-5" size="lg" onClick={handleVote}>Valider mon Soutien <ChevronRight size={18} className="ml-2" /></Button>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Voting;
