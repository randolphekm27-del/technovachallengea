
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ArrowDown, Sparkles, ChevronRight, X, TrendingUp, Crown, MessageSquare } from 'lucide-react';
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
  const [leaderMessage, setLeaderMessage] = useState<string | null>(null);
  const LIMIT = 1000;

  useEffect(() => {
    const load = () => {
      const saved = localStorage.getItem('tnc_voting_teams');
      if (saved) {
        const parsed: VotingTeam[] = JSON.parse(saved);
        const sorted = parsed.sort((a, b) => b.votes - a.votes);
        
        // Détecter changement de tête
        if (teams.length > 0 && sorted[0].id !== teams[0].id && sorted[0].votes > 0) {
          setLeaderMessage(`${sorted[0].name} VIENT DE PRENDRE LA TÊTE DU SCRUTIN !`);
          setTimeout(() => setLeaderMessage(null), 5000);
        }
        
        setTeams(sorted);
      }
    };
    load();
    const interval = setInterval(load, 2000);
    return () => clearInterval(interval);
  }, [teams]);

  const handleVote = () => {
    if (!selectedTeam) return;
    const currentTeams = JSON.parse(localStorage.getItem('tnc_voting_teams') || '[]');
    const updated = currentTeams.map((t: any) => t.id === selectedTeam.id ? { ...t, votes: t.votes + voteCount } : t);
    localStorage.setItem('tnc_voting_teams', JSON.stringify(updated));
    setSelectedTeam(null);
    setVoteCount(1);
  };

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white pb-32">
      
      {/* Hero Vote */}
      <section className="relative h-[85vh] flex items-center justify-center bg-black overflow-hidden px-6">
        <div className="absolute inset-0">
          <img src="https://i.postimg.cc/tgyMnJq1/belle_vue_d_ensemble_des_lauréats_avec_le_dg.jpg" className="w-full h-full object-cover opacity-30 grayscale" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-nova-black via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <span className="text-nova-violet font-black tracking-[1em] uppercase text-[10px] block mb-8">Scrutin Populaire — Phase Initial</span>
            <h1 className="editorial-title text-[clamp(2rem,10vw,10rem)] text-white leading-[0.8]">
              VOTE DU <br /><span className="text-nova-violet italic font-light">PUBLIC.</span>
            </h1>
            <p className="mt-12 text-xl md:text-3xl text-white/80 font-black uppercase tracking-[0.3em] italic">
              Votez pour l'équipe de votre choix !
            </p>
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-12 text-white/20"><ArrowDown size={32} /></motion.div>
      </section>

      {/* Leader Message Toast */}
      <AnimatePresence>
        {leaderMessage && (
          <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 20, opacity: 1 }} exit={{ y: -100, opacity: 0 }} className="fixed top-32 left-1/2 -translate-x-1/2 z-[200] px-8 py-4 bg-nova-violet text-white rounded-full shadow-2xl border border-white/20 flex items-center gap-4">
             <Crown size={20} className="text-yellow-400 animate-bounce" />
             <span className="text-[10px] font-black uppercase tracking-widest">{leaderMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Classement Dynamique */}
      <section className="py-24 md:py-48 px-6 bg-[#FAFAFB]">
        <div className="container mx-auto max-w-7xl">
           <div className="flex items-center gap-4 mb-16 px-4">
              <TrendingUp className="text-nova-violet" size={24} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Classement en Temps Réel — 30% Pondération</span>
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
                    {i === 0 && team.votes > 0 && (
                      <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-nova-violet text-white text-[8px] font-black uppercase tracking-widest rounded-full flex items-center gap-2 shadow-xl border border-white/10">
                        <Crown size={12} fill="white" /> LEADER ACTUEL
                      </div>
                    )}

                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img src={team.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={team.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-nova-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8 text-white">
                         <div className="text-nova-violet font-black text-4xl mb-2 opacity-50 italic">#{i + 1}</div>
                         <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">{team.name}</h3>
                         <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest truncate">{team.members}</p>
                      </div>
                    </div>

                    <div className="p-10 flex-grow flex flex-col justify-between">
                       <div className="space-y-6 mb-10">
                          <div className="flex items-center justify-between">
                             <span className="text-[10px] font-black uppercase text-gray-400">Objectif 1000 Votes</span>
                             <span className="text-xs font-black text-nova-violet">{(team.votes / LIMIT * 100).toFixed(1)}%</span>
                          </div>
                          <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                             <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(100, (team.votes / LIMIT) * 100)}%` }} className="h-full bg-nova-violet shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
                          </div>
                          <div className="text-[11px] font-black text-nova-black text-center tracking-[0.2em] bg-gray-50 py-3 rounded-2xl border border-gray-100">
                            {team.votes} / {LIMIT} VOTES
                          </div>
                       </div>
                       <Button className="w-full" variant="accent" onClick={() => setSelectedTeam(team)}>Voter pour ce Binôme</Button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
           </div>
        </div>
      </section>

      {/* Modal Vote */}
      <AnimatePresence>
        {selectedTeam && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4" onClick={() => setSelectedTeam(null)}>
             <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white w-full max-w-xl rounded-[4rem] p-12 relative overflow-hidden" onClick={e => e.stopPropagation()}>
                <button onClick={() => setSelectedTeam(null)} className="absolute top-10 right-10 text-gray-300 hover:text-nova-black"><X size={32} /></button>
                <div className="text-center mb-10">
                   <div className="w-24 h-24 rounded-[2rem] overflow-hidden mx-auto mb-6 border-4 border-nova-violet shadow-2xl shadow-nova-violet/20"><img src={selectedTeam.image} className="w-full h-full object-cover" alt="Selected" /></div>
                   <span className="text-nova-violet font-black uppercase tracking-widest text-[9px] block mb-2">Propulser l'excellence</span>
                   <h2 className="text-3xl font-black text-nova-black uppercase tracking-tighter">{selectedTeam.name}</h2>
                </div>
                <div className="space-y-10">
                   <div className="flex flex-col items-center">
                      <label className="text-[10px] font-black uppercase text-gray-400 mb-6 tracking-widest">Choisir le poids du vote</label>
                      <div className="flex items-center justify-center gap-8">
                         <button onClick={() => setVoteCount(Math.max(1, voteCount - 1))} className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-3xl font-light hover:bg-nova-violet hover:text-white transition-all">-</button>
                         <span className="text-6xl font-black text-nova-black w-32 text-center">{voteCount}</span>
                         <button onClick={() => setVoteCount(voteCount + 1)} className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-3xl font-light hover:bg-nova-violet hover:text-white transition-all">+</button>
                      </div>
                   </div>
                   <div className="bg-nova-violet/5 p-8 rounded-[2.5rem] text-center border border-nova-violet/10">
                      <span className="text-[10px] font-black uppercase text-nova-violet tracking-widest block mb-2">Contribution estimée</span>
                      <span className="text-3xl font-black text-nova-black">{voteCount * 500} FCFA</span>
                   </div>
                   <Button className="w-full py-6" size="lg" onClick={handleVote}>Confirmer & Payer les Votes <ChevronRight size={18} className="ml-2" /></Button>
                   <p className="text-[9px] text-gray-400 text-center uppercase font-bold tracking-widest">Paiement sécurisé via portail bancaire national</p>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Voting;
