
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Package, ShieldCheck, Trash2, Plus, History, AlertCircle, FileUp, X, Download, FileText, Activity, Image as ImageIcon, Settings, Eye, EyeOff, Layers, Users, Trophy, BarChart3, TrendingUp } from 'lucide-react';
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

  // States Gestion
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [votingTeams, setVotingTeams] = useState<VotingTeam[]>([]);

  // Form States Colis
  const [cTitle, setCTitle] = useState('');
  const [cContent, setCContent] = useState('');
  const [cFile, setCFile] = useState<{ name: string, data: string } | null>(null);
  const [cType, setCType] = useState<'message' | 'file' | 'critical'>('message');

  // Form States Partenaires
  const [pName, setPName] = useState('');
  const [pLogo, setPLogo] = useState<string | null>(null);
  const [pCat, setPCat] = useState<'enterprise' | 'institution' | 'media'>('enterprise');

  // Form States Votes
  const [vtName, setVtName] = useState('');
  const [vtMembers, setVtMembers] = useState('');
  const [vtImage, setVtImage] = useState<string | null>(null);

  useEffect(() => {
    const config = JSON.parse(localStorage.getItem('tnc_site_config') || '{"hiddenPages":["/vote", "/vote-gagnants"], "isReorganized":false}');
    setHiddenPages(config.hiddenPages || ["/vote", "/vote-gagnants"]);
    setIsReorganized(config.isReorganized || false);

    setBroadcasts(JSON.parse(localStorage.getItem('tnc_broadcasts') || '[]'));
    setPartners(JSON.parse(localStorage.getItem('tnc_partners') || '[]'));
    setVotingTeams(JSON.parse(localStorage.getItem('tnc_voting_teams') || '[]'));
  }, []);

  const updateConfig = (newHidden: string[], newReorg: boolean) => {
    const config = { hiddenPages: newHidden, isReorganized: newReorg };
    setHiddenPages(newHidden);
    setIsReorganized(newReorg);
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
    const newB: Broadcast = {
      id: Date.now().toString(),
      title: cTitle,
      content: cContent,
      type: cFile ? 'file' : cType,
      fileData: cFile?.data,
      fileName: cFile?.name,
      timestamp: new Date().toISOString()
    };
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
    alert("Binôme ajouté au scrutin !");
  };

  const deleteItem = (id: string, key: string, stateSetter: any) => {
    if (window.confirm("Confirmer la suppression définitive ?")) {
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
          <h1 className="text-2xl font-black text-white uppercase mb-8">Espace Administration</h1>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Clé d'accès" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white mb-6 outline-none focus:border-nova-violet font-bold text-center" />
          <Button className="w-full" onClick={() => pass === 'nova2026' && setIsLogged(true)}>Se connecter</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-20 px-4 md:px-6 bg-[#0B0F19] text-white">
      <div className="container mx-auto max-w-7xl">
        <header className="mb-16 flex flex-col xl:flex-row xl:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div>
            <span className="text-nova-violet font-black tracking-widest uppercase text-[10px] block mb-4 tracking-[0.6em]">Management System v3.0</span>
            <h1 className="editorial-title text-4xl md:text-7xl">TABLEAU DE <br /><span className="text-nova-violet italic font-light">BORD MASTER.</span></h1>
          </div>
          <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-3xl border border-white/10">
            {[
              { id: 'colis', label: 'Colis', icon: <Package size={14}/> },
              { id: 'partners', label: 'Partenaires', icon: <Users size={14}/> },
              { id: 'votes', label: 'Gestion Votes', icon: <Trophy size={14}/> },
              { id: 'stats', label: 'Stats & Limites', icon: <BarChart3 size={14}/> },
              { id: 'site', label: 'Configuration', icon: <Settings size={14}/> },
            ].map(tab => (
              <button key={tab.id} onClick={() => setActiveAdminTab(tab.id as any)} className={`px-6 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeAdminTab === tab.id ? 'bg-nova-violet text-white shadow-xl shadow-nova-violet/20' : 'text-gray-500 hover:text-white'}`}>
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </header>

        <AnimatePresence mode="wait">
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
                     <input value={cTitle} onChange={e => setCTitle(e.target.value)} placeholder="Objet de l'expédition" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm font-bold" />
                     <textarea value={cContent} onChange={e => setCContent(e.target.value)} placeholder="Contenu informatif..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm h-32" />
                     <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 transition-all">
                        {cFile ? <div className="text-nova-violet text-xs font-bold">{cFile.name}</div> : <div className="text-center"><FileUp className="mx-auto mb-2 text-gray-500" /> <span className="text-[10px] uppercase font-black text-gray-500">Joindre Document</span></div>}
                        <input type="file" className="hidden" onChange={(e) => {
                           const file = e.target.files?.[0];
                           if(file) {
                             const reader = new FileReader();
                             reader.onload = (ev) => setCFile({ name: file.name, data: ev.target?.result as string });
                             reader.readAsDataURL(file);
                           }
                        }} />
                     </label>
                     <Button className="w-full" onClick={handleSendColis} disabled={!cTitle || !cContent}>Expédier aux Binômes</Button>
                  </div>
               </div>
               <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6">Derniers Envois</h3>
                  {broadcasts.map(b => (
                    <div key={b.id} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center justify-between group">
                       <div className="flex flex-col">
                          <span className="text-xs font-black uppercase">{b.title}</span>
                          <span className="text-[9px] text-gray-500 uppercase">{new Date(b.timestamp).toLocaleDateString()}</span>
                       </div>
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
                     <input value={pName} onChange={e => setPName(e.target.value)} placeholder="Nom institutionnel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm font-bold" />
                     <select value={pCat} onChange={e => setPCat(e.target.value as any)} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm font-bold text-white">
                        <option value="enterprise" className="bg-nova-black">Entreprise</option>
                        <option value="institution" className="bg-nova-black">Institution / École</option>
                        <option value="media" className="bg-nova-black">Média / Presse</option>
                     </select>
                     <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 transition-all">
                        {pLogo ? <img src={pLogo} className="h-20 object-contain" /> : <div className="text-center"><ImageIcon className="mx-auto mb-2 text-gray-500" /> <span className="text-[10px] uppercase font-black text-gray-500">Logo HD</span></div>}
                        <input type="file" className="hidden" accept="image/*" onChange={e => handleImageUpload(e, setPLogo)} />
                     </label>
                     <Button className="w-full" onClick={handleAddPartner} disabled={!pName || !pLogo}>Ajouter au Réseau</Button>
                  </div>
               </div>
               <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6">Membres Dynamiques</h3>
                  {partners.map(p => (
                    <div key={p.id} className="bg-white/5 p-4 rounded-2xl flex items-center justify-between border border-white/10 group">
                       <div className="flex items-center gap-4">
                          <img src={p.logo} className="w-12 h-12 object-contain bg-white rounded-lg p-2" />
                          <span className="text-xs font-black uppercase">{p.name}</span>
                       </div>
                       <button onClick={() => deleteItem(p.id, 'tnc_partners', setPartners)} className="p-3 text-gray-600 hover:text-nova-red opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={16}/></button>
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
                     <input value={vtMembers} onChange={e => setVtMembers(e.target.value)} placeholder="Membres du binôme" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm font-bold" />
                     <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 transition-all overflow-hidden">
                        {vtImage ? <img src={vtImage} className="w-full h-full object-cover" /> : <div className="text-center"><ImageIcon className="mx-auto mb-2 text-gray-500" /> <span className="text-[10px] uppercase font-black text-gray-500">Photo Officielle</span></div>}
                        <input type="file" className="hidden" accept="image/*" onChange={e => handleImageUpload(e, setVtImage)} />
                     </label>
                     <Button className="w-full" onClick={handleAddVotingTeam} disabled={!vtName || !vtImage}>Publier au Scrutin</Button>
                  </div>
               </div>
               <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6">Candidats au Vote</h3>
                  {votingTeams.map(v => (
                    <div key={v.id} className="bg-white/5 p-4 rounded-2xl flex items-center justify-between border border-white/10 group">
                       <div className="flex items-center gap-4">
                          <img src={v.image} className="w-12 h-12 object-cover rounded-lg" />
                          <div className="flex flex-col">
                             <span className="text-xs font-black uppercase">{v.name}</span>
                             <span className="text-[8px] text-gray-500 uppercase font-black">{v.votes} Votes</span>
                          </div>
                       </div>
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
                     <span className="text-[10px] font-black text-nova-violet uppercase tracking-[0.4em] block mb-8">Pondération Public (30%) — Seuil 1000</span>
                     <div className="space-y-10">
                        {votingTeams.map(t => (
                          <div key={t.id} className="space-y-3">
                             <div className="flex justify-between items-end">
                                <span className="text-xs font-black uppercase">{t.name}</span>
                                <span className="text-nova-violet font-black text-xs">{(t.votes / 1000 * 30).toFixed(1)}%</span>
                             </div>
                             <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(100, (t.votes / 1000) * 100)}%` }} className="h-full bg-nova-violet" />
                             </div>
                             <div className="flex justify-between text-[8px] font-bold text-gray-500 uppercase tracking-widest">
                                <span>{t.votes} Votes enregistrés</span>
                                <span>{Math.min(100, (t.votes / 1000) * 100).toFixed(0)}% de l'objectif</span>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
                  <div className="bg-white/5 p-10 rounded-[3.5rem] border border-white/10">
                     <span className="text-[10px] font-black text-nova-red uppercase tracking-[0.4em] block mb-8">Pondération Gagnants (40%) — Seuil 2000</span>
                     <div className="space-y-10">
                        {votingTeams.map(t => (
                          <div key={t.id} className="space-y-3">
                             <div className="flex justify-between items-end">
                                <span className="text-xs font-black uppercase">{t.name}</span>
                                <span className="text-nova-red font-black text-xs">{(t.votes / 2000 * 40).toFixed(1)}%</span>
                             </div>
                             <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(100, (t.votes / 2000) * 100)}%` }} className="h-full bg-nova-red" />
                             </div>
                             <div className="flex justify-between text-[8px] font-bold text-gray-500 uppercase tracking-widest">
                                <span>{t.votes} / 2000 (Gagnants)</span>
                                <span>{Math.min(100, (t.votes / 2000) * 100).toFixed(0)}% Atteint</span>
                             </div>
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
                  <h3 className="text-xl font-black uppercase mb-8 flex items-center gap-3"><Eye size={20} /> Visibilité des Pages</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Vote du Public (Initial)', path: '/vote' },
                      { name: 'Vote des Gagnants (Final)', path: '/vote-gagnants' },
                      { name: 'Déroulement 2026', path: '/deroulement' },
                      { name: 'Live Étapes', path: '/etapes-en-cours' },
                      { name: 'Lauréats 2025', path: '/laureats-2025' },
                      { name: 'Partenaires', path: '/partenaires' },
                    ].map(page => (
                      <div key={page.path} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all">
                         <span className="text-[10px] font-black uppercase tracking-widest">{page.name}</span>
                         <button onClick={() => {
                            const newHidden = hiddenPages.includes(page.path) ? hiddenPages.filter(p => p !== page.path) : [...hiddenPages, page.path];
                            updateConfig(newHidden, isReorganized);
                         }} className={`p-2 rounded-xl transition-all ${hiddenPages.includes(page.path) ? 'bg-nova-red text-white' : 'bg-green-500/20 text-green-500'}`}>
                            {hiddenPages.includes(page.path) ? <EyeOff size={16} /> : <Eye size={16} />}
                         </button>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem]">
                  <h3 className="text-xl font-black uppercase mb-8 flex items-center gap-3"><Layers size={20} /> Menu Archives</h3>
                  <div className="p-10 bg-nova-violet/10 border border-nova-violet/20 rounded-[2rem] text-center">
                      <p className="text-xs text-gray-400 mb-8 italic">Le mode "Réorganiser" regroupe Lauréats, Galerie et Équipe sous le bouton unique "Rétrospectives".</p>
                      <button onClick={() => updateConfig(hiddenPages, !isReorganized)} className={`px-10 py-5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${isReorganized ? 'bg-nova-violet text-white shadow-2xl' : 'border border-white/10 text-gray-500 hover:text-white'}`}>
                         {isReorganized ? 'Désactiver Réorganisation' : 'Activer Réorganisation'}
                      </button>
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
