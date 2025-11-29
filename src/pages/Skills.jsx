import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { DATA } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionTitle subtitle="Tools dan teknologi yang biasa saya gunakan.">Skills & Tools</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DATA.skills.map((skillGroup, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                {skillGroup.icon}
              </div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white">{skillGroup.category}</h3>
            </div>
            <div className="space-y-4">
              {skillGroup.items.map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-300 font-medium">{item.name}</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}