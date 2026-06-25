export const IMG = "/images";

export const HOTEL_NAME = "Hotel Victor Plaza Formiga";

export const WHATSAPP_NUMBER = "553733214152";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Quartos", href: "/quartos" },
  { label: "Serviços", href: "/servicos" },
  { label: "Café da Manhã", href: "/cafe-da-manha" },
  { label: "Sobre", href: "/sobre" },
  { label: "Galeria", href: "/galeria" },
];

export const contactInfo = {
  address: "Rua Barão de Piumhi, 111 - Centro, Formiga - MG, 35570-128",
  phone: "+55 37 3321-4152",
  phoneHref: "tel:+553733214152",
  whatsappHref: whatsappLink("Olá! Gostaria de mais informações sobre o Hotel Victor Plaza Formiga."),
  instagram: "https://www.instagram.com/hotel_victorplaza?igsh=MXZlN2oxaTJ5N3l2aw==",
  instagramHandle: "@hotel_victorplaza",
  email: "contato@hotelvictorplaza.com.br",
  emailHref: "mailto:contato@hotelvictorplaza.com.br",
  checkIn: "12:00",
  checkOut: "11:00",
};

export type Room = {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  shortDescription: string;
  guests: number;
  size: number;
  bed: string;
  amenities: string[];
  longDescription: string;
  whatsappMessage: string;
};

const amenitiesBase = ["Banheiro privativo", "TV", "Escrivaninha", "Wi-Fi gratuito", "Café da manhã incluso", "Estacionamento incluso"];

