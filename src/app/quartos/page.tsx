import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { RoomCard } from "@/components/RoomCard";
import { heroImage, rooms } from "@/lib/data";

export const metadata = {
  title: "Quartos — Hotel Victor Plaza Formiga",
  description: "Três tipos de quarto, do standard ao presidencial. Todos com café da manhã, Wi-Fi e estacionamento inclusos.",
};

export default function RoomsPage() {
  return (
    <>
      <Hero
        image={heroImage}
        eyebrow="Quartos"
        title="Encontre seu quarto."
        subtitle="Três tipos de quarto, do standard ao presidencial. Todos com até 5 pessoas, café da manhã, Wi-Fi e estacionamento inclusos."
      />
      <Section>
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {rooms.map((room, i) => (
              <Reveal key={room.slug} delay={(i % 3) * 0.1}>
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
    </>
  );
}