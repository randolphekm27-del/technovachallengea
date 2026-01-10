import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, CheckCircle2, Users, Search, 
  Lightbulb, Rocket, GraduationCap, MapPin, 
  Maximize2, Award, ClipboardCheck, Target,
  FileText, Presentation, Trophy, Briefcase,
  Heart, Sparkles, Coffee, Plane
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
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000" 
            alt="Tech Nova Challenge 2026" 
            className="w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white" />
        </motion.div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <MuseumBlock>
            <h1 className="editorial-title text-[clamp(2.5rem,7vw,7rem)] text-white leading-[0.85] mb-12 drop-shadow-2xl">
              DÉROULEMENT DU CONCOURS <br />
              <span className="text-nova-violet italic font-light">TECH NOVA CHALLENGE 2026.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-serif italic">
              Un parcours structuré en 4 étapes, de l’idée jusqu’à la réalisation, pour valoriser votre potentiel innovant.
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

      {/* SESSION INTRO */}
      <section className="py-32 px-6 bg-white border-b border-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <MuseumBlock>
            <p className="text-2xl md:text-3xl text-nova-black font-light leading-relaxed">
              Cette édition 2026 se déroulera sur <span className="text-nova-violet font-black underline decoration-nova-violet/30 underline-offset-8">4 étapes distinctes</span>, conçues pour accompagner les participants tout en renforçant leurs compétences techniques et entrepreneuriales.
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
                <span className="text-nova-violet font-black tracking-[0.4em] uppercase text-xs">Première Étape</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black mb-10 leading-none">
                Constitution des binômes et inscriptions
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                Tout commence par la formation de votre équipe. Constituez votre <span className="text-nova-black font-bold">binôme de gloire</span>, celui avec qui vous allez vivre toute l’aventure, partager les défis et célébrer les succès.
              </p>
              <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm space-y-6">
                 <h4 className="text-sm font-black uppercase tracking-widest text-nova-black flex items-center gap-3">
                    <FileText size={18} className="text-nova-violet" /> Pièces à fournir
                 </h4>
                 <ul className="space-y-4">
                    {[
                      "Fiche d’inscription officielle (à télécharger dans votre compte)",
                      "Copie de la fiche de validation de l’année ou Carte d'étudiant",
                      "Copie du CIP avant les présélections",
                      "Description détaillée du projet de réalisation"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-600 text-sm font-medium">
                        <CheckCircle2 size={16} className="text-nova-violet flex-shrink-0 mt-0.5" /> 
                        <span>{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="mt-12">
                <Button size="lg" onClick={() => navigate('/participate')}>S'inscrire Maintenant</Button>
              </div>
            </MuseumBlock>
            
            <MuseumBlock delay={0.2} className="hidden lg:block">
               <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Team work" 
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
                <span className="text-nova-black font-black tracking-[0.4em] uppercase text-xs">Deuxième Étape</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-nova-black leading-none mb-10">
                Analyse et sélection des projets
              </h2>
              <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
                Après la clôture, vos projets seront analysés par un jury d’experts académiques et industriels selon des critères rigoureux d'excellence.
              </p>
           </MuseumBlock>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { t: "Pertinence", d: "Adéquation avec le thème et réponse à un besoin concret.", icon: <Target className="text-nova-violet" /> },
                { t: "Innovation", d: "Caractère novateur et différentiateur de la solution.", icon: <Lightbulb className="text-nova-violet" /> },
                { t: "Faisabilité", d: "Réalisme technique et financier des moyens mis en œuvre.", icon: <Rocket className="text-nova-violet" /> },
                { t: "Impact", d: "Contribution réelle au développement durable et social.", icon: <Users className="text-nova-violet" /> },
                { t: "Présentation", d: "Clarté du dossier et de la vidéo de présentation.", icon: <Presentation className="text-nova-violet" /> }
              ].map((c, i) => (
                <MuseumBlock key={i} delay={i * 0.1}>
                  <div className="p-10 bg-nova-gray/10 rounded-[3rem] h-full border border-black/5 flex flex-col items-center text-center group hover:bg-nova-black hover:text-white transition-all duration-700">
                    <div className="p-4 bg-white rounded-2xl shadow-sm mb-8 group-hover:scale-110 transition-transform">{c.icon}</div>
                    <h3 className="text-xl font-black uppercase mb-4 tracking-tighter">{c.t}</h3>
                    <p className="text-sm font-medium opacity-60 leading-relaxed">{c.d}</p>
                  </div>
                </MuseumBlock>
              ))}
              <MuseumBlock delay={0.5}>
                <div className="p-10 bg-nova-violet rounded-[3rem] h-full flex flex-col items-center justify-center text-center text-white">
                  <Sparkles size={40} className="mb-6" />
                  <p className="text-lg font-bold italic font-serif">
                    "Plusieurs projets peuvent être retenus – l’objectif est d’encourager le plus grand nombre d’idées prometteuses."
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
                <span className="text-nova-violet font-black tracking-[0.4em] uppercase text-xs">Troisième Étape</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-none">
                Formation immersive et accompagnement
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                Les sélectionnés intègrent un parcours d’accompagnement unique comprenant des visites guidées, des formations ciblées et un mentorat personnalisé.
              </p>
              
              <div className="space-y-8">
                 <div className="flex gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 group hover:bg-white/10 transition-all">
                    <MapPin className="text-nova-violet flex-shrink-0" />
                    <p className="text-sm font-medium leading-relaxed">
                      <strong className="text-white block mb-2 uppercase tracking-widest text-[10px]">Visites de pointe</strong>
                      Découverte du SCOP de Sèmè City, véritable moteur d’innovation au Bénin (ateliers 3D, prototypage électronique).
                    </p>
                 </div>
                 <div className="flex gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 group hover:bg-white/10 transition-all">
                    <GraduationCap className="text-nova-violet flex-shrink-0" />
                    <p className="text-sm font-medium leading-relaxed">
                      <strong className="text-white block mb-2 uppercase tracking-widest text-[10px]">Expertise Technique</strong>
                      Formations sur l’art oratoire, l’entrepreneuriat numérique, le prototypage et l’innovation responsable.
                    </p>
                 </div>
              </div>
            </MuseumBlock>
            
            <MuseumBlock delay={0.3}>
               <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer" onClick={() => navigate('/galerie')}>
                  <img src="https://i.postimg.cc/wvzcHcs3/visite_scop1.jpg" alt="Sèmè City Visit" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/95 rounded-full flex items-center justify-center text-nova-black">
                     <Maximize2 size={20} />
                  </div>
               </div>
               <p className="mt-8 text-center text-gray-500 font-serif italic">Souvenir de l'immersion 2025 au SCOP de Sèmè City.</p>
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
              <span className="text-nova-red font-black tracking-[0.4em] uppercase text-xs">Quatrième Étape</span>
            </div>
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-nova-black leading-none mb-10">
              La Grande Finale et <br /><span className="text-nova-red italic font-light">remise des prix.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-4xl mx-auto leading-relaxed italic font-serif">
              "Ensuite, vous parcourerez chaque étape jusqu’à, pourquoi pas, tirer votre épingle du jeu et remporter le gros lot de 500 000 Francs CFA."
            </p>
          </MuseumBlock>

          <div className="grid lg:grid-cols-3 gap-8 mb-24">
             {[
               { rank: "1er Prix", val: "500 000 FCFA", color: "nova-red", gifts: "Ordinateurs portables + Trophées + Tableau d'honneur" },
               { rank: "2e Prix", val: "300 000 FCFA", color: "nova-black", gifts: "Trophées + Attestation + Tableau d'honneur" },
               { rank: "3e Prix", val: "200 000 FCFA", color: "nova-black", gifts: "Trophées + Attestation + Tableau d'honneur" }
             ].map((p, i) => (
               <MuseumBlock key={i} delay={i * 0.1}>
                 <div className={`p-12 rounded-[3.5rem] border ${i === 0 ? 'bg-nova-red text-white border-nova-red shadow-2xl' : 'bg-white text-nova-black border-black/5 shadow-sm'} flex flex-col h-full group hover:-translate-y-2 transition-all duration-500`}>
                    <Trophy className={`mb-8 ${i === 0 ? 'text-white' : 'text-nova-red'}`} size={40} />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-60">{p.rank}</span>
                    <h3 className="text-4xl font-black mb-8 tracking-tighter">{p.val}</h3>
                    <p className={`text-sm font-medium leading-relaxed ${i === 0 ? 'text-white/80' : 'text-gray-400'}`}>{p.gifts}</p>
                 </div>
               </MuseumBlock>
             ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {["Innovation Féminine", "Impact Social", "Solution Originale", "Meilleure Présentation"].map((p, i) => (
               <MuseumBlock key={i} delay={i * 0.1}>
                 <div className="p-8 bg-nova-gray/10 rounded-3xl border border-black/5 text-center flex flex-col items-center group hover:bg-nova-black hover:text-white transition-all duration-500">
                    <Award className="text-nova-violet mb-4 group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-[9px] font-black uppercase tracking-widest">{p}</span>
                 </div>
               </MuseumBlock>
             ))}
          </div>
        </div>
      </section>

      {/* BÉNÉFICES INCROYABLES */}
      <section className="py-48 px-6 bg-nova-gray/10 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <MuseumBlock className="mb-24 text-center">
            <h2 className="text-4xl md:text-7xl font-black uppercase text-nova-black leading-none tracking-tighter">
              Ah, j’oubliais… <br />
              <span className="text-nova-violet italic font-light">Les bénéfices incroyables !</span>
            </h2>
          </MuseumBlock>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { t: "Prise en charge totale", d: "Formation gratuite de 3 jours avec transport, hébergement et restauration inclus.", icon: <Plane /> },
              { t: "Réseautage Stratégique", d: "Accès direct à des réseaux professionnels et des partenaires industriels potentiels.", icon: <Briefcase /> },
              { t: "Visibilité Nationale", d: "Une exposition médiatique forte pour vous et votre projet innovant.", icon: <Users /> },
              { t: "Accélérateur de carrière", d: "Opportunités de stage, financement ou incubation pour les meilleurs projets.", icon: <Rocket /> },
              { t: "Reconnaissance Officielle", d: "Une attestation de participation valorisante pour votre parcours académique.", icon: <CheckCircle2 /> },
              { t: "Bien-être & Convivialité", d: "Expérience humaine unique faite d'échanges et de moments mémorables.", icon: <Coffee /> }
            ].map((item, i) => (
              <MuseumBlock key={i} delay={i * 0.1}>
                <div className="flex gap-8 items-start group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-nova-violet shadow-sm flex-shrink-0 group-hover:bg-nova-violet group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase mb-2 text-nova-black">{item.t}</h4>
                    <p className="text-base text-nova-black/60 leading-relaxed font-medium">
                      {item.d}
                    </p>
                  </div>
                </div>
              </MuseumBlock>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE RÉTROSPECTIVE 2025 */}
      <section className="py-48 px-6 bg-white border-t border-black/5">
        <div className="container mx-auto max-w-7xl">
          <MuseumBlock className="mb-24 text-center">
            <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8">Archives 2025</span>
            <h2 className="text-nova-black text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Quelques images pour revivre <br /><span className="text-nova-violet italic font-light">ces moments forts.</span>
            </h2>
          </MuseumBlock>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { src: "https://i.postimg.cc/VNY36Mt9/formation.jpg", label: "Formation CAEB Lokossa" },
              { src: "https://i.postimg.cc/fLsjZj0N/visite_scop.jpg", label: "Immersion Sèmè City" },
              { src: "https://i.postimg.cc/26S9TtLJ/membre_du_jury_avec_un_membre_de_wisane.jpg", label: "Échanges Mentors" },
              { src: "https://i.postimg.cc/XJvS2F7Y/FINALE_PRESElection.jpg", label: "Présentations Techniques" },
              { src: "https://i.postimg.cc/g2vWrmTp/FINALISTE_PREMIER.jpg", label: "Remise des Prix" }
            ].map((img, i) => (
              <MuseumBlock key={i} delay={i * 0.1}>
                 <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-black/5">
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-nova-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                       <span className="text-[10px] font-black uppercase text-white tracking-widest">{img.label}</span>
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
                 PRÊT À RELEVER <br />
                 <span className="text-nova-violet italic font-light">LE DÉFI 2026 ?</span>
              </h2>
              <p className="text-xl text-gray-400 font-light mb-20 max-w-2xl mx-auto leading-relaxed">
                Inscrivez-vous dès maintenant et commencez à écrire votre avenir technologique.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                 <Button size="lg" onClick={() => navigate('/participate')}>S'inscrire Maintenant</Button>
                 <div className="text-nova-violet font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center cursor-pointer border-b border-nova-violet/30 pb-1">Lire le règlement complet</div>
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