export const rooms: Room[] = [
  {
    slug: "quarto-standard",
    name: "Quarto Standard",
    category: "Standard",
    image: `${IMG}/quarto-standard.jpg`,
    description: "Quarto acolhedor e bem equipado, com ventilador de teto e tudo o que você precisa para uma estadia tranquila.",
    shortDescription: "Quarto acolhedor e bem equipado, com ventilador de teto e tudo o que você precisa para uma estadia tranquila.",
    guests: 5,
    size: 24,
    bed: "Cama de solteiro/casal",
    amenities: [...amenitiesBase, "Ventilador de teto"],
    longDescription:
      "O Quarto Standard é a porta de entrada para o conforto no Hotel Victor Plaza Formiga. Com ventilador de teto, iluminação natural e uma estética limpa e minimalista, é a base perfeita para quem está a passeio ou a trabalho. Cada detalhe foi pensado — do banheiro privativo à escrivaninha para seus momentos de trabalho ou leitura.",
    whatsappMessage: "Olá, Hotel Victor Plaza Formiga! Tenho interesse no Quarto Standard (com ventilador de teto) e gostaria de verificar disponibilidade e fazer uma reserva.",
  },
  {
    slug: "quarto-luxo",
    name: "Quarto Luxo",
    category: "Luxo",
    image: `${IMG}/quarto-luxo.jpg`,
    description: "Quarto mais espaçoso com ar-condicionado e frigobar, além de tudo o que já é oferecido no quarto standard.",
    shortDescription: "Quarto mais espaçoso com ar-condicionado e frigobar, além de tudo o que já é oferecido no quarto standard.",
    guests: 5,
    size: 32,
    bed: "Cama de casal",
    amenities: [...amenitiesBase, "Ventilador de teto", "Ar-condicionado", "Frigobar"],
    longDescription:
      "O Quarto Luxo oferece mais espaço para relaxar. Com cama de casal, ar-condicionado para os dias mais quentes e frigobar para sua comodidade, é um quarto que convida a desacelerar. Inclui ainda tudo o que já é oferecido no Quarto Standard.",
    whatsappMessage: "Olá, Hotel Victor Plaza Formiga! Tenho interesse no Quarto Luxo (com ar-condicionado e frigobar) e gostaria de verificar disponibilidade e fazer uma reserva.",
  },
  {
    slug: "quarto-presidencial",
    name: "Quarto Presidencial",
    category: "Presidencial",
    image: `${IMG}/quarto-presidencial.jpg`,
    description: "Nosso quarto mais completo, com banheira de hidromassagem, além de tudo o que já é oferecido nos demais quartos.",
    shortDescription: "Nosso quarto mais completo, com banheira de hidromassagem, além de tudo o que já é oferecido nos demais quartos.",
    guests: 5,
    size: 65,
    bed: "Cama de casal king",
    amenities: [...amenitiesBase, "Ventilador de teto", "Ar-condicionado", "Frigobar", "Banheira de hidromassagem"],
    longDescription:
      "O Quarto Presidencial é a opção mais completa do Hotel Victor Plaza Formiga. Além de tudo o que já é oferecido nos demais quartos, conta com uma banheira de hidromassagem para você relaxar depois de um longo dia. Espaçoso e refinado, é o quarto que recomendamos para quem deseja a experiência completa.",
    whatsappMessage: "Olá, Hotel Victor Plaza Formiga! Tenho interesse no Quarto Presidencial (com banheira de hidromassagem) e gostaria de verificar disponibilidade e fazer uma reserva.",
  },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  category: string;
  longDescription: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Café da Manhã",
    category: "Alimentação",
    description: "Café da manhã completo, com pães, frutas, sucos e opções quentes — incluso para todos os hóspedes.",
    longDescription:
      "O café da manhã do Hotel Victor Plaza Formiga é servido diariamente e está incluso na diária. Oferecemos pães frescos, frutas da estação, sucos, café, leite, além de opções quentes como ovos e frios. Um início de dia sem pressa, no centro da cidade.",
  },
  {
    number: "02",
    title: "Wi-Fi de Cortesia",
    category: "Conveniência",
    description: "Internet de alta velocidade disponível em todas as áreas do hotel, inclusa na diária.",
    longDescription:
      "Oferecemos Wi-Fi de alta velocidade em todas as áreas do hotel, sem custo adicional. A conexão é estável e suficiente para trabalhar em vídeo, assistir a streams ou simplesmente navegar com tranquilidade durante sua estadia.",
  },
  {
    number: "03",
    title: "Estacionamento",
    category: "Conveniência",
    description: "Estacionamento seguro incluso para todos os hóspedes, vigilância 24 horas.",
    longDescription:
      "Disponibilizamos estacionamento incluso na diária para os hóspedes do Hotel Victor Plaza Formiga. O espaço é seguro, com vigilância 24 horas, garantindo tranquilidade durante toda a sua estadia.",
  },
  {
    number: "04",
    title: "Localização Central",
    category: "Localização",
    description: "Localizado no centro de Formiga, próximo a restaurantes, lojas e pontos de interesse.",
    longDescription:
      "Estamos no centro de Formiga, na Rua Barão de Piumhi, 111. A localização privilegiada coloca a poucos passos restaurantes, lojas, farmácias e os principais pontos de interesse da cidade, facilitando sua estadia seja a lazer ou a trabalho.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  room: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Tudo da estadia foi pensado. O quarto era silencioso, a cama perfeita e a equipe nunca nos fez sentir que estávamos pedindo demais.",
    name: "Ana Pereira",
    location: "Belo Horizonte, MG",
    room: "Quarto Luxo",
  },
  {
    quote:
      "O quarto presidencial é um dos melhores que já fiquei. A banheira de hidromassagem vale a pena sozinha. Café da manhã maravilhoso. Recomendo muito.",
    name: "Carlos Martins",
    location: "São Paulo, SP",
    room: "Quarto Presidencial",
  },
  {
    quote:
      "Vim a trabalho e a localização no centro fez toda a diferencia. Quarto confortável, Wi-Fi excelente e equipe atenciosa. Voltarei com certeza.",
    name: "Mariana Souza",
    location: "Formiga, MG",
    room: "Quarto Standard",
  },
];

