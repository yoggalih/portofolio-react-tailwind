import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { DATA } from '../data/content.jsx';
import { X, Github, ExternalLink, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionTitle subtitle="Portofolio pekerjaan saya">Featured Projects</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DATA.projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition border border-slate-100 dark:border-slate-700">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <span className="text-xs font-bold text-blue-600">{project.category}</span>
              <h3 className="text-xl font-bold dark:text-white mt-2">{project.title}</h3>
              <button 
                onClick={() => setSelectedProject(project)}
                className="mt-4 text-sm font-medium text-blue-600 flex items-center gap-1 hover:gap-2 transition-all"
              >
                Detail Project <ChevronRight size={16}/>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-xl max-w-2xl w-full p-6 relative">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full dark:bg-slate-800 dark:text-white"><X size={20}/></button>
            <h2 className="text-2xl font-bold dark:text-white mb-2">{selectedProject.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">{selectedProject.description}</p>
            <div className="flex gap-2 mb-6">
              {selectedProject.tech.map(t => (
                <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded">{t}</span>
              ))}
            </div>
            <div className="flex gap-4">
               <a href={selectedProject.github} className="flex-1 py-2 bg-slate-900 text-white rounded text-center flex items-center justify-center gap-2"><Github size={18}/> GitHub</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}