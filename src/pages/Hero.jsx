import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { DATA } from '../data/content.jsx';

export default function Hero({ scrollTo }) {
  return (
    <section id="home" className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Open to Work</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
          Hi, Saya <br/><span className="text-blue-600">{DATA.profile.name}</span>
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">{DATA.profile.bio}</p>
        
        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <button onClick={() => scrollTo('projects')} className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Lihat Proyek
          </button>
          <div className="flex gap-4 items-center">
            <a href={DATA.profile.github} className="text-slate-500 hover:text-blue-600"><Github /></a>
            <a href={DATA.profile.linkedin} className="text-slate-500 hover:text-blue-600"><Linkedin /></a>
          </div>
        </div>
      </div>
      {/* Ganti src gambar dengan foto Anda */}
      <div className="flex-1 flex justify-center">
         <div className="w-64 h-64 bg-blue-600 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img src="[https://via.placeholder.com/300](https://via.placeholder.com/300)" alt="Profile" className="w-full h-full object-cover"/>
         </div>
      </div>
    </section>
  );
}