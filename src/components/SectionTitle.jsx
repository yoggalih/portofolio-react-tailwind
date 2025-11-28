import React from 'react';

export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
        {children}
      </h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      {subtitle && <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
    );
}