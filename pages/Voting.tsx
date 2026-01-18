
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ArrowDown, Sparkles, Star, ChevronRight, X, Heart } from 'lucide-react';
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

  useEffect(() => {
    const saved = localStorage.getItem('tnc_voting_teams');
    if (saved) setTeams(JSON.parse(saved));
  }, []);

  const handleVote = () => {
    if (!selectedTeam) return;
    const updated = teams.map(t => t.id === selectedTeam.id ? { ...t, votes: t.votes + voteCount } : t);
    setTeams(updated);
    localStorage.setItem('tnc_voting_teams', JSON.stringify(updated));
    alert(`Merci ! ${voteCount} votes ajoutés avec succès à l'équipe ${selectedTeam.name}.`);
    setSelectedTeam(null);
  };

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      
      {/* Hero Vote */}
      <section className="relative h-[90vh] flex items-center justify-center bg-black overflow-hidden px-6">
        <div className="absolute inset-0">
          <img src="https://i.postimg.cc/tgyMnJq1/belle_vue_d_ensemble_des_lauréats_avec_le_dg.jpg" className="w-full h-full object-cover opacity-40 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-nova-black via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
            <span className="text-nova-violet font-black tracking-[0.8em] uppercase text-[10px] block mb-8">Arbitrage Populaire 2026</span>
            <h1 className="editorial-title text-[clamp(2.5rem,12vw,12rem)] text-white leading-[0.8]">
              LE VOTE DU <br /><span className="text-nova-violet italic font-light">PUBLIC.</span>
            </h1>
            <p className="mt-12 text-lg md:text-2xl text-white/60 font-serif italic max-w-3xl mx-auto leading-relaxed">
              Propulsez votre binôme favori vers les sommets. Votre soutien est le catalyseur de leur succès.
            </p>
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-12 text-white/20"><ArrowDown size={32} /></motion.div>
      </section>

      {/* Liste des Binômes */}
      <section className="py-32 md:py-64 px-6 bg-[#FAFAFB]">
        <div className="container mx-auto max-w-7xl">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teams.map((team, i) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 group flex flex-col"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={team.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-nova-black/60 to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10">
                       <span className="text-[10px] font-black uppercase text-nova-violet tracking-widest block mb-2">Binôme Compétiteur</span>
                       <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">{team.name}</h3>
                       <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest truncate">{team.members}</p>
                    </div>
                  </div>
                  <div className="p-10 flex-grow flex flex-col justify-between">
                     <div className="flex items-center justify-between mb-8">
                        <div>
                           <span className="text-[9px] font-black uppercase text-gray-400 block mb-1">Score Actuel</span>
                           <span className="text-3xl font-black text-nova-black">{team.votes} <span className="text-[10px] text-nova-violet">VOTES</span></span>
                        </div>
                        <div className="w-12 h-12 bg-nova-violet/10 rounded-full flex items-center justify-center text-nova-violet">
                           <Trophy size={20} />
                        </div>
                     </div>
                     <Button className="w-full" variant="accent" onClick={() => setSelectedTeam(team)}>Voter pour ce Binôme</Button>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Modal Vote */}
      <AnimatePresence>
        {selectedTeam && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
          >
             <motion.div 
               initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
               className="bg-white w-full max-w-xl rounded-[4rem] p-12 md:p-16 relative overflow-hidden"
             >
                <button onClick={() => setSelectedTeam(null)} className="absolute top-10 right-10 text-gray-300 hover:text-nova-black"><X size={32} /></button>
                <div className="text-center mb-12">
                   <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-8 border-4 border-nova-violet shadow-2xl">
                      <img src={selectedTeam.image} className="w-full h-full object-cover" />
                   </div>
                   <span className="text-nova-violet font-black uppercase tracking-widest text-[10px] block mb-2">Propulser l'équipe</span>
                   <h2 className="text-3xl font-black text-nova-black uppercase tracking-tighter leading-none">{selectedTeam.name}</h2>
                </div>

                <div className="space-y-10">
                   <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-6 text-center">Nombre de votes à offrir (Vote payant)</label>
                      <div className="flex items-center justify-center gap-8">
                         <button onClick={() => setVoteCount(Math.max(1, voteCount - 1))} className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-3xl font-light hover:bg-nova-violet hover:text-white transition-all">-</button>
                         <span className="text-6xl font-black text-nova-black w-24 text-center">{voteCount}</span>
                         <button onClick={() => setVoteCount(voteCount + 1)} className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-3xl font-light hover:bg-nova-violet hover:text-white transition-all">+</button>
                      </div>
                   </div>
                   
                   <div className="bg-gray-50 p-8 rounded-[2rem] text-center border border-gray-100">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Contribution estimée</span>
                      <span className="text-2xl font-black text-nova-black">{voteCount * 500} FCFA</span>
                   </div>

                   <Button className="w-full py-6" size="lg" onClick={handleVote}>Confirmer & Payer les Votes <ChevronRight size={18} className="ml-2" /></Button>
                   <p className="text-[9px] text-gray-400 text-center uppercase font-bold tracking-widest">Paiement sécurisé via portail bancaire partenaire</p>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Voting;
