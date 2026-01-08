
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Award, CheckCircle2, ArrowDown, 
  Quote, Microscope, Play, Building2, ExternalLink
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Winners2025: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Binômes inscrits", value: "67" },
    { label: "Présélectionnés", value: "33" },
    { label: "Finalistes", value: "10" },
    { label: "Lauréats primés", value: "3" },
    { label: "Formation intensive", value: "3 Jours" }
  ];

  const winners = [
    {
      rank: "🥇 PREMIER PRIX",
      amount: "150 000 FCFA",
      names: "BOKO Béoula & NTCHA Siméon",
      school: "ENSET Lokossa – Fabrication Mécanique 1ère année",
      project: "Motopompe Diesel Intelligente pour l'Irrigation Rurale",
      desc: "Une motopompe diesel repensée avec un système de contrôle automatique de débit et de consommation, spécialement conçue pour les petits agriculteurs des zones rurales. Elle permet une irrigation autonome, réduit les coûts de carburant de 30% et augmente l'efficacité d'arrosage.",
      impacts: [
        "Réduction des coûts d'irrigation",
        "Autonomie pour les petits agriculteurs",
        "Optimisation de la consommation d'eau",
        "Solution adaptée aux zones sans électricité"
      ],
      quote: "Notre objectif est de rendre l'agriculture plus accessible et moins coûteuse pour ceux qui nourrissent notre nation."
    },
    {
      rank: "🥈 DEUXIÈME PRIX",
      amount: "100 000 FCFA",
      names: "ISSAKA Awa & FOLARIN Mourchid",
      school: "INSTI Lokossa – Froid & Climatisation / Informatique & Télécommunications",
      project: "Système de Conservation Thermique pour l'Agroalimentaire",
      desc: "Une innovation thermique qui améliore la conservation et la transformation des produits agricoles locaux. Le système utilise des matériaux à changement de phase pour maintenir une température stable, réduisant ainsi les pertes post-récolte.",
      impacts: [
        "Réduction du gaspillage alimentaire",
        "Amélioration de la qualité des produits transformés",
        "Valorisation des productions locales",
        "Solution éco-énergétique"
      ],
      quote: "Nous voulons aider les producteurs locaux à mieux conserver leurs récoltes et à augmenter leurs revenus."
    },
    {
      rank: "🥉 TROISIÈME PRIX",
      amount: "50 000 FCFA",
      names: "ROUFAI Aïssatou & ZANVO Prince Horeb",
      school: "ENSET Lokossa – Froid & Climatisation 1ère année",
      project: "ELEVATE – Plateforme d'Orientation",
      desc: "Une application mobile qui centralise les parcours éducatifs, les opportunités de bourses, les conseils professionnels et les programmes de mentorat pour les jeunes Béninois de 16 à 25 ans.",
      impacts: [
        "Réduction du décrochage scolaire",
        "Meilleure orientation professionnelle",
        "Accès facilité aux opportunités",
        "Création d'un réseau de mentorat"
      ],
      quote: "Chaque jeune mérite d'avoir les outils pour construire son avenir. ELEVATE est là pour guider ces premiers pas."
    }
  ];

  const finalists = [
    { names: "ADOKINSSI Marc & NOUNAWA A.", school: "INSTI", project: "Suivi Énergétique Intelligent", desc: "Suivi temps réel de la consommation électrique domestique." },
    { names: "OLLIHIDE Cyrille & ONABIYI M.", school: "ENSET", project: "VentiloSmart", desc: "Ventilateur qui s'adapte automatiquement à la température." },
    { names: "BALLO Y. & DJOTCHI L.", school: "ENSET", project: "SAM – Alerte Inondations", desc: "Détection précoce des montées d'eau dans les zones à risque." },
    { names: "SANOU F. & NAGASSI J.", school: "ENSTP", project: "Poubelle Intelligente Autonome", desc: "Gestion écologique et automatisée des déchets urbains." },
    { names: "GBODOUGBE Bernice", school: "ENSET", project: "Purification d'Eau", desc: "Eau potable et stérile pour zones défavorisées." },
    { names: "HOUNGNISSI C. & MEWANOU C.", school: "ENSET", project: "IA Création Entreprise", desc: "Génération de business plans via IA pour l'auto-emploi." },
    { names: "AGBOHOUNKA Judicaël", school: "ENSET", project: "Clim Récupération Chaleur", desc: "Système éco-énergétique avec stockage thermique." }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000" 
            alt="Palmarès 2025" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-nova-black/60 backdrop-blur-[2px]" />
        </motion.div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-nova-violet font-black tracking-[0.6em] uppercase text-[10px] block mb-8">
              Rapport d'Excellence 2025
            </span>
            <h1 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] text-white leading-[0.85] mb-12">
              L'EXCELLENCE EN <br />
              <span className="text-nova-violet italic font-light">PLEINE LUMIÈRE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Retour sur les projets et les talents qui ont redéfini l'innovation technologique au Bénin lors de la première édition.
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

      {/* SECTION 2: CHIFFRES CLÉS */}
      <section className="py-24 md:py-40 px-6 bg-white border-b border-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-10 text-nova-black leading-none">
                UNE ÉDITION PIONNIÈRE, <br /><span className="text-nova-violet italic font-light uppercase">DES PROJETS PROMETTEURS.</span>
              </h2>
              <div className="text-lg md:text-xl text-gray-500 font-light leading-relaxed space-y-6 mb-12">
                <p>
                  La première édition a réuni plus de 60 binômes issus d'établissements techniques et universitaires du Bénin.
                </p>
              </div>
              
              <div className="flex items-center gap-6 p-6 md:p-8 bg-gray-50 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-nova-violet/10 text-nova-violet flex items-center justify-center flex-shrink-0">
                   <Building2 size={24} />
                </div>
                <div>
                   <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">Partenaire Officiel 2025</div>
                   <div className="text-lg md:text-xl font-black text-nova-black uppercase">WISANE (INGCO)</div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((s, i) => (
                <div key={i} className="p-6 md:p-10 bg-white border border-gray-100 rounded-[2rem] md:rounded-[2.5rem] hover:shadow-xl transition-all group">
                   <div className="text-3xl md:text-4xl font-black text-nova-violet mb-2 group-hover:scale-110 transition-transform duration-500">{s.value}</div>
                   <div className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJETS PRIMÉS */}
      <section className="py-24 md:py-48 px-4 md:px-6 bg-gray-50/50 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <header className="text-center mb-16 md:mb-32">
            <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-6 md:mb-8">Le Podium de l'Excellence</span>
            <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter text-nova-black">🏆 PROJETS PRIMÉS</h2>
          </header>

          <div className="space-y-12 md:space-y-16">
            {winners.map((w, i) => (
              <GlassCard key={i} className={`p-6 md:p-20 relative overflow-hidden ${i === 0 ? 'ring-1 md:ring-2 ring-nova-violet ring-offset-4 md:ring-offset-8 shadow-2xl' : ''}`}>
                
                {/* Badge Grand Lauréat : Position relative sur mobile pour éviter le chevauchement */}
                {i === 0 && (
                  <div className="inline-block md:absolute md:top-10 md:right-10 px-6 py-2 bg-nova-violet text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-8 md:mb-0 shadow-lg z-20">
                    Grand Lauréat
                  </div>
                )}

                <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-start relative z-10">
                  <div className="lg:col-span-7">
                    
                    {/* Header : Flex-col sur mobile pour aérer */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 md:mb-10">
                       <span className="text-nova-violet font-black tracking-[0.3em] uppercase text-[10px] md:text-xs">{w.rank}</span>
                       <div className="hidden sm:block h-px flex-grow bg-gray-200" />
                       <span className="text-2xl md:text-3xl font-black text-nova-black">{w.amount}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-tight md:leading-none text-nova-black">
                      {w.project}
                    </h3>
                    <div className="flex flex-col gap-1 mb-8 md:mb-12">
                       <span className="text-nova-violet font-bold text-sm uppercase tracking-widest">{w.names}</span>
                       <span className="text-gray-400 font-light text-[10px] md:text-sm italic">{w.school}</span>
                    </div>
                    
                    <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed mb-8 md:mb-12">{w.desc}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                       {w.impacts.map((impact, idx) => (
                         <div key={idx} className="flex items-start gap-3 text-xs md:text-sm font-medium text-gray-600">
                           <CheckCircle2 size={16} className="text-nova-violet flex-shrink-0 mt-0.5" />
                           <span>{impact}</span>
                         </div>
                       ))}
                    </div>

                    <div className="relative p-8 md:p-12 bg-nova-violet/5 rounded-[2rem] md:rounded-[3rem] border border-nova-violet/10">
                       <Quote className="absolute top-4 left-4 md:top-8 md:left-8 text-nova-violet/10" size={32} />
                       <p className="text-sm md:text-lg italic font-light text-nova-black relative z-10 pl-6 md:pl-8 leading-relaxed">
                         "{w.quote}"
                       </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 hidden md:block">
                    <div className="aspect-square bg-white rounded-[3rem] flex items-center justify-center p-16 shadow-inner relative overflow-hidden group">
                       <Microscope className="text-nova-violet/5 absolute -right-20 -bottom-20 rotate-12 group-hover:scale-110 transition-transform duration-700" size={300} />
                       <div className="text-center">
                          <Trophy className="mx-auto text-nova-violet mb-8" size={80} />
                          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Nova Certified Innovation</div>
                       </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: AUTRES FINALISTES */}
      <section className="py-24 md:py-48 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-12 md:mb-20 text-nova-black">🌟 SEPT PROJETS REMARQUABLES</h2>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-nova-black">
                  <th className="py-6 md:py-8 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">Binôme & Établissement</th>
                  <th className="py-6 md:py-8 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">Projet</th>
                  <th className="py-6 md:py-8 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {finalists.map((f, i) => (
                  <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                    <td className="py-8">
                      <div className="font-black text-nova-black uppercase text-sm md:text-lg mb-1">{f.names}</div>
                      <div className="text-[9px] md:text-xs font-bold text-nova-violet tracking-widest">{f.school}</div>
                    </td>
                    <td className="py-8">
                      <div className="font-black text-lg md:text-xl uppercase tracking-tighter text-nova-black group-hover:text-nova-violet transition-colors">{f.project}</div>
                    </td>
                    <td className="py-8 text-gray-500 font-light text-xs md:text-sm max-w-md">
                      {f.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-24 md:py-64 bg-gray-50 px-6 text-center relative overflow-hidden">
         <div className="container mx-auto max-w-4xl relative z-10">
            <h2 className="editorial-title text-[clamp(2.5rem,10vw,8rem)] text-nova-black mb-12 md:mb-16 leading-[0.85]">
               PRÊT À ÉCRIRE <br />
               <span className="text-nova-violet italic font-light">L'HISTOIRE ?</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
               <Button size="lg" className="w-full md:w-auto" onClick={() => navigate('/participate')}>POSTULER 2026</Button>
               <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate('/edition-2026')}>LE RÈGLEMENT</Button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Winners2025;
