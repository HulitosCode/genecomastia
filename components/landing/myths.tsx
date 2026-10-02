"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown, X, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const myths = [
  {
    question: "Fazer exercícios de peito elimina ginecomastia?",
    answer: "Não necessariamente. Exercícios podem desenvolver a musculatura do peito e contribuir para a composição corporal, mas não removem tecido glandular.",
    isMyth: true,
  },
  {
    question: "Emagrecer pode diminuir o peito?",
    answer: "Quando existe uma quantidade significativa de gordura corporal, a perda de gordura pode reduzir o volume da região. Isso não significa que tecido glandular será eliminado.",
    isMyth: false,
  },
  {
    question: "Ginecomastia significa necessariamente doença?",
    answer: "Não. Existem diferentes causas e contextos. Uma avaliação profissional pode ser necessária dependendo da idade, duração, sintomas e características apresentadas.",
    isMyth: true,
  },
  {
    question: "Prolactina elevada significa necessariamente tumor?",
    answer: "Não. Existem diferentes causas para aumento da prolactina. A investigação deve ser realizada por profissional de saúde.",
    isMyth: true,
  },
] as const

export function MythsSection() {
  return (
    <section 
      id="mitos" 
      className="bg-background py-16 sm:py-20 lg:py-24"
      aria-labelledby="mitos-title"
    >
      <div className="px-4 mx-auto max-w-3xl">
        {/* Cabeçalho */}
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <Badge className="mb-4 inline-flex bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-semibold tracking-wide">
            MITO OU REALIDADE?
          </Badge>
          <h2 
            id="mitos-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground"
          >
            Mito ou Realidade?
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Teste seus conhecimentos. Clique em cada pergunta para ver a resposta baseada em evidências.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="multiple" className="space-y-4 animate-slide-up delay-100">
          {myths.map((myth, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left py-5 px-6 bg-card border-border/60 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-base font-medium text-foreground leading-relaxed pr-8">
                    {myth.question}
                  </span>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden">
                <div className="pt-0 pb-5 px-6">
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                      myth.isMyth ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" : "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                    )}>
                      {myth.isMyth ? (
                        <X className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <CheckCircle className="h-4 w-4" aria-hidden="true" />
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed pt-0.5">
                      {myth.answer}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Nota educativa */}
        <div className="mt-10 p-5 bg-muted/50 rounded-xl border border-border/50 animate-slide-up delay-200">
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            <strong className="text-foreground">Lembre-se:</strong> Esta seção tem caráter educativo. Cada caso é único e a avaliação profissional é fundamental para orientação adequada.
          </p>
        </div>
      </div>
    </section>
  )
}