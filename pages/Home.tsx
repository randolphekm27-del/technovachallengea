
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, Globe, Users, MessageSquare, 
  Mail, Facebook, Instagram, Linkedin, Twitter, 
  ArrowRight, Cpu
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const heroImageUrl = "https://lh3.googleusercontent.com/d/1oOnihWTNtcpiweEIxDl5LtpxIcP6GSju";

  return (
    <div ref={containerRef} className="relative w-full bg-white selection:bg-nova-violet selection:text-white">
      
      {/* SESSION 1 : BANNIÈRE HÉRO */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-white pt-32 pb-20 px-6">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-nova-violet/[0.015] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-nova-violet/[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 bg-nova-violet/5 rounded-full border border-nova-violet/10"
              >
                <div className="w-2 h-2 bg-nova-violet rounded-full animate-pulse" />
                <span className="text-nova-violet font-black tracking-[0.4em] uppercase text-[9px]">
                  Bénin • Innovation • Futur
                </span>
              </motion.div>

              <h1 className="editorial-title text-[clamp(2.5rem,5.5vw,5rem)] font-black text-nova-black leading-[0.95] mb-10 tracking-tighter">
  TECH NOVA <span className="text-nova-violet">CHALLENGE</span> <br />
  <span className="text-nova-violet italic font-light">L'INNOVATION AU CŒUR DU BÉNIN.</span>
</h1>

              <p className="text-xl text-gray-400 font-light max-w-xl mb-14 leading-relaxed">
                Le concours national de référence dédié à l'émergence des talents technologiques de demain. Transformez vos compétences en solutions pour le développement du pays.
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <Button size="md" onClick={() => navigate('/edition-2026')}>DÉCOUVRIR L'ÉDITION 2026</Button>
                <button 
                  onClick={() => navigate('/laureats-2025')}
                  className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-nova-violet transition-all"
                >
                  Rétrospective 2025 <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: [0, -20, 0] }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeOut" },
                scale: { duration: 1.5, ease: "easeOut" },
                x: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" } 
              }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[600px] flex items-center justify-center">
                <img 
                  src={heroImageUrl} 
                  alt="Tech Nova Innovation" 
                  className="w-full h-auto object-contain transition-all duration-1000"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SESSION 2 : PRÉSENTATION INSTITUTIONNELLE */}
      <section className="py-40 px-6 bg-white border-t border-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Mission Institutionnelle</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-none text-nova-black">
                Qu’est-ce que le <br /><span className="text-nova-violet">Tech Nova Challenge ?</span>
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                Il s'agit d'une initiative nationale visant à identifier et accompagner les jeunes étudiants béninois (15-25 ans) dans la conception de solutions technologiques concrètes. Le programme favorise l'excellence académique et le développement des compétences techniques locales.
              </p>
              <button 
                onClick={() => navigate('/about')}
                className="text-nova-violet font-black uppercase tracking-[0.4em] text-[10px] border-b border-nova-violet pb-2 hover:text-nova-black hover:border-nova-black transition-colors"
              >
                Lire notre rapport de mission
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Candidatures reçues", val: "60+" },
                { label: "Projets sélectionnés", val: "10" },
                { label: "Lauréats distingués", val: "3" },
                { label: "Institutions partenaires", val: "6" }
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-nova-violet hover:text-white transition-all duration-500 group">
                  <div className="text-nova-violet group-hover:text-white text-4xl font-black mb-2">{stat.val}</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SESSION 3 : CALENDRIER PRÉVISIONNEL 2026 */}
      <section className="py-40 px-6 bg-nova-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24">
            <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Agenda Officiel</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-10">
              L'Édition 2026 – <br />
              <span className="text-nova-violet italic font-light">Technologies et Durabilité.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Le programme 2026 met l'accent sur l'application de l'Intelligence Artificielle et de l'Internet des Objets (IoT) aux enjeux environnementaux et sociaux du Bénin.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-24">
            {[
              { phase: "Janv-Fév", title: "Inscriptions", desc: "Ouverture du registre national des candidatures.", icon: <Globe size={20} /> },
              { phase: "Mars", title: "Sélection", desc: "Évaluation technique des dossiers par les experts.", icon: <Users size={20} /> },
              { phase: "Avril", title: "Accompagnement", desc: "Sessions de formation et de perfectionnement.", icon: <Cpu size={20} /> },
              { phase: "Mai", title: "Présentation", desc: "Finale nationale et remise des distinctions.", icon: <Trophy size={20} /> }
            ].map((p, i) => (
              <GlassCard key={i} className="bg-white/5 border-white/10 p-10 hover:bg-white/10 transition-colors">
                <div className="text-nova-violet mb-6">{p.icon}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-nova-violet mb-2">{p.phase}</div>
                <h3 className="text-xl font-black uppercase mb-4">{p.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{p.desc}</p>
              </GlassCard>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => navigate('/participate')}>Consulter les modalités d'inscription</Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-nova-violet/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* SESSION 4 : ARCHIVES 2025 */}
      <section className="py-40 px-6 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <div>
              <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Rétrospective de l'impact</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-nova-black">
                Les lauréats de la <br /><span className="text-nova-violet">première édition.</span>
              </h2>
            </div>
            <button onClick={() => navigate('/laureats-2025')} className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet hover:text-nova-black transition-colors flex items-center gap-2">
              Consulter le palmarès complet <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { rank: "1er Prix d'Excellence", names: "Béoula BOKO & Siméon NTCHA", project: "Irrigation Agricole Automatisée", desc: "Solution technique pour l'optimisation des ressources en milieu rural.", prize: "150 000 FCFA" },
              { rank: "2e Prix d'Excellence", names: "Awa ISSAKA & M. FOLARIN", project: "Conservation Thermique", desc: "Dispositif d'aide à la conservation agroalimentaire.", prize: "100 000 FCFA" },
              { rank: "3e Prix d'Excellence", names: "Aissatou ROUFAI & P. ZANVO", project: "Solution d'Orientation Éducative", desc: "Plateforme numérique d'aide à la décision académique.", prize: "50 000 FCFA" }
            ].map((w, i) => (
              <GlassCard key={i} className={`p-12 hover:shadow-2xl transition-all ${i === 0 ? 'ring-2 ring-nova-violet ring-offset-4' : ''}`}>
                <div className="text-nova-violet mb-8"><Trophy size={40} /></div>
                <div className="text-xs font-black uppercase tracking-widest text-nova-violet mb-2">{w.rank}</div>
                <h3 className="text-2xl font-black uppercase mb-2 leading-none text-nova-black">{w.names}</h3>
                <div className="text-nova-black font-bold text-sm mb-6">{w.project}</div>
                <p className="text-gray-500 font-light text-sm mb-8">{w.desc}</p>
                <div className="pt-6 border-t border-gray-100 font-black text-nova-violet text-lg">{w.prize}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SESSION 5 : PARTENAIRES INSTITUTIONNELS */}
      <section className="py-40 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24">
            <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Coopération</span>
            <h2 className="text-3xl font-black uppercase tracking-[0.5em] text-nova-black">Ils soutiennent l'initiative</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
            {["WISANE", "ENSET", "INSTI", "SÈMÈ CITY", "CAEB", "ONG ESPOIR"].map((p, i) => (
              <div key={i} className="text-center font-black text-[10px] tracking-widest uppercase p-4 border border-gray-200 rounded-2xl bg-white shadow-sm flex items-center justify-center h-24">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-64 px-6 bg-nova-black text-white text-center relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Information & Contact</span>
          <h2 className="editorial-title text-4xl md:text-7xl font-black mb-16 leading-tight">
            CONTRIBUEZ AU <br /><span className="text-nova-violet italic font-light">DÉVELOPPEMENT.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-20">
            <input 
              type="email" 
              placeholder="votre@email.com" 
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-10 py-5 outline-none focus:ring-2 ring-nova-violet transition-all text-white"
            />
            <Button size="md">RECEVOIR LES NOTES</Button>
          </div>

          <div className="flex justify-center gap-12 text-gray-500 mb-16">
            <a href="#" className="hover:text-nova-violet transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-nova-violet transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-nova-violet transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-nova-violet transition-colors"><Twitter size={24} /></a>
          </div>
          
          <div className="pt-20 border-t border-white/10 text-center">
             <div className="text-nova-violet font-black text-sm uppercase tracking-[0.3em] mb-4">
                contact@technovachallenge.com
             </div>
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-700">
                © 2026 Tech Nova Challenge — Initiative Nationale
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
