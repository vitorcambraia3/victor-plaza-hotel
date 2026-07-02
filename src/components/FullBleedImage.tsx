"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  height?: string;
};

export function FullBleedImage({ src, alt, className, height = "h-[60vh]" }: Props) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative w-full ${height} overflow-hidden bg-ink ${className ?? ""}`}>
      <div className="absolute left-0 right-0 -top-[20%] h-[140%] w-full will-change-transform fullbleed-parallax-wrapper">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover will-change-transform"
          initial={reduce ? undefined : { scale: 1.1, opacity: 0 }}
          whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
