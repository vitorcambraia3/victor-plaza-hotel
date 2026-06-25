"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  height?: string;
};

export function FullBleedImage({ src, alt, className, height = "h-[60vh]" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div ref={ref} className={`relative w-full ${height} overflow-hidden bg-ink ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute left-0 right-0 -top-[20%] h-[140%] w-full object-cover will-change-transform"
        style={reduce ? undefined : { y }}
        initial={reduce ? undefined : { scale: 1.1, opacity: 0 }}
        whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
