import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Hero } from "@/components/Hero";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};
    return {
      title: `${post.title} — Hotel Victor Plaza Formiga`,
      description: post.excerpt,
    };
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== slug);

  return (
    <>
      <Hero image={post.image} eyebrow={post.category} title={post.title} />

      <Section>
        <div className="container-x max-w-2xl">
          <Reveal>
            <div className="flex items-center gap-4 text-sm text-muted mb-10">
              <span className="font-medium text-ink">{post.author}</span>
              <span>&middot;</span>
              <time dateTime={post.dateISO}>{post.date}</time>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lead text-ink/80 mb-10">{post.excerpt}</p>
          </Reveal>
          <div className="flex flex-col gap-10">
            {post.sections.map((section, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div>
                  <h2 className="text-2xl md:text-3xl mb-3">{section.heading}</h2>
                  <p className="text-lead text-ink/80">{section.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container-x">
          <SectionHeading eyebrow="Continue lendo" title="Mais dicas do hotel." className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <Link href={`/blog/${p.slug}`} className="group flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-5 flex flex-col gap-2">
                    <p className="eyebrow">{p.category}</p>
                    <h3 className="text-xl font-display font-semibold leading-tight">{p.title}</h3>
                    <p className="text-sm text-muted">{p.excerpt}</p>
                    <p className="text-xs text-muted-2 mt-1">{p.date}</p>
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