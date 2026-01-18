
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Radio, ArrowDown, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Partner {
  id: string;
  name: string;
  logo: string;
  category: 'enterprise' | 'institution' | 'media';
}

const Partners: React.FC = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const load = () => {
      setPartners(JSON.parse(localStorage.getItem('tnc_partners') || '[]'));
    };
    load();
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    { title: "Les Entreprises", icon: <Building2 />, partners: partners.filter(p => p.category === 'enterprise') },
    { title: "Les Institutions", icon: <GraduationCap />, partners: partners.filter(p => p.category === 'institution') },
    { title: "Les Médias", icon: <Radio />, partners: partners.filter(p => p.category === 'media') }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-black">
        <img src="https://i.postimg.cc/7Z2R6LcL/les-laureats-a-ingco-pour-des-bons.jpg" className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" />
        <h1 className="editorial-title text-center text-white relative z-10">L'ALLIANCE DE <br /><span className="text-nova-violet italic font-light">L'EXCELLENCE.</span></h1>
      </section>

      <section className="py-32 px-6 bg-[#FAFAFB]">
        <div className="container mx-auto max-w-7xl space-y-32">
           {sections.map((section, idx) => (
             <div key={idx} className="space-y-12">
                <div className="flex items-center gap-6 border-b border-gray-200 pb-8">
                   <div className="text-nova-violet">{section.icon}</div>
                   <h2 className="text-3xl font-black uppercase tracking-tighter text-nova-black">{section.title}</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                   {section.partners.map(p => (
                     <motion.div key={p.id} whileHover={{ y: -5 }} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                        <img src={p.logo} alt={p.name} className="h-24 object-contain mb-8 group-hover:scale-110 transition-transform" />
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-nova-black">{p.name}</h4>
                     </motion.div>
                   ))}
                   <div onClick={() => navigate('/contact')} className="border-4 border-dashed border-gray-100 rounded-[2.5rem] flex flex-col items-center justify-center cursor-pointer hover:bg-nova-violet/5 transition-all p-10">
                      <ExternalLink className="text-gray-300 mb-4" />
                      <span className="text-[9px] font-black uppercase text-gray-400">Devenir Partenaire</span>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Partners;
