
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Activity, Crown, TrendingUp, Sparkles, X, ChevronRight, ArrowDown, Clock } from 'lucide-react';
import Button from '../components/Button';

interface VotingTeam {
  id: string;
  name: string;
  members: string;
  image: string;
  votes: number;
}

const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!targetDate) return;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!targetDate) return null;

  return (
    <div className="flex justify-center gap-6 md:gap-14">
      {[
        { label: 'Jours', val: timeLeft.days },
        { label: 'Heures', val: timeLeft.hours },
        { label: 'Minutes', val: timeLeft.minutes },
        { label: 'Secondes', val: timeLeft.seconds },
      ].map((item, i) => (
        <div key={i} className="text-center group">
          <div className="text-5xl md:text-8xl font-black text-white tracking-tighter tabular-nums mb-1 md:mb-3 group-hover:text-nova-violet transition-colors">
            {item.val.toString().padStart(2, '0')}
          </div>
          <div className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] text-white/20 group-hover:text-nova-violet/60 transition-colors">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

const WinnersVoting: React.FC = () => {
  const [teams, setTeams] = useState<VotingTeam[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<VotingTeam | null>(null);
  const [voteCount, setVoteCount] = useState(1);
  const [leaderMessage, setLeaderMessage] = useState<string | null>(null);
  const [targetDate, setTargetDate] = useState('');
  const LIMIT = 2000;

  useEffect(() => {
    const load = () => {
      const saved = localStorage.getItem('tnc_voting_teams');
      const config = JSON.parse(localStorage.getItem('tnc_site_config') || '{}');
      setTargetDate(config.winnersVoteEndDate || '');

      if (saved) {
        const parsed: VotingTeam[] = JSON.parse(saved);
        const sorted = parsed.sort((a, b) => b.votes - a.votes);
        
        if (teams.length > 0 && sorted[0].id !== teams[0].id && sorted[0].votes > 0) {
          setLeaderMessage(`${sorted[0].name} PREND LA TÊTE DU SCRUTIN FINAL !`);
          setTimeout(() => setLeaderMessage(null), 6000);
        }
        
        setTeams(sorted);
      }
    };
    load();
    const interval = setInterval(load, 3000);
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
    <div className="bg-nova-black min-h-screen pt-40 pb-32 px-6 overflow-hidden relative">
      {/* Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#7C3AED20,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="text-center mb-32 relative">
          <motion.div initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 200 }} className="inline-block p-6 bg-nova-violet/20 border border-nova-violet/40 rounded-[2.5rem] text-nova-violet mb-12 shadow-[0_0_80px_rgba(124,58,237,0.4)]">
             <Trophy size={64} className="animate-pulse" />
          </motion.div>
          <h1 className="editorial-title text-[clamp(2rem,10vw,10rem)] text-white leading-none uppercase tracking-tighter">
            LE SCRUTIN DES <br /><span className="text-nova-violet italic font-light">VAINQUEURS.</span>
          </h1>
        </header>

        {/* Countdown Area */}
        <div className="mb-40 text-center space-y-20">
            <div className="inline-flex items-center gap-4 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
               <Activity className="text-nova-violet animate-pulse" size={16} /> Clôture Définitive du Scrutin 2026
            </div>
            <CountdownTimer targetDate={targetDate} />
            <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter">
                Votez maintenant pour l'équipe de votre choix !
            </h2>
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
                className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[4rem] flex flex-col md:flex-row items-center gap-12 group relative overflow-hidden hover:bg-white/[0.08] transition-all duration-700"
              >
                 {/* Rank Background */}
                 <div className="text-9xl font-black text-white/[0.03] group-hover:text-nova-violet/[0.1] transition-all duration-700 absolute -left-6 top-1/2 -translate-y-1/2 select-none italic">
                    #{i + 1}
                 </div>

                 {i === 0 && team.votes > 0 && (
                   <div className="absolute top-0 right-0 px-10 py-3 bg-nova-violet text-white text-[9px] font-black uppercase tracking-[0.4em] rounded-bl-[2.5rem] flex items-center gap-3 shadow-2xl">
                     <Crown size={16} fill="white" /> LEADER SUPRÊME
                   </div>
                 )}

                 <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden border-2 border-white/10 flex-shrink-0 relative z-10 shadow-2xl group-hover:border-nova-violet transition-colors">
                    <img src={team.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={team.name} />
                 </div>

                 <div className="flex-grow relative z-10 text-center md:text-left">
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-3 leading-none">{team.name}</h3>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">{team.members}</p>
                 </div>

                 <div className="text-center md:text-right relative z-10 space-y-4">
                    <div className="flex flex-col gap-2">
                       <span className="text-[10px] font-black uppercase text-nova-violet tracking-[0.5em] mb-1">Score Actuel</span>
                       <span className="text-6xl font-black text-white leading-none tracking-tighter">{team.votes.toLocaleString()}</span>
                    </div>
                    <div className="space-y-3">
                       <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mx-auto md:ml-auto">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(100, (team.votes / LIMIT) * 100)}%` }} className={`h-full ${i === 0 ? 'bg-nova-violet shadow-[0_0_20px_#7C3AED]' : 'bg-white/40'}`} />
                       </div>
                    </div>
                    <Button variant="accent" size="sm" className="mt-4" onClick={() => setSelectedTeam(team)}>Voter Final</Button>
                 </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Vote (Dark Theme) */}
      <AnimatePresence>
        {selectedTeam && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4" onClick={() => setSelectedTeam(null)}>
             <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} className="bg-nova-black border border-white/10 w-full max-w-xl rounded-[4rem] p-12 relative overflow-hidden" onClick={e => e.stopPropagation()}>
                <button onClick={() => setSelectedTeam(null)} className="absolute top-10 right-10 text-gray-500 hover:text-white"><X size={32} /></button>
                <div className="text-center mb-10">
                   <div className="w-24 h-24 rounded-[2rem] overflow-hidden mx-auto mb-8 border-4 border-nova-violet shadow-[0_0_50px_rgba(124,58,237,0.3)]"><img src={selectedTeam.image} className="w-full h-full object-cover" alt="Selected" /></div>
                   <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">{selectedTeam.name}</h2>
                </div>
                <div className="space-y-12">
                   <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center gap-10">
                         <button onClick={() => setVoteCount(Math.max(1, voteCount - 1))} className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-4xl font-light text-white hover:bg-nova-violet transition-all">-</button>
                         <span className="text-8xl font-black text-white w-40 text-center tracking-tighter">{voteCount}</span>
                         <button onClick={() => setVoteCount(voteCount + 1)} className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-4xl font-light text-white hover:bg-nova-violet transition-all">+</button>
                      </div>
                   </div>
                   <div className="bg-white/5 p-10 rounded-[2.5rem] text-center border border-white/10">
                      <span className="text-[10px] font-black uppercase text-nova-violet tracking-[0.5em] block mb-2">Contribution Excellence</span>
                      <span className="text-4xl font-black text-white">{voteCount * 500} FCFA</span>
                   </div>
                   <Button className="w-full py-7" size="lg" onClick={handleVote}>Valider mon Vote Gagnant <ChevronRight size={20} className="ml-2" /></Button>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WinnersVoting;
