import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, ArrowRight, Menu, X, Trophy, BrainCircuit } from 'lucide-react';

// ======== EDIT YOUR DATA HERE ========
const DATA = {
  name: 'Pranay Reddy Edmala',
  headline: 'Aspiring Full-Stack Developer • DSA Enthusiast',
  location: 'Hyderabad, India',
  about:
    "I'm a 3rd-year B.Tech (CSE) student at GRIET with a passion for building clean, responsive web apps and sharpening problem-solving through competitive programming.",
  summary:
    "I enjoy turning ideas into working products using React and JavaScript on the front end, and I’m exploring Python/Node on the back end. I’m actively learning advanced DSA and system design.",
  email: 'pranayreddyedmala@gmail.com',
  links: {
    github: 'https://github.com/pranayreddy-08',
    linkedin: 'https://www.linkedin.com/in/pranay-reddy-edmala-a0355b2b1/',
    leetcode: 'https://leetcode.com/u/1by8FRI9TP/',
    codechef: 'https://www.codechef.com/users/pranay3214',
  },
skills: [
  {
    group: 'Frontend',
    items: ['HTML','CSS','JavaScript','React','Responsive Web Design','Tailwind CSS','Bootstrap'],
  },
  {
    group: 'Backend',
    items: ['Node.js','Express.js','REST API Development'],
  },
  {
    group: 'Databases',
    items: ['MySQL','PostgreSQL','MongoDB'],
  },
  {
    group: 'Programming',
    items: ['C','C++','Python'],
  },
  {
    group: 'Tools',
    items: ['Git','GitHub','VS Code','Postman','Netlify','Vercel'],
  },
  {
    group: 'CS Fundamentals',
    items: ['Data Structures','Algorithms','Object-Oriented Programming (OOPs)','DBMS','Operating Systems','System Design','Competitive Programming'],
  },
],

  projects: [
    {
    title: 'VeriHire (In Development)',
    desc: 'Professional networking platform validating identities and skills to curb fraudulent profiles.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com/pranayreddy-08/Verihire',
    },
    {
      title: 'Deepfake Detection (WIP)',
      desc: 'Exploratory project on detecting AI-generated media (images/videos).',
      tech: ['Python'],
      link: 'https://github.com/pranayreddy-08/deepfake.detection',
    },
    {
      title: "Pranay's Portfolio (v1)",
      desc: 'Simple HTML/CSS portfolio — now upgraded to this React version.',
      tech: ['HTML', 'CSS'],
      link: 'https://github.com/pranayreddy-08/Pranay-s-portfolio',
    },
    {
      title: 'StudySync',
      desc: 'Landing page UI built while practicing modern layouts.',
      tech: ['HTML', 'CSS'],
      link: 'https://github.com/pranayreddy-08/StudySync',
    },
  ],
};
// ======== END DATA ========

// Small helper to clamp screen padding via CSS vars
const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

// Color helpers
const groupPillClass = (group) => {
  switch (group) {
    case 'Frontend':
      return 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300';
    case 'Programming':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300';
    case 'Tools':
      return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300';
    case 'CS Fundamentals':
      return 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300';
    default:
      return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300';
  }
};

