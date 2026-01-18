
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Package, ShieldCheck, Trash2, Plus, History, AlertCircle, FileUp, X, Download, FileText, Activity, Image as ImageIcon, Settings, Eye, EyeOff, Layers, Users, Trophy, BarChart3 } from 'lucide-react';
import Button from '../components/Button';

interface VotingTeam {
  id: string;
  name: string;
  members: string;
  image: string;
  votes: number;
}

interface Partner {
  id: string;
  name: string;
  logo: string;
  category: 'enterprise' | 'institution' | 'media';
}

const Admin: React.FC = () => {
  const [activeAdminTab, setActiveAdminTab] = useState<'colis' | 'live' | 'site' | 'partners' | 'votes' | 'stats'>('colis');
  const [isLogged, setIsLogged] = useState(false);
  const [pass, setPass] = useState('');

  const [hiddenPages, setHiddenPages] = useState<string[]>([]);
  const [isReorganized, setIsReorganized] = useState(false);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [votingTeams, setVotingTeams] = useState<VotingTeam[]>([]);
  
  // Form states
  const [vtName, setVtName] = useState('');
  const [vtMembers, setVtMembers] = useState('');
  const [vtImage, setVtImage] = useState<string | null>(null);
  const [pName, setPName] = useState('');
  const [pLogo, setPLogo] = useState<string | null>(null);
  const [pCat, setPCat] = useState<'enterprise' | 'institution' | 'media'>('enterprise');

  useEffect(() => {
    // Initialisation Config avec masquage par défaut des votes
    const savedConfig = localStorage.getItem('tnc_site_config');
    let config = savedConfig ? JSON.parse(savedConfig) : { hiddenPages: ['/vote', '/vote-gagnants'], isReorganized: false };
    
    if (!savedConfig) {
      localStorage.setItem('tnc_site_config', JSON.stringify(config));
    }

    setHiddenPages(config.hiddenPages || []);
    setIsReorganized(config.isReorganized || false);
    setPartners(JSON.parse(localStorage.getItem('tnc_partners') || '[]'));
    setVotingTeams(JSON.parse(localStorage.getItem('tnc_voting_teams') || '[]'));
  }, []);

  const updateConfig = (newHidden: string[], newReorg: boolean) => {
    const config = { hiddenPages: newHidden, isReorganized: newReorg };
    setHiddenPages(newHidden);
    setIsReorganized(newReorg);
    localStorage.setItem('tnc_site_config', JSON.stringify(config));
  };

  const togglePageVisibility = (path: string) => {
    const newHidden = hiddenPages.includes(path) 
      ? hiddenPages.filter(p => p !== path) 
      : [...hiddenPages, path];
    updateConfig(newHidden, isReorganized);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setter(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const addVotingTeam = () => {
    if (!vtName || !vtImage) return;
    const newVt: VotingTeam = { id: Date.now().toString(), name: vtName, members: vtMembers, image: vtImage, votes: 0 };
    const updated = [...votingTeams, newVt];
    setVotingTeams(updated);
    localStorage.setItem('tnc_voting_teams', JSON.stringify(updated));
    setVtName(''); setVtMembers(''); setVtImage(null);
  };

  const deleteItem = (id: string, key: string, stateSetter: any) => {
    if (window.confirm("Supprimer définitivement ?")) {
      const current = JSON.parse(localStorage.getItem(key) || '[]');
      const updated = current.filter((item: any) => item.id !== id);
      stateSetter(updated);
      localStorage.setItem(key, JSON.stringify(updated));
    }
  };

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-nova-black flex items-center justify-center p-6">
        <div className="max-w-md w-full p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-center backdrop-blur-xl">
          <ShieldCheck size={48} className="text-nova-violet mx-auto mb-8" />
          <h1 className="text-2xl font-black text-white uppercase mb-8">Accès Restreint</h1>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Clé d'administration" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white mb-6 outline-none focus:border-nova-violet font-bold text-center" />
          <Button className="w-full" onClick={() => pass === 'nova2026' && setIsLogged(true)}>Déverrouiller</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-20 px-4 md:px-6 bg-[#0B0F19] text-white">
      <div className="container mx-auto max-w-7xl">
        <header className="mb-16 flex flex-col xl:flex-row xl:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div>
            <span className="text-nova-violet font-black tracking-widest uppercase text-[10px] block mb-4">Master Portal</span>
            <h1 className="editorial-title text-4xl md:text-7xl">CONTRÔLE <br /><span className="text-nova-violet italic font-light">STRATÉGIQUE.</span></h1>
          </div>
          <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-3xl border border-white/10">
            {[
              { id: 'colis', label: 'Colis', icon: <Package size={14}/> },
              { id: 'partners', label: 'Partenaires', icon: <Users size={14}/> },
              { id: 'votes', label: 'Gestion Votes', icon: <Trophy size={14}/> },
              { id: 'stats', label: 'Stats Live', icon: <BarChart3 size={14}/> },
              { id: 'site', label: 'Site', icon: <Settings size={14}/> },
            ].map(tab => (
              <button key={tab.id} onClick={() => setActiveAdminTab(tab.id as any)} className={`px-6 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeAdminTab === tab.id ? 'bg-nova-violet text-white shadow-xl' : 'text-gray-500 hover:text-white'}`}>
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeAdminTab === 'stats' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
                     <span className="text-[10px] font-black text-nova-violet uppercase tracking-widest block mb-4">Audit Vote Public (Limite 1000)</span>
                     <div className="space-y-6">
                        {votingTeams.map(t => (
                          <div key={t.id} className="space-y-2">
                             <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                                <span>{t.name}</span>
                                <span className="text-nova-violet">{(t.votes / 1000 * 30).toFixed(1)}% / 30%</span>
                             </div>
                             <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-nova-violet" style={{ width: `${Math.min(100, (t.votes / 1000) * 100)}%` }} />
                             </div>
                             <div className="text-[9px] text-gray-500 text-right">{t.votes} / 1000 votes reçus</div>
                          </div>
                        ))}
                     </div>
                  </div>
                  <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
                     <span className="text-[10px] font-black text-nova-red uppercase tracking-widest block mb-4">Audit Vote Gagnants (Limite 2000)</span>
                     <div className="space-y-6">
                        {votingTeams.map(t => (
                          <div key={t.id} className="space-y-2">
                             <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                                <span>{t.name}</span>
                                <span className="text-nova-red">{(t.votes / 2000 * 40).toFixed(1)}% / 40%</span>
                             </div>
                             <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-nova-red" style={{ width: `${Math.min(100, (t.votes / 2000) * 100)}%` }} />
                             </div>
                             <div className="text-[9px] text-gray-500 text-right">{t.votes} / 2000 votes reçus</div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </motion.div>
          )}

          {activeAdminTab === 'site' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-12">
               <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem]">
                  <h3 className="text-xl font-black uppercase mb-8 flex items-center gap-3"><Eye size={20} /> Visibilité</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Vote Public', path: '/vote' },
                      { name: 'Vote Gagnants', path: '/vote-gagnants' },
                      { name: 'Déroulement', path: '/deroulement' },
                      { name: 'Lauréats 2025', path: '/laureats-2025' },
                      { name: 'Partenaires', path: '/partenaires' },
                    ].map(page => (
                      <div key={page.path} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                         <span className="text-xs font-bold uppercase tracking-widest">{page.name}</span>
                         <button onClick={() => togglePageVisibility(page.path)} className={`p-2 rounded-xl transition-all ${hiddenPages.includes(page.path) ? 'bg-nova-red text-white' : 'bg-green-500/20 text-green-500'}`}>
                            {hiddenPages.includes(page.path) ? <EyeOff size={18} /> : <Eye size={18} />}
                         </button>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem]">
                  <h3 className="text-xl font-black uppercase mb-8 flex items-center gap-3"><Layers size={20} /> Rangement</h3>
                  <div className="p-8 bg-nova-violet/10 border border-nova-violet/20 rounded-[2rem] text-center">
                      <p className="text-sm text-gray-400 mb-8 italic">Mode "Réorganiser" : Regroupe Lauréats, Galerie et Équipe sous "Rétrospectives".</p>
                      <button onClick={() => updateConfig(hiddenPages, !isReorganized)} className={`px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isReorganized ? 'bg-nova-violet text-white shadow-2xl' : 'border border-white/20 text-gray-500 hover:text-white'}`}>
                         {isReorganized ? 'Désactiver' : 'Activer'}
                      </button>
                  </div>
               </div>
            </motion.div>
          )}

          {activeAdminTab === 'votes' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-2 gap-12">
               <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 h-fit">
                  <h3 className="text-xs font-black uppercase tracking-widest text-nova-violet mb-8">Nouveau Binôme</h3>
                  <div className="space-y-6">
                     <input value={vtName} onChange={e => setVtName(e.target.value)} placeholder="Nom de l'équipe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm font-bold" />
                     <input value={vtMembers} onChange={e => setVtMembers(e.target.value)} placeholder="Noms des membres" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm font-bold" />
                     <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 transition-all overflow-hidden">
                        {vtImage ? <img src={vtImage} className="w-full h-full object-cover" /> : <div className="text-center"><ImageIcon className="mx-auto mb-2 text-gray-500" /> <span className="text-[10px] uppercase font-black text-gray-500">Photo du Binôme</span></div>}
                        <input type="file" className="hidden" accept="image/*" onChange={e => handleImageUpload(e, setVtImage)} />
                     </label>
                     <Button className="w-full" onClick={addVotingTeam} disabled={!vtName || !vtImage}>Publier au Vote</Button>
                  </div>
               </div>
               <div className="space-y-4">
                  {votingTeams.map(v => (
                    <div key={v.id} className="bg-white/5 p-6 rounded-2xl flex items-center justify-between border border-white/10 group">
                       <div className="flex items-center gap-6">
                          <img src={v.image} className="w-16 h-16 object-cover rounded-xl" />
                          <div>
                            <div className="text-xs font-black uppercase">{v.name}</div>
                            <div className="text-[8px] font-black uppercase text-gray-500">{v.votes} votes enregistrés</div>
                          </div>
                       </div>
                       <button onClick={() => deleteItem(v.id, 'tnc_voting_teams', setVotingTeams)} className="p-3 text-gray-600 hover:text-nova-red opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={18} /></button>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Admin;
