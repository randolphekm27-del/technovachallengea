
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Award, CheckCircle2, ArrowDown, 
  Users, Calendar, Quote, TrendingUp, 
  Camera, Play, Microscope, Zap,
  Cpu, GraduationCap, Building2, ExternalLink
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

      {/* SECTION 2: INTRODUCTION & CHIFFRES CLÉS */}
      <section className="py-40 px-6 bg-white border-b border-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 text-nova-black leading-none">
                UNE ÉDITION PIONNIÈRE, <br /><span className="text-nova-violet italic font-light">DES PROJETS PROMETTEURS.</span>
              </h2>
              <div className="text-xl text-gray-500 font-light leading-relaxed space-y-6 mb-12">
                <p>
                  La première édition du Tech Nova Challenge, tenue en 2025, a réuni plus de 60 binômes issus d'établissements techniques et universitaires à travers le Bénin.
                </p>
                <p>
                  Après plusieurs mois de compétition, de formation et de développement, 10 projets ont été sélectionnés pour la phase finale. Voici les lauréats qui ont brillé par leur créativité, leur ingéniosité et leur impact potentiel.
                </p>
              </div>
              
              <div className="flex items-center gap-6 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-nova-violet/10 text-nova-violet flex items-center justify-center">
                   <Building2 size={24} />
                </div>
                <div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Partenaire Officiel 2025</div>
                   <div className="text-xl font-black text-nova-black uppercase">WISANE (INGCO)</div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-xl transition-all group">
                   <div className="text-4xl font-black text-nova-violet mb-2 group-hover:scale-110 transition-transform duration-500">{s.value}</div>
                   <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LES TROIS LAURÉATS */}
      <section className="py-48 px-6 bg-gray-50/50 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <header className="text-center mb-32">
            <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8">Le Podium de l'Excellence</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-nova-black">🏆 LES TROIS PROJETS PRIMÉS</h2>
          </header>

          <div className="space-y-16">
            {winners.map((w, i) => (
              <GlassCard key={i} className={`p-10 md:p-20 relative overflow-hidden ${i === 0 ? 'ring-2 ring-nova-violet ring-offset-8 shadow-2xl' : ''}`}>
                <div className="grid lg:grid-cols-12 gap-16 items-start relative z-10">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-6 mb-10">
                       <span className="text-nova-violet font-black tracking-[0.3em] uppercase text-xs">{w.rank}</span>
                       <div className="h-px flex-grow bg-gray-100" />
                       <span className="text-2xl font-black text-nova-black">{w.amount}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none text-nova-black">
                      {w.project}
                    </h3>
                    <div className="flex flex-col gap-2 mb-12">
                       <span className="text-nova-violet font-bold text-sm uppercase tracking-widest">{w.names}</span>
                       <span className="text-gray-400 font-light text-sm italic">{w.school}</span>
                    </div>
                    
                    <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">{w.desc}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                       {w.impacts.map((impact, idx) => (
                         <div key={idx} className="flex items-start gap-4 text-sm font-medium text-gray-600">
                           <CheckCircle2 size={18} className="text-nova-violet flex-shrink-0 mt-0.5" />
                           <span>{impact}</span>
                         </div>
                       ))}
                    </div>

                    <div className="relative p-12 bg-nova-violet/5 rounded-[3rem] border border-nova-violet/10">
                       <Quote className="absolute top-8 left-8 text-nova-violet/10" size={48} />
                       <p className="text-lg italic font-light text-nova-black relative z-10 pl-8">
                         "{w.quote}"
                       </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="aspect-square bg-white rounded-[3rem] flex items-center justify-center p-16 shadow-inner relative overflow-hidden group">
                       <Microscope className="text-nova-violet/5 absolute -right-20 -bottom-20 rotate-12 group-hover:scale-110 transition-transform duration-700" size={300} />
                       <div className="text-center">
                          <Trophy className="mx-auto text-nova-violet mb-8" size={80} />
                          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Nova Certified Innovation</div>
                       </div>
                    </div>
                  </div>
                </div>
                {i === 0 && (
                  <div className="absolute top-10 right-10 px-6 py-2 bg-nova-violet text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    Grand Lauréat
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: LES AUTRES FINALISTES */}
      <section className="py-48 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-20 text-nova-black">🌟 SEPT PROJETS REMARQUABLES</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-nova-black">
                  <th className="py-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Binôme & Établissement</th>
                  <th className="py-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Projet</th>
                  <th className="py-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Axe de solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {finalists.map((f, i) => (
                  <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                    <td className="py-10">
                      <div className="font-black text-nova-black uppercase text-lg mb-1">{f.names}</div>
                      <div className="text-xs font-bold text-nova-violet tracking-widest">{f.school}</div>
                    </td>
                    <td className="py-10">
                      <div className="font-black text-xl uppercase tracking-tighter text-nova-black group-hover:text-nova-violet transition-colors">{f.project}</div>
                    </td>
                    <td className="py-10 text-gray-500 font-light text-sm max-w-md">
                      {f.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-12 text-[10px] font-black uppercase tracking-widest text-gray-300 italic text-center">
            Note : Tous les finalistes ont reçu une attestation de participation et un lot de reconnaissance.
          </p>
        </div>
      </section>

      {/* SECTION 5: GALERIE PHOTOS & VIDÉOS */}
      <section className="py-48 px-6 bg-nova-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div>
              <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8">Archives de l'Édition I</span>
              <h2 className="text-5xl font-black uppercase tracking-tighter">📸 REVIVEZ LES MOMENTS FORTS</h2>
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nova-black flex items-center gap-3">
               <Play size={16} /> REGARDER LES HIGHLIGHTS
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Formation au CAEB Lokossa", date: "24 juillet 2025", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" },
              { title: "Visite à Sèmè City", date: "26 juillet 2025", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
              { title: "Présentations devant le Jury", date: "31 mai 2025", img: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=800" },
              { title: "Cérémonie de Remise", date: "30 juillet 2025", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800" },
              { title: "Moments d'échange", date: "Saison 2025", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800" },
              { title: "Travail en Équipe", date: "Saison 2025", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-nova-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="text-[10px] font-black uppercase tracking-widest text-nova-violet mb-2">{item.date}</div>
                   <h4 className="text-xl font-black uppercase tracking-tighter">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-nova-violet/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* SECTION 6: TÉMOIGNAGES */}
      <section className="py-48 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <header className="text-center mb-24">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-nova-black">🗣️ ILS TÉMOIGNENT</h2>
          </header>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div className="flex flex-col">
               <Quote className="text-nova-violet/20 mb-8" size={64} />
               <p className="text-lg font-light italic text-gray-500 mb-12 flex-grow leading-relaxed">
                 "Le Tech Nova Challenge a été bien plus qu'une compétition. C'était une école de l'innovation, une rencontre avec des mentors exceptionnels, et le début concret de notre aventure entrepreneuriale."
               </p>
               <div className="pt-8 border-t border-gray-100">
                  <div className="font-black uppercase text-nova-black">Béoula BOKO</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-nova-violet">Lauréat 1er Prix</div>
               </div>
            </div>

            <div className="flex flex-col">
               <Quote className="text-nova-violet/20 mb-8" size={64} />
               <p className="text-lg font-light italic text-gray-500 mb-12 flex-grow leading-relaxed">
                 "La qualité des projets présentés en 2025 montre le potentiel immense de la jeunesse béninoise. Ces jeunes ont non seulement des idées, mais aussi la détermination pour les concrétiser."
               </p>
               <div className="pt-8 border-t border-gray-100">
                  <div className="font-black uppercase text-nova-black">Dr ALIOU M. Sophia</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-nova-violet">Présidente du jury</div>
               </div>
            </div>

            <div className="flex flex-col">
               <Quote className="text-nova-violet/20 mb-8" size={64} />
               <p className="text-lg font-light italic text-gray-500 mb-12 flex-grow leading-relaxed">
                 "Soutenir le Tech Nova Challenge, c'est investir dans l'avenir technologique du Bénin. Les projets de 2025 démontrent une maturité et une pertinence remarquables."
               </p>
               <div className="pt-8 border-t border-gray-100">
                  <div className="font-black uppercase text-nova-black">Représentant WISANE</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-nova-violet">Partenaire (INGCO)</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: IMPACT ET SUITE DES PROJETS */}
      <section className="py-48 px-6 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <div>
              <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8">Suivi Post-Concours</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black">📈 OÙ EN SONT-ILS AUJOURD'HUI ?</h2>
            </div>
            <TrendingUp className="text-nova-violet mb-2 hidden md:block" size={64} />
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
             {[
               { 
                 title: "Motopompe Intelligente", 
                 status: "Phase de prototypage avancé", 
                 desc: "Discussions en cours avec le SCOP – Sèmè City pour une incubation. Premiers tests terrain prévus en 2026." 
               },
               { 
                 title: "Conservation Thermique", 
                 status: "Recherche de partenariats", 
                 desc: "Amélioration du design pour une production à plus grande échelle avec des coopératives agricoles." 
               },
               { 
                 title: "Plateforme ELEVATE", 
                 status: "Développement Bêta", 
                 desc: "Collaboration avec le Ministère de l'Enseignement Supérieur pour l'intégration des données académiques." 
               }
             ].map((u, i) => (
               <GlassCard key={i} className="p-12">
                  <div className="text-[10px] font-black uppercase tracking-widest text-nova-violet mb-4">{u.status}</div>
                  <h3 className="text-2xl font-black uppercase mb-6 text-nova-black">{u.title}</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-8">{u.desc}</p>
                  <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: '65%' }}
                       className="h-full bg-nova-violet"
                     />
                  </div>
               </GlassCard>
             ))}
          </div>

          <div className="p-16 bg-nova-black text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="w-24 h-24 rounded-[2rem] bg-white/5 flex items-center justify-center text-nova-violet flex-shrink-0">
                   <Zap size={40} />
                </div>
                <div>
                   <h3 className="text-2xl font-black uppercase mb-6">Accompagnement Continu</h3>
                   <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-3xl">
                     Tous les finalistes bénéficient d'un suivi personnalisé pendant 12 mois, incluant mentorat continu, mise en réseau avec des investisseurs, accès aux espaces de coworking et support technique.
                   </p>
                   <div className="flex flex-wrap gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-nova-violet">
                      <span>• Mentorat stratégique</span>
                      <span>• Accès Coworking</span>
                      <span>• Network Investisseurs</span>
                   </div>
                </div>
             </div>
             <div className="absolute top-0 right-0 w-80 h-80 bg-nova-violet/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* SECTION 8: MOT DES ORGANISATEURS */}
      <section className="py-64 px-6 bg-white text-center">
        <div className="container mx-auto max-w-4xl">
           <Quote className="mx-auto text-nova-violet/20 mb-16" size={80} />
           <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-nova-black">💬 UN MOT DES ORGANISATEURS</h2>
           <p className="text-2xl md:text-3xl font-light text-gray-500 leading-relaxed italic mb-16">
             "La première édition du Tech Nova Challenge a dépassé nos attentes. La créativité, la rigueur et la passion des participants nous ont confirmé une chose : l'avenir technologique du Bénin est entre de bonnes mains. Ces lauréats ne sont pas seulement des gagnants ; ce sont des bâtisseurs de demain."
           </p>
           <div className="flex flex-col items-center">
              <div className="h-px w-24 bg-nova-violet mb-6" />
              <div className="text-[10px] font-black uppercase tracking-[0.5em] text-nova-violet">
                L'Équipe du Tech Nova Challenge
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 9: CTA VERS L'ÉDITION 2026 */}
      <section className="py-64 bg-gray-50 px-6 text-center overflow-hidden relative">
         <div className="container mx-auto max-w-4xl relative z-10">
            <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-12">Prochain Chapitre</span>
            <h2 className="editorial-title text-[clamp(2.5rem,10vw,8rem)] text-nova-black mb-16 leading-[0.85]">
               PRÊT À ÉCRIRE <br />
               <span className="text-nova-violet italic font-light">VOTRE HISTOIRE ?</span>
            </h2>
            <p className="text-xl text-gray-400 font-light mb-20 max-w-2xl mx-auto leading-relaxed">
              Inspirez-vous des lauréats 2025 et lancez-vous dans l'aventure 2026. Votre projet pourrait être le prochain à transformer des vies.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
               <Button size="lg" onClick={() => navigate('/participate')}>JE M'INSCRIS POUR 2026</Button>
               <Button variant="outline" size="lg" onClick={() => navigate('/edition-2026')}>VOIR LE RÈGLEMENT</Button>
            </div>
         </div>
         <div className="absolute bottom-0 left-0 w-[100vw] h-[100vw] bg-nova-violet/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </section>

    </div>
  );
};

export default Winners2025;
