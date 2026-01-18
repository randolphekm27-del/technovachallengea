
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Package, ShieldCheck, Trash2, Plus, History, AlertCircle, FileUp, X, Download, FileText } from 'lucide-react';
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

const Admin: React.FC = () => {
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const [file, setFile] = useState<{ name: string, data: string } | null>(null);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFile({
          name: selectedFile.name,
          data: event.target?.result as string
        });
        setType('file');
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSend = () => {
    if (!title || !content) return;
    const newBroadcast: Broadcast = {
      id: Date.now().toString(),
      title, 
      content, 
      link, 
      type: file ? 'file' : type,
      fileData: file?.data,
      fileName: file?.name,
      timestamp: new Date().toLocaleString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
    };
    const updated = [newBroadcast, ...broadcasts];
    setBroadcasts(updated);
    localStorage.setItem('tnc_broadcasts', JSON.stringify(updated));
    
    // Reset form
    setTitle(''); 
    setContent(''); 
    setLink('');
    setFile(null);
    setType('message');
    alert("Colis expédié avec succès !");
  };

  const deleteBroadcast = (id: string) => {
    if (window.confirm("Supprimer ce colis définitivement ?")) {
      const updated = broadcasts.filter(b => b.id !== id);
      setBroadcasts(updated);
      localStorage.setItem('tnc_broadcasts', JSON.stringify(updated));
    }
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
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white mb-6 outline-none focus:border-nova-violet font-bold text-center"
          />
          <Button className="w-full" onClick={handleLogin}>Déverrouiller</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-20 px-4 md:px-6 bg-[#0B0F19] text-white">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-16">
          <span className="text-nova-violet font-black tracking-widest uppercase text-[10px] block mb-4">Directoire TNC</span>
          <h1 className="editorial-title text-4xl md:text-7xl">GÉRER LES <br /><span className="text-nova-violet italic font-light">COLIS.</span></h1>
        </header>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Editor */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] sticky top-32">
               <h2 className="text-xs font-black uppercase text-nova-violet mb-8 flex items-center gap-3"><Plus size={16} /> Créer une expédition</h2>
               
               <div className="space-y-6">
                  <div className="flex gap-2 p-1 bg-white/5 rounded-xl">
                    {(['message', 'file', 'critical'] as const).map(t => (
                      <button 
                        key={t} 
                        onClick={() => setType(t)} 
                        className={`flex-1 py-3 rounded-lg text-[8px] font-black uppercase transition-all ${type === t ? 'bg-nova-violet text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                      >
                        {t === 'file' ? 'Fichier' : t}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <input 
                      value={title} 
                      onChange={e => setTitle(e.target.value)} 
                      placeholder="Objet du colis" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm font-bold" 
                    />
                    <textarea 
                      value={content} 
                      onChange={e => setContent(e.target.value)} 
                      placeholder="Instructions ou message d'accompagnement..." 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-nova-violet text-sm h-32 font-medium" 
                    />
                  </div>

                  {/* File Upload Section */}
                  <div className="relative">
                    {!file ? (
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 hover:border-nova-violet/40 transition-all">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <FileUp className="w-8 h-8 text-gray-500 mb-2" />
                          <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 text-center px-4">Joindre un document (PDF, ZIP, IMG)</p>
                        </div>
                        <input type="file" className="hidden" onChange={handleFileChange} />
                      </label>
                    ) : (
                      <div className="bg-nova-violet/10 border border-nova-violet/20 p-4 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3 overflow-hidden">
                           <FileText className="text-nova-violet flex-shrink-0" size={20} />
                           <span className="text-xs font-bold truncate max-w-[180px]">{file.name}</span>
                        </div>
                        <button onClick={() => setFile(null)} className="p-2 hover:bg-nova-violet/20 rounded-lg text-nova-violet">
                          <X size={16} />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button 
                      className="w-full" 
                      onClick={handleSend} 
                      disabled={!title || !content}
                    >
                      <Send size={16} className="mr-2" /> Expédier le colis
                    </Button>
                  </div>
               </div>
            </div>
          </div>

          {/* History */}
          <div className="lg:col-span-7">
            <h2 className="text-xs font-black uppercase text-gray-500 mb-8 flex items-center gap-3 px-4"><History size={16} /> Historique des expéditions</h2>
            <div className="space-y-6">
               {broadcasts.map(b => (
                 <motion.div 
                    layout
                    key={b.id} 
                    className={`bg-white/5 border border-white/10 p-8 rounded-[2.5rem] group relative overflow-hidden ${b.type === 'critical' ? 'border-l-4 border-l-nova-red' : b.type === 'file' ? 'border-l-4 border-l-nova-violet' : ''}`}
                 >
                    <div className="flex items-start justify-between mb-6">
                       <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${b.type === 'critical' ? 'bg-nova-red/20 text-nova-red' : b.type === 'file' ? 'bg-nova-violet/20 text-nova-violet' : 'bg-white/10 text-gray-400'}`}>
                            {b.type}
                          </span>
                          <span className="text-[9px] font-bold text-gray-600 uppercase">{b.timestamp}</span>
                       </div>
                       <button onClick={() => deleteBroadcast(b.id)} className="p-2 text-gray-600 hover:text-nova-red transition-colors opacity-0 group-hover:opacity-100 bg-white/5 rounded-lg">
                        <Trash2 size={16} />
                       </button>
                    </div>
                    <h3 className="font-black text-xl md:text-2xl uppercase mb-3 tracking-tighter leading-tight">{b.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed mb-6">{b.content}</p>
                    
                    {b.fileData && (
                      <div className="p-4 bg-white/5 rounded-2xl flex items-center justify-between border border-white/5">
                        <div className="flex items-center gap-3">
                           <FileText className="text-nova-violet" size={18} />
                           <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">{b.fileName}</span>
                        </div>
                        <a href={b.fileData} download={b.fileName} className="text-nova-violet hover:underline text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                           <Download size={14} /> Télécharger
                        </a>
                      </div>
                    )}
                 </motion.div>
               ))}
               {broadcasts.length === 0 && (
                <div className="text-center py-32 border-2 border-dashed border-white/5 rounded-[3rem]">
                  <Package size={48} className="text-white/5 mx-auto mb-6" />
                  <p className="text-gray-600 font-black uppercase text-[10px] tracking-widest">Aucun colis expédié pour le moment</p>
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
