import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="bg-ink text-paper">
      <div className="container-x min-h-svh flex flex-col items-start justify-center pt-14 pb-20">
        <p className="eyebrow text-paper/80 mb-5">Erro 404</p>
        <h1 className="text-paper max-w-xl">Página não encontrada.</h1>
        <p className="mt-6 max-w-md text-lead text-paper/85">
          A página que você procura não existe ou foi movida. Que tal voltar
          para o início ou conhecer nossos quartos?
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" variant="secondary" size="lg">
            Voltar ao Início
          </Button>
          <Button href="/quartos" variant="ghost-white" size="lg">
            Ver Quartos
          </Button>
        </div>
      </div>
    </section>
  );
}
