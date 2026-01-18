
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Package, ShieldCheck, Trash2, Plus, History, AlertCircle, FileUp, X, Download, FileText, Activity, Image as ImageIcon, Settings, Eye, EyeOff, Layers, Users, Trophy, BarChart3, TrendingUp, Clock } from 'lucide-react';
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
  const [activeAdminTab, setActiveAdminTab] = useState<'colis' | 'partners' | 'votes' | 'stats' | 'site'>('colis');
  const [isLogged, setIsLogged] = useState(false);
  const [pass, setPass] = useState('');

  // Config du site
  const [hiddenPages, setHiddenPages] = useState<string[]>([]);
  const [isReorganized, setIsReorganized] = useState(false);
  const [publicVoteEndDate, setPublicVoteEndDate] = useState('');
  const [winnersVoteEndDate, setWinnersVoteEndDate] = useState('');

  // States Gestion
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [votingTeams, setVotingTeams] = useState<VotingTeam[]>([]);

  // Form States
  const [cTitle, setCTitle] = useState('');
  const [cContent, setCContent] = useState('');
  const [cFile, setCFile] = useState<{ name: string, data: string } | null>(null);
  const [cType, setCType] = useState<'message' | 'file' | 'critical'>('message');
  const [pName, setPName] = useState('');
  const [pLogo, setPLogo] = useState<string | null>(null);
  const [pCat, setPCat] = useState<'enterprise' | 'institution' | 'media'>('enterprise');
  const [vtName, setVtName] = useState('');
  const [vtMembers, setVtMembers] = useState('');
  const [vtImage, setVtImage] = useState<string | null>(null);

  useEffect(() => {
    const config = JSON.parse(localStorage.getItem('tnc_site_config') || '{"hiddenPages":["/vote", "/vote-gagnants"], "isReorganized":false, "publicVoteEndDate":"", "winnersVoteEndDate":""}');
    setHiddenPages(config.hiddenPages || ["/vote", "/vote-gagnants"]);
    setIsReorganized(config.isReorganized || false);
    setPublicVoteEndDate(config.publicVoteEndDate || '');
    setWinnersVoteEndDate(config.winnersVoteEndDate || '');

    setBroadcasts(JSON.parse(localStorage.getItem('tnc_broadcasts') || '[]'));
    setPartners(JSON.parse(localStorage.getItem('tnc_partners') || '[]'));
    setVotingTeams(JSON.parse(localStorage.getItem('tnc_voting_teams') || '[]'));
  }, []);

  const updateConfig = (newHidden: string[], newReorg: boolean, pubEnd: string, winEnd: string) => {
    const config = { hiddenPages: newHidden, isReorganized: newReorg, publicVoteEndDate: pubEnd, winnersVoteEndDate: winEnd };
    setHiddenPages(newHidden);
    setIsReorganized(newReorg);
    setPublicVoteEndDate(pubEnd);
    setWinnersVoteEndDate(winEnd);
    localStorage.setItem('tnc_site_config', JSON.stringify(config));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setter(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSendColis = () => {
    if (!cTitle || !cContent) return;
    const newB: Broadcast = { id: Date.now().toString(), title: cTitle, content: cContent, type: cFile ? 'file' : cType, fileData: cFile?.data, fileName: cFile?.name, timestamp: new Date().toISOString() };
    const updated = [newB, ...broadcasts];
    setBroadcasts(updated);
    localStorage.setItem('tnc_broadcasts', JSON.stringify(updated));
    setCTitle(''); setCContent(''); setCFile(null);
    alert("Colis expédié !");
  };

  const handleAddPartner = () => {
    if (!pName || !pLogo) return;
    const newP: Partner = { id: Date.now().toString(), name: pName, logo: pLogo, category: pCat };
    const updated = [...partners, newP];
    setPartners(updated);
    localStorage.setItem('tnc_partners', JSON.stringify(updated));
    setPName(''); setPLogo(null);
    alert("Partenaire ajouté !");
  };

  const handleAddVotingTeam = () => {
    if (!vtName || !vtImage) return;
    const newVt: VotingTeam = { id: Date.now().toString(), name: vtName, members: vtMembers, image: vtImage, votes: 0 };
    const updated = [...votingTeams, newVt];
    setVotingTeams(updated);
    localStorage.setItem('tnc_voting_teams', JSON.stringify(updated));
    setVtName(''); setVtMembers(''); setVtImage(null);
    alert("Binôme ajouté !");
  };

  const deleteItem = (id: string, key: string, stateSetter: any) => {
    if (window.confirm("Supprimer ?")) {
      const current = JSON.parse(localStorage.getItem(key) || '[]');
      const updated = current.filter((i: any) => i.id !== id);
      stateSetter(updated);
      localStorage.setItem(key, JSON.stringify(updated));
    }
  };

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-nova-black flex items-center justify-center p-6">
        <div className="max-w-md w-full p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-center backdrop-blur-xl">
          <ShieldCheck size={48} className="text-nova-violet mx-auto mb-8" />
          <h1 className="text-2xl font-black text-white uppercase mb-8">Admin</h1>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Clé d'accès" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white mb-6 outline-none focus:border-nova-violet font-bold text-center" />
          <Button className="w-full" onClick={() => pass === 'nova2026' && setIsLogged(true)}>Entrer</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-20 px-4 md:px-6 bg-[#0B0F19] text-white">
      <div className="container mx-auto max-w-7xl">
        <header className="mb-16 flex flex-col xl:flex-row xl:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div>
            <h1 className="editorial-title text-4xl md:text-7xl">TABLEAU DE <br /><span className="text-nova-violet italic font-light">BORD MASTER.</span></h1>
          </div>
          <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-3xl border border-white/10">
            {['colis', 'partners', 'votes', 'stats', 'site'].map(tab => (
              <button key={tab} onClick={() => setActiveAdminTab(tab as any)} className={`px-6 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all ${activeAdminTab === tab ? 'bg-nova-violet text-white shadow-xl' : 'text-gray-500 hover:text-white'}`}>
                {tab}
              </button>
            ))}
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeAdminTab === 'site' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-12">
               <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] space-y-10">
                  <h3 className="text-xl font-black uppercase flex items-center gap-3"><Clock size={20} className="text-nova-violet" /> Échéances des Votes</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Fin du Vote Public</label>
                      <input type="datetime-local" value={publicVoteEndDate} onChange={(e) => updateConfig(hiddenPages, isReorganized, e.target.value, winnersVoteEndDate)} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-nova-violet" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Fin du Vote Gagnants</label>
                      <input type="datetime-local" value={winnersVoteEndDate} onChange={(e) => updateConfig(hiddenPages, isReorganized, publicVoteEndDate, e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-nova-violet" />
                    </div>
                  </div>
               </div>
               <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem]">
                  <h3 className="text-xl font-black uppercase mb-8 flex items-center gap-3"><Eye size={20} /> Visibilité</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Vote Public', path: '/vote' },
                      { name: 'Vote Gagnants', path: '/vote-gagnants' },
                      { name: 'Déroulement', path: '/deroulement' },
                      { name: 'Live Étapes', path: '/etapes-en-cours' },
                    ].map(page => (
                      <div key={page.path} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                         <span className="text-[10px] font-black uppercase">{page.name}</span>
                         <button onClick={() => {
                            const newHidden = hiddenPages.includes(page.path) ? hiddenPages.filter(p => p !== page.path) : [...hiddenPages, page.path];
                            updateConfig(newHidden, isReorganized, publicVoteEndDate, winnersVoteEndDate);
                         }} className={`p-2 rounded-xl ${hiddenPages.includes(page.path) ? 'bg-nova-red' : 'bg-green-500/20 text-green-500'}`}>
                            {hiddenPages.includes(page.path) ? <EyeOff size={16} /> : <Eye size={16} />}
                         </button>
                      </div>
                    ))}
                  </div>
               </div>
            </motion.div>
          )}

          {activeAdminTab === 'colis' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-2 gap-12">
               <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 h-fit">
                  <h3 className="text-xs font-black uppercase tracking-widest text-nova-violet mb-8 flex items-center gap-2"><Send size={16} /> Expédier un Colis</h3>
                  <div className="space-y-6">
                     <div className="flex gap-2 p-1 bg-white/5 rounded-xl">
                        {(['message', 'critical'] as const).map(t => (
                          <button key={t} onClick={() => setCType(t)} className={`flex-1 py-3 rounded-lg text-[8px] font-black uppercase transition-all ${cType === t ? 'bg-nova-violet text-white shadow-lg' : 'text-gray-500'}`}>
                            {t === 'critical' ? 'Urgent' : 'Message'}
                          </button>
                        ))}
                     </div>
                     <input value={cTitle} onChange={e => setCTitle(e.target.value)} placeholder="Objet" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm font-bold" />
                     <textarea value={cContent} onChange={e => setCContent(e.target.value)} placeholder="Contenu..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm h-32" />
                     <Button className="w-full" onClick={handleSendColis} disabled={!cTitle || !cContent}>Expédier</Button>
                  </div>
               </div>
               <div className="space-y-4">
                  {broadcasts.map(b => (
                    <div key={b.id} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center justify-between group">
                       <span className="text-xs font-black uppercase">{b.title}</span>
                       <button onClick={() => deleteItem(b.id, 'tnc_broadcasts', setBroadcasts)} className="p-3 text-gray-600 hover:text-nova-red opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={16}/></button>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}

          {activeAdminTab === 'partners' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-2 gap-12">
               <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 h-fit">
                  <h3 className="text-xs font-black uppercase tracking-widest text-nova-violet mb-8">Nouveau Partenaire</h3>
                  <div className="space-y-6">
                     <input value={pName} onChange={e => setPName(e.target.value)} placeholder="Nom" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm font-bold" />
                     <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer">
                        {pLogo ? <img src={pLogo} className="h-20 object-contain" /> : <ImageIcon className="text-gray-500" />}
                        <input type="file" className="hidden" onChange={e => handleImageUpload(e, setPLogo)} />
                     </label>
                     <Button className="w-full" onClick={handleAddPartner}>Ajouter</Button>
                  </div>
               </div>
               <div className="space-y-4">
                  {partners.map(p => (
                    <div key={p.id} className="bg-white/5 p-4 rounded-2xl flex items-center justify-between border border-white/10 group">
                       <span className="text-xs font-black uppercase">{p.name}</span>
                       <button onClick={() => deleteItem(p.id, 'tnc_partners', setPartners)} className="p-3 text-gray-600 hover:text-nova-red opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={16}/></button>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}

          {activeAdminTab === 'votes' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-2 gap-12">
               <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 h-fit">
                  <h3 className="text-xs font-black uppercase tracking-widest text-nova-violet mb-8">Candidat Vote</h3>
                  <div className="space-y-6">
                     <input value={vtName} onChange={e => setVtName(e.target.value)} placeholder="Nom Équipe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm font-bold" />
                     <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer">
                        {vtImage ? <img src={vtImage} className="w-full h-full object-cover rounded-2xl" /> : <ImageIcon className="text-gray-500" />}
                        <input type="file" className="hidden" onChange={e => handleImageUpload(e, setVtImage)} />
                     </label>
                     <Button className="w-full" onClick={handleAddVotingTeam}>Publier</Button>
                  </div>
               </div>
               <div className="space-y-4">
                  {votingTeams.map(v => (
                    <div key={v.id} className="bg-white/5 p-4 rounded-2xl flex items-center justify-between border border-white/10 group">
                       <span className="text-xs font-black uppercase">{v.name}</span>
                       <button onClick={() => deleteItem(v.id, 'tnc_voting_teams', setVotingTeams)} className="p-3 text-gray-600 hover:text-nova-red opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={16}/></button>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}

          {activeAdminTab === 'stats' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-10 rounded-[3.5rem] border border-white/10">
                     <span className="text-[10px] font-black text-nova-violet uppercase tracking-[0.4em] block mb-8">Pondération Public — Seuil 1000</span>
                     <div className="space-y-10">
                        {votingTeams.map(t => (
                          <div key={t.id} className="space-y-3">
                             <div className="flex justify-between items-end">
                                <span className="text-xs font-black uppercase">{t.name}</span>
                                <span className="text-nova-violet font-black text-xs">{(t.votes / 1000 * 30).toFixed(1)}%</span>
                             </div>
                             <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-nova-violet" style={{ width: `${Math.min(100, (t.votes / 1000) * 100)}%` }} />
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
                  <div className="bg-white/5 p-10 rounded-[3.5rem] border border-white/10">
                     <span className="text-[10px] font-black text-nova-red uppercase tracking-[0.4em] block mb-8">Pondération Gagnants — Seuil 2000</span>
                     <div className="space-y-10">
                        {votingTeams.map(t => (
                          <div key={t.id} className="space-y-3">
                             <div className="flex justify-between items-end">
                                <span className="text-xs font-black uppercase">{t.name}</span>
                                <span className="text-nova-red font-black text-xs">{(t.votes / 2000 * 40).toFixed(1)}%</span>
                             </div>
                             <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-nova-red" style={{ width: `${Math.min(100, (t.votes / 2000) * 100)}%` }} />
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Admin;
