import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
};

export function Section({ children, className, alt, id }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28 lg:py-32",
        alt ? "bg-sand" : "bg-paper",
        className
      )}
    >
      {children}
    </section>
  );
}
