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
            className="w-full h-full object-cover brightness-50"
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
              DONNEZ UNE CHANCE <br />
              <span className="text-nova-violet italic font-light">À VOTRE BINÔME.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              L'opportunité est là, saisissez-la ! Descendez pour découvrir toutes les infos qui vont booster votre projet.
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
                NOTRE ÉDITION <br />
                <span className="text-nova-violet italic font-light text-2xl md:text-5xl uppercase">EXCLUSIVE 2026</span>
              </h2>
              <div className="text-xl text-gray-500 font-light leading-relaxed space-y-8 mb-16">
                <p>
                  Cette année, on te met au défi de réfléchir à comment les nouvelles technologies peuvent créer des entreprises durables au Bénin.
                </p>
                <p>
                  Propose-nous des projets cool avec de l'intelligence artificielle, des objets connectés, des énergies vertes ou de la biotech. Laisse parler ta créativité !
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <GlassCard className="p-12 border-nova-violet/10 bg-nova-violet/5">
                <h3 className="text-xl font-black uppercase mb-8 text-nova-black">Ce qu'on cherche :</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 text-sm text-gray-500 font-light">
                    <CheckCircle2 size={18} className="text-nova-violet flex-shrink-0" />
                    <span>Des solutions qui font du bien à la société et à la planète</span>
                  </li>
                  <li className="flex gap-4 text-sm text-gray-500 font-light">
                    <CheckCircle2 size={18} className="text-nova-violet flex-shrink-0" />
                    <span>Des projets qui répondent vraiment aux besoins du Bénin</span>
                  </li>
                  <li className="flex gap-4 text-sm text-gray-500 font-light">
                    <CheckCircle2 size={18} className="text-nova-violet flex-shrink-0" />
                    <span>Des innovations accessibles à tous et responsables</span>
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : CE QUI CHANGE EN 2026 */}
      <section className="py-48 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <header className="mb-32 text-center">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-nova-black leading-none mb-8">
              LES GROSSES NOUVEAUTÉS <br /> <span className="text-nova-violet italic font-light">2026</span>
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
                <span className="text-xs font-black uppercase tracking-[0.3em]">Pour Tout le Bénin</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-nova-black">On ouvre à tout le pays !</h3>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                Plus limité à quelques écoles ! Maintenant, tous les étudiants du Bénin peuvent participer. Montre-nous de quoi tu es capable, peu importe d'où tu viens.
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
                <span className="text-xs font-black uppercase tracking-[0.3em]">On t'accompagne Vraiment</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-nova-black">5 mois pour créer ton projet</h3>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                On te donne le temps de bien faire les choses ! Avec nos experts, tu vas prototyper et tester ton projet. Pas juste une idée sur papier, un vrai prototype qui marche.
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
                <span className="text-xs font-black uppercase tracking-[0.3em]">Des Prix de Fou</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-nova-black">Jusqu'à 500.000 FCFA à gagner !</h3>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                Le premier prix c'est un demi-million + des ordis portables ! Et ta fac sera fière de toi avec un tableau d'honneur. C'est le moment de briller.
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
                <span className="text-xs font-black uppercase tracking-[0.3em]">Tu restes dans la Famille</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-nova-black">Rejoins notre réseau VIP</h3>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                Après le concours, c'est pas fini ! Tu intégreras notre réseau "Tech Nova Alumni" avec des opportunités de stage, de financement et de rencontre avec des pros.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 : COMMENT PARTICIPER */}
      <section className="py-48 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-24">
              <div>
                 <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-nova-black">TU VEUX PARTICIPER ? <br /><span className="text-nova-violet italic font-light">C'EST PAR ICI !</span></h2>
                 <div className="space-y-12">
                    <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
                       <h4 className="text-lg font-black uppercase mb-8 text-nova-black flex items-center gap-3">
                          <Users className="text-nova-violet" size={20} /> Tu dois :
                       </h4>
                       <ul className="space-y-4 text-gray-500 font-light text-sm">
                          <li>• Avoir entre 15 et 25 ans</li>
                          <li>• Venir avec ton binôme (2 personnes max)</li>
                          <li>• Être étudiant(e) au Bénin</li>
                          <li>• Avoir un projet tech qui peut changer les choses</li>
                       </ul>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                       <Button size="lg" onClick={() => navigate('/participate')}>Je m'inscris maintenant !</Button>
                       <div className="flex items-center gap-3 text-nova-violet font-black uppercase tracking-widest text-[10px] mx-auto cursor-pointer">
                          <Download size={14} /> Télécharger le dossier d'inscription
                       </div>
                    </div>
                 </div>
              </div>

              <div className="relative">
                 <GlassCard className="p-12 border-nova-black/5">
                    <h3 className="text-xl font-black uppercase mb-10 text-nova-black flex items-center gap-3">
                       <FileText className="text-nova-violet" size={20} /> Les papiers à préparer
                    </h3>
                    <ul className="space-y-4">
                       {[
                         "Ta fiche d'inscription",
                         "Ta carte d'étudiant",
                         "Une pièce d'identité",
                         "La description de ton projet (5 pages max)",
                         "Une petite vidéo pour nous présenter ton idée"
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

      {/* SECTION 5 : CE QUE TU GAGNES */}
      <section className="py-48 px-6 bg-nova-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <header className="text-center mb-32">
             <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8">À Gagner</span>
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">LES PRIX <span className="text-nova-violet italic font-light">2026</span></h2>
          </header>

          <div className="grid lg:grid-cols-3 gap-8 mb-24">
             <motion.div whileHover={{ y: -10 }} className="p-12 bg-nova-violet/10 border-2 border-nova-violet rounded-[3rem] flex flex-col">
                <div className="text-3xl font-black text-nova-violet mb-4">🥇 500.000 <span className="text-sm">FCFA</span></div>
                <h3 className="text-2xl font-black uppercase mb-8">1er Prix</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 flex-grow">Des ordis portables + incubation pour lancer ton projet + le trophée !</p>
                <div className="pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-nova-violet">Champion National</div>
             </motion.div>

             <motion.div whileHover={{ y: -10 }} className="p-12 bg-white/5 border border-white/10 rounded-[3rem] flex flex-col">
                <div className="text-3xl font-black text-white mb-4">🥈 300.000 <span className="text-sm">FCFA</span></div>
                <h3 className="text-2xl font-black uppercase mb-8">2ème Prix</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 flex-grow">Trophée + attestation officielle + coaching personnalisé.</p>
             </motion.div>

             <motion.div whileHover={{ y: -10 }} className="p-12 bg-white/5 border border-white/10 rounded-[3rem] flex flex-col">
                <div className="text-3xl font-black text-white mb-4">🥉 200.000 <span className="text-sm">FCFA</span></div>
                <h3 className="text-2xl font-black uppercase mb-8">3ème Prix</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 flex-grow">Attestation + accès à tous nos ateliers exclusifs.</p>
             </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               "Meilleur Projet Féminin", 
               "Plus Grand Impact Social", 
               "Idée la Plus Originale", 
               "Meilleure Présentation"
             ].map((p, i) => (
               <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center text-center">
                  <Star className="text-nova-violet mb-4" size={20} />
                  <div className="text-xs font-black uppercase tracking-widest mb-2">{p}</div>
                  <div className="text-lg font-black text-nova-violet">Prix Spécial</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 : QUESTIONS */}
      <section className="py-48 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
           <h2 className="text-4xl font-black uppercase tracking-tighter text-nova-black mb-24">QUESTIONS ? ON RÉPOND.</h2>
           <div className="space-y-4">
              <FAQItem 
                question="C'est payant ?" 
                answer="Non, c'est totalement gratuit ! Le concours est 100% pris en charge pour tous les étudiants du Bénin." 
              />
              <FAQItem 
                question="Mon projet est encore qu'une idée, c'est OK ?" 
                answer="Oui, carrément ! L'important c'est l'idée. On t'aidera à la développer et à en faire un prototype pendant le concours." 
              />
              <FAQItem 
                question="Comment vous choisissez les gagnants ?" 
                answer="Un jury de pros (professeurs et entrepreneurs) regarde : ton idée est-elle innovante ? Réalisable ? Et est-ce que ça peut aider le Bénin ?" 
              />
           </div>
        </div>
      </section>

      {/* SECTION 7 : DERNIER APPEL */}
      <section className="py-64 bg-gray-50 px-6 text-center relative overflow-hidden">
         <div className="container mx-auto max-w-4xl relative z-10">
            <h2 className="editorial-title text-[clamp(2.5rem,10vw,8rem)] text-nova-black mb-16 leading-[0.85]">
               PRÊT À <br />
               <span className="text-nova-violet italic font-light">CHANGER LE JEU ?</span>
            </h2>
            <p className="text-xl text-gray-400 font-light mb-20 max-w-2xl mx-auto leading-relaxed">
              Transforme tes skills tech en un vrai projet qui peut impacter le Bénin. C'est ton moment.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
               <Button size="lg" onClick={() => navigate('/participate')}>Je postule maintenant !</Button>
               <div className="text-nova-violet font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center cursor-pointer">Voir le règlement complet</div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Edition2026;