
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Bell, CheckCircle2, 
  Upload, Palette, Sparkles, LogOut,
  Package, Download, ChevronRight, User
} from 'lucide-react';
import Button from '../components/Button';

interface Broadcast {
  id: string;
  title: string;
  content: string;
  link?: string;
  timestamp: string;
  type: 'message' | 'file' | 'critical';
}

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'instructions' | 'missions' | 'space'>('overview');
  const [teamName, setTeamName] = useState('Innovation Team');
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
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const getAccentText = () => {
    if (accentColor === 'red') return 'text-nova-red';
    if (accentColor === 'gold') return 'text-yellow-600';
    return 'text-nova-violet';
  };

  const getAccentBg = () => {
    if (accentColor === 'red') return 'bg-nova-red text-white';
    if (accentColor === 'gold') return 'bg-yellow-500 text-nova-black';
    return 'bg-nova-violet text-white';
  };

  const menuItems = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: <LayoutDashboard size={20} /> },
    { id: 'instructions', label: 'Réception (Colis)', icon: <Package size={20} /> },
    { id: 'missions', label: 'Mes Dépôts', icon: <Upload size={20} /> },
    { id: 'space', label: 'Mon Espace', icon: <Palette size={20} /> },
  ] as const;

  return (
    <div className="min-h-screen bg-[#FDFDFF] pb-24">
      
      {/* Top Header - Unified Mobile/Desktop */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50 pt-20 pb-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${getAccentBg()} shadow-lg shadow-current/10`}>
                <Sparkles size={18} />
             </div>
             <div>
                <h1 className="text-sm font-black uppercase tracking-widest text-nova-black truncate max-w-[150px]">{teamName}</h1>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Compétiteur 2026</p>
             </div>
          </div>
          <button onClick={logout} className="p-3 text-gray-300 hover:text-nova-red transition-colors">
            <LogOut size={20} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 pt-44 md:pt-48 lg:flex lg:gap-12">
        
        {/* Navigation - Sidebar for Desktop, Bottom for Mobile */}
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 px-2 py-3 lg:relative lg:border-none lg:bg-transparent lg:w-72 lg:p-0 flex lg:flex-col justify-around lg:justify-start gap-1 z-50">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col lg:flex-row items-center gap-2 lg:gap-4 px-3 lg:px-6 py-2 lg:py-5 rounded-2xl transition-all duration-300 ${activeTab === item.id ? `${getAccentBg()} lg:shadow-xl` : 'text-gray-400 hover:bg-gray-50'}`}
            >
              {item.icon}
              <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Content Section */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {activeTab === 'overview' && (
                <>
                  {/* Status Card */}
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm overflow-hidden relative group">
                    <div className="flex items-center justify-between mb-10">
                       <span className={`text-[10px] font-black uppercase tracking-widest ${getAccentText()}`}>Phase Active</span>
                       <span className="text-nova-black/20 font-black text-2xl group-hover:text-nova-violet/20 transition-colors duration-700">#02</span>
                    </div>
                    <h2 className="editorial-title text-4xl md:text-5xl text-nova-black mb-10">SÉLECTION <br /><span className={`${getAccentText()} italic font-light`}>EN COURS.</span></h2>
                    
                    {/* Simplified Progress for Mobile */}
                    <div className="flex items-center gap-3">
                      <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: '25%' }} className={`h-full ${getAccentBg()}`} />
                      </div>
                      <span className="text-[10px] font-black text-nova-black">25%</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Latest Colis */}
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100">
                      <div className="flex items-center justify-between mb-8">
                         <h3 className="text-[10px] font-black uppercase tracking-widest text-nova-black">Dernier Colis</h3>
                         <button onClick={() => setActiveTab('instructions')} className={`text-[10px] font-black uppercase underline ${getAccentText()}`}>Voir tout</button>
                      </div>
                      {broadcasts.length > 0 ? (
                        <div className="space-y-6">
                           <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                             <span className="text-[9px] font-bold text-gray-400 block mb-2">{broadcasts[0].timestamp}</span>
                             <h4 className="font-black text-sm text-nova-black uppercase mb-2">{broadcasts[0].title}</h4>
                             <p className="text-xs text-gray-500 font-medium line-clamp-2">{broadcasts[0].content}</p>
                           </div>
                        </div>
                      ) : (
                        <div className="py-10 text-center text-gray-300 font-bold uppercase text-[10px] tracking-widest">En attente d'envoi</div>
                      )}
                    </div>

                    {/* Resources */}
                    <div className="bg-nova-black rounded-[2.5rem] p-8 md:p-10 text-white">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-nova-violet mb-8">Ressources</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer">
                           <span className="text-[10px] font-bold uppercase tracking-widest">Guide Officiel PDF</span>
                           <Download size={16} className="text-nova-violet group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'instructions' && (
                <div className="space-y-6">
                  {broadcasts.map((b) => (
                    <div key={b.id} className="bg-white p-8 border border-gray-100 rounded-[2.5rem] shadow-sm relative overflow-hidden">
                       <div className="flex items-start justify-between mb-6">
                          <div className={`p-3 rounded-2xl ${b.type === 'critical' ? 'bg-nova-red/10 text-nova-red' : 'bg-nova-violet/10 text-nova-violet'}`}>
                             <Package size={20} />
                          </div>
                          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{b.timestamp}</span>
                       </div>
                       <h3 className="text-xl font-black text-nova-black uppercase mb-4 tracking-tighter">{b.title}</h3>
                       <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6">{b.content}</p>
                       {b.link && (
                         <Button size="sm" variant="outline" className="w-full" onClick={() => window.open(b.link)}>Accéder au contenu</Button>
                       )}
                       {b.type === 'critical' && <div className="absolute top-0 left-0 w-1.5 h-full bg-nova-red" />}
                    </div>
                  ))}
                  {broadcasts.length === 0 && (
                    <div className="py-32 text-center text-gray-300 font-black uppercase text-xs tracking-widest">Aucun message pour l'instant</div>
                  )}
                </div>
              )}

              {activeTab === 'space' && (
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100">
                  <h3 className="text-xs font-black uppercase tracking-widest text-nova-black mb-12">Personnalisation</h3>
                  <div className="space-y-12">
                     <div className="space-y-6">
                        <label className="text-[10px] font-black uppercase text-gray-400">Thème Visuel</label>
                        <div className="flex gap-4">
                          {['violet', 'red', 'gold'].map((color) => (
                            <button
                              key={color}
                              onClick={() => setAccentColor(color as any)}
                              className={`w-12 h-12 rounded-2xl border-4 transition-all ${accentColor === color ? 'border-nova-black scale-110' : 'border-transparent opacity-40'} ${color === 'violet' ? 'bg-nova-violet' : color === 'red' ? 'bg-nova-red' : 'bg-yellow-500'}`}
                            />
                          ))}
                        </div>
                     </div>
                     <div className="space-y-6">
                        <label className="text-[10px] font-black uppercase text-gray-400">Équipe</label>
                        <input value={teamName} onChange={e => setTeamName(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-nova-black font-bold outline-none focus:border-nova-violet transition-all" />
                        <Button size="sm" className="w-full" onClick={() => localStorage.setItem('tnc_team_name', teamName)}>Sauvegarder</Button>
                     </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'missions' && (
                <div className="bg-white rounded-[2.5rem] p-12 text-center border border-gray-100">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 text-nova-violet/20">
                     <Upload size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-nova-black uppercase mb-4">Portail Fermé</h3>
                  <p className="text-gray-400 font-medium text-sm mb-10">Les dépôts de livrables ne sont pas encore ouverts pour votre binôme. Surveillez vos colis.</p>
                  <Button variant="outline" disabled className="w-full md:w-auto">En attente</Button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
