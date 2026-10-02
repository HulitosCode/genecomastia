"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { CHECKOUT_URL, PRODUCT_INFO } from "@/lib/constants"

const PRODUCT_NAME = PRODUCT_INFO.name

export function EbookPreviewSection() {
  const handleCheckout = () => {
    if (CHECKOUT_URL !== "COLOCAR_LINK_DO_CHECKOUT_AQUI") {
      window.location.href = CHECKOUT_URL
    }
  }

  return (
    <section 
      id="ebook" 
      className="bg-background py-16 sm:py-20 lg:py-24"
      aria-labelledby="ebook-title"
    >
      <div className="px-4 mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 animate-fade-in">
          <Badge className="mb-4 inline-flex bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-semibold tracking-wide">
            APRESENTAÇÃO DO E-BOOK
          </Badge>
          <h2 
            id="ebook-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground"
          >
            Informação organizada para você entender melhor o seu corpo.
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Um guia digital desenvolvido em linguagem acessível para ajudar você a compreender a ginecomastia e tomar decisões mais informadas sobre a sua saúde.
          </p>
        </div>

        {/* Mockup 3D Principal */}
        <div className="max-w-4xl mx-auto mb-12 animate-slide-up delay-100">
          <div className="relative">
            {/* Sombra decorativa */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-2xl -z-10" />
            
            <div className="relative transform rotate-y-3 rotate-x-2 transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0 hover:scale-[1.01]">
              <Image
                src="/capa.png"
                alt={`${PRODUCT_NAME} - Capa do guia educativo 3D`}
                width={500}
                height={700}
                className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto drop-shadow-2xl rounded-xl border border-border/50 mx-auto"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 500px"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up delay-200">
          <Card className="bg-primary/5 border-primary/20 max-w-xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Pronto para acessar?</h3>
              <p className="text-muted-foreground mb-6">Tenha todo este conteúdo organizado no seu dispositivo em minutos.</p>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4"
                onClick={handleCheckout}
              >
                QUERO ACESSAR O GUIA
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}