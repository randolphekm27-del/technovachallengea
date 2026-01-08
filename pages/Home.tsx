
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, Users, ShieldCheck, 
  ArrowRight, GraduationCap, Building2, 
  Target, Zap, BookOpen, Scale, Award,
  CheckCircle2, Rocket, HeartHandshake
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

// Nouveau composant de parrainage asymétrique
const PatronageCard = ({ label, name, sub, img, delay }: { label: string, name: string, sub: string, img: string, delay: number }) => {
  return (
    <div className="relative pt-16 pb-8 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="relative flex items-center group cursor-default"
      >
        {/* Couche Inférieure: Carte de Texte (Glassmorphism) */}
        <motion.div
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 ml-16 md:ml-24 w-full bg-white/80 backdrop-blur-[12px] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 border-[0.5px] border-[#6A00FF] shadow-sm"
        >
          <div className="flex flex-col">
            <span className="text-[#6A00FF] font-black uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-4">
              {label}
            </span>
            <h3 className="text-nova-black font-black text-xl md:text-3xl uppercase tracking-tighter leading-none mb-2">
              {name}
            </h3>
            <span className="text-gray-400 font-medium text-[9px] md:text-[11px] uppercase tracking-[0.2em] opacity-80">
              {sub}
            </span>
          </div>
        </motion.div>

        {/* Couche Supérieure: Image PNG (Pop-out effect) */}
        <motion.div
          whileHover={{ scale: 1.1, y: -10 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0 z-20 w-32 h-44 md:w-56 md:h-72 -mt-12 -ml-4 md:-ml-8 pointer-events-none"
        >
          <img
            src={img}
            alt={name}
            className="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  const heroImageUrl = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000";

  return (
    <div ref={containerRef} className="relative w-full bg-white selection:bg-nova-violet selection:text-white overflow-x-hidden">
      
      {/* SESSION 1 : HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img 
            style={{ scale: heroScale, opacity: heroOpacity }}
            src={heroImageUrl} 
            alt="Innovation Bénin" 
            className="w-full h-full object-cover grayscale brightness-[0.35]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nova-black/70 via-nova-black/50 to-white/10" />
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 mb-10 px-6 py-2 bg-nova-violet/20 backdrop-blur-md rounded-full border border-white/10"
            >
              <span className="text-white font-black tracking-[0.4em] uppercase text-[9px]">
                L'INNOVATION EST UNE PAGE BLANCHE
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="editorial-title text-[clamp(2rem,6vw,5.5rem)] font-black text-white leading-[1] mb-12 tracking-tighter"
            >
              BIENVENUE AU <br />
              <span className="text-nova-violet italic font-light">TECH NOVA CHALLENGE !</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-lg md:text-xl text-gray-200 font-light max-w-4xl mx-auto mb-16 leading-relaxed"
            >
              Premier concours de référence pour l'innovation technologique des jeunes au Bénin, 
              pour encourager l'excellence, la créativité et l'esprit d'équipe tout en contribuant 
              au développement de la nation !
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col md:flex-row items-center justify-center gap-8"
            >
              <Button size="md" onClick={() => navigate('/edition-2026')}>L'ÉDITION 2026</Button>
              <button 
                onClick={() => navigate('/about')}
                className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/60 hover:text-white transition-all"
              >
                Vision Institutionnelle <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}><ArrowRight size={14} /></motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SESSION 2 : DÉFINITION */}
      <section className="py-48 px-6 bg-white relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-12">Le Programme</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-16 leading-tight">
              Qu'est ce que le <br />
              <span className="text-nova-violet italic font-light uppercase">TECH NOVA CHALLENGE ?</span>
            </h2>
            <div className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed space-y-10">
              <p>
                Le TECH NOVA CHALLENGE (TNC) est le catalyseur national de l'innovation technologique au Bénin. Plus qu'une simple compétition, c'est un écosystème structuré qui identifie les jeunes talents universitaires les plus prometteurs pour les transformer en bâtisseurs de solutions concrètes.
              </p>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-nova-black font-medium border-l-4 border-nova-violet pl-10 text-left"
              >
                Il a pour objectif principal de combler le déficit d'accompagnement entre la conception d'une idée et sa concrétisation industrielle, en offrant un cadre d'excellence, de mentorat expert et de financement stratégique adapté aux enjeux socio-économiques du pays.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SESSION 3 : ANCRAGE INSTITUTIONNEL (REFAIT AVEC COMPOSANT ASYMÉTRIQUE) */}
      <section className="py-48 px-6 bg-gray-50 border-y border-gray-100 overflow-visible">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-10">Ancrage Institutionnel</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black leading-none mb-12">
                UN SOUTIEN <br /><span className="text-[#6A00FF]">DE HAUT NIVEAU.</span>
              </h2>
              <div className="space-y-12 text-lg text-gray-500 font-light leading-relaxed">
                <p>
                  Son organisation est placée sous le patronage officiel des directions de l'École Nationale Supérieure d'Enseignement Technique (**ENSET**) et de l'Institut National Supérieur de Technologie Industrielle (**INSTI**).
                </p>
                <div className="p-10 bg-white rounded-[2.5rem] border border-nova-violet/10 flex items-center gap-8 group hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-nova-violet/5 rounded-2xl flex items-center justify-center text-[#6A00FF]">
                    <HeartHandshake size={32} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#6A00FF]">Partenaire Officiel</span>
                    <div className="text-2xl font-black text-nova-black mt-1 uppercase">WISANE (INGCO)</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-16 md:space-y-20 pt-12 lg:pt-0">
               <PatronageCard 
                 label="PARRAINAGE"
                 name="Prof. Gustave DJEDATIN"
                 sub="DIRECTEUR DE L'ENSET"
                 img="https://lh3.googleusercontent.com/d/1yDq595M_rA74uUatJj6k-uN_p_fQ7G9F"
                 delay={0.2}
               />
               
               <PatronageCard 
                 label="MARRAINAGE"
                 name="Prof. Clotilde GUIDI TOGNON"
                 sub="DIRECTRICE DE L'INSTI"
                 img="https://lh3.googleusercontent.com/d/1vQG_H8-p-q-m_p-q-m_p-q-m_p-q-m_p"
                 delay={0.4}
               />
            </div>
          </div>
        </div>
      </section>

      {/* SESSION 4 : CIBLE & ACCESSIBILITÉ */}
      <section className="py-48 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <header className="text-center mb-32">
            <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Éligibilité & Candidature</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-nova-black">Alors, à qui s'adresse <br /><span className="text-nova-violet italic font-light">ce concours ?</span></h2>
          </header>

          <div className="space-y-16 text-xl md:text-2xl font-light text-gray-500 leading-relaxed">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-8"
            >
              <div className="mt-2 text-nova-violet"><Users size={32} /></div>
              <span>
                Le <strong className="text-nova-black font-black">Tech Nova Challenge</strong> vise les jeunes talents béninois, passionnés par la technique et l'innovation, âgés de <strong className="text-nova-black">15 à 25 ans</strong> et inscrits dans un établissement d'enseignement supérieur du pays.
              </span>
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-8"
            >
              <div className="mt-2 text-nova-violet"><Zap size={32} /></div>
              <span>
                La participation se fait exclusivement <strong className="text-nova-black">en binôme</strong>. Nous encourageons la synergie des compétences : qu'il s'agisse de deux profils techniques ou d'une alliance entre un inventeur et un gestionnaire, l'interdisciplinarité est la clé du succès.
              </span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100"
            >
              <div className="text-[10px] font-black uppercase tracking-widest text-nova-violet mb-8">Un processus en trois temps</div>
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { title: "Sélection", desc: "Dépôt de dossier technique et vidéo de pitch." },
                  { title: "Immersion", desc: "Formation accélérée de 3 jours offerte." },
                  { title: "Apothéose", desc: "Finale publique devant un jury d'experts." }
                ].map((step, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="text-nova-black font-black uppercase text-sm">{idx + 1}. {step.title}</h4>
                    <p className="text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 p-12 md:p-20 bg-nova-black text-white rounded-[4rem] relative overflow-hidden text-center"
          >
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-12 relative z-10">Rejoignez l'élite technologique</h3>
            <div className="flex justify-center relative z-10">
              <Button size="lg" onClick={() => navigate('/participate')}>Postuler maintenant</Button>
            </div>
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-nova-violet/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        </div>
      </section>

      {/* SESSION 5 : ACCOMPAGNEMENT */}
      <section className="py-48 px-6 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-6 space-y-12">
              <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block">Accompagnement & Expertise</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nova-black leading-none">
                AU-DELÀ DE LA COMPÉTITION, <br /><span className="text-nova-violet italic font-light uppercase">VOUS BÉNÉFICIEZ...</span>
              </h2>
              <div className="space-y-8">
                {[
                  { icon: <BookOpen size={24} />, title: "Formations Thématiques", desc: "Maîtrisez l'art oratoire, l'entrepreneuriat innovant et la gouvernance de projet." },
                  { icon: <Building2 size={24} />, title: "Visites Pédagogiques", desc: "Immersion totale dans les centres de référence comme le laboratoire SCOP à Sèmè City." },
                  { icon: <Scale size={24} />, title: "Expertise Scientifique", desc: "Conseils de haut niveau par un jury de docteurs et de professionnels de l'industrie." }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-nova-violet group-hover:bg-nova-violet group-hover:text-white transition-all">
                      {step.icon}
                    </div>
                    <div className="flex-1 border-b border-gray-200 pb-8 last:border-0">
                      <h4 className="font-black uppercase text-xs mb-3">{step.title}</h4>
                      <p className="text-sm text-gray-500 font-light">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="lg:col-span-6"
            >
               <img 
                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                 alt="Pédagogie Nova" 
                 className="rounded-[4rem] shadow-2xl grayscale"
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SESSION 6 : RÉSULTATS 2025 */}
      <section className="py-48 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-32">
            <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Édition Inaugurale</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-nova-black">IMPACTS <span className="text-nova-violet italic font-light">2025.</span></h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-8">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100"
               >
                  <div className="text-6xl font-black text-nova-violet mb-2">67</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Binômes inscrits initialement</div>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="p-10 bg-nova-black text-white rounded-[3rem]"
               >
                  <h4 className="text-xs font-black uppercase tracking-widest mb-6">Domaines couverts</h4>
                  <div className="flex flex-wrap gap-4">
                    {["Efficacité énergétique", "Agriculture", "Déchets", "Santé", "IA Entreprise"].map((d, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest border border-white/10">{d}</span>
                    ))}
                  </div>
               </motion.div>
            </div>

            <div className="lg:col-span-8">
               <GlassCard className="p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
                  <div className="absolute top-10 right-10 opacity-20"><Award size={100} className="text-nova-violet" /></div>
                  <div className="flex-1">
                    <span className="text-nova-violet font-black uppercase tracking-widest text-xs block mb-8">Binôme Lauréat 2025</span>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-6">
                      BOKO Béoula <br />& N’TCHA Siméon
                    </h3>
                    <p className="text-xl text-gray-500 font-light leading-relaxed mb-4">
                      Récompensés pour leur projet de **motopompe optimisée pour l'irrigation** (ENSET).
                    </p>
                    <p className="text-sm text-gray-400">L'événement a révélé des solutions concrètes facilitant les rencontres directes entre étudiants, académiques et partenaires industriels.</p>
                  </div>
               </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* SESSION 7 : PERSPECTIVES 2026 */}
      <section className="py-64 px-6 bg-gray-50 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-12">Perspectives & Évolutions</span>
          <h2 className="editorial-title text-[clamp(2.5rem,10vw,8rem)] text-nova-black mb-16 leading-[0.85]">
            HORIZON <br />
            <span className="text-nova-violet italic font-light">2026.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-20 text-left">
             {[
               { price: "500.000 FCFA", sub: "1er Prix + Ordinateur" },
               { price: "300.000 FCFA", sub: "2e Prix + Ordinateur" },
               { price: "200.000 FCFA", sub: "3e Prix + Ordinateur" }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
               >
                  <div className="text-nova-violet mb-4"><Award size={32} /></div>
                  <div className="text-2xl font-black text-nova-black">{item.price}</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-2">{item.sub}</div>
               </motion.div>
             ))}
          </div>
          
          <div className="max-w-3xl mx-auto space-y-12">
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              La deuxième édition, programmée de janvier à mai 2026, vise un déploiement national élargi, intégrant une phase de **prototypage/maquettage** et la création du réseau **« Tech Nova Alumni »**.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
               <Button size="lg" onClick={() => navigate('/participate')}>Postuler pour 2026</Button>
               <Button variant="outline" size="lg" onClick={() => navigate('/edition-2026')}>Voir le Programme</Button>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-nova-violet/5 blur-[150px] rounded-full" />
      </section>

    </div>
  );
};

export default Home;
