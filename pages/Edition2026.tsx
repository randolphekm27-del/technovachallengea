
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
      
      {/* SECTION 1 : BANNIÈRE D'ENTRÉE */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="editorial-title text-[clamp(2rem,6vw,5rem)] font-black text-nova-black leading-[1.1] mb-8 max-w-5xl mx-auto">
              UNE AVENTURE QUI COMMENCE ICI, <br />
              <span className="text-nova-violet italic font-light">UN FUTUR QUI S’INVENTE AVEC VOUS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
              Rejoignez la 2ᵉ édition du Tech Nova Challenge, là où les idées prennent vie et les talents brillent.
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
              alt="Collaboration et création" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-nova-violet/10 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 : LE CŒUR DE L’ÉDITION 2026 */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-6">Notre Vision</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-12 leading-tight">
              Innover avec sens : Technologies émergentes et entrepreneuriat durable
            </h2>
          </div>
          <div className="text-xl text-gray-500 font-light leading-relaxed space-y-8 text-justify md:text-center">
            <p>
              Cette année, nous croyons plus que jamais en votre capacité à transformer des défis en opportunités. Le thème <span className="text-nova-black font-bold">“Les Technologies Émergentes au service de l’Entrepreneuriat Durable”</span> est une invitation à imaginer un Bénin où l’innovation répond aux besoins réels des communautés, tout en préservant notre environnement.
            </p>
            <p>
              Votre projet peut être la prochaine solution qui change des vies, améliore des métiers, ou protège nos ressources. Ici, chaque idée compte, et chaque vision a sa place.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 : UN PARCOURS ÉPAULÉ */}
      <section className="py-40 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black mb-4">
              De l’idée à la réalisation, <br /><span className="text-nova-violet">nous marchons avec vous.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                date: "Janvier – Février 2026", 
                title: "L’aventure commence", 
                desc: "Inscrivez votre binôme et partagez votre vision. Nous serons à votre écoute dès les premiers pas." 
              },
              { 
                date: "Mars 2026", 
                title: "Votre projet prend forme", 
                desc: "Notre comité technique lit chaque dossier avec attention. Les sélectionnés entrent en accompagnement personnalisé." 
              },
              { 
                date: "Avril 2026", 
                title: "Place à l’action", 
                desc: "Ateliers pratiques, mentorat, prototypage… Une communauté de passionnés vous entoure." 
              },
              { 
                date: "Mai 2026", 
                title: "Le grand jour", 
                desc: "Vous présentez fièrement votre travail. Ce n’est pas une fin, mais un nouveau départ." 
              }
            ].map((step, i) => (
              <GlassCard key={i} className="p-10 border-0 shadow-sm hover:shadow-xl bg-white">
                <div className="text-nova-violet font-black text-[10px] uppercase tracking-widest mb-4">{step.date}</div>
                <h3 className="text-xl font-black uppercase mb-6 leading-tight text-nova-black">{step.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{step.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 : VOUS AVEZ UNE IDÉE ? */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black mb-12">
                Vous avez une idée ? <br /><span className="text-nova-violet">Nous avons la voie.</span>
              </h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                    <Users className="text-nova-violet" size={24} /> Pour qui ?
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Si vous avez entre 15 et 25 ans, si vous étudiez au Bénin et si vous portez en vous l’envie d’apporter une solution concrète à un problème réel, ce concours est fait pour vous.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                    <Rocket className="text-nova-violet" size={24} /> Comment ?
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Formez un binôme, remplissez votre dossier en ligne et décrivez votre projet avec cœur. La diversité est notre force (technique, scientifique, littéraire ou pro).
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
               <GlassCard className="p-12 bg-nova-black text-white border-0">
                  <h3 className="text-2xl font-black uppercase mb-8">Prêt à commencer ?</h3>
                  <div className="space-y-8">
                    <Button onClick={() => navigate('/participate')} className="w-full">Je commence mon inscription, c’est ici</Button>
                    <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-nova-violet hover:text-white transition-colors">
                      <Download size={16} /> Téléchargez le guide de l’inscription
                    </button>
                  </div>
               </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 : RÉCOMPENSES */}
      <section className="py-40 px-6 bg-nova-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black uppercase mb-12">
              Votre effort mérite <br /><span className="text-nova-violet">reconnaissance.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Les prix ne sont pas qu’une somme d’argent. Ils sont un tremplin, une validation, un message : “Votre travail a de la valeur.”
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                rank: "Premier prix", 
                prize: "500 000 FCFA", 
                bonus: "Ordinateurs + 6 mois d'incubation", 
                color: "text-nova-violet" 
              },
              { 
                rank: "Deuxième prix", 
                prize: "300 000 FCFA", 
                bonus: "Mentorat professionnel personnalisé", 
                color: "text-white" 
              },
              { 
                rank: "Troisième prix", 
                prize: "200 000 FCFA", 
                bonus: "Formation certifiante de haut niveau", 
                color: "text-white" 
              }
            ].map((p, i) => (
              <GlassCard key={i} className="bg-white/5 border-white/10 p-12 text-center">
                <Award className={`${p.color} mx-auto mb-8`} size={48} />
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">{p.rank}</div>
                <div className="text-4xl font-black mb-6">{p.prize}</div>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{p.bonus}</p>
              </GlassCard>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-gray-500 text-sm font-light italic">
                Prix spéciaux : Audace féminine, impact social, originalité et qualité de présentation.
             </p>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-nova-violet/10 blur-[150px] rounded-full pointer-events-none" />
      </section>

      {/* SECTION 6 : APPRENTISSAGE HUMAIN */}
      <section className="py-40 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" 
                alt="Formation collaborative" 
                className="rounded-[3rem] shadow-2xl grayscale"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nova-black mb-12">
                On ne naît pas innovateur, <br /><span className="text-nova-violet italic font-light">on le devient — ensemble.</span>
              </h2>
              <div className="space-y-8 text-lg text-gray-500 font-light leading-relaxed">
                <p>Des formations qui mélangent savoir-faire et savoir-être. Des ateliers où l’on apprend à pitcher avec cœur, à prototyper avec ses mains, à penser avec les autres.</p>
                <p>Des rencontres avec des mentors qui ont osé avant vous, et des visites dans des lieux inspirants comme <span className="text-nova-black font-bold">Sèmè City</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 : LE JURY */}
      <section className="py-40 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nova-black mb-8">
              Vous serez écoutés, <br /><span className="text-nova-violet">pas juste notés.</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Des enseignants, entrepreneurs et experts engagés pour vous offrir l’accompagnement le plus adapté.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "La créativité", desc: "Comment votre idée apporte-t-elle un regard neuf ?" },
              { title: "La faisabilité", desc: "Comment pouvons-nous vous aider à la concrétiser ?" },
              { title: "L’impact", desc: "En quoi votre projet rend-il la vie meilleure ?" },
              { title: "La présentation", desc: "Savez-vous nous transmettre votre passion ?" }
            ].map((crit, i) => (
              <GlassCard key={i} className="bg-white p-10 border-0 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-nova-violet/5 flex items-center justify-center text-nova-violet mb-6">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-lg font-black uppercase mb-4 text-nova-black">{crit.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{crit.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 : TÉMOIGNAGES */}
      <section className="py-40 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="p-12 bg-gray-50 rounded-[3rem] relative">
                <span className="text-6xl text-nova-violet/20 absolute top-8 left-8">“</span>
                <p className="text-xl italic text-gray-600 font-light mb-8 relative z-10">
                  Avant le concours, notre motopompe intelligente n’était qu’un croquis. Aujourd’hui, elle aide des agriculteurs. Le Tech Nova nous a donné les outils et la confiance.
                </p>
                <div className="text-sm font-black uppercase">Béoula & Siméon <span className="text-nova-violet font-light italic ml-2">— Lauréats 2025</span></div>
              </div>
            </div>
            <div className="space-y-12 md:mt-24">
              <div className="p-12 border border-gray-100 rounded-[3rem] relative">
                <span className="text-6xl text-nova-violet/20 absolute top-8 left-8">“</span>
                <p className="text-xl italic text-gray-600 font-light mb-8 relative z-10">
                  Je suis repartie avec une famille de passionnés et la certitude que l’innovation, au Bénin, a un visage jeune et déterminé.
                </p>
                <div className="text-sm font-black uppercase">Aïssatou <span className="text-nova-violet font-light italic ml-2">— Finaliste 2025</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 : FAQ */}
      <section className="py-40 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-24">
            <HelpCircle className="text-nova-violet mx-auto mb-8" size={48} />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nova-black">Questions & Réponses</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Et si mon binôme et moi venons de spécialités différentes ?", r: "C’est même encouragé ! La complémentarité fait la force d’une équipe." },
              { q: "Faut-il déjà avoir un prototype abouti ?", r: "Pas du tout. Une idée claire, expliquée avec conviction, est un départ parfait." },
              { q: "Je doute de mon niveau technique, est-ce que je peux postuler ?", r: "Oui, sans hésitation. Ce qui compte, c’est la vision, la motivation et la capacité à apprendre." },
              { q: "Comment sont utilisés les fonds des votes payants ?", r: "Ils servent intégralement à financer les prix, les formations et l’accompagnement. Chaque vote est un soutien direct." }
            ].map((item, i) => (
              <GlassCard key={i} className="bg-white p-8 border-0 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-black uppercase mb-4 text-nova-black flex items-start gap-3">
                  <span className="text-nova-violet">Q:</span> {item.q}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed pl-7">
                  <span className="text-nova-violet font-bold mr-2">R:</span> {item.r}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 : CALL TO ACTION FINAL */}
      <section className="py-64 px-6 bg-white text-center relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="editorial-title text-[clamp(2.5rem,8vw,8rem)] font-black text-nova-black leading-none mb-16">
            VOTRE HISTOIRE <br />
            <span className="text-nova-violet italic font-light">COMMENCE ICI.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light mb-16 max-w-2xl mx-auto">
            Vous n’avez pas besoin d’être parfait(e) pour commencer, mais il faut commencer pour progresser.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button size="lg" onClick={() => navigate('/participate')}>Je postule maintenant</Button>
            <button 
              onClick={() => navigate('/about')}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-nova-black transition-colors"
            >
              En savoir plus avant de me lancer
            </button>
          </div>
        </div>
      </section>

      {/* BAS DE PAGE - CONTACT HUMAIN */}
      <footer className="py-32 px-6 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-16 mb-24 text-center md:text-left">
            <div className="space-y-4">
              <Mail className="text-nova-violet mx-auto md:mx-0" size={24} />
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Écrivez-nous</div>
              <div className="text-lg font-medium">parlons@technovachallenge.com</div>
            </div>
            <div className="space-y-4">
              <Phone className="text-nova-violet mx-auto md:mx-0" size={24} />
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Appelez-nous</div>
              <div className="text-lg font-medium">+229 00 00 00 00</div>
            </div>
            <div className="space-y-4">
              <MapPin className="text-nova-violet mx-auto md:mx-0" size={24} />
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Siège</div>
              <div className="text-lg font-medium">Lokossa, Bénin</div>
            </div>
          </div>
          
          <div className="flex justify-center gap-12 text-gray-400">
             <a href="#" className="hover:text-nova-violet transition-colors"><Facebook size={20}/></a>
             <a href="#" className="hover:text-nova-violet transition-colors"><Instagram size={20}/></a>
             <a href="#" className="hover:text-nova-violet transition-colors"><Linkedin size={20}/></a>
             <a href="#" className="hover:text-nova-violet transition-colors"><Twitter size={20}/></a>
          </div>
          <div className="mt-12 text-center text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">
            #TechNovaAvecCœur
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Edition2026;
