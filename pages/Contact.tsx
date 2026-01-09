
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowDown, MessageCircle, Facebook, Linkedin } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const socialLinks = [
    { 
      name: 'WhatsApp', 
      icon: <MessageCircle size={20} />, 
      url: 'https://wa.me/22997204690?text=Salut%20!%20J%27ai%20une%20pr%C3%A9occupation...',
      color: 'hover:text-green-500'
    },
    { 
      name: 'Facebook', 
      icon: <Facebook size={20} />, 
      url: 'https://www.facebook.com/profile.php?id=61574559687910',
      color: 'hover:text-blue-600'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      url: 'https://www.linkedin.com/in/tech-nova-challenge-44b10b359',
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      
      {/* HEADER PLEIN ÉCRAN */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
          alt="Canaux Officiels" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nova-black/80 backdrop-blur-[2px]" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-nova-violet font-black tracking-[0.6em] uppercase text-[10px] block mb-8">
              Service aux Candidats et Partenaires
            </span>
            <h1 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] text-white leading-[0.85] mb-12">
              CANAUX DE <br />
              <span className="text-nova-violet italic font-light">COMMUNICATION.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Pour toute demande d'information officielle ou sollicitation de partenariat, veuillez utiliser les coordonnées ci-dessous.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
           <ArrowDown size={32} />
        </div>
      </section>

      <section className="py-40 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-16">
               <h2 className="text-4xl font-black uppercase tracking-tighter text-nova-black">Coordonnées <br /><span className="text-nova-violet">Institutionnelles</span></h2>
               
               <div className="space-y-10">
                  <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-gray-50 flex items-center justify-center text-nova-violet group-hover:bg-nova-violet group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">E-mail Officiel</div>
                      <a href="mailto:contact@technovabenin.com" className="text-xl font-medium hover:text-nova-violet transition-colors">contact@technovabenin.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-gray-50 flex items-center justify-center text-nova-violet group-hover:bg-nova-violet group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Secrétariat</div>
                      <a href="tel:+2290147335106" className="text-xl font-medium hover:text-nova-violet transition-colors">+229 01 47 33 51 06</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-gray-50 flex items-center justify-center text-nova-violet group-hover:bg-nova-violet group-hover:text-white transition-all">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">WhatsApp Direct</div>
                      <a href="https://wa.me/22997204690?text=Salut%20!%20J%27ai%20une%20pr%C3%A9occupation..." target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-green-500 transition-colors">Démarrer une discussion</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-gray-50 flex items-center justify-center text-nova-violet group-hover:bg-nova-violet group-hover:text-white transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Siège</div>
                      <div className="text-xl font-medium">La ville de Lokossa</div>
                    </div>
                  </div>
               </div>

               <div className="pt-10 border-t border-gray-100">
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-8">Suivez l'aventure</div>
                  <div className="flex gap-6">
                    {socialLinks.map((social, i) => (
                      <a 
                        key={i} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 transition-all duration-500 ${social.color} hover:border-current hover:scale-110`}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
               </div>
            </div>

            <GlassCard className="p-12">
               <h3 className="text-2xl font-black uppercase mb-10 text-nova-black">Formulaire de demande</h3>
               <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Objet de la demande</label>
                     <input type="text" className="w-full bg-transparent border-b border-gray-100 py-4 outline-none focus:border-nova-violet transition-all" placeholder="Ex: Informations Candidature" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">E-mail de contact</label>
                     <input type="email" className="w-full bg-transparent border-b border-gray-100 py-4 outline-none focus:border-nova-violet transition-all" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message informatif</label>
                     <textarea rows={4} className="w-full bg-transparent border-b border-gray-100 py-4 outline-none focus:border-nova-violet transition-all resize-none" />
                  </div>
                  <div className="pt-8">
                     <Button className="w-full">Soumettre la demande</Button>
                  </div>
               </form>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
