"use client";

import Image from "next/image";
import React from "react";
import {
  ArrowRight,
} from "lucide-react";
import NavigationDock from "./_components/NavigationDock";

/* Shared Figma CTA style */
const ctaStyle: React.CSSProperties = {
  borderRadius: "24px",
  border: "1px solid #080018",
  background: "linear-gradient(180deg, #F3F3F3 0%, #000 6.96%)",
  boxShadow: "0 10px 12px 0 rgba(61,61,61,0.24), 0 3px 4px 0 rgba(255,255,255,0.30) inset",
};

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-paper text-ink pb-8">
      <FrameGrid />

      <Header />

      <Hero />

      <PrevWorked />

      <WhatIBrought />

      <HowIDesign />

      <AreasOfExpertise />

      <WorkSection />

      <Footer />

      <NavigationDock />
    </main>
  );
}

/* ---------- Frame grid (side rails) ---------- */

function FrameGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] z-20"
    >
      <div className="absolute top-0 bottom-0 left-8 min-[1098px]:left-[240px] w-px bg-line" />
      <div className="absolute top-0 bottom-0 right-8 min-[1098px]:right-[240px] w-px bg-line" />
    </div>
  );
}

/* Corner dots at grid-line × section-border intersections */
function GridDots({ side = "top" }: { side?: "top" | "bottom" }) {
  const pos = side === "top"
    ? "top-0 -translate-y-1/1"
    : "bottom-0 translate-y-1/1";
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-1 left-1/2 -translate-x-1/2 w-full max-w-[1430px]"
      style={{ [side]: 0 }}
    >
      <span className={`absolute ${pos} left-8 min-[1098px]:left-[240px] -translate-x-1/2 size-2 bg-[#c9c9c9] z-20`} />
      <span className={`absolute ${pos} right-8 min-[1098px]:right-[240px] translate-x-1/2 size-2 bg-[#c9c9c9] z-20`} />
    </div>
  );
}

/* ---------- Header ---------- */

