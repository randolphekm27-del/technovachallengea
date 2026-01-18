
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, CheckCircle2, Clock, Sparkles, Maximize2, X, ExternalLink, Trophy, Facebook, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Composant de visionneuse d'image (Lightbox)
const Lightbox: React.FC<{ src: string | null, onClose: () => void }> = ({ src, onClose }) => {
  if (!src) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
        onClick={onClose}
      >
        <motion.button 
          className="absolute top-8 right-8 text-white hover:text-nova-red transition-colors z-[10000]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => { e.stopPropagation(); onClose(); }}
        >
          <X size={40} />
        </motion.button>
        <motion.img 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          src={src} 
          alt="Visualisation plein écran"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

const phases = [
  {
    number: 1,
    title: "Recrutement exclusif de la nouvelle équipe TNC 2026",
    description: "Constitution d'une équipe d'élite dédiée à l'excellence technologique et au rayonnement du génie béninois.",
    image: "https://i.postimg.cc/hvQ5F8q2/phase_1.jpg",
    status: "completed"
  },
  {
    number: 2,
    title: "Rencontre du nouveau bureau à Lokossa",
    description: "Premier séminaire stratégique pour définir les jalons opérationnels et les piliers de cette nouvelle édition mémorable.",
    image: "https://i.postimg.cc/L5gbdkMc/phase_2.jpg",
    status: "completed"
  },
  {
    number: 3,
    title: "Annonce officielle de l'événement",
    description: "Lancement de la communication institutionnelle et révélation de la vision 2026 auprès de l'écosystème tech national.",
    image: "https://i.postimg.cc/rsRP6GLn/phase_3.jpg",
    status: "completed"
  },
  {
    number: 4,
    title: "Appel à candidature et à la participation",
    description: "Ouverture du portail pour les visionnaires de toute la nation. Le moment de soumettre vos projets disruptifs est arrivé.",
    image: "https://i.postimg.cc/xTRdJLmb/annonce-de-tnc-candidature.jpg",
    status: "active"
  },
  {
    number: 5,
    title: "À suivre...",
    description: "La consécration ultime se prépare. Restez connectés pour découvrir les prochaines étapes de la conquête technologique.",
    image: "https://i.postimg.cc/kGGyhQHK/COUPE_OU_TROPHEE.jpg",
    status: "upcoming"
  }
];

const LiveProgress: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const socialChannels = [
    { 
      name: 'Facebook', 
      icon: <Facebook size={24} />, 
      url: 'https://www.facebook.com/share/1Ei8G8HHvC/',
      color: 'hover:bg-blue-600'
    },
    { 
      name: 'TikTok', 
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.59-5.71-.29-2.81 1.43-5.63 3.99-6.9 1.05-.53 2.25-.8 3.44-.76v4.04c-.45-.06-.91-.02-1.35.09-1.17.26-2.14 1.15-2.48 2.29-.46 1.42.16 3.12 1.46 3.88.76.47 1.68.61 2.56.41 1.06-.21 1.93-.99 2.28-1.99.11-.33.16-.68.16-1.03V.02z" />
        </svg>
      ), 
      url: 'https://www.tiktok.com/@tech.nova.challen',
      color: 'hover:bg-black'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={24} />, 
      url: 'https://www.linkedin.com/in/tech-nova-challenge-44b10b359',
      color: 'hover:bg-blue-700'
    },
    { 
      name: 'YouTube', 
      icon: <Youtube size={24} />, 
      url: 'https://www.youtube.com/@TechNovaChallenge',
      color: 'hover:bg-red-600'
    },
    { 
      name: 'WhatsApp', 
      icon: <MessageCircle size={24} />, 
      url: 'https://wa.me/2290196313068',
      color: 'hover:bg-green-500'
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white pb-32">
      
      {/* VISIONNEUSE GLOBALE */}
      <Lightbox src={selectedImage} onClose={() => setSelectedImage(null)} />

      {/* SECTION 1 : HERO PLEIN ÉCRAN */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black px-6">
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/jjpbDjSK/live.jpg" 
            alt="Live Étapes Background" 
            className="w-full h-full object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-nova-black/30 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-nova-violet font-black tracking-[0.6em] uppercase text-[10px] md:text-xs block mb-8">Journal de Bord Officiel en Temps Réel</span>
            <h1 className="editorial-title text-[clamp(2.5rem,8vw,10rem)] text-white leading-[0.85] mb-8">
              ÉTAPES EN <br />
              <span className="text-nova-violet italic font-light">DIRECT.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white font-light max-w-3xl mx-auto leading-relaxed drop-shadow-[0_4px_24px_rgba(0,0,0,1)] font-serif italic mb-12">
              L'évolution stratégique et opérationnelle du Tech Nova Challenge 2026 sous vos yeux.
            </p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">Suivez chaque détail du concours</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/deroulement" className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-widest transition-all">Le Programme</Link>
                <Link to="/galerie" className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-widest transition-all">La Galerie</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
        >
           <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* BANNER INFO */}
      <section className="bg-nova-violet py-6 px-6 text-center overflow-hidden">
        <motion.p 
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4"
        >
          <Sparkles size={14} /> Ne manquez aucune actualité : suivez nos réseaux et les pages officielles du concours <Sparkles size={14} />
        </motion.p>
      </section>

      {/* SECTION 2 : TIMELINE */}
      <section className="py-24 md:py-48 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          
          <div className="space-y-32 md:space-y-64">
            {phases.map((phase, i) => (
              <motion.div 
                key={phase.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`grid lg:grid-cols-12 gap-12 items-center relative ${phase.status === 'upcoming' ? 'opacity-80' : ''}`}
              >
                {/* Ligne de liaison visuelle */}
                {i < phases.length - 1 && (
                   <div className="absolute top-full left-[20px] md:left-1/2 w-[2px] h-32 md:h-64 bg-gray-100 -z-10 hidden lg:block" />
                )}

                {/* Contenu Texte */}
                <div className={`lg:col-span-5 ${i % 2 === 0 ? 'lg:text-right' : 'lg:order-last'}`}>
                   <div className={`flex items-center gap-4 mb-6 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      {phase.status === 'completed' ? (
                        <CheckCircle2 size={24} className="text-green-500" />
                      ) : phase.status === 'active' ? (
                        <div className="w-6 h-6 rounded-full bg-nova-violet animate-pulse flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-white" />
                        </div>
                      ) : (
                        <Clock size={24} className="text-nova-violet animate-spin-slow" />
                      )}
                      <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${phase.status === 'active' ? 'text-nova-violet' : phase.status === 'upcoming' ? 'text-nova-violet' : 'text-gray-400'}`}>
                        {phase.status === 'upcoming' ? 'Horizon 2026' : `Phase 0${phase.number}`}
                      </span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-8 leading-tight">
                     {phase.title}
                   </h2>
                   <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed font-serif italic mb-8">
                     {phase.description}
                   </p>
                   
                   {/* Lien vers infos supplémentaires si active */}
                   {phase.status === 'active' && (
                     <Link to="/participate" className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-nova-violet hover:text-nova-red transition-colors ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                       <ExternalLink size={14} /> Participer à cette étape
                     </Link>
                   )}
                </div>

                {/* Séparateur Central */}
                <div className="hidden lg:col-span-2 lg:flex justify-center relative">
                   <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-black z-10 ${
                     phase.status === 'completed' ? 'bg-nova-black border-nova-black text-white' : 
                     phase.status === 'active' ? 'bg-nova-violet border-nova-violet text-white shadow-xl shadow-nova-violet/20' : 
                     'bg-white border-nova-violet text-nova-violet animate-pulse'
                   }`}>
                      {phase.status === 'upcoming' ? <Trophy size={18} /> : phase.number}
                   </div>
                </div>

                {/* Image & Lightbox Trigger */}
                <div 
                  className={`lg:col-span-5 relative group cursor-zoom-in ${phase.status === 'upcoming' ? 'premium-glow' : ''}`} 
                  onClick={() => setSelectedImage(phase.image)}
                >
                   <div className="relative aspect-video md:aspect-square rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl bg-black">
                      <motion.img 
                        src={phase.image} 
                        alt={phase.title} 
                        animate={phase.status === 'upcoming' ? { scale: [1, 1.05, 1] } : {}}
                        transition={phase.status === 'upcoming' ? { duration: 10, repeat: Infinity, ease: "linear" } : {}}
                        className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${phase.status === 'upcoming' ? 'saturate-[1.2] brightness-110' : ''}`}
                      />
                      
                      {/* Grain & Noise Overlay pour le rendu premium sur la dernière phase */}
                      {phase.status === 'upcoming' && (
                        <>
                          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute inset-0 bg-nova-violet/10 mix-blend-color" />
                        </>
                      )}

                      {phase.status === 'active' && (
                        <div className="absolute top-8 right-8 px-6 py-2 bg-nova-violet text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2">
                           <Sparkles size={12} fill="currentColor" /> Étape Actuelle
                        </div>
                      )}

                      {phase.status === 'upcoming' && (
                        <div className="absolute top-8 right-8 px-6 py-2 bg-black/60 backdrop-blur-xl border border-white/20 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2">
                           <Clock size={12} className="animate-spin-slow" /> Révélation Prochaine
                        </div>
                      )}
                      
                      {/* Hover Overlay pour la visionneuse */}
                      <div className="absolute inset-0 bg-nova-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white text-nova-black flex items-center justify-center shadow-2xl transform translate-y-4 group-hover:translate-y-0 duration-500">
                          <Maximize2 size={24} />
                        </div>
                      </div>
                   </div>
                   
                   {/* Blur Decoration for Premium Look */}
                   {phase.status === 'upcoming' && (
                     <div className="absolute -inset-4 bg-nova-violet/20 blur-[60px] rounded-[5rem] -z-10 animate-pulse" />
                   )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CALL TO ACTION : SUIVRE ACTUALITÉS & RÉSEAUX SOCIAUX */}
      <section className="py-24 md:py-48 bg-[#FAFAFB] border-y border-gray-100 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
           <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8">Engagement & Information</span>
           <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter text-nova-black mb-12 leading-none">RESTEZ À <br />L'AVANT-GARDE.</h2>
           <p className="text-lg md:text-2xl text-gray-400 font-light mb-16 max-w-2xl mx-auto leading-relaxed italic font-serif">
             "L'innovation ne s'arrête jamais. Suivez nos canaux officiels pour ne rien manquer des annonces exclusives et des résultats en direct."
           </p>
           
           {/* Social Media Links Section */}
           <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
              {socialChannels.map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.1 }}
                  className={`w-16 h-16 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:text-white hover:border-transparent`}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
           </div>

           <div className="flex flex-col md:flex-row items-center justify-center gap-8 border-t border-gray-100 pt-16">
              <Link to="/galerie" className="px-12 py-5 border border-black/10 text-nova-black rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">Voir l'Album Complet</Link>
           </div>
        </div>
      </section>

      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .premium-glow::after {
          content: '';
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%);
          filter: blur(40px);
          z-index: -1;
          pointer-events: none;
        }
      `}</style>

      {/* FOOTER SILENCE */}
      <footer className="py-24 text-center border-t border-black/5 bg-white">
         <p className="text-[10px] font-black tracking-[0.8em] text-nova-black/20 uppercase font-display px-4">
            Tech Nova Challenge — Chronologie de l'Innovation.
         </p>
      </footer>
    </div>
  );
};

export default LiveProgress;
