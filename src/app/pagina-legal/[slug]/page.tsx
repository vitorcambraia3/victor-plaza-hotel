import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/Hero";
import { legalPages, heroImage } from "@/lib/data";

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const page = legalPages.find((p) => p.slug === slug);
    if (!page) return {};
    return {
      title: `${page.title} — Hotel Victor Plaza Formiga`,
      description: page.title,
    };
  });
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = legalPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <>
      <Hero image={heroImage} eyebrow="Informações legais" title={page.title} />
      <Section>
        <div className="container-x max-w-2xl">
          <Reveal>
            <p className="text-sm text-muted mb-10">Última atualização: {page.lastUpdated}</p>
          </Reveal>
          <div className="flex flex-col gap-8">
            {page.sections.map((s, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div>
                  <h2 className="text-xl md:text-2xl mb-3">{s.heading}</h2>
                  <p className="text-lead text-ink/80">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}