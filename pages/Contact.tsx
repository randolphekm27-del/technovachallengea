
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          <div>
            <span className="text-nova-violet font-black tracking-[0.5em] uppercase text-[10px] block mb-8">Contactez-nous</span>
            <h1 className="editorial-title text-[clamp(2.5rem,6vw,7rem)] leading-none text-nova-black mb-16">
              OUVRONS LE <br /><span className="text-nova-violet italic font-light">DIALOGUE.</span>
            </h1>
            
            <div className="space-y-12">
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-nova-violet/5 flex items-center justify-center text-nova-violet group-hover:bg-nova-violet group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">E-mail</div>
                  <div className="text-xl font-medium">contact@technovabenin.com</div>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-nova-violet/5 flex items-center justify-center text-nova-violet group-hover:bg-nova-violet group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Téléphone</div>
                  <div className="text-xl font-medium">+229 90 00 00 00</div>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-nova-violet/5 flex items-center justify-center text-nova-violet group-hover:bg-nova-violet group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Bureau</div>
                  <div className="text-xl font-medium">Sèmè City, Cotonou, Bénin</div>
                </div>
              </div>
            </div>

            <div className="mt-20 flex gap-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-nova-violet hover:border-nova-violet transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <GlassCard className="p-12">
            <h3 className="text-2xl font-black uppercase mb-12">Envoyer un message</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Prénom</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-100 py-3 outline-none focus:border-nova-violet transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Nom</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-100 py-3 outline-none focus:border-nova-violet transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">E-mail</label>
                <input type="email" className="w-full bg-transparent border-b border-gray-100 py-3 outline-none focus:border-nova-violet transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-gray-100 py-3 outline-none focus:border-nova-violet transition-all resize-none" />
              </div>
              <div className="pt-8">
                <Button className="w-full">Envoyer ma demande</Button>
              </div>
            </form>
          </GlassCard>

        </div>
      </div>
    </div>
  );
};

export default Contact;
