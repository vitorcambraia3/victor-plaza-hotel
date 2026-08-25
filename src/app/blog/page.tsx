import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { heroImage, blogPosts } from "@/lib/data";

export const metadata = {
  title: "Blog — Hotel Victor Plaza Formiga",
  description:
    "Dicas e guias do Hotel Victor Plaza Formiga: o que fazer no centro de Formiga, nosso café da manhã e como aproveitar a estadia.",
};

export default function BlogPage() {
  return (
    <>
      <Hero
        image={heroImage}
        eyebrow="Blog"
        title="Dicas do Hotel Victor Plaza."
        subtitle="Guias e dicas para aproveitar Formiga e a sua estadia no centro da cidade."
      />

      <Section>
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col">
                  <div className="relative aspect-4/3 overflow-hidden bg-sand">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={100}
                      loading="lazy"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-5 flex flex-col gap-2">
                    <p className="eyebrow">{post.category}</p>
                    <h3 className="text-xl font-display font-semibold leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted">{post.excerpt}</p>
                    <p className="text-xs text-muted-2 mt-1">{post.date}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
