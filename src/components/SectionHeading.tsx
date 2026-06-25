import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, align = "left", className, light }: Props) {
  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-4", light && "text-paper/80")}>{eyebrow}</p>
      )}
      <h2 className={cn("max-w-3xl text-balance", align === "center" && "mx-auto", light && "text-paper")}>
        {title}
      </h2>
    </Reveal>
  );
}
