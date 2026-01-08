
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, Users, ShieldCheck, 
  ArrowRight, GraduationCap, Building2, 
  Target, Zap, BookOpen, Scale, Award,
  CheckCircle2, Rocket, HeartHandshake,
  ExternalLink
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

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
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img 
            style={{ scale: heroScale, opacity: heroOpacity }}
            src={heroImageUrl} 
            alt="Innovation Bénin" 
            className="w-full h-full object-cover grayscale brightness-[0.35]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nova-black/70 via-nova-black/50 to-white/10" />
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-10">
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
              className="inline-flex items-center gap-3 mb-8 md:mb-10 px-4 md:px-6 py-2 bg-nova-violet/20 backdrop-blur-md rounded-full border border-white/10"
            >
              <span className="text-white font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[8px] md:text-[9px]">
                L'INNOVATION EST UNE PAGE BLANCHE
              </span>
            </motion.div>

            <motion.h1 
              className="editorial-title text-[clamp(2.2rem,10vw,5.5rem)] font-black text-white leading-[1] mb-8 md:mb-12 tracking-tighter"
            >
              BIENVENUE AU <br />
              <span className="text-nova-violet italic font-light">TECH NOVA CHALLENGE !</span>
            </motion.h1>

            <motion.p 
              className="text-base md:text-xl text-gray-200 font-light max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed px-4 md:px-0"
            >
              Premier concours de référence pour l'innovation technologique des jeunes au Bénin, 
              pour encourager l'excellence, la créativité et l'esprit d'équipe.
            </motion.p>

            <motion.div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              <Button size="md" className="w-full md:w-auto" onClick={() => navigate('/edition-2026')}>L'ÉDITION 2026</Button>
              <button 
                onClick={() => navigate('/about')}
                className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/60 hover:text-white transition-all py-4"
              >
                Vision Institutionnelle <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SESSION 2 : DÉFINITION */}
      <section className="py-24 md:py-48 px-6 bg-white relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-32"
          >
            <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8 md:mb-12">Le Programme</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-10 md:mb-16 leading-tight">
              Qu'est ce que le <br />
              <span className="text-nova-violet italic font-light uppercase">TECH NOVA CHALLENGE ?</span>
            </h2>
            <div className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed space-y-8 md:space-y-10 px-4 md:px-0">
              <p>
                Le TECH NOVA CHALLENGE (TNC) est le catalyseur national de l'innovation technologique au Bénin. Plus qu'une simple compétition, c'est un écosystème structuré qui identifie les jeunes talents universitaires.
              </p>
              <motion.p className="text-nova-black font-medium border-l-4 border-nova-violet pl-6 md:pl-10 text-left">
                Il a pour objectif principal de combler le déficit d'accompagnement entre la conception d'une idée et sa concrétisation industrielle.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SESSION 6 : RÉSULTATS 2025 */}
      <section className="py-24 md:py-48 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 md:mb-32">
            <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-6 md:mb-8">Édition Inaugurale</span>
            <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter text-nova-black">IMPACTS <span className="text-nova-violet italic font-light">2025.</span></h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
               <motion.div className="p-8 md:p-12 bg-gray-50 rounded-[2.5rem] md:rounded-[3rem] border border-gray-100">
                  <div className="text-5xl md:text-6xl font-black text-nova-violet mb-2">67</div>
                  <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400">Binômes inscrits initialement</div>
               </motion.div>
               <motion.div className="p-8 md:p-10 bg-nova-black text-white rounded-[2.5rem] md:rounded-[3rem]">
                  <h4 className="text-[10px] font-black uppercase tracking-widest mb-6">Domaines couverts</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Agriculture", "Santé", "Énergie"].map((d, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/5 rounded-full text-[8px] font-bold uppercase tracking-widest border border-white/10">{d}</span>
                    ))}
                  </div>
               </motion.div>
            </div>

            <div className="lg:col-span-8">
               <GlassCard className="p-0 overflow-hidden relative border-nova-violet/10 group">
                  <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[450px]">
                    <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6 md:mb-8">
                        <Award className="text-nova-violet" size={20} />
                        <span className="text-nova-violet font-black uppercase tracking-widest text-[10px]">Binôme Lauréat 2025</span>
                      </div>
                      <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-4 md:mb-6">
                        BOKO Béoula <br className="hidden md:block"/>& N’TCHA Siméon
                      </h3>
                      <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed mb-8 md:mb-10">
                        Projet de **motopompe optimisée pour l'irrigation** (ENSET).
                      </p>
                      <button 
                        onClick={() => navigate('/laureats-2025')}
                        className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet"
                      >
                        Voir le rapport <ExternalLink size={14} />
                      </button>
                    </div>
                    <div className="md:w-1/3 lg:w-2/5 relative overflow-hidden h-[250px] md:h-auto">
                       <img 
                         src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                         alt="Lauréats" 
                         className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-nova-black/40 via-transparent to-transparent md:bg-gradient-to-l" />
                    </div>
                  </div>
               </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* SESSION 7 : PERSPECTIVES 2026 */}
      <section className="py-24 md:py-64 px-6 bg-gray-50 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-10 md:mb-12">Horizon 2026</span>
          <h2 className="editorial-title text-[clamp(2rem,8vw,8rem)] text-nova-black mb-12 md:mb-16 leading-[0.85]">
            NOUVEL <br className="md:hidden"/> <span className="text-nova-violet italic font-light">HORIZON.</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20 text-left">
             {[
               { price: "500k CFA", sub: "1er Prix" },
               { price: "300k CFA", sub: "2e Prix" },
               { price: "200k CFA", sub: "3e Prix" }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 className="p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-sm"
               >
                  <div className="text-nova-violet mb-4"><Award size={24} /></div>
                  <div className="text-xl md:text-2xl font-black text-nova-black">{item.price}</div>
                  <div className="text-[9px] uppercase font-bold tracking-widest text-gray-400 mt-2">{item.sub}</div>
               </motion.div>
             ))}
          </div>
          
          <div className="max-w-3xl mx-auto space-y-12 px-4">
            <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
              La deuxième édition vise un déploiement national élargi et la création du réseau **« Tech Nova Alumni »**.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
               <Button size="lg" className="w-full md:w-auto" onClick={() => navigate('/participate')}>Postuler</Button>
               <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate('/edition-2026')}>Programme</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
