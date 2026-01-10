import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Globe, ArrowDown } from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Partners: React.FC = () => {
  const navigate = useNavigate();

  // Catégorisation institutionnelle avec les logos fournis
  const sections = [
    {
      title: "Secteur Industriel & Entreprises",
      icon: <Building2 size={20} className="text-nova-violet" />,
      partners: [
        { name: "INGCO", logo: "https://i.postimg.cc/6qhn75My/ingco_logo_png.png" },
        { name: "NSIA BANQUE", logo: "https://i.postimg.cc/d0QXDLnj/NSIA_BANQUE.jpg" },
        { name: "PRO TECHNOLOGIE PLUS", logo: "https://i.postimg.cc/25HtWrXx/PRO_TECHNOLOGIE_PLUS.jpg" },
        { name: "VDN", logo: "https://i.postimg.cc/XvNhXpxN/VDN.jpg" },
        { name: "AMBITION CONCEPT", logo: "https://i.postimg.cc/R0C8qNGV/AMBITION_CONCEPT.jpg" }
      ]
    },
    {
      title: "Institutions Académiques & Scientifiques",
      icon: <GraduationCap size={20} className="text-nova-violet" />,
      partners: [
        { name: "ENSET LOKOSSA", logo: "https://i.postimg.cc/tgRf7YDZ/ENSET.png" },
        { name: "INSTI LOKOSSA", logo: "https://i.postimg.cc/s2f81vKG/INSTI_LOKOSSA.png" }
      ]
    },
    {
      title: "Écosystème & Appuis Stratégiques",
      icon: <Globe size={20} className="text-nova-violet" />,
      partners: [
        { name: "ONG ESPOIR PLURIEL", logo: "https://i.postimg.cc/SKQ5jJVz/ONG_PLURIEL.png" },
        { name: "SÈMÈ CITY (SCOP)", logo: "https://i.postimg.cc/W49yZTf0/SCOP.png" },
        { name: "BENIN EXCELLENCE", logo: "https://i.postimg.cc/5t9Gj6p3/BENIN_EXCELLENCE.png" },
        { name: "FEUA", logo: "https://i.postimg.cc/HLWKjV3Y/FEUA.jpg" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      
      {/* SECTION 1 : INTRODUCTION INSTITUTIONNELLE */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/7Z2R6LcL/les-laureats-a-ingco-pour-des-bons.jpg" 
            alt="Collaboration Institutionnelle" 
            className="w-full h-full object-cover brightness-[0.25]"
          />
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
              Le Tech Nova Challenge repose sur une coopération étroite entre l'excellence académique, le secteur industriel et les appuis institutionnels majeurs du Bénin.
            </p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
        >
           <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* SECTION 2 : RÉPERTOIRE DES PARTENAIRES AVEC LOGOS */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-40">
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
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
                  {section.partners.map((partner, pIdx) => (
                    <motion.div 
                      key={pIdx}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="aspect-[3/2] bg-white rounded-3xl flex flex-col items-center justify-center p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-nova-violet/20 transition-all duration-500 group overflow-hidden"
                    >
                      <div className="w-full h-full flex items-center justify-center mb-4">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-[8px] font-black uppercase tracking-widest text-gray-400 group-hover:text-nova-violet text-center transition-colors">
                        {partner.name}
                      </span>
                    </motion.div>
                  ))}
                  
                  {/* Bouton pour devenir partenaire si la section est courte */}
                  {section.partners.length < 4 && (
                    <div 
                      onClick={() => navigate('/contact')}
                      className="aspect-[3/2] border-2 border-dashed border-gray-100 rounded-3xl flex flex-col items-center justify-center cursor-pointer group hover:border-nova-violet/30 transition-all"
                    >
                      <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest group-hover:text-nova-violet/50">
                        + Devenir Partenaire
                      </span>
                    </div>
                  )}
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
             Participez activement à l’émergence d’une génération technologique souveraine. Intégrez notre écosystème pour l'édition 2026.
           </p>
           <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <Button size="md" onClick={() => navigate('/contact')}>Devenir Partenaire</Button>
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">
                Contact@technovabenin.com
              </span>
           </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-nova-violet/5 blur-[120px] rounded-full" />
      </section>

    </div>
  );
};

export default Partners;