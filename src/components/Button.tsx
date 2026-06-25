import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost-white" | "ghost-black";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out whitespace-nowrap cursor-pointer select-none";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-ink/90",
  secondary: "bg-paper text-ink hover:bg-paper/90",
  "ghost-white": "border border-white/40 text-paper hover:bg-white/10 hover:border-white/60",
  "ghost-black": "border border-ink/20 text-ink hover:bg-ink/5 hover:border-ink/40",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-5 text-[13px]",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-sm",
};

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external,
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
