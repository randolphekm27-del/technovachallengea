
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

// Composant pour l'animation de flottement des icônes
const FloatingIcon = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    animate={{ 
      y: [0, -8, 0],
      rotate: [0, 2, 0]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
  >
    {children}
  </motion.div>
);

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
            <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-12">A savoir</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-16 leading-tight">
              Qu'est ce que le <br />
              <span className="text-nova-violet italic font-light uppercase">TECH NOVA CHALLENGE ?</span>
            </h2>
            <div className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed space-y-10">
              <p>
                Le TECH NOVA CHALLENGE (TNC) est un concours national dédié à l’innovation technologique au Bénin. Il permet d’identifier de jeunes talents et de les accompagner dans la création de solutions concrètes pour le pays.
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

      {/* SESSION 3 : ANCRAGE INSTITUTIONNEL (MIS À JOUR AVEC IMAGES) */}
      <section className="py-48 px-6 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-10">Ancrage Institutionnel</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black leading-none mb-12">
                BENEFICIT D'UN SOUTIEN <br /><span className="text-nova-violet">DE HAUT NIVEAU.</span>
              </h2>
              <div className="space-y-12 text-lg text-gray-500 font-light leading-relaxed">
                <p>
                  Le TECH NOVA CHALLENGE est placé sous le patronage officiel de la direction de l'École Nationale Supérieure d'Enseignement Technique (ENSET), représentée par le Professeur Titulaire Gustave DJEDATIN, et de l'Institut National Supérieur de Technologie Industrielle (INSTI), représenté par la Professeur Titulaire Clotilde GUIDI TOGNON, respectivement parrain et marraine de l'édition inaugurale.
                </p>
                <div className="p-10 bg-white rounded-[2.5rem] border border-nova-violet/10 flex items-center gap-8 group hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-nova-violet/5 rounded-2xl flex items-center justify-center text-nova-violet">
                    <HeartHandshake size={32} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-nova-violet">Partenaire Officiel</span>
                    <div className="text-2xl font-black text-nova-black mt-1">WISANE (INGCO)</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-6 space-y-8">
              {[
                { 
                  label: "Parrainage", 
                  name: "Prof. Gustave DJEDATIN", 
                  sub: "Directeur de l'ENSET",
                  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
                },
                { 
                  label: "Marrainage", 
                  name: "Prof. Clotilde GUIDI TOGNON", 
                  sub: "Directrice de l'INSTI",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                }
              ].map((item, i) => (
                <GlassCard key={i} delay={i * 0.1} className="p-8 border-nova-violet/10 bg-white">
                  <div className="flex items-center gap-8">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 flex-shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-nova-violet font-black uppercase text-[10px] tracking-widest mb-2">{item.label}</div>
                      <div className="text-nova-black font-black text-xl uppercase leading-tight">{item.name}</div>
                      <div className="text-gray-400 text-[11px] mt-2 uppercase font-medium tracking-tight">{item.sub}</div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SESSION 4 : CIBLE & ACCESSIBILITÉ (RÉÉCRIT) */}
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
  <div className="text-[10px] font-black uppercase tracking-widest text-nova-violet mb-8">
    Trois étapes pour réussir votre innovation
  </div>
  <div className="grid md:grid-cols-3 gap-12">
    {[
      { 
        title: "1. Soumission & Sélection", 
        desc: "Soumettez votre dossier complet (projet technique et vidéo de présentation) pour être évalué par notre comité technique." 
      },
      { 
        title: "2. Formation & Immersion", 
        desc: "Si sélectionné, bénéficiez gratuitement d'une formation intensive de 3 jours incluant hébergement, restauration et ateliers spécialisés." 
      },
      { 
        title: "3. Présentation & Finale", 
        desc: "Défendez votre projet lors d'une finale publique devant un jury composé d'experts, d'universitaires et de professionnels." 
      }
    ].map((step, idx) => (
      <div key={idx} className="space-y-4">
        <h4 className="text-nova-black font-black uppercase text-sm">{step.title}</h4>
        <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
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

      {/* SECTION 5 : ACCOMPAGNEMENT INTENSIF */}
      <section className="py-48 px-6 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-6 space-y-12">
              <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block">Accompagnement Structuré</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nova-black leading-none">
                UN PARCOURS D'ACCOMPAGNEMENT <br /><span className="text-nova-violet italic font-light uppercase">COMPLET POUR VOTRE PROJET</span>
              </h2>
              <p className="text-gray-600 font-light text-lg">
                Au-delà du concours, chaque finaliste bénéficie d'un programme d'accompagnement sur-mesure pour transformer son idée en projet viable.
              </p>
              <div className="space-y-8">
                {[
                  { 
                    icon: <BookOpen size={24} />, 
                    title: "Formations Spécialisées", 
                    desc: "Ateliers pratiques sur l'art oratoire, l'entrepreneuriat innovant et la gestion de projet pour défendre efficacement votre solution." 
                  },
                  { 
                    icon: <Building2 size={24} />, 
                    title: "Immersion en Milieu d'Innovation", 
                    desc: "Visites exclusives dans des laboratoires de pointe comme le SCOP à Sèmè City pour découvrir les dernières technologies." 
                  },
                  { 
                    icon: <Scale size={24} />, 
                    title: "Mentorat par des Experts", 
                    desc: "Accompagnement personnalisé par des docteurs, enseignants-chercheurs et professionnels du secteur pour affiner votre projet." 
                  }
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
                 alt="Étudiants en formation et accompagnement Tech Nova Challenge" 
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
            {/* Colonne gauche : Statistiques */}
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

               {/* Nouvelle carte : Photo illustrative des gagnants */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="relative rounded-[2rem] overflow-hidden shadow-xl"
               >
                 <div className="aspect-square bg-gradient-to-br from-nova-violet/20 to-nova-blue/20 flex items-center justify-center">
                   <div className="text-center p-8">
                     <div className="w-24 h-24 rounded-full bg-gradient-to-br from-nova-violet to-nova-blue flex items-center justify-center mx-auto mb-6 shadow-lg">
                       <Trophy className="text-white" size={40} />
                     </div>
                     <h4 className="font-black uppercase text-sm text-nova-black mb-2">Champions 2025</h4>
                     <p className="text-xs text-gray-500">ENSET Lokossa</p>
                   </div>
                 </div>
                 <div className="absolute inset-0 border-2 border-white/20 rounded-[2rem] pointer-events-none"></div>
               </motion.div>
            </div>

            {/* Colonne droite : Lauréats et description */}
            <div className="lg:col-span-8 space-y-8">
               {/* Carte principale du binôme gagnant */}
               <GlassCard className="p-12 md:p-20 relative overflow-hidden">
                  <div className="absolute top-10 right-10 opacity-20"><Award size={100} className="text-nova-violet" /></div>
                  <div className="grid md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-2">
                      <span className="text-nova-violet font-black uppercase tracking-widest text-xs block mb-8">Premier Prix - Édition 2025</span>
                      <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-6">
                        BOKO Béoula <br />& N'TCHA Siméon
                      </h3>
                      <p className="text-xl text-gray-500 font-light leading-relaxed mb-4">
                        Lauréats avec leur projet de <strong>motopompe intelligente</strong> optimisée pour l'irrigation en zone rurale.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <GraduationCap size={16} />
                        <span>Élèves-professeurs en Fabrication Mécanique 1ère année</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                        <MapPin size={16} />
                        <span>ENSET Lokossa</span>
                      </div>
                    </div>
                    
                    {/* Illustration du projet */}
                    <div className="md:col-span-1">
                      <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-inner">
                        <div className="aspect-square bg-gradient-to-br from-nova-violet/10 to-nova-blue/10 rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <Droplets className="text-nova-violet mx-auto mb-3" size={32} />
                            <span className="text-xs font-bold uppercase text-nova-black">Irrigation intelligente</span>
                          </div>
                        </div>
                        <div className="mt-6 text-center">
                          <div className="text-2xl font-black text-nova-violet">150 000 FCFA</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Prime + Accompagnement</div>
                        </div>
                      </div>
                    </div>
                  </div>
               </GlassCard>

               {/* Cartes des autres lauréats */}
               <div className="grid md:grid-cols-2 gap-8">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-nova-violet/10 flex items-center justify-center">
                        <Medal className="text-nova-violet" size={20} />
                      </div>
                      <h4 className="font-black uppercase text-sm">Deuxième Prix</h4>
                    </div>
                    <h5 className="text-lg font-bold text-nova-black mb-2">ISSAKA Awa & FOLARIN Mourchid</h5>
                    <p className="text-sm text-gray-500 mb-4">Innovation thermique pour l'agroalimentaire (INSTI)</p>
                    <div className="text-nova-violet font-black">100 000 FCFA</div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-nova-blue/10 flex items-center justify-center">
                        <Medal className="text-nova-blue" size={20} />
                      </div>
                      <h4 className="font-black uppercase text-sm">Troisième Prix</h4>
                    </div>
                    <h5 className="text-lg font-bold text-nova-black mb-2">ROUFAI Aissatou & ZANVO Horeb</h5>
                    <p className="text-sm text-gray-500 mb-4">Plateforme d'orientation et développement personnel (ENSET)</p>
                    <div className="text-nova-blue font-black">50 000 FCFA</div>
                  </motion.div>
               </div>

               <div className="text-center pt-8">
                 <p className="text-gray-400 text-sm italic">
                   "L'édition 2025 a démontré le fort potentiel d'innovation des jeunes Béninois, 
                   avec des projets concrets facilitant les rencontres entre étudiants, académiques et partenaires industriels."
                 </p>
               </div>
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
              La deuxième édition, programmée de janvier à mai 2026, vise un déploiement national élargi, intégrant une phase de prototypage/maquettage et la création du réseau « Tech Nova Alumni ».
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
