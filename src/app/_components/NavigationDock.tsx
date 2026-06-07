"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  House,
  ArrowUp10,
  PencilRuler,
  Puzzle,
  BookUser,
  Globe,
  Download,
} from "lucide-react";

function NavTooltip({ label }: { label: string }) {
  return (
    <div
      className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1
        opacity-0 translate-y-2 scale-95
        group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
        transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
    >
      <span className="whitespace-nowrap rounded-full bg-[#1a1a1a] px-3 py-1 font-mono text-[10px] font-medium text-white/90 shadow-sm">
        {label}
      </span>
      <span className="w-px h-2 bg-[#1a1a1a]/30" />
    </div>
  );
}

export default function NavigationDock() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isWorkInner = pathname.startsWith("/work");
  const hrefPrefix = isHome ? "" : "/"; // on inner pages, use absolute "/#section"

  const [activeSection, setActiveSection] = React.useState(
    isWorkInner ? "work" : "hero"
  );
  const [showSocialDropdown, setShowSocialDropdown] = React.useState(false);

  const navItems = [
    { id: "hero", label: "Home", href: `${hrefPrefix}#hero`, Icon: House },
    { id: "brought", label: "Impact", href: `${hrefPrefix}#brought`, Icon: ArrowUp10 },
    { id: "expertise", label: "Process", href: `${hrefPrefix}#expertise`, Icon: PencilRuler },
    { id: "work", label: "Work", href: `${hrefPrefix}#work`, Icon: Puzzle },
    { id: "contact", label: "Contact", href: `${hrefPrefix}#contact`, Icon: BookUser },
  ];

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kumara-guru-05596b103/" },
    { label: "Behance", href: "https://www.behance.net/kumaraguru1" },
    { label: "Dribbble", href: "https://dribbble.com/Kumara_14" },
  ];

  React.useEffect(() => {
    if (!isHome) return; // scroll-spy only meaningful on home
    const handleScroll = () => {
      const sections = ["contact", "work", "expertise", "brought", "hero"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav aria-label="Primary" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex items-center gap-1 rounded-[64px] border border-[#EDEDED] bg-white/20 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.04)] px-3 py-2.5">
        {navItems.map(({ id, label, href, Icon }) => {
          const isActive =
            (isHome && activeSection === id) ||
            (isWorkInner && id === "work");
          return (
            <div key={id} className="group relative flex items-center justify-center">
              <NavTooltip label={label} />
              <a
                href={href}
                aria-label={label}
                className={`relative grid place-items-center rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  isActive
                    ? "h-12 w-12 text-white"
                    : "h-10 w-10 text-ink/50 group-hover:h-[52px] group-hover:w-[52px] group-hover:text-ink group-hover:bg-white group-hover:shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
                }`}
                style={
                  isActive
                    ? {
                        backgroundImage: "url(/img/nav-active.svg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : undefined
                }
              >
                <Icon
                  strokeWidth={1.5}
                  className={`relative z-10 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    isActive ? "h-5 w-5" : "h-5 w-5 group-hover:h-[22px] group-hover:w-[22px]"
                  }`}
                />
              </a>
            </div>
          );
        })}

        {/* Social globe */}
        <div className="group relative flex items-center justify-center">
          <NavTooltip label="Social" />
          <button
            onClick={() => setShowSocialDropdown(!showSocialDropdown)}
            aria-label="Social links"
            className="relative grid place-items-center h-10 w-10 rounded-full text-ink/50 group-hover:h-[52px] group-hover:w-[52px] group-hover:text-ink group-hover:bg-white group-hover:shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          >
            <Globe
              strokeWidth={1.5}
              className="h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:h-[22px] group-hover:w-[22px]"
            />
          </button>
          {showSocialDropdown && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 rounded-2xl border border-[#EDEDED] bg-white/90 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-2 flex flex-col gap-1 whitespace-nowrap z-50">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-[13px] font-mono text-ink hover:bg-ink/5 rounded-lg transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Download CV */}
        <div className="group relative flex items-center justify-center">
          <NavTooltip label="Resume" />
          <a
            href="/CV.pdf"
            download="kumara-guru-cv.pdf"
            aria-label="Download CV"
            className="relative grid place-items-center h-10 w-10 rounded-full text-ink/50 group-hover:h-[52px] group-hover:w-[52px] group-hover:text-ink group-hover:bg-white group-hover:shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          >
            <Download
              strokeWidth={1.5}
              className="h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:h-[22px] group-hover:w-[22px]"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
