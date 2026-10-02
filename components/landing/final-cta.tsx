"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Shield } from "lucide-react"
import { CHECKOUT_URL, PRODUCT_INFO } from "@/lib/constants"

export function FinalCTASection() {
  const handleCheckout = () => {
    if (CHECKOUT_URL !== "COLOCAR_LINK_DO_CHECKOUT_AQUI") {
      window.location.href = CHECKOUT_URL
    }
  }

  return (
    <section 
      id="cta-final" 
      className="bg-primary/5 border-y border-primary/10 py-16 sm:py-20 lg:py-24"
      aria-labelledby="cta-final-title"
    >
      <div className="px-4 mx-auto max-w-3xl">
        <div className="text-center animate-fade-in">
          {/* Ícone decorativo */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Brain className="h-8 w-8 text-primary" aria-hidden="true" />
          </div>

          {/* Headline */}
          <h2 
            id="cta-final-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground mb-4"
          >
            Informação é o primeiro passo para compreender o que está acontecendo com o seu corpo.
          </h2>

          {/* Texto */}
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Em vez de depender de vídeos aleatórios, opiniões ou promessas milagrosas, tenha acesso a um material organizado que explica o assunto de forma simples e responsável.
          </p>

          {/* Preço */}
          <div className="flex items-baseline justify-center gap-3 mb-8">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">
              {PRODUCT_INFO.price} {PRODUCT_INFO.currency}
            </span>
          </div>

          {/* CTA Principal */}
          <Button
            size="lg"
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-4 text-lg shadow-xl shadow-accent/20 transition-all duration-300 hover:scale-[1.02] group"
            onClick={handleCheckout}
          >
            QUERO ACESSAR O GUIA
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Button>

          {/* Benefícios rápidos */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border/50 rounded-full">
              <Shield className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              Conteúdo educativo responsável
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border/50 rounded-full">
              <Brain className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              Informação baseada em evidências
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border/50 rounded-full">
              Acesso digital imediato
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}