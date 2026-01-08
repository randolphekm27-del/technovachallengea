
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, Globe, Users, ShieldCheck, 
  ArrowRight, Cpu, GraduationCap, Building2, 
  Target, Zap, Microscope, BookOpen, Scale,
  Rocket, Briefcase, Award
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const heroImageUrl = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000";

  return (
    <div ref={containerRef} className="relative w-full bg-white selection:bg-nova-violet selection:text-white overflow-x-hidden">
      
      {/* SESSION 1 : IDENTITÉ NATIONALE & HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Filtre sombre sur l'image de fond pour éviter le "trop blanc" */}
        <div className="absolute inset-0">
          <img 
            src={heroImageUrl} 
            alt="Innovation Bénin" 
            className="w-full h-full object-cover grayscale brightness-[0.4]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nova-black/60 via-nova-black/40 to-white" />
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
                PREMIÈRE INITIATIVE NATIONALE STRUCTURÉE
              </span>
            </motion.div>

            <h1 className="editorial-title text-[clamp(2.5rem,7vw,7rem)] font-black text-white leading-[0.85] mb-12 tracking-tighter">
              TECH NOVA <br /><span className="text-nova-violet italic font-light">CHALLENGE.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
              Identifier, former et promouvoir les jeunes talents universitaires porteurs de projets techniques et innovants au Bénin.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Button size="md" onClick={() => navigate('/edition-2026')}>L'ÉDITION 2026</Button>
              <button 
                onClick={() => navigate('/about')}
                className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/60 hover:text-white transition-all"
              >
                Vision Institutionnelle <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SESSION 2 : CADRE ET MISSION */}
      <section className="py-48 px-6 bg-white relative">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-32">
            <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-12">Le Programme</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-16 leading-tight">
              Combler le déficit <br />
              <span className="text-nova-violet italic font-light">d'accompagnement.</span>
            </h2>
            <div className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed space-y-10">
              <p>
                Le Tech Nova Challenge constitue la première initiative nationale structurée de concours d'innovation technologique au Bénin. Établi en 2025, ce programme vise à identifier, former et promouvoir les jeunes talents universitaires porteurs de projets techniques et innovants.
              </p>
              <p className="text-nova-black font-medium border-l-4 border-nova-violet pl-10 text-left">
                Il a pour objectif principal de combler le déficit d'accompagnement entre la conception d'une idée et sa concrétisation, en offrant un cadre compétitif, formateur et propice au développement de solutions répondant aux enjeux de développement socio-économique du pays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SESSION 3 : CADRE INSTITUTIONNEL & PARTENARIATS */}
      <section className="py-48 px-6 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7">
              <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-10">Ancrage Institutionnel</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black leading-none mb-12">
                UN SOUTIEN <br /><span className="text-nova-violet">DE HAUT NIVEAU.</span>
              </h2>
              <div className="space-y-12 text-lg text-gray-500 font-light leading-relaxed">
                <p>
                  Son organisation est placée sous le patronage officiel de la direction de l'École Nationale Supérieure d'Enseignement Technique (**ENSET**), représentée par le **Professeur Titulaire Gustave DJEDATIN**, et de l'Institut National Supérieur de Technologie Industrielle (**INSTI**), représenté par la **Professeur Titulaire Clotilde GUIDI TOGNON**, respectivement parrain et marraine de l'édition inaugurale.
                </p>
                <p>
                  Le concours s'appuie également sur un réseau de partenaires opérationnels et financiers, incluant des entreprises privées telles que la société **WISANE (INGCO)**, partenaire officiel, ainsi que des organismes d'appui à l'entrepreneuriat et des médias.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-6">
                <GlassCard className="p-10 border-nova-violet/10 bg-white">
                  <div className="text-nova-violet font-black uppercase text-[10px] tracking-widest mb-4">Parrainage</div>
                  <div className="text-nova-black font-black text-xl uppercase leading-tight">Prof. Gustave DJEDATIN</div>
                  <div className="text-gray-400 text-xs mt-2 uppercase">Direction ENSET</div>
                </GlassCard>
                <GlassCard className="p-10 border-nova-violet/10 bg-white">
                  <div className="text-nova-violet font-black uppercase text-[10px] tracking-widest mb-4">Parrainage</div>
                  <div className="text-nova-black font-black text-xl uppercase leading-tight">Prof. Clotilde GUIDI TOGNON</div>
                  <div className="text-gray-400 text-xs mt-2 uppercase">Direction INSTI</div>
                </GlassCard>
                <div className="p-10 bg-nova-violet/5 rounded-[2.5rem] border border-nova-violet/10 text-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-nova-violet">Partenaire Officiel</span>
                  <div className="text-2xl font-black text-nova-black mt-2">WISANE (INGCO)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SESSION 4 : PUBLIC CIBLE ET MÉCANISME */}
      <section className="py-48 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-32">
            <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Mécanisme de Participation</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-nova-black">CIBLE <span className="text-nova-violet italic font-light">&</span> PROCESSUS</h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { 
                icon: <Users />, 
                title: "Public Cible", 
                desc: "Étudiants béninois de 15 à 25 ans, inscrits dans un établissement d'enseignement supérieur." 
              },
              { 
                icon: <Zap />, 
                title: "En Binôme", 
                desc: "Participation exclusivement en binôme pour encourager la synergie et l'interdisciplinarité." 
              },
              { 
                icon: <Target />, 
                title: "Sélection", 
                desc: "Processus méticuleux débutant par un dépôt de dossier (fiche technique, vidéo de présentation)." 
              },
              { 
                icon: <GraduationCap />, 
                title: "Immersion", 
                desc: "Formation accélérée de trois jours entièrement prise en charge (transport, hébergement, restauration)." 
              }
            ].map((item, i) => (
              <GlassCard key={i} className="p-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-nova-violet mb-8">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black uppercase mb-4 text-nova-black">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>

          <div className="p-12 md:p-20 bg-nova-black text-white rounded-[4rem] relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h3 className="text-3xl font-black uppercase tracking-tighter mb-8">La Phase Finale</h3>
                 <p className="text-gray-400 font-light text-lg leading-relaxed">
                   La phase de présélection aboutit à la retenue de **dix binômes finalistes**. Ces derniers présentent leur projet devant un jury pluridisciplinaire lors d'une finale publique.
                 </p>
              </div>
              <div className="flex justify-center">
                 <Button size="lg" onClick={() => navigate('/participate')}>Postuler maintenant</Button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-nova-violet/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* SESSION 5 : DÉROULÉ PÉDAGOGIQUE */}
      <section className="py-48 px-6 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-6 space-y-12">
              <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block">Accompagnement & Expertise</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nova-black leading-none">
                AU-DELÀ DE LA <br /><span className="text-nova-violet italic font-light uppercase">COMPÉTITION.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-nova-violet group-hover:bg-nova-violet group-hover:text-white transition-all">
                    <BookOpen size={24} />
                  </div>
                  <div className="flex-1 border-b border-gray-200 pb-8">
                    <h4 className="font-black uppercase text-xs mb-3">Formations Thématiques</h4>
                    <p className="text-sm text-gray-500 font-light">Dispensées par des experts sur l'art oratoire, l'entrepreneuriat innovant ou la gouvernance locale.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-nova-violet group-hover:bg-nova-violet group-hover:text-white transition-all">
                    <Building2 size={24} />
                  </div>
                  <div className="flex-1 border-b border-gray-200 pb-8">
                    <h4 className="font-black uppercase text-xs mb-3">Visites Pédagogiques</h4>
                    <p className="text-sm text-gray-500 font-light">Dans des centres d'innovation de référence, comme le laboratoire SCOP à Sèmè City.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-nova-violet group-hover:bg-nova-violet group-hover:text-white transition-all">
                    <Scale size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black uppercase text-xs mb-3">Comité Scientifique</h4>
                    <p className="text-sm text-gray-500 font-light">Encadrement par un jury composé d'universitaires (ex. : **Dr ALIOU M. Sophia**, **Dr OGOUBIYI Assane**) et de professionnels.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
               <img 
                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                 alt="Pédagogie Nova" 
                 className="rounded-[4rem] shadow-2xl grayscale"
               />
            </div>
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
               <div className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
                  <div className="text-6xl font-black text-nova-violet mb-2">67</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Binômes inscrits initialement</div>
               </div>
               <div className="p-10 bg-nova-black text-white rounded-[3rem]">
                  <h4 className="text-xs font-black uppercase tracking-widest mb-6">Domaines couverts</h4>
                  <div className="flex flex-wrap gap-4">
                    {["Efficacité énergétique", "Agriculture", "Déchets", "Santé", "IA Entreprise"].map((d, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest border border-white/10">{d}</span>
                    ))}
                  </div>
               </div>
            </div>

            <div className="lg:col-span-8">
               <GlassCard className="p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
                  <div className="absolute top-10 right-10 opacity-20"><Award size={100} className="text-nova-violet" /></div>
                  <div className="flex-1">
                    <span className="text-nova-violet font-black uppercase tracking-widest text-xs block mb-8">Binôme Lauréat 2025</span>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-8">
                      BOKO Béoula <br />& N’TCHA Siméon
                    </h3>
                    <p className="text-xl text-gray-500 font-light leading-relaxed">
                      Récompensés pour leur projet de **motopompe optimisée pour l'irrigation** (ENSET). L'événement a révélé des projets concrets facilitant les rencontres directes entre étudiants, académiques et partenaires industriels.
                    </p>
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
             <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100">
                <div className="text-nova-violet mb-4"><Award size={32} /></div>
                <div className="text-2xl font-black text-nova-black">500.000 FCFA</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-2">1er Prix + Ordinateur</div>
             </div>
             <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100">
                <div className="text-nova-violet mb-4"><Award size={32} /></div>
                <div className="text-2xl font-black text-nova-black">300.000 FCFA</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-2">2e Prix + Ordinateur</div>
             </div>
             <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100">
                <div className="text-nova-violet mb-4"><Award size={32} /></div>
                <div className="text-2xl font-black text-nova-black">200.000 FCFA</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-2">3e Prix + Ordinateur</div>
             </div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-12">
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              La deuxième édition, programmée de janvier à mai 2026, vise un déploiement national élargi, intégrant une phase de **prototypage/maquettage** et la création du réseau **« Tech Nova Alumni »** pour pérenniser l'impact du concours.
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
