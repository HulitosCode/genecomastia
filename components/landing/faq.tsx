"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqItems = [
  {
    question: "O guia ensina a curar ginecomastia?",
    answer: "Não. O guia é educativo e explica causas, diferenças, fatores associados e possibilidades de avaliação e cuidado. Ele não promete cura nem substitui tratamento médico.",
  },
  {
    question: "Exercício pode eliminar ginecomastia?",
    answer: "Exercício pode contribuir para desenvolvimento muscular e redução de gordura corporal, mas não remove necessariamente tecido glandular. O guia explica essa distinção com clareza.",
  },
  {
    question: "Preciso ir ao médico?",
    answer: "O guia explica situações em que a avaliação profissional é especialmente importante. Ele não substitui consulta médica. Caso tenha sintomas, dor, nódulos ou alterações recentes, procure um profissional de saúde.",
  },
  {
    question: "Como recebo o produto?",
    answer: "O produto é digital. Após a confirmação do pagamento, o comprador recebe as instruções para acesso ao material (download de PDF ou área de membros, conforme a plataforma de checkout).",
  },
  {
    question: "Posso ler pelo telefone?",
    answer: "Sim. O material é disponibilizado em PDF e pode ser lido em smartphone, tablet ou computador. O formato é responsivo e adaptado para leitura em telas menores.",
  },
  {
    question: "Quanto custa?",
    answer: "O acesso ao guia educativo custa 199 MT (meticais moçambicanos). É um pagamento único, sem mensalidades ou taxas recorrentes.",
  },
  {
    question: "O guia substitui consulta médica?",
    answer: "Não. Este material possui finalidade exclusivamente educativa e informativa. Não fornece diagnóstico, prescrição ou tratamento médico individualizado e não substitui consulta com médico ou outro profissional de saúde habilitado.",
  },
  {
    question: "Há garantia de reembolso?",
    answer: "A política de reembolso depende da plataforma de checkout utilizada. Verifique os termos no momento da compra. Geralmente plataformas digitais oferecem 7 dias de garantia conforme legislação aplicável.",
  },
] as const

export function FAQSection() {
  return (
    <section 
      id="faq" 
      className="bg-muted/30 py-16 sm:py-20 lg:py-24"
      aria-labelledby="faq-title"
    >
      <div className="px-4 mx-auto max-w-3xl">
        {/* Cabeçalho */}
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <Badge className="mb-4 inline-flex bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-semibold tracking-wide">
            PERGUNTAS FREQUENTES
          </Badge>
          <h2 
            id="faq-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground"
          >
            Dúvidas frequentes
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Respostas diretas para as perguntas mais comuns sobre o guia e seu conteúdo.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="multiple" className="space-y-3 animate-slide-up delay-100">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left py-5 px-6 bg-card border-border/60 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base font-medium text-foreground leading-relaxed pr-8 flex-1">
                    {item.question}
                  </span>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden">
                <div className="pt-0 pb-5 px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA sutil */}
        <div className="mt-10 text-center animate-slide-up delay-200">
          <p className="text-muted-foreground text-sm mb-4">
            Não encontrou sua dúvida?
          </p>
          <a 
            href="mailto:suporte@entendendoaginecomastia.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Entre em contato conosco
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}