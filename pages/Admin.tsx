
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Package, ShieldCheck, Trash2, Plus, History, AlertCircle } from 'lucide-react';
import Button from '../components/Button';

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
      title, content, link, type,
      timestamp: new Date().toLocaleString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
    };
    const updated = [newBroadcast, ...broadcasts];
    setBroadcasts(updated);
    localStorage.setItem('tnc_broadcasts', JSON.stringify(updated));
    setTitle(''); setContent(''); setLink('');
    alert("Colis expédié !");
  };

  const deleteBroadcast = (id: string) => {
    const updated = broadcasts.filter(b => b.id !== id);
    setBroadcasts(updated);
    localStorage.setItem('tnc_broadcasts', JSON.stringify(updated));
  };

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-nova-black flex items-center justify-center p-6">
        <div className="max-w-md w-full p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-center backdrop-blur-xl">
          <ShieldCheck size={48} className="text-nova-violet mx-auto mb-8" />
          <h1 className="text-2xl font-black text-white uppercase mb-8">Accès Restreint</h1>
          <input 
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Clé d'administration"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white mb-6 outline-none focus:border-nova-violet font-bold"
          />
          <Button className="w-full" onClick={handleLogin}>Déverrouiller</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 bg-[#0B0F19] text-white">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-16">
          <span className="text-nova-violet font-black tracking-widest uppercase text-[10px] block mb-4">Directoire TNC</span>
          <h1 className="editorial-title text-4xl md:text-7xl">ENVOI DE <br /><span className="text-nova-violet italic font-light">COLIS.</span></h1>
        </header>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Editor */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] sticky top-32">
               <h2 className="text-xs font-black uppercase text-nova-violet mb-8 flex items-center gap-3"><Plus size={16} /> Créer un colis</h2>
               <div className="space-y-6">
                  <div className="flex gap-2">
                    {['message', 'critical'].map(t => (
                      <button key={t} onClick={() => setType(t as any)} className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase border transition-all ${type === t ? 'bg-nova-violet border-nova-violet text-white' : 'border-white/10 text-gray-500'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                  <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Titre du colis" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm font-bold" />
                  <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Instructions détaillées..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm h-32 font-medium" />
                  <Button className="w-full" onClick={handleSend} disabled={!title || !content}>Expédier</Button>
               </div>
            </div>
          </div>

          {/* History */}
          <div className="lg:col-span-7">
            <h2 className="text-xs font-black uppercase text-gray-500 mb-8 flex items-center gap-3"><History size={16} /> Historique</h2>
            <div className="space-y-6">
               {broadcasts.map(b => (
                 <div key={b.id} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] group relative">
                    <div className="flex items-start justify-between mb-4">
                       <span className="text-[9px] font-bold text-gray-500 uppercase">{b.timestamp}</span>
                       <button onClick={() => deleteBroadcast(b.id)} className="text-gray-600 hover:text-nova-red transition-colors opacity-0 group-hover:opacity-100"><Trash2 size={16} /></button>
                    </div>
                    <h3 className="font-black text-lg uppercase mb-2 tracking-tighter">{b.title}</h3>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed">{b.content}</p>
                 </div>
               ))}
               {broadcasts.length === 0 && <div className="text-center py-20 text-gray-600 font-bold uppercase text-[10px]">Aucun envoi</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
