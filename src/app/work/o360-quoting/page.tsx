"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useInView, type Variants } from "motion/react";
import { ArrowLeft } from "lucide-react";
import NavigationDock from "../../_components/NavigationDock";

/* Shared CTA pill style (matches home + Euroland) */
const ctaStyle: React.CSSProperties = {
  borderRadius: "24px",
  border: "1px solid #080018",
  background: "linear-gradient(180deg, #F3F3F3 0%, #000 6.96%)",
  boxShadow:
    "0 10px 12px 0 rgba(61,61,61,0.24), 0 3px 4px 0 rgba(255,255,255,0.30) inset",
};

const purpleGradient =
  "linear-gradient(-44.9deg, rgb(139,46,227) 41.9%, rgb(75,2,227) 86%)";

/* Reveal: scroll-triggered fade+slide up (same as Euroland) */
const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  return (
    <motion.div
      ref={ref}
      variants={revealVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function O360CaseStudy() {
  return (
    <main className="relative w-full overflow-x-hidden bg-paper text-ink pb-8">
      <FrameGrid />
      <Header />

      {/* Back to home */}
      <section className="relative">
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] pt-8">
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#080018] px-4 py-2 font-mono text-[14px] font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Title block */}
      <section className="relative">
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] pt-8">
          <Reveal>
            <p className="font-display text-[14px] leading-[20px] sm:text-[20px] sm:leading-[24px] font-medium text-muted">
              An end-to-end CPQ experience for wireline sales.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-3 font-mono text-[24px] leading-[32px] sm:text-[28px] sm:leading-[38px] font-semibold text-ink max-w-[896px]">
              O360 unifies fragmented quoting workflows into a single guided
              journey for sales reps and solution architects — built for speed,
              accuracy, and scale across thousands of wireline customer sites.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="relative">
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] pt-8 pb-12">
          <Reveal>
            <div
              className="relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7]"
              style={{ aspectRatio: "896/440" }}
            >
              <Image
                src="/img/case-studies/o360/hero.png"
                alt="O360 quoting application hero"
                fill
                sizes="(min-width: 1098px) 896px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats row */}
      <section className="relative">
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Reveal delay={0}>
              <StatBlock
                value="85%"
                title="Higher Field Productivity"
                body="Enabled sales representatives & solution architects to complete more wired installation requests by streamlining workflows and reducing operational friction."
              />
            </Reveal>
            <Reveal delay={1}>
              <StatBlock
                value="45%"
                title="Lower Error Rate"
                body="Redesigned the information architecture and task flows to reduce user errors and improve task completion accuracy."
              />
            </Reveal>
            <Reveal delay={2}>
              <StatBlock
                value="2×"
                title="Greater Design Consistency"
                body="Standardized the user interface using the Verizon Design System, creating a more consistent and scalable product experience."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Executive Intent */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <SectionHead caption="Executive Intent" />

          <ul className="mt-8 flex flex-col gap-5 font-mono text-[14px] leading-[22px] text-muted max-w-[896px]">
            <Reveal delay={0}>
              <li className="pl-5 relative before:absolute before:left-0 before:top-[10px] before:size-1.5 before:rounded-full before:bg-ink">
                The sales journey was fragmented across multiple applications,
                creating inefficiencies for Sales Representatives and Solution
                Architects. The objective was to deliver a unified platform
                that streamlined workflows and provided a consistent user
                experience.
              </li>
            </Reveal>
            <Reveal delay={1}>
              <li className="pl-5 relative before:absolute before:left-0 before:top-[10px] before:size-1.5 before:rounded-full before:bg-ink">
                Align the experience with Verizon&apos;s latest design system,
                delivering an accessible, consistent, and scalable interface
                for every persona involved in the quoting process.
              </li>
            </Reveal>
            <Reveal delay={2}>
              <li className="pl-5 relative before:absolute before:left-0 before:top-[10px] before:size-1.5 before:rounded-full before:bg-ink">
                The legacy portal forced users to switch between disconnected
                tools, while inconsistent navigation and poor information
                architecture made even routine tasks difficult to complete
                efficiently.
              </li>
            </Reveal>
          </ul>
        </div>
      </section>

      {/* Design Process — User-Centered Design */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <SectionHead
            caption="Design Process"
            heading="User-Centered Design."
            body="The UCD method places the needs, behaviors, and pain points of users at the forefront of the design process. By involving users at every stage — from research to testing — UCD ensures the product is intuitive, efficient, and aligned with real-world workflows, avoiding unnecessary features while optimizing usability."
          />

          {/* 5-step timeline */}
          <div className="mt-12">
            {/* Timeline row (line + dots) */}
            <div className="relative hidden md:block mb-6">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-[#8b2ee3] via-[#ff7a7a] to-[#0d05a2]" />
              <div className="relative grid grid-cols-5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex justify-start">
                    <span className="size-3 rounded-full" style={{ background: purpleGradient }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { n: "01", title: "Empathy", body: "Understand the goals and identifying needs and challenges of the business." },
                { n: "02", title: "Define", body: "Map user groups and build Persona to surface the real problems to solve." },
                { n: "03", title: "Ideate", body: "Shape information architecture and the structure of the recognition flow." },
                { n: "04", title: "Design", body: "Translate structure into wireframes, then into a polished, on-brand visual design." },
                { n: "05", title: "Test", body: "Validate with user testing, then iterate on friction points before handoff." },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i}>
                  <div className="flex flex-col gap-2">
                    {/* Mobile-only dot */}
                    <span className="md:hidden size-3 rounded-full" style={{ background: purpleGradient }} />
                    <span
                      className="font-mono text-[14px] leading-[16px] font-medium bg-clip-text text-transparent"
                      style={{ backgroundImage: purpleGradient }}
                    >
                      {s.n}
                    </span>
                    <span className="font-mono text-[18px] leading-[22px] font-semibold text-ink">
                      {s.title}
                    </span>
                    <p className="font-mono text-[12px] leading-[18px] text-muted">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insight 360 CPQ Start to End Flow */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <Reveal>
            <h2 className="font-display text-[24px] leading-[32px] font-medium text-ink max-w-[896px]">
              Insight 360 CPQ Start to End Flow
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <div
              className="mt-8 relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7] bg-white"
              style={{ aspectRatio: "896/598" }}
            >
              <Image
                src="/img/case-studies/o360/insight360.png"
                alt="Insight 360 CPQ start to end flow diagram"
                fill
                sizes="(min-width: 1098px) 896px, 100vw"
                className="object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Discovery & Research */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <SectionHead
            caption="Understanding Business Needs and challenges"
            heading="Anchored in real sales workflows."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <ObstacleCard
                title="Stakeholders interviews"
                body="Aligned on business goals, user needs, and project scope while uncovering key challenges, constraints, and pain points from stakeholders and SMEs."
              />
            </Reveal>
            <Reveal delay={1}>
              <ObstacleCard
                title="Heuristic Evaluation"
                body="Prioritised key user flows based on business goals and evaluated them using usability heuristics to identify usability issues and with improved recommendation."
              />
            </Reveal>
            <Reveal delay={2}>
              <ObstacleCard
                title="Competitor Analysis"
                body="Understand the existing product, user workflows, and how complex tasks are currently handled."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <SectionHead
            caption="Defining User groups & Persona"
            heading="Two roles, one quote-to-order journey."
            body="Sales reps and solution architects own different halves of the same quote — and each needed a distinctly shaped experience to move it forward without friction."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={0}>
              <StakeholderCard
                tag="Sales Representative"
                body="Drives the commercial side of the quote — engaging customers, negotiating discounts, and getting the deal across the line. Needs speed, accuracy, and minimal switching."
              />
            </Reveal>
            <Reveal delay={1}>
              <StakeholderCard
                tag="Solution Architect"
                body="Validates that the proposed network design is technically deliverable across hundreds or thousands of customer sites. Needs bulk configuration, templates, and pre-quote feasibility checks."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <SectionHead caption="User Personas" heading="Who we built for." />

          <div className="mt-10 grid grid-cols-1 gap-8">
            <Reveal delay={0}>
              <PersonaCard
                avatarBg="radial-gradient(circle at 30% 30%, #4933fa 0%, #1a0d8a 100%)"
                initials="AS"
                name="Amit Sharma"
                title="Sr. Sales Representative"
                education="B2B Telecom Sales"
                location="Bangalore, India"
                traits={["Speed", "Accuracy", "Automation", "Integration"]}
                bio="Amit works in a fast-paced sales environment, handling multiple clients daily. He uses CPQ to configure product bundles, apply discounts, and generate quotes, while collaborating with finance and management for approvals."
                goals={[
                  "Generate quotes faster with fewer manual steps.",
                  "Reduce errors in pricing.",
                  "Easier navigation across sales tools in a unified workspace.",
                  "Better automation for discount approvals and configurations.",
                ]}
                pains={[
                  { tag: "Complex CPQ", body: "the current quoting system is time-consuming and unintuitive." },
                  { tag: "Frequent errors", body: "outdated UI and manual inputs cause repeated mistakes." },
                  { tag: "Tool switching", body: "constantly hopping between systems slows productivity." },
                ]}
                challenges={[
                  "Needs to close deals quickly while ensuring pricing accuracy.",
                  "Struggles to handle approvals when discounts cross thresholds.",
                ]}
                motivation={[
                  "Wants a simple, fast, and error-free way to generate quotes without switching between multiple tools.",
                ]}
              />
            </Reveal>
            <Reveal delay={1}>
              <PersonaCard
                avatarBg="radial-gradient(circle at 30% 30%, #00b894 0%, #006a55 100%)"
                initials="AM"
                name="Ananya Mehta"
                title="Solution Architect"
                education="B2B Telecom Sales"
                location="Bangalore, India"
                traits={["Bulk efficiency", "Template-led", "Validation-first", "Visual"]}
                bio="Ananya is the technical bridge between the client's IT team and the sales rep. She ingests messy spreadsheets containing hundreds of physical locations, groups them by needs (Data Centers vs Branch Offices), defines technical specs, and validates that the ISP can actually deliver service at those coordinates."
                goals={[
                  "Bulk-configure 1,000+ customer sites by applying reusable Site Type rules.",
                  "Create reusable 'Site Types' (e.g. Gold Branch: Dual Fiber + SD-WAN) to map to locations instantly.",
                  "Pre-quote validation: catch out-of-coverage and capacity issues before sending to customer.",
                  "Use dashboard analytics to spot gaps in Access design or CPE availability.",
                ]}
                pains={[
                  { tag: "Manual mapping fatigue", body: "assigning products to locations line-by-line is error-prone and bottlenecks the team." },
                  { tag: "Feasibility black holes", body: "designing a network only to find 20% of sites fail validation during provisioning." },
                  { tag: "Fragmented data", body: "toggling between design tool, coverage maps, and pricing sheets just to find the right wireline product mix." },
                ]}
                challenges={[
                  "Handling the 5% of sites that don't fit the standard templates (e.g. remote locations needing 5G/LTE because fiber is missing).",
                ]}
                motivation={[
                  "I don't just need a quote; I need a viable network design — bulk-configure 500+ locations, catch technical errors instantly, and optimize the mix of Access and CPE without manually touching every row.",
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Competitive Research */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <SectionHead
            caption="Competitive Research"
            heading="Learning from the CPQ field."
            body="Benchmarking leading Configure-Price-Quote tools surfaced exactly where O360 could win — and which patterns were table stakes for sales reps and architects."
          />

          <Reveal delay={3}>
            <div className="mt-10 overflow-hidden">
              <table className="w-full font-mono text-[14px]">
                <thead>
                  <tr className="border-b border-line">
                    <th className="text-left py-4 pr-6 font-mono text-[14px] text-ink font-semibold">Feature</th>
                    <th className="text-left py-4 px-6 font-mono text-[14px] text-ink font-semibold">Salesforce CPQ</th>
                    <th className="text-left py-4 px-6 font-mono text-[14px] text-ink font-semibold">Oracle CPQ</th>
                    <th className="text-left py-4 px-6 font-mono text-[14px] text-ink font-semibold">PROS Smart CPQ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Guided selling flow", "Yes", "No", "Yes"],
                    ["Bulk site configuration", "No", "Yes", "Yes"],
                    ["Inline pre-quote validation", "Yes", "Yes", "No"],
                    ["AI-driven recommendations", "Yes", "No", "Yes"],
                    ["Mobile experience", "Optimized", "Optimized", "Optimized"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-line/60">
                      {row.map((cell, j) => {
                        const isHeader = j === 0;
                        const isYes = cell === "Yes";
                        const isNo = cell === "No";
                        return (
                          <td
                            key={j}
                            className={`py-4 ${j === 0 ? "pr-6" : "px-6"} ${
                              isHeader
                                ? "text-ink font-semibold"
                                : isYes
                                ? "text-[#22c55e] font-medium"
                                : isNo
                                ? "text-[#ff383c] font-medium"
                                : "text-muted"
                            }`}
                          >
                            {cell}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key Findings — Obstacles */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <SectionHead
            caption="Key Findings"
            heading="Obstacles to solve for."
            body="Three recurring themes surfaced across every interview and audit — each one quietly eroded confidence in the legacy quoting experience."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <ObstacleCard
                title="Unclear navigation"
                body="Reps struggled to locate the next action across a sprawling legacy UI. There was no iterative path to revise a quote, so any change meant starting parts of the flow over."
              />
            </Reveal>
            <Reveal delay={1}>
              <ObstacleCard
                title="Cluttered information"
                body="The interface lacks effective progressive disclosure, exposing users to too much information at once and increasing cognitive load."
              />
            </Reveal>
            <Reveal delay={2}>
              <ObstacleCard
                title="Too many fields"
                body="The current quoting tool required reps to manually fill 32+ fields per quote. Most were repetitive or could be inferred — but every one was a chance to slow down or introduce an error."
              />
            </Reveal>
          </div>

          {/* Legacy findings grid image */}
          <Reveal delay={0}>
            <div className="mt-12 relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7] bg-white">
              <Image
                src="/img/case-studies/o360/legacy-findings.png"
                alt="Legacy O360 findings — six annotated screens showing key UX problems"
                width={2600}
                height={1300}
                sizes="(min-width: 1098px) 896px, 100vw"
                quality={100}
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Information architecture — Before / After slider */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <Reveal>
            <h2 className="font-display text-[24px] leading-[32px] font-medium text-ink max-w-[896px]">
              Information architecture
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 font-mono text-[14px] leading-[22px] text-muted max-w-[705px]">
              Drag the divider to compare the legacy scattered portals with the
              new unified O360 architecture.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <BeforeAfterSlider
              before="/img/case-studies/o360/ia-before.png"
              after="/img/case-studies/o360/ia-after.png"
              alt="Information architecture"
            />
          </Reveal>
        </div>
      </section>

      {/* Userflow — configure, price and quotation */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <Reveal>
            <h2 className="font-display text-[24px] leading-[32px] font-medium text-ink max-w-[896px]">
              Userflow — configure, price and quotation
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 font-mono text-[14px] leading-[22px] text-muted max-w-[705px]">
              This unified user flow consolidates previously scattered legacy
              processes into one seamless journey.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div
              className="mt-8 relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7] bg-white"
              style={{ aspectRatio: "896/619" }}
            >
              <Image
                src="/img/case-studies/o360/userflow.png"
                alt="Configure, price and quotation user flow diagram"
                fill
                sizes="(min-width: 1098px) 896px, 100vw"
                className="object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Critical UX decisions made while wireframing */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <Reveal>
            <h2 className="font-display text-[24px] leading-[32px] font-medium text-ink max-w-[896px]">
              Critical UX decisions made while wireframing
            </h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <Reveal delay={0}>
              <ul className="flex flex-col gap-4 font-mono text-[14px] leading-[22px] text-muted">
                <li className="pl-5 relative before:absolute before:left-0 before:top-[10px] before:size-1.5 before:rounded-full before:bg-ink">
                  Reduced screen complexity — grouped related data to lower cognitive load.
                </li>
                <li className="pl-5 relative before:absolute before:left-0 before:top-[10px] before:size-1.5 before:rounded-full before:bg-ink">
                  Guided flow — reduced confusion and enabled faster task completion.
                </li>
                <li className="pl-5 relative before:absolute before:left-0 before:top-[10px] before:size-1.5 before:rounded-full before:bg-ink">
                  Removed non-essential fields to streamline the journey.
                </li>
                <li className="pl-5 relative before:absolute before:left-0 before:top-[10px] before:size-1.5 before:rounded-full before:bg-ink">
                  Pre-filled data, fewer manual actions and automation — recommended product configuration, promotions and discounts.
                </li>
              </ul>
            </Reveal>
            <Reveal delay={1}>
              <div
                className="relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7] bg-white"
                style={{ aspectRatio: "514/442" }}
              >
                <Image
                  src="/img/case-studies/o360/critical-ux.png"
                  alt="Critical UX decisions wireframing screenshot"
                  fill
                  sizes="(min-width: 1098px) 440px, 100vw"
                  className="object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Design system and scalability */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <Reveal delay={0}>
              <div className="flex flex-col gap-6">
                <h2 className="font-display text-[24px] leading-[32px] font-medium text-ink">
                  Design system and scalability
                </h2>
                <p className="font-mono text-[14px] leading-[22px] text-muted">
                  Verizon had a well-established design system foundation;
                  however, it lacked scalable components required to support
                  complex enterprise workflows.
                </p>
                <p className="font-mono text-[14px] leading-[22px] text-muted">
                  As a Product Designer, I identified these gaps, designed
                  reusable components and patterns, and collaborated with the
                  Verizon Design System Governance team to review, refine, and
                  approve them for adoption across products.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div
                className="relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7] bg-white"
                style={{ aspectRatio: "514/482" }}
              >
                <Image
                  src="/img/case-studies/o360/design-system.png"
                  alt="Verizon design system components"
                  fill
                  sizes="(min-width: 1098px) 440px, 100vw"
                  className="object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key Screens — Before / After */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <Reveal>
            <h2 className="font-display text-[24px] leading-[32px] font-medium text-ink">
              Key Screens
            </h2>
          </Reveal>

          {/* Before / After tags row */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <Reveal delay={0}>
              <span className="inline-flex self-start items-center rounded-full border border-[#e7e7e7] bg-white px-6 py-2 font-mono text-[13px] font-semibold text-ink">
                Before
              </span>
            </Reveal>
            <Reveal delay={1}>
              <span className="inline-flex self-start items-center rounded-full border border-[#e7e7e7] bg-white px-6 py-2 font-mono text-[13px] font-semibold text-ink">
                After
              </span>
            </Reveal>
          </div>

          {/* Pricing subsection */}
          <div className="mt-8">
            <Reveal>
              <h3 className="font-mono text-[16px] leading-[22px] font-semibold text-ink">
                Pricing
              </h3>
            </Reveal>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <Reveal delay={0}>
                <div
                  className="relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7] bg-white"
                  style={{ aspectRatio: "401/216" }}
                >
                  <Image
                    src="/img/case-studies/o360/pricing-before.png"
                    alt="Pricing before redesign"
                    fill
                    sizes="(min-width: 1098px) 440px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={1}>
                <div
                  className="relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7] bg-white"
                  style={{ aspectRatio: "385/228" }}
                >
                  <Image
                    src="/img/case-studies/o360/pricing-after.png"
                    alt="Pricing after redesign"
                    fill
                    sizes="(min-width: 1098px) 440px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <Reveal delay={0}>
                <p className="font-mono text-[14px] leading-[22px] text-muted">
                  Information was scattered across the interface without
                  applying progressive disclosure, forcing users to process
                  unnecessary details which cause delay in completing their
                  tasks.
                </p>
              </Reveal>
              <Reveal delay={1}>
                <p className="font-mono text-[14px] leading-[22px] text-muted">
                  Introduced a simplified Promotions &amp; Discounts summary
                  card that surfaced key pricing insights upfront, reducing
                  scrolling, minimizing manual effort, and enabling faster
                  quote reviews.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Product configuration subsection */}
          <div className="mt-12">
            <Reveal>
              <h3 className="font-mono text-[16px] leading-[22px] font-semibold text-ink">
                Product configuration
              </h3>
            </Reveal>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <Reveal delay={0}>
                <div
                  className="relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7] bg-white"
                  style={{ aspectRatio: "385/213" }}
                >
                  <Image
                    src="/img/case-studies/o360/productconfig-before.png"
                    alt="Product configuration before redesign"
                    fill
                    sizes="(min-width: 1098px) 440px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={1}>
                <div
                  className="relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7] bg-white"
                  style={{ aspectRatio: "382/212" }}
                >
                  <Image
                    src="/img/case-studies/o360/productconfig-after.png"
                    alt="Product configuration after redesign"
                    fill
                    sizes="(min-width: 1098px) 440px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <Reveal delay={0}>
                <p className="font-mono text-[14px] leading-[22px] text-muted">
                  Information was scattered across the interface without
                  applying progressive disclosure, forcing users to process
                  unnecessary details which cause delay in completing their
                  tasks.
                </p>
              </Reveal>
              <Reveal delay={1}>
                <p className="font-mono text-[14px] leading-[22px] text-muted">
                  Added a structured milestone navigation with contextual quote
                  details, enabling users to understand their current stage and
                  complete tasks in a logical sequence.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Test and impact */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <Reveal>
            <h2 className="font-display text-[24px] leading-[32px] font-medium text-ink">
              Test and impact
            </h2>
          </Reveal>

          {/* Usability Testing + Benchmarking cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={0}>
              <div className="flex flex-col gap-4 rounded-[12px] border border-[#e7e7e7] bg-white p-6 h-full">
                <h3 className="font-mono text-[16px] leading-[22px] font-semibold text-ink">
                  Usability Testing
                </h3>
                <p className="font-mono text-[14px] leading-[22px] text-muted">
                  We conducted formative usability testing with a prototype to
                  evaluate the user flow and content. Participants were asked
                  to think aloud using the Figma prototype link and share their
                  feedback in real time.
                </p>
                <p className="font-mono text-[14px] leading-[22px] text-muted">
                  A total of 15 participants took part in overall usability
                  testing, which was conducted in Webex and recorded for
                  analysis.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="flex flex-col gap-4 rounded-[12px] border border-[#e7e7e7] bg-white p-6 h-full">
                <h3 className="font-mono text-[16px] leading-[22px] font-semibold text-ink">
                  Benchmarking
                </h3>
                <p className="font-mono text-[14px] leading-[22px] text-muted">
                  The number or percentage of participants who successfully
                  completed a specific task. Assessing whether users correctly
                  identify which elements are clickable versus decorative.
                  Tracking how many times users took a wrong turn or had to
                  restart a task. If participants failed or dropped off at any
                  point, identifying the bottlenecks in the flow.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Impact & Metrics */}
          <Reveal delay={2}>
            <div className="mt-6 rounded-[12px] border border-[#e7e7e7] bg-white p-6">
              <h3 className="font-mono text-[16px] leading-[22px] font-semibold text-ink">
                Impact &amp; Metrics
              </h3>
              <ul className="mt-4 flex flex-col gap-2 font-mono text-[14px] leading-[22px] text-muted">
                <li className="pl-5 relative before:absolute before:left-0 before:top-[10px] before:size-1.5 before:rounded-full before:bg-ink">
                  Sales representatives no longer had to switch tools.
                </li>
                <li className="pl-5 relative before:absolute before:left-0 before:top-[10px] before:size-1.5 before:rounded-full before:bg-ink">
                  Reduced quoting time with fewer steps and guided paths.
                </li>
                <li className="pl-5 relative before:absolute before:left-0 before:top-[10px] before:size-1.5 before:rounded-full before:bg-ink">
                  Persona-based flows and smart validations reduced errors and rework.
                </li>
                <li className="pl-5 relative before:absolute before:left-0 before:top-[10px] before:size-1.5 before:rounded-full before:bg-ink">
                  <span className="font-semibold text-ink">Field update reduction by 35%.</span>
                </li>
                <li className="pl-5 relative before:absolute before:left-0 before:top-[10px] before:size-1.5 before:rounded-full before:bg-ink">
                  <span className="font-semibold text-ink">Reduced task completion time by 40%.</span>
                </li>
                <li className="pl-5 relative before:absolute before:left-0 before:top-[10px] before:size-1.5 before:rounded-full before:bg-ink">
                  <span className="font-semibold text-ink">Page / Steps reduction by 30%.</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Read Next */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <Reveal>
            <p className="font-mono text-[14px] leading-[18px] uppercase text-[#96969c]">
              Read Next
            </p>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={0}>
              <ReadNextCard
                img="/img/case-studies/o360/readnext-design-system.png"
                client="Euroland"
                title="Design System — White Label Product"
                desc="My First Design System — A scalable multi-brand component library built from zero to one."
                href="/work/euroland-design-system"
              />
            </Reveal>
            <Reveal delay={1}>
              <ReadNextCard
                img="/img/case-studies/o360/readnext-quikgift.png"
                client="M2P Fintech"
                title="MS Teams — QuikGift"
                desc="A corporate rewards platform that streamlines sending and receiving recognition inside Microsoft Teams."
                href="/work/quikgift"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
      <NavigationDock />
    </main>
  );
}

/* ---------- Shared building blocks ---------- */

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
  const pos = side === "top" ? "top-0 -translate-y-1/1" : "bottom-0 translate-y-1/1";
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

function Header() {
  return (
    <header className="relative sticky top-0 z-30 w-full bg-paper/90 backdrop-blur-md border-b border-line/60">
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px]">
        <div className="absolute inset-y-0 left-8 min-[1098px]:left-[240px] w-px bg-line" />
        <div className="absolute inset-y-0 right-8 min-[1098px]:right-[240px] w-px bg-line" />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-1 left-1/2 -translate-x-1/2 w-full max-w-[1430px]" style={{ bottom: 0 }}>
        <span className="absolute bottom-0 left-8 min-[1098px]:left-[240px] -translate-x-1/2 size-2 bg-[#c9c9c9] z-20" />
        <span className="absolute bottom-0 right-8 min-[1098px]:right-[240px] translate-x-1/2 size-2 bg-[#c9c9c9] z-20" />
      </div>
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex items-center justify-between h-20 px-16 min-[1098px]:px-[272px]">
          <Link href="/" aria-label="Home">
            <Image src="/img/logo.svg" alt="KG" width={44} height={32} priority />
          </Link>
          <SeekingPill />
        </div>
      </div>
    </header>
  );
}

function SeekingPill() {
  return (
    <div className="inline-flex items-center gap-2.5 px-3 py-2 font-mono text-[14px] font-semibold text-white" style={ctaStyle}>
      <span className="size-2 rounded-full bg-[#22c55e]" />
      Seeking Opportunities
    </div>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-line mt-9">
      <GridDots side="top" />
      <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] pt-9 pb-16">
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

/* ---------- Local primitives ---------- */

function GoalRow({
  num,
  title,
  body,
  delay,
}: {
  num: string;
  title: string;
  body: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="grid grid-cols-[56px_1fr] sm:grid-cols-[56px_280px_1fr] gap-4 sm:gap-12 items-center py-6 border-b border-line/60">
        <span
          className="grid place-items-center size-[44px] rounded-full border border-[#080018] font-mono text-[12px] font-semibold text-ink"
        >
          {num}
        </span>
        <h3 className="font-mono text-[18px] leading-[24px] font-medium text-ink col-span-2 sm:col-span-1">
          {title}
        </h3>
        <p className="font-mono text-[14px] leading-[22px] text-muted col-span-2 sm:col-span-1">
          {body}
        </p>
      </div>
    </Reveal>
  );
}

function BeforeAfterSlider({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const [position, setPosition] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const dragging = React.useRef(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  };

  return (
    <div
      ref={containerRef}
      className="mt-8 relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7] bg-white select-none touch-none"
      style={{ aspectRatio: "896/443" }}
      onMouseDown={(e) => {
        dragging.current = true;
        updatePosition(e.clientX);
      }}
      onMouseMove={(e) => {
        if (dragging.current) updatePosition(e.clientX);
      }}
      onMouseUp={() => {
        dragging.current = false;
      }}
      onMouseLeave={() => {
        dragging.current = false;
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        updatePosition(e.touches[0].clientX);
      }}
      onTouchMove={(e) => {
        if (dragging.current) updatePosition(e.touches[0].clientX);
      }}
      onTouchEnd={() => {
        dragging.current = false;
      }}
    >
      {/* Bottom layer: After */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt={`${alt} — after`}
        draggable={false}
        className="absolute inset-0 h-full w-full object-contain pointer-events-none"
      />

      {/* Top layer: Before, clipped by the slider position */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt={`${alt} — before`}
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>

      {/* Divider + drag handle */}
      <div
        className="absolute inset-y-0 w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-11 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.18)] border border-[#e7e7e7] grid place-items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="#080018"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 4 L2 8 L5 12" />
            <path d="M11 4 L14 8 L11 12" />
          </svg>
        </div>
      </div>

    </div>
  );
}

function StatBlock({
  value,
  title,
  body,
}: {
  value: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-[36px] leading-[40px] font-semibold text-ink">
        {value}
      </p>
      <h3 className="font-mono text-[16px] leading-[22px] font-semibold text-ink">
        {title}
      </h3>
      <p className="font-mono text-[14px] leading-[22px] text-muted">{body}</p>
    </div>
  );
}

function ObstacleCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-[12px] border border-[#e7e7e7] bg-white p-6 h-full">
      <h3 className="font-mono text-[16px] leading-[22px] font-semibold text-ink">
        {title}
      </h3>
      <p className="font-mono text-[13px] leading-[20px] text-muted">{body}</p>
    </div>
  );
}

function StakeholderCard({ tag, body }: { tag: string; body: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-[12px] border border-[#e7e7e7] bg-white p-6 h-full">
      <h3 className="font-mono text-[16px] leading-[22px] font-semibold text-ink">
        {tag}
      </h3>
      <p className="font-mono text-[13px] leading-[20px] text-muted">{body}</p>
    </div>
  );
}

/* Two-column section header: caption + heading on LEFT, body on RIGHT */
function SectionHead({
  caption,
  heading,
  body,
  bodyNode,
}: {
  caption: string;
  heading?: string;
  body?: string;
  bodyNode?: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      {/* Left: caption + heading */}
      <div className="flex flex-col gap-3">
        <Reveal>
          <p
            className="font-mono text-[14px] leading-[18px] uppercase font-semibold bg-clip-text text-transparent"
            style={{ backgroundImage: purpleGradient }}
          >
            {caption}
          </p>
        </Reveal>
        {heading && (
          <Reveal delay={1}>
            <h2 className="font-display text-[24px] leading-[28px] font-medium text-ink">
              {heading}
            </h2>
          </Reveal>
        )}
      </div>

      {/* Right: body */}
      {(body || bodyNode) && (
        <Reveal delay={2}>
          <p className="font-mono text-[14px] leading-[22px] text-muted">
            {bodyNode ?? body}
          </p>
        </Reveal>
      )}
    </div>
  );
}

function PersonaCard({
  avatarBg,
  initials,
  name,
  title,
  education,
  location,
  traits,
  bio,
  goals,
  pains,
  challenges,
  motivation,
}: {
  avatarBg: string;
  initials: string;
  name: string;
  title: string;
  education: string;
  location: string;
  traits: string[];
  bio: string;
  goals: string[];
  pains: { tag: string; body: string }[];
  challenges: string[];
  motivation: string[];
}) {
  return (
    <div className="rounded-[12px] border border-[#e7e7e7] bg-white p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10">
        {/* Left: avatar + meta */}
        <div className="flex flex-col items-start gap-4">
          <div
            className="size-[120px] rounded-full grid place-items-center font-display text-[40px] font-medium text-white shadow-inner"
            style={{ background: avatarBg }}
          >
            {initials}
          </div>
          <h3 className="font-display text-[22px] leading-[26px] font-medium text-ink">
            {name}
          </h3>
          <div className="flex flex-col gap-2 w-full font-mono text-[12px] leading-[16px]">
            <div className="flex justify-between">
              <span className="text-[#96969c]">Title</span>
              <span className="text-ink font-medium">{title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#96969c]">Education</span>
              <span className="text-ink font-medium">{education}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#96969c]">Location</span>
              <span className="text-ink font-medium">{location}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {traits.map((t) => (
              <span
                key={t}
                className="rounded-full bg-[#f3f3f3] px-2.5 py-1 font-mono text-[10px] text-muted whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: bio + goals + pains + challenges + motivation */}
        <div className="flex flex-col gap-6">
          <p className="font-mono text-[13px] leading-[20px] text-muted">
            {bio}
          </p>

          <PersonaSection title="Goals" items={goals} dotColor="#22c55e" />

          <div>
            <p className="font-mono text-[12px] leading-[14px] uppercase text-[#96969c]">
              Pain points
            </p>
            <ul className="mt-2 flex flex-col gap-2 font-mono text-[13px] leading-[20px] text-muted">
              {pains.map((p, i) => (
                <li
                  key={i}
                  className="pl-4 relative before:absolute before:left-0 before:top-2 before:size-1 before:rounded-full before:bg-[#ff383c]"
                >
                  <span className="font-semibold text-ink">{p.tag}</span> — {p.body}
                </li>
              ))}
            </ul>
          </div>

          <PersonaSection title="Challenges" items={challenges} dotColor="#fb923c" />
          <PersonaSection title="Motivation" items={motivation} dotColor="#8b2ee3" />
        </div>
      </div>
    </div>
  );
}

function PersonaSection({
  title,
  items,
  dotColor,
}: {
  title: string;
  items: string[];
  dotColor: string;
}) {
  return (
    <div>
      <p className="font-mono text-[12px] leading-[14px] uppercase text-[#96969c]">
        {title}
      </p>
      <ul className="mt-2 flex flex-col gap-2 font-mono text-[13px] leading-[20px] text-muted">
        {items.map((it, i) => (
          <li
            key={i}
            className="pl-4 relative before:absolute before:left-0 before:top-2 before:size-1 before:rounded-full"
            style={{ ["--dot" as never]: dotColor }}
          >
            <span
              className="absolute left-0 top-2 size-1 rounded-full"
              style={{ background: dotColor }}
            />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReadNextCard({
  img,
  client,
  title,
  desc,
  href,
}: {
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
    <Link href={href} className="group block">
      <div
        ref={imgRef}
        className="relative w-full overflow-hidden rounded-[8px] border border-[#e7e7e7] cursor-none"
        style={{ aspectRatio: "430/235" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={img}
          alt={title}
          fill
          sizes="(min-width: 768px) 430px, 100vw"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute z-20"
          style={{ left: cursor.x, top: cursor.y, transform: "translate(-50%, -50%)" }}
        >
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
        <p className="mt-2 font-mono text-[12px] leading-[18px] text-muted">{desc}</p>
      </div>
    </Link>
  );
}
