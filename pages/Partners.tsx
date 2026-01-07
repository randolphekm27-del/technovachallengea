
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, ArrowDown } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Partners: React.FC = () => {
  const partners = [
    "WISANE (INGCO)", "ENSET Lokossa", "INSTI Lokossa", "SCOP – Sèmè City", "CAEB Lokossa", "ONG ESPOIR PLURIEL"
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      
      {/* HEADER PLEIN ÉCRAN */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000" 
          alt="Coopération Institutionnelle" 
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
              Écosystème de Soutien
            </span>
            <h1 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] text-white leading-[0.85] mb-12">
              COALITION <br />
              <span className="text-nova-violet italic font-light">STRATÉGIQUE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Le Tech Nova Challenge repose sur une alliance solide entre institutions publiques et partenaires privés engagés pour le futur numérique du Bénin.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
           <ArrowDown size={32} />
        </div>
      </section>

      <section className="py-40 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((p, i) => (
              <GlassCard key={i} className="p-16 text-center hover:bg-nova-violet/5 group">
                <ShieldCheck className="mx-auto text-nova-violet mb-8 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-nova-black">{p}</h3>
              </GlassCard>
            ))}
          </div>
          
          <div className="mt-40 text-center max-w-3xl mx-auto">
             <Handshake size={64} className="text-nova-violet mx-auto mb-12" />
             <h2 className="text-3xl font-black uppercase mb-8 text-nova-black">Rejoindre la Coalition</h2>
             <p className="text-lg text-gray-500 font-light leading-relaxed mb-12">
               Nous invitons les entreprises et institutions souhaitant soutenir l'excellence technologique à nous contacter pour établir un cadre de partenariat mutuellement bénéfique.
             </p>
             <button className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet border-b border-nova-violet pb-2 hover:text-nova-black hover:border-nova-black transition-colors">
               Solliciter le dossier de coopération
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
