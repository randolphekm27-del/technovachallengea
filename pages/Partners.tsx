import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Globe, ArrowDown, ExternalLink } from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Partners: React.FC = () => {
  const navigate = useNavigate();

  // Catégorisation institutionnelle avec les logos fournis
  const sections = [
    {
      title: "Secteur Industriel & Entreprises",
      icon: <Building2 size={24} className="text-nova-violet" />,
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
      icon: <GraduationCap size={24} className="text-nova-violet" />,
      partners: [
        { name: "ENSET LOKOSSA", logo: "https://i.postimg.cc/tgRf7YDZ/ENSET.png" },
        { name: "INSTI LOKOSSA", logo: "https://i.postimg.cc/s2f81vKG/INSTI_LOKOSSA.png" }
      ]
    },
    {
      title: "Écosystème & Appuis Stratégiques",
      icon: <Globe size={24} className="text-nova-violet" />,
      partners: [
        { name: "ONG ESPOIR PLURIEL", logo: "https://i.postimg.cc/SKQ5jJVz/ONG_PLURIEL.png" },
        { name: "SÈMÈ CITY (SCOP)", logo: "https://i.postimg.cc/W49yZTf0/SCOP.png" },
        { name: "BENIN EXCELLENCE", logo: "https://i.postimg.cc/5t9Gj6p3/BENIN_EXCELLENCE.png" },
        { name: "FEUA", logo: "https://i.postimg.cc/HLWKjV3Y/FEUA.jpg" },
        { name: "RFI FEUNSTIM", logo: "https://i.postimg.cc/q7mFK4Zw/RFI_FEUNSTIM.jpg" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      
      {/* SECTION 1 : INTRODUCTION INSTITUTIONNELLE */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden px-4 bg-black">
        <div className="absolute inset-0">
          {/* Image de fond : Lauréats chez Ingco - MISE A JOUR */}
          <img 
            src="https://i.postimg.cc/7Z2R6LcL/les-laureats-a-ingco-pour-des-bons.jpg" 
            alt="Collaboration Institutionnelle" 
            className="w-full h-full object-cover"
          />
          {/* Filtre noir de 60% pour lisibilité absolue */}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="editorial-title text-[clamp(2.5rem,7vw,7rem)] text-white leading-none mb-12">
              L'ALLIANCE DE <br />
              <span className="text-nova-violet italic font-light">L'EXCELLENCE.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white font-light max-w-3xl mx-auto leading-relaxed drop-shadow-[0_4px_20px_rgba(0,0,0,1)]">
              Nous fédérons les forces vives de la nation pour bâtir l'infrastructure technologique de demain.
            </p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 z-20"
        >
           <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* ... reste du composant Partners ... */}
      {/* SECTION 2 : RÉPERTOIRE DES PARTENAIRES */}
      <section className="py-20 md:py-48 px-6 bg-[#FAFAFB]">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-24 md:space-y-56">
            {sections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 mb-12 md:mb-20 border-b border-gray-200 pb-8 md:pb-12">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-nova-violet shadow-sm border border-gray-100">
                      {section.icon}
                    </div>
                    <h2 className="text-lg md:text-3xl font-black uppercase tracking-tighter text-nova-black">
                      {section.title}
                    </h2>
                  </div>
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-nova-black/30">
                    {section.partners.length} Partenaires actifs
                  </span>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                  {section.partners.map((partner, pIdx) => (
                    <motion.div 
                      key={pIdx}
                      whileHover={{ y: -8, scale: 1.01 }}
                      className="group relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 flex flex-col items-center justify-center border border-gray-100 shadow-sm hover:shadow-2xl hover:border-nova-violet/10 transition-all duration-700"
                    >
                      <div className="w-full h-24 md:h-40 flex items-center justify-center mb-6 md:mb-8">
                        {/* Retrait complet du filtre grayscale */}
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-[85%] max-h-full object-contain transition-all duration-1000 group-hover:scale-110"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-nova-black mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {partner.name}
                        </h4>
                        <div className="flex items-center justify-center gap-2 text-nova-violet opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest">Voir le profil</span>
                          <ExternalLink size={10} />
                        </div>
                      </div>
                      
                      {/* Decorative Element */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-1 bg-gray-50 rounded-full group-hover:bg-nova-violet transition-colors" />
                    </motion.div>
                  ))}
                  
                  {/* Join Section */}
                  <motion.div 
                    onClick={() => navigate('/contact')}
                    whileHover={{ scale: 0.98 }}
                    className="aspect-square md:aspect-auto border-4 border-dashed border-gray-100 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col items-center justify-center cursor-pointer group hover:bg-nova-violet/[0.05] hover:border-nova-violet/40 transition-all p-6 md:p-10 text-center"
                  >
                    <div className="w-12 h-12 md:w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-xl group-hover:bg-nova-violet group-hover:text-white transition-all">
                      <ExternalLink size={20} className="text-nova-violet group-hover:text-white md:w-6 md:h-6" />
                    </div>
                    <span className="text-[10px] md:text-xs font-black text-nova-black uppercase tracking-widest group-hover:text-nova-violet transition-colors">
                      Devenir Partenaire
                    </span>
                    <p className="mt-4 text-[8px] md:text-[10px] text-gray-400 font-medium leading-relaxed hidden sm:block">
                      Propulsez l'innovation béninoise à nos côtés.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 : COOPÉRATION STRATÉGIQUE (CTA) */}
      <section className="py-24 md:py-48 bg-nova-black text-white px-6 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
           <span className="text-nova-violet font-black tracking-[0.6em] uppercase text-[9px] md:text-[10px] block mb-8 md:mb-12">Engagement Industriel</span>
           <h2 className="editorial-title text-[clamp(2rem,7vw,7rem)] leading-none mb-8 md:mb-12">
              FORGEONS LE <br />
              <span className="text-nova-violet italic font-light">FUTUR.</span>
           </h2>
           <p className="text-base md:text-2xl text-gray-400 font-light mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
             Participez activement à l’émergence d’une génération technologique souveraine et audacieuse.
           </p>
           <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10">
              <Button 
                size="lg" 
                variant="accent"
                className="shadow-[0_0_60px_rgba(157,10,0,0.7)] scale-110 !px-12 md:!px-16 w-full md:w-auto"
                onClick={() => navigate('/contact')}
              >
                Devenir Partenaire Officiel
              </Button>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-2">Service Partenariat</span>
                <span className="text-xs md:text-sm font-bold tracking-widest text-nova-violet">Contact@technovabenin.com</span>
              </div>
           </div>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-nova-violet/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-nova-red/5 blur-[100px] rounded-full" />
      </section>

    </div>
  );
};

export default Partners;