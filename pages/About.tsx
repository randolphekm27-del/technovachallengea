
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-nova-violet font-bold tracking-widest uppercase text-sm mb-6 block">Notre Histoire</span>
          <h1 className="text-5xl md:text-8xl font-black leading-none mb-16 tracking-tighter">
            Porter la tech <br />
            <span className="text-nova-violet">plus loin.</span>
          </h1>
          
          <div className="space-y-12 text-xl md:text-2xl font-light text-gray-600 leading-relaxed">
            <p>
              Née d'une volonté de révéler les talents cachés du Bénin, <span className="text-nova-black font-semibold">Tech Nova Challenge</span> est devenue en trois ans la référence absolue des compétitions d'innovation technologique en Afrique de l'Ouest.
            </p>
            
            <p className="border-l-4 border-nova-violet pl-8 italic">
              "Nous croyons que le code est la nouvelle poésie de notre siècle, capable de résoudre les problèmes les plus complexes de notre société."
            </p>
            
            <p>
              Notre mission est simple : offrir un tremplin aux esprits audacieux qui n'ont pas peur de bousculer le statu quo. De Cotonou à Parakou, nous parcourons le pays pour dénicher ceux qui construiront le Bénin numérique de demain.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Notre Vision</h3>
            <p className="text-gray-500 leading-relaxed text-lg">
              Faire du Bénin un hub technologique majeur sur le continent, où l'innovation locale rayonne à l'international par sa qualité et sa pertinence.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Nos Valeurs</h3>
            <ul className="space-y-4 text-gray-500 text-lg">
              <li>• Excellence technique sans compromis</li>
              <li>• Impact social tangible</li>
              <li>• Collaboration interdisciplinaire</li>
              <li>• Transparence totale</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
