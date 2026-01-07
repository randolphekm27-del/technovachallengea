
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Target, Lightbulb, Users2, ShieldCheck, Heart, Zap, Sprout, BookOpen, GraduationCap } from 'lucide-react';
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
    <div className="pt-40 pb-32 bg-white selection:bg-nova-violet selection:text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* --- HEADER --- */}
        <header className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8">
              Présentation Institutionnelle
            </span>
            <h1 className="editorial-title text-[clamp(3rem,10vw,12rem)] leading-[0.8] text-nova-black mb-16">
              ÉDIFIER LE <br />
              <span className="text-nova-violet italic font-light">DEMAIN.</span>
            </h1>
            <p className="text-2xl md:text-4xl font-light text-gray-400 leading-tight max-w-3xl">
              Le Tech Nova Challenge est une plateforme nationale dédiée à la valorisation de l'excellence technologique et scientifique de la jeunesse béninoise.
            </p>
          </motion.div>
        </header>

        {/* --- SECTION 1 --- */}
        <section className="mb-48">
          <ArticleText>
            <p>
              <span className="text-5xl font-black text-nova-violet float-left mr-4 mt-2 leading-none">L</span>e Tech Nova Challenge (TNC) est un programme annuel d'innovation technologique conçu pour offrir un cadre structuré de formation et de valorisation aux étudiants béninois. L'initiative vise à favoriser l'appropriation des outils numériques et des méthodes de conception modernes par les talents locaux.
            </p>
            <p>
              À travers ce concours, les participants sont invités à formuler des solutions concrètes face aux défis du développement national, notamment dans les secteurs de l'agriculture, de l'éducation et de l'environnement.
            </p>
            <p className="font-medium text-nova-black italic text-2xl md:text-3xl leading-tight border-l-4 border-nova-violet pl-8 py-4">
              Notre mission est de contribuer à la formation d'une élite technologique capable de porter le développement numérique du pays.
            </p>
          </ArticleText>
        </section>

        {/* --- IMAGE 1 --- */}
        <ParallaxImage 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" 
          alt="Ingénierie au Bénin"
          caption="Promotion de l'excellence technique"
        />

        {/* --- SECTION 2 --- */}
        <section className="mb-48">
          <SectionTitle subtitle="Objectifs">Une démarche structurante</SectionTitle>
          <ArticleText>
            <p>
              Le TNC repose sur une volonté de professionnalisation des porteurs de projets. Il s'agit d'accompagner les étudiants dans le passage de la théorie académique à la pratique opérationnelle.
            </p>
            <p>
              Le programme est articulé autour de plusieurs phases clés : identification des besoins, conception technique, mentorat par des experts et présentation des prototypes devant un comité de sélection composé de personnalités académiques et professionnelles.
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
                Positionner le Bénin comme un pôle de compétences technologiques en Afrique de l'Ouest, en investissant dans la formation pratique de sa jeunesse et en encourageant l'entrepreneuriat à impact social.
              </p>
            </div>
          </GlassCard>
          <GlassCard className="p-12 flex flex-col justify-between group">
            <div>
              <Zap className="text-nova-violet mb-8 group-hover:translate-y-[-5px] transition-transform" size={48} />
              <h3 className="text-2xl font-black uppercase text-nova-black mb-6">Engagement Éducatif</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Servir de trait d'union entre les institutions d'enseignement technique et le secteur productif, afin de garantir une meilleure adéquation entre les formations et les besoins réels du marché.
              </p>
            </div>
          </GlassCard>
        </section>

        {/* --- SECTION 4 --- */}
        <section className="mb-48">
          <SectionTitle subtitle="Engagement">Nos Valeurs Fondamentales</SectionTitle>
          <ArticleText>
            <p>
              Le Tech Nova Challenge s'appuie sur des principes de rigueur, de transparence et de mérite. Chaque édition est l'occasion de réaffirmer notre attachement à l'excellence et au travail collaboratif.
            </p>
          </ArticleText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[
              { icon: <Target />, text: "Identifier et soutenir les projets à haut potentiel." },
              { icon: <Users2 />, text: "Favoriser la collaboration interdisciplinaire." },
              { icon: <Lightbulb />, text: "Encourager la recherche et le développement local." },
              { icon: <ShieldCheck />, text: "Garantir un cadre de sélection intègre et juste." }
            ].map((obj, i) => (
              <div key={i} className="flex items-center gap-6 p-8 bg-gray-50 rounded-3xl hover:bg-nova-violet/5 transition-colors group">
                <div className="text-nova-violet group-hover:scale-110 transition-transform">{obj.icon}</div>
                <span className="text-sm font-black uppercase tracking-tight text-nova-black">{obj.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 7 --- */}
        <section className="mb-20">
          <GlassCard className="p-16 border-nova-violet/20 bg-gradient-to-br from-white to-nova-violet/5">
            <SectionTitle subtitle="Perspectives">Une Passerelle vers l'Avenir</SectionTitle>
            <ArticleText>
              <p>
                Nous invitons les partenaires, les institutions et les étudiants à se joindre à cette dynamique de progrès. Ensemble, nous bâtissons les fondations d'un écosystème d'innovation solide au service de la nation béninoise.
              </p>
            </ArticleText>
            
            <div className="mt-16 flex flex-col md:flex-row gap-8 items-center justify-between border-t border-gray-100 pt-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-nova-violet/10 flex items-center justify-center text-nova-violet">
                   <BookOpen size={20} />
                </div>
                <div className="w-12 h-12 rounded-full bg-nova-violet/10 flex items-center justify-center text-nova-violet">
                   <GraduationCap size={20} />
                </div>
              </div>
              <button 
                onClick={() => window.location.hash = '/participate'}
                className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet hover:text-nova-black transition-colors"
              >
                Accéder au formulaire de candidature →
              </button>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
};

export default About;