function Nav() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
<header className="sticky top-0 z-60 border-b-2 border-neutral-700 bg-black h-15 backdrop-blur flex items-center">
      <Container>
        <div className="h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold text-base sm:text-lg tracking-tight">
            {DATA.name}<span className="text-indigo-500">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href={DATA.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-800 px-3.5 py-1.5 text-sm font-medium bg-white/70 dark:bg-neutral-900/70 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition"
            >
              <Github className="size-4" /> GitHub
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-indigo-50 dark:hover:bg-neutral-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95">
          <Container>
            <div className="py-3 flex flex-col gap-3">
              {navItems.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-sm py-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={DATA.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm inline-flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Github className="size-4" /> GitHub
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function Section({ id, title, children, kicker }) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16">
      <Container>
        {kicker && (
          <p className="text-[13px] uppercase tracking-[0.2em] text-neutral-500 mb-2">{kicker}</p>
        )}
        <h2 className="text-xl sm:text-4xl font-bold mb-6 tracking-tight relative inline-block">
          {title}
        </h2>
        {children}
      </Container>
    </section>
  );
}

function Hero() {
  return (
    <div id="home" className="relative overflow-hidden">
      {/* Colorful gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-100 via-white to-pink-100 dark:from-indigo-950 dark:via-neutral-950 dark:to-pink-900" />
      <Container>
        <div className="min-h-dvh">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight">
                Hi, I’m <span className="text-indigo-700 dark:text-indigo-300">{DATA.name}</span>
              </h1>
              <br />
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs font-medium mb-3 bg-white/70 dark:bg-neutral-900/70">
                <BrainCircuit className="size-3" /> {DATA.headline}
              </div>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-prose text-[15px]">
                {DATA.about}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500 transition"
                >
                  <Code2 className="size-4" /> View Projects <ArrowRight className="size-4" />
                </a>
                <a
                  href={`mailto:${DATA.email}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-pink-300 dark:border-pink-700 px-4 py-2 text-sm font-medium bg-white/70 dark:bg-neutral-900/70 hover:bg-pink-50 dark:hover:bg-pink-900/30 transition"
                >
                  <Mail className="size-4" /> Contact
                </a>
                <a
                  href={DATA.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-indigo-300 dark:border-indigo-700 px-4 py-2 text-sm font-medium bg-white/70 dark:bg-neutral-900/70 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
                <a
                  href="/Pranay_resume (12).pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-green-300 dark:border-green-700 px-4 py-2 text-sm font-medium bg-white/70 dark:bg-neutral-900/70 hover:bg-green-50 dark:hover:bg-green-900/30 transition"
                >
                  <ArrowRight className="size-4" /> Download CV
                </a>

              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-xl  p-12 sm:p-16 lg:p-20 shadow-xl">
                <div className="h-full w-full rounded-xl bg-gradient-to-br grid place-content-center text-center p-6">
                  <div className="text-[8rem]">👨‍💻</div>
                  <p className="mt-2 text-2xl text-neutral-600 dark:text-neutral-400">
                    Building clean, responsive UIs
                  </p>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </Container>
    </div>
  );
}

function About() {
  return (
    <Section id="about" title="About" kicker="Get to know me">
      <div className="max-w-6xl mx-auto text-left">
        <p className="text-[15px] leading-7 mb-4">
          I’m a 3rd-year Computer Science undergraduate at GRIET with a deep interest in
          full-stack web development, AI/ML, and competitive programming. My journey so far
          has been about combining strong problem-solving skills with a passion for building
          clean and functional applications. I enjoy exploring new technologies and applying
          them to create real-world solutions.
        </p>

        <p className="text-[15px] leading-7 mb-4">
          On the development side, I specialize in crafting responsive UIs using React and
          Tailwind CSS, while also building scalable back-end services with Node.js and
          Express. Beyond development, I regularly practice Data Structures and Algorithms
          to sharpen my logic and ensure efficiency in the solutions I design. These skills
          not only help me in competitive programming but also in writing optimized code for
          projects.
        </p>

        <p className="text-[15px] leading-7">
          In the short term, I am actively seeking internships and collaborative projects
          where I can contribute to impactful work and learn from experienced teams. Looking
          ahead, my long-term vision is to design scalable products that balance performance
          with great user experience, while continuing to grow as a versatile engineer.
        </p>
      </div>
    </Section>
  );
}


function Skills() {
  return (
    <Section id="skills" title="Skills" kicker="Tools & tech">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DATA.skills.map((s) => (
          <div
            key={s.group}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/70 dark:bg-neutral-950/40"
          >
            <h3 className="font-semibold mb-2 text-neutral-800 dark:text-neutral-100">{s.group}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span
                  key={it}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${groupPillClass(
                    s.group
                  )}`}
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects" kicker="Selected work">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA.projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-950/40 hover:shadow-xl hover:-translate-y-1 transition relative"
          >
            {/* subtle hover gradient overlay */}
            <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-indigo-50 to-pink-50 dark:from-indigo-950/40 dark:to-pink-900/20" />
            <div className="relative flex items-start justify-between gap-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <ExternalLink className="size-4 opacity-70 group-hover:opacity-100 text-indigo-600 dark:text-indigo-300" />
            </div>
            <p className="relative mt-2 text-sm text-neutral-600 dark:text-neutral-400">{p.desc}</p>
            <div className="relative mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 px-2.5 py-0.5 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}

      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact" kicker="Let’s work together">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 p-6 bg-white/70 dark:bg-neutral-950/40">
          <h3 className="font-semibold text-indigo-700 dark:text-indigo-300">Email</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            I&apos;m open to internships, collaborations, and freelance work.
          </p>
          <a
            href={`mailto:${DATA.email}`}
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500 transition"
          >
            <Mail className="size-4" /> {DATA.email}
          </a>
        </div>
        <div className="rounded-xl border border-pink-200 dark:border-pink-700 p-6 bg-white/70 dark:bg-neutral-950/40">
          <h3 className="font-semibold mb-3 text-pink-600 dark:text-pink-300">Social</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href={DATA.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-indigo-300 dark:border-indigo-700 px-3 py-1.5 text-sm hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
            <a
              href={DATA.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-violet-300 dark:border-violet-700 px-3 py-1.5 text-sm hover:bg-violet-50 dark:hover:bg-violet-900/30"
            >
              <Github className="size-4" />
              GitHub
            </a>
            <a
              href={DATA.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-300 dark:border-emerald-700 px-3 py-1.5 text-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
            >
              <Code2 className="size-4" />
              LeetCode
            </a>
            <a
              href={DATA.links.codechef}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-pink-300 dark:border-pink-700 px-3 py-1.5 text-sm hover:bg-pink-50 dark:hover:bg-pink-900/30"
            >
              <Trophy className="size-4" />
              CodeChef
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
      <footer className="py-10 border-t border-neutral-800 bg-black-700">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} {DATA.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={DATA.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-600 dark:hover:text-violet-400 inline-flex items-center gap-1"
            >
              <Github className="size-4" />
              GitHub
            </a>
            <a
              href={DATA.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 inline-flex items-center gap-1"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${DATA.email}`}
              className="hover:text-pink-600 dark:hover:text-pink-400 inline-flex items-center gap-1"
            >
              <Mail className="size-4" />
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function Portfolio() {
  return (
<div className="min-h-dvh bg-black text-neutral-100 selection:bg-rose-600 selection:text-white">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

