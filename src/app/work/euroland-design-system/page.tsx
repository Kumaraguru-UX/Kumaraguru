"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react";

/* Shared Figma CTA style (matches home page) */
const ctaStyle: React.CSSProperties = {
  borderRadius: "24px",
  border: "1px solid #080018",
  background: "linear-gradient(180deg, #F3F3F3 0%, #000 6.96%)",
  boxShadow:
    "0 10px 12px 0 rgba(61,61,61,0.24), 0 3px 4px 0 rgba(255,255,255,0.30) inset",
};

const purpleGradient =
  "linear-gradient(-44.9deg, rgb(139,46,227) 41.9%, rgb(75,2,227) 86%)";

export default function EurolandCaseStudy() {
  return (
    <main className="relative w-full overflow-x-hidden bg-paper text-ink pb-20">
      <FrameGrid />
      <Header />

      {/* Back to home */}
      <section className="relative">
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#080018] px-4 py-2 font-mono text-[14px] font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </section>

      {/* Title block */}
      <section className="relative">
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] pt-8">
          <p className="font-display text-[20px] leading-[24px] font-medium text-muted">
            Building a white-label design system from zero to one.
          </p>
          <h1 className="mt-3 font-mono text-[28px] leading-[38px] font-semibold text-ink max-w-[896px]">
            How I led the design &amp; rollout of a multi-brand component
            library cutting launch time by 70% across four products.
          </h1>
        </div>
      </section>

      {/* Hero image */}
      <section className="relative">
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] pt-8 pb-12">
          <div
            className="relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7]"
            style={{ aspectRatio: "896/427" }}
          >
            <Image
              src="/img/case-studies/euroland/hero.png"
              alt="Euroland design system hero"
              fill
              sizes="(min-width: 1098px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Stat value="70%" label="Reduction in time-to-launch for new surfaces" />
            <Stat value="45%" label="WCAG AA pass rate, up from 45% at baseline" />
            <Stat value="2×" label="Consistency level increased in the overall product" />
          </div>
        </div>
      </section>

      {/* Background Story + Business Goal */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Background Story */}
            <div className="flex flex-col gap-4">
              <h2
                className="font-mono text-[20px] leading-[28px] font-semibold bg-clip-text text-transparent"
                style={{ backgroundImage: purpleGradient }}
              >
                Background Story
              </h2>
              <p className="font-mono text-[14px] leading-[20px] text-muted max-w-[420px]">
                Euroland is a &quot;one stop decision making solution for
                investor&quot;. It provides a range of products ranging from
                investor to companies listed in market. Solution provide via web
                and mobile application to the companies listing the share price
                and details.
              </p>
            </div>

            {/* Right: Business Goal (white card with green border) */}
            <div className="rounded-[12px] border border-[rgba(0,194,32,0.5)] bg-white p-6">
              <h2 className="font-mono text-[20px] leading-[28px] font-semibold text-[#00c220]">
                Business Goal
              </h2>
              <p className="mt-4 font-mono text-[14px] leading-[20px] text-muted">
                One of the key goal was managing design variations between
                clients while maintaining a uniform structure. Each client had
                different branding requirements—fonts, colors, icons—which
                complicated the creation of universal components. Additionally,
                maintaining flexibility without compromising consistency posed a
                unique design challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Phase */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <h2 className="text-center font-display text-[24px] leading-[28px] font-medium text-ink">
            Five Phrase
          </h2>
          <p className="mt-2 text-center font-mono text-[14px] leading-[22px] text-muted">
            Each phase had a shipped artifact - never just a doc
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <PhaseCard num="01" label="Audit" />
            <PhaseCard num="02" label="Tokens" />
            <PhaseCard num="03" label="Component" />
            <PhaseCard num="04" label="Pilot" />
            <PhaseCard num="05" label="Rollout" />
          </div>
        </div>
      </section>

      {/* Understanding & Identifying */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <p className="font-mono text-[14px] leading-[18px] uppercase text-[#96969c]">
            Understanding &amp; Identifying
          </p>
          <h2 className="mt-4 font-display text-[24px] leading-[28px] font-medium text-ink">
            Target Users
          </h2>
          <p className="mt-4 font-mono text-[14px] leading-[20px] text-muted max-w-[896px]">
            Our first set of primary users were designers and developers inside
            the org and then the next set of users were the end users who were
            using Euroland&apos;s products.
          </p>
          <p className="mt-4 font-mono text-[14px] leading-[20px] text-muted max-w-[896px]">
            What this meant was, while designing we had to keep in mind how
            using the system becomes easier for our primary set of user while
            keeping in mind that the visuals and interactions of the components
            should be easily usable by the secondary set of users.
          </p>

          <h2 className="mt-12 font-display text-[24px] leading-[28px] font-medium text-ink">
            UI Audit
          </h2>
          <p className="mt-4 font-mono text-[14px] leading-[22px] text-muted max-w-[896px]">
            I began with a comprehensive UI audit to understand each client&apos;s
            design language. I selected five key clients from different regions
            within Euroland and prepared a detailed UI inventory. This helped me
            identify design inconsistencies and functionality gaps, allowing us
            to pinpoint the most critical issues.
          </p>

          <div
            className="mt-8 relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7]"
            style={{ aspectRatio: "890/585" }}
          >
            <Image
              src="/img/case-studies/euroland/ui-audit.png"
              alt="UI Audit"
              fill
              sizes="(min-width: 1098px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Challenges + Solutions */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          {/* Challenges */}
          <div className="rounded-[12px] border border-[rgba(255,56,60,0.2)] bg-white p-6">
            <h3 className="font-mono text-[20px] leading-[24px] font-semibold text-[#ff383c]">
              Challenges
            </h3>
            <p className="mt-2 font-mono text-[14px] leading-[20px] text-muted">
              One of the key challenges was managing design variations between
              clients while maintaining a uniform structure. Each client had
              different branding requirements—fonts, colors, icons—which
              complicated the creation of universal components. Additionally,
              maintaining flexibility without compromising consistency posed a
              unique design challenge.
            </p>
          </div>

          {/* Solutions */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <SolutionBlock
              heading="Component List"
              body="Based on my understanding I began to prepare the components list first. Prioritisation was based on functionality and frequency of use across the five key clients. This ensured that the high-impact areas were addressed early, speeding up the onboarding process for new clients."
            />
            <SolutionBlock
              heading="Design Tokens"
              body="I created a scalable design system with design tokens and reusable components based on Atomic Design principles. Using Figma Variables and Modes, I enabled client-specific branding while maintaining consistency across products."
            />
          </div>

          <div
            className="mt-10 relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7] bg-[#f7f6ed]"
            style={{ aspectRatio: "890/636" }}
          >
            <Image
              src="/img/case-studies/euroland/solution.png"
              alt="Design system solution"
              fill
              sizes="(min-width: 1098px) 896px, 100vw"
              className="object-cover"
            />
          </div>

          <div
            className="mt-8 relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7]"
            style={{ aspectRatio: "890/574" }}
          >
            <Image
              src="/img/case-studies/euroland/process.gif"
              alt="Design system process"
              fill
              sizes="(min-width: 1098px) 896px, 100vw"
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Read Next */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <h2 className="font-display text-[24px] leading-[28px] font-medium text-ink">
            Read Next
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReadNextCard
              gradient="linear-gradient(180deg, #726bff 0%, #0d05a2 100%)"
              img="/img/case-studies/euroland/readnext-1.png"
              client="M2P Fintech"
              title="MS Teams - QuikGift"
              desc="QuikGift is a rewarding platform that aim to send rewards between colleague in an organisation. Where QuikGift integrated with Microsoft Teams (as a Personal App)."
              href="#"
            />
            <ReadNextCard
              gradient="#b00a03"
              img="/img/case-studies/euroland/readnext-2.png"
              client="M2P Fintech"
              title="MS Teams - QuikGift"
              desc="QuikGift is a rewarding platform that aim to send rewards between colleague in an organisation. Where QuikGift integrated with Microsoft Teams (as a Personal App)."
              href="#"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ---------- Shared building blocks (mirror home page) ---------- */

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

function GridDots({ side = "top" }: { side?: "top" | "bottom" }) {
  const pos =
    side === "top" ? "top-0 -translate-y-1/1" : "bottom-0 translate-y-1/1";
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-1 left-1/2 -translate-x-1/2 w-full max-w-[1430px]"
      style={{ [side]: 0 }}
    >
      <span
        className={`absolute ${pos} left-8 min-[1098px]:left-[240px] -translate-x-1/2 size-2 bg-[#c9c9c9] z-20`}
      />
      <span
        className={`absolute ${pos} right-8 min-[1098px]:right-[240px] translate-x-1/2 size-2 bg-[#c9c9c9] z-20`}
      />
    </div>
  );
}

function Header() {
  return (
    <header className="relative sticky top-0 z-30 w-full bg-paper/90 backdrop-blur-md border-b border-line/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px]"
      >
        <div className="absolute inset-y-0 left-8 min-[1098px]:left-[240px] w-px bg-line" />
        <div className="absolute inset-y-0 right-8 min-[1098px]:right-[240px] w-px bg-line" />
      </div>
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
          <Link href="/" aria-label="Home">
            <Image
              src="/img/logo.svg"
              alt="KG"
              width={44}
              height={32}
              priority
            />
          </Link>
          <SeekingPill />
        </div>
      </div>
    </header>
  );
}

function SeekingPill() {
  return (
    <div
      className="inline-flex items-center gap-2.5 px-3 py-2 font-mono text-[14px] font-semibold text-white"
      style={ctaStyle}
    >
      <span className="size-2 rounded-full bg-[#22c55e]" />
      Seeking Opportunities
    </div>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-line mt-12"
    >
      <GridDots side="top" />
      <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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

/* ---------- Local primitives ---------- */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-mono text-[36px] leading-[40px] font-semibold text-ink">
        {value}
      </p>
      <p className="font-mono text-[16px] leading-[20px] text-muted">{label}</p>
    </div>
  );
}

function PhaseCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex flex-col gap-6 rounded-[8px] border border-[#f2efeb] bg-white px-4 py-3">
      <span
        className="font-mono text-[14px] leading-[16px] font-medium bg-clip-text text-transparent"
        style={{ backgroundImage: purpleGradient }}
      >
        {num}
      </span>
      <span className="font-mono text-[20px] leading-[22px] text-ink">
        {label}
      </span>
    </div>
  );
}

