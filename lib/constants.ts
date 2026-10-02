/**
 * Constantes globais da aplicação
 */

export const CHECKOUT_URL = "https://checkout.escalepay.com/4963102";

export const PRODUCT_INFO = {
  name: "Entendendo a Ginecomastia Masculina — Guia Educativo 2026",
  price: 199,
  originalPrice: 299,
  currency: "MT",
  edition: "2026",
} as const;

export const NAV_LINKS = [
  { href: "#problema", label: "O Problema" },
  { href: "#vsl", label: "Vídeo" },
  { href: "#aprender", label: "O Que Vai Aprender" },
  { href: "#mitos", label: "Mito ou Realidade" },
  { href: "#publico", label: "Para Quem É" },
  { href: "#ebook", label: "O Guia" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#oferta", label: "Oferta" },
  { href: "#faq", label: "Dúvidas" },
] as const;

export const DISCLAIMER_TEXT = {
  short: "Este material possui finalidade exclusivamente educativa e não substitui avaliação, diagnóstico ou tratamento realizado por profissional de saúde.",
  full: `Este produto possui finalidade exclusivamente educativa e informativa. Não fornece diagnóstico, prescrição ou tratamento médico individualizado e não substitui consulta com médico, nutricionista, psicólogo ou outro profissional de saúde habilitado.

Caso apresente sintomas, alterações recentes, dor, nódulos, secreção pelo mamilo, alterações hormonais ou outras preocupações relacionadas à sua saúde, procure avaliação profissional.`,
} as const;