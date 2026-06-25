"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";

type Props = {
  image: string;
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  rating?: string;
};

export function Hero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
  rating,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-svh min-h-150 w-full overflow-hidden bg-ink"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={reduce ? undefined : { y, scale }}
      >
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-ink/35 to-ink/90 md:from-ink/20 md:via-ink/10 md:to-ink/80" />

      <motion.div
        className="absolute inset-0 flex flex-col justify-end will-change-transform"
        style={reduce ? undefined : { y: textY, opacity }}
      >
        <div className="container-x pb-16 md:pb-24">
          {eyebrow && (
            <motion.p
              className="eyebrow text-paper/80 mb-5 text-[0.65rem]"
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            className="text-paper max-w-sm text-[clamp(2.25rem,1rem+2.5vw,3.25rem)] leading-[1.05]"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="mt-6 max-w-sm text-lead text-paper/85 text-sm"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {subtitle}
            </motion.p>
          )}
          {rating && (
            <motion.p
              className="mt-5 flex items-center gap-2 text-sm text-paper/70"
              initial={reduce ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="currentColor"
                className="text-paper"
              >
                <path d="M7 0l1.8 4.6L14 5.2l-3.8 3.3L11.5 14 7 11.2 2.5 14l1.3-5.5L0 5.2l5.2-.6L7 0z" />
              </svg>
              {rating}
            </motion.p>
          )}
          {children && (
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
