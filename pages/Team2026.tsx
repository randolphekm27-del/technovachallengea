
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Shield, Star } from 'lucide-react';

interface TeamMember {
  id: number;
  lastName: string;
  firstName: string;
  role: string;
  university: string;
  field: string;
  image: string;
  priority: number;
}

const team: TeamMember[] = [
  {
    id: 0,
    lastName: "TNC",
    firstName: "LE PROMOTEUR",
    role: "Promoteur",
    university: "Technicien Supérieur à l'ENSET Lokossa",
    field: "", // Masqué pour le promoteur
    image: "https://i.postimg.cc/L6FT665y/le-promoteur.jpg",
    priority: 1
  },
  {
    id: 5,
    lastName: "DJOSSA",
    firstName: "Jesumimon Herman",
    role: "Organisateur Général",
    university: "INSTI",
    field: "Master 1 en Froid et Climatisation",
    image: "https://i.postimg.cc/xCpwVVgN/Jesumimon_Herman.jpg",
    priority: 2
  },
  {
    id: 8,
    lastName: "DAKOSSI",
    firstName: "Johannes Ornel",
    role: "Coordonnateur Adjoint",
    university: "Abomey-Calavi",
    field: "ERSE",
    image: "https://i.postimg.cc/g2Mr5nR1/Johannes_Ornel.jpg",
    priority: 3
  },
  {
    id: 6,
    lastName: "JAKO",
    firstName: "Abigaïl F'olukè Dègnon",
    role: "Secrétaire Générale (SG)",
    university: "ENSET Lokossa",
    field: "Secrétariat et Assistanat de Gestion",
    image: "https://i.postimg.cc/VksdDjSx/Abigaïl_F_olukè_Dègnon.jpg",
    priority: 4
  },
  {
    id: 7,
    lastName: "HOUDJI",
    firstName: "Mondoukpè Esther Géraldine",
    role: "Secrétaire Adjointe",
    university: "UCAO",
    field: "Informatique Industrielle et Maintenance",
    image: "https://i.postimg.cc/rwztq18F/Mondoukpè_Esther_Géraldine.jpg",
    priority: 5
  },
  {
    id: 3,
    lastName: "BOKO",
    firstName: "Amour Marie",
    role: "Trésorière Générale",
    university: "ENSET Lokossa",
    field: "Métiers de Mode - Vêtements",
    image: "https://i.postimg.cc/W19tKhrW/Amour_Marie.jpg",
    priority: 6
  },
  {
    id: 14,
    lastName: "ADEKOUNLE",
    firstName: "Adéwalé Joyce Rockia",
    role: "Trésorière Adjointe",
    university: "ESM BENIN (LOKOSSA)",
    field: "Droit",
    image: "https://i.postimg.cc/QdVWjQXN/Adéwalé_Joyce_Rockia.jpg",
    priority: 7
  },
  {
    id: 1,
    lastName: "AKOTCHAYE",
    firstName: "M. Vicentia",
    role: "Ambassadrice",
    university: "ENSET",
    field: "MA2",
    image: "https://i.postimg.cc/VksdDjrQ/M_Vicentia.jpg",
    priority: 8
  },
  {
    id: 11,
    lastName: "DOSSA EZOUN-AGNAN",
    firstName: "Mahugnon Delphin",
    role: "Ambassadeur",
    university: "UNSTIM - INSTI",
    field: "BTP - Construction Durable",
    image: "https://i.postimg.cc/qRDPHHQg/Mahugnon_Delphin.jpg",
    priority: 9
  },
  {
    id: 12,
    lastName: "LENGHAM",
    firstName: "Charone Abioud Wicham",
    role: "Chef Service Technique",
    university: "ENSGÉP",
    field: "Génie Énergétique et Procédés",
    image: "https://i.postimg.cc/GmM9NHGb/Charone_Abioud_Wicham.jpg",
    priority: 10
  },
  {
    id: 13,
    lastName: "TOGNON",
    firstName: "Emeric Rolland S.",
    role: "Service Technique",
    university: "UNSTIM",
    field: "GEI EE3",
    image: "https://i.postimg.cc/sgn18vSN/Emeric_Rolland_S.jpg",
    priority: 11
  },
  {
    id: 9,
    lastName: "AHIZIGBE",
    firstName: "SIDOINE",
    role: "Service de communication",
    university: "UNSTIM",
    field: "Froid et Climatisation",
    image: "https://i.postimg.cc/Qt7ywK9X/SIDOINE.jpg",
    priority: 12
  },
  {
    id: 15,
    lastName: "GNANSOUNOU",
    firstName: "Afi Isabelle Joyce",
    role: "Service de Communication",
    university: "INSTI Lokossa",
    field: "Master 1 BTP - CD",
    image: "https://i.postimg.cc/qvBzj8hf/GNANSOUNOU_Afi_Isabelle_Joyce.jpg",
    priority: 13
  },
  {
    id: 16,
    lastName: "AÏMASSE",
    firstName: "Jésugnon Calixte Fabrice",
    role: "Service de Communication",
    university: "ENSET",
    field: "Economie-Gestion (EG-2)",
    image: "https://i.postimg.cc/zG3RqCJv/Jésugnon_Calixte_Fabrice.jpg",
    priority: 14
  },
  {
    id: 17,
    lastName: "DJOHON",
    firstName: "Marius",
    role: "Service de Communication",
    university: "UNSTIM Abomey",
    field: "Génie Énergétique et Procédés",
    image: "https://i.postimg.cc/0QXT11Zw/DJOHON.jpg",
    priority: 15
  },
  {
    id: 2,
    lastName: "TOMETIN",
    firstName: "Codjo Henri Primaël",
    role: "Graphiste Designer",
    university: "ENSET-LOKOSSA",
    field: "Énergie Renouvelable",
    image: "https://i.postimg.cc/52PjG6LV/Codjo_Henri_Primaël.jpg",
    priority: 16
  },
  {
    id: 4,
    lastName: "SEGBEDJI",
    firstName: "Anolde Elstine",
    role: "Graphiste Designer",
    university: "UAC",
    field: "Mathématiques Informatiques",
    image: "https://i.postimg.cc/L8yh7nfr/Anolde_Elstine.jpg",
    priority: 17
  }
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col md:flex-row bg-white border border-gray-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 mb-20 md:mb-32"
    >
      {/* Portrait aspect ratio (4/5) with top focus */}
      <div className="w-full md:w-[42%] aspect-[4/5] overflow-hidden bg-gray-50 relative">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src={member.image}
          alt={`${member.firstName} ${member.lastName}`}
          className="w-full h-full object-cover object-top transition-transform duration-[2000ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
      </div>

      {/* Info Panel */}
      <div className="w-full md:w-[58%] p-10 md:p-16 flex flex-col justify-center bg-white">
        <div className="space-y-10">
          <div className="pb-8 border-b border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet">Identité Digitale</span>
              {member.priority === 1 && (
                <span className="flex items-center gap-2 px-4 py-1.5 bg-nova-black text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                  <Star size={10} fill="currentColor" /> Promoteur
                </span>
              )}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-nova-black uppercase tracking-tighter leading-none mb-4">
              {member.lastName}
            </h2>
            <p className="text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-tight">
              {member.firstName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet mb-3 block opacity-60">Structure / Institution</span>
              <p className="text-base font-black text-nova-black uppercase leading-tight tracking-tight">
                {member.university}
              </p>
            </div>
            
            {member.field && (
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet mb-3 block opacity-60">Filière / Spécialité</span>
                <p className="text-base font-bold text-gray-500 italic leading-snug">
                  {member.field}
                </p>
              </div>
            )}
          </div>

          <div className="pt-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet mb-3 block opacity-60">Responsabilité</span>
            <div className="inline-block px-0 py-0 border-l-4 border-nova-violet pl-6">
              <p className="text-2xl font-black text-nova-violet uppercase tracking-wider leading-none">
                {member.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Team2026: React.FC = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="min-h-screen bg-white selection:bg-nova-violet selection:text-white pb-32">
      
      {/* 1. HERO — FULLSCREEN IMMERSIVE HEADER */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Parallax & Dark Overlay */}
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://i.postimg.cc/wBHGRMq1/les_finalistes_et_l_equipe_tnc.jpg" 
            alt="Team Vision Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75 z-10" />
          <div className="absolute inset-0 grid-blueprint z-20 opacity-10" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto max-w-7xl relative z-30 text-center px-6"
        >
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/20 mb-10 backdrop-blur-md bg-white/5">
            <Shield size={14} className="text-nova-violet" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white">Collectif Souverain 2026</span>
          </div>
          
          <h1 className="editorial-title !text-white !text-[clamp(3rem,12vw,11rem)] !tracking-[-0.08em] !leading-[0.75] !text-shadow-none uppercase mb-12">
            UNE ÉQUIPE, <br />
            <span className="text-nova-violet italic font-light lowercase tracking-tighter">UNE VISION.</span>
          </h1>
          
          <div className="w-24 h-px bg-nova-violet mx-auto mb-12" />
          
          <p className="text-xl md:text-3xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed italic font-serif">
            Dix-sept esprits unis par l'audace et l'excellence pour façonner l'infrastructure technologique du Bénin.
          </p>
        </motion.div>

        {/* Scroll Indicator - No text as per request */}
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 z-30 flex flex-col items-center gap-4"
        >
          <ArrowDown size={28} />
        </motion.div>
      </section>

      {/* 2. EXHIBITION GALLERY */}
      <section className="py-24 md:py-48 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          {team.sort((a, b) => a.priority - b.priority).map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-48 py-32 border-t border-gray-50 text-center"
          >
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-nova-black mb-8 leading-none">
              DÉPASSER LES <br /><span className="text-nova-violet italic font-light uppercase">FRONTIÈRES.</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.4em] text-[11px]">
              L'Elite Technologique au Service de la Nation
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATEMENT SECTION */}
      <section className="py-48 bg-nova-black text-white px-6 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
            <h2 className="editorial-title text-[clamp(3rem,10vw,9rem)] leading-[0.8] mb-16 text-white !text-shadow-none">
              SOUVERAINETÉ <br />
              <span className="text-nova-violet italic font-light uppercase tracking-tighter">ET AUDACE.</span>
            </h2>
            <div className="h-px w-32 bg-nova-violet mx-auto mb-16" />
            <p className="text-[11px] font-black uppercase tracking-[1em] text-white/30">L'EXCELLENCE EST NOTRE SEUL STANDARD</p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-nova-violet/10 blur-[150px] rounded-full pointer-events-none" />
      </section>

      {/* MINI FOOTER */}
      <footer className="py-24 text-center border-t border-black/5 bg-white">
         <p className="text-[11px] font-black tracking-[1.5em] text-nova-black/10 uppercase font-display px-4">
            Tech Nova Challenge — Un Collectif Visionnaire.
         </p>
      </footer>
    </div>
  );
};

export default Team2026;