function Header() {
  return (
    <header className="relative sticky top-0 z-30 w-full bg-paper/90 backdrop-blur-md border-b border-line/60">
      {/* Grid lines drawn inside header so they show above the header bg */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px]">
        <div className="absolute inset-y-0 left-8 min-[1098px]:left-[240px] w-px bg-line" />
        <div className="absolute inset-y-0 right-8 min-[1098px]:right-[240px] w-px bg-line" />
      </div>
      {/* Griddots above the bottom border line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-1 left-1/2 -translate-x-1/2 w-full max-w-[1430px]"
        style={{ bottom: 0 }}
      >
        <span className="absolute bottom-0 left-8 min-[1098px]:left-[240px] -translate-x-1/2 size-2 bg-[#c9c9c9] z-20" />
        <span className="absolute bottom-0 right-8 min-[1098px]:right-[240px] translate-x-1/2 size-2 bg-[#c9c9c9] z-20" />
      </div>
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex items-center justify-between h-20 px-16 min-[1098px]:px-[272px]">
          <Logo />
          <SeekingPill />
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <a href="/" aria-label="Home" className="flex items-center">
      <Image
        src="/img/logo.svg"
        alt="Kumara Guru logo"
        width={52}
        height={40}
        priority
      />
    </a>
  );
}


function SeekingPill() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-mono text-[12px] font-medium text-white/90">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
      </span>
      Seeking Opportunities
    </div>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -6, y: x * 6 });
  };

  return (
    <section id="hero" className="relative z-24 pt-20 pb-[12px]">
      <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px]">
        {/* Card falls from top on first load */}
        <div
          ref={cardRef}
          className="hero-card-fall relative mx-auto w-full max-w-[720px]"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => { setIsHovering(false); setTilt({ x: 0, y: 0 }); }}
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: isHovering ? "transform 0.08s ease-out" : "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
            willChange: "transform",
          }}
        >
          <Lanyard />

          <div className="relative rounded-[18px] bg-[#F4F4F4] px-3 pb-3 pt-[48px] -mt-9">
            {/* Inner white card */}
            <div className="relative rounded-[14px] bg-white border border-line px-6 sm:px-10 pt-10 pb-10">
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-full overflow-hidden border border-line bg-ink/5 relative shrink-0">
                    <Image
                      src="/img/profile.png"
                      alt="Kumara Guru"
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="font-display text-[28px] leading-[34px] font-medium">
                      Kumara Guru
                    </h1>
                    <p className="font-mono text-[14px] leading-[20px] text-muted">
                      Sr. Product Designer
                    </p>
                    {/* Mobile-only: HFI-CUA stacked below "Sr. Product Designer" (< 480px) */}
                    <a
                      href="https://hfiinstitute.com/verify/?credential=0af20815-e1cd-4ead-b955-0dc5aa62c2e9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden max-[480px]:inline-block mt-1 font-mono text-[13px] font-semibold whitespace-nowrap tracking-wide bg-clip-text text-transparent hover:underline underline-offset-4 decoration-[rgb(75,2,227)]"
                      style={{ backgroundImage: "linear-gradient(-20.7deg, rgb(139,46,227) 41.9%, rgb(75,2,227) 86%)" }}
                    >
                      HFI - CUA Certified
                    </a>
                    {/* Social icons row */}
                    <div className="mt-2 flex items-center gap-2.5 text-ink/50">
                      <a
                        href="https://www.linkedin.com/in/kumara-guru-05596b103/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-ink transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                      </a>
                      <a
                        href="https://dribbble.com/Kumara_14"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Dribbble"
                        className="hover:text-ink transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm7.928 5.536c1.394 1.694 2.24 3.86 2.259 6.215-.326-.065-3.58-.73-6.857-.316-.075-.184-.144-.377-.22-.576-.2-.486-.422-.98-.644-1.46 3.647-1.486 5.3-3.613 5.462-3.863zm-7.928-.866c2.44 0 4.67.916 6.362 2.418-.135.2-1.615 2.182-5.13 3.507-1.616-2.97-3.407-5.4-3.686-5.78 1.137-.416 2.334-.145 2.454-.145zM8.13 4.13c.27.367 2.033 2.815 3.668 5.732-4.6 1.225-8.664 1.2-9.105 1.19.645-3.088 2.737-5.655 5.437-6.923zM2.5 12.028c.46.01 5.24.085 10.164-1.382.283.558.555 1.123.804 1.69-.13.037-.262.075-.39.114C8.001 14.057 5.16 18.67 4.937 19.047 3.426 17.367 2.5 15.208 2.5 12.028zM12 21.5c-2.225 0-4.295-.76-5.93-2.037.184-.37 2.282-4.425 7.86-6.37.023-.008.047-.014.07-.022 1.386 3.594 1.949 6.607 2.097 7.484C14.72 21.166 13.4 21.5 12 21.5zm5.934-2.09c-.1-.605-.62-3.488-1.911-7.044 3.078-.493 5.776.302 6.112.412-.42 2.746-2.018 5.08-4.2 6.632z" /></svg>
                      </a>
                      <a
                        href="https://www.behance.net/kumaraguru1"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Behance"
                        className="hover:text-ink transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7.45 7.6a3.55 3.55 0 0 1 1.54.29 2.93 2.93 0 0 1 .93.67 2.47 2.47 0 0 1 .5.94 4.24 4.24 0 0 1 .16 1.14 2.71 2.71 0 0 1-.4 1.51 3 3 0 0 1-1.23 1.06 2.89 2.89 0 0 1 1.61 1.15 3.58 3.58 0 0 1 .55 2 3.5 3.5 0 0 1-.31 1.53 3.12 3.12 0 0 1-.88 1.11 3.89 3.89 0 0 1-1.37.69 5.88 5.88 0 0 1-1.59.23H0V7.6zm-.27 4.62a1.6 1.6 0 0 0 1-.28 1.13 1.13 0 0 0 .38-.95 1.28 1.28 0 0 0-.12-.61 1 1 0 0 0-.34-.38 1.5 1.5 0 0 0-.5-.2 3.2 3.2 0 0 0-.59-.06H3.23v2.48zm.15 4.85a3.1 3.1 0 0 0 .65-.07 1.65 1.65 0 0 0 .54-.23 1.12 1.12 0 0 0 .37-.44 1.56 1.56 0 0 0 .14-.7 1.36 1.36 0 0 0-.46-1.14 1.93 1.93 0 0 0-1.23-.35H3.23v2.93zM17.7 16.63a2 2 0 0 0 1.59.52 2.17 2.17 0 0 0 1.29-.37 1.53 1.53 0 0 0 .66-.78h2.47a4.71 4.71 0 0 1-1.82 2.64 5.34 5.34 0 0 1-2.97.79 5.84 5.84 0 0 1-2.18-.39 4.48 4.48 0 0 1-1.65-1.09 5 5 0 0 1-1-1.67 6.12 6.12 0 0 1-.37-2.16 5.93 5.93 0 0 1 .37-2.12 4.89 4.89 0 0 1 2.69-2.81 5.2 5.2 0 0 1 2.13-.41 4.87 4.87 0 0 1 2.29.51 4.57 4.57 0 0 1 1.6 1.36 5.57 5.57 0 0 1 .91 2 7.56 7.56 0 0 1 .2 2.33h-7.24a2.57 2.57 0 0 0 .89 2zm2.76-5.53a1.77 1.77 0 0 0-1.37-.5 2.19 2.19 0 0 0-1 .21 2 2 0 0 0-.64.51 2.1 2.1 0 0 0-.34.64 3.27 3.27 0 0 0-.12.56h4.43a3.28 3.28 0 0 0-.96-1.42zM15.72 8.26h6.05v1.45h-6.05z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Desktop-only: HFI-CUA on the right (>= 480px) */}
                <a
                  href="https://hfiinstitute.com/verify/?credential=0af20815-e1cd-4ead-b955-0dc5aa62c2e9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-[480px]:hidden font-mono text-[13px] font-semibold whitespace-nowrap tracking-wide bg-clip-text text-transparent hover:underline underline-offset-4 decoration-[rgb(75,2,227)]"
                  style={{ backgroundImage: "linear-gradient(-20.7deg, rgb(139,46,227) 41.9%, rgb(75,2,227) 86%)" }}
                >
                  HFI - CUA Certified
                </a>
              </div>

              <p className="mt-8 font-mono text-[20px] sm:text-[22px] leading-[30px] sm:leading-[32px] text-ink">
                AI-led Experience Designer with{" "}
                <span className="font-semibold">7+ years</span> crafting 0→1 and
                scalable products, with expertise in building and maintaining
                design systems.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[16px] text-ink">
                <span>Currently working at</span>
                <span className="inline-flex items-center h-6">
                  <Image
                    src="/img/verizon.png"
                    alt="Verizon"
                    width={103}
                    height={23}
                    className="h-6 w-auto object-contain"
                  />
                </span>
                <span className="text-muted">(Via Innova)</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[13px] font-bold text-white hover:opacity-90 active:opacity-70 transition-opacity"
                  style={ctaStyle}
                >
                  View Work
                  <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </a>
                <a
                  href="/CV.pdf"
                  download="kumara-guru-cv.pdf"
                  className="font-mono text-[13px] font-medium text-ink underline underline-offset-4 decoration-ink/40 hover:decoration-ink transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Lanyard() {
  return (
    <div
      aria-hidden
      className="absolute left-1/2 -translate-x-1/2 -top-[45px] flex flex-col items-center z-10"
    >
      {/* Accent colour top block */}
      <div className="w-[48px] h-[40px] rounded-t-[6px] bg-accent" />
      {/* Dark badge body with open-bottom slot */}
      <div className="relative w-[48px] h-[28px] bg-ink rounded-b-[4px] flex items-end justify-center">
        {/* Bottom slot opening */}
        <div className="w-[28px] h-[14px] rounded-t-[4px] bg-[#FFFFFF] translate-y-[6px]" />
      </div>
    </div>
  );
}

