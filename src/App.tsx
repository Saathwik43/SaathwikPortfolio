import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ArrowUpRight } from "lucide-react";

const queryClient = new QueryClient();

function LaptopIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="20" width="160" height="100" rx="6" fill="#fefce8" stroke="#1c1917" strokeWidth="3" strokeLinejoin="round"/>
      <rect x="30" y="30" width="140" height="82" rx="2" fill="#dcfce7" stroke="#1c1917" strokeWidth="2"/>
      <text x="38" y="52" fontFamily="Space Mono" fontSize="9" fill="#15803d" fontWeight="bold">{"<App />"}</text>
      <text x="38" y="65" fontFamily="Space Mono" fontSize="8" fill="#7c3aed">{"  const [data, set] = useState()"}</text>
      <text x="38" y="78" fontFamily="Space Mono" fontSize="8" fill="#c2410c">{"  useEffect(() => {"}</text>
      <text x="38" y="91" fontFamily="Space Mono" fontSize="8" fill="#0d9488">{"    fetchFromAPI()"}</text>
      <text x="38" y="104" fontFamily="Space Mono" fontSize="9" fill="#15803d">{"  })"}</text>
      <rect x="5" y="120" width="190" height="14" rx="4" fill="#fef9c3" stroke="#1c1917" strokeWidth="2.5"/>
      <rect x="80" y="120" width="40" height="7" rx="2" fill="#a16207"/>
      <circle cx="168" cy="27" r="4" fill="#16a34a" opacity="0.8"/>
      <circle cx="155" cy="27" r="4" fill="#ea580c" opacity="0.8"/>
      <circle cx="142" cy="27" r="4" fill="#ca8a04" opacity="0.8"/>
    </svg>
  );
}

function NeuralNetIllustration() {
  return (
    <svg viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <line x1="35" y1="40" x2="90" y2="30" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="35" y1="40" x2="90" y2="55" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="35" y1="40" x2="90" y2="80" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="35" y1="80" x2="90" y2="30" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="35" y1="80" x2="90" y2="55" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="35" y1="80" x2="90" y2="105" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="35" y1="120" x2="90" y2="80" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="35" y1="120" x2="90" y2="105" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="90" y1="30" x2="145" y2="50" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="90" y1="55" x2="145" y2="50" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="90" y1="80" x2="145" y2="80" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="90" y1="105" x2="145" y2="80" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="90" y1="55" x2="145" y2="110" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="90" y1="105" x2="145" y2="110" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="4 2"/>
      <circle cx="35" cy="40" r="10" fill="#dcfce7" stroke="#15803d" strokeWidth="2.5"/>
      <circle cx="35" cy="80" r="10" fill="#dcfce7" stroke="#15803d" strokeWidth="2.5"/>
      <circle cx="35" cy="120" r="10" fill="#dcfce7" stroke="#15803d" strokeWidth="2.5"/>
      <circle cx="90" cy="30" r="10" fill="#fef9c3" stroke="#a16207" strokeWidth="2.5"/>
      <circle cx="90" cy="55" r="10" fill="#fef9c3" stroke="#a16207" strokeWidth="2.5"/>
      <circle cx="90" cy="80" r="10" fill="#fef9c3" stroke="#a16207" strokeWidth="2.5"/>
      <circle cx="90" cy="105" r="10" fill="#fef9c3" stroke="#a16207" strokeWidth="2.5"/>
      <circle cx="145" cy="50" r="12" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2.5"/>
      <circle cx="145" cy="80" r="12" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2.5"/>
      <circle cx="145" cy="110" r="12" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2.5"/>
    </svg>
  );
}

