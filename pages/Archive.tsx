
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Trophy, Users, Star, Calendar } from 'lucide-react';
import GlassCard from '../components/GlassCard';
// Fix: Added missing Button import
import Button from '../components/Button';

// Fix: Use a proper interface and React.FC to avoid 'key' property assignment errors in JSX
interface GalleryItemProps {
  src: string;
  alt: string;
  speed: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, speed }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div 
      ref={ref} 
      style={{ y, scale }}
      className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-100 group shadow-2xl"
    >
      <div className="absolute inset-0 bg-nova-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute bottom-8 left-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-black tracking-widest text-white uppercase bg-nova-violet px-4 py-2 rounded-full">
          {alt}
        </span>
      </div>
    </motion.div>
  );
};

const Archive: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const titleX = useTransform(smoothProgress, [0, 0.5], [0, -200]);

  const images = [
    { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", alt: "Pitch Session", speed: -0.5 },
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", alt: "Mentorship", speed: 0.8 },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", alt: "Team Work", speed: -0.2 },
    { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", alt: "Grand Final", speed: 0.5 },
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800", alt: "Innovation Lab", speed: -0.7 },
    { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800", alt: "Winner Award", speed: 0.3 }
  ];

  return (
    <div ref={containerRef} className="relative bg-white pt-40 pb-40 overflow-hidden">
      
      {/* SECTION TITRE — PARALLAXE HORIZONTALE */}
      <section className="relative h-[60vh] flex items-center mb-40">
        <motion.div style={{ x: titleX }} className="flex gap-20 whitespace-nowrap">
          <h1 className="editorial-title text-[15vw] font-black text-nova-black opacity-5">ARCHIVES 2024</h1>
          <h1 className="editorial-title text-[15vw] font-black text-nova-violet">ARCHIVES 2024</h1>
          <h1 className="editorial-title text-[15vw] font-black text-nova-black opacity-5">ARCHIVES 2024</h1>
        </motion.div>
      </section>

      {/* RÉTROSPECTIVE 2024 */}
      <section className="container mx-auto px-6 mb-64">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Édition Précédente</span>
            <h2 className="text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-12">
              L'ANNÉE DE LA<br/><span className="text-nova-violet italic font-light">RENAISSANCE.</span>
            </h2>
            <div className="space-y-8 text-xl text-gray-400 font-light leading-relaxed">
              <p>En 2024, le Tech Nova Challenge a rassemblé plus de 450 projets venant des 12 départements du Bénin.</p>
              <p>Une édition marquée par l'émergence de solutions IA dédiées à l'agriculture et à la santé communautaire.</p>
            </div>
            <div className="grid grid-cols-2 gap-12 mt-16">
              {[
                { icon: <Users />, label: "Candidats", val: "450+" },
                { icon: <Star />, label: "Finalistes", val: "15" },
                { icon: <Calendar />, label: "Sessions", val: "42" },
                { icon: <Trophy />, label: "Prix", val: "$25k" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="text-nova-violet opacity-50">{stat.icon}</div>
                  <div className="text-3xl font-black text-nova-black">{stat.val}</div>
                  <div className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <GlassCard className="relative z-10 bg-nova-black/5 p-16">
              <Trophy size={64} className="text-nova-violet mb-8" />
              <h3 className="text-3xl font-black mb-4 uppercase">Le Grand Vainqueur</h3>
              <p className="text-xl font-bold text-nova-violet mb-6">Projet "AgroVision"</p>
              <p className="text-gray-500 font-light leading-relaxed mb-8">
                Une solution de détection précoce des maladies du manioc utilisant la vision par ordinateur, développée par une équipe de Parakou.
              </p>
              <div className="h-px w-full bg-gray-100 mb-8" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <div className="font-bold text-sm">Équipe Kpodékon</div>
                  <div className="text-xs text-gray-400">Fondateurs</div>
                </div>
              </div>
            </GlassCard>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-nova-violet/5 blur-[100px] rounded-full" />
          </div>
        </div>
      </section>

      {/* GALERIE PARALLAXE */}
      <section className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-4">Galerie</span>
          <h2 className="text-5xl font-black tracking-tighter uppercase">Instants de génie</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          {images.map((img, i) => (
            <GalleryItem key={i} {...img} />
          ))}
        </div>
      </section>

      {/* CTA VERS PARTICIPATION */}
      <section className="mt-64 py-32 bg-nova-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-nova-violet/5" />
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl text-white font-black uppercase mb-12 tracking-tighter">
            C'est votre tour de<br/><span className="text-nova-violet">marquer l'histoire.</span>
          </h2>
          <Button size="lg" onClick={() => window.location.href = '#/participate'}>
            Rejoindre l'édition 2025
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Archive;
