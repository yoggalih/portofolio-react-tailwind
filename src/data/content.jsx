import { Code2, Brain, Terminal, Award } from 'lucide-react';

export const DATA = {
  profile: {
    name: "Galih Yoga Kurniawan",
    role: "Backend Developer | Machine Learning Enthusiast",
    bio: "Mahasiswa tingkat akhir dengan passion di pengembangan sistem backend yang handal dan eksplorasi data menggunakan Machine Learning.",
    email: "yogagalih626@gmail.com",
    github: "https://github.com/yoggalih",
    linkedin: "https://www.linkedin.com/in/galih-yoga/"
  },
  skills: [
    {
      category: "Programming & Backend",
      icon: <Code2 size={24} />,
      items: [
        { name: "PHP / Laravel", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "JavaScript (ES6+)", level: "Intermediate" },
        { name: "HTML & CSS", level: "Advanced" },
        { name: "REST API", level: "Advanced" },
      ]
    },
    {
      category: "Machine Learning & Data",
      icon: <Brain size={24} />,
      items: [
        { name: "Scikit-Learn", level: "Intermediate" },
        { name: "Random Forest & XGBoost", level: "Intermediate" },
        { name: "Data Cleaning & EDA", level: "Advanced" },
        { name: "MySQL", level: "Intermediate" },
      ]
    },
    {
      category: "Tools & DevOps",
      icon: <Terminal size={24} />,
      items: [
        { name: "Git & GitHub", level: "Intermediate" },
        { name: "Postman / Swagger", level: "Advanced" },
        { name: "Google Cloud Platform", level: "Beginner" },
        { name: "VS Code", level: "Advanced" },
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Sistem Analisis Sentimen Ulasan",
      category: "Machine Learning",
      description: "Aplikasi web untuk menganalisis sentimen ulasan marketplace menggunakan algoritma SVM.",
      tech: ["Python", "Flask", "Scikit-Learn", "Numpy"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com",
      demo: "https://demo.com",
      details: "Proyek ini menyelesaikan masalah manual dalam mengkategorikan ribuan ulasan pelanggan. Akurasi model mencapai 85% menggunakan teknik TF-IDF dan SVM."
    },
    {
      id: 2,
      title: "E-Commerce Backend API",
      category: "Backend Laravel",
      description: "RESTful API lengkap untuk platform toko online dengan fitur autentikasi JWT.",
      tech: ["Laravel 10", "MySQL", "JWT Auth", "Postman"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com",
      demo: null,
      details: "Membangun arsitektur backend yang scalable. Mengimplementasikan database indexing untuk mempercepat query hingga 40%."
    }
  ],
  experience: [
    {
      role: "",
      company: "Desa Sejahtera",
      period: "2022 - Sekarang",
      desc: [
        "Memimpin 30+ anggota dalam berbagai kegiatan sosial kemasyarakatan.",
        "Menginisiasi program digitalisasi administrasi desa sederhana.",
        "Mengelola anggaran kegiatan tahunan dengan transparansi 100%."
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "PT Teknologi Maju",
      period: "Jan 2023 - Jun 2023",
      desc: [
        "Membangun fitur API baru untuk aplikasi internal perusahaan.",
        "Melakukan bug fixing dan optimasi query database.",
        "Berkolaborasi dengan tim frontend menggunakan Swagger documentation."
      ]
    }
  ],
  certificates: [
    { title: "Machine Learning Developer", issuer: "Dicoding Indonesia", year: "2023" },
    { title: "Cloud Computing Foundation", issuer: "Google Cloud / Bangkit", year: "2023" },
    { title: "Belajar Fundamental Aplikasi Back-End", issuer: "Dicoding Indonesia", year: "2022" },
  ]
};