function ChatIllustration() {
  return (
    <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="10" y="10" width="95" height="38" rx="8" fill="#dcfce7" stroke="#15803d" strokeWidth="2"/>
      <polygon points="25,48 10,62 40,48" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" strokeLinejoin="round"/>
      <text x="20" y="28" fontFamily="Patrick Hand" fontSize="9" fill="#15803d">Hey! Socket.io</text>
      <text x="20" y="40" fontFamily="Patrick Hand" fontSize="9" fill="#15803d">works perfectly!</text>
      <rect x="55" y="58" width="95" height="38" rx="8" fill="#fef9c3" stroke="#a16207" strokeWidth="2"/>
      <polygon points="135,96 150,110 120,96" fill="#fef9c3" stroke="#a16207" strokeWidth="1.5" strokeLinejoin="round"/>
      <text x="64" y="76" fontFamily="Patrick Hand" fontSize="9" fill="#a16207">MERN + Zustand</text>
      <text x="64" y="88" fontFamily="Patrick Hand" fontSize="9" fill="#a16207">+ JWT Auth</text>
      <rect x="10" y="100" width="100" height="30" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2"/>
      <polygon points="28,130 10,144 45,130" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" strokeLinejoin="round"/>
      <text x="20" y="118" fontFamily="Patrick Hand" fontSize="9" fill="#7c3aed">Online: 12 users</text>
      <circle cx="148" cy="20" r="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2"/>
      <circle cx="148" cy="20" r="3" fill="#16a34a"/>
      <circle cx="148" cy="60" r="8" fill="#fef9c3" stroke="#a16207" strokeWidth="2"/>
      <circle cx="148" cy="60" r="3" fill="#a16207"/>
    </svg>
  );
}

function RocketIllustration() {
  return (
    <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M60 10 C60 10 85 35 85 75 L60 90 L35 75 C35 35 60 10 60 10Z" fill="#dcfce7" stroke="#15803d" strokeWidth="2.5" strokeLinejoin="round"/>
      <ellipse cx="60" cy="45" rx="12" ry="12" fill="#fef9c3" stroke="#a16207" strokeWidth="2"/>
      <path d="M35 75 L20 95 L35 88" fill="#ffedd5" stroke="#c2410c" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M85 75 L100 95 L85 88" fill="#ffedd5" stroke="#c2410c" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M50 90 L45 115 L60 105 L75 115 L70 90" fill="#fef9c3" stroke="#a16207" strokeWidth="2" strokeLinejoin="round"/>
      <ellipse cx="52" cy="110" rx="5" ry="8" fill="#ea580c" opacity="0.7"/>
      <ellipse cx="60" cy="115" rx="6" ry="10" fill="#ea580c" opacity="0.9"/>
      <ellipse cx="68" cy="110" rx="5" ry="8" fill="#ea580c" opacity="0.7"/>
      <circle cx="28" cy="40" r="4" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5"/>
      <circle cx="88" cy="28" r="3" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1.5"/>
      <path d="M18 30 L22 34 M22 30 L18 34" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M96 55 L100 59 M100 55 L96 59" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function BrainIllustration() {
  return (
    <svg viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M70 20 C50 20, 30 35, 28 55 C26 70, 32 85, 45 92 C50 94, 70 96, 70 96 C70 96, 90 94, 95 92 C108 85, 114 70, 112 55 C110 35, 90 20, 70 20Z" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M70 20 L70 96" stroke="#0d9488" strokeWidth="2" strokeDasharray="5 3"/>
      <path d="M45 35 Q55 28, 65 38 Q70 44, 70 50" stroke="#a16207" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M38 55 Q42 45, 52 48 Q60 50, 62 60" stroke="#ea580c" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M33 72 Q40 65, 50 68 Q58 71, 56 80" stroke="#0d9488" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M95 35 Q85 28, 75 38 Q70 44, 70 50" stroke="#a16207" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M102 55 Q98 45, 88 48 Q80 50, 78 60" stroke="#ea580c" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M107 72 Q100 65, 90 68 Q82 71, 84 80" stroke="#0d9488" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <circle cx="55" cy="40" r="4" fill="#fef9c3" stroke="#a16207" strokeWidth="1.5"/>
      <circle cx="40" cy="60" r="3.5" fill="#ffedd5" stroke="#c2410c" strokeWidth="1.5"/>
      <circle cx="50" cy="80" r="3" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1.5"/>
      <circle cx="85" cy="40" r="4" fill="#fef9c3" stroke="#a16207" strokeWidth="1.5"/>
      <circle cx="100" cy="60" r="3.5" fill="#ffedd5" stroke="#c2410c" strokeWidth="1.5"/>
      <circle cx="90" cy="80" r="3" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1.5"/>
    </svg>
  );
}

/* ─── LEAVES ANIMATION ───────────────────────────────────────── */
function LeavesBackground() {
  // Reduced quantity as requested
  const leaves = Array.from({ length: 6 });
  const realLeaves = ['🍂', '🍁', '🍃'];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {leaves.map((_, i) => {
        // Start from middle-right to far-right so they can be blown left across the screen
        const startX = 50 + Math.random() * 70;
        const style = {
          left: `${startX}%`,
          animationDuration: `${14 + Math.random() * 10}s`,
          animationDelay: `${-(Math.random() * 20)}s`,
          transform: `scale(${0.8 + Math.random() * 0.5})`,
          fontSize: '2rem'
        };
        const leafType = realLeaves[i % realLeaves.length];
        
        return (
          <div key={i} className="absolute top-[-10%] leaf-anim" style={style}>
            {leafType}
          </div>
        );
      })}
    </div>
  );
}

