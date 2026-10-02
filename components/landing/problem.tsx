"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Weight, Zap, Search } from "lucide-react"

const problemCards = [
  {
    number: "01",
    title: "Ginecomastia",
    description: "Crescimento de tecido glandular mamário em homens. Pode afetar uma ou ambas as mamas, sendo frequentemente bilateral.",
    icon: Brain,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    number: "02",
    title: "Pseudoginecomastia",
    description: "Acúmulo de tecido adiposo (gordura) na região do peito, sem crescimento glandular. Relacionado ao excesso de peso e composição corporal.",
    icon: Weight,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    number: "03",
    title: "Alterações hormonais",
    description: "Desequilíbrios entre estrogénios e androgénios, elevação de prolactina, hipogonadismo ou outras disfunções endócrinas associadas.",
    icon: Zap,
    color: "text-amber-600",
    bgColor: "bg-amber-100 dark:bg-amber-900/20",
  },
  {
    number: "04",
    title: "Outros fatores associados",
    description: "Medicamentos, substâncias, doenças hepáticas/renais, tumores, síndromes genéticas e fatores idiopáticos que podem contribuir.",
    icon: Search,
    color: "text-violet-600",
    bgColor: "bg-violet-100 dark:bg-violet-900/20",
  },
] as const

export function ProblemSection() {
  return (
    <section 
      id="problema" 
      className="bg-muted/30 py-16 sm:py-20 lg:py-24"
      aria-labelledby="problema-title"
    >
      <div className="px-4 mx-auto max-w-7xl">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <Badge className="mb-4 inline-flex bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-semibold tracking-wide">
            IDENTIFICAÇÃO DO PROBLEMA
          </Badge>
          <h2 
            id="problema-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground"
          >
            O aumento do peito masculino nem sempre tem a mesma causa.
          </h2>
        </div>

        {/* Explicação introdutória */}
        <div className="prose prose-muted max-w-3xl mx-auto mb-12 sm:mb-16 text-center animate-slide-up delay-100">
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Alguns homens apresentam maior acumulação de gordura na região do peito.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Outros podem apresentar crescimento de tecido glandular.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Também podem existir fatores hormonais, medicamentos, substâncias ou determinadas condições de saúde associados.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-6 font-medium text-foreground">
            Por isso, simplesmente tentar emagrecer ou fazer exercícios para o peito nem sempre responde à questão principal:
          </p>
          <p className="text-lg sm:text-xl font-semibold text-primary leading-relaxed">
            &ldquo;O que realmente está causando esse aumento?&rdquo;
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemCards.map((card, index) => (
            <Card 
              key={card.number} 
              className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <CardContent className="p-6 pt-8 pb-6">
                {/* Número e ícone */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl font-bold text-muted-foreground/30">{card.number}</span>
                  <div className={`${card.bgColor} ${card.color} p-3 rounded-xl`}>
                    <card.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nota final */}
        <div className="text-center mt-12 animate-slide-up delay-500">
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
            A avaliação adequada ajuda a compreender cada situação.
          </p>
        </div>
      </div>
    </section>
  )
}