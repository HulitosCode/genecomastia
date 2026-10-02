"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, BookOpen } from "lucide-react"

const chapters = [
  "01 — Entendendo a ginecomastia",
  "02 — Ginecomastia x pseudoginecomastia",
  "03 — Causas e fatores associados",
  "04 — Hormonas, prolactina e hipófise",
  "05 — Quando procurar avaliação médica",
  "06 — Como pode ser feita a investigação médica",
  "07 — Tratamento: depende da causa",
  "08 — Exercício físico: o que pode e não pode fazer",
  "09 — Rotina geral de atividade física",
  "10 — Alimentação e controlo do peso",
  "11 — Sono, álcool e outros hábitos",
  "12 — Imagem corporal e bem-estar",
  "13 — Perguntas frequentes",
  "14 — Referências e orientações finais",
] as const

export function ContentsSection() {
  return (
    <section 
      id="conteudo" 
      className="bg-muted/30 py-16 sm:py-20 lg:py-24"
      aria-labelledby="conteudo-title"
    >
      <div className="px-4 mx-auto max-w-3xl">
        {/* Cabeçalho */}
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <Badge className="mb-4 inline-flex bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-semibold tracking-wide">
            ÍNDICE RESUMIDO
          </Badge>
          <h2 
            id="conteudo-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground"
          >
            Conteúdo do E-book
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            14 capítulos organizados em uma progressão lógica: do entendimento do problema às estratégias práticas.
          </p>
        </div>

        {/* Lista de capítulos */}
        <Card className="overflow-hidden animate-slide-up delay-100">
          <CardContent className="p-0">
            <div className="divide-y divide-border/50">
              {chapters.map((chapter, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between px-6 py-4 hover:bg-muted/50 transition-colors group last:divide-y-0"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-sm font-mono text-muted-foreground/60 w-8 text-right flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <BookOpen className="h-5 w-5 text-primary/70 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm sm:text-base text-foreground leading-relaxed truncate">
                      {chapter}
                    </span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors flex-shrink-0" aria-hidden="true" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Destaques */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4 animate-slide-up delay-200">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-5 text-center">
              <BookOpen className="h-10 w-10 mx-auto mb-3 text-primary" aria-hidden="true" />
              <h3 className="font-semibold text-foreground mb-1">Linguagem Acessível</h3>
              <p className="text-sm text-muted-foreground">Explicações claras sem jargão médico desnecessário.</p>
            </CardContent>
          </Card>

          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-5 text-center">
              <BookOpen className="h-10 w-10 mx-auto mb-3 text-accent" aria-hidden="true" />
              <h3 className="font-semibold text-foreground mb-1">Baseado em Evidências</h3>
              <p className="text-sm text-muted-foreground">Informações alinhadas com literatura médica atual.</p>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-5 text-center">
              <BookOpen className="h-10 w-10 mx-auto mb-3 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              <h3 className="font-semibold text-foreground mb-1">Foco Prático</h3>
              <p className="text-sm text-muted-foreground">O que fazer, quando procurar ajuda, como decidir.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}