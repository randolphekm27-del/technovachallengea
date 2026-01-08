
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Package, ShieldCheck, 
  Trash2, Bell, FileText, 
  ExternalLink, Plus, History,
  AlertCircle
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

const Admin: React.FC = () => {
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const [type, setType] = useState<'message' | 'file' | 'critical'>('message');
  const [isLogged, setIsLogged] = useState(false);
  const [pass, setPass] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('tnc_broadcasts');
    if (saved) setBroadcasts(JSON.parse(saved));
  }, []);

  const handleLogin = () => {
    if (pass === 'nova2026') setIsLogged(true);
  };

  const handleSend = () => {
    if (!title || !content) return;
    
    const newBroadcast: Broadcast = {
      id: Date.now().toString(),
      title,
      content,
      link,
      type,
      timestamp: new Date().toLocaleString('fr-FR', {
        day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
      })
    };

    const updated = [newBroadcast, ...broadcasts];
    setBroadcasts(updated);
    localStorage.setItem('tnc_broadcasts', JSON.stringify(updated));
    
    // Reset form
    setTitle('');
    setContent('');
    setLink('');
    
    // Simulate notification sound/effect
    alert("Colis expédié avec succès vers tous les binômes !");
  };

  const deleteBroadcast = (id: string) => {
    const updated = broadcasts.filter(b => b.id !== id);
    setBroadcasts(updated);
    localStorage.setItem('tnc_broadcasts', JSON.stringify(updated));
  };

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-nova-black flex items-center justify-center p-6">
        <GlassCard className="max-w-md w-full p-12 bg-white/5 border-white/10 text-center">
          <ShieldCheck size={48} className="text-nova-violet mx-auto mb-8" />
          <h1 className="text-2xl font-black text-white uppercase tracking-tighter mb-8">Interface Critique</h1>
          <input 
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Clé d'accès Admin"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white mb-6 outline-none focus:border-nova-violet transition-colors"
          />
          <Button className="w-full" onClick={handleLogin}>Déverrouiller</Button>
          <p className="mt-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest">Usage Interne Uniquement</p>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-[#0B0F19] text-white">
      <div className="container mx-auto max-w-6xl">
        <header className="flex justify-between items-end mb-20">
          <div>
            <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-4">Command Center</span>
            <h1 className="editorial-title text-5xl md:text-7xl">GESTION DES <br/><span className="text-nova-violet italic font-light">COLIS.</span></h1>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/10">
            <div className="text-right">
              <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Admin Root</div>
              <div className="text-xs font-bold text-white uppercase">Directoire TNC</div>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* FORMULAIRE D'EXPÉDITION */}
          <div className="lg:col-span-5">
            <GlassCard className="p-10 bg-white/5 border-white/10 sticky top-40">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-nova-violet mb-10 flex items-center gap-3">
                <Plus size={16} /> Nouveau Colis
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-gray-500">Nature du Colis</label>
                  <div className="flex gap-2">
                    {(['message', 'file', 'critical'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setType(t)}
                        className={`flex-1 py-3 rounded-xl text-[8px] font-black uppercase tracking-widest border transition-all ${type === t ? 'bg-nova-violet border-nova-violet text-white' : 'bg-transparent border-white/10 text-gray-500 hover:border-white/20'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-gray-500">Titre du message</label>
                  <input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm"
                    placeholder="ex: Ouverture du portail de dépôt"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-gray-500">Corps du colis (Instructions)</label>
                  <textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm h-32"
                    placeholder="Détails à envoyer aux binômes..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-gray-500">Lien externe (Facultatif)</label>
                  <input 
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm"
                    placeholder="https://..."
                  />
                </div>
                <Button className="w-full mt-4" onClick={handleSend} disabled={!title || !content}>
                  Expédier le Colis <Send size={14} className="ml-2" />
                </Button>
              </div>
            </GlassCard>
          </div>

          {/* HISTORIQUE DES EXPÉDITIONS */}
          <div className="lg:col-span-7">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-10 flex items-center gap-3">
              <History size={16} /> Historique des Envois
            </h2>
            <div className="space-y-6">
              <AnimatePresence>
                {broadcasts.map((b) => (
                  <motion.div
                    key={b.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl ${b.type === 'critical' ? 'bg-nova-red/20 text-nova-red' : 'bg-nova-violet/20 text-nova-violet'}`}>
                          {b.type === 'file' ? <FileText size={20} /> : b.type === 'critical' ? <AlertCircle size={20} /> : <Bell size={20} />}
                        </div>
                        <div>
                          <h3 className="text-lg font-black uppercase tracking-tighter leading-none">{b.title}</h3>
                          <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">{b.timestamp}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => deleteBroadcast(b.id)}
                        className="p-3 text-gray-500 hover:text-nova-red transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">{b.content}</p>
                    {b.link && (
                      <div className="flex items-center gap-2 text-nova-violet text-[10px] font-black uppercase tracking-widest">
                        <ExternalLink size={12} /> {b.link}
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              {broadcasts.length === 0 && (
                <div className="text-center py-20 bg-white/5 border border-dashed border-white/10 rounded-[3rem]">
                   <Package size={40} className="mx-auto text-gray-700 mb-4" />
                   <p className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Aucun colis expédié pour le moment</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
