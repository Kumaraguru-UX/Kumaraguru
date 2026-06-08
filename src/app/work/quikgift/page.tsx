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

export default function QuikGiftCaseStudy() {
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
              Recognition that lives where work already happens.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-3 font-mono text-[24px] leading-[32px] sm:text-[28px] sm:leading-[38px] font-semibold text-ink max-w-[896px]">
              QuikGift is a corporate rewards platform designed to streamline
              and simplify the process of sending and receiving rewards among
              colleagues within an organization.
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
                src="/img/case-studies/quikgift/hero.png"
                alt="QuikGift platform hero"
                fill
                sizes="(min-width: 1098px) 896px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="relative">
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] pb-12">
          <Reveal>
            <p className="font-mono text-[14px] leading-[22px] text-muted max-w-[896px]">
              It enhances employee engagement by fostering a culture of
              recognition and appreciation — making it easy for team members to
              acknowledge each other&apos;s contributions in real-time.
              Integrated seamlessly with Microsoft Teams, QuikGift lets users
              send rewards directly within their everyday communication tools,
              ensuring a smooth, intuitive experience that aligns with existing
              workflows.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Business Goals */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <SectionHead caption="Business Goals" />

          <div className="mt-8 flex flex-col gap-0">
            <GoalRow
              num="01"
              title="Workplace engagement catalyst"
              body="A platform that fosters a culture of appreciation, empowering colleagues to seamlessly recognize and reward each other — lifting overall employee engagement."
              delay={0}
            />
            <GoalRow
              num="02"
              title="Integrated recognition hub"
              body="A fully embedded solution within Microsoft Teams that simplifies rewarding peers, offering a frictionless experience without leaving the daily workflow."
              delay={1}
            />
            <GoalRow
              num="03"
              title="Holistic rewards ecosystem"
              body="A comprehensive platform that not only facilitates peer-to-peer recognition but also provides insightful analytics and reporting for HR and management."
              delay={2}
            />
            <GoalRow
              num="04"
              title="Recognition experience expert"
              body="A product that deeply understands workplace dynamics, offering tailored reward options and personalized features that align with individual and team values."
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Design Process — User-Centered Design */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <SectionHead
            caption="Design Process"
            heading="User-Centered Design."
            body="The UCD method places the needs, behaviors, and pain points of users at the forefront of the design process. By involving users at every stage — from research to testing — UCD ensures the product is intuitive, efficient, and aligned with real-world workflows, providing unmatched usability and business value."
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

      {/* Obstacles */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <SectionHead
            caption="Understanding Business Needs and challenges"
            heading="Obstacles to solve for."
            body="Three constraints shaped every decision — getting any one wrong would undermine trust in the whole system."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <ObstacleCard
                title="Cultural alignment"
                body="The existing workplace culture may not prioritize recognition, making it difficult to shift attitudes toward frequent peer-to-peer appreciation — exactly what QuikGift aims to foster."
              />
            </Reveal>
            <Reveal delay={1}>
              <ObstacleCard
                title="Compliance & security"
                body="Addressing data privacy and compliance around employee information and rewards distribution is critical to maintaining trust and adhering to regulations."
              />
            </Reveal>
            <Reveal delay={2}>
              <ObstacleCard
                title="Technical complexity"
                body="A secure, reliable payment-processing system demands real expertise — compatibility with existing software, multiple payment methods, and integration with banking systems."
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
            heading="Three stakeholders, three jobs to be done."
            body="Each group plays a critical role in QuikGift's functionality and success and each needed a distinctly shaped experience."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <StakeholderCard
                tag="Employees / End users"
                body="Primary users who send and receive rewards. They benefit from the platform's features for recognizing colleagues and can customize their reward choices."
              />
            </Reveal>
            <Reveal delay={1}>
              <StakeholderCard
                tag="Managers / Leaders"
                body="Responsible for recognizing team members' contributions. They use the platform to send rewards, track team engagement, and foster a positive work environment."
              />
            </Reveal>
            <Reveal delay={2}>
              <StakeholderCard
                tag="HR Managers"
                body="Oversee employee engagement initiatives and analyze recognition data. They manage the overall rewards program and ensure alignment with organizational goals."
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
                avatarBg="radial-gradient(circle at 30% 30%, #d02127 0%, #6b0a0e 100%)"
                initials="RP"
                name="Ram Prasath"
                title="Lead HR"
                education="Manager"
                location="Bangalore, India"
                traits={["Passionate", "Independent", "Punctual", "Witty"]}
                bio="Ram manages employee engagement programs, ensuring that employee satisfaction and retention align with business objectives."
                goals={[
                  "Implement an effective rewards system that fosters a positive work culture.",
                  "Measure the success of employee engagement initiatives.",
                  "Ensure alignment with company policies.",
                ]}
                pains={[
                  { tag: "Data overload", body: "managing vast amounts of recognition data with no clear way to analyze trends." },
                  { tag: "Difficulty measuring", body: "unable to easily quantify the ROI of recognition programs." },
                  { tag: "Policy constraints", body: "ensuring the program complies with company policies can be challenging." },
                ]}
                challenges={[
                  "Needs to effectively manage and track employee recognition programs.",
                  "Struggles to measure the impact of recognition on employee satisfaction.",
                ]}
                motivation={[
                  "Aims to create a positive, engaging workplace for all employees.",
                  "Seeks to provide meaningful recognition aligned with company values.",
                ]}
              />
            </Reveal>
            <Reveal delay={1}>
              <PersonaCard
                avatarBg="radial-gradient(circle at 30% 30%, #2a2a2a 0%, #000 100%)"
                initials="JM"
                name="Jenita Mary"
                title="Manager"
                education="Manager"
                location="Chennai, India"
                traits={["Passionate", "Empathetic", "Curious", "Adventurous"]}
                bio="Jenita has been with her company five years and manages a team of ten. She values collaboration and seeks to foster a positive work environment where her team feels appreciated and motivated."
                goals={[
                  "Recognize team members' achievements regularly.",
                  "Improve team morale and cohesion.",
                  "Track the effectiveness of recognition efforts.",
                ]}
                pains={[
                  { tag: "Time constraints", body: "finds it hard to dedicate time to personalized recognition." },
                  { tag: "Lack of feedback", body: "unsure how recognition impacts morale without analytics." },
                  { tag: "Engagement", body: "struggles to keep the recognition process consistent across the team." },
                ]}
                challenges={[
                  "Struggles to find a simple way to acknowledge team members amid busy schedules.",
                  "Limited tools for tracking recognition and its impact on performance.",
                ]}
                motivation={[
                  "Wants to create a culture of appreciation and feedback.",
                  "Believes recognition leads to higher productivity and job satisfaction.",
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
            heading="Learning from the field."
            body="Benchmarking Peer Fives, Viva Insights, and Starbucks revealed exactly where a Teams-native gifting hub could win."
          />

          <Reveal delay={3}>
            <div className="mt-10 overflow-hidden">
              <table className="w-full font-mono text-[14px]">
                <thead>
                  <tr className="border-b border-line">
                    <th className="text-left py-4 pr-6 font-mono text-[14px] text-ink font-semibold">Feature</th>
                    <th className="text-left py-4 px-6 font-mono text-[14px] text-ink font-semibold">Peer Fives</th>
                    <th className="text-left py-4 px-6 font-mono text-[14px] text-ink font-semibold">Viva Insights</th>
                    <th className="text-left py-4 px-6 font-mono text-[14px] text-ink font-semibold">Starbucks</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Social recognition", "Yes", "No", "No"],
                    ["Productivity insights", "No", "Yes", "No"],
                    ["Gamification", "Yes", "No", "Yes"],
                    ["Data-driven recommendations", "No", "Yes", "Yes"],
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

      {/* Visual Design — wireframes + final UI */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <SectionHead
            caption="Visual design"
            heading="From wireframe to product."
            bodyNode={
              <>
                The visual language stays calm and confident — a focused
                dashboard for employee and managers, and a friendly personal
                app inside Teams for everyday gifting. Below: low-fidelity
                exploration, then the final sample screens.
                <br />
                <a
                  href="https://www.figma.com/design/YWjnp5IAwkFNIxTEnEJWHH/M2P-Gift---Teams--1-?node-id=687-66432&t=SeiY7JVIYS1Sxmuh-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-ink font-semibold underline underline-offset-4"
                >
                  View Figma →
                </a>
              </>
            }
          />

          {/* Wireframes (low-fi) */}
          <Reveal delay={3}>
            <div
              className="mt-8 relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7]"
              style={{ aspectRatio: "896/420" }}
            >
              <Image
                src="/img/case-studies/quikgift/wireframes.png"
                alt="QuikGift low-fidelity wireframe exploration"
                fill
                sizes="(min-width: 1098px) 896px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Final visual design */}
          <Reveal delay={4}>
            <div
              className="mt-6 relative w-full overflow-hidden rounded-[12px] border border-[#e7e7e7]"
              style={{ aspectRatio: "896/420" }}
            >
              <Image
                src="/img/case-studies/quikgift/visual-design.png"
                alt="QuikGift final sample screens — dashboard, landing page, sending gift"
                fill
                sizes="(min-width: 1098px) 896px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact Created */}
      <section className="relative border-t border-line">
        <GridDots side="top" />
        <div className="mx-auto w-full max-w-[1440px] px-16 min-[1098px]:px-[272px] py-12">
          <Reveal>
            <div className="rounded-[8px] border border-[#080018] bg-white p-6">
              <h3 className="font-display text-[18px] leading-[24px] font-medium text-ink">
                Impact Created
              </h3>
              <ul className="mt-4 flex flex-col gap-2 font-mono text-[14px] leading-[20px] text-muted">
                <li>
                  <span className="font-semibold text-ink">High Adoption and Engagement —</span>{" "}
                  Employees within client organizations took to the platform
                  easily on use, leading to frequent and consistent recognition
                  behaviors.
                </li>
                <li>
                  <span className="font-semibold text-ink">Frictionless Recognition —</span>{" "}
                  Users were able to navigate the platform&apos;s recognition
                  intuitively, sending and creating rewards without breaking
                  workflow or relying on weak support.
                </li>
                <li>
                  <span className="font-semibold text-ink">Seamless Workflow Integration —</span>{" "}
                  The platform was plug-and-play and fluidly transitioned with
                  their existing recognition tools that did the same as their
                  gifting and rewards.
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
                img="/img/case-studies/quikgift/readnext-payrolls.png"
                client="Euroland"
                title="Design System — White Label Product"
                desc="My First Design System — A scalable multi-brand component library built from zero to one."
                href="/work/euroland-design-system"
              />
            </Reveal>
            <Reveal delay={1}>
              <ReadNextCard
                img="/img/case-studies/quikgift/readnext-design-system.png"
                client="M2P Fintech"
                title="WPS — Let us handle your payrolls"
                desc="iPay will take care of your company payrolls and money flow. Let us disburse the salaries of your employee."
                href="#"
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
