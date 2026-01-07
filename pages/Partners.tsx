
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, Globe, Award } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Partners: React.FC = () => {
  const partners = [
    "WISANE (INGCO)", "ENSET Lokossa", "INSTI Lokossa", "SCOP – Sèmè City", "CAEB Lokossa", "ONG ESPOIR PLURIEL"
  ];

  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-32 text-center">
          <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8">Notre Écosystème</span>
          <h1 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] leading-none text-nova-black mb-16">
            COALITION <br /><span className="text-nova-violet italic font-light">STRATÉGIQUE.</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Rien de grand ne se fait seul. Le Tech Nova Challenge est soutenu par une alliance d'institutions publiques et d'acteurs privés engagés pour l'avenir.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {partners.map((p, i) => (
            <GlassCard key={i} className="p-12 text-center hover:bg-nova-violet/5 group">
              <div className="w-16 h-16 mx-auto mb-8 bg-gray-50 rounded-full flex items-center justify-center text-nova-violet group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-nova-black">{p}</h3>
            </GlassCard>
          ))}
        </div>

        <section className="bg-nova-black text-white p-20 rounded-[4rem] text-center">
          <Handshake size={64} className="text-nova-violet mx-auto mb-12" />
          <h2 className="text-4xl font-black uppercase mb-8">Devenir Partenaire</h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto mb-12 leading-relaxed">
            Vous souhaitez soutenir l'innovation béninoise et accéder à un vivier de talents techniques exceptionnels ? Rejoignez la coalition Nova.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet border-b border-nova-violet pb-2 hover:text-white hover:border-white transition-all">
              Demander le dossier de sponsoring
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Partners;
