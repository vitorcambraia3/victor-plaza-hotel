import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Accordion } from "@/components/Accordion";
import { SectionHeading } from "@/components/SectionHeading";
import { rooms, roomFaqs, contactInfo, whatsappLink } from "@/lib/data";

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const room = rooms.find((r) => r.slug === slug);
    if (!room) return {};
    return {
      title: `${room.name} — Hotel Victor Plaza Formiga`,
      description: room.shortDescription,
    };
  });
}

export default async function RoomDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) notFound();

  const otherRooms = rooms.filter((r) => r.slug !== room.slug);

  return (
    <>
      <Hero image={room.image} eyebrow={room.category} title={room.name} subtitle={room.shortDescription} />

      <Section>
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
            <div className="flex flex-col gap-16">
              <div className="flex flex-wrap gap-x-12 gap-y-6 border-y border-line py-8">
                <div>
                  <p className="eyebrow text-muted-2 mb-1">Capacidade</p>
                  <p className="font-display text-2xl font-semibold">Até {room.guests} pessoas</p>
                </div>
                <div>
                  <p className="eyebrow text-muted-2 mb-1">Tamanho</p>
                  <p className="font-display text-2xl font-semibold">{room.size} m²</p>
                </div>
                <div>
                  <p className="eyebrow text-muted-2 mb-1">Cama</p>
                  <p className="font-display text-2xl font-semibold">{room.bed}</p>
                </div>
              </div>

              <div>
                <SectionHeading eyebrow="O que está incluso" title="Comodidades do quarto." />
                <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {room.amenities.map((a) => (
                    <Reveal key={a}>
                      <li className="flex items-center gap-3 py-2 border-b border-line">
                        <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                        <span className="text-sm">{a}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>

              <div>
                <SectionHeading eyebrow="Sobre este quarto" title="Os detalhes que importam." />
                <Reveal delay={0.1}>
                  <p className="mt-6 text-lead text-ink/80 max-w-xl">{room.longDescription}</p>
                </Reveal>
              </div>

              <div>
                <SectionHeading eyebrow="Perguntas frequentes" title="Antes de chegar." className="mb-8" />
                <Accordion items={roomFaqs} />
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <Reveal>
                <div className="border border-line rounded-2xl p-8 flex flex-col gap-5 bg-paper">
                  <div className="space-y-1">
                    <p className="eyebrow text-muted-2">Incluso na diária</p>
                    <p className="text-sm text-ink">Café da manhã · Wi-Fi · Estacionamento</p>
                  </div>
                  <div className="space-y-1">
                    <p className="eyebrow text-muted-2">Check-in / Check-out</p>
                    <p className="text-sm text-ink">{contactInfo.checkIn} / {contactInfo.checkOut}</p>
                  </div>
                  <a
                    href={whatsappLink(room.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-ink text-paper text-sm font-medium transition-all hover:bg-ink/90"
                  >
                    Reservar no WhatsApp
                  </a>
                  <p className="text-xs text-muted-2 text-center">
                    Resposta rápida pelo WhatsApp do hotel.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container-x">
          <SectionHeading eyebrow="Explore mais" title="Outros quartos para você." className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
            {otherRooms.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.1}>
                <Link href={`/quartos/${r.slug}`} className="group flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                    <img
                      src={r.image}
                      alt={r.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-5 flex flex-col gap-1.5">
                    <p className="eyebrow">{r.category}</p>
                    <h3 className="text-xl font-display font-semibold">{r.name}</h3>
                    <p className="text-sm text-muted">
                      Até {r.guests} pessoas · Café da manhã, Wi-Fi e estacionamento
                    </p>
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