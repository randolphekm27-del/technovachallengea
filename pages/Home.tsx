
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, Globe, Zap, Users, MessageSquare, 
  Mail, Facebook, Instagram, Linkedin, Twitter, 
  ArrowRight, CheckCircle2, Cpu
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full bg-white selection:bg-nova-violet selection:text-white">
      
      {/* SESSION 1 : BANNIÈRE HÉRO - ÉPURÉE ET BLANCHE */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-24">
        {/* Éléments de design subtils en arrière-plan */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-nova-violet/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-nova-violet/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-8"
            >
              <span className="text-nova-violet font-black tracking-[0.4em] uppercase text-[9px] border border-nova-violet/20 px-4 py-2 rounded-full">
                Bénin • Innovation • Excellence
              </span>
            </motion.div>

            <h1 className="editorial-title text-[clamp(2rem,5.5vw,4.5rem)] font-black text-nova-black leading-tight mb-8 max-w-5xl mx-auto tracking-tighter">
              TECH NOVA CHALLENGE – <br />
              <span className="text-nova-violet italic font-light">L’INNOVATION AU CŒUR DU FUTUR DU BÉNIN.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto mb-14 leading-relaxed">
              Une compétition nationale qui stimule la créativité, l’entrepreneuriat et l’excellence chez les jeunes talents techniques et scientifiques.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="md" onClick={() => navigate('/edition-2026')}>Je découvre l’édition 2026</Button>
              <Button size="md" variant="outline" onClick={() => navigate('/laureats-2025')}>Voir les lauréats 2025</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SESSION 2 : À PROPOS DU CONCOURS */}
      <section className="py-40 px-6 bg-white border-t border-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Définition</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-none text-nova-black">
                Qu’est-ce que le <br /><span className="text-nova-violet">Tech Nova Challenge ?</span>
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                Le Tech Nova Challenge est la première compétition d’innovation technologique au Bénin destinée aux étudiants âgés de 15 à 25 ans. 
                Elle a pour objectif de valoriser les projets techniques novateurs, d’accompagner les jeunes innovateurs et de créer un écosystème favorable à l’entrepreneuriat technologique.
              </p>
              <button 
                onClick={() => navigate('/about')}
                className="text-nova-violet font-black uppercase tracking-[0.4em] text-[10px] border-b border-nova-violet pb-2 hover:text-nova-black hover:border-nova-black transition-colors"
              >
                En savoir plus sur notre mission
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Binômes inscrits", val: "60+" },
                { label: "Projets finalistes", val: "10" },
                { label: "Lauréats récompensés", val: "3" },
                { label: "Jours de formation", val: "3" }
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

      {/* SESSION 3 : THÈME 2026 */}
      <section className="py-40 px-6 bg-nova-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24">
            <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Prochaine Saison</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-10">
              Édition 2026 – L’impact des <br />
              <span className="text-nova-violet italic font-light">Technologies Émergentes.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Pour sa deuxième édition, le Tech Nova Challenge explore les opportunités et les défis des technologies émergentes (IA, IoT, énergie verte, numérique…) dans la création d’entreprises innovantes au Bénin.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-24">
            {[
              { phase: "Janv-Fév", title: "Lancement", desc: "Lancement & inscriptions officielles", icon: <Globe size={20} /> },
              { phase: "Mars", title: "Mentorat", desc: "Présélection & mentorat technique", icon: <Users size={20} /> },
              { phase: "Avril", title: "Ateliers", desc: "Prototypage & ateliers intensifs", icon: <Cpu size={20} /> },
              { phase: "Mai", title: "Finale", desc: "Grande finale & remise des prix", icon: <Trophy size={20} /> }
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
            <Button size="lg" onClick={() => navigate('/participate')}>Je m’inscris à l’édition 2026</Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-nova-violet/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* SESSION 4 : LAURÉATS 2025 */}
      <section className="py-40 px-6 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <div>
              <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Rétrospective</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-nova-black">
                Ils ont marqué la <br /><span className="text-nova-violet">première édition.</span>
              </h2>
            </div>
            <button onClick={() => navigate('/laureats-2025')} className="text-[10px] font-black uppercase tracking-[0.4em] text-nova-violet hover:text-nova-black transition-colors flex items-center gap-2">
              Voir plus de projets 2025 <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { rank: "1er Prix", names: "Béoula BOKO & Siméon NTCHA", project: "Motopompe diesel intelligente", desc: "Pour l’irrigation en zone rurale.", prize: "150 000 FCFA + Accompagnement" },
              { rank: "2e Prix", names: "ISSAKA Awa & FOLARIN Mourchid", project: "Innovation thermique", desc: "Pour l’agroalimentaire béninois.", prize: "100 000 FCFA" },
              { rank: "3e Prix", names: "ROUFAI Aissatou & ZANVO Horeb", project: "Application ELEVATE", desc: "Réseau social d’orientation.", prize: "50 000 FCFA" }
            ].map((w, i) => (
              <GlassCard key={i} className={`p-12 hover:shadow-2xl transition-all ${i === 0 ? 'ring-2 ring-nova-violet ring-offset-8' : ''}`}>
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

      {/* SESSION 5 : PARTENAIRES */}
      <section className="py-40 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24">
            <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Soutiens</span>
            <h2 className="text-3xl font-black uppercase tracking-[0.5em] text-nova-black">Ils nous font confiance</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
            {["WISANE (INGCO)", "ENSET Lokossa", "INSTI Lokossa", "SCOP – Sèmè City", "CAEB Lokossa", "ONG ESPOIR PLURIEL"].map((p, i) => (
              <div key={i} className="text-center font-black text-[10px] tracking-widest uppercase p-4 border border-gray-200 rounded-2xl bg-white shadow-sm h-24 flex items-center justify-center">
                {p}
              </div>
            ))}
          </div>
          
          <div className="mt-24 text-center max-w-2xl mx-auto">
            <p className="text-gray-400 font-light italic mb-12">Un grand merci à tous nos partenaires institutionnels, techniques et financiers pour leur engagement à nos côtés.</p>
            <Button size="sm" variant="outline" onClick={() => navigate('/contact')}>Devenir partenaire : Contactez-nous</Button>
          </div>
        </div>
      </section>

      {/* SESSION 6 : TÉMOIGNAGES */}
      <section className="py-40 px-6 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-24 text-center">
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black">Ils en parlent</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <GlassCard className="p-12 bg-gradient-to-br from-white to-gray-50">
              <MessageSquare className="text-nova-violet mb-8" size={32} />
              <p className="text-xl font-light italic mb-12 leading-relaxed text-nova-black">
                « Le Tech Nova Challenge a été une expérience transformative. La formation, le mentorat et la visibilité offerts ont donné vie à notre projet. »
              </p>
              <div>
                <div className="text-nova-violet font-black uppercase tracking-widest text-sm">Béoula BOKO</div>
                <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Lauréat 2025</div>
              </div>
            </GlassCard>
            <GlassCard className="p-12 bg-gradient-to-br from-white to-gray-50">
              <MessageSquare className="text-nova-violet mb-8" size={32} />
              <p className="text-xl font-light italic mb-12 leading-relaxed text-nova-black">
                « Soutenir cette initiative, c’est investir dans l’avenir technologique du Bénin. »
              </p>
              <div>
                <div className="text-nova-violet font-black uppercase tracking-widest text-sm">Mahomed SALIFOU</div>
                <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Responsable SCOP – Sèmè City</div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* SESSION 7 : RESTEZ INFORMÉS */}
      <section className="py-64 px-6 bg-nova-black text-white text-center relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <span className="text-nova-violet font-bold tracking-[0.5em] uppercase text-[10px] block mb-8">Contact</span>
          <h2 className="editorial-title text-4xl md:text-7xl font-black mb-16 leading-[0.85]">
            Ne manquez rien de <br /><span className="text-nova-violet italic font-light">l'édition 2026 !</span>
          </h2>
          
          <p className="text-gray-400 mb-12 font-light text-lg">Inscrivez-vous pour recevoir les actualités, les dates clés et les conseils pour participer.</p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-20">
            <input 
              type="email" 
              placeholder="Entrez votre e-mail" 
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-10 py-5 outline-none focus:ring-2 ring-nova-violet transition-all text-white"
            />
            <Button size="md">S’abonner</Button>
          </div>

          <div className="flex justify-center gap-12 text-gray-400 mb-16">
            <a href="#" className="hover:text-nova-violet transition-colors flex flex-col items-center gap-2 group">
              <Facebook size={24} /><span className="text-[8px] uppercase font-black tracking-widest">Facebook</span>
            </a>
            <a href="#" className="hover:text-nova-violet transition-colors flex flex-col items-center gap-2 group">
              <Instagram size={24} /><span className="text-[8px] uppercase font-black tracking-widest">Instagram</span>
            </a>
            <a href="#" className="hover:text-nova-violet transition-colors flex flex-col items-center gap-2 group">
              <Linkedin size={24} /><span className="text-[8px] uppercase font-black tracking-widest">LinkedIn</span>
            </a>
            <a href="#" className="hover:text-nova-violet transition-colors flex flex-col items-center gap-2 group">
              <Twitter size={24} /><span className="text-[8px] uppercase font-black tracking-widest">Twitter</span>
            </a>
          </div>
          
          <div className="pt-20 border-t border-white/10 flex flex-col items-center gap-4">
             <div className="flex items-center gap-3 text-nova-violet font-black text-sm uppercase tracking-widest">
                <Mail size={16} />
                contact@technovachallenge.com
             </div>
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 mt-8">
                Tech Nova Challenge — @TechNovaChallenge
             </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] h-[50vh] bg-nova-violet/5 blur-[120px] rounded-full" />
      </section>

    </div>
  );
};

export default Home;
