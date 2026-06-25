import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { heroImage, galleryImages } from "@/lib/data";

export const metadata = {
  title: "Galeria — Hotel Victor Plaza Formiga",
  description: "Quartos, espaços e detalhes do Hotel Victor Plaza Formiga, no centro de Formiga.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        image={heroImage}
        eyebrow="Hotel Victor Plaza Formiga"
        title="Um passeio por dentro."
        subtitle="Quartos, espaços e detalhes que vale a pena ver antes de chegar."
        rating="4,9 de 5 — avaliações dos hóspedes"
      />

      <Section>
        <div className="container-x">
          <div className="columns-2 md:columns-3 gap-4 md:gap-6 [&>*]:mb-4 md:[&>*]:mb-6">
            {galleryImages.map((src, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full break-inside-avoid"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}