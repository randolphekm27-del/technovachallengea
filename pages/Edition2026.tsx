
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Award, CheckCircle2, 
  ArrowDown, Cpu, Download, Rocket, ChevronDown, 
  ChevronUp, GraduationCap, Star,
  Trophy, Quote, FileText, Users, Search, Presentation,
  Globe
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
      
      {/* SECTION 1 : HEADER */}
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
            <h1 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] text-white leading-[0.85] mb-12">
              VDONNEZ UNE CHANCE <br />
              <span className="text-nova-violet italic font-light">A COTRE BINOME.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Alors saisissez l'opportunitté maintenant. Scrolle en bas pour prendre les bonnes informations qui t'aideront.
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
      <section className="py-48 px-6 bg-white relative border-b border-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black leading-none mb-12">
                POUR CETTE EDITION <br />
                <span className="text-nova-violet italic font-light text-2xl md:text-5xl uppercase">EXCLUSIVE 2026.</span>
              </h2>
              <div className="text-xl text-gray-500 font-light leading-relaxed space-y-8 mb-16">
                <p>
                  Le Tech Nova Challenge invite les jeunes à réfléchir à la manière dont les technologies émergentes peuvent soutenir le développement d’un entrepreneuriat durable au Bénin.
                </p>
                <p>
                  Les participants sont encouragés à proposer des projets utilisant l’intelligence artificielle, l’Internet des objets (IoT), les énergies renouvelables ou la biotechnologie.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <GlassCard className="p-12 border-nova-violet/10 bg-nova-violet/5">
                <h3 className="text-xl font-black uppercase mb-8 text-nova-black">Objectifs du thème</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 text-sm text-gray-500 font-light">
                    <CheckCircle2 size={18} className="text-nova-violet flex-shrink-0" />
                    <span>Générer un impact social et environnemental positif.</span>
                  </li>
                  <li className="flex gap-4 text-sm text-gray-500 font-light">
                    <CheckCircle2 size={18} className="text-nova-violet flex-shrink-0" />
                    <span>Développer des solutions adaptées aux réalités locales.</span>
                  </li>
                  <li className="flex gap-4 text-sm text-gray-500 font-light">
                    <CheckCircle2 size={18} className="text-nova-violet flex-shrink-0" />
                    <span>Promouvoir une innovation inclusive et responsable.</span>
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : ÉVOLUTIONS & PROGRAMME 2026 (RESTRUCTURÉE) */}
      <section className="py-48 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <header className="mb-32 text-center">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-nova-black leading-none mb-8">
              PROGRAMME & <br /> <span className="text-nova-violet italic font-light">NOUVEAUTÉS.</span>
            </h2>
            <div className="h-1 w-24 bg-nova-violet mx-auto" />
          </header>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-32">
            {/* BLOC 1 : ÉLARGISSEMENT */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 text-nova-violet">
                <Globe size={24} />
                <span className="text-xs font-black uppercase tracking-[0.3em]">Portée Nationale</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-nova-black">Élargir le cadre institutionnel.</h3>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                Le concours amplifie son impact par une ouverture nationale explicite. L'objectif est de mobiliser l’ensemble des établissements d’enseignement supérieur du Bénin, dépassant le cadre initial des écoles fondatrices pour identifier les talents sur tout le territoire.
              </p>
            </motion.div>

            {/* BLOC 2 : PARCOURS & PROTOTYPAGE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 text-nova-violet">
                <Cpu size={24} />
                <span className="text-xs font-black uppercase tracking-[0.3em]">Accompagnement Technique</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-nova-black">Structurer le développement.</h3>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                Le parcours des candidats s’étend désormais sur cinq mois, de janvier à mai. Cette période intègre une phase critique dédiée au prototypage et à la conception de maquettes fonctionnelles, sous la supervision directe d'experts techniques et de mentors industriels.
              </p>
            </motion.div>

            {/* BLOC 3 : RÉCOMPENSES */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 text-nova-violet">
                <Trophy size={24} />
                <span className="text-xs font-black uppercase tracking-[0.3em]">Excellence Revalorisée</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-nova-black">Récompenser l'innovation réelle.</h3>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                Les dotations financières sont substantiellement revalorisées avec un premier prix de 500 000 FCFA. Le podium bénéficie également d'ordinateurs portables et de tableaux d'honneur institutionnels pour leurs universités respectives, valorisant ainsi le mérite académique.
              </p>
            </motion.div>

            {/* BLOC 4 : ALUMNI */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 text-nova-violet">
                <Rocket size={24} />
                <span className="text-xs font-black uppercase tracking-[0.3em]">Pérennité</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-nova-black">Bâtir une communauté durable.</h3>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                La création du réseau « Tech Nova Alumni » assure le suivi post-concours. Cette initiative vise à maintenir une communauté d'innovateurs capable de transformer les projets lauréats en véritables entreprises technologiques contributeurs à l'économie nationale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 : MODALITÉS */}
      <section className="py-48 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-24">
              <div>
                 <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-nova-black">QUELLES SONT LES MODALITES DE <br /><span className="text-nova-violet italic font-light">PARTICIPATION ? </span></h2>
                 <div className="space-y-12">
                    <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
                       <h4 className="text-lg font-black uppercase mb-8 text-nova-black flex items-center gap-3">
                          <Users className="text-nova-violet" size={20} /> Conditions
                       </h4>
                       <ul className="space-y-4 text-gray-500 font-light text-sm">
                          <li>• Être âgé(e) de 15 à 25 ans</li>
                          <li>• Inscription obligatoire en binôme</li>
                          <li>• Inscription dans un établissement supérieur au Bénin</li>
                          <li>• Présenter une solution technologique à impact social</li>
                       </ul>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                       <Button size="lg" onClick={() => navigate('/participate')}>Candidater en ligne</Button>
                       <div className="flex items-center gap-3 text-nova-violet font-black uppercase tracking-widest text-[10px] mx-auto cursor-pointer">
                          <Download size={14} /> Télécharger le dossier complet
                       </div>
                    </div>
                 </div>
              </div>

              <div className="relative">
                 <GlassCard className="p-12 border-nova-black/5">
                    <h3 className="text-xl font-black uppercase mb-10 text-nova-black flex items-center gap-3">
                       <FileText className="text-nova-violet" size={20} /> Pièces à fournir
                    </h3>
                    <ul className="space-y-4">
                       {[
                         "Fiche d’inscription officielle",
                         "Preuve d'inscription académique",
                         "Copie du CIP ou de la carte d’étudiant",
                         "Description technique du projet (5 pages)",
                         "Maquette ou vidéo de présentation"
                       ].map((item, i) => (
                         <li key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                            <span className="text-sm font-light text-gray-500">{item}</span>
                            <CheckCircle2 size={16} className="text-nova-violet" />
                         </li>
                       ))}
                    </ul>
                 </GlassCard>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 5 : DOTATIONS DÉTAILLÉES */}
      <section className="py-48 px-6 bg-nova-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <header className="text-center mb-32">
             <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8">Palmarès & Récompenses</span>
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">LES PRIX <span className="text-nova-violet italic font-light">2026.</span></h2>
          </header>

          <div className="grid lg:grid-cols-3 gap-8 mb-24">
             <motion.div whileHover={{ y: -10 }} className="p-12 bg-nova-violet/10 border-2 border-nova-violet rounded-[3rem] flex flex-col">
                <div className="text-3xl font-black text-nova-violet mb-4">🥇 500.000 <span className="text-sm">FCFA</span></div>
                <h3 className="text-2xl font-black uppercase mb-8">Premier Prix</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 flex-grow">Ordinateurs portables pour le binôme, incubation stratégique et trophée d'excellence.</p>
                <div className="pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-nova-violet">Grand Lauréat National</div>
             </motion.div>

             <motion.div whileHover={{ y: -10 }} className="p-12 bg-white/5 border border-white/10 rounded-[3rem] flex flex-col">
                <div className="text-3xl font-black text-white mb-4">🥈 300.000 <span className="text-sm">FCFA</span></div>
                <h3 className="text-2xl font-black uppercase mb-8">Deuxième Prix</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 flex-grow">Trophée officiel, attestation de mérite et mentorat personnalisé.</p>
             </motion.div>

             <motion.div whileHover={{ y: -10 }} className="p-12 bg-white/5 border border-white/10 rounded-[3rem] flex flex-col">
                <div className="text-3xl font-black text-white mb-4">🥉 200.000 <span className="text-sm">FCFA</span></div>
                <h3 className="text-2xl font-black uppercase mb-8">Troisième Prix</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 flex-grow">Attestation de réussite et accès aux ateliers thématiques.</p>
             </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {["Innovation Féminine", "Impact Social", "Solution Originale", "Meilleure Présentation"].map((p, i) => (
               <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center text-center">
                  <Star className="text-nova-violet mb-4" size={20} />
                  <div className="text-xs font-black uppercase tracking-widest mb-2">{p}</div>
                  <div className="text-lg font-black text-nova-violet">Dotation Spéciale</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 : FAQ */}
      <section className="py-48 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
           <h2 className="text-4xl font-black uppercase tracking-tighter text-nova-black mb-24">QUESTIONS FRÉQUENTES.</h2>
           <div className="space-y-4">
              <FAQItem question="La participation est-elle gratuite ?" answer="Oui, le Tech Nova Challenge est entièrement gratuit pour tous les étudiants inscrits au Bénin." />
              <FAQItem question="Quel est le niveau de maturité requis ?" answer="Nous acceptons les idées dès la phase conceptuelle. L'accompagnement vous aidera à prototyper votre solution." />
              <FAQItem question="Comment s'opère la sélection ?" answer="Un jury composé d'académiques et d'industriels évalue l'innovation, la faisabilité et l'impact social du projet." />
           </div>
        </div>
      </section>

      {/* SECTION 7 : FINAL CTA */}
      <section className="py-64 bg-gray-50 px-6 text-center relative overflow-hidden">
         <div className="container mx-auto max-w-4xl relative z-10">
            <h2 className="editorial-title text-[clamp(2.5rem,10vw,8rem)] text-nova-black mb-16 leading-[0.85]">
               RELEVEZ LE <br />
               <span className="text-nova-violet italic font-light">DÉFI 2026.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light mb-20 max-w-2xl mx-auto leading-relaxed">
              Transformez votre potentiel technologique en réalité entrepreneuriale au service du Bénin.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
               <Button size="lg" onClick={() => navigate('/participate')}>Postuler maintenant</Button>
               <div className="text-nova-violet font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center cursor-pointer">Lire le règlement 2026</div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Edition2026;
