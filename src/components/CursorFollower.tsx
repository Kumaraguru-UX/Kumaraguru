"use client";

import React from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";

/**
 * Floating cursor follower.
 * - Follows the mouse as a small dot.
 * - When hovering an element with `data-cursor="view"`, expands into a
 *   dark pill with "View Case Study".
 * - Hidden on touch / coarse-pointer devices.
 */
export default function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  const [visible, setVisible] = React.useState(false);
  const [label, setLabel] = React.useState<string | null>(null);
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    // Disable on touch devices
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  React.useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor]"
      );
      if (target) {
        const kind = target.getAttribute("data-cursor");
        if (kind === "view") setLabel("View Case Study");
        else setLabel(null);
      } else {
        setLabel(null);
      }
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const isPill = !!label;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60]"
      style={{
        x: springX,
        y: springY,
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-ink text-white font-mono font-medium"
        animate={{
          width: isPill ? 140 : 10,
          height: isPill ? 36 : 10,
          marginLeft: isPill ? -70 : -5,
          marginTop: isPill ? -18 : -5,
          fontSize: isPill ? 11 : 0,
          paddingLeft: isPill ? 14 : 0,
          paddingRight: isPill ? 14 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {isPill && (
            <motion.span
              key="label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="whitespace-nowrap tracking-wide"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
