
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, FileText, Send, 
  MessageSquare, Bell, Clock, 
  CheckCircle2, AlertCircle, Upload, 
  Download, ExternalLink, UserCircle,
  Settings, Palette, Sparkles, LogOut,
  Package, ArrowUpRight
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

interface Broadcast {
  id: string;
  title: string;
  content: string;
  link?: string;
  timestamp: string;
  type: 'message' | 'file' | 'critical';
}

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'missions' | 'instructions' | 'space'>('overview');
  const [teamName, setTeamName] = useState('Alpha Innovators');
  const [userName, setUserName] = useState('Jean Dupont');
  const [accentColor, setAccentColor] = useState<'violet' | 'red' | 'gold'>('violet');
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);

  useEffect(() => {
    const savedTeam = localStorage.getItem('tnc_team_name');
    const savedUser = localStorage.getItem('tnc_user_name');
    const savedBroadcasts = localStorage.getItem('tnc_broadcasts');
    
    if (savedTeam) setTeamName(savedTeam);
    if (savedUser) setUserName(savedUser);
    if (savedBroadcasts) setBroadcasts(JSON.parse(savedBroadcasts));

    // Listen for admin updates
    const handleStorage = () => {
      const updated = localStorage.getItem('tnc_broadcasts');
      if (updated) setBroadcasts(JSON.parse(updated));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const progressSteps = [
    { name: 'Candidature', status: 'completed' },
    { name: 'Sélection', status: 'current' },
    { name: 'Prototype', status: 'pending' },
    { name: 'Finale', status: 'pending' }
  ];

  const getAccentClass = () => {
    switch(accentColor) {
      case 'red': return 'bg-nova-red text-white';
      case 'gold': return 'bg-yellow-500 text-nova-black';
      default: return 'bg-nova-violet text-white';
    }
  };

  const getAccentText = () => {
    switch(accentColor) {
      case 'red': return 'text-nova-red';
      case 'gold': return 'text-yellow-600';
      default: return 'text-nova-violet';
    }
  };

  const logout = () => {
    localStorage.removeItem('tnc_user_name');
    localStorage.removeItem('tnc_team_name');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-6 bg-[#FAFBFF]">
      <div className={`fixed inset-0 pointer-events-none transition-colors duration-1000 ${accentColor === 'red' ? 'bg-nova-red/5' : accentColor === 'gold' ? 'bg-yellow-500/5' : 'bg-nova-violet/5'}`} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="w-full">
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-3">
              <div className={`p-1.5 rounded-lg ${getAccentText()} bg-white shadow-sm`}><Sparkles size={14} /></div>
              <span className={`font-black tracking-[0.4em] uppercase text-[9px] ${getAccentText()}`}>Session Élite 2026</span>
            </motion.div>
            <h1 className="editorial-title text-3xl md:text-5xl text-nova-black leading-tight">
              SALUT, <br /><span className={`${getAccentText()} italic font-light`}>{teamName}</span>
            </h1>
          </div>

          <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-4 p-3 bg-white border border-gray-100 rounded-3xl shadow-sm">
            <div className="flex items-center gap-3 px-2">
               <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400"><UserCircle size={24} /></div>
               <div className="text-left">
                  <div className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Connecté</div>
                  <div className="text-xs font-bold text-nova-black uppercase truncate max-w-[120px]">{userName}</div>
               </div>
            </div>
            <button onClick={logout} className="p-3 text-gray-300 hover:text-nova-red transition-colors"><LogOut size={18} /></button>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <nav className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-3 no-scrollbar">
              <button onClick={() => setActiveTab('overview')} className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-500 font-black uppercase text-[9px] tracking-widest ${activeTab === 'overview' ? `${getAccentClass()} shadow-lg` : 'bg-white text-gray-400 hover:bg-gray-50'}`}>
                <LayoutDashboard size={16} /> <span className="hidden sm:inline">Vue d'ensemble</span>
              </button>
              <button onClick={() => setActiveTab('instructions')} className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-500 font-black uppercase text-[9px] tracking-widest ${activeTab === 'instructions' ? `${getAccentClass()} shadow-lg` : 'bg-white text-gray-400 hover:bg-gray-50'}`}>
                <Package size={16} /> <span className="hidden sm:inline">Réception (Colis)</span>
              </button>
              <button onClick={() => setActiveTab('missions')} className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-500 font-black uppercase text-[9px] tracking-widest ${activeTab === 'missions' ? `${getAccentClass()} shadow-lg` : 'bg-white text-gray-400 hover:bg-gray-50'}`}>
                <Upload size={16} /> <span className="hidden sm:inline">Mes Dépôts</span>
              </button>
              <button onClick={() => setActiveTab('space')} className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-500 font-black uppercase text-[9px] tracking-widest ${activeTab === 'space' ? `${getAccentClass()} shadow-lg` : 'bg-white text-gray-400 hover:bg-gray-50'}`}>
                <Palette size={16} /> <span className="hidden sm:inline">Mon Espace</span>
              </button>
            </nav>
          </aside>

          <main className="lg:col-span-9">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                  <div className="bg-white p-8 md:p-10 border border-gray-100 rounded-[2.5rem] shadow-sm">
                    <div className="flex items-center justify-between mb-10">
                       <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Progression Élite</h3>
                       <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest ${getAccentClass()}`}>Phase de Sélection</span>
                    </div>
                    <div className="relative flex justify-between items-center px-4">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-50 -translate-y-1/2 -z-10" />
                      {progressSteps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${step.status === 'completed' ? (getAccentClass()) : step.status === 'current' ? `bg-white border-2 ${getAccentText()} border-current shadow-lg` : 'bg-gray-50 text-gray-300'}`}>
                            {step.status === 'completed' ? <CheckCircle2 size={12} /> : <span className="text-[10px] font-black">{i + 1}</span>}
                          </div>
                          <span className="text-[8px] font-black uppercase tracking-widest hidden sm:block text-gray-400">{step.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 md:p-10 border border-gray-100 rounded-[2.5rem] shadow-sm">
                       <h4 className={`text-[9px] font-black uppercase tracking-widest ${getAccentText()} mb-8 flex items-center gap-2`}>
                          <Bell size={14} /> Derniers Colis Arrivés
                       </h4>
                       <div className="space-y-6">
                          {broadcasts.slice(0, 3).map((b) => (
                            <div key={b.id} className="pb-4 border-b border-gray-50 last:border-0 group cursor-pointer" onClick={() => setActiveTab('instructions')}>
                               <div className="text-[8px] font-bold text-gray-300 uppercase tracking-widest mb-1">{b.timestamp}</div>
                               <h5 className="font-black uppercase text-nova-black text-xs mb-1 group-hover:text-nova-violet transition-colors">{b.title}</h5>
                               <p className="text-[10px] text-gray-500 font-light truncate">{b.content}</p>
                            </div>
                          ))}
                          {broadcasts.length === 0 && <p className="text-gray-300 text-[10px] uppercase font-bold tracking-widest py-10 text-center">En attente de colis...</p>}
                       </div>
                    </div>

                    <div className="bg-nova-black p-8 md:p-10 rounded-[2.5rem] text-white relative group overflow-hidden">
                       <h4 className="text-[9px] font-black uppercase tracking-widest text-nova-violet mb-8">Directives Critiques</h4>
                       <div className="space-y-4 relative z-10">
                          <div className="p-4 bg-white/5 rounded-2xl flex items-center justify-between group-hover:bg-white/10 transition-all cursor-pointer">
                             <span className="text-[10px] font-bold uppercase tracking-widest">Guide Officiel 2026</span>
                             <Download size={14} className="text-nova-violet" />
                          </div>
                          <div className="p-4 bg-white/5 rounded-2xl flex items-center justify-between group-hover:bg-white/10 transition-all cursor-pointer">
                             <span className="text-[10px] font-bold uppercase tracking-widest">Calendrier des sessions</span>
                             <ArrowUpRight size={14} className="text-nova-violet" />
                          </div>
                       </div>
                       <div className="absolute top-0 right-0 w-32 h-32 bg-nova-violet/20 blur-3xl rounded-full" />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'instructions' && (
                <motion.div key="instructions" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  {broadcasts.map((b) => (
                    <div key={b.id} className={`bg-white p-8 md:p-12 border rounded-[3rem] shadow-sm relative overflow-hidden transition-all hover:shadow-xl ${b.type === 'critical' ? 'border-nova-red/20' : 'border-gray-100'}`}>
                      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                        <div className="flex items-center gap-5">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${b.type === 'critical' ? 'bg-nova-red/10 text-nova-red' : 'bg-nova-violet/10 text-nova-violet'}`}>
                            {b.type === 'file' ? <FileText size={24} /> : b.type === 'critical' ? <AlertCircle size={24} /> : <Package size={24} />}
                          </div>
                          <div>
                            <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1 block">{b.timestamp} • {b.type}</span>
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-nova-black">{b.title}</h3>
                          </div>
                        </div>
                        {b.link && (
                          <Button size="sm" onClick={() => window.open(b.link, '_blank')}>Ouvrir le document</Button>
                        )}
                      </div>
                      <p className="text-gray-500 font-light text-base leading-relaxed max-w-3xl">{b.content}</p>
                      {b.type === 'critical' && <div className="absolute top-0 left-0 w-1.5 h-full bg-nova-red" />}
                    </div>
                  ))}
                  {broadcasts.length === 0 && (
                    <div className="text-center py-40 bg-white rounded-[3rem] border border-dashed border-gray-100">
                      <Package size={48} className="mx-auto text-gray-200 mb-6" />
                      <p className="text-gray-400 font-black uppercase tracking-widest text-xs">Votre boîte de réception est vide</p>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'space' && (
                <motion.div key="space" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <div className="bg-white p-10 border border-gray-100 rounded-[3rem] shadow-sm">
                    <h3 className="text-xs font-black uppercase tracking-[0.4em] text-nova-black mb-10 flex items-center gap-3">
                       <Palette size={16} className={getAccentText()} /> Personnalisation de l'Espace
                    </h3>
                    <div className="space-y-12">
                       <div className="space-y-6">
                          <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Couleur d'accentuation (Aura)</label>
                          <div className="flex gap-4">
                             {(['violet', 'red', 'gold'] as const).map(color => (
                               <button 
                                key={color}
                                onClick={() => setAccentColor(color)}
                                className={`w-12 h-12 rounded-2xl border-4 transition-all ${accentColor === color ? 'border-nova-black scale-110' : 'border-transparent opacity-50'} ${color === 'violet' ? 'bg-nova-violet' : color === 'red' ? 'bg-nova-red' : 'bg-yellow-500'}`} 
                               />
                             ))}
                          </div>
                       </div>
                       <div className="space-y-6">
                          <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Identité Équipe</label>
                          <div className="flex flex-col md:flex-row gap-4">
                             <input value={teamName} onChange={(e) => setTeamName(e.target.value)} className="flex-grow bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold uppercase text-nova-black outline-none focus:border-nova-violet" />
                             <Button size="sm" onClick={() => localStorage.setItem('tnc_team_name', teamName)}>Sauvegarder</Button>
                          </div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'missions' && (
                <motion.div key="missions" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                   <div className="bg-white p-12 rounded-[3rem] border border-gray-100 text-center">
                      <Upload size={40} className="mx-auto text-nova-violet mb-6" />
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-nova-black mb-4">Espace de Dépôt</h3>
                      <p className="text-gray-400 font-light mb-10 max-w-sm mx-auto">Veuillez surveiller vos colis de réception pour connaître les dates d'ouverture des dépôts techniques.</p>
                      <Button variant="outline" disabled>Dépôts fermés</Button>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
