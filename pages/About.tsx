
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Globe, Target, Building2, ShieldCheck, 
  GraduationCap, ArrowDown, Lightbulb, 
  Users, Zap, BarChart3, Rocket
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const About: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="bg-white selection:bg-nova-violet selection:text-white overflow-hidden">
      
      {/* 1. HEADER CINÉMATIQUE */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY, opacity: opacityHero }} className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Horizon Technologique" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-nova-black/80 backdrop-blur-[2px]" />
        </motion.div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] text-white leading-[0.85] mb-12">
              CLARIFIONS LE <br />
              <span className="text-nova-violet italic font-light">CONCOURS.</span>
            </h1>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"
        >
           <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* 2. PRÉSENTATION GÉNÉRALE - BLOC TEXTE AÉRÉ */}
      <section className="py-48 px-6 bg-white relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-16"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px w-24 bg-nova-violet" />
              <span className="text-nova-violet font-black tracking-widest uppercase text-xs">Présentation Générale</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-nova-black uppercase tracking-tighter leading-none mb-10">
  DANS LES LIGNES QUI SUIVENT <br />
  <span className="text-nova-violet italic font-light">NOUS VOUS EXPLIQUONS LE CONTEXTE MEME DU CONCOURS TNC</span>
</h2>
            
            <div className="prose prose-2xl max-w-none text-gray-500 font-light leading-[1.8] space-y-10">
              <p>
                Le Tech Nova Challenge (TNC) se positionne comme une plateforme structurée d’expression, de formation et de valorisation des talents, principalement issus des filières techniques, scientifiques, littéraires et numériques du Bénin. 
              </p>
              <p>
                Le concours offre un cadre organisé permettant aux étudiants d’identifier des problématiques concrètes de leur environnement — notamment dans les domaines de l’emploi, de l’éducation, de la sécurité, du cadre de vie ou des services numériques — et de proposer des solutions technologiques adaptées. 
              </p>
              <p className="border-l-4 border-nova-violet pl-10 italic text-nova-black font-medium">
                Ces solutions font l’objet d’un processus de conception, de prototypage et de présentation devant un jury et un public, conformément à des critères professionnels définis.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CONTEXTE ET JUSTIFICATION - PARALLAX SPLIT */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="z-10 bg-white p-12 md:p-20 shadow-2xl rounded-[3rem] soft-border"
            >
              <span className="text-nova-violet font-black tracking-widest uppercase text-[10px] block mb-8">Contexte & Justification</span>
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-10 tracking-tighter text-nova-black">Répondre au déficit <br /><span className="text-nova-violet">de cadres structurés.</span></h3>
              <div className="text-gray-500 font-light text-lg leading-relaxed space-y-8">
                <p>
  Le Tech Nova Challenge part d’un constat simple : au Bénin, il y a plein de jeunes qui ont des compétences techniques et scientifiques, mais peu d’opportunités pour tester et expérimenter leurs idées.
</p>
<p>
  Le concours a été pensé comme un parcours complet d’innovation pratique, allant de l’appel à candidatures jusqu’à la finale, en incluant des formations pour renforcer les compétences et préparer les participants à présenter leurs projets.
