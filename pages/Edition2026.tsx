
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Rocket, CheckCircle2, Heart, 
  Lightbulb, Users, Award, HelpCircle, 
  ArrowRight, Download, Mail, Phone, MapPin,
  Facebook, Instagram, Linkedin, Twitter
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Edition2026: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen selection:bg-nova-violet selection:text-white">
      
      {/* SECTION 1 */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="editorial-title text-[clamp(2rem,6vw,5rem)] font-black text-nova-black leading-[1.1] mb-8 max-w-5xl mx-auto">
              MODALITÉS DE L'ÉDITION <br />
              <span className="text-nova-violet italic font-light">NOVA CHALLENGE 2026.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
              Consultez les directives officielles pour participer à la seconde édition du concours national d'innovation.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative aspect-[21/9] w-full rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600" 
              alt="Séance de travail" 
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-nova-violet/10 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-6">Thématique Centrale</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-12 leading-tight">
              Technologies Émergentes et Développement Durable
            </h2>
          </div>
          <div className="text-xl text-gray-500 font-light leading-relaxed space-y-8 text-center">
            <p>
              Le thème retenu pour l'édition 2026 est : <span className="text-nova-black font-bold">“Les solutions numériques au service de l’Entrepreneuriat Durable”</span>. Nous encourageons les participants à concevoir des outils capables de répondre aux besoins socio-économiques réels des populations béninoises.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 : CALENDRIER */}
      <section className="py-40 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black mb-4">
              Calendrier du <br /><span className="text-nova-violet">Programme 2026.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                date: "Janvier – Février 2026", 
                title: "Appel à candidatures", 
                desc: "Période d'enregistrement des binômes sur la plateforme officielle." 
              },
              { 
                date: "Mars 2026", 
                title: "Examen des dossiers", 
                desc: "Étude de la pertinence technique et de la faisabilité par le comité de sélection." 
              },
              { 
                date: "Avril 2026", 
                title: "Ateliers de formation", 
                desc: "Sessions intensives de coaching et de prototypage pour les projets retenus." 
              },
              { 
                date: "Mai 2026", 
                title: "Démonstration finale", 
                desc: "Présentation des solutions abouties devant le jury national." 
              }
            ].map((step, i) => (
              <GlassCard key={i} className="p-10 border-0 shadow-sm bg-white">
                <div className="text-nova-violet font-black text-[10px] uppercase tracking-widest mb-4">{step.date}</div>
                <h3 className="text-xl font-black uppercase mb-6 leading-tight text-nova-black">{step.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{step.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 : DISTINCTIONS */}
      <section className="py-40 px-6 bg-nova-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black uppercase mb-12">
              Distinctions et <br /><span className="text-nova-violet">Accompagnement.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Les lauréats bénéficient de bourses de soutien et d'un programme d'incubation pour favoriser la concrétisation de leur projet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { rank: "Premier Prix d'Excellence", prize: "500 000 FCFA", bonus: "Équipements informatiques + Accompagnement", color: "text-nova-violet" },
              { rank: "Deuxième Prix d'Excellence", prize: "300 000 FCFA", bonus: "Sessions de mentorat technique", color: "text-white" },
              { rank: "Troisième Prix d'Excellence", prize: "200 000 FCFA", bonus: "Bourse de formation spécialisée", color: "text-white" }
            ].map((p, i) => (
              <GlassCard key={i} className="bg-white/5 border-white/10 p-12 text-center">
                <Award className={`${p.color} mx-auto mb-8`} size={48} />
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">{p.rank}</div>
                <div className="text-4xl font-black mb-6">{p.prize}</div>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{p.bonus}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* SECTION 9 : FAQ */}
      <section className="py-40 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-24">
            <HelpCircle className="text-nova-violet mx-auto mb-8" size={48} />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nova-black">Informations Utiles</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Quelles sont les conditions de participation ?", r: "Être étudiant au Bénin, âgé de 15 à 25 ans, et s'inscrire en binôme." },
              { q: "Quels types de projets sont acceptés ?", r: "Tout projet technologique (logiciel ou matériel) répondant à un besoin local identifié." },
              { q: "Comment se déroule la sélection ?", r: "Un comité technique évalue les dossiers selon des critères de pertinence, de faisabilité et d'impact." }
            ].map((item, i) => (
              <GlassCard key={i} className="bg-white p-8 border-0 shadow-sm">
                <h3 className="text-lg font-black uppercase mb-4 text-nova-black flex items-start gap-3">
                  <span className="text-nova-violet">Question :</span> {item.q}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed pl-7">
                  <span className="text-nova-violet font-bold mr-2">Réponse :</span> {item.r}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-64 px-6 bg-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] font-black text-nova-black leading-none mb-16">
            SOUMETTRE VOTRE <br />
            <span className="text-nova-violet italic font-light">DOSSIER.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button size="lg" onClick={() => navigate('/participate')}>Accéder au formulaire d'inscription</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Edition2026;
