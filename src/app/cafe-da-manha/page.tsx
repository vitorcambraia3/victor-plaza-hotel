import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { diningFeatureImage, menu, diningHours, contactInfo } from "@/lib/data";

export const metadata = {
  title: "Café da Manhã — Hotel Victor Plaza Formiga",
  description: "Café da manhã completo, incluso na diária, servido todos os dias no centro de Formiga.",
};

export default function DiningPage() {
  return (
    <>
      <Hero
        image={diningFeatureImage}
        eyebrow="Café da Manhã"
        title="Comece bem o dia."
        subtitle="Café da manhã completo, incluso na diária. Pães frescos, frutas da estação, sucos e opções quentes, todos os dias."
      />

      <Section>
        <div className="container-x">
          <SectionHeading eyebrow="Horário" title="Quando servimos." className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diningHours.map((h, i) => (
              <Reveal key={h.label} delay={i * 0.08}>
                <div className="border border-line rounded-2xl p-6 flex flex-col gap-2">
                  <p className="eyebrow text-muted-2">{h.label}</p>
                  <p className="font-display text-xl font-semibold">{h.start}</p>
                  <p className="text-sm text-muted">até {h.end}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container-x">
          <SectionHeading eyebrow="O que servimos" title="Nosso café da manhã." className="mb-12" />
          <div className="flex flex-col gap-10 md:gap-12">
            {menu.map((item) => (
              <Reveal key={item.name}>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 items-start pb-10 border-b border-line">
                  <p className="eyebrow text-muted-2 pt-1">{item.category}</p>
                  <div>
                    <h4 className="mb-2">{item.name}</h4>
                    <p className="text-sm text-muted max-w-xl">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <SectionHeading eyebrow="Incluso na diária" title="Sem custo extra." />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lead text-ink/80 max-w-md">
                O café da manhã faz parte da diária de todos os hóspedes do Hotel Victor Plaza Formiga. Servido todos os dias, sem custo adicional, no horário em que você preferir começar.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden bg-sand">
              <img
                src={diningFeatureImage}
                alt="Café da manhã"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section alt>
        <div className="container-x max-w-2xl text-center">
          <SectionHeading eyebrow="Reservas" title="Venha tomar café com a gente." align="center" />
          <Reveal delay={0.1}>
            <p className="mt-6 text-lead text-ink/80">
              Entre em contato pelo WhatsApp para verificar disponibilidade e reservar o seu quarto. Café da manhã incluso para todos os hóspedes.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex justify-center">
              <Button href={contactInfo.whatsappHref} external variant="primary" size="lg">
                Falar no WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}