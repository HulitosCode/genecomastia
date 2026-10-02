"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, BookOpen, Smartphone, Lock } from "lucide-react"
import Image from "next/image"
import { CHECKOUT_URL, PRODUCT_INFO } from "@/lib/constants"

const DISCLAIMER_SHORT = "Este material possui finalidade exclusivamente educativa e não substitui avaliação, diagnóstico ou tratamento realizado por profissional de saúde."

export function HeroSection() {
  const handleCheckout = () => {
    if (CHECKOUT_URL !== "COLOCAR_LINK_DO_CHECKOUT_AQUI") {
      window.location.href = CHECKOUT_URL
    } else {
      console.warn("CHECKOUT_URL não configurada")
    }
  }

  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-20">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          
          {/* Coluna Esquerda - Conteúdo */}
          <div className="space-y-6 lg:pt-6 animate-fade-in">
            {/* Badge */}
            <Badge className="inline-flex bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-semibold tracking-wide">
              GUIA EDUCATIVO 2026
            </Badge>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-foreground">
              Notou aumento no peito e não sabe se é
              <span className="text-primary block mt-1">gordura ou ginecomastia?</span>
            </h1>

            {/* Subheadline */}
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
              Entenda as possíveis causas, quando procurar avaliação médica e qual é o verdadeiro papel do exercício, alimentação e controlo do peso.
            </p>

            {/* Indicadores */}
            <div className="flex flex-wrap gap-4 pt-2 animate-slide-up delay-100">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Conteúdo educativo</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Linguagem simples</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Leitura digital</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Acesso após a compra</span>
              </div>
            </div>

            {/* Preço */}
            <div className="flex items-baseline gap-4 flex-wrap animate-slide-up delay-200">
              <span className="text-lg font-medium line-through text-muted-foreground/60">
                De: {PRODUCT_INFO.originalPrice} {PRODUCT_INFO.currency}
              </span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">
                Por: {PRODUCT_INFO.price} {PRODUCT_INFO.currency}
              </span>
            </div>

            {/* CTA Principal */}
            <Button
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-[1.02] group animate-slide-up delay-300"
              onClick={handleCheckout}
            >
              QUERO ACESSAR O GUIA
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Disclaimer curto */}
            <p className="text-xs text-muted-foreground/70 text-center sm:text-left animate-slide-up delay-400">
              {DISCLAIMER_SHORT}
            </p>

            {/* Benefícios adicionais */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/50 animate-slide-up delay-500">
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Formato PDF</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <Smartphone className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Leia no telemóvel</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <Lock className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Pagamento seguro</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <span className="h-5 w-5 text-primary font-bold">📅</span>
                <span className="text-sm text-muted-foreground">Edição {PRODUCT_INFO.edition}</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Mockup do E-book */}
          <div className="relative flex justify-center lg:pt-4 animate-fade-in delay-200">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
              {/* Sombra decorativa */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-2xl -z-10" />
              
              {/* Mockup 3D do e-book */}
              <div className="relative transform rotate-y-3 rotate-x-2 transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0 hover:scale-105">
                <Image
                  src="/capa.png"
                  alt={`${PRODUCT_INFO.name} - Capa do guia educativo`}
                  width={400}
                  height={560}
                  className="w-full h-auto drop-shadow-2xl rounded-xl border border-border/50"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>

              {/* Elementos decorativos flutuantes */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}