/* ---------- Prev. worked with ---------- */

function PrevWorked() {
  const logos = [
    { src: "/img/client1.png", alt: "TNQTech", w: 107, h: 32 },
    { src: "/img/client2.png", alt: "M2P Fintech", w: 32, h: 32 },
    { src: "/img/client3.png", alt: "Freshworks", w: 107, h: 23 },
    { src: "/img/client4.png", alt: "Euroland IR", w: 135, h: 12 },
  ];
  const loop = [...logos, ...logos];
  return (
    <section className="relative z-10 border-b border-line">
      <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-8">
        <p className="font-display text-[18px] font-medium text-ink mb-6 text-center">
          Prev. worked with :
        </p>
        <div
          className="relative overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
          }}
        >
          <div className="flex gap-16 items-center w-max animate-[marquee_30s_linear_infinite]">
            {loop.map((l, i) => (
              <Image
                key={`${l.src}-${i}`}
                src={l.src}
                alt={l.alt}
                width={l.w * 1.2}
                height={l.h * 1.2}
                className="object-contain shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
      {/* Griddots above the bottom border line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-1 left-1/2 -translate-x-1/2 w-full max-w-[1430px]"
        style={{ bottom: 0 }}
      >
        <span className="absolute bottom-0 left-8 min-[1098px]:left-[240px] -translate-x-1/2 size-2 bg-[#c9c9c9] z-20" />
        <span className="absolute bottom-0 right-8 min-[1098px]:right-[240px] translate-x-1/2 size-2 bg-[#c9c9c9] z-20" />
      </div>
    </section>
  );
}

/* ---------- What I brought to the table ---------- */

function WhatIBrought() {
  const stats = [
    {
      value: "90%",
      body: "Improved product efficiency and team velocity by introducing a scalable design system.",
    },
    {
      value: "0 → 1",
      body: "Designed and launched an internal rewards platform from scratch, now actively used across the organization.",
    },
    {
      value: "35%",
      body: "Increased conversion rate in a scalable product through UX improvements and optimization.",
    },
  ];
  return (
    <section id="brought" className="relative z-10">
      <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-[80px]">
        <h2 className="font-display text-[24px] font-medium text-center mb-14">
          What I brought to the table
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((s) => (
            <div key={s.value}>
              <div className="font-mono text-[36px] leading-[40px] font-semibold">
                {s.value}
              </div>
              <p className="mt-6 font-mono text-[16px] leading-[20px] text-muted max-w-[18rem]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How I Design ---------- */

function HowIDesign() {
  return (
    <section id="expertise" className="relative z-10 border-t border-line">
      <GridDots side="top" />
      <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] pt-[80px] pb-[32px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <h2 className="font-display text-[24px] leading-[28px] font-medium">
            How I Design:
            <br />
            Systems Over Screens
          </h2>
          <p className="font-mono text-[16px] leading-[24px] text-ink">
            I don&apos;t see design as a linear process. While I use{" "}
            <span className="font-semibold">Design Thinking</span> as a
            foundation, my approach evolves it into a system-driven model, where
            every decision is interconnected.
          </p>
        </div>

        <VennDiagram />
      </div>
    </section>
  );
}

function VennDiagram() {
  const circles = [
    { x: 0, y: 66, label: "Executive Intent" },
    { x: 155, y: 39, label: "Needs & Opportunity" },
    { x: 303, y: 90, label: "User Groups" },
    { x: 464, y: 48, label: "Environments" },
    { x: 588, y: 90, label: "Scenario" },
    { x: 716, y: 39, label: "Artifacts" },
  ];
  const W = 896;
  const H = 310;
  return (
    <div className="relative mt-12 w-full overflow-x-auto">
      <div className="relative mx-auto" style={{ width: `${W}px`, height: `${H}px` }}>
        {circles.map((c, i) => (
          <div
            key={c.label}
            className="absolute rounded-full flex items-center justify-center text-center"
            style={{
              left: `${c.x}px`,
              top: `${c.y}px`,
              width: "180px",
              height: "180px",
              background: "rgba(255, 255, 255, 1)",
              border: "1px solid rgba(231, 231, 231, 0.50)",
              mixBlendMode: "multiply",
              zIndex: 10 - i,
            }}
          >
            <span className="font-mono text-[15px] font-semibold text-accent px-4 leading-tight" style={{ mixBlendMode: "normal" }}>
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Areas of Expertise ---------- */

function AreasOfExpertise() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] pt-[32px] pb-[80px]">
        <h2 className="font-display text-[24px] font-medium text-center mb-14">
          Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-mono text-[20px] leading-[28px] font-semibold">
              Research & Strategy
            </h3>
            <ul className="mt-6 space-y-1 font-mono text-[16px] leading-[20px] text-muted">
              {[
                "Desk Research",
                "Focus Group",
                "Usability Testing",
                "Defining Persona",
                "Heuristic Evaluation",
                "UI Audit",
                "User Interviews",
                "Affinity Map",
              ].map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[20px] leading-[28px] font-semibold">
              Design + AI
            </h3>
            <p className="mt-6 font-mono text-[13px] font-medium text-muted uppercase tracking-wider">
              Vibe coding tools
            </p>
            <ul className="mt-2 space-y-1 font-mono text-[16px] leading-[20px] text-ink">
              {["Claude", "NotebookLM", "Figma Make"].map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[13px] font-medium text-muted uppercase tracking-wider">
              Design tools
            </p>
            <ul className="mt-2 space-y-1 font-mono text-[16px] leading-[20px] text-ink">
              {["Figma", "Framer", "Lottie Labs", "After Effects", "Photoshop"].map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="rounded-xl border border-line bg-white p-5">
              <h3
                className="font-mono text-[20px] leading-[28px] font-semibold bg-clip-text text-transparent mb-4"
                style={{ backgroundImage: "linear-gradient(-21.8deg, rgb(139,46,227) 41.9%, rgb(75,2,227) 86%)" }}
              >
                Design Systems
              </h3>
              <p className="font-mono text-[16px] leading-[22px] text-muted">
                Developing scalable, cohesive design systems that ensure
                consistency across products and accelerate development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Work Section ---------- */

const workProjects = [
  {
    client: "Euroland",
    title: "Design System — White Label Product",
    desc: "This selected project focused on turning product vision into scalable, real-world experiences — powered by thoughtful AI integration.",
    img: "/img/work-showcase.png",
    href: "/work/euroland-design-system",
    comingSoon: false,
  },
  {
    client: "Innova Solutions",
    title: "O360 — Wireline Sales Quoting",
    desc: "An end-to-end CPQ experience that unifies fragmented quoting workflows into one guided journey — for sales reps and solution architects.",
    img: "/img/o360-thumb.png",
    href: "/work/o360-quoting",
    comingSoon: false,
  },
  {
    client: "M2P Fintech",
    title: "MS Teams - QuikGift",
    desc: "QuikGift is a rewarding platform that aim to send rewards between colleague in an organisation. `Where QuikGift integrated with Microsoft Teams (as a Personal App).",
    img: "/img/Img2.png",
    href: "/work/quikgift",
    comingSoon: false,
  },
];

/* Individual card with cursor-following "View project" pill */
function WorkCard({ p }: { p: typeof workProjects[number] }) {
  const imgRef = React.useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = React.useState({ x: 0, y: 0 });
  const [hovered, setHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <a href={p.href} className="group block">
      {/* Image container */}
      <div
        ref={imgRef}
        className="relative w-full overflow-hidden rounded-[20px] border border-[#e7e7e7] cursor-none"
        style={{ aspectRatio: "896/432" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={p.img}
          alt={p.title}
          fill
          sizes="(min-width: 1098px) 960px, 100vw"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
        />

        {/* Cursor-following "View project" pill */}
        {/* Outer div: no transition — snaps to cursor instantly */}
        <div
          aria-hidden
          className="pointer-events-none absolute z-20"
          style={{
            left: cursor.x,
            top: cursor.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Inner span: glassmorphism pill with dark text */}
          <span
            className="flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-[13px] font-semibold whitespace-nowrap shadow-lg"
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.35)",
              color: "#000",
              opacity: hovered ? 1 : 0,
              transform: `scale(${hovered ? 1 : 0.75})`,
              transition: "opacity 0.22s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            View project
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 10L10 2M10 2H4M10 2v6" />
            </svg>
          </span>
        </div>
      </div>

      {/* Text below image */}
      <div className="mt-5">
        <div className="flex items-center justify-between gap-4">
          <p
            className="font-display text-[20px] leading-[28px] font-medium bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(-44.9deg, rgb(139,46,227) 41.9%, rgb(75,2,227) 86%)" }}
          >
            {p.client}
          </p>
          {p.comingSoon && (
            <span className="inline-flex items-center rounded-full border border-[#22c55e] bg-[#e7faec] px-3 py-1 font-mono text-[12px] font-semibold text-[#22c55e] whitespace-nowrap">
              Coming Soon
            </span>
          )}
        </div>
        <h3 className="mt-1 font-mono text-[20px] leading-[24px] font-semibold text-ink group-hover:text-accent transition-colors duration-300">
          {p.title}
        </h3>
        <p className="mt-2 font-mono text-[16px] leading-[24px] text-muted">
          {p.desc}
        </p>
      </div>
    </a>
  );
}

function WorkSection() {
  return (
    <section id="work" className="relative z-10 border-t border-line">
      <GridDots side="top" />
      <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-[80px]">

        {/* Section header */}
        <div className="text-center max-w-[715px] mx-auto mb-14">
          <h2 className="font-display text-[24px] font-medium">Work Showcase</h2>
          <p className="mt-4 font-mono text-[18px] leading-[24px] text-muted">
            This selected projects focused on turning product vision into
            scalable, real-world experiences — powered by thoughtful AI
            integration.
          </p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-16">
          {workProjects.map((p) => (
            <WorkCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-line">
      <GridDots side="top" />
      <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-9">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="font-display text-[28px] sm:text-[32px] leading-[40px] font-medium text-center md:text-left">
            Let&apos;s build incredible things together!
          </h2>
          <a
            href="mailto:kumara.guru7@gmail.com"
            className="inline-flex items-center px-5 py-2.5 font-mono text-[13px] font-bold text-white hover:opacity-90 transition-opacity"
            style={ctaStyle}
          >
            kumara.guru7@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
