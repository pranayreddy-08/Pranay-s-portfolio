import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  ArrowRight,
  Menu,
  X,
  Trophy,
  BrainCircuit,
  Phone,
  Shield,
  Terminal,
  ChevronLeft,
  ChevronRight,
  Database,
} from 'lucide-react';
import {
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiVercel,
} from 'react-icons/si';

// ======== EDIT YOUR DATA HERE ========
const DATA = {
  name: 'Pranay Reddy Edmala',
  headline: 'Aspiring Full-Stack Developer • DSA Enthusiast',
  location: 'Hyderabad, India',
  about:
    "I'm a 3rd-year B.Tech (CSBS) student at GRIET with a passion for building clean, responsive web apps and sharpening problem-solving through competitive programming.",
  summary:
    "I enjoy turning ideas into working products using React and JavaScript on the front end, and I’m exploring Python/Node on the back end. I’m actively learning advanced DSA and system design.",
  email: 'pranayreddyedmala@gmail.com',
  phone: '+91 7013890597', 

  links: {
    github:   'https://github.com/pranayreddy-08',
    linkedin: 'https://www.linkedin.com/in/pranay-reddy-edmala-a0355b2b1/',
    leetcode: 'https://leetcode.com/u/pranay3214/',
    codechef: 'https://www.codechef.com/users/pranay3214',
    hive: 'https://hive.smartinterviews.in/profile/23241a3214',
    hackerrank: 'https://www.hackerrank.com/profile/23241A3214',
    codeforces: 'https://codeforces.com/profile/23241A3214'
  },
skills: [
  {
    group: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'API Integration'],
  },
  {
    group: 'Databases',
    items: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'DBMS'],
  },
  {
    group: 'Programming',
    items: ['Python', 'C/C++', 'Data Structures & Algorithms', 'Object-Oriented Programming'],
  },
  {
    group: 'DevOps & Tools',
    items: ['Git', 'GitHub', 'Docker', 'Linux Basics', 'Web Deployment (Netlify/Vercel)'],
  },
  {
    group: 'AI/ML',
    items: ['Machine Learning Fundamentals', 'NumPy', 'Pandas', 'TensorFlow', 'AI Agents', 'LLM Applications'],
  },
  {
    group: 'Core CS',
    items: ['System Design Basics', 'Operating Systems', 'Computer Networks'],
  },
],

  projects: [
    {
      title:"CrisisCommand",
      desc:"An AI-powered crisis management platform that aggregates real-time data, provides predictive analytics, and facilitates coordinated response efforts during emergencies.",
      tech: ['React', 'Node.js', 'Python', 'TensorFlow', 'Fast API','Docker','Agentic AI','LLM Applications'],
      link: "https://github.com/pranayreddy-08/CrisisCommand",
    },
    {
      title: "Pranay's Portfolio ",
      desc: 'Simple personal portfolio website showcasing projects and skills, built with React and Tailwind CSS.',
      tech: ['HTML', 'CSS','JavaScript','React'],
      link: 'https://github.com/pranayreddy-08/Pranay-s-portfolio',
    },
    {
      title: 'Tic Tac Toe',
      desc: 'Classic 2-player game with win/draw detection and reset functionality.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/pranayreddy-08/tic-tac-toe',
    },
    {
      title: 'Rock Paper Scissors',
      desc: 'Simple game against computer with random choice logic and instant results.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/pranayreddy-08/Rock_Paper_Scissors',
    },
    {
      title: 'Quiz App',
      desc: 'Interactive quiz fetching questions from Open Trivia DB API with timer, scoring, and high score tracking.',
      tech: ['HTML', 'CSS', 'JavaScript', 'OpenTDB API'],
      link: 'https://github.com/pranayreddy-08/Quiz-App',
    },
    {
      title: 'Deepfake Detection ',
      desc: 'Exploratory project on detecting AI-generated media (images/videos).',
      tech: ['Python', 'Machine Learning', 'TensorFlow'],
      link: 'https://github.com/pranayreddy-08/deepfake.detection',
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

const skillMeta = {
  HTML: { Icon: SiHtml5, iconClass: 'text-orange-500', glowClass: 'from-orange-500/30 to-orange-500/5' },
  CSS: { Icon: SiCss3, iconClass: 'text-sky-500', glowClass: 'from-sky-500/30 to-sky-500/5' },
  JavaScript: { Icon: SiJavascript, iconClass: 'text-yellow-400', glowClass: 'from-yellow-500/30 to-yellow-500/5' },
  'React.js': { Icon: SiReact, iconClass: 'text-cyan-400', glowClass: 'from-cyan-500/30 to-cyan-500/5' },
  'Next.js': { Icon: SiNextdotjs, iconClass: 'text-neutral-100', glowClass: 'from-neutral-500/30 to-neutral-500/5' },
  'Tailwind CSS': { Icon: SiTailwindcss, iconClass: 'text-cyan-300', glowClass: 'from-teal-500/30 to-teal-500/5' },
  'Node.js': { Icon: SiNodedotjs, iconClass: 'text-lime-400', glowClass: 'from-lime-500/30 to-lime-500/5' },
  'Express.js': { Icon: SiExpress, iconClass: 'text-neutral-200', glowClass: 'from-neutral-500/30 to-neutral-500/5' },
  'REST APIs': { Icon: Terminal, iconClass: 'text-cyan-300', glowClass: 'from-cyan-500/30 to-cyan-500/5' },
  'API Integration': { Icon: Terminal, iconClass: 'text-sky-300', glowClass: 'from-sky-500/30 to-sky-500/5' },
  SQL: { Icon: Database, iconClass: 'text-indigo-300', glowClass: 'from-indigo-500/30 to-indigo-500/5' },
  MySQL: { Icon: SiMysql, iconClass: 'text-blue-300', glowClass: 'from-blue-500/30 to-blue-500/5' },
  MongoDB: { Icon: SiMongodb, iconClass: 'text-green-400', glowClass: 'from-green-500/30 to-green-500/5' },
  PostgreSQL: { Icon: SiPostgresql, iconClass: 'text-indigo-300', glowClass: 'from-indigo-500/30 to-indigo-500/5' },
  'C/C++': { Icon: SiCplusplus, iconClass: 'text-blue-300', glowClass: 'from-blue-500/30 to-blue-500/5' },
  Python: { Icon: SiPython, iconClass: 'text-yellow-300', glowClass: 'from-yellow-500/30 to-yellow-500/5' },
  'Data Structures & Algorithms': { Icon: BrainCircuit, iconClass: 'text-violet-300', glowClass: 'from-violet-500/30 to-violet-500/5' },
  'Object-Oriented Programming': { Icon: Code2, iconClass: 'text-fuchsia-300', glowClass: 'from-fuchsia-500/30 to-fuchsia-500/5' },
  Git: { Icon: SiGit, iconClass: 'text-orange-400', glowClass: 'from-orange-500/30 to-orange-500/5' },
  GitHub: { Icon: SiGithub, iconClass: 'text-neutral-100', glowClass: 'from-neutral-500/30 to-neutral-500/5' },
  Docker: { Icon: SiDocker, iconClass: 'text-sky-400', glowClass: 'from-sky-500/30 to-sky-500/5' },
  'Linux Basics': { Icon: SiLinux, iconClass: 'text-yellow-200', glowClass: 'from-yellow-500/30 to-yellow-500/5' },
  'Web Deployment (Netlify/Vercel)': { Icon: SiVercel, iconClass: 'text-neutral-100', glowClass: 'from-emerald-500/30 to-emerald-500/5' },
  'Machine Learning Fundamentals': { Icon: BrainCircuit, iconClass: 'text-pink-300', glowClass: 'from-pink-500/30 to-pink-500/5' },
  NumPy: { Icon: SiNumpy, iconClass: 'text-blue-300', glowClass: 'from-blue-500/30 to-blue-500/5' },
  Pandas: { Icon: SiPandas, iconClass: 'text-violet-300', glowClass: 'from-violet-500/30 to-violet-500/5' },
  TensorFlow: { Icon: SiTensorflow, iconClass: 'text-orange-400', glowClass: 'from-orange-500/30 to-orange-500/5' },
  'AI Agents': { Icon: BrainCircuit, iconClass: 'text-fuchsia-300', glowClass: 'from-fuchsia-500/30 to-fuchsia-500/5' },
  'LLM Applications': { Icon: BrainCircuit, iconClass: 'text-purple-300', glowClass: 'from-purple-500/30 to-purple-500/5' },
  'System Design Basics': { Icon: Shield, iconClass: 'text-cyan-300', glowClass: 'from-cyan-500/30 to-cyan-500/5' },
  DBMS: { Icon: Database, iconClass: 'text-indigo-300', glowClass: 'from-indigo-500/30 to-indigo-500/5' },
  'Operating Systems': { Icon: Terminal, iconClass: 'text-cyan-300', glowClass: 'from-cyan-500/30 to-cyan-500/5' },
  'Computer Networks': { Icon: Shield, iconClass: 'text-purple-300', glowClass: 'from-purple-500/30 to-purple-500/5' },
};

const skillDescription = {
  HTML: 'Markup Language',
  CSS: 'Styling & Layout',
  JavaScript: 'Web Development Language',
  'React.js': 'UI Library',
  'Next.js': 'React Framework',
  'Tailwind CSS': 'Utility-First CSS',
  'Node.js': 'JavaScript Runtime',
  'Express.js': 'Backend Framework',
  'REST APIs': 'Service Architecture',
  'API Integration': 'Connecting Services',
  SQL: 'Structured Query Language',
  MySQL: 'Relational Database',
  PostgreSQL: 'Advanced Relational DB',
  MongoDB: 'NoSQL Database',
  DBMS: 'Database Management',
  Python: 'Versatile Programming Language',
  'C/C++': 'High-Performance Development',
  'Data Structures & Algorithms': 'Problem Solving',
  'Object-Oriented Programming': 'Software Design Paradigm',
  Git: 'Version Control',
  GitHub: 'Code Collaboration',
  Docker: 'Containerization',
  'Linux Basics': 'System Fundamentals',
  'Web Deployment (Netlify/Vercel)': 'Production Hosting',
  'Machine Learning Fundamentals': 'Modeling Basics',
  NumPy: 'Numerical Computing',
  Pandas: 'Data Analysis',
  TensorFlow: 'Deep Learning Framework',
  'AI Agents': 'Autonomous Workflows',
  'LLM Applications': 'GenAI Product Building',
  'System Design Basics': 'Scalable Architecture',
  'Operating Systems': 'Core CS Foundation',
  'Computer Networks': 'Communication Protocols',
};

function AnimatedCanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const state = {
      width: 0,
      height: 0,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
      time: 0,
      raf: null,
      particles: [],
    };

    const createParticles = () => {
      const area = state.width * state.height;
      const count = Math.max(40, Math.min(90, Math.floor(area / 24000)));
      state.particles = Array.from({ length: count }, () => ({
        x: Math.random() * state.width,
        y: Math.random() * state.height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: 1 + Math.random() * 1.8,
      }));
    };

    const resize = () => {
      state.width = window.innerWidth;
      state.height = window.innerHeight;
      state.dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(state.width * state.dpr);
      canvas.height = Math.floor(state.height * state.dpr);
      canvas.style.width = `${state.width}px`;
      canvas.style.height = `${state.height}px`;
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
      createParticles();
    };

    const drawGlow = () => {
      const g1x = state.width * (0.25 + Math.sin(state.time * 0.23) * 0.05);
      const g1y = state.height * (0.25 + Math.cos(state.time * 0.2) * 0.06);
      const g2x = state.width * (0.75 + Math.cos(state.time * 0.18) * 0.05);
      const g2y = state.height * (0.75 + Math.sin(state.time * 0.24) * 0.05);

      const glow1 = ctx.createRadialGradient(g1x, g1y, 0, g1x, g1y, Math.max(state.width, state.height) * 0.45);
      glow1.addColorStop(0, 'rgba(59, 130, 246, 0.14)');
      glow1.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, state.width, state.height);

      const glow2 = ctx.createRadialGradient(g2x, g2y, 0, g2x, g2y, Math.max(state.width, state.height) * 0.4);
      glow2.addColorStop(0, 'rgba(30, 64, 175, 0.12)');
      glow2.addColorStop(1, 'rgba(30, 64, 175, 0)');
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, state.width, state.height);
    };

    const drawNetwork = () => {
      const maxDist = 150;

      for (let i = 0; i < state.particles.length; i += 1) {
        const p1 = state.particles[i];

        for (let j = i + 1; j < state.particles.length; j += 1) {
          const p2 = state.particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > maxDist) continue;

          const alpha = (1 - dist / maxDist) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(59,130,246,${alpha.toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      for (const particle of state.particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(147, 197, 253, 0.75)';
        ctx.fill();

        particle.x += particle.vx + Math.sin(state.time * 0.55 + particle.y * 0.01) * 0.12;
        particle.y += particle.vy + Math.cos(state.time * 0.45 + particle.x * 0.01) * 0.12;

        if (particle.x < -20) particle.x = state.width + 20;
        if (particle.x > state.width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = state.height + 20;
        if (particle.y > state.height + 20) particle.y = -20;
      }
    };

    const render = () => {
      state.time += 0.016;

      const bg = ctx.createLinearGradient(0, 0, 0, state.height);
      bg.addColorStop(0, '#00030a');
      bg.addColorStop(1, '#020617');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, state.width, state.height);

      drawGlow();
      drawNetwork();

      state.raf = window.requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (state.raf) window.cancelAnimationFrame(state.raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" aria-hidden="true" />;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#profiles', label: 'Profiles' },  
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-[60] border-b-2 border-neutral-700 bg-black/80 h-[60px] backdrop-blur flex items-center">
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
              onClick={() => setOpen(false)}
              className="text-sm inline-flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400"
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
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-full max-w-3xl text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight">
            Hi, I’m <span className="text-indigo-700 dark:text-indigo-300">{DATA.name}</span>
          </h1>
          <br />
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs font-medium mb-3 bg-white/70 dark:bg-neutral-900/70">
            <BrainCircuit className="size-3" /> {DATA.headline}
          </div>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-prose text-[15px] mx-auto">
            {DATA.about}
          </p>

          {/* Download CV button */}
          <div className="mt-5">
            <a
              href="/pranay_resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg px-6 py-2 text-sm font-medium 
                         bg-indigo-600 text-white 
                         hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 
                         transform transition-transform duration-200 hover:scale-105"
            >
              <ArrowRight className="size-4" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
function About() {
  return (
    <Section id="about" title="About" kicker="Get to know me">
      <div className="max-w-6xl mx-auto text-left">
        <p className="text-[15px] leading-7 mb-4">
          I&apos;m a 3rd-year Computer Science undergraduate at GRIET, passionate about building
          scalable, user-focused web applications and solving real-world problems through clean
          and efficient code.
        </p>

        <p className="text-[15px] leading-7 mb-4">
          Over the past year, I&apos;ve strengthened my full-stack development skills by building
          and deploying production-ready projects. My core stack includes React.js, Next.js,
          Tailwind CSS, Node.js, Express.js, REST APIs, SQL (MySQL/PostgreSQL), and MongoDB.
          I&apos;m also comfortable with Git, GitHub, Docker, Linux fundamentals, and deployment
          platforms like Netlify and Vercel, which help me ship reliable applications efficiently.
        </p>

        <p className="text-[15px] leading-7 mb-4">
          Beyond development, I actively practice Data Structures & Algorithms and have a strong
          foundation in OOP, DBMS, Operating Systems, and Computer Networks. I&apos;m also exploring
          AI/ML fundamentals, working with NumPy, Pandas, TensorFlow, and LLM-based applications
          to understand intelligent system design.
        </p>

        <p className="text-[15px] leading-7">
          I&apos;m currently seeking internship and collaboration opportunities where I can contribute
          to impactful products, learn from experienced engineers, and grow into a well-rounded
          software developer.
        </p>
      </div>
    </Section>
  );
}

function Skills() {
  const skills = DATA.skills.flatMap((groupBlock) =>
    groupBlock.items.map((item) => ({ name: item, group: groupBlock.group }))
  );
  const totalSkills = skills.length;
  const [cardsPerView, setCardsPerView] = useState(1);
  const [trackIndex, setTrackIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(null);

  useEffect(() => {
    const setVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
        return;
      }
      if (window.innerWidth >= 640) {
        setCardsPerView(2);
        return;
      }
      setCardsPerView(1);
    };

    setVisibleCards();
    window.addEventListener('resize', setVisibleCards);
    return () => window.removeEventListener('resize', setVisibleCards);
  }, []);

  const loopEnabled = totalSkills > cardsPerView;
  const visibleCards = loopEnabled ? cardsPerView : totalSkills;
  const trackSkills = loopEnabled
    ? [...skills.slice(-visibleCards), ...skills, ...skills.slice(0, visibleCards)]
    : skills;

  useEffect(() => {
    setIsAnimating(false);
    setTrackIndex(loopEnabled ? visibleCards : 0);
  }, [loopEnabled, visibleCards]);

  useEffect(() => {
    if (isAnimating) return;
    const rafId = window.requestAnimationFrame(() => setIsAnimating(true));
    return () => window.cancelAnimationFrame(rafId);
  }, [isAnimating]);

  useEffect(() => {
    if (!loopEnabled || isPaused) return;
    const intervalId = window.setInterval(() => {
      setTrackIndex((prev) => prev + 1);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, [isPaused, loopEnabled]);

  const goPrev = () => {
    if (!loopEnabled) return;
    setTrackIndex((prev) => prev - 1);
  };

  const goNext = () => {
    if (!loopEnabled) return;
    setTrackIndex((prev) => prev + 1);
  };

  const handleTrackTransitionEnd = () => {
    if (!loopEnabled) return;

    if (trackIndex >= totalSkills + visibleCards) {
      setIsAnimating(false);
      setTrackIndex(visibleCards);
      return;
    }

    if (trackIndex < visibleCards) {
      setIsAnimating(false);
      setTrackIndex(totalSkills + trackIndex);
    }
  };

  const currentLogicalIndex = loopEnabled
    ? ((trackIndex - visibleCards) % totalSkills + totalSkills) % totalSkills
    : 0;
  const currentSkill = skills[currentLogicalIndex];
  const translatePercent = visibleCards > 0 ? 100 / visibleCards : 100;

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.changedTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (event) => {
    if (touchStartXRef.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(distance) > 40) {
      if (distance > 0) goPrev();
      if (distance < 0) goNext();
    }
    touchStartXRef.current = null;
    setIsPaused(false);
  };

  return (
    <Section id="skills" title="My Skills" kicker="Technologies I work with">
      <p className="mb-6 text-center text-base text-neutral-400 sm:text-lg">
        Here are some of the technologies I work with.
      </p>

      <div className="relative px-2 sm:px-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-black to-transparent sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-black to-transparent sm:block" />

        <button
          type="button"
          onClick={goPrev}
          disabled={!loopEnabled}
          className="absolute left-0 top-1/2 z-20 hidden size-12 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40 sm:inline-flex"
          aria-label="Previous skills slide"
        >
          <ChevronLeft className="size-6" />
        </button>

        <button
          type="button"
          onClick={goNext}
          disabled={!loopEnabled}
          className="absolute right-0 top-1/2 z-20 hidden size-12 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40 sm:inline-flex"
          aria-label="Next skills slide"
        >
          <ChevronRight className="size-6" />
        </button>

        <div
          className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0b1022]/80"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex ${isAnimating ? 'transition-transform duration-500 ease-in-out' : ''}`}
            onTransitionEnd={handleTrackTransitionEnd}
            style={{ transform: `translateX(-${trackIndex * translatePercent}%)` }}
          >
            {trackSkills.map((skill, idx) => {
              const meta = skillMeta[skill.name] || {
                Icon: Code2,
                iconClass: 'text-indigo-300',
                glowClass: 'from-indigo-500/30 to-indigo-500/5',
              };

              return (
                <div
                  key={`${skill.name}-${idx}`}
                  className="shrink-0 p-2 sm:p-4"
                  style={{ width: `${translatePercent}%` }}
                >
                  <article className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#111a3d] via-[#121b45] to-[#0a1e4a] p-6 text-center shadow-[0_18px_45px_-24px_rgba(59,130,246,0.75)]">
                    <div className="mb-6 flex justify-center">
                      <span className={`inline-flex rounded-2xl bg-gradient-to-br p-4 ${meta.glowClass}`}>
                        <meta.Icon className={`size-12 ${meta.iconClass}`} />
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                    <div className="mx-auto mt-4 h-px w-full max-w-[220px] bg-white/20" />
                    <p className="mt-4 text-lg leading-snug text-neutral-200">
                      {skillDescription[skill.name] || 'Technology & Development Skill'}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {/* <p className="text-xs text-neutral-400 sm:text-sm">Swipe on mobile. Use arrows on desktop.</p> */}
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {skills.map((skill, idx) => (
          <button
            key={`${skill.name}-dot`}
            type="button"
            onClick={() => {
              if (!loopEnabled) return;
              setTrackIndex(visibleCards + idx);
            }}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentLogicalIndex ? 'w-6 bg-indigo-500' : 'w-2 bg-neutral-500/50'
            }`}
            aria-label={`Go to ${skill.name} slide`}
          />
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
function Profiles() {
  // Build the list from your DATA.links
  const items = [
    { label: 'LeetCode', href: DATA.links.leetcode, sub: 'Practice • Contests', Icon: Code2 },
    { label: 'CodeChef', href: DATA.links.codechef, sub: 'Ratings • Cook-offs', Icon: Trophy },
    { label: 'Codeforces', href: DATA.links.codeforces, sub: 'Div. Rounds', Icon: Shield },
    // Hive with provided logo image
    { label: 'Hive (Smart Interviews)', href: DATA.links.hive, sub: 'Structured DSA', Icon: BrainCircuit },
    { label: 'HackerRank', href: DATA.links.hackerrank, sub: 'Skill Badges', Icon: Terminal },
    { label: 'GitHub', href: DATA.links.github, sub: 'Projects • Commits', Icon: Github },
  ].filter(Boolean);

  return (
    <Section id="profiles" title="Coding Profiles" kicker="Where I practice & share work">
      {/* Responsive grid: 1 col on mobile, 3 on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {items.map(({ label, href, sub, Icon, img }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/70 dark:bg-neutral-950/40 hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="flex items-center gap-3">
              {/* Icon/logo */}
              {img ? (
                <span className="inline-flex items-center justify-center size-10 rounded-lg bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                  <img src={img} alt={label} className="h-6 w-6 object-contain" />
                </span>
              ) : (
                <span className="inline-flex items-center justify-center size-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
                  {Icon && <Icon className="size-5 text-indigo-700 dark:text-indigo-300" />}
                </span>
              )}

              {/* Texts */}
              <div>
                <h3 className="font-semibold">{label}</h3>
                <p className="text-xs text-neutral-500">{sub}</p>
              </div>
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
      <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 p-6 bg-white/70 dark:bg-neutral-950/40">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
          I’m open to internships, collaborations, and freelance work.
        </p>
        <h3 className="font-semibold text-indigo-700 dark:text-indigo-300">Reach me at</h3>
        {/* Responsive grid: 1 col on mobile, 3 cols on large */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* Mobile */}
          <a
            href={`tel:${DATA.phone}`}
            className="flex items-center justify-center gap-3 rounded-lg border border-neutral-200 dark:border-neutral-800 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition"
          >
            <Phone className="size-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm">{DATA.phone}</span>
          </a>

          {/* LinkedIn */}
          <a
            href={DATA.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-lg border border-neutral-200 dark:border-neutral-800 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition"
          >
            <Linkedin className="size-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm">LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${DATA.email}`}
            className="flex items-center justify-center gap-3 rounded-lg border border-neutral-200 dark:border-neutral-800 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition"
          >
            <Mail className="size-4 text-pink-600 dark:text-pink-400" />
            <span className="text-sm">{DATA.email}</span>
          </a>
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
<div className="relative min-h-dvh bg-black text-neutral-100 selection:bg-rose-600 selection:text-white">
      <AnimatedCanvasBackground />
      <div className="pointer-events-none fixed inset-0 z-10 bg-black/0" aria-hidden="true" />
      <div className="relative z-20">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Profiles />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
  
