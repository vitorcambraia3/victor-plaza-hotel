import Link from "next/link";
import Image from "next/image";
import { navLinks, contactInfo, HOTEL_NAME, legalPages } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-paper border-t border-line">
      <div className="container-x py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-display text-lg font-semibold text-ink"
            >
              {HOTEL_NAME}
            </Link>
            <p className="mt-3 text-sm text-muted max-w-xs">
              No centro de Formiga. Café da manhã, Wi-Fi e estacionamento
              inclusos.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink hover:border-ink hover:bg-ink hover:text-paper transition-all duration-300"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink hover:border-ink hover:bg-ink hover:text-paper transition-all duration-300"
              >
                <Image
                  src="/images/whatsapp-logo.png"
                  alt="WhatsApp"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink hover:text-muted transition-colors link-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-ink hover:text-muted transition-colors link-underline"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legalPages.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/pagina-legal/${p.slug}`}
                    className="text-sm text-ink hover:text-muted transition-colors link-underline"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Contato</h4>
            <ul className="space-y-2.5 text-sm text-ink">
              <li>{contactInfo.address}</li>
              <li>
                <a
                  href={contactInfo.phoneHref}
                  className="hover:text-muted transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-muted transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-muted transition-colors"
                >
                  {contactInfo.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {HOTEL_NAME}. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted">
            Rua Barão de Piumhi, 111 — Centro, Formiga — MG
          </p>
        </div>
      </div>
    </footer>
  );
}