export const stats = [
  { value: 5, suffix: "", label: "Pessoas por quarto" },
  { value: 3, suffix: "", label: "Tipos de quarto" },
  { value: 24, suffix: "h", label: "Recepção" },
  { value: 4.9, suffix: "", label: "Avaliação dos hóspedes", decimals: 1 },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  dateISO: string;
  image: string;
  author: string;
  sections: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "guia-do-centro-de-formiga",
    title: "Guia do Centro de Formiga",
    category: "Local",
    excerpt: "Seis coisas que valem a pena ver, comer e fazer a poucos passos do hotel.",
    date: "15 de maio de 2025",
    dateISO: "2025-05-15",
    image: `${IMG}/blog-centro.jpg`,
    author: "Equipe Hotel Victor Plaza",
    sections: [
      { heading: "O Centro", body: "O hotel fica no centro de Formiga, onde o movimento da cidade encontra opções de comida, lojas e serviços. Aqui está o que recomendamos." },
      { heading: "Onde comer", body: "A poucos passos você encontra padarias com pães frescos pela manhã e restaurantes caseiros para o almoço e o jantar. Pergunte na recepção pelas nossas recomendações do dia." },
      { heading: "O que visitar", body: "A Igreja Matriz e a Praça Central ficam a poucos minutos a pé. Para quem gosta de natureza, a região de Formiga conta com cachoeiras e trilhas a curtas distâncias de carro." },
      { heading: "Como circular", body: "A maior parte do que você precisa está a pé. Para destinos mais distantes, nossa equipe pode ajudar a chamar um táxi ou orientar sobre linhas de ônibus." },
    ],
  },
  {
    slug: "cafe-da-manha-do-victor-plaza",
    title: "Nosso Café da Manhã",
    category: "Comida",
    excerpt: "Como pensamos no café da manhã que serve bem a todos os hóspedes, todo dia.",
    date: "28 de abril de 2025",
    dateISO: "2025-04-28",
    image: `${IMG}/blog-cafe-da-manha.webp`,
    author: "Equipe Hotel Victor Plaza",
    sections: [
      { heading: "Incluso na diária", body: "O café da manhã está incluso na diária de todos os hóspedes. Servimos pães, frutas, sucos, café, leite e opções quentes, todos os dias." },
      { heading: "Da estação", body: "Sempre que possível, trabalhamos com produtos frescos da estação, valorizando fornecedores da região de Formiga." },
      { heading: "Com tranquilidade", body: "O café da manhã é servido em horário amplo para que cada hóspede possa aproveitar no seu próprio ritmo." },
    ],
  },
  {
    slug: "como-aproveitar-sua-estadia",
    title: "Como Aproveitar Sua Estadia",
    category: "Dicas",
    excerpt: "Um guia prático para desacelerar, arrumar as malas com calma e curtir de verdade.",
    date: "10 de março de 2025",
    dateISO: "2025-03-10",
    image: `${IMG}/blog-aproveitar-a-estadia.jpg`,
    author: "Equipe Hotel Victor Plaza",
    sections: [
      { heading: "Desembale com calma", body: "Viver de mala aberta é a forma mais rápida de se sentir um hóspede que nunca chegou. Desembale ao se acomodar. Use o guarda-roupa, as gavetas, os cabides." },
      { heading: "Desacelere", body: "Uma estadia em hotel não é uma lista de tarefas. Peça um café no quarto. Leia na banheira. Faça o caminho mais longo de volta do jantar." },
      { heading: "Pergunte", body: "A equipe está aqui para ajudar. As melhores estadias são aquelas em que os hóspedes pedem o que de fato querem, em vez de tentar adivinhar o que é possível." },
    ],
  },
];

export type MenuItem = {
  name: string;
  description: string;
  category: string;
};

export const menu: MenuItem[] = [
  { name: "Pão na chapa", description: "Pão fresco, manteiga e geleia da estação. Servido com café ou chá à escolha.", category: "Café da manhã" },
  { name: "Ovos mexidos", description: "Ovos frescos mexidos com torradas. Um clássico do café da manhã, bem feito.", category: "Café da manhã" },
  { name: "Frutas e iogurte", description: "Frutas da estação, iogurte natural e granola. Leve e fresco.", category: "Café da manhã" },
  { name: "Café", description: "Café coado fresquinho, servido quentinho. Recarga à vontade.", category: "Café da manhã" },
  { name: "Sucos", description: "Sucos naturais de laranja, abacaxi e maracujá. Sem açúcar adicional.", category: "Café da manhã" },
  { name: "Opções quentes", description: "Bolo, pão de queijo e frios para acompanhar o seu café da manhã.", category: "Café da manhã" },
];

export const diningHours = [
  { label: "Café da manhã (diário)", start: "06:00", end: "10:00" },
];

export const galleryImages = [
  `${IMG}/galeria-1.jpg`,
  `${IMG}/galeria-2.jpg`,
  `${IMG}/galeria-3.jpg`,
  `${IMG}/galeria-4.jpg`,
  `${IMG}/galeria-5.jpg`,
  `${IMG}/galeria-6.jpg`,
  `${IMG}/galeria-7.jpg`,
  `${IMG}/galeria-8.jpg`,
];

