import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { heroImage, stats, galleryImages } from "@/lib/data";

export const metadata = {
  title: "Sobre — Hotel Victor Plaza Formiga",
  description: "No centro de Formiga, com café da manhã, Wi-Fi e estacionamento inclusos. Quartos para até 5 pessoas.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        image={heroImage}
        eyebrow="Nossa História"
        title="Feito para acolher."
        subtitle="No centro de Formiga, com três tipos de quarto, café da manhã, Wi-Fi e estacionamento inclusos para todos os hóspedes."
        rating="4,9 de 5 — avaliações dos hóspedes"
      />

      <Section>
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="Quem somos" title="Os detalhes que importam." />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-lead text-ink/80">
              <p>
                O Hotel Victor Plaza Formiga nasceu de uma ideia simples: oferecer uma estadia tranquila e completa no centro de Formiga. Cada decisão, dos quartos ao café da manhã, parte da mesma pergunta: isso torna a estadia melhor?
              </p>
              <p>
                Temos três tipos de quarto — standard, luxo e presidencial — todos com banheiro, TV e escrivaninha, com capacidade para até 5 pessoas. Café da manhã, Wi-Fi e estacionamento são inclusos na diária, sem surpresas.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section alt>
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <StatCounter
                  value={s.value}
                  decimals={s.decimals ?? 0}
                  suffix={s.suffix ?? ""}
                  label={s.label}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHeading eyebrow="Onde estamos" title="No centro de Formiga." />
          <Reveal delay={0.1}>
            <p className="mt-6 text-lead text-ink/80 max-w-2xl">
              Estamos na Rua Barão de Piumhi, 111, no centro de Formiga (MG). A poucos passos de restaurantes, lojas e serviços, com fácil acesso a qualquer ponto da cidade. Seja a passeio ou a trabalho, a localização facilita tudo.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section alt>
        <div className="container-x">
          <SectionHeading eyebrow="O hotel" title="Um passeio por dentro." className="mb-12" />
          <div className="columns-2 md:columns-3 gap-4 md:gap-6 [&>img]:mb-4 md:[&>img]:mb-6">
            {galleryImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                className="w-full break-inside-avoid rounded-none"
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}