"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, BookOpen, Smartphone, Sparkles, Calendar } from "lucide-react"
import { CHECKOUT_URL, PRODUCT_INFO } from "@/lib/constants"
import { cn } from "@/lib/utils"

const DISCLAIMER_SHORT = "Este material possui finalidade exclusivamente educativa e não substitui avaliação, diagnóstico ou tratamento realizado por profissional de saúde."

const benefits = [
  { icon: BookOpen, label: "E-book digital", description: "Formato PDF compatível com todos os dispositivos" },
  { icon: Sparkles, label: "Conteúdo educativo organizado", description: "14 capítulos estruturados progressivamente" },
  { icon: Smartphone, label: "Leitura no telemóvel", description: "Design responsivo para qualquer tela" },
  { icon: Check, label: "Acesso digital imediato", description: "Disponível logo após confirmação do pagamento" },
  { icon: Calendar, label: `Edição ${PRODUCT_INFO.edition}`, description: "Conteúdo atualizado para o ano vigente" },
] as const

export function OfferSection() {
  const handleCheckout = () => {
    if (CHECKOUT_URL !== "COLOCAR_LINK_DO_CHECKOUT_AQUI") {
      window.location.href = CHECKOUT_URL
    }
  }

  return (
    <section 
      id="oferta" 
      className="bg-background py-16 sm:py-20 lg:py-24"
      aria-labelledby="oferta-title"
    >
      <div className="px-4 mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 animate-fade-in">
          <Badge className="mb-4 inline-flex bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-semibold tracking-wide">
            OFERTA ESPECIAL
          </Badge>
          <h2 
            id="oferta-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground"
          >
            ENTENDENDO A GINECOMASTIA MASCULINA
          </h2>
          <p className="mt-2 text-muted-foreground text-base sm:text-lg">
            Guia Educativo {PRODUCT_INFO.edition}
          </p>
        </div>

        {/* Card de Preço Premium */}
        <div className="max-w-lg mx-auto mb-12 animate-slide-up delay-100">
          <Card className="relative overflow-hidden bg-gradient-to-br from-card via-background to-muted/50 border-primary/20 shadow-xl">
            {/* Badge de desconto */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4">
              <Badge variant="destructive" className="px-3 py-1 text-xs font-bold">
                -{Math.round((1 - PRODUCT_INFO.price / PRODUCT_INFO.originalPrice) * 100)}%
              </Badge>
            </div>

            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center text-foreground">
                {PRODUCT_INFO.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 pt-6">
              {/* Preços */}
              <div className="text-center space-y-2">
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-lg font-medium line-through text-muted-foreground/60">
                    Preço anterior: {PRODUCT_INFO.originalPrice} {PRODUCT_INFO.currency}
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent">
                    {PRODUCT_INFO.price} {PRODUCT_INFO.currency}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pagamento único • Acesso vitalício ao material
                </p>
              </div>

              {/* Benefícios */}
              <div className="space-y-3 border-t border-border/50 pt-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{benefit.label}</p>
                      <p className="text-xs text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 text-lg shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-[1.01]"
                onClick={handleCheckout}
              >
                QUERO ACESSAR POR {PRODUCT_INFO.price} {PRODUCT_INFO.currency}
              </Button>

              {/* Segurança */}
              <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground/70 border-t border-border/50 pt-4">
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  Pagamento seguro
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  Acesso imediato
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  Conteúdo educativo
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Nota importante */}
        <div className="text-center animate-slide-up delay-200">
          <p className="text-xs text-muted-foreground/70 max-w-xl mx-auto">
            {DISCLAIMER_SHORT}
          </p>
        </div>
      </div>
    </section>
  )
}