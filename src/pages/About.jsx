import React from 'react';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle subtitle="Sedikit cerita tentang perjalanan saya.">About Me</SectionTitle>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Saat ini saya adalah mahasiswa tingkat akhir yang sedang mendalami dunia <strong>Backend Development</strong> dan <strong>Data Science</strong>. 
            Saya memiliki ketertarikan khusus dalam membangun sistem yang efisien dengan Laravel, serta memanfaatkan data untuk pengambilan keputusan cerdas menggunakan Machine Learning.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Selain teknis, saya aktif dalam organisasi kemasyarakatan sebagai <strong></strong>, di mana saya belajar tentang kepemimpinan, komunikasi, dan manajemen tim. 
            Tujuan karier saya adalah menjadi Software Engineer yang dapat menjembatani antara data yang kompleks dan solusi aplikasi yang user-friendly.
          </p>
        </div>
      </div>
    </section>
  );
}