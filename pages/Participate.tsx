
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Check, User, Rocket, Send, Shield } from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

type Step = 1 | 2 | 3 | 4;

const Participate: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    name: '',
    teamName: '',
    email: '',
    project: '',
    pitch: '',
    motivation: ''
  });

  const nextStep = () => {
    if (step === 3) {
      // Sauvegarder les infos pour le Dashboard
      localStorage.setItem('tnc_team_name', formData.teamName || 'Innovation Team');
      localStorage.setItem('tnc_user_name', formData.name);
    }
    setStep((s) => Math.min(s + 1, 4) as Step);
  };
  
  const prevStep = () => setStep((s) => Math.max(s - 1, 1) as Step);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const stepsInfo = [
    { id: 1, label: 'Identité', icon: <User size={16} /> },
    { id: 2, label: 'Projet', icon: <Rocket size={16} /> },
    { id: 3, label: 'Vision', icon: <Send size={16} /> },
    { id: 4, label: 'Succès', icon: <Check size={16} /> }
  ];

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-3xl">
        
        <div className="flex items-center justify-between mb-20 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -z-10" />
          {stepsInfo.map((s) => (
            <div key={s.id} className="flex flex-col items-center gap-4 bg-white px-2 md:px-4">
              <motion.div
                animate={{
                  backgroundColor: step >= s.id ? (s.id === 4 ? '#9d0a00' : '#7C3AED') : '#F3F4F6',
                  color: step >= s.id ? '#FFFFFF' : '#9CA3AF',
                  scale: step === s.id ? 1.1 : 1
                }}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors duration-500"
              >
                {step > s.id ? <Check size={16} /> : s.icon}
              </motion.div>
              <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-widest ${step >= s.id ? (s.id === 4 ? 'text-nova-red' : 'text-nova-violet') : 'text-gray-300'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h1 className="editorial-title text-4xl md:text-7xl mb-6">REJOINDRE L'ÉLITE</h1>
                <p className="text-gray-400 font-light text-base md:text-lg">Créez votre profil de compétiteur.</p>
              </div>
              
              <GlassCard className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Votre Nom Complet</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="ex: Jean Dupont"
                    className="w-full bg-transparent border-b border-gray-200 py-4 text-lg md:text-xl text-nova-black font-medium outline-none focus:border-nova-violet transition-colors placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
                    <Shield size={12} className="text-nova-violet" /> Nom de votre Équipe / Binôme
                  </label>
                  <input 
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    placeholder="ex: Nova Alpha"
                    className="w-full bg-transparent border-b border-gray-200 py-4 text-lg md:text-xl text-nova-black font-medium outline-none focus:border-nova-violet transition-colors placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Email Institutionnel</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="jean@startup.bj"
                    className="w-full bg-transparent border-b border-gray-200 py-4 text-lg md:text-xl text-nova-black font-medium outline-none focus:border-nova-violet transition-colors placeholder:text-gray-300"
                  />
                </div>
              </GlassCard>

              <div className="flex justify-end">
                <Button onClick={nextStep} disabled={!formData.name || !formData.teamName || !formData.email}>
                  Continuer <ChevronRight size={16} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h1 className="editorial-title text-4xl md:text-7xl mb-6">VOTRE OEUVRE</h1>
                <p className="text-gray-400 font-light text-lg">Le projet qui va bousculer les codes.</p>
              </div>
              
              <GlassCard className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Nom du Projet</label>
                  <input 
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    placeholder="ex: SolarGrid AI"
                    className="w-full bg-transparent border-b border-gray-200 py-4 text-lg md:text-xl text-nova-black font-medium outline-none focus:border-nova-violet transition-colors placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Résumé technologique</label>
                  <textarea 
                    name="pitch"
                    value={formData.pitch}
                    onChange={handleInputChange}
                    placeholder="En quoi est-ce innovant ?"
                    className="w-full bg-transparent border-b border-gray-200 py-4 text-lg md:text-xl text-nova-black font-medium outline-none focus:border-nova-violet transition-colors h-32 placeholder:text-gray-300"
                  />
                </div>
              </GlassCard>

              <div className="flex justify-between">
                <button onClick={prevStep} className="text-gray-400 hover:text-nova-black font-bold uppercase text-[10px] tracking-widest">
                  Retour
                </button>
                <Button onClick={nextStep} disabled={!formData.project || !formData.pitch}>
                  Valider <ChevronRight size={16} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h1 className="editorial-title text-4xl md:text-7xl mb-6">L'INTENTION</h1>
                <p className="text-gray-400 font-light text-lg">Pourquoi êtes-vous les meilleurs ?</p>
              </div>
              
              <GlassCard className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Votre vision</label>
                  <textarea 
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre ambition..."
                    className="w-full bg-transparent border-b border-gray-200 py-4 text-lg md:text-xl text-nova-black font-medium outline-none focus:border-nova-violet h-48 placeholder:text-gray-300"
                  />
                </div>
              </GlassCard>

              <div className="flex justify-between">
                <button onClick={prevStep} className="text-gray-400 hover:text-nova-black font-bold uppercase text-[10px] tracking-widest">
                  Retour
                </button>
                <Button onClick={nextStep} variant="accent" disabled={!formData.motivation}>
                  Soumettre
                </Button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-24 h-24 bg-nova-red rounded-full flex items-center justify-center mx-auto mb-12"
              >
                <Check size={48} className="text-white" />
              </motion.div>
              <h1 className="editorial-title text-5xl md:text-7xl mb-8">DOSSIER<br/><span className="text-nova-red">ENREGISTRÉ.</span></h1>
              <p className="text-gray-500 text-lg font-light mb-16 max-w-xl mx-auto">
                Félicitations <strong>{formData.teamName}</strong>. Bienvenue dans l'arène.
              </p>
              <Button variant="accent" size="lg" onClick={() => navigate('/dashboard')}>Ouvrir mon Dashboard</Button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Participate;
