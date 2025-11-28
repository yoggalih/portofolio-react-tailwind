import { Code2, Brain, Terminal } from 'lucide-react';

export const DATA = {
  profile: {
    name: "Nama Anda",
    role: "Backend Developer | Machine Learning Enthusiast",
    bio: "Mahasiswa tingkat akhir dengan passion di pengembangan sistem backend dan eksplorasi data ML.",
    email: "email@contoh.com",
    github: "[https://github.com/username](https://github.com/username)",
    linkedin: "[https://linkedin.com/in/username](https://linkedin.com/in/username)"
  },
  skills: [
    {
      category: "Programming",
      icon: <Code2 size={24} />,
      items: [
        { name: "Laravel", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "React", level: "Beginner" }
      ]
    },
    {
      category: "Machine Learning",
      icon: <Brain size={24} />,
      items: [
        { name: "TensorFlow", level: "Intermediate" },
        { name: "Scikit-Learn", level: "Advanced" },
        { name: "EDA & Cleaning", level: "Advanced" }
      ]
    },
    {
      category: "Tools",
      icon: <Terminal size={24} />,
      items: [
        { name: "Git", level: "Intermediate" },
        { name: "Postman", level: "Advanced" },
        { name: "MySQL", level: "Intermediate" }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Sistem Analisis Sentimen",
      category: "Machine Learning",
      description: "Analisis sentimen ulasan marketplace menggunakan SVM.",
      tech: ["Python", "Flask", "Scikit-Learn"],
      image: "[https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800)",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "E-Commerce API",
      category: "Backend",
      description: "REST API lengkap dengan JWT Auth.",
      tech: ["Laravel", "MySQL", "Redis"],
      image: "[https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800](https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800)",
      github: "#",
      demo: null
    }
  ]
};