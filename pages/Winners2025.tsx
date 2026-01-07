
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Award, Users, CheckCircle2, 
  ArrowRight, Star, Quote, Play, 
  TrendingUp, Calendar, Heart, GraduationCap,
  ExternalLink
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

const Winners2025: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      
      {/* SECTION 1 : BANNIÈRE */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="editorial-title text-[clamp(2rem,6vw,5rem)] font-black text-nova-black leading-[1.1] mb-8 max-w-5xl mx-auto">
              LES LAURÉATS DE LA <br />
              <span className="text-nova-violet italic font-light">PREMIÈRE ÉDITION – 2025.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
              Découvrez les talents, les projets et les innovations qui ont marqué l'histoire du Tech Nova Challenge.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative aspect-[21/9] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-nova-black"
          >
            <img 
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1600" 
              alt="Cérémonie 2025" 
              className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-white text-center p-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] block mb-4">Photo de groupe</span>
                  <h3 className="text-2xl font-light italic">Les 10 binômes finalistes lors de la cérémonie officielle.</h3>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 : INTRODUCTION & CHIFFRES CLÉS */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-8">
                Une édition pionnière, <br /><span className="text-nova-violet">des projets prometteurs.</span>
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                La première édition a réuni plus de 60 binômes à travers le Bénin. Après plusieurs mois de compétition, 10 projets ont atteint la finale, portés par une créativité et une ingéniosité remarquables.
              </p>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 italic text-gray-400">
                "Ces jeunes ont prouvé que l'innovation n'est pas une question de moyens, mais de vision."
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Binômes inscrits", val: "67" },
                { label: "Présélectionnés", val: "33" },
                { label: "Finalistes", val: "10" },
                { label: "Lauréats primés", val: "3" },
                { label: "Jours de formation", val: "3" },
                { label: "Partenaire : WISANE", val: "INGCO" }
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-nova-violet transition-colors">
                  <div className="text-2xl font-black text-nova-black mb-1">{stat.val}</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : LES TROIS LAURÉATS */}
      <section className="py-40 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black">
              🏆 Les Trois Projets Primés
            </h2>
          </div>

          <div className="space-y-12">
            {/* 1er PRIX */}
            <GlassCard className="p-12 md:p-20 bg-white border-nova-violet border-2">
              <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                  <div className="text-nova-violet font-black text-7xl mb-6">01</div>
                  <div className="inline-block px-6 py-2 bg-nova-violet text-white text-xs font-black uppercase tracking-widest rounded-full mb-8">
                    Premier Prix – 150 000 FCFA
                  </div>
                  <h3 className="text-3xl font-black uppercase text-nova-black mb-2">BOKO Béoula & NTCHA Siméon</h3>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">ENSET Lokossa – Fab. Mécanique</p>
                </div>
                <div className="lg:w-2/3">
                  <h4 className="text-2xl font-black uppercase text-nova-violet mb-6">Motopompe Diesel Intelligente pour l'Irrigation Rurale</h4>
                  <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                    Une motopompe diesel repensée avec un système de contrôle automatique de débit et de consommation, spécialement conçue pour les petits agriculteurs des zones rurales.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {["Réduction des coûts (30%)", "Autonomie agricole", "Optimisation de l'eau", "Zéro électricité requise"].map((imp, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-green-500" /> {imp}
                      </div>
                    ))}
                  </div>
                  <blockquote className="border-l-4 border-nova-violet pl-8 py-2 italic text-nova-black font-medium">
                    "Notre objectif est de rendre l'agriculture plus accessible et moins coûteuse pour ceux qui nourrissent notre nation."
                  </blockquote>
                </div>
              </div>
            </GlassCard>

            {/* 2e PRIX */}
            <GlassCard className="p-12 md:p-16 bg-white">
              <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                  <div className="text-gray-300 font-black text-6xl mb-6">02</div>
                  <div className="inline-block px-6 py-2 bg-gray-100 text-gray-500 text-xs font-black uppercase tracking-widest rounded-full mb-8">
                    Deuxième Prix – 100 000 FCFA
                  </div>
                  <h3 className="text-2xl font-black uppercase text-nova-black mb-2">ISSAKA Awa & FOLARIN Mourchid</h3>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">INSTI Lokossa – Froid / Info</p>
                </div>
                <div className="lg:w-2/3">
                  <h4 className="text-2xl font-black uppercase text-nova-black mb-6">Système de Conservation Thermique Agroalimentaire</h4>
                  <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                    Innovation utilisant des matériaux à changement de phase pour maintenir une température stable, réduisant ainsi les pertes post-récolte pour les producteurs locaux.
                  </p>
                  <blockquote className="border-l-4 border-gray-200 pl-8 py-2 italic text-gray-500">
                    "Nous voulons aider les producteurs locaux à mieux conserver leurs récoltes et à augmenter leurs revenus."
                  </blockquote>
                </div>
              </div>
            </GlassCard>

            {/* 3e PRIX */}
            <GlassCard className="p-12 md:p-16 bg-white">
              <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                  <div className="text-orange-200 font-black text-6xl mb-6">03</div>
                  <div className="inline-block px-6 py-2 bg-orange-50 text-orange-600 text-xs font-black uppercase tracking-widest rounded-full mb-8">
                    Troisième Prix – 50 000 FCFA
                  </div>
                  <h3 className="text-2xl font-black uppercase text-nova-black mb-2">ROUFAI Aïssatou & ZANVO Horeb</h3>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">ENSET Lokossa – Froid & Clim</p>
                </div>
                <div className="lg:w-2/3">
                  <h4 className="text-2xl font-black uppercase text-nova-black mb-6">ELEVATE – Plateforme d'Orientation</h4>
                  <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                    Application mobile centralisant les parcours éducatifs, les opportunités de bourses et le mentorat pour les jeunes Béninois de 16 à 25 ans.
                  </p>
                  <blockquote className="border-l-4 border-gray-200 pl-8 py-2 italic text-gray-500">
                    "Chaque jeune mérite d'avoir les outils pour construire son avenir. ELEVATE guide ces premiers pas."
                  </blockquote>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* SECTION 4 : LES AUTRES FINALISTES */}
      <section className="py-40 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-4">
              🌟 Sept Projets Remarquables
            </h2>
            <p className="text-gray-500">Tous les finalistes ont reçu une attestation de participation et un lot de reconnaissance.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-nova-black">
                  <th className="py-6 text-[10px] font-black uppercase tracking-widest">Binôme</th>
                  <th className="py-6 text-[10px] font-black uppercase tracking-widest">Établissement</th>
                  <th className="py-6 text-[10px] font-black uppercase tracking-widest">Projet</th>
                  <th className="py-6 text-[10px] font-black uppercase tracking-widest">Description Brève</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { names: "ADOKINSSI Marc & NOUNAWA A.", school: "INSTI", project: "Suivi Énergétique", desc: "Suivi en temps réel de la consommation domestique." },
                  { names: "OLLIHIDE Cyrille & ONABIYI M.", school: "ENSET", project: "VentiloSmart", desc: "Ventilateur adaptatif à la température ambiante." },
                  { names: "BALLO Y. & DJOTCHI L.", school: "ENSET", project: "SAM", desc: "Système d'Alerte précoce aux inondations." },
                  { names: "SANOU Fernando & NAGASSI J.", school: "ENSTP", project: "Poubelle Intelligente", desc: "Gestion écologique et automatisée des déchets." },
                  { names: "GBODOUGBE Bernice", school: "ENSET", project: "Purification d'Eau", desc: "Eau potable et stérile pour zones défavorisées." },
                  { names: "HOUNGNISSI C. & MEWANOU C.", school: "ENSET", project: "Plateforme IA Business", desc: "Génération de business plans via IA." },
                  { names: "AGBOHOUNKA Judicaël", school: "ENSET", project: "Clim Récup. Chaleur", desc: "Système éco-énergétique à stockage intelligent." }
                ].map((f, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 font-bold text-sm">{f.names}</td>
                    <td className="py-6 text-sm text-gray-500">{f.school}</td>
                    <td className="py-6 font-black text-nova-violet text-sm">{f.project}</td>
                    <td className="py-6 text-sm text-gray-500 italic">{f.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5 : GALERIE PHOTOS & VIDÉOS */}
      <section className="py-40 px-6 bg-nova-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">📸 Revivez les <br />Moments Forts</h2>
            </div>
            <button className="flex items-center gap-3 px-8 py-4 bg-white/10 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-all">
               <Play size={16} fill="white" /> Vidéo Highlights 2025
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: "Formation CAEB Lokossa", date: "24 juil. 2025", src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" },
              { label: "Visite Sèmè City", date: "26 juil. 2025", src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" },
              { label: "Pitchs Finale", date: "31 mai 2025", src: "https://images.unsplash.com/photo-1475721027185-403002e74111?auto=format&fit=crop&q=80&w=800" },
              { label: "Remise des prix", date: "30 juil. 2025", src: "https://images.unsplash.com/photo-1531050171669-7df9b209c487?auto=format&fit=crop&q=80&w=800" },
              { label: "Travail en équipe", date: "Juin 2025", src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
              { label: "Échanges mentors", date: "Juillet 2025", src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800" }
            ].map((img, i) => (
              <div key={i} className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-x-8 bottom-8">
                  <div className="text-[10px] font-black uppercase tracking-widest text-nova-violet mb-1">{img.date}</div>
                  <div className="text-sm font-bold">{img.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 : TÉMOIGNAGES */}
      <section className="py-40 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">🗣️ Ils Témoignent</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                quote: "Le Tech Nova Challenge a été bien plus qu'une compétition. C'était une école de l'innovation et le début de notre aventure entrepreneuriale.",
                author: "Béoula BOKO",
                role: "Lauréat 1er Prix"
              },
              { 
                quote: "La qualité des projets montre le potentiel immense de la jeunesse béninoise. Ces jeunes ont non seulement des idées, mais la détermination pour les concrétiser.",
                author: "Dr ALIOU M. Sophia",
                role: "Présidente du jury"
              },
              { 
                quote: "Soutenir le Tech Nova Challenge, c'est investir dans l'avenir technologique du Bénin. Les projets démontrent une maturité remarquable.",
                author: "Représentant WISANE",
                role: "Partenaire Officiel"
              }
            ].map((t, i) => (
              <div key={i} className="p-10 bg-gray-50 rounded-[2.5rem] relative">
                <Quote className="text-nova-violet/20 absolute top-8 left-8" size={40} />
                <p className="text-lg italic text-gray-600 font-light mb-10 relative z-10">"{t.quote}"</p>
                <div className="font-black uppercase text-sm">{t.author}</div>
                <div className="text-[10px] uppercase font-bold text-nova-violet tracking-widest">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 : IMPACT ET SUITE */}
      <section className="py-40 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-6">📈 Où en sont-ils aujourd'hui ?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Le concours ne s'arrête pas à la finale. Nous accompagnons nos talents sur le long terme.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Motopompe Intelligente", 
                status: "Prototypage avancé", 
                updates: ["Tests terrain pilotes 2026", "Incubation Sèmè City"] 
              },
              { 
                title: "Conservation Thermique", 
                status: "Partenariats coopératifs", 
                updates: ["Amélioration du design industriel", "Recherche de financements"] 
              },
              { 
                title: "Plateforme ELEVATE", 
                status: "Phase bêta", 
                updates: ["Intégration données académiques", "Support Ministère Enseignement"] 
              }
            ].map((u, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-6">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-black uppercase text-nova-black mb-2">{u.title}</h3>
                <div className="text-xs font-bold text-nova-violet uppercase tracking-widest mb-6">{u.status}</div>
                <ul className="space-y-4">
                  {u.updates.map((up, j) => (
                    <li key={j} className="text-sm text-gray-500 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-nova-violet" /> {up}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-nova-black text-white rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <h3 className="text-2xl font-black uppercase mb-4">Programme de suivi post-concours</h3>
              <p className="text-gray-400 font-light max-w-xl">Tous les finalistes bénéficient d'un suivi personnalisé pendant 12 mois : mentorat, mise en réseau et support technique.</p>
            </div>
            <div className="flex gap-4">
               <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><Calendar size={20} /></div>
                  <span className="text-[8px] uppercase font-black">Mentorat</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><Users size={20} /></div>
                  <span className="text-[8px] uppercase font-black">Réseautage</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 : MOT DES ORGANISATEURS */}
      <section className="py-40 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
           <Heart className="text-nova-violet mx-auto mb-12" size={48} />
           <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-nova-black mb-12">💬 Un Mot des Organisateurs</h2>
           <p className="text-2xl font-light text-gray-500 leading-relaxed italic mb-16">
            "La première édition a dépassé nos attentes. La créativité et la passion des participants nous ont confirmé une chose : l'avenir technologique du Bénin est entre de bonnes mains. Ces lauréats sont des pionniers, des bâtisseurs de demain."
           </p>
           <div className="text-[10px] font-black uppercase tracking-[0.5em] text-nova-black">
              L'Équipe du Tech Nova Challenge
           </div>
        </div>
      </section>

      {/* SECTION 9 : CTA VERS 2026 */}
      <section className="py-64 px-6 bg-nova-black text-white text-center relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] font-black leading-none mb-16">
            ET VOUS ? <br />
            <span className="text-nova-violet italic font-light">ÉCRIVEZ VOTRE HISTOIRE.</span>
          </h2>
          <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl mx-auto">
            Inspirez-vous des lauréats 2025 et lancez-vous dans l'aventure 2026. Votre projet pourrait être le prochain à changer des vies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button size="lg" onClick={() => navigate('/participate')}>Je m'inscris pour 2026</Button>
            <button 
              onClick={() => navigate('/edition-2026')}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-white transition-colors flex items-center gap-3"
            >
              Voir le règlement 2026 <ExternalLink size={14} />
            </button>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-nova-violet/10 blur-[150px] rounded-full pointer-events-none" />
      </section>

    </div>
  );
};

export default Winners2025;