function SolutionBlock({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-display text-[12px] leading-[14px] text-[#291c1c]">
        Solution
      </p>
      <h3 className="font-mono text-[20px] leading-[24px] font-semibold text-[#0088ff]">
        {heading}
      </h3>
      <p className="font-mono text-[14px] leading-[20px] text-muted">{body}</p>
    </div>
  );
}

/* Read Next card — mirrors WorkCard cursor-following pill hover */
function ReadNextCard({
  gradient,
  img,
  client,
  title,
  desc,
  href,
}: {
  gradient: string;
  img: string;
  client: string;
  title: string;
  desc: string;
  href: string;
}) {
  const imgRef = React.useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = React.useState({ x: 0, y: 0 });
  const [hovered, setHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <a href={href} className="group block">
      {/* Image container with branded gradient bg */}
      <div
        ref={imgRef}
        className="relative w-full overflow-hidden rounded-[8px] border border-white/40 cursor-none"
        style={{ aspectRatio: "430/235", background: gradient }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={img}
          alt={title}
          fill
          sizes="(min-width: 768px) 430px, 100vw"
          className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
        />

        {/* Cursor-following View project pill */}
        <div
          aria-hidden
          className="pointer-events-none absolute z-20"
          style={{
            left: cursor.x,
            top: cursor.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span
            className="flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-[13px] font-semibold whitespace-nowrap shadow-lg"
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.35)",
              color: "#fff",
              opacity: hovered ? 1 : 0,
              transform: `scale(${hovered ? 1 : 0.75})`,
              transition:
                "opacity 0.22s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            View project
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 10L10 2M10 2H4M10 2v6" />
            </svg>
          </span>
        </div>
      </div>

      {/* Text below */}
      <div className="mt-4">
        <p
          className="font-display text-[12px] leading-[14px] font-medium bg-clip-text text-transparent"
          style={{ backgroundImage: purpleGradient }}
        >
          {client}
        </p>
        <h3 className="mt-2 font-mono text-[14px] leading-[18px] font-semibold text-ink group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="mt-2 font-mono text-[12px] leading-[18px] text-muted">
          {desc}
        </p>
      </div>
    </a>
  );
}
