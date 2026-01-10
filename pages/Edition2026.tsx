import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, CheckCircle2, Users, 
  Lightbulb, Rocket, GraduationCap, MapPin, 
  Maximize2, Award, Target,
  FileText, Presentation, Trophy, Briefcase,
  Plane, Coffee, Sparkles
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const MuseumBlock: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative z-10 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const Edition2026: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      
      {/* HEADER CINÉMATIQUE */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          {/* Opacité fortement diminuée : brightness de 0.1 à 0.8 */}
          <img 
            src="https://i.postimg.cc/d1VNnfZx/les_trophées.jpg" 
            alt="Tech Nova Challenge 2026" 
            className="w-full h-full object-cover brightness-[0.8]"
          />
          {/* Overlay allégé */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <MuseumBlock>
            <h1 className="editorial-title text-[clamp(2.5rem,7vw,7rem)] text-white leading-[0.85] mb-12 drop-shadow-2xl">
              LE PARCOURS VERS <br />
              <span className="text-nova-violet italic font-light">L'EXCELLENCE 2026.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-serif italic">
              Une odyssée en quatre actes, méticuleusement orchestrée pour transformer l'ingéniosité béninoise en solutions souveraines.
            </p>
          </MuseumBlock>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40"
        >
           <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* INTRODUCTION STRATÉGIQUE */}
      <section className="py-32 px-6 bg-white border-b border-gray-50">
        <div className="container mx-auto max-w-5xl text-center">
          <MuseumBlock>
            <p className="text-2xl md:text-4xl text-nova-black font-light leading-relaxed font-display">
              L'édition 2026 du <span className="text-nova-violet font-black">TECH NOVA CHALLENGE</span> est un catalyseur de progrès. Chaque étape est un palier d’ascension stratégique conçu pour accompagner les participants de l’idée jusqu’à la réalisation physique, tout en renforçant leur excellence opérationnelle et leur vision entrepreneuriale.
            </p>
          </MuseumBlock>
        </div>
      </section>

      {/* ÉTAPE 1 : CONSTITUTION & INSCRIPTION */}
      <section className="py-48 px-6 bg-nova-gray/10 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <MuseumBlock>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-nova-violet text-white flex items-center justify-center font-black text-xl shadow-lg shadow-nova-violet/20">1</div>
                <span className="text-nova-violet font-black tracking-[0.4em] uppercase text-xs">Phase de Synergie</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black mb-10 leading-none">
                Constitution des binômes et inscriptions
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                Tout commence par la symbiose des talents. La phase de pré-sélection s'initie par la formation de votre équipe d'élite. Vous êtes appelé à constituer votre <span className="text-nova-black font-black italic">binôme de gloire</span> — celui avec qui vous allez franchir chaque obstacle technique et partager la fierté des succès futurs. Cette alliance est le socle de votre réussite.
              </p>
              <div className="p-10 bg-white rounded-[3rem] border border-black/5 shadow-sm space-y-8">
                 <h4 className="text-sm font-black uppercase tracking-widest text-nova-black flex items-center gap-3">
                    <FileText size={18} className="text-nova-violet" /> Formalités Administratives
                 </h4>
                 <ul className="space-y-4">
                    {[
                      "Fiche d’inscription officielle (disponible dans votre espace membre)",
                      "Preuve de scolarité universitaire (carte d'étudiant ou fiche de validation)",
                      "Copie certifiée du CIP (Carte d’Identité Professionnelle)",
                      "Dossier technique préliminaire présentant le projet de réalisation"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-600 text-sm font-medium">
                        <CheckCircle2 size={16} className="text-nova-violet flex-shrink-0 mt-0.5" /> 
                        <span>{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="mt-12">
                <Button size="lg" onClick={() => navigate('/participate')}>Initier la candidature</Button>
              </div>
            </MuseumBlock>
            
            <MuseumBlock delay={0.2} className="hidden lg:block">
               <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl">
                  {/* Mise à jour de l'image de la Phase de Synergie */}
                  <img 
                    src="https://i.postimg.cc/3xVrz94V/binome.jpg" 
                    alt="Phase de Synergie" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-nova-violet/10" />
               </div>
            </MuseumBlock>
          </div>
        </div>
      </section>

      {/* ÉTAPE 2 : ANALYSE & SÉLECTION */}
      <section className="py-48 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
           <MuseumBlock className="text-center mb-24">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-nova-black text-white flex items-center justify-center font-black text-xl">2</div>
                <span className="text-nova-black font-black tracking-[0.4em] uppercase text-xs">Examen des Concepts</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-nova-black leading-none mb-10">
                Analyse et sélection des projets
              </h2>
              <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
                Chaque proposition est soumise au regard expert d'un jury pluridisciplinaire, composé d’experts académiques et industriels. Nous scrutons l’audace, la rigueur et le potentiel de transformation.
              </p>
           </MuseumBlock>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { t: "Pertinence", d: "Capacité de la solution à répondre à un défi sociétal ou industriel concret du Bénin.", icon: <Target className="text-nova-violet" /> },
                { t: "Innovation", d: "Originalité technologique et caractère disruptif face aux paradigmes actuels.", icon: <Lightbulb className="text-nova-violet" /> },
                { t: "Faisabilité", d: "Réalisme des moyens techniques et financiers de mise en œuvre à court terme.", icon: <Rocket className="text-nova-violet" /> },
                { t: "Impact Durable", d: "Contribution au développement durable et impact social positif mesurable.", icon: <Users className="text-nova-violet" /> },
                { t: "Rigueur Narrative", d: "Qualité de la documentation technique et clarté de la démonstration vidéo.", icon: <Presentation className="text-nova-violet" /> }
              ].map((c, i) => (
                <MuseumBlock key={i} delay={i * 0.1}>
                  <div className="p-12 bg-nova-gray/10 rounded-[3rem] h-full border border-black/5 flex flex-col items-center text-center group hover:bg-nova-black hover:text-white transition-all duration-700">
                    <div className="p-4 bg-white rounded-2xl shadow-sm mb-8 group-hover:scale-110 transition-transform">{c.icon}</div>
                    <h3 className="text-xl font-black uppercase mb-4 tracking-tighter">{c.t}</h3>
                    <p className="text-sm font-medium opacity-60 leading-relaxed">{c.d}</p>
                  </div>
                </MuseumBlock>
              ))}
              <MuseumBlock delay={0.5}>
                <div className="p-12 bg-nova-violet rounded-[3rem] h-full flex flex-col items-center justify-center text-center text-white">
                  <Sparkles size={40} className="mb-6" />
                  <p className="text-lg font-bold italic font-serif leading-relaxed">
                    "Nous ne sélectionnons pas seulement des projets, mais des visions capables de forger l'avenir technologique de la nation."
                  </p>
                </div>
              </MuseumBlock>
           </div>
        </div>
      </section>

      {/* ÉTAPE 3 : FORMATION IMMERSIVE */}
      <section className="py-48 px-6 bg-nova-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <MuseumBlock>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-nova-violet text-white flex items-center justify-center font-black text-xl">3</div>
                <span className="text-nova-violet font-black tracking-[0.4em] uppercase text-xs">Accompagnement Élite</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-none">
                Formation immersive et accompagnement
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                Les finalistes intègrent un <span className="text-white font-black italic">parcours d’accompagnement unique</span> au Bénin. Tech Nova Challenge offre une période immersive mêlant découverte de terrain et perfectionnement technique de haut niveau.
              </p>
              
              <div className="space-y-8">
                 <div className="flex gap-6 p-10 bg-white/5 rounded-[2.5rem] border border-white/10 group hover:bg-white/10 transition-all">
                    <MapPin className="text-nova-violet flex-shrink-0" size={28} />
                    <p className="text-base font-medium leading-relaxed">
                      <strong className="text-white block mb-2 uppercase tracking-widest text-[10px]">Visites Stratégiques</strong>
                      Immersion au <span className="text-nova-violet">SCOP de Sèmè City</span>, laboratoire d’innovation de pointe au Bénin, pour explorer les ateliers de prototypage et de fabrication électronique.
                    </p>
                 </div>
                 <div className="flex gap-6 p-10 bg-white/5 rounded-[2.5rem] border border-white/10 group hover:bg-white/10 transition-all">
                    <GraduationCap className="text-nova-violet flex-shrink-0" size={28} />
                    <p className="text-base font-medium leading-relaxed">
                      <strong className="text-white block mb-2 uppercase tracking-widest text-[10px]">Parcours de Savoir</strong>
                      Modules intensifs sur l’art oratoire, l’entrepreneuriat numérique, le prototypage rapide et l'innovation responsable.
                    </p>
                 </div>
              </div>
            </MuseumBlock>
            
            <MuseumBlock delay={0.3}>
               <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer" onClick={() => navigate('/galerie')}>
                  <img src="https://i.postimg.cc/wvzcHcs3/visite_scop1.jpg" alt="Expérience Immersion" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-10 right-10 w-12 h-12 bg-white/95 rounded-full flex items-center justify-center text-nova-black shadow-lg">
                     <Maximize2 size={20} />
                  </div>
               </div>
               <p className="mt-8 text-center text-gray-500 font-serif italic text-lg leading-relaxed">
                  L'archive 2025 : un moment charnière où la théorie a rencontré la matière au SCOP de Sèmè City.
               </p>
            </MuseumBlock>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-nova-violet/5 blur-[150px] rounded-full pointer-events-none" />
      </section>

      {/* ÉTAPE 4 : FINALE & PRIX */}
      <section className="py-48 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <MuseumBlock className="text-center mb-32">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-nova-red text-white flex items-center justify-center font-black text-xl shadow-lg shadow-nova-red/20">4</div>
              <span className="text-nova-red font-black tracking-[0.4em] uppercase text-xs">L'Apothéose</span>
            </div>
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-nova-black leading-none mb-10">
              La Grande Finale et <br /><span className="text-nova-red italic font-light">reconnaissance.</span>
            </h2>
            <p className="text-xl md:text-3xl text-gray-500 font-light max-w-4xl mx-auto leading-relaxed italic font-serif">
              "Ensuite, vous franchirez chaque étape de la compétition jusqu’à remporter le <span className="text-nova-red font-black">gros lot de 500 000 Francs CFA</span>, devant une audience sidérée par votre brio."
            </p>
          </MuseumBlock>

          <div className="grid lg:grid-cols-3 gap-10 mb-24">
             {[
               { rank: "Le Lauréat Suprême", val: "500 000 FCFA", gifts: "Dotation financière + Ordinateurs portables + Trophée d'Excellence + Tableau d'honneur institutionnel." },
               { rank: "Le Dauphin", val: "300 000 FCFA", gifts: "Dotation financière + Trophée de mérite + Attestation officielle + Tableau d'honneur." },
               { rank: "Le Podium", val: "200 000 FCFA", gifts: "Dotation financière + Trophée de mérite + Attestation officielle + Tableau d'honneur." }
             ].map((p, i) => (
               <MuseumBlock key={i} delay={i * 0.1}>
                 <div className={`p-14 rounded-[4rem] border ${i === 0 ? 'bg-nova-red text-white border-nova-red shadow-2xl scale-105 z-10' : 'bg-white text-nova-black border-black/10 shadow-sm'} flex flex-col h-full group hover:-translate-y-2 transition-all duration-700`}>
                    <Trophy className={`mb-10 ${i === 0 ? 'text-white' : 'text-nova-red'}`} size={48} />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-70">{p.rank}</span>
                    <h3 className="text-5xl font-black mb-10 tracking-tighter">{p.val}</h3>
                    <p className={`text-sm font-medium leading-relaxed italic ${i === 0 ? 'text-white/80' : 'text-gray-400'}`}>{p.gifts}</p>
                 </div>
               </MuseumBlock>
             ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {["Innovation Féminine", "Impact Social", "Solution la plus Originale", "Meilleure Présentation Orale"].map((p, i) => (
               <MuseumBlock key={i} delay={i * 0.1}>
                 <div className="p-10 bg-nova-gray/10 rounded-[2.5rem] border border-black/5 text-center flex flex-col items-center group hover:bg-nova-black hover:text-white transition-all duration-500">
                    <Award className="text-nova-violet mb-4 group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-relaxed">{p}</span>
                 </div>
               </MuseumBlock>
             ))}
          </div>
        </div>
      </section>

      {/* BÉNÉFICES INSTITUTIONNELS */}
      <section className="py-48 px-6 bg-nova-gray/10 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <MuseumBlock className="mb-24 text-center">
            <h2 className="text-4xl md:text-7xl font-black uppercase text-nova-black leading-none tracking-tighter">
              Des bénéfices <br />
              <span className="text-nova-violet italic font-light">fondés sur l'excellence.</span>
            </h2>
          </MuseumBlock>
          
          <div className="grid md:grid-cols-2 gap-16">
            {[
              { t: "Prise en charge Holistique", d: "Formation de 3 jours gratuite avec transport, hébergement et restauration d'exception pour tous les finalistes.", icon: <Plane /> },
              { t: "Réseaux d'Élite", d: "Accès privilégié aux réseaux professionnels de nos partenaires industriels et potentiels investisseurs.", icon: <Briefcase /> },
              { t: "Rayonnement National", d: "Une exposition médiatique d'envergure nationale valorisant votre génie et celui de votre institution d'origine.", icon: <Users /> },
              { t: "Accélération de Projet", d: "Opportunités concrètes d'incubation ou de financement pour les solutions présentant le plus fort potentiel commercial.", icon: <Rocket /> },
              { t: "Validation de Compétences", d: "Une attestation de mérite reconnue par les partenaires institutionnels pour booster votre employabilité.", icon: <CheckCircle2 /> },
              { t: "Bien-être & Synergie", d: "Échanges privilégiés avec des mentors et des experts dans un cadre propice à l'émulation intellectuelle.", icon: <Coffee /> }
            ].map((item, i) => (
              <MuseumBlock key={i} delay={i * 0.1}>
                <div className="flex gap-10 items-start group">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-nova-violet shadow-sm flex-shrink-0 group-hover:bg-nova-violet group-hover:text-white transition-all duration-700">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase mb-3 text-nova-black tracking-tight">{item.t}</h4>
                    <p className="text-lg text-nova-black/60 leading-relaxed font-medium">
                      {item.d}
                    </p>
                  </div>
                </div>
              </MuseumBlock>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL */}
      <section className="py-64 bg-gray-50 px-6 text-center relative overflow-hidden">
         <div className="container mx-auto max-w-4xl relative z-10">
            <MuseumBlock>
              <h2 className="editorial-title text-[clamp(2.5rem,10vw,8rem)] text-nova-black mb-16 leading-[0.85] !drop-shadow-none">
                 L'AVENIR EST <br />
                 <span className="text-nova-violet italic font-light">À VOTRE PORTÉE.</span>
              </h2>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                 <Button size="lg" onClick={() => navigate('/participate')}>Candidater maintenant</Button>
                 <div className="text-nova-violet font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center cursor-pointer border-b border-nova-violet/30 pb-1">Lire le règlement 2026</div>
              </div>
            </MuseumBlock>
         </div>
         <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-nova-violet/5 blur-[120px] rounded-full" />
      </section>

      {/* FOOTER SILENCE */}
      <footer className="py-24 text-center border-t border-black/5 bg-white">
         <p className="text-[10px] font-black tracking-[0.8em] text-nova-black/20 uppercase font-display">
            Tech Nova Challenge — Innovation, Excellence, Bénin.
         </p>
      </footer>
    </div>
  );
};

export default Edition2026;