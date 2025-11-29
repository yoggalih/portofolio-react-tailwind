import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { DATA } from '../data/content';
import { Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Experience Section */}
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-8 mb-20">
          {DATA.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900"></div>
              <div className="mb-1 text-sm text-blue-600 font-semibold">{exp.period}</div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">{exp.role}</h3>
              <div className="text-slate-500 dark:text-slate-400 font-medium mb-3">{exp.company}</div>
              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                {exp.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certificates Section */}
        <SectionTitle>Certificates</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DATA.certificates.map((cert, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-sm transition-shadow">
               <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-yellow-600">
                  <Award size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">{cert.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer} • {cert.year}</p>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}