/* ─── NAV ─────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className={`mx-auto max-w-4xl bg-card border-sketch flex items-center justify-between p-3 px-5 transition-all ${scrolled ? "shadow-block-green" : ""}`}>
            <div
              className="font-sketch text-xl sm:text-2xl font-bold tracking-tight cursor-pointer"
              onClick={() => scrollTo("hero")}
              data-testid="nav-logo"
            >
              Saathwik.
            </div>

            {/* Desktop links */}
            <div className="hidden sm:flex items-center gap-6 font-hand text-xl">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="hover:text-primary transition-colors relative group"
                  data-testid={`nav-${id}`}
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200" />
                </button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="sm:hidden border-sketch p-2 bg-card shadow-block-green card-hover"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-testid="nav-hamburger"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-40 sm:hidden" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-20 left-4 right-4 bg-card border-sketch shadow-block-orange p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map(({ id, label }, i) => {
                const colors = ["text-primary", "text-secondary", "text-purple", "text-teal"];
                const tags = ["tag-green", "tag-orange", "tag-purple", "tag-teal"];
                return (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="flex items-center gap-4 py-3 border-b border-foreground/10 last:border-0 w-full text-left"
                    data-testid={`mobile-nav-${id}`}
                  >
                    <span className={`font-sans text-xs font-bold px-2 py-0.5 border-sketch ${tags[i]}`}>0{i + 1}</span>
                    <span className={`font-hand text-3xl ${colors[i]}`}>{label}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-foreground/10 flex gap-3">
              <a href="mailto:saathwik43@gmail.com" className="border-sketch p-2 bg-yellow-tint shadow-block-yellow card-hover">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://github.com/Saathwik43" target="_blank" rel="noreferrer" className="border-sketch p-2 bg-orange-tint shadow-block-orange card-hover">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/saathwik-mailapalli-99ab62295/" target="_blank" rel="noreferrer" className="border-sketch p-2 bg-green-tint shadow-block-green card-hover">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ─── HERO ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="container mx-auto px-4 max-w-4xl w-full">

        {/* Mobile layout */}
        <div className="flex flex-col gap-6 sm:hidden">
          <div className="flex items-start justify-between gap-4">
            <div className="inline-block border-sketch px-3 py-1 transform -rotate-2 bg-yellow-tint shadow-block-yellow" data-testid="hero-badge">
              <span className="font-sans text-xs font-bold uppercase tracking-wider">Hello, World.</span>
            </div>
            <div className="w-28 h-24 border-sketch bg-card p-2 shadow-block-teal transform rotate-3 shrink-0">
              <LaptopIllustration />
            </div>
          </div>

          <h1 className="font-sketch text-5xl leading-tight" data-testid="hero-name-mobile">
            I'm <span className="marker-green">Saathwik</span><br />
            <span className="marker-orange">Mailapalli</span>
          </h1>

          <div className="border-sketch-2 bg-card p-3 shadow-block-purple inline-block transform -rotate-1">
            <span className="font-hand text-2xl text-muted-foreground">Full Stack Dev / AI Builder</span>
          </div>

          <div className="border-sketch bg-card p-4 shadow-block-green" data-testid="hero-bio-mobile">
            <p className="font-sans text-sm leading-relaxed">
              End-to-end web apps and intelligent systems — UIs, APIs, and{" "}
              <span className="marker-yellow font-bold">ML pipelines on real hardware.</span>
            </p>
          </div>

          {/* Mobile stat pills */}
          <div className="flex flex-wrap gap-2">
            {["Python", "React", "Node.js", "Socket.io", "Docker", "PyTorch"].map((s, i) => {
              const cls = ["tag-green", "tag-orange", "tag-yellow", "tag-teal", "tag-purple", "tag-green"];
              return <span key={s} className={`font-sans text-xs font-bold px-2.5 py-1 ${cls[i]}`}>{s}</span>;
            })}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="border-sketch flex-1 py-3 font-sketch text-base bg-primary text-primary-foreground shadow-block-orange card-hover text-center"
              data-testid="hero-cta-mobile"
            >
              See my work
            </button>
            <a
              href="https://github.com/Saathwik43"
              target="_blank"
              rel="noreferrer"
              className="border-sketch px-4 py-3 font-sketch text-base bg-card flex items-center gap-2 shadow-block-purple card-hover"
              data-testid="hero-github-mobile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden sm:grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 space-y-6">
            <div className="inline-block border-sketch px-4 py-1 mb-2 transform -rotate-2 bg-yellow-tint shadow-block-yellow">
              <span className="font-sans text-xs font-bold uppercase tracking-wider">Hello, World.</span>
            </div>
            <h1 className="font-sketch text-6xl md:text-7xl leading-tight" data-testid="hero-name">
              I'm <span className="marker-green">Saathwik</span><br />
              <span className="marker-orange">Mailapalli</span>
            </h1>
            <h2 className="font-hand text-3xl sm:text-4xl text-muted-foreground">
              Full Stack Developer / AI Builder
            </h2>
            <div className="border-sketch bg-card p-5 shadow-block-green" data-testid="hero-bio">
              <p className="font-sans text-base sm:text-lg leading-relaxed">
                I build end-to-end web applications and intelligent systems — from polished UIs to production-ready APIs and{" "}
                <span className="marker-yellow font-bold">ML pipelines, NLP models, and AI deployment</span> on real hardware.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="border-sketch px-6 py-3 font-sketch text-lg bg-primary text-primary-foreground shadow-block-orange card-hover"
                data-testid="hero-cta"
              >
                See my work
              </button>
              <a
                href="https://github.com/Saathwik43"
                target="_blank"
                rel="noreferrer"
                className="border-sketch px-6 py-3 font-sketch text-lg bg-card flex items-center gap-2 shadow-block-purple card-hover"
                data-testid="hero-github"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
            </div>
          </div>
          <div className="md:col-span-2 flex items-center justify-center">
            <div className="relative w-full max-w-xs">
              <div className="border-sketch bg-card p-4 shadow-block-green transform rotate-2">
                <LaptopIllustration />
                <div className="mt-2 text-center font-hand text-sm text-muted-foreground">building the full stack</div>
              </div>
              <div className="absolute -top-3 -right-3 bg-accent border-sketch px-2 py-1 transform -rotate-6 shadow-block-orange">
                <span className="font-sketch text-xs text-accent-foreground font-bold">B.Tech 2026</span>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-primary border-sketch px-2 py-1 transform rotate-3 shadow-block-teal">
                <span className="font-sketch text-xs text-primary-foreground font-bold">Open to Intern</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-green-tint">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-sketch text-3xl sm:text-5xl mb-8 sm:mb-12 inline-block scribble-underline" data-testid="about-heading">
          The Lab
        </h2>

        {/* Mobile: stacked cards with horizontal accent stripe */}
        <div className="flex flex-col gap-5 sm:hidden">
          <div className="border-sketch p-5 bg-card shadow-block-green" data-testid="about-philosophy-mobile">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-primary shrink-0" />
              <h3 className="font-hand text-2xl marker-green inline-block">The Philosophy</h3>
            </div>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              I'm a full stack developer who doesn't stop at the browser. From React frontends and Node.js APIs to ML models running on self-hosted hardware — I build the whole system. My sweet spot is where web engineering meets applied AI.
            </p>
          </div>
          <div className="border-sketch-2 p-5 bg-card shadow-block-teal" data-testid="about-focus-mobile">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-teal shrink-0" style={{ background: "#0d9488" }} />
              <h3 className="font-hand text-2xl marker-teal inline-block">Current Focus</h3>
            </div>
            <div className="space-y-3">
              {[
                { num: "01", label: "Building full stack apps with real-time features", cls: "tag-green" },
                { num: "02", label: "ML model deployment & MLOps workflows", cls: "tag-purple" },
                { num: "03", label: "Scalable AI under hardware constraints", cls: "tag-teal" },
              ].map(({ num, label, cls }) => (
                <div key={num} className="flex items-center gap-3">
                  <span className={`border-sketch px-2 py-0.5 text-xs font-bold shrink-0 ${cls}`}>{num}</span>
                  <span className="font-sans text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: side-by-side rotated cards */}
        <div className="hidden sm:grid md:grid-cols-2 gap-10 mt-4">
          <div className="border-sketch p-6 sm:p-8 bg-card shadow-block-green card-hover transform rotate-1" data-testid="about-philosophy">
            <h3 className="font-hand text-2xl mb-4 inline-block marker-green">The Philosophy</h3>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground mt-6">
              I'm a full stack developer who doesn't stop at the browser. From React frontends and Node.js APIs to ML models running on self-hosted hardware — I build the whole system. As a Data Science Engineering student (B.Tech 2026), my sweet spot is where web engineering meets applied AI.
            </p>
            <div className="mt-6 flex justify-end">
              <div className="w-28 h-28 opacity-90"><NeuralNetIllustration /></div>
            </div>
          </div>
          <div className="border-sketch-2 p-6 sm:p-8 bg-card shadow-block-teal card-hover transform -rotate-1" data-testid="about-focus">
            <h3 className="font-hand text-2xl mb-4 inline-block marker-teal">Current Focus</h3>
            <ul className="space-y-5 font-sans text-sm mt-6">
              {[
                { num: "01", label: "Building full stack web apps with real-time features", cls: "tag-green" },
                { num: "02", label: "ML model deployment & MLOps workflows", cls: "tag-purple" },
                { num: "03", label: "Scalable AI architecture under strict hardware constraints", cls: "tag-teal" },
              ].map(({ num, label, cls }) => (
                <li key={num} className="flex items-start gap-3">
                  <span className={`border-sketch px-2 py-0.5 text-xs font-bold shrink-0 mt-0.5 ${cls}`}>{num}</span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SKILLS ─────────────────────────────────────────────────── */
const SKILL_CATEGORIES = [
  { name: "Languages", skills: ["Python", "C++", "SQL", "JavaScript", "HTML/CSS"], color: "marker-green", tag: "tag-green", shadow: "shadow-block-green" },
  { name: "Full Stack", skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs"], color: "marker-purple", tag: "tag-purple", shadow: "shadow-block-purple" },
  { name: "Real-Time", skills: ["Socket.io", "JWT Auth", "Zustand", "Cloudinary"], color: "marker-teal", tag: "tag-teal", shadow: "shadow-block-teal" },
  { name: "ML Frameworks", skills: ["Scikit-learn", "TensorFlow", "PyTorch", "NLTK"], color: "marker-orange", tag: "tag-orange", shadow: "shadow-block-orange" },
  { name: "LLM & AI", skills: ["GGUF Quantization", "Ollama", "OpenAI APIs", "mem0"], color: "marker-yellow", tag: "tag-yellow", shadow: "shadow-block-yellow" },
  { name: "Infrastructure", skills: ["Docker", "Linux", "Caddy", "Tailscale", "Git"], color: "marker-green", tag: "tag-green", shadow: "shadow-block-green" },
];

function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-sketch text-3xl sm:text-5xl mb-8 sm:mb-12 inline-block scribble-underline" data-testid="skills-heading">
          Arsenal
        </h2>

        {/* Mobile: horizontal scroll chips per category */}
        <div className="flex flex-col gap-4 sm:hidden">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={idx} className={`border-sketch p-4 bg-card ${category.shadow}`} data-testid={`skill-card-mobile-${idx}`}>
              <h3 className={`font-hand text-xl mb-3 inline-block ${category.color}`}>{category.name}</h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={`font-sans text-xs px-2 py-0.5 ${category.tag} font-bold`}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={idx} className={`border-sketch p-5 bg-card ${category.shadow} card-hover`} data-testid={`skill-card-${idx}`}>
              <h3 className={`font-hand text-2xl mb-5 inline-block ${category.color}`}>{category.name}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={`font-sans text-xs px-2.5 py-1 ${category.tag} font-bold`}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECTS ─────────────────────────────────────────────────── */
const PROJECTS = [
  {
    title: "Real-Time Chat App",
    description: "Full stack real-time messaging application with live online user status, JWT authentication, and image uploads. Built with the MERN stack, Socket.io for live communication, and Zustand for global state.",
    tech: ["MERN Stack", "Socket.io", "JWT Auth", "Zustand", "Cloudinary"],
    color: "marker-teal",
    shadow: "shadow-block-teal",
    bg: "bg-teal-tint",
    rotate: "rotate-1",
    Illustration: ChatIllustration,
    github: "https://github.com/Saathwik43/Real-Time-Chat_Application",
    demo: "https://real-time-chat-application-fvmj.onrender.com/",
    badge: "Live",
  },
  {
    title: "AI Powered Research Agent",
    description: "Autonomous research workflow that gathers information, synthesizes findings, and helps turn broad questions into structured insights with AI-assisted analysis.",
    tech: ["Python", "AI Agents", "Research Automation", "LLMs", "Data Synthesis"],
    color: "marker-green",
    shadow: "shadow-block-green",
    bg: "bg-green-tint",
    rotate: "-rotate-1",
    Illustration: NeuralNetIllustration,
    github: "https://github.com/Saathwik43/Ai_Powered_Research_Agent",
    demo: "https://ai-powered-research-agent-live.onrender.com/",
    badge: "Live",
  },
  {
    title: "J.A.R.V.I.S",
    description: "Voice-enabled AI agent with long-term contextual memory and automated workflow execution via OpenAI APIs, mem0, and n8n MCP.",
    tech: ["OpenAI APIs", "mem0", "n8n MCP", "Voice Pipeline"],
    color: "marker-purple",
    shadow: "shadow-block-purple",
    bg: "bg-purple-tint",
    rotate: "rotate-1",
    Illustration: BrainIllustration,
    github: "https://github.com/Saathwik43",
    demo: null,
    badge: "WIP",
  },
  {
    title: "PPE-Detection",
    description: "Real-time Personal Protective Equipment detection model trained on a custom dataset. Classifies PPE items live using computer vision.",
    tech: ["Python", "Computer Vision", "Real-time Inference"],
    color: "marker-orange",
    shadow: "shadow-block-orange",
    bg: "bg-orange-tint",
    rotate: "-rotate-1",
    Illustration: RocketIllustration,
    github: "https://github.com/Saathwik43/PPE-Detection",
    demo: null,
    badge: null,
  },
];

function Projects() {
  const renderBadge = (badge: string | null) => {
    if (!badge) return null;

    return (
      <span className={`font-sans text-xs font-bold px-2 py-0.5 border-sketch inline-flex items-center gap-1.5 ${badge === "Live" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
        {badge === "Live" && <span className="live-indicator" aria-hidden="true" />}
        {badge}
      </span>
    );
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-orange-tint">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-sketch text-3xl sm:text-5xl mb-8 sm:mb-12 inline-block scribble-underline" data-testid="projects-heading">
          Field Notes
        </h2>

        {/* Mobile: vertical stacked cards (no rotation, full-width) */}
        <div className="flex flex-col gap-5 sm:hidden">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className={`border-sketch p-5 bg-card ${project.shadow} ${project.bg}`}
              data-testid={`project-card-mobile-${idx}`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className={`font-hand text-2xl ${project.color}`}>{project.title}</h3>
                    {renderBadge(project.badge)}
                  </div>
                </div>
                <div className="w-14 h-14 shrink-0">
                  <project.Illustration />
                </div>
              </div>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="font-sans text-xs font-bold px-2 py-0.5 border-sketch bg-card">{t}</span>
                ))}
              </div>
              <div className="flex gap-2">
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 font-sans text-xs border-sketch px-3 py-1.5 bg-card card-hover"
                  data-testid={`project-github-mobile-${idx}`}>
                  <Github className="w-3 h-3" /> Code
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 font-sans text-xs border-sketch px-3 py-1.5 bg-primary text-primary-foreground card-hover"
                    data-testid={`project-demo-mobile-${idx}`}>
                    <ArrowUpRight className="w-3 h-3" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 2-column grid with rotation */}
        <div className="hidden sm:grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className={`border-sketch p-6 bg-card ${project.shadow} card-hover ${project.bg} transform ${project.rotate} flex flex-col`}
              data-testid={`project-card-${idx}`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className={`font-hand text-2xl inline-block ${project.color}`}>{project.title}</h3>
                    {renderBadge(project.badge)}
                  </div>
                </div>
                <div className="w-16 h-16 shrink-0 opacity-90">
                  <project.Illustration />
                </div>
              </div>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="font-sans text-xs font-bold px-2.5 py-1 border-sketch bg-card" data-testid={`project-tech-${idx}-${tIdx}`}>{t}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto pt-2">
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 font-sans text-xs border-sketch px-3 py-1.5 bg-card hover:bg-foreground hover:text-background transition-colors card-hover"
                  data-testid={`project-github-${idx}`}>
                  <Github className="w-3.5 h-3.5" /> Code
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 font-sans text-xs border-sketch px-3 py-1.5 bg-primary text-primary-foreground card-hover"
                    data-testid={`project-demo-${idx}`}>
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─────────────────────────────────────────────────── */
function Contact() {
  const links = [
    { href: "mailto:saathwik43@gmail.com", icon: Mail, label: "saathwik43@gmail.com", bg: "bg-yellow-tint", shadow: "shadow-block-yellow" },
    { href: "https://www.linkedin.com/in/saathwik-mailapalli-99ab62295/", icon: Linkedin, label: "in/saathwik-mailapalli", bg: "bg-green-tint", shadow: "shadow-block-green", external: true },
    { href: "https://github.com/Saathwik43", icon: Github, label: "github.com/Saathwik43", bg: "bg-orange-tint", shadow: "shadow-block-orange", external: true },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-sketch text-3xl sm:text-5xl mb-8 sm:mb-12 inline-block scribble-underline" data-testid="contact-heading">
          Let's Build Something
        </h2>

        {/* Mobile layout */}
        <div className="flex flex-col gap-4 sm:hidden">
          <div className="border-sketch p-5 bg-card shadow-block-green transform -rotate-1" data-testid="contact-quote-mobile">
            <p className="font-hand text-xl leading-relaxed">
              "Open to internships in{" "}
              <span className="marker-teal">Full Stack Dev</span>,{" "}
              <span className="marker-orange">ML Engineering</span> &amp;{" "}
              <span className="marker-purple">Applied AI</span>"
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {links.map(({ href, icon: Icon, label, bg, shadow, external }) => (
              <a
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className={`flex items-center gap-3 border-sketch px-4 py-3 ${bg} ${shadow} card-hover`}
                data-testid={`contact-link-${label.split(".")[0]}`}
              >
                <Icon className="w-4 h-4 shrink-0 text-primary" />
                <span className="font-sans text-xs truncate">{label}</span>
                <ArrowUpRight className="w-3 h-3 ml-auto shrink-0 opacity-50" />
              </a>
            ))}
          </div>

          <div className="border-sketch px-4 py-3 bg-primary text-primary-foreground shadow-block-teal text-center">
            <span className="font-sketch text-sm">Available for Internships</span>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden sm:grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="border-sketch p-8 bg-card shadow-block-green" data-testid="contact-card">
              <p className="font-hand text-2xl leading-relaxed mb-8">
                "Open to internship opportunities in{" "}
                <span className="marker-teal">Full Stack Development</span>,{" "}
                <span className="marker-orange">ML Engineering</span>, and{" "}
                <span className="marker-purple">Applied AI</span>"
              </p>
              <div className="space-y-4 font-sans text-sm">
                {links.map(({ href, icon: Icon, label, bg, shadow, external }) => (
                  <a
                    key={href}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className={`flex items-center gap-3 border-sketch px-4 py-3 ${bg} ${shadow} card-hover`}
                    data-testid={`contact-${label.split(".")[0]}`}
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-sketch p-5 bg-card shadow-block-teal transform rotate-2 flex flex-col items-center justify-center gap-3 text-center">
              <div className="w-28 h-32"><RocketIllustration /></div>
              <p className="font-hand text-lg text-muted-foreground">deploying ideas daily</p>
            </div>
            <div className="border-sketch px-4 py-3 bg-primary text-primary-foreground shadow-block-yellow transform -rotate-1 text-center" data-testid="contact-status">
              <span className="font-sketch text-sm">Available for Internships</span>
            </div>
          </div>
        </div>

        <p className="font-sans text-xs text-muted-foreground mt-14 pb-6 text-center">
          Designed with paper, ink, and a little bit of code — Saathwik Mailapalli 2026
        </p>
      </div>
    </section>
  );
}

/* ─── APP ─────────────────────────────────────────────────── */
function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 relative">
      <LeavesBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}>
          <Switch>
            <Route path="/" component={Portfolio} />
            <Route>
              <div className="min-h-screen flex items-center justify-center font-sketch text-4xl px-4 text-center">
                404 — Page not found in this notebook.
              </div>
            </Route>
          </Switch>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
