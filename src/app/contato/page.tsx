import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { heroImage, contactInfo, HOTEL_NAME } from "@/lib/data";

export const metadata = {
  title: "Contato — Hotel Victor Plaza Formiga",
  description: "Fale com o Hotel Victor Plaza Formiga pelo WhatsApp, telefone ou Instagram.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        image={heroImage}
        eyebrow="Fale Conosco"
        title="Estamos aqui."
        subtitle="Reservas, dúvidas ou solicitações? Fale com a gente pelo WhatsApp do hotel. Respondemos rapidamente."
      />

      <Section>
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <SectionHeading eyebrow={HOTEL_NAME} title="Venha nos visitar." />
              <Reveal delay={0.1}>
                <p className="mt-6 text-lead text-ink/80 max-w-md">
                  Estamos no centro de Formiga, a poucos passos de restaurantes e serviços. Será um prazer receber você e sua família.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8">
                  <Button href={contactInfo.whatsappHref} external variant="primary" size="lg">
                    Chamar no WhatsApp
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="flex flex-col gap-8">
              <Reveal>
                <div>
                  <p className="eyebrow text-muted-2 mb-2">Endereço</p>
                  <p className="text-lead">{contactInfo.address}</p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <p className="eyebrow text-muted-2 mb-2">Telefone / WhatsApp</p>
                  <a href={contactInfo.phoneHref} className="text-lead link-underline hover:text-muted transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div>
                  <p className="eyebrow text-muted-2 mb-2">Instagram</p>
                  <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-lead link-underline hover:text-muted transition-colors">
                    {contactInfo.instagramHandle}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div>
                  <p className="eyebrow text-muted-2 mb-2">Check-in / Check-out</p>
                  <p className="text-lead">Check-in a partir das {contactInfo.checkIn} · Check-out até as {contactInfo.checkOut}</p>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div>
                  <p className="eyebrow text-muted-2 mb-2">Redes Sociais</p>
                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href={contactInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink hover:border-ink hover:bg-ink hover:text-paper transition-all duration-300"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                    <a
                      href={contactInfo.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink hover:border-ink hover:bg-ink hover:text-paper transition-all duration-300"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0a12 12 0 00-10.37 18l-1.62 5.93L5.5 22.4A12 12 0 1112 0zm0 2a10 10 0 100 20 10 10 0 000-20zm5.13 13.7c-.21.6-1.23 1.15-1.7 1.22-.44.07-.99.1-1.6-.11-.37-.12-.84-.27-1.45-.53-2.55-1.1-4.21-3.67-4.34-3.85-.13-.18-1.03-1.37-1.03-2.61s.65-1.85.88-2.1c.23-.25.5-.31.66-.31.16 0 .33 0 .47.01.15.01.36-.06.55.42.21.6.7 2.07.76 2.22.06.15.1.32.02.5-.08.18-.12.29-.25.45-.12.16-.26.36-.37.48-.12.13-.25.26-.11.51.14.25.61 1.01 1.31 1.64.9.8 1.66 1.05 1.91 1.18.25.12.4.1.55-.06.15-.16.63-.73.8-.98.16-.25.33-.21.55-.13.23.09 1.43.68 1.68.8.25.13.42.19.48.3.06.11.06.61-.15 1.21z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}