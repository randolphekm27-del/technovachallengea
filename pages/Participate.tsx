
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Check, User, Rocket, Send, Shield, Info } from 'lucide-react';
import Button from '../components/Button';

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
      localStorage.setItem('tnc_team_name', formData.teamName || 'Innovation Team');
      localStorage.setItem('tnc_user_name', formData.name);
    }
    setStep((s) => Math.min(s + 1, 4) as Step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1) as Step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const stepsInfo = [
    { id: 1, label: 'Identité', icon: <User size={18} /> },
    { id: 2, label: 'Projet', icon: <Rocket size={18} /> },
    { id: 3, label: 'Vision', icon: <Send size={18} /> },
    { id: 4, label: 'Succès', icon: <Check size={18} /> }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-2xl">
        
        {/* Step Indicator - Mobile Optimized */}
        <div className="flex items-center justify-between mb-16 relative px-4">
          <div className="absolute top-[20px] left-0 w-full h-[2px] bg-gray-100 -z-10" />
          {stepsInfo.map((s) => (
            <div key={s.id} className="flex flex-col items-center gap-3">
              <motion.div
                animate={{
                  backgroundColor: step >= s.id ? (s.id === 4 ? '#9d0a00' : '#7C3AED') : '#FFFFFF',
                  color: step >= s.id ? '#FFFFFF' : '#D1D5DB',
                  borderColor: step >= s.id ? (s.id === 4 ? '#9d0a00' : '#7C3AED') : '#E5E7EB',
                  scale: step === s.id ? 1.15 : 1
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 shadow-sm"
              >
                {step > s.id ? <Check size={18} /> : s.icon}
              </motion.div>
              <span className={`text-[9px] font-black uppercase tracking-widest text-center ${step === s.id ? 'text-nova-black opacity-100' : 'text-gray-400 opacity-60'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            {step < 4 && (
              <div className="text-center md:text-left mb-12">
                <h1 className="editorial-title text-4xl md:text-6xl mb-4 text-nova-black">
                  {step === 1 ? 'VOTRE IDENTITÉ' : step === 2 ? 'VOTRE PROJET' : 'VOTRE VISION'}
                </h1>
                <p className="text-gray-500 font-medium text-sm">Étape {step} sur 3 pour rejoindre l'aventure Nova.</p>
              </div>
            )}

            <div className="bg-gray-50/50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm space-y-10">
              {step === 1 && (
                <>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-nova-black flex items-center gap-2">Nom Complet <Info size={12} className="text-nova-violet" /></label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jean Dupont"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-nova-black text-lg font-bold outline-none focus:border-nova-violet focus:ring-1 focus:ring-nova-violet/20 transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-nova-black">Nom de l'Équipe</label>
                    <input 
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      placeholder="Nova Alpha"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-nova-black text-lg font-bold outline-none focus:border-nova-violet focus:ring-1 focus:ring-nova-violet/20 transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-nova-black">E-mail</label>
                    <input 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="contact@exemple.bj"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-nova-black text-lg font-bold outline-none focus:border-nova-violet focus:ring-1 focus:ring-nova-violet/20 transition-all placeholder:text-gray-300"
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-nova-black">Nom du Projet</label>
                    <input 
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      placeholder="ex: SolarGrid AI"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-nova-black text-lg font-bold outline-none focus:border-nova-violet transition-all"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-nova-black">Résumé (Pitch)</label>
                    <textarea 
                      name="pitch"
                      value={formData.pitch}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre innovation..."
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-nova-black text-lg font-bold outline-none focus:border-nova-violet h-40 resize-none transition-all"
                    />
                  </div>
                </>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-nova-black">Motivation & Vision</label>
                  <textarea 
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="Pourquoi vous ?"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-nova-black text-lg font-bold outline-none focus:border-nova-violet h-56 resize-none transition-all"
                  />
                </div>
              )}

              {step === 4 && (
                <div className="text-center py-10">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-nova-red rounded-full flex items-center justify-center mx-auto mb-10 text-white shadow-xl">
                    <Check size={36} />
                  </motion.div>
                  <h1 className="editorial-title text-4xl md:text-6xl mb-6 text-nova-black">BIENVENUE <br /><span className="text-nova-red italic font-light">DANS L'ARÈNE.</span></h1>
                  <p className="text-gray-500 font-medium mb-10">Votre candidature pour <strong>{formData.teamName}</strong> a été enregistrée avec succès.</p>
                  <Button size="lg" variant="accent" className="w-full" onClick={() => navigate('/dashboard')}>Mon Dashboard</Button>
                </div>
              )}
            </div>

            {step < 4 && (
              <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-4">
                {step > 1 ? (
                  <button onClick={prevStep} className="text-nova-black/40 hover:text-nova-black font-black uppercase text-[10px] tracking-[0.3em] transition-colors py-4 px-6">
                    Retour
                  </button>
                ) : <div />}
                <Button 
                  size="lg" 
                  variant={step === 3 ? "accent" : "primary"} 
                  className="w-full md:w-auto" 
                  onClick={nextStep}
                  disabled={step === 1 ? (!formData.name || !formData.teamName || !formData.email) : step === 2 ? (!formData.project || !formData.pitch) : !formData.motivation}
                >
                  {step === 3 ? 'Terminer l\'inscription' : 'Continuer'} <ChevronRight size={18} className="ml-2" />
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Participate;