</p>
              </div>
            </motion.div>
            
            <div className="relative h-[600px] lg:h-[800px] overflow-hidden rounded-[3rem]">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200" 
                alt="Travail collaboratif" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-nova-violet/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION - INTERACTIVE SECTION */}
      <section className="py-64 bg-nova-black text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="w-20 h-20 bg-nova-violet rounded-3xl flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(124,58,237,0.4)]">
                <Zap size={32} />
              </div>
              <h2 className="text-5xl font-black uppercase tracking-tighter">Notre <br /><span className="text-nova-violet italic font-light">Vision.</span></h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Devenir une référence nationale et sous-régionale en matière d’innovation technologique portée par les jeunes. Le TNC ambitionne de structurer un écosystème où les solutions conçues localement participent activement au développement économique et social du Bénin.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-10">
                <Rocket size={32} className="text-nova-violet" />
              </div>
              <h2 className="text-5xl font-black uppercase tracking-tighter">Notre <br /><span className="text-nova-violet italic font-light">Mission.</span></h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Identifier, révéler et accompagner les talents par le renforcement de capacités et la mise en relation avec des institutions, entreprises et partenaires financiers pour garantir la pérennité des projets au-delà du concours.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-nova-violet/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-nova-violet/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* 5. OBJECTIFS ET VALEURS - GRID LAYOUT */}
      <section className="py-48 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-32">
            <span className="text-nova-violet font-black tracking-widest uppercase text-xs block mb-8">Piliers Stratégiques</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black">OBJECTIFS <span className="text-nova-violet">&</span> VALEURS</h2>
          </header>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassCard className="p-12 border-gray-100 bg-gray-50/50 hover:bg-white transition-all duration-500">
              <Target className="text-nova-violet mb-10" size={40} />
              <h3 className="text-xl font-black uppercase mb-6">Promotion Culturelle</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">Promouvoir une culture de l’innovation technologique et stimuler l’esprit d’initiative entrepreneurial.</p>
            </GlassCard>
            
            <GlassCard className="p-12 border-gray-100 bg-gray-50/50 hover:bg-white transition-all duration-500">
              <Users className="text-nova-violet mb-10" size={40} />
              <h3 className="text-xl font-black uppercase mb-6">Collaboration</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">Développer des compétences transversales : coopération, complémentarité et responsabilité partagée.</p>
            </GlassCard>

            <GlassCard className="p-12 border-gray-100 bg-gray-50/50 hover:bg-white transition-all duration-500">
              <BarChart3 className="text-nova-violet mb-10" size={40} />
              <h3 className="text-xl font-black uppercase mb-6">Dynamique Nationale</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">Mobiliser les médias, les institutions et le grand public autour des enjeux de l'innovation.</p>
            </GlassCard>

            <GlassCard className="p-12 border-nova-violet/10 bg-nova-violet/5 hover:bg-nova-violet hover:text-white transition-all duration-500 group">
              <ShieldCheck className="text-nova-violet group-hover:text-white mb-10 transition-colors" size={40} />
              <h3 className="text-xl font-black uppercase mb-6">Équité & Transparence</h3>
              <p className="opacity-70 text-sm font-light leading-relaxed">Principes fondamentaux de sélection basés sur des critères professionnels clairement définis.</p>
            </GlassCard>

            <GlassCard className="p-12 border-nova-violet/10 bg-nova-violet/5 hover:bg-nova-violet hover:text-white transition-all duration-500 group">
              <Lightbulb className="text-nova-violet group-hover:text-white mb-10 transition-colors" size={40} />
              <h3 className="text-xl font-black uppercase mb-6">Innovation Appliquée</h3>
              <p className="opacity-70 text-sm font-light leading-relaxed">Production de solutions nouvelles fondées sur la créativité et l'analyse critique continue.</p>
            </GlassCard>

            <GlassCard className="p-12 border-nova-violet/10 bg-nova-violet/5 hover:bg-nova-violet hover:text-white transition-all duration-500 group">
              <Globe className="text-nova-violet group-hover:text-white mb-10 transition-colors" size={40} />
              <h3 className="text-xl font-black uppercase mb-6">Responsabilité Sociale</h3>
              <p className="opacity-70 text-sm font-light leading-relaxed">Amélioration des conditions de vie et contribution directe aux objectifs de développement durable.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 6. IMAGE INTERMÉDIAIRE LARGE */}
      <section className="h-[60vh] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
          alt="Équipe en action" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nova-black/40" />
      </section>

      {/* 7. APPROCHE & IMPACT - CONCLUSION ÉDITORIALE */}
      <section className="py-64 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-nova-black">Approche <span className="text-nova-violet">&</span> Fonctionnement</h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                Le Tech Nova Challenge est conçu comme un processus évolutif et continu. Chaque édition permet de capitaliser sur les enseignements passés, d'élargir le réseau de mentors et de consolider progressivement l’écosystème national de l’innovation technologique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-16 bg-gray-50 rounded-[3rem] border border-gray-100 text-center relative"
            >
              <Building2 className="text-nova-violet mx-auto mb-10" size={64} />
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-10 text-nova-black">Positionnement <span className="text-nova-violet italic font-light">& Impact</span></h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-12">
                Le TNC joue un rôle de passerelle entre le monde académique et professionnel. En favorisant l’articulation entre connaissances théoriques et exigences du marché, il constitue un levier stratégique pour l’insertion des talents appelés à bâtir le Bénin de demain.
              </p>
              <button 
                onClick={() => window.location.hash = '/edition-2026'}
                className="text-nova-violet font-black uppercase tracking-[0.4em] text-[10px] border-b border-nova-violet pb-2 hover:text-nova-black hover:border-nova-black transition-colors"
              >
                Découvrir l'édition en cours
              </button>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;