
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Globe, ArrowDown } from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Partners: React.FC = () => {
  const navigate = useNavigate();

  // Catégorisation institutionnelle
  const sections = [
    {
      title: "Secteur Industriel & Entreprises",
      icon: <Building2 size={20} className="text-nova-violet" />,
      partners: ["WISANE (INGCO)"]
    },
    {
      title: "Institutions Académiques & Scientifiques",
      icon: <GraduationCap size={20} className="text-nova-violet" />,
      partners: ["ENSET LOKOSSA", "INSTI LOKOSSA"]
    },
    {
      title: "Écosystème & Appuis Stratégiques",
      icon: <Globe size={20} className="text-nova-violet" />,
      partners: ["SÈMÈ CITY (LAB SCOP)", "CAEB LOKOSSA", "ONG ESPOIR PLURIEL"]
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      
      {/* SECTION 1 : INTRODUCTION INSTITUTIONNELLE (Full Screen) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Image de fond institutionnelle sans dégradé de transition */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Collaboration Institutionnelle" 
            className="w-full h-full object-cover brightness-[0.25]"
          />
          {/* Overlay simple pour contraste du texte */}
          <div className="absolute inset-0 bg-nova-black/45" />
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="editorial-title text-[clamp(2.5rem,7vw,7rem)] text-white leading-none mb-12">
              ILS NOUS ONT FAIT <br />
              <span className="text-nova-violet italic font-light">CONFIANCE.</span>
            </h1>
            <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
              Le Tech Nova Challenge repose sur une coopération étroite entre l'excellence académique, le secteur industriel et les appuis institutionnels.
            </p>
          </motion.div>
        </div>

        {/* Indicateur de défilement */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
        >
           <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* SECTION 2 : RÉPERTOIRE DES PARTENAIRES (Sans descriptions) */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-32">
            {sections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-16 border-b border-gray-100 pb-8">
                  {section.icon}
                  <h2 className="text-xs font-black uppercase tracking-[0.3em] text-nova-black">
                    {section.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {section.partners.map((partner, pIdx) => (
                    <div 
                      key={pIdx}
                      className="aspect-[3/2] bg-gray-50 rounded-2xl flex items-center justify-center p-8 border border-transparent hover:border-gray-200 hover:bg-white transition-all duration-500 group"
                    >
                      {/* Espace réservé pour les logos officiels */}
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-nova-violet text-center transition-colors">
                        {partner}
                      </span>
                    </div>
                  ))}
                  {/* Emplacement libre pour nouveaux partenaires */}
                  <div className="aspect-[3/2] border-2 border-dashed border-gray-50 rounded-2xl flex items-center justify-center opacity-40">
                    <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Emplacement Logo</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 : COOPÉRATION STRATÉGIQUE (CTA) */}
      <section className="py-40 bg-nova-black text-white px-6 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
           <h2 className="editorial-title text-[clamp(2rem,6vw,6rem)] leading-none mb-12">
              REJOINDRE LE <br />
              <span className="text-nova-violet italic font-light">RÉSEAU.</span>
           </h2>
           <p className="text-lg text-gray-400 font-light mb-16 max-w-xl mx-auto leading-relaxed">
             Participez à l’émergence de la nouvelle génération technologique au Bénin. Intégrez l'écosystème pour l'édition 2026.
           </p>
           <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <Button size="md" onClick={() => navigate('/contact')}>Devenir Partenaire</Button>
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">
                Contact@technovabenin.com
              </span>
           </div>
        </div>
        {/* Effet visuel subtil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-nova-violet/5 blur-[120px] rounded-full" />
      </section>

    </div>
  );
};

export default Partners;
