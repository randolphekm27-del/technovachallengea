
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Check, User, Rocket, Send, Key, Mail, Users, Info, LogIn } from 'lucide-react';
import Button from '../components/Button';

type Step = 1 | 2 | 3 | 4;

const Participate: React.FC = () => {
  const navigate = useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [generatedCode, setGeneratedCode] = useState('');
  
  const [formData, setFormData] = useState({
    teamName: '',
    m1Name: '',
    m1Email: '',
    m2Name: '',
    m2Email: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    code: ''
  });

  const generateCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = 'NOVA-';
    for (let i = 0; i < 4; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleRegister = () => {
    const code = generateCode();
    setGeneratedCode(code);
    
    // Sauvegarde simulée
    const teamRecord = {
      ...formData,
      code,
      status: 'pending'
    };
    
    // On enregistre les deux emails pour permettre la connexion des deux membres
    localStorage.setItem(`tnc_auth_${formData.m1Email.toLowerCase()}`, JSON.stringify(teamRecord));
    localStorage.setItem(`tnc_auth_${formData.m2Email.toLowerCase()}`, JSON.stringify(teamRecord));
    
    // Session active
    localStorage.setItem('tnc_user_email', formData.m1Email);
    localStorage.setItem('tnc_user_name', formData.m1Name);
    localStorage.setItem('tnc_team_name', formData.teamName);
    
    setStep(4);
  };

  const handleLogin = () => {
    const recordStr = localStorage.getItem(`tnc_auth_${loginData.email.toLowerCase()}`);
    if (recordStr) {
      const record = JSON.parse(recordStr);
      if (record.code === loginData.code.toUpperCase()) {
        localStorage.setItem('tnc_user_email', loginData.email);
        localStorage.setItem('tnc_user_name', loginData.email === record.m1Email ? record.m1Name : record.m2Name);
        localStorage.setItem('tnc_team_name', record.teamName);
        navigate('/dashboard');
        return;
      }
    }
    alert("Identifiants invalides. Vérifiez votre email et votre code NOVA.");
  };

  const nextStep = () => {
    if (step === 3) {
      handleRegister();
    } else {
      setStep((s) => Math.min(s + 1, 4) as Step);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stepsInfo = [
    { id: 1, label: 'Équipe', icon: <Users size={18} /> },
    { id: 2, label: 'Membre 1', icon: <User size={18} /> },
    { id: 3, label: 'Membre 2', icon: <User size={18} /> },
    { id: 4, label: 'Code', icon: <Key size={18} /> }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-2xl">
        
        {/* Toggle Mode */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-gray-100 rounded-full">
            <button 
              onClick={() => { setIsLoginMode(false); setStep(1); }}
              className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${!isLoginMode ? 'bg-white shadow-sm text-nova-black' : 'text-gray-400'}`}
            >
              S'inscrire
            </button>
            <button 
              onClick={() => setIsLoginMode(true)}
              className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isLoginMode ? 'bg-white shadow-sm text-nova-black' : 'text-gray-400'}`}
            >
              Se connecter
            </button>
          </div>
        </div>

        {!isLoginMode ? (
          <>
            {/* Step Indicator */}
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
                    {step > s.id && s.id < 4 ? <Check size={18} /> : s.icon}
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
                className="space-y-8"
              >
                {step < 4 && (
                  <div className="text-center md:text-left mb-8">
                    <h1 className="editorial-title text-4xl md:text-6xl mb-4 text-nova-black">
                      {step === 1 ? 'VOTRE ÉQUIPE' : step === 2 ? 'PREMIER MEMBRE' : 'SECOND MEMBRE'}
                    </h1>
                    <p className="text-gray-500 font-medium text-sm">Inscription du binôme — Étape {step} sur 3</p>
                  </div>
                )}

                <div className="bg-gray-50/50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm space-y-8">
                  {step === 1 && (
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-nova-black flex items-center gap-2">NOM DE L'ÉQUIPE <Info size={12} className="text-nova-violet" /></label>
                      <input 
                        value={formData.teamName}
                        onChange={(e) => setFormData({...formData, teamName: e.target.value})}
                        placeholder="Ex: Nova Alpha"
                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-nova-black text-lg font-bold outline-none focus:border-nova-violet transition-all"
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-nova-black">Nom Complet (M1)</label>
                        <input 
                          value={formData.m1Name}
                          onChange={(e) => setFormData({...formData, m1Name: e.target.value})}
                          placeholder="Jean Dupont"
                          className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-nova-black text-lg font-bold outline-none focus:border-nova-violet transition-all"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-nova-black">Email (M1)</label>
                        <input 
                          type="email"
                          value={formData.m1Email}
                          onChange={(e) => setFormData({...formData, m1Email: e.target.value})}
                          placeholder="m1@exemple.bj"
                          className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-nova-black text-lg font-bold outline-none focus:border-nova-violet transition-all"
                        />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-nova-black">Nom Complet (M2)</label>
                        <input 
                          value={formData.m2Name}
                          onChange={(e) => setFormData({...formData, m2Name: e.target.value})}
                          placeholder="Marie Martin"
                          className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-nova-black text-lg font-bold outline-none focus:border-nova-violet transition-all"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-nova-black">Email (M2)</label>
                        <input 
                          type="email"
                          value={formData.m2Email}
                          onChange={(e) => setFormData({...formData, m2Email: e.target.value})}
                          placeholder="m2@exemple.bj"
                          className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-nova-black text-lg font-bold outline-none focus:border-nova-violet transition-all"
                        />
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="text-center py-6">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-xl">
                        <Check size={36} />
                      </div>
                      <h1 className="editorial-title text-4xl md:text-6xl mb-6 text-nova-black">FÉLICITATIONS.</h1>
                      <p className="text-gray-500 font-medium mb-10">Votre binôme est inscrit. Voici votre code d'accès unique à partager avec votre partenaire :</p>
                      
                      <div className="bg-nova-black text-white p-8 rounded-3xl mb-12 relative overflow-hidden group">
                        <div className="text-5xl font-black tracking-[0.2em] relative z-10">{generatedCode}</div>
                        <div className="absolute inset-0 bg-gradient-to-r from-nova-violet/20 to-transparent opacity-50" />
                      </div>

                      <Button size="lg" variant="accent" className="w-full" onClick={() => navigate('/dashboard')}>Accéder au Dashboard</Button>
                    </div>
                  )}
                </div>

                {step < 4 && (
                  <div className="flex justify-between items-center pt-4">
                    {step > 1 ? (
                      <button onClick={() => setStep((s) => (s - 1) as Step)} className="text-nova-black/40 hover:text-nova-black font-black uppercase text-[10px] tracking-widest px-6 py-4">Retour</button>
                    ) : <div />}
                    <Button 
                      size="lg" 
                      onClick={nextStep}
                      disabled={
                        (step === 1 && !formData.teamName) ||
                        (step === 2 && (!formData.m1Name || !formData.m1Email)) ||
                        (step === 3 && (!formData.m2Name || !formData.m2Email))
                      }
                    >
                      {step === 3 ? 'Finaliser' : 'Suivant'} <ChevronRight size={18} className="ml-2" />
                    </Button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h1 className="editorial-title text-5xl md:text-7xl mb-4 text-nova-black">CONNEXION.</h1>
              <p className="text-gray-500 font-medium">Accédez à votre espace binôme</p>
            </div>

            <div className="bg-gray-50/50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-nova-black flex items-center gap-2">EMAIL INSCRIT <Mail size={12} /></label>
                <input 
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  placeholder="votre@email.bj"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-nova-black text-lg font-bold outline-none focus:border-nova-violet transition-all"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-nova-black flex items-center gap-2">CODE NOVA <Key size={12} /></label>
                <input 
                  type="text"
                  value={loginData.code}
                  onChange={(e) => setLoginData({...loginData, code: e.target.value.toUpperCase()})}
                  placeholder="NOVA-XXXX"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-nova-black text-lg font-bold outline-none focus:border-nova-violet transition-all tracking-[0.2em]"
                />
              </div>
              <Button size="lg" variant="primary" className="w-full" onClick={handleLogin}>
                Se connecter <LogIn size={18} className="ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Participate;
