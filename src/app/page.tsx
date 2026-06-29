import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { RoomCard } from "@/components/RoomCard";
import { FullBleedImage } from "@/components/FullBleedImage";
import {
  heroImage,
  servicesFeatureImage,
  storyImage,
  diningFeatureImage,
  rooms,
  services,
  testimonials,
  blogPosts,
  contactInfo,
} from "@/lib/data";

export default function HomePage() {
  const featuredRooms = rooms.slice(0, 3);

  return (
    <>
      <Hero
        image={heroImage}
        imageAlt="Fachada do Hotel Victor Plaza Formiga"
        eyebrow="Bem-vindo ao Hotel Victor Plaza Formiga"
        title={"O lugar ideal para você ficar."}
        subtitle="Quartos no centro de Formiga, com café da manhã, Wi-Fi e estacionamento inclusos. Uma equipe que antecipa o que você precisa."
        rating="4,9 de 5 — avaliações dos hóspedes"
      >
        <Button href="/quartos" variant="secondary" size="lg">
          Ver Quartos
        </Button>
        <Button
          href={contactInfo.whatsappHref}
          external
          variant="ghost-white"
          size="lg"
        >
          Falar no WhatsApp
        </Button>
      </Hero>

      <Section alt id="rooms">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <SectionHeading eyebrow="Quartos" title="Encontre seu quarto." />
            <Reveal delay={0.1}>
              <Button href="/quartos" variant="ghost-black" size="md">
                Ver Todos os Quartos
              </Button>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {featuredRooms.map((room, i) => (
              <Reveal key={room.slug} delay={i * 0.1}>
                <RoomCard
                  href={`/quartos/${room.slug}`}
                  image={room.image}
                  category={room.category}
                  name={room.name}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <FullBleedImage
          src={servicesFeatureImage}
          alt="Serviços do hotel"
          height="h-[55vh]"
        />
        <div className="container-x mt-20 md:mt-28">
          <SectionHeading
            eyebrow="Serviços do Hotel"
            title="Tudo o que você precisa."
            className="mb-12 md:mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {services.map((service, i) => (
              <Reveal key={service.number} delay={(i % 2) * 0.1}>
                <div className="flex gap-6">
                  <span className="font-display text-sm font-semibold text-muted-2 pt-1">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="mb-3">{service.title}</h3>
                    <p className="text-sm text-muted leading-relaxed max-w-md">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal>
              <div className="aspect-3/4 overflow-hidden bg-sand">
                <img
                  src={storyImage}
                  alt="Nossa história"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Nossa História"
                title="Um hotel feito para acolher."
              />
              <Reveal delay={0.1}>
                <p className="mt-6 text-lead text-ink/80 max-w-md">
                  No coração de Formiga, o Hotel Victor Plaza nasceu para
                  oferecer uma estadia tranquila e completa. Café da manhã,
                  Wi-Fi e estacionamento inclusos, três tipos de quarto para
                  todos os perfis e uma equipe que cuida dos detalhes.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8">
                  <Button href="/sobre" variant="primary" size="lg">
                    Conheça o Hotel
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="Avaliações"
            title="O que nossos hóspedes dizem."
            className="mb-12 md:mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="flex flex-col gap-5 p-8 border border-line rounded-2xl bg-paper h-full">
                  <div className="flex gap-0.5 text-ink">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg
                        key={s}
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="currentColor"
                      >
                        <path d="M7 0l1.8 4.6L14 5.2l-3.8 3.3L11.5 14 7 11.2 2.5 14l1.3-5.5L0 5.2l5.2-.6L7 0z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lead text-ink/85 leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-line">
                    <p className="text-sm font-medium text-ink">{t.name}</p>
                    <p className="text-xs text-muted mt-0.5">{t.location}</p>
                    <p className="text-xs text-muted-2 mt-2">
                      Hospedou-se no {t.room}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <FullBleedImage
          src={diningFeatureImage}
          alt="Café da manhã"
          height="h-[55vh]"
        />
        <div className="container-x mt-20 md:mt-28 max-w-3xl">
          <SectionHeading eyebrow="Café da Manhã" title="Comece bem o dia." />
          <Reveal delay={0.1}>
            <p className="mt-6 text-lead text-ink/80">
              Café da manhã completo, incluso na diária. Pães frescos, frutas da
              estação, sucos e opções quentes, servidos todos os dias com
              tranquilidade no centro de Formiga.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-sm text-muted max-w-xl">
              Seja para começar o dia devagar com café e pão fresquinho, ou para
              agilizar antes de um compromisso, o café da manhã do Hotel Victor
              Plaza está pronto quando você precisa.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8">
              <Button href="/cafe-da-manha" variant="primary" size="lg">
                Saiba Mais
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <SectionHeading eyebrow="Dicas" title="Do Hotel Victor Plaza." />
            <Reveal delay={0.1}>
              <Button
                href="/blog/guia-do-centro-de-formiga"
                variant="ghost-black"
                size="md"
              >
                Ler Mais
              </Button>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col">
                  <div className="relative aspect-4/3 overflow-hidden bg-sand">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
