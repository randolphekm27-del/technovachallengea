import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Target, Lightbulb, Users2, ShieldCheck, Heart, Zap, Sprout, BookOpen, GraduationCap, Trophy, Award, Target as TargetIcon } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const ParallaxImage = ({ src, alt, caption }: { src: string, alt: string, caption?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div className="my-32">
      <div ref={ref} className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden rounded-[3rem] shadow-2xl">
        <motion.img 
          style={{ y }}
          src={src} 
          alt={alt} 
          className="absolute inset-0 w-full h-[140%] object-cover"
        />
        <div className="absolute inset-0 bg-nova-black/10" />
      </div>
      {caption && (
        <p className="mt-6 text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 text-center">
          {caption}
        </p>
      )}
    </div>
  );
};

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle, className = "text-nova-black" }) => (
  <div className="mb-16">
    {subtitle && (
      <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-4">
        {subtitle}
      </span>
    )}
    <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none ${className}`}>
      {children}
    </h2>
  </div>
);

interface ArticleTextProps {
  children: React.ReactNode;
  className?: string;
}

const ArticleText: React.FC<ArticleTextProps> = ({ children, className = "" }) => (
  <div className={`text-lg md:text-xl text-gray-600 leading-relaxed font-light space-y-8 ${className}`}>
    {children}
  </div>
);

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-32 bg-white selection:bg-nova-violet selection:text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* --- HEADER --- */}
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
              <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8">
                Présentation Institutionnelle
              </span>
              <h1 className="editorial-title text-[clamp(2.8rem,8vw,8rem)] leading-[0.85] text-nova-black mb-10">
                TECH NOVA <span className="text-nova-violet">CHALLENGE</span> <br />
                <span className="text-nova-violet italic font-light text-4xl md:text-5xl mt-6 block">
                  Valoriser l'Excellence Technologique au Bénin
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-gray-500 leading-relaxed max-w-4xl mt-8">
                Le Tech Nova Challenge représente une initiative académique et entrepreneuriale majeure, ayant pour objectif l'identification, la formation et l'accompagnement des jeunes talents technologiques béninois à fort potentiel d'impact.
              </p>
            </div>

            {/* IMAGE AVEC TEXTE SUPERPOSÉ - DESSOUS LE HEADER */}
            <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden rounded-3xl mt-16 group">
              {/* Image de fond */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                }}
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-nova-black/80 via-nova-black/50 to-transparent" />
              
              {/* Contenu superposé */}
              <div className="relative z-10 h-full flex items-center px-8 md:px-16">
                <div className="max-w-xl">
                  <div className="mb-6">
                    <Trophy className="text-nova-violet mb-4" size={48} />
                    <span className="text-nova-violet font-black tracking-[0.4em] uppercase text-[10px]">
                      Mission Stratégique
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                    Former la prochaine génération d'innovateurs technologiques
                  </h2>
                  
                  <div className="text-white/90 font-light text-lg leading-relaxed space-y-4">
                    <p>
                      Notre programme s'inscrit dans une démarche structurée de développement des compétences techniques, d'encouragement à l'entrepreneuriat innovant et de promotion de la recherche appliquée au service des défis nationaux.
                    </p>
                    <p className="flex items-start gap-3">
                      <TargetIcon className="text-nova-violet mt-1 flex-shrink-0" size={20} />
                      <span>Objectif : créer un écosystème durable d'innovation technologique au Bénin</span>
                    </p>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-white/20">
                    <div className="flex flex-wrap gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-black text-white">60+</div>
                        <div className="text-[10px] uppercase tracking-widest text-nova-violet font-bold mt-2">Projets soumis</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-white">10</div>
                        <div className="text-[10px] uppercase tracking-widest text-nova-violet font-bold mt-2">Établissements partenaires</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-white">100%</div>
                        <div className="text-[10px] uppercase tracking-widest text-nova-violet font-bold mt-2">Formation certifiée</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </header>

        {/* --- SECTION 1 --- */}
        <section className="mb-48">
          <ArticleText>
            <p>
              <span className="text-5xl font-black text-nova-violet float-left mr-4 mt-2 leading-none">L</span>e Tech Nova Challenge (TNC) constitue un programme annuel d'innovation technologique structuré, conçu pour offrir un cadre institutionnel de formation et de valorisation aux étudiants béninois. Cette initiative vise à favoriser l'appropriation des outils numériques avancés et des méthodes de conception innovantes par les talents locaux émergents.
            </p>
            <p>
              À travers cette compétition académique, les participants sont invités à formuler des solutions concrètes et pertinentes face aux défis spécifiques du développement national, notamment dans les secteurs stratégiques de l'agriculture, de l'éducation, de la santé et de l'environnement.
            </p>
            <p className="font-medium text-nova-black text-2xl md:text-3xl leading-tight border-l-4 border-nova-violet pl-8 py-4 mt-12">
              Notre mission institutionnelle consiste à contribuer significativement à la formation d'une élite technologique nationale, capable de porter et d'accélérer le développement numérique et industriel du Bénin.
            </p>
          </ArticleText>
        </section>

        {/* --- IMAGE 1 --- */}
        <ParallaxImage 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" 
          alt="Ingénierie au Bénin"
          caption="Développement des compétences techniques - Promotion de l'excellence académique"
        />

        {/* --- SECTION 2 --- */}
        <section className="mb-48">
          <SectionTitle subtitle="Objectifs Stratégiques">Une démarche pédagogique structurée</SectionTitle>
          <ArticleText>
            <p>
              Le Tech Nova Challenge repose sur une volonté institutionnelle de professionnalisation des porteurs de projets innovants. Il s'agit d'accompagner les étudiants dans le passage crucial de la théorie académique à la pratique opérationnelle, tout en respectant les standards internationaux de qualité.
            </p>
            <p>
              Le programme est articulé autour de plusieurs phases clés : identification des besoins nationaux, conception technique rigoureuse, mentorat par des experts reconnus, et présentation des prototypes devant un comité de sélection pluridisciplinaire composé de personnalités académiques et professionnelles de haut niveau.
            </p>
          </ArticleText>
        </section>

        {/* --- SECTION 3 --- */}
        <section className="mb-48 grid md:grid-cols-2 gap-12">
          <GlassCard className="bg-nova-black border-0 p-12 flex flex-col justify-between group">
            <div>
              <Globe className="text-nova-violet mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-2xl font-black uppercase text-white mb-6">Vision Nationale</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Positionner le Bénin comme un pôle de compétences technologiques de référence en Afrique de l'Ouest, en investissant stratégiquement dans la formation pratique de sa jeunesse et en encourageant l'entrepreneuriat innovant à impact social mesurable.
              </p>
            </div>
          </GlassCard>
          <GlassCard className="p-12 flex flex-col justify-between group">
            <div>
              <Zap className="text-nova-violet mb-8 group-hover:translate-y-[-5px] transition-transform" size={48} />
              <h3 className="text-2xl font-black uppercase text-nova-black mb-6">Engagement Éducatif</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Servir de trait d'union institutionnel entre les établissements d'enseignement technique supérieur et le secteur productif national, afin de garantir une meilleure adéquation entre les formations dispensées et les besoins réels du marché de l'emploi.
              </p>
            </div>
          </GlassCard>
        </section>

        {/* --- SECTION 4 --- */}
        <section className="mb-48">
          <SectionTitle subtitle="Engagement Institutionnel">Nos Valeurs Fondamentales</SectionTitle>
          <ArticleText>
            <p>
              Le Tech Nova Challenge s'appuie sur des principes institutionnels de rigueur académique, de transparence procédurale et de méritocratie. Chaque édition constitue l'occasion de réaffirmer notre attachement à l'excellence pédagogique et au travail collaboratif interdisciplinaire.
            </p>
          </ArticleText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[
              { icon: <Target />, text: "Identifier et soutenir stratégiquement les projets à haut potentiel d'impact national" },
              { icon: <Users2 />, text: "Favoriser la collaboration interdisciplinaire et intersectorielle" },
              { icon: <Lightbulb />, text: "Encourager la recherche appliquée et le développement technologique local" },
              { icon: <ShieldCheck />, text: "Garantir un cadre de sélection intègre, équitable et transparent" },
              { icon: <Award />, text: "Promouvoir l'excellence académique et l'innovation responsable" },
              { icon: <BookOpen />, text: "Valoriser le transfert de connaissances et l'apprentissage continu" }
            ].map((obj, i) => (
              <div key={i} className="flex items-center gap-6 p-8 bg-gray-50 rounded-3xl hover:bg-nova-violet/5 transition-colors group">
                <div className="text-nova-violet group-hover:scale-110 transition-transform flex-shrink-0">
                  {obj.icon}
                </div>
                <span className="text-sm font-black uppercase tracking-tight text-nova-black leading-relaxed">
                  {obj.text}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 7 --- */}
        <section className="mb-20">
          <GlassCard className="p-16 border-nova-violet/20 bg-gradient-to-br from-white to-nova-violet/5">
            <SectionTitle subtitle="Perspectives Stratégiques">Une Passerelle Institutionnelle vers l'Avenir</SectionTitle>
            <ArticleText>
              <p>
                Nous invitons l'ensemble des parties prenantes - partenaires institutionnels, établissements d'enseignement supérieur, entreprises et étudiants - à se joindre à cette dynamique collective de progrès. Ensemble, nous bâtissons les fondations d'un écosystème d'innovation durable et performant, au service du développement socio-économique de la nation béninoise.
              </p>
              <p className="font-medium text-nova-black">
                Le Tech Nova Challenge représente plus qu'une compétition : c'est un engagement institutionnel pour l'avenir technologique du Bénin.
              </p>
            </ArticleText>
            
            <div className="mt-16 flex flex-col md:flex-row gap-8 items-center justify-between border-t border-gray-100 pt-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-full bg-nova-violet/10 flex items-center justify-center text-nova-violet">
                   <BookOpen size={24} />
                </div>
                <div className="w-14 h-14 rounded-full bg-nova-violet/10 flex items-center justify-center text-nova-violet">
                   <GraduationCap size={24} />
                </div>
                <div className="w-14 h-14 rounded-full bg-nova-violet/10 flex items-center justify-center text-nova-violet">
                   <Target size={24} />
                </div>
              </div>
              <button 
                onClick={() => window.location.hash = '/participate'}
                className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet hover:text-nova-black transition-colors bg-white px-8 py-4 rounded-full border border-nova-violet/20 hover:border-nova-violet hover:shadow-lg transition-all"
              >
                Accéder au formulaire de candidature institutionnelle →
              </button>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
};

export default About;
