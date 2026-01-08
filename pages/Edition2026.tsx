
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Award, CheckCircle2, HelpCircle, 
  ArrowDown, Cpu, Leaf, Lightbulb, Users, 
  FileText, Download, Rocket, ChevronDown, 
  ChevronUp, GraduationCap, Briefcase, Star,
  Microscope, Trophy, Quote, Target, ShieldCheck,
  Search, Presentation
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
      
      {/* SECTION 1 : HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Edition 2026" 
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
              Session Nationale 2026
            </span>
            <h1 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] text-white leading-[0.85] mb-12">
              L'AVENIR EN <br />
              <span className="text-nova-violet italic font-light">CONSTRUCTION.</span>
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

      {/* SECTION 2 : THÈME DE L'ANNÉE */}
      <section className="py-48 px-6 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7">
              <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-10">Orientation 2026</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black leading-none mb-12">
                TECHNOLOGIES <br />
                <span className="text-nova-violet italic font-light text-2xl md:text-5xl uppercase">ÉMERGENTES & DURABILITÉ.</span>
              </h2>
              <div className="text-xl text-gray-500 font-light leading-relaxed space-y-8 mb-16">
                <p>
                  Pour l’édition 2026, le Tech Nova Challenge invite les jeunes à réfléchir à la manière dont les technologies émergentes peuvent soutenir le développement d’un entrepreneuriat durable au Bénin.
                </p>
                <p>
                  Les participants sont encouragés à proposer des projets utilisant, entre autres, l’intelligence artificielle, l’Internet des objets (IoT), les énergies renouvelables, la biotechnologie ou le numérique responsable.
                </p>
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
                    <span>Solutions adaptées aux réalités et besoins locaux.</span>
                  </li>
                  <li className="flex gap-4 text-sm text-gray-500 font-light">
                    <CheckCircle2 size={18} className="text-nova-violet flex-shrink-0" />
                    <span>Promotion d'une innovation inclusive.</span>
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : CALENDRIER DÉTAILLÉ */}
      <section className="py-48 px-6 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <header className="mb-24 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black mb-6">L'AGENDA 2026</h2>
            <p className="text-gray-400 font-light text-xl tracking-tight">Les grandes étapes de l’édition</p>
          </header>

          <div className="space-y-12">
            {[
              { 
                date: "Janvier – Février 2026", 
                title: "Lancement et inscriptions", 
                points: ["Ouverture des inscriptions en ligne", "Tournées de présentation dans les établissements", "Campagnes de communication (médias et réseaux sociaux)"] 
              },
              { 
                date: "Mars 2026", 
                title: "Pré-sélection et accompagnement", 
                points: ["Dépôt des dossiers de projets", "Évaluation par le comité technique", "Sélection des 20 meilleurs binômes", "Début du mentorat avec des experts"] 
              },
              { 
                date: "Avril 2026", 
                title: "Réalisation et prototypage", 
                points: ["Ateliers de formation technique", "Développement des prototypes ou maquettes", "Suivi par les encadreurs", "Sessions de préparation au pitch"] 
              },
              { 
                date: "Mai 2026", 
                title: "Grande finale", 
                points: ["Présentation publique des projets devant un jury", "Démonstrations des solutions développées", "Cérémonie officielle de remise des prix"] 
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

      {/* SECTION 4 : COMMENT PARTICIPER ? */}
      <section className="py-48 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-24">
              <div>
                 <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-nova-black">MODALITÉS DE <br /><span className="text-nova-violet italic font-light">PARTICIPATION.</span></h2>
                 <p className="text-xl text-gray-500 font-light mb-12">Vous êtes étudiant(e) et vous avez une idée innovante ?</p>
                 <div className="space-y-12">
                    <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
                       <h4 className="text-lg font-black uppercase mb-8 text-nova-black flex items-center gap-3">
                          <Users className="text-nova-violet" size={20} /> Conditions
                       </h4>
                       <ul className="space-y-4 text-gray-500 font-light text-sm">
                          <li>• Être âgé(e) de 15 à 25 ans</li>
                          <li>• Inscrit(e) dans un établissement d’enseignement supérieur au Bénin</li>
                          <li>• Participation en binôme (même spécialité ou différentes)</li>
                          <li>• Avoir validé l’année académique en cours</li>
                          <li>• Projet innovant, réalisable et à impact positif</li>
                       </ul>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                       <Button size="lg" onClick={() => navigate('/participate')}>Je m'inscris en ligne</Button>
                       <div className="flex items-center gap-3 text-nova-violet font-black uppercase tracking-widest text-[10px] mx-auto cursor-pointer hover:text-nova-black transition-colors">
                          <Download size={14} /> Télécharger le dossier de candidature
                       </div>
                    </div>
                 </div>
              </div>

              <div className="relative">
                 <GlassCard className="p-12 border-nova-black/5">
                    <h3 className="text-xl font-black uppercase mb-10 text-nova-black flex items-center gap-3">
                       <FileText className="text-nova-violet" size={20} /> Pièces à fournir (PDF)
                    </h3>
                    <ul className="space-y-4">
                       {[
                         "Fiche d’inscription complétée",
                         "Attestation de validation académique",
                         "Copie de la carte d’étudiant (CIP)",
                         "Acte de naissance",
                         "Photo d’identité",
                         "Description du projet (5 pages max)",
                         "Vidéo de présentation (3 min, optionnelle)"
                       ].map((item, i) => (
                         <li key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0 group">
                            <span className="text-sm font-light text-gray-500 group-hover:text-nova-black transition-colors">{item}</span>
                            <CheckCircle2 size={16} className="text-gray-100 group-hover:text-nova-violet transition-colors" />
                         </li>
                       ))}
                    </ul>
                 </GlassCard>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 5 : PRIX ET RÉCOMPENSES */}
      <section className="py-48 px-6 bg-nova-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <header className="text-center mb-32">
             <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8">Récompenser l'Excellence</span>
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">PRIX <span className="text-nova-violet italic font-light">& DISTINCTIONS.</span></h2>
          </header>

          <div className="grid lg:grid-cols-3 gap-8 mb-24">
             {/* 1er Prix */}
             <motion.div whileHover={{ y: -10 }} className="p-12 bg-nova-violet/10 border-2 border-nova-violet rounded-[3rem] relative overflow-hidden flex flex-col">
                <div className="text-3xl font-black text-nova-violet mb-4">🥇 500.000 <span className="text-sm uppercase tracking-widest">FCFA</span></div>
                <h3 className="text-2xl font-black uppercase mb-8">Premier Prix</h3>
                <ul className="space-y-4 text-gray-400 text-sm font-light mb-12 flex-grow">
                   <li>• Ordinateur portable par membre</li>
                   <li>• Incubation Sèmè City (6 mois)</li>
                   <li>• Trophée et attestation de mérite</li>
                   <li>• Tableau d’honneur pour l’établissement</li>
                </ul>
                <div className="pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-nova-violet">
                   Grand Lauréat 2026
                </div>
             </motion.div>

             {/* 2ème Prix */}
             <motion.div whileHover={{ y: -10 }} className="p-12 bg-white/5 border border-white/10 rounded-[3rem] flex flex-col">
                <div className="text-3xl font-black text-white mb-4">🥈 300.000 <span className="text-sm uppercase tracking-widest">FCFA</span></div>
                <h3 className="text-2xl font-black uppercase mb-8">Deuxième Prix</h3>
                <ul className="space-y-4 text-gray-400 text-sm font-light mb-12 flex-grow">
                   <li>• Trophée et attestation de mérite</li>
                   <li>• Mentorat professionnel</li>
                   <li>• Tableau d’honneur pour l’université</li>
                </ul>
             </motion.div>

             {/* 3ème Prix */}
             <motion.div whileHover={{ y: -10 }} className="p-12 bg-white/5 border border-white/10 rounded-[3rem] flex flex-col">
                <div className="text-3xl font-black text-white mb-4">🥉 200.000 <span className="text-sm uppercase tracking-widest">FCFA</span></div>
                <h3 className="text-2xl font-black uppercase mb-8">Troisième Prix</h3>
                <ul className="space-y-4 text-gray-400 text-sm font-light mb-12 flex-grow">
                   <li>• Trophée et attestation de mérite</li>
                   <li>• Formation entrepreneuriat certifiante</li>
                </ul>
             </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {["Prix Innovation Féminine", "Impact Social", "Solution Originale", "Meilleure Présentation"].map((p, i) => (
               <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center text-center">
                  <Star className="text-nova-violet mb-4" size={20} />
                  <div className="text-xs font-black uppercase tracking-widest mb-2">{p}</div>
                  <div className="text-lg font-black text-nova-violet">100.000 FCFA</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 : FORMATION ET ACCOMPAGNEMENT */}
      <section className="py-48 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-5">
                 <img 
                   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                   alt="Formation" 
                   className="rounded-[3rem] grayscale"
                 />
              </div>
              <div className="lg:col-span-7">
                 <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 text-nova-black leading-none">UN PARCOURS <br /><span className="text-nova-violet italic font-light text-2xl md:text-5xl uppercase">POUR VOS COMPÉTENCES.</span></h2>
                 <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                   Bénéficiez d’un accompagnement complet : formations présentielles, ateliers techniques de prototypage, mentorat personnalisé et opportunités de réseautage stratégique.
                 </p>
                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex gap-4 items-start">
                       <GraduationCap className="text-nova-violet" size={24} />
                       <div>
                          <h4 className="font-black uppercase text-xs mb-1">Formations</h4>
                          <p className="text-xs text-gray-400">Prise de parole, business model, gestion de projet.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <Cpu className="text-nova-violet" size={24} />
                       <div>
                          <h4 className="font-black uppercase text-xs mb-1">Ateliers Tech</h4>
                          <p className="text-xs text-gray-400">Prototypage, design thinking, propriété intellectuelle.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 7 : JURY ET CRITÈRES */}
      <section className="py-48 px-6 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-24">
              <div className="space-y-12">
                 <h2 className="text-3xl font-black uppercase tracking-tighter text-nova-black leading-none">JURY <span className="text-nova-violet">&</span> CRITÈRES.</h2>
                 <div className="p-10 bg-white rounded-[2.5rem] shadow-xl border border-gray-100">
                    <h3 className="text-xl font-black uppercase mb-8 text-nova-black">Évaluation professionnelle</h3>
                    <ul className="space-y-4 text-gray-500 font-light text-sm">
                       <li>• Enseignants-chercheurs de référence</li>
                       <li>• Représentants du secteur privé</li>
                       <li>• Entrepreneurs Alumni Tech Nova</li>
                       <li>• Experts en innovation et durabilité</li>
                    </ul>
                 </div>
              </div>

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
                      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} whileInView={{ width: c.val }} className="h-full bg-nova-violet" />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 8 : TÉMOIGNAGES */}
      <section className="py-48 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
           <Quote className="text-nova-violet/20 mx-auto mb-16" size={64} />
           <div className="space-y-16">
              <p className="text-2xl font-light italic text-gray-500 leading-relaxed">
                « Grâce au Tech Nova Challenge, notre projet de motopompe intelligente a été reconnu et financé. Aujourd’hui, nous collaborons avec des agriculteurs locaux. »
              </p>
              <div className="text-[10px] font-black uppercase tracking-widest text-nova-violet">— Lauréats 2025</div>
           </div>
        </div>
      </section>

      {/* SECTION 9 : FAQ */}
      <section className="py-48 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
           <h2 className="text-4xl font-black uppercase tracking-tighter text-nova-black mb-24">QUESTIONS FRÉQUENTES.</h2>
           <div className="space-y-4">
              <FAQItem question="Peut-on participer seul(e) ?" answer="Non, la participation se fait obligatoirement en binôme pour favoriser la collaboration." />
              <FAQItem question="Les projets doivent-ils être déjà développés ?" answer="Non, une idée bien structurée suffit au départ. Le prototypage intervient après la sélection." />
              <FAQItem question="Y a-t-il des frais d’inscription ?" answer="Non, la participation est entièrement gratuite." />
              <FAQItem question="Toutes les filières peuvent-elles participer ?" answer="Oui, toutes les filières sont acceptées." />
              <FAQItem question="À quoi servent les fonds issus des votes payants ?" answer="Ils contribuent au financement des prix, de la logistique et de l’accompagnement." />
           </div>
        </div>
      </section>

      {/* SECTION 10 : CALL TO ACTION */}
      <section className="py-64 bg-gray-50 px-6 text-center overflow-hidden relative">
         <div className="container mx-auto max-w-4xl relative z-10">
            <h2 className="editorial-title text-[clamp(2.5rem,10vw,8rem)] text-nova-black mb-16 leading-[0.85]">
               RELEVEZ LE <br />
               <span className="text-nova-violet italic font-light">DÉFI 2026.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light mb-20 max-w-2xl mx-auto leading-relaxed">
              Transformez vos idées en solutions concrètes pour le Bénin de demain.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
               <Button size="lg" onClick={() => navigate('/participate')}>Je postule maintenant</Button>
               <div className="text-nova-violet font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center cursor-pointer">Télécharger le règlement</div>
            </div>
         </div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-nova-violet/5 blur-[150px] rounded-full" />
      </section>
    </div>
  );
};

export default Edition2026;
