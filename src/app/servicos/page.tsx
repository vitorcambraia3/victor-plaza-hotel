import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { services, heroImage, contactInfo } from "@/lib/data";

export const metadata = {
  title: "Serviços — Hotel Victor Plaza Formiga",
  description: "Café da manhã, Wi-Fi e estacionamento inclusos, além de uma localização central em Formiga.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        image={heroImage}
        eyebrow="Serviços do Hotel"
        title="Tudo o que você precisa."
        subtitle="Café da manhã, Wi-Fi e estacionamento inclusos na diária e uma localização no centro de Formiga. Tudo pensado para tornar sua estadia mais fácil."
      />

      <Section>
        <div className="container-x">
          <div className="flex flex-col gap-16 md:gap-24">
            {services.map((s) => (
              <Reveal key={s.number}>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                  <div>
                    <p className="eyebrow text-muted-2 mb-2">{s.category}</p>
                    <h3>{s.title}</h3>
                  </div>
                  <p className="text-lead text-ink/80 max-w-2xl pt-1">{s.longDescription}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container-x max-w-2xl text-center">
          <h2 className="max-w-3xl mx-auto">Gostaria de reservar agora?</h2>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lead text-ink/80">
              Fale com a gente pelo WhatsApp. Avisamos disponibilidade, tipo de quarto e tiramos qualquer dúvida sobre a sua estadia em Formiga.
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