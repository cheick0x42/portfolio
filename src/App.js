import Image from './Image.js';
import React from 'react';
import resume from './cheick_kouassi_data.pdf';
import Theme from './Theme.js';

export default function App() {
  document.body.classList.add("bg-stone-300", "dark:bg-zinc-950");
  return (
    <div className="h-screen flex items-center lg:ml-52">
      <div>
        <div className="lg:flex lg:items-center">
            <Image/>
            <div className="lg:mt-0 inline-grid text-center lg:text-left w-full gap-3 lg:gap-1">
              <p className="mt-20 md:mt-0 text-6xl font-mono font-bold text-black dark:text-white">Cheick KOUASSI</p>
              <div className="inline-grid lg:flex lg:items-center gap-3">
                <p className="font-mono text-black dark:text-white"><a className="hover:font-semibold" href="https://www.linkedin.com/in/cheick0x42/"><u>LinkedIn</u></a> // <a className="hover:font-semibold" href="https://github.com/cheick0x42"><u>Github</u></a> // <a className="hover:font-semibold" href="mailto:kouassi.kcheick@gmail.com"><u>Contact</u></a> // <a className="hover:font-semibold" href={resume}><u>Curriculum vitae</u></a> //</p>
                <Theme/>
              </div>
              <div className="inline-grid lg:flex lg:items-center gap-3">
                <p className="font-mono text-sm text-black dark:text-white">Numpy • Pandas • Scikit learn • Python • Javascript • Pandas • MERN • SQL • React Native</p>
              </div>
            </div>
        </div>
        <div className="flex flex-col items-center lg:items-start mx-12 lg:mx-0 mt-10 lg:w-5/6">
          <p className="lg:mb-5 text-center lg:text-left text-md lg:text-xl font-mono font-medium text-black dark:text-white">Etudiant en dernière année Data & AI à après avoir suivi une spécialité en développement web-mobile et <i>Data science</i>. Je souhaite mettre à profit les compétences que j’ai développées durant mon parcours pour accompagner les entreprises à valoriser leurs données et optimiser leurs processus.</p>
        </div>
        <footer className="fixed bottom-0 left-0 w-full flex justify-center items-center py-4 bg-gray-100 dark:bg-gray-800">
          <p className="text-center text-sm font-mono font-medium text-black dark:text-white">
            Créé par @cheick0x42 || 2020
          </p>
        </footer>
      </div>
    </div>
  );
}