"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

type Props = {
  href: string;
  image: string;
  category: string;
  name: string;
};

export function RoomCard({ href, image, category, name }: Props) {
  const reduce = useReducedMotion();
  return (
    <Link href={href} className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        <motion.img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover will-change-transform"
          initial={reduce ? undefined : { scale: 1 }}
          whileHover={reduce ? undefined : { scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="pt-5 flex flex-col gap-1.5">
        <p className="eyebrow">{category}</p>
        <h3 className="text-xl md:text-2xl font-display font-semibold text-ink leading-tight">
          {name}
        </h3>
        <p className="text-sm text-muted">
          Até 5 pessoas · Diária com café da manhã, Wi-Fi e estacionamento
        </p>
      </div>
    </Link>
  );
}