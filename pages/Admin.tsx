
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Package, ShieldCheck, Trash2, Plus, History, AlertCircle, FileUp, X, Download, FileText, Activity, Image as ImageIcon, Settings, Eye, EyeOff, Layers, Users, Trophy } from 'lucide-react';
import Button from '../components/Button';

interface Broadcast {
  id: string;
  title: string;
  content: string;
  link?: string;
  fileData?: string;
  fileName?: string;
  timestamp: string;
  type: 'message' | 'file' | 'critical';
}

interface LivePhase {
  id: string;
  number: number;
  title: string;
  description: string;
  image: string;
  status: 'completed' | 'active' | 'upcoming';
  timestamp: string;
}

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
  const [activeAdminTab, setActiveAdminTab] = useState<'colis' | 'live' | 'site' | 'partners' | 'votes'>('colis');
  const [isLogged, setIsLogged] = useState(false);
  const [pass, setPass] = useState('');

  // Config du site
  const [hiddenPages, setHiddenPages] = useState<string[]>([]);
  const [isReorganized, setIsReorganized] = useState(false);

  // States Live Étapes
  const [livePhases, setLivePhases] = useState<LivePhase[]>([]);
  const [liveTitle, setLiveTitle] = useState('');
  const [liveDesc, setLiveDesc] = useState('');
  const [liveImage, setLiveImage] = useState<string | null>(null);

  // States Partenaires
  const [partners, setPartners] = useState<Partner[]>([]);
  const [pName, setPName] = useState('');
  const [pLogo, setPLogo] = useState<string | null>(null);
  const [pCat, setPCat] = useState<'enterprise' | 'institution' | 'media'>('enterprise');

  // States Votes
  const [votingTeams, setVotingTeams] = useState<VotingTeam[]>([]);
  const [vtName, setVtName] = useState('');
  const [vtMembers, setVtMembers] = useState('');
  const [vtImage, setVtImage] = useState<string | null>(null);

  // State Broadcasts
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const config = JSON.parse(localStorage.getItem('tnc_site_config') || '{"hiddenPages":[], "isReorganized":false}');
    setHiddenPages(config.hiddenPages || []);
    setIsReorganized(config.isReorganized || false);

    setBroadcasts(JSON.parse(localStorage.getItem('tnc_broadcasts') || '[]'));
    setLivePhases(JSON.parse(localStorage.getItem('tnc_live_phases') || '[]'));
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

  const handleLogin = () => {
    if (pass === 'nova2026') setIsLogged(true);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setter(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const savePartners = (updated: Partner[]) => {
    setPartners(updated);
    localStorage.setItem('tnc_partners', JSON.stringify(updated));
  };

  const addPartner = () => {
    if (!pName || !pLogo) return;
    const newP: Partner = { id: Date.now().toString(), name: pName, logo: pLogo, category: pCat };
    savePartners([...partners, newP]);
    setPName(''); setPLogo(null);
  };

  const addVotingTeam = () => {
    if (!vtName || !vtImage) return;
    const newVt: VotingTeam = { id: Date.now().toString(), name: vtName, members: vtMembers, image: vtImage, votes: 0 };
    const updated = [...votingTeams, newVt];
    setVotingTeams(updated);
    localStorage.setItem('tnc_voting_teams', JSON.stringify(updated));
    setVtName(''); setVtMembers(''); setVtImage(null);
  };

  const handleAddLivePhase = () => {
    if (!liveTitle || !liveDesc || !liveImage) return;
    const newPhase: LivePhase = {
      id: Date.now().toString(),
      number: livePhases.length + 6,
      title: liveTitle,
      description: liveDesc,
      image: liveImage,
      status: 'completed',
      timestamp: new Date().toISOString()
    };
    const updated = [...livePhases, newPhase];
    setLivePhases(updated);
    localStorage.setItem('tnc_live_phases', JSON.stringify(updated));
    setLiveTitle(''); setLiveDesc(''); setLiveImage(null);
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
          <input 
            type="password" value={pass} onChange={(e) => setPass(e.target.value)}
            placeholder="Clé d'administration"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white mb-6 outline-none focus:border-nova-violet font-bold text-center"
          />
          <Button className="w-full" onClick={handleLogin}>Déverrouiller</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-20 px-4 md:px-6 bg-[#0B0F19] text-white">
      <div className="container mx-auto max-w-7xl">
        <header className="mb-16 flex flex-col xl:flex-row xl:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div>
            <span className="text-nova-violet font-black tracking-widest uppercase text-[10px] block mb-4">Portail de Gestion Master</span>
            <h1 className="editorial-title text-4xl md:text-7xl">CONTRÔLE <br /><span className="text-nova-violet italic font-light">DYNAMIQUE.</span></h1>
          </div>
          <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-3xl border border-white/10">
            {[
              { id: 'colis', label: 'Colis', icon: <Package size={14}/> },
              { id: 'live', label: 'Live', icon: <Activity size={14}/> },
              { id: 'partners', label: 'Partenaires', icon: <Users size={14}/> },
              { id: 'votes', label: 'Votes', icon: <Trophy size={14}/> },
              { id: 'site', label: 'Site', icon: <Settings size={14}/> },
            ].map(tab => (
              <button 
                key={tab.id} onClick={() => setActiveAdminTab(tab.id as any)}
                className={`px-6 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeAdminTab === tab.id ? 'bg-nova-violet text-white shadow-xl' : 'text-gray-500 hover:text-white'}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeAdminTab === 'site' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-12">
               <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem]">
                  <h3 className="text-xl font-black uppercase mb-8 flex items-center gap-3"><Eye size={20} /> Visibilité des Pages</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Déroulement', path: '/deroulement' },
                      { name: 'Live Étapes', path: '/etapes-en-cours' },
                      { name: 'Lauréats 2025', path: '/laureats-2025' },
                      { name: 'Équipe 2026', path: '/equipe-2026' },
                      { name: 'Galerie', path: '/galerie' },
                      { name: 'Partenaires', path: '/partenaires' },
                      { name: 'Contact', path: '/contact' },
                      { name: 'Vote Public', path: '/vote' },
                      { name: 'Vote Gagnants', path: '/vote-gagnants' },
                    ].map(page => (
                      <div key={page.path} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                         <span className="text-xs font-bold uppercase tracking-widest">{page.name}</span>
                         <button 
                           onClick={() => togglePageVisibility(page.path)}
                           className={`p-2 rounded-xl transition-all ${hiddenPages.includes(page.path) ? 'bg-nova-red text-white' : 'bg-green-500/20 text-green-500'}`}
                         >
                            {hiddenPages.includes(page.path) ? <EyeOff size={18} /> : <Eye size={18} />}
                         </button>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem]">
                  <h3 className="text-xl font-black uppercase mb-8 flex items-center gap-3"><Layers size={20} /> Structure du Menu</h3>
                  <div className="p-8 bg-nova-violet/10 border border-nova-violet/20 rounded-[2rem] text-center">
                      <p className="text-sm text-gray-400 mb-8 italic">Le mode "Réorganiser" regroupe Lauréats, Galerie et Équipe sous un seul bouton "Rétrospectives" dans la navigation.</p>
                      <button 
                        onClick={() => updateConfig(hiddenPages, !isReorganized)}
                        className={`px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isReorganized ? 'bg-nova-violet text-white shadow-2xl' : 'border border-white/20 text-gray-500 hover:text-white'}`}
                      >
                         {isReorganized ? 'Désactiver Réorganisation' : 'Activer Réorganisation'}
                      </button>
                  </div>
               </div>
            </motion.div>
          )}

          {activeAdminTab === 'partners' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-2 gap-12">
               <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 h-fit">
                  <h3 className="text-xs font-black uppercase tracking-widest text-nova-violet mb-8">Nouveau Partenaire</h3>
                  <div className="space-y-6">
                     <input value={pName} onChange={e => setPName(e.target.value)} placeholder="Nom de l'entreprise" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm font-bold" />
                     <select value={pCat} onChange={e => setPCat(e.target.value as any)} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm font-bold text-white">
                        <option value="enterprise" className="bg-nova-black">Entreprise</option>
                        <option value="institution" className="bg-nova-black">Institution / École</option>
                        <option value="media" className="bg-nova-black">Média / Presse</option>
                     </select>
                     <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 transition-all">
                        {pLogo ? <img src={pLogo} className="h-20 object-contain" /> : <div className="text-center"><ImageIcon className="mx-auto mb-2 text-gray-500" /> <span className="text-[10px] uppercase font-black text-gray-500">Logo</span></div>}
                        <input type="file" className="hidden" accept="image/*" onChange={e => handleImageUpload(e, setPLogo)} />
                     </label>
                     <Button className="w-full" onClick={addPartner} disabled={!pName || !pLogo}>Ajouter Partenaire</Button>
                  </div>
               </div>
               <div className="space-y-4">
                  {partners.map(p => (
                    <div key={p.id} className="bg-white/5 p-6 rounded-2xl flex items-center justify-between border border-white/10 group">
                       <div className="flex items-center gap-6">
                          <img src={p.logo} className="w-16 h-16 object-contain bg-white rounded-xl p-2" />
                          <div>
                            <div className="text-xs font-black uppercase">{p.name}</div>
                            <div className="text-[8px] font-black uppercase text-nova-violet tracking-widest">{p.category}</div>
                          </div>
                       </div>
                       <button onClick={() => deleteItem(p.id, 'tnc_partners', setPartners)} className="p-3 text-gray-600 hover:text-nova-red opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={18} /></button>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}

          {activeAdminTab === 'votes' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-2 gap-12">
               <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 h-fit">
                  <h3 className="text-xs font-black uppercase tracking-widest text-nova-violet mb-8">Nouveau Binôme pour Vote</h3>
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
                            <div className="text-[8px] font-black uppercase text-gray-500">{v.members}</div>
                          </div>
                       </div>
                       <button onClick={() => deleteItem(v.id, 'tnc_voting_teams', setVotingTeams)} className="p-3 text-gray-600 hover:text-nova-red opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={18} /></button>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}

          {/* Autres tabs conservés ... */}
          {activeAdminTab === 'live' && (
            <div className="grid lg:grid-cols-2 gap-12">
               <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
                  <h3 className="text-xs font-black uppercase tracking-widest text-nova-violet mb-8">Ajouter au Journal Live</h3>
                  <div className="space-y-6">
                     <input value={liveTitle} onChange={e => setLiveTitle(e.target.value)} placeholder="Titre de l'étape" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm font-bold" />
                     <textarea value={liveDesc} onChange={e => setLiveDesc(e.target.value)} placeholder="Description..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm h-32" />
                     <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 transition-all">
                        {liveImage ? <img src={liveImage} className="h-20 object-contain" /> : <ImageIcon className="text-gray-500" />}
                        <input type="file" className="hidden" accept="image/*" onChange={e => handleImageUpload(e, setLiveImage)} />
                     </label>
                     <Button className="w-full" onClick={handleAddLivePhase}>Publier l'étape</Button>
                  </div>
               </div>
               <div className="space-y-4">
                  {livePhases.map(p => (
                    <div key={p.id} className="bg-white/5 p-4 rounded-xl flex items-center justify-between group">
                       <div className="flex items-center gap-4">
                          <img src={p.image} className="w-12 h-12 object-cover rounded-lg" />
                          <span className="text-xs font-bold uppercase">{p.title}</span>
                       </div>
                       <button onClick={() => deleteItem(p.id, 'tnc_live_phases', setLivePhases)} className="text-gray-600 hover:text-nova-red opacity-0 group-hover:opacity-100"><Trash2 size={16} /></button>
                    </div>
                  ))}
               </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Admin;