export type Faq = { question: string; answer: string };

export const roomFaqs: Faq[] = [
  {
    question: "Qual é o horário de check-in e check-out?",
    answer: "O check-in é a partir das 12:00 e o check-out até as 11:00. Check-in antecipado e check-out tardio podem ser combinados conforme disponibilidade. Entre em contato pelo WhatsApp que fazemos o possível para acomodar você.",
  },
  {
    question: "O café da manhã está incluso?",
    answer: "Sim. O café da manhã está incluso na diária para todos os hóspedes e é servido diariamente das 06:00 às 10:00.",
  },
  {
    question: "Vocês aceitam animais de estimação?",
    answer: "Recomendamos entrar em contato pelo WhatsApp antes da reserva para confirmar a disponibilidade de quartos aptos a receber animais e conhecer as condições.",
  },
  {
    question: "O hotel possui estacionamento?",
    answer: "Sim. Oferecemos estacionamento incluso na diária, com vigilância, para todos os hóspedes.",
  },
  {
    question: "Quantas pessoas o quarto comporta?",
    answer: "Todos os nossos quartos comportam até 5 pessoas. Informe no WhatsApp quantas pessoas vão se hospedar para que possamos preparar o quarto adequadamente.",
  },
  {
    question: "O Wi-Fi é gratuito?",
    answer: "Sim. O Wi-Fi de alta velocidade está disponível em todas as áreas do hotel e é gratuito para todos os hóspedes.",
  },
];

export type LegalPage = {
  slug: string;
  title: string;
  lastUpdated: string;
  sections: { heading: string; body: string }[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "politica-de-privacidade",
    title: "Política de Privacidade",
    lastUpdated: "junho de 2025",
    sections: [
      { heading: "O que coletamos", body: "Quando você faz uma reserva ou entra em contato conosco, coletamos seu nome, e-mail, telefone e eventuais preferências que você compartilhe. Também coletamos dados de navegação padrão quando você visita este site." },
      { heading: "Como usamos", body: "Usamos suas informações para gerenciar sua reserva, comunicar-nos sobre sua estadia e melhorar nosso serviço. Não vendemos seus dados a terceiros." },
      { heading: "Cookies", body: "Este site utiliza cookies para analytics e para lembrar suas preferências. Você pode desativar os cookies nas configurações do seu navegador a qualquer momento." },
      { heading: "Seus direitos", body: "Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Solicite pelo WhatsApp ou e-mail do hotel." },
      { heading: "Contato", body: "Para qualquer questão relacionada à privacidade, entre em contato pelo WhatsApp +55 37 3321-4152." },
    ],
  },
  {
    slug: "termos-e-condicoes",
    title: "Termos e Condições",
    lastUpdated: "junho de 2025",
    sections: [
      { heading: "Reservas", body: "Todas as reservas estão sujeitas à disponibilidade e são confirmadas mediante contato prévio pelo WhatsApp ou telefone. As diárias são por quarto, por noite." },
      { heading: "Cancelamento", body: "Cancelamentos feitos com pelo menos 48 horas de antecedência à data prevista de chegada não geram cobrança. Cancelamentos com menos de 48 horas podem incorrer na cobrança da primeira diária." },
      { heading: "Check-in e Check-out", body: "O check-in é a partir das 12:00 e o check-out até as 11:00. Solicitações de check-in antecipado ou check-out tardio estão sujeitos à disponibilidade." },
      { heading: "Responsabilidade", body: "O Hotel Victor Plaza Formiga não se responsabiliza por perda ou dano a bens pessoais deixados nos quartos ou áreas comuns. Objetos de valor devem ser guardados na recepção." },
      { heading: "Contato", body: "Para qualquer dúvida sobre estes termos, entre em contato pelo WhatsApp +55 37 3321-4152." },
    ],
  },
];

export const heroImage = `${IMG}/fachada-hero.jpg`;
export const servicesFeatureImage = `${IMG}/servicos.jpg`;
export const storyImage = `${IMG}/nossa-historia.jpg`;
export const diningFeatureImage = `${IMG}/cafe-da-manha.jpg`;