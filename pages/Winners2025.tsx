import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, CheckCircle2, ArrowDown, 
  Quote, Building2, Star
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Winners2025: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Binômes inscrits", value: "67" },
    { label: "Projets qualifiés", value: "33" },
    { label: "Finalistes retenus", value: "10" },
    { label: "Lauréats distingués", value: "03" },
    { label: "Formation intensive", value: "3 Jours" }
  ];

  const winners = [
    {
      rank: "🥇 PREMIER PRIX — LE LAURÉAT SUPRÊME",
      amount: "150 000 FCFA",
      names: "BOKO Béoula & NTCHA Siméon",
      school: "ENSET Lokossa – Fabrication Mécanique 1ère année",
      project: "Motopompe Diesel Intelligente pour l'Irrigation Rurale",
      src: "https://i.postimg.cc/g2vWrmTp/FINALISTE_PREMIER.jpg",
      desc: "Véritable prouesse d'ingénierie mécanique et de contrôle, ce projet consiste en la réinvention de la motopompe diesel classique par l'intégration d'un système intelligent de régulation automatique du débit. Conçue pour répondre aux défis critiques des zones agricoles sans accès au réseau électrique, cette innovation réduit drastiquement les coûts opérationnels tout en maximisant l'efficience hydrique des petites exploitations rurales béninoises.",
      impacts: [
        "Réduction de 30% de la consommation de carburant fossile",
        "Autonomie technologique accrue pour les petits exploitants",
        "Optimisation automatisée des débits selon les besoins du sol",
        "Conception robuste et maintenance simplifiée pour milieu rural"
      ],
      quote: "L'ingénierie n'a de sens que lorsqu'elle sert le progrès humain. Notre but était de redonner de l'autonomie à ceux qui nourrissent notre nation avec tant de labeur."
    },
    {
      rank: "🥈 DEUXIÈME PRIX",
      amount: "100 000 FCFA",
      names: "ISSAKA Awa & FOLARIN Mourchid",
      school: "INSTI Lokossa – Froid & Informatique",
      project: "Système de Conservation Thermique Agroalimentaire",
      src: "https://i.postimg.cc/nc9ZbvKs/FINALISTE_2EME.jpg",
      desc: "Une solution thermodynamique d'avant-garde exploitant des matériaux à changement de phase pour stabiliser la température de conservation des denrées périssables. Ce projet offre une réponse pragmatique, éco-énergétique et souveraine au fléau du gaspillage alimentaire post-récolte, en garantissant la qualité des produits locaux sans dépendance exclusive aux systèmes frigorifiques énergivores.",
      impacts: [
        "Prolongation significative de la durée de vie des denrées fraîches",
        "Maintien passif de la chaîne du froid sans apport électrique constant",
        "Valorisation économique accrue des productions saisonnières",
        "Conception éco-responsable limitant les émissions de gaz à effet de serre"
      ],
      quote: "Innover, c'est d'abord protéger le travail de nos agriculteurs. Nous avons voulu leur offrir le temps nécessaire pour valoriser dignement leur production sur le marché."
    },
    {
      rank: "🥉 TROISIÈME PRIX",
      amount: "50 000 FCFA",
      names: "ROUFAI Aïssatou & ZANVO Prince Horeb",
      school: "ENSET Lokossa – Froid & Climatisation 1ère année",
      project: "ELEVATE — Plateforme d'Orientation Digitale",
      src: "https://i.postimg.cc/bwQhdpBY/FINALISTE_3EME.jpg",
      desc: "ELEVATE est un écosystème numérique centralisant avec intelligence les opportunités académiques, les bourses d'études et les programmes de mentorat. Un outil de transformation sociale conçu pour structurer le parcours des jeunes talents béninois, briser les barrières de l'information et favoriser l'excellence académique dans un environnement de plus en plus compétitif.",
      impacts: [
        "Démocratisation radicale de l'accès aux bourses d'excellence",
        "Réduction du décrochage scolaire par un guidage personnalisé",
        "Mise en réseau directe des étudiants avec des mentors industriels",
        "Centralisation des ressources éducatives et professionnelles nationales"
      ],
      quote: "Chaque talent mérite d'avoir une boussole. ELEVATE est là pour s'assurer qu'aucun jeune brillant ne s'égare faute d'information ou de soutien."
    }
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
            src="https://i.postimg.cc/X7vxZvrR/vue_d_ensemble_a_scop.jpg" 
            alt="Palmarès 2025" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-nova-black/60 backdrop-blur-[1px]" />
        </motion.div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] text-white leading-[0.85] mb-12 drop-shadow-2xl">
             L'HÉRITAGE DES <br />
              <span className="text-nova-violet italic font-light uppercase">PIONNIERS 2025.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed drop-shadow-xl font-serif">
              Célébration des talents audacieux qui ont redéfini les frontières de l'innovation lors de notre édition inaugurale.
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
      <section className="py-24 md:py-48 px-6 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 text-nova-black leading-none">
                UNE ÉDITION <br />INSPIRANTE, <br /><span className="text-nova-violet italic font-light uppercase">UNE VISION CONCRÈTE.</span>
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-12 italic font-serif">
                "Près de 70 binômes ont porté avec fierté l'innovation béninoise, prouvant que le génie technique est le moteur de notre souveraineté future."
              </p>
              
              <div className="flex items-center gap-6 p-10 bg-gray-50 rounded-[3rem] border border-gray-100 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-nova-violet/10 text-nova-violet flex items-center justify-center flex-shrink-0">
                   <Building2 size={32} />
                </div>
                <div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Partenaire Officiel 2025</div>
                   <div className="text-2xl font-black text-nova-black uppercase">WISANE (INGCO)</div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {stats.map((s, i) => (
                <div key={i} className="p-10 md:p-14 bg-white border border-gray-100 rounded-[3.5rem] hover:shadow-2xl hover:border-nova-violet/20 transition-all duration-700 group">
                   <div className="text-4xl md:text-5xl font-black text-nova-violet mb-4 group-hover:scale-110 transition-transform duration-500">{s.value}</div>
                   <div className="text-[10px] uppercase font-black tracking-widest text-gray-400 leading-relaxed">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PODIUM */}
      <section className="py-24 md:py-48 px-4 md:px-6 bg-gray-50/50 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <header className="text-center mb-32">
            <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8 text-center">Le Panthéon de l'Innovation</span>
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-nova-black text-center leading-none">🏆 LAURÉATS 2025</h2>
          </header>

          <div className="space-y-24">
            {winners.map((w, i) => (
              <GlassCard key={i} className={`p-8 md:p-24 relative overflow-hidden ${i === 0 ? 'ring-2 ring-nova-violet ring-offset-8 shadow-2xl' : ''}`}>
                
                {i === 0 && (
                  <div className="inline-block md:absolute md:top-12 md:right-12 px-8 py-3 bg-nova-violet text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-10 md:mb-0 shadow-lg z-20 flex items-center gap-2">
                    <Star size={14} fill="currentColor" /> Premier Prix National
                  </div>
                )}

                <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-start relative z-10">
                  <div className="lg:col-span-7">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12">
                       <span className="text-nova-violet font-black tracking-[0.4em] uppercase text-xs whitespace-nowrap">{w.rank}</span>
                       <div className="hidden sm:block h-px flex-grow bg-gray-200" />
                       <span className="text-3xl md:text-4xl font-black text-nova-black">{w.amount}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none text-nova-black">
                      {w.project}
                    </h3>
                    <div className="flex flex-col gap-2 mb-12">
                       <span className="text-nova-violet font-black text-base uppercase tracking-widest">{w.names}</span>
                       <span className="text-gray-400 font-light text-sm italic">{w.school}</span>
                    </div>
                    
                    <p className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed mb-12">{w.desc}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-8 mb-16">
                       {w.impacts.map((impact, idx) => (
                         <div key={idx} className="flex items-start gap-4 text-sm font-bold text-gray-600 leading-relaxed">
                           <CheckCircle2 size={18} className="text-nova-violet flex-shrink-0 mt-0.5" />
                           <span>{impact}</span>
                         </div>
                       ))}
                    </div>

                    <div className="relative p-10 md:p-14 bg-nova-violet/5 rounded-[3rem] border border-nova-violet/10">
                       <Quote className="absolute top-6 left-6 md:top-10 md:left-10 text-nova-violet/20" size={40} />
                       <p className="text-lg md:text-2xl italic font-light text-nova-black relative z-10 pl-10 md:pl-12 leading-relaxed font-serif">
                         "{w.quote}"
                       </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 w-full">
                    <div className="relative aspect-[4/5] md:aspect-square bg-white rounded-[4rem] overflow-hidden group shadow-2xl border border-gray-100">
                       <img 
                        src={w.src} 
                        alt={w.names}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                       />
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="py-24 md:py-64 bg-gray-50 px-6 text-center relative overflow-hidden">
         <div className="container mx-auto max-w-4xl relative z-10">
            <h2 className="editorial-title text-[clamp(2.5rem,10vw,8rem)] text-nova-black mb-12 md:mb-16 leading-[0.85] !drop-shadow-none">
               DÉPASSEZ VOS <br />
               <span className="text-nova-violet italic font-light uppercase">LIMITES EN 2026.</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
               <Button size="lg" className="w-full md:w-auto" onClick={() => navigate('/participate')}>POSTULER MAINTENANT</Button>
               <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate('/deroulement')}>VOIR LE PROGRAMME</Button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Winners2025;