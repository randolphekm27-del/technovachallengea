
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Award, CheckCircle2, HelpCircle, 
  ArrowDown, Cpu, Leaf, Lightbulb, Users, 
  FileText, Download, Rocket, ChevronDown, 
  ChevronUp, GraduationCap, Briefcase, Star,
  // Fix: Added missing icons for Microscope, Trophy and Quote
  Microscope, Trophy, Quote
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left hover:text-nova-violet transition-colors group"
      >
        <span className="text-lg md:text-xl font-black uppercase tracking-tighter text-nova-black group-hover:text-nova-violet">
          {question}
        </span>
        {isOpen ? <ChevronUp className="text-nova-violet" /> : <ChevronDown className="text-gray-300" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-500 font-light leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Edition2026: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION CINÉMATIQUE */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Édition 2026" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-nova-black/70 backdrop-blur-[1px]" />
        </motion.div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-nova-violet font-black tracking-[0.6em] uppercase text-[10px] block mb-8">
              Session Nationale — Chapitre II
            </span>
            <h1 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] text-white leading-[0.85] mb-12">
              L'AVENIR EN <br />
              <span className="text-nova-violet italic font-light">CONSTRUCTION — 2026.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Les technologies émergentes au service de l’entrepreneuriat durable au Bénin.
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

      {/* 2. THÈME DE L'ANNÉE */}
      <section className="py-48 px-6 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7">
              <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-10">Orientation Stratégique</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black leading-none mb-12">
                LES TECHNOLOGIES <br />
                <span className="text-nova-violet italic font-light">ÉMERGENTES POUR LE DURABLE.</span>
              </h2>
              <div className="text-xl text-gray-500 font-light leading-relaxed space-y-8 mb-16">
                <p>
                  Pour l’édition 2026, le Tech Nova Challenge invite les jeunes à réfléchir à la manière dont les technologies de pointe peuvent soutenir le développement d’un entrepreneuriat durable au Bénin.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <Cpu className="text-nova-violet flex-shrink-0" size={24} />
                    <span className="text-sm font-medium text-nova-black uppercase tracking-widest">IA & IoT</span>
                  </div>
                  <div className="flex gap-4">
                    <Leaf className="text-nova-violet flex-shrink-0" size={24} />
                    <span className="text-sm font-medium text-nova-black uppercase tracking-widest">Énergies Vertes</span>
                  </div>
                  <div className="flex gap-4">
                    <Microscope className="text-nova-violet flex-shrink-0" size={24} />
                    <span className="text-sm font-medium text-nova-black uppercase tracking-widest">Biotechnologie</span>
                  </div>
                  <div className="flex gap-4">
                    <Lightbulb className="text-nova-violet flex-shrink-0" size={24} />
                    <span className="text-sm font-medium text-nova-black uppercase tracking-widest">Numérique Responsable</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <GlassCard className="p-12 border-nova-violet/10 bg-nova-violet/5">
                <h3 className="text-xl font-black uppercase mb-8 text-nova-black">Objectifs du thème</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 text-sm text-gray-500 font-light">
                    <CheckCircle2 size={18} className="text-nova-violet flex-shrink-0" />
                    <span>Impact social, économique et environnemental positif.</span>
                  </li>
                  <li className="flex gap-4 text-sm text-gray-500 font-light">
                    <CheckCircle2 size={18} className="text-nova-violet flex-shrink-0" />
                    <span>Solutions adaptées aux besoins locaux.</span>
                  </li>
                  <li className="flex gap-4 text-sm text-gray-500 font-light">
                    <CheckCircle2 size={18} className="text-nova-violet flex-shrink-0" />
                    <span>Innovation inclusive et respectueuse du cadre de vie.</span>
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CALENDRIER DÉTAILLÉ */}
      <section className="py-48 px-6 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <header className="mb-24 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black mb-6">L'AGENDA OFFICIEL</h2>
            <p className="text-gray-400 font-light text-xl tracking-tight">Les grandes étapes de l’édition 2026</p>
          </header>

          <div className="space-y-12">
            {[
              { 
                date: "Janvier – Février 2026", 
                title: "Lancement et inscriptions", 
                points: ["Ouverture des inscriptions en ligne", "Tournées de présentation dans les établissements", "Campagnes de communication nationales"] 
              },
              { 
                date: "Mars 2026", 
                title: "Pré-sélection et accompagnement", 
                points: ["Dépôt des dossiers de projets", "Évaluation par le comité technique", "Sélection des 20 meilleurs binômes", "Début du mentorat expert"] 
              },
              { 
                date: "Avril 2026", 
                title: "Réalisation et prototypage", 
                points: ["Ateliers de formation technique", "Développement des prototypes physiques/numériques", "Sessions de préparation intensive au pitch"] 
              },
              { 
                date: "Mai 2026", 
                title: "La Grande Finale", 
                points: ["Présentation publique devant le jury national", "Démonstrations des solutions en direct", "Cérémonie officielle de remise des bourses"] 
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-12 gap-8 items-start group"
              >
                <div className="md:col-span-3">
                   <div className="text-nova-violet font-black uppercase tracking-[0.2em] text-xs pt-2 group-hover:translate-x-2 transition-transform">{step.date}</div>
                </div>
                <div className="md:col-span-9 p-10 bg-white rounded-[2.5rem] border border-gray-100 group-hover:shadow-2xl transition-all">
                   <h3 className="text-2xl font-black uppercase mb-6 text-nova-black">{step.title}</h3>
                   <ul className="grid md:grid-cols-2 gap-4">
                      {step.points.map((p, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-500 font-light items-center">
                           <div className="w-1.5 h-1.5 rounded-full bg-nova-violet" />
                           {p}
                        </li>
                      ))}
                   </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMENT PARTICIPER ? */}
      <section className="py-48 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-24">
              <div>
                 <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-nova-black">VOUS SOUHAITEZ <br /><span className="text-nova-violet italic font-light">RELEVER LE DÉFI ?</span></h2>
                 <div className="space-y-12">
                    <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
                       <h4 className="text-lg font-black uppercase mb-8 text-nova-black flex items-center gap-3">
                          <Users className="text-nova-violet" size={20} /> Conditions de participation
                       </h4>
                       <ul className="space-y-4 text-gray-500 font-light text-sm">
                          <li>• Âgé(e) de 15 à 25 ans</li>
                          <li>• Inscrit(e) dans un établissement d’enseignement supérieur au Bénin</li>
                          <li>• Participation obligatoire en binôme</li>
                          <li>• Avoir validé l’année académique en cours</li>
                          <li>• Projet innovant, réalisable et à impact positif</li>
                       </ul>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                       <Button size="lg" onClick={() => navigate('/participate')}>Je m'inscris en ligne</Button>
                       <a href="#" className="flex items-center gap-3 text-nova-violet font-black uppercase tracking-widest text-[10px] mx-auto hover:text-nova-black transition-colors">
                          <Download size={14} /> Télécharger le dossier de candidature
                       </a>
                    </div>
                 </div>
              </div>

              <div className="relative">
                 <GlassCard className="p-12 border-nova-black/5">
                    <h3 className="text-xl font-black uppercase mb-10 text-nova-black flex items-center gap-3">
                       <FileText className="text-nova-violet" size={20} /> Pièces à fournir (Dossier PDF)
                    </h3>
                    <ul className="space-y-6">
                       {[
                         "Fiche d’inscription complétée",
                         "Attestation de validation d'année",
                         "Copie de la carte d’étudiant (CIP)",
                         "Acte de naissance",
                         "Photo d’identité",
                         "Description détaillée du projet (5 pages max)",
                         "Vidéo de présentation (3 min max, optionnelle)"
                       ].map((item, i) => (
                         <li key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0 group">
                            <span className="text-sm font-light text-gray-500 group-hover:text-nova-black transition-colors">{item}</span>
                            <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-[8px] font-black text-gray-300">0{i+1}</div>
                         </li>
                       ))}
                    </ul>
                 </GlassCard>
              </div>
           </div>
        </div>
      </section>

      {/* 5. PRIX ET RÉCOMPENSES */}
      <section className="py-48 px-6 bg-nova-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <header className="text-center mb-32">
             <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8">Reconnaissance de l'Excellence</span>
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">PRIX <span className="text-nova-violet italic font-light">& RÉCOMPENSES.</span></h2>
          </header>

          <div className="grid lg:grid-cols-3 gap-8 mb-24">
             {/* 1er Prix */}
             <motion.div whileHover={{ y: -10 }} className="p-12 bg-nova-violet/10 border-2 border-nova-violet rounded-[3rem] relative overflow-hidden flex flex-col">
                <div className="absolute top-8 right-8 text-nova-violet opacity-30"><Trophy size={64} /></div>
                <div className="text-3xl font-black text-nova-violet mb-4">🥇 500.000 <span className="text-sm uppercase tracking-widest">FCFA</span></div>
                <h3 className="text-2xl font-black uppercase mb-8">Premier Prix</h3>
                <ul className="space-y-4 text-gray-400 text-sm font-light mb-12 flex-grow">
                   <li>• Ordinateur portable pour chaque membre</li>
                   <li>• Incubation Sèmè City (6 mois)</li>
                   <li>• Trophée & Attestation de mérite</li>
                   <li>• Tableau d’honneur pour l’établissement</li>
                </ul>
                <div className="pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-nova-violet">
                   Grand Lauréat National
                </div>
             </motion.div>

             {/* 2ème Prix */}
             <motion.div whileHover={{ y: -10 }} className="p-12 bg-white/5 border border-white/10 rounded-[3rem] flex flex-col">
                <div className="text-3xl font-black text-white mb-4">🥈 300.000 <span className="text-sm uppercase tracking-widest">FCFA</span></div>
                <h3 className="text-2xl font-black uppercase mb-8">Deuxième Prix</h3>
                <ul className="space-y-4 text-gray-400 text-sm font-light mb-12 flex-grow">
                   <li>• Trophée & Attestation de mérite</li>
                   <li>• Programme de mentorat professionnel</li>
                   <li>• Tableau d’honneur institutionnel</li>
                </ul>
                <div className="pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-gray-500">
                   Nova Innovation Excellence
                </div>
             </motion.div>

             {/* 3ème Prix */}
             <motion.div whileHover={{ y: -10 }} className="p-12 bg-white/5 border border-white/10 rounded-[3rem] flex flex-col">
                <div className="text-3xl font-black text-white mb-4">🥉 200.000 <span className="text-sm uppercase tracking-widest">FCFA</span></div>
                <h3 className="text-2xl font-black uppercase mb-8">Troisième Prix</h3>
                <ul className="space-y-4 text-gray-400 text-sm font-light mb-12 flex-grow">
                   <li>• Trophée & Attestation de mérite</li>
                   <li>• Formation certifiante entrepreneuriat</li>
                </ul>
                <div className="pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-gray-500">
                   Nova Futur Talent
                </div>
             </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {["Innovation Féminine", "Impact Social", "Solution Originale", "Meilleure Présentation"].map((p, i) => (
               <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center text-center">
                  <Star className="text-nova-violet mb-4" size={24} />
                  <div className="text-xs font-black uppercase tracking-widest mb-2">{p}</div>
                  <div className="text-lg font-black text-nova-violet">100.000 FCFA</div>
               </div>
             ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-nova-violet/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* 6. FORMATION ET ACCOMPAGNEMENT */}
      <section className="py-48 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-5">
                 <img 
                   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                   alt="Accompagnement" 
                   className="rounded-[3rem] grayscale"
                 />
              </div>
              <div className="lg:col-span-7">
                 <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 text-nova-black leading-none">UN PARCOURS <br /><span className="text-nova-violet italic font-light">D'EXCELLENCE STRUCTURÉ.</span></h2>
                 <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                   Plus qu'un concours, nous offrons un accompagnement complet pour transformer vos idées en solutions concrètes et pérennes.
                 </p>
                 <div className="grid md:grid-cols-2 gap-8">
                    {[
                      { icon: <GraduationCap size={20} />, title: "Formations", desc: "Prise de parole, business model et gestion de projet." },
                      { icon: <Cpu size={20} />, title: "Ateliers Tech", desc: "Design thinking et prototypage assisté." },
                      { icon: <Users size={20} />, title: "Mentorat", desc: "Suivi personnalisé par des experts sectoriels." },
                      { icon: <Rocket size={20} />, title: "Networking", desc: "Rencontre avec investisseurs et startups." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start">
                         <div className="p-4 bg-gray-50 rounded-2xl text-nova-violet flex-shrink-0">{item.icon}</div>
                         <div>
                            <h4 className="font-black uppercase text-xs mb-2 text-nova-black">{item.title}</h4>
                            <p className="text-xs text-gray-400 font-light leading-relaxed">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. JURY ET CRITÈRES */}
      <section className="py-48 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-24">
              <div className="space-y-12">
                 <h2 className="text-3xl font-black uppercase tracking-tighter text-nova-black leading-none">ÉVALUATION <br /><span className="text-nova-violet">PROFESSIONNELLE.</span></h2>
                 <p className="text-lg text-gray-500 font-light leading-relaxed">
                   Composition du jury : Enseignants-chercheurs, représentants du secteur privé, Alumni Tech Nova et experts en innovation.
                 </p>
                 <div className="p-12 bg-white rounded-[3rem] shadow-xl border border-gray-100">
                    <h3 className="text-xl font-black uppercase mb-10 text-nova-black">Critères de sélection</h3>
                    <div className="space-y-8">
                       {[
                         { label: "Innovation & Créativité", val: "30%" },
                         { label: "Faisabilité Technique & Économique", val: "25%" },
                         { label: "Impact Social & Environnemental", val: "25%" },
                         { label: "Qualité de la Présentation", val: "20%" }
                       ].map((c, i) => (
                         <div key={i} className="space-y-3">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                               <span className="text-gray-400">{c.label}</span>
                               <span className="text-nova-violet">{c.val}</span>
                            </div>
                            <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: c.val }}
                                 className="h-full bg-nova-violet"
                               />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="flex flex-col justify-center">
                 <div className="space-y-12">
                    <Quote className="text-nova-violet/20" size={64} />
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-nova-black italic mb-8">
                       « Grâce au Tech Nova Challenge, notre projet de motopompe intelligente a été reconnu et financé. Aujourd’hui, nous collaborons avec des agriculteurs locaux. »
                    </h3>
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 rounded-2xl bg-gray-200" />
                       <div>
                          <div className="font-black uppercase text-nova-black">Lauréats 2025</div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-nova-violet">Premier Prix d'Excellence</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-48 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
           <header className="mb-24">
              <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8">Support & Clarifications</span>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-nova-black">QUESTIONS <span className="text-nova-violet italic font-light">FRÉQUENTES.</span></h2>
           </header>
           
           <div className="space-y-4">
              <FAQItem 
                question="Peut-on participer seul(e) ?" 
                answer="Non, la participation au Tech Nova Challenge se fait obligatoirement en binôme afin d'encourager la collaboration et la complémentarité des compétences." 
              />
              <FAQItem 
                question="Les projets doivent-ils être déjà développés ?" 
                answer="Non, une idée bien structurée et viable suffit au moment de l'inscription. Le prototypage et le développement technique interviennent après la phase de sélection officielle." 
              />
              <FAQItem 
                question="Y a-t-il des frais d’inscription ?" 
                answer="Non, la participation au concours est entièrement gratuite pour tous les étudiants inscrits dans un établissement d'enseignement supérieur au Bénin." 
              />
              <FAQItem 
                question="Toutes les filières peuvent-elles participer ?" 
                answer="Oui, toutes les filières sont acceptées. Nous encourageons particulièrement les binômes pluridisciplinaires (ex: Informatique & Environnement)." 
              />
              <FAQItem 
                question="À quoi servent les fonds issus des votes payants ?" 
                answer="Les fonds collectés lors des phases de vote du public contribuent directement au financement des bourses d'excellence, à la logistique du concours et à l'accompagnement post-concours des lauréats." 
              />
           </div>
        </div>
      </section>

      {/* 9. APPEL À L'ACTION FINAL */}
      <section className="py-64 bg-gray-50 px-6 text-center overflow-hidden relative">
         <div className="container mx-auto max-w-4xl relative z-10">
            <h2 className="editorial-title text-[clamp(2.5rem,10vw,8rem)] text-nova-black mb-16 leading-[0.85]">
               RELEVEZ LE <br />
               <span className="text-nova-violet italic font-light">DÉFI NOVA.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light mb-20 max-w-2xl mx-auto leading-relaxed">
              Que vous ayez déjà un projet ou simplement l’envie d’innover, le Tech Nova Challenge 2026 vous offre l’opportunité de transformer vos idées en solutions concrètes.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
               <Button size="lg" onClick={() => navigate('/participate')}>Je postule maintenant</Button>
               <Button variant="outline" size="lg" onClick={() => navigate('/edition-2026')}>Télécharger le règlement</Button>
            </div>
         </div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-nova-violet/5 blur-[150px] rounded-full" />
      </section>
    </div>
  );
};

export default Edition2026;
