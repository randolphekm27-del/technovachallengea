
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

// Fix: Define SectionTitleProps interface and use React.FC to correctly handle the children prop and satisfy TypeScript.
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

// Fix: Define ArticleTextProps interface and use React.FC to correctly handle the children prop and satisfy TypeScript.
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
              L'essence du projet
            </span>
            <h1 className="editorial-title text-[clamp(3rem,10vw,12rem)] leading-[0.8] text-nova-black mb-16">
              REBÂTIR LE <br />
              <span className="text-nova-violet italic font-light">POSSIBLE.</span>
            </h1>
            <p className="text-2xl md:text-4xl font-light text-gray-400 leading-tight max-w-3xl">
              Le Tech Nova Challenge est bien plus qu'une compétition : c'est le signal d'un Bénin qui crée et innove.
            </p>
          </motion.div>
        </header>

        {/* --- SECTION 1 : UNE PLATEFORME D'EXPRESSION --- */}
        <section className="mb-48">
          <ArticleText>
            <p>
              <span className="text-5xl font-black text-nova-violet float-left mr-4 mt-2 leading-none">L</span>e Tech Nova Challenge (TNC) est un concours d’innovation technologique dédié à la jeunesse béninoise, conçu comme une véritable plateforme d’expression, de formation et de valorisation des talents issus principalement des filières techniques et scientifiques. 
            </p>
            <p>
              Il offre un cadre structuré où les étudiants et jeunes professionnels identifient des problématiques concrètes de leur environnement — emploi, éducation, sécurité, cadre de vie, services numériques — pour concevoir des solutions technologiques adaptées. Ici, les idées ne restent pas des concepts abstraits : elles sont prototypées et présentées devant un jury et un public.
            </p>
            <p className="font-medium text-nova-black italic text-2xl md:text-3xl leading-tight border-l-4 border-nova-violet pl-8 py-4">
              Plus qu’une simple compétition, le TNC se veut un espace d’éveil et de mobilisation du génie créatif de la jeunesse béninoise.
            </p>
          </ArticleText>
        </section>

        {/* --- IMAGE 1 --- */}
        <ParallaxImage 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" 
          alt="Technologie et Innovation"
          caption="Un laboratoire d'innovations appliquées"
        />

        {/* --- SECTION 2 : L'IDÉE FONDATRICE --- */}
        <section className="mb-48">
          <SectionTitle subtitle="Genèse">Un Laboratoire Appliqué</SectionTitle>
          <ArticleText>
            <p>
              L’idée fondatrice du TNC part du constat que le pays regorge de jeunes techniquement compétents, mais que ces derniers manquent souvent de cadres structurés pour expérimenter, confronter leurs idées à la reality et se faire repérer par des partenaires ou employeurs.
            </p>
            <p>
              Le concours est donc pensé comme un laboratoire d’innovations appliquées : il accompagne les jeunes dans tout un parcours, de l’appel à candidatures à la grande finale, en passant par la pré‑sélection, le coaching, la mise en situation de pitch et la confrontation aux critères professionnels. L’idée est de transformer des projets théoriques en solutions concrètes, utiles et réalisables, capables d’apporter une valeur ajoutée palpable au Bénin et, plus largement, à l’Afrique.
            </p>
          </ArticleText>
        </section>

        {/* --- SECTION 3 : VISION & HUB (GLASS CARDS) --- */}
        <section className="mb-48 grid md:grid-cols-2 gap-12">
          <GlassCard className="bg-nova-black border-0 p-12 flex flex-col justify-between group">
            <div>
              <Globe className="text-nova-violet mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-2xl font-black uppercase text-white mb-6">La Vision</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Devenir, à moyen et long terme, une référence nationale puis sous‑régionale en matière d’innovation technologique portée par les jeunes. Contribuer à bâtir un écosystème où les solutions conçues localement participent directement au développement économique, social et numérique du pays.
              </p>
            </div>
          </GlassCard>
          <GlassCard className="p-12 flex flex-col justify-between group">
            <div>
              <Zap className="text-nova-violet mb-8 group-hover:translate-y-[-5px] transition-transform" size={48} />
              <h3 className="text-2xl font-black uppercase text-nova-black mb-6">Le Hub</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Le concours se projette comme un hub d’innovation reconnu, un rendez‑vous incontournable où l’on découvre chaque année de nouvelles générations de porteurs de projets, de développeurs, de designers et de techniciens capables de répondre, par la technologie, aux grands défis de la société.
              </p>
            </div>
          </GlassCard>
        </section>

        {/* --- SECTION 4 : MISSION & OBJECTIFS --- */}
        <section className="mb-48">
          <SectionTitle subtitle="Notre Rôle">Mission & Objectifs</SectionTitle>
          <ArticleText>
            <p>
              La mission du TNC se décline autour de plusieurs axes complémentaires. D’abord, identifier et révéler les talents à travers un appel à projets ouvert et structuré. Ensuite, accompagner ces talents grâce à des activités de renforcement de capacités — coaching sur la communication, le pitch, la structuration de projet — afin de professionnaliser progressivement leur démarche.
            </p>
            <p>
              Les objectifs stratégiques découlent directement de cette mission. Il s’agit notamment de promouvoir une culture de l’innovation chez les jeunes, de stimuler l’esprit d’initiative et d’entrepreneuriat, et de renforcer les compétences pratiques en conception et prototypage.
            </p>
          </ArticleText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[
              { icon: <Target />, text: "Identifier et révéler les talents précoces." },
              { icon: <Users2 />, text: "Favoriser le travail collaboratif en binômes." },
              { icon: <Lightbulb />, text: "Stimuler l'esprit d'initiative disruptif." },
              { icon: <ShieldCheck />, text: "Changer le regard porté sur la jeunesse." }
            ].map((obj, i) => (
              <div key={i} className="flex items-center gap-6 p-8 bg-gray-50 rounded-3xl hover:bg-nova-violet/5 transition-colors group">
                <div className="text-nova-violet group-hover:scale-110 transition-transform">{obj.icon}</div>
                <span className="text-sm font-black uppercase tracking-tight text-nova-black">{obj.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- IMAGE 2 --- */}
        <ParallaxImage 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" 
          alt="Collaboration et Co-working"
          caption="Un cercle vertueux de reconnaissance et d'émulation"
        />

        {/* --- SECTION 5 : VALEURS --- */}
        <section className="mb-48 py-24 bg-nova-black -mx-6 px-6 md:rounded-[4rem] text-white">
          <div className="max-w-3xl mx-auto">
            {/* Correction : ajout de la classe text-white pour que le titre soit visible sur le fond noir */}
            <SectionTitle subtitle="ADN" className="text-white">Des Valeurs Fortes</SectionTitle>
            <ArticleText className="text-gray-400">
              <p>
                Le concours s’appuie sur un ensemble de valeurs fortes qui structurent son identité. L’excellence y occupe une place centrale : les exigences sont élevées tant pour la qualité technique des solutions que pour la rigueur du processus.
              </p>
              <p>
                L’équité et la transparence guident la sélection, garantissant que chaque binôme est jugé sur la pertinence de son idée et l’engagement de l’équipe. L’innovation n'est pas seulement un résultat, c'est un état d’esprit fait de curiosité et d’audace. Enfin, la responsabilité sociale est une valeur cardinale, car chaque projet vise l’amélioration concrète des conditions de vie.
              </p>
            </ArticleText>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-nova-violet font-black text-3xl mb-2">Excellence</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Rigueur absolue</div>
              </div>
              <div className="text-center">
                <div className="text-nova-violet font-black text-3xl mb-2">Équité</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Transparence</div>
              </div>
              <div className="text-center">
                <div className="text-nova-violet font-black text-3xl mb-2">Audace</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Innovation</div>
              </div>
              <div className="text-center">
                <div className="text-nova-violet font-black text-3xl mb-2">Impact</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Responsabilité</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 6 : APPRENTISSAGE CONTINU --- */}
        <section className="mb-48">
          <SectionTitle subtitle="Évolution">Un Apprentissage Continu</SectionTitle>
          <ArticleText>
            <p>
              Dans sa logique de fonctionnement, le Tech Nova Challenge ne se limite pas à un évènement ponctuel : il est pensé comme un processus d’apprentissage continu. Chaque édition permet de capitaliser sur les forces et faiblesses de la précédente, d’affiner les modalités et d’élargir le réseau de partenaires et de mentors.
            </p>
            <p>
              Cette dynamique d’amélioration continue fait du TNC un chantier permanent où organisateurs, encadreurs et participants montent en compétence ensemble, en construisant progressivement un écosystème plus mature de l’innovation technologique au Bénin.
            </p>
          </ArticleText>
          <div className="mt-16 flex justify-center">
            <Sprout size={64} className="text-nova-violet opacity-20 animate-pulse" />
          </div>
        </section>

        {/* --- SECTION 7 : LA PASSERELLE --- */}
        <section className="mb-20">
          <GlassCard className="p-16 border-nova-violet/20 bg-gradient-to-br from-white to-nova-violet/5">
            <SectionTitle subtitle="Futur">Une Passerelle Stratégique</SectionTitle>
            <ArticleText>
              <p>
                Le TNC joue pleinement un rôle de passerelle entre le monde académique et le monde professionnel. En mobilisant principalement des étudiants et jeunes diplômés, le concours crée un pont concret entre ce qui est appris dans les salles de classe et les attentes du marché du travail ou de l’entrepreneuriat technologique.
              </p>
              <p>
                Les moments de pitch, les échanges avec le jury, les interactions avec les sponsors inspirent les jeunes à ajuster leur manière de concevoir un projet, pour le transformer en une solution réellement exploitable.
              </p>
              <p className="text-nova-black font-black uppercase text-2xl tracking-tighter mt-12 leading-none">
                Le TNC prépare les talents qui écriront la prochaine page de l’histoire technologique du Bénin.
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
                Rejoindre le mouvement →
              </button>
            </div>
          </GlassCard>
        </section>

      </div>
    </div>
  );
};

export default About;
