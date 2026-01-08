
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Check, User, Rocket, Send } from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

type Step = 1 | 2 | 3 | 4;

const Participate: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    pitch: '',
    motivation: ''
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 4) as Step);
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
        
        {/* PROGRESS HEADER */}
        <div className="flex items-center justify-between mb-20 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -z-10" />
          {stepsInfo.map((s) => (
            <div key={s.id} className="flex flex-col items-center gap-4 bg-white px-4">
              <motion.div
                animate={{
                  backgroundColor: step >= s.id ? (s.id === 4 ? '#9d0a00' : '#7C3AED') : '#F3F4F6',
                  color: step >= s.id ? '#FFFFFF' : '#9CA3AF',
                  scale: step === s.id ? 1.2 : 1
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500"
              >
                {step > s.id ? <Check size={18} /> : s.icon}
              </motion.div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${step >= s.id ? (s.id === 4 ? 'text-nova-red' : 'text-nova-violet') : 'text-gray-300'}`}>
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
                <h1 className="editorial-title text-5xl md:text-7xl mb-6">REJOINDRE L'ÉLITE</h1>
                <p className="text-gray-400 font-light text-lg">Tout commence par une introduction.</p>
              </div>
              
              <GlassCard className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Nom Complet</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="ex: Jean Dupont"
                    className="w-full bg-transparent border-b border-gray-100 py-4 text-xl outline-none focus:border-nova-violet transition-colors placeholder:text-gray-100"
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
                    className="w-full bg-transparent border-b border-gray-100 py-4 text-xl outline-none focus:border-nova-violet transition-colors placeholder:text-gray-100"
                  />
                </div>
              </GlassCard>

              <div className="flex justify-end">
                <Button onClick={nextStep} disabled={!formData.name || !formData.email}>
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
                <h1 className="editorial-title text-5xl md:text-7xl mb-6">VOTRE OEUVRE</h1>
                <p className="text-gray-400 font-light text-lg">Définissez le futur que vous construisez.</p>
              </div>
              
              <GlassCard className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Nom du Projet</label>
                  <input 
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    placeholder="ex: NovaPay"
                    className="w-full bg-transparent border-b border-gray-100 py-4 text-xl outline-none focus:border-nova-violet transition-colors placeholder:text-gray-100"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Pitch en une phrase</label>
                  <textarea 
                    name="pitch"
                    value={formData.pitch}
                    onChange={handleInputChange}
                    placeholder="Comment allez-vous changer le monde ?"
                    className="w-full bg-transparent border-b border-gray-100 py-4 text-xl outline-none focus:border-nova-violet transition-colors placeholder:text-gray-100 resize-none h-32"
                  />
                </div>
              </GlassCard>

              <div className="flex justify-between">
                <button onClick={prevStep} className="flex items-center gap-2 text-gray-400 hover:text-nova-black transition-colors font-bold uppercase text-[10px] tracking-widest">
                  <ChevronLeft size={16} /> Retour
                </button>
                <Button onClick={nextStep} disabled={!formData.project || !formData.pitch}>
                  Valider la vision <ChevronRight size={16} className="ml-2" />
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
                <h1 className="editorial-title text-5xl md:text-7xl mb-6">L'INTENTION</h1>
                <p className="text-gray-400 font-light text-lg">Pourquoi maintenant ? Pourquoi vous ?</p>
              </div>
              
              <GlassCard className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Votre motivation principale</label>
                  <textarea 
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre ambition..."
                    className="w-full bg-transparent border-b border-gray-100 py-4 text-xl outline-none focus:border-nova-violet transition-all h-48"
                  />
                </div>
              </GlassCard>

              <div className="flex justify-between">
                <button onClick={prevStep} className="flex items-center gap-2 text-gray-400 hover:text-nova-black transition-colors font-bold uppercase text-[10px] tracking-widest">
                  <ChevronLeft size={16} /> Retour
                </button>
                <Button onClick={nextStep} variant="accent" disabled={!formData.motivation} size="lg">
                  Soumettre ma candidature
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
                transition={{ type: 'spring', damping: 12, delay: 0.2 }}
                className="w-32 h-32 bg-nova-red rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl"
              >
                <Check size={64} className="text-white" />
              </motion.div>
              <h1 className="editorial-title text-6xl md:text-8xl mb-8">INSCRIPTION<br/><span className="text-nova-red">TERMINÉE.</span></h1>
              <p className="text-gray-500 text-xl font-light mb-16 max-w-xl mx-auto">
                Votre dossier a été scellé. Nos experts analyseront votre vision et vous recontacteront d'ici 14 jours.
              </p>
              <Button onClick={() => navigate('/')}>Retour à l'accueil</Button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Participate;
