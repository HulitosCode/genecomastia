"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"
import { CHECKOUT_URL } from "@/lib/constants"
import { useState } from "react"

const DISCLAIMER_SHORT = "Este material possui finalidade exclusivamente educativa e não substitui avaliação, diagnóstico ou tratamento realizado por profissional de saúde."

export function VSLVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    // Analytics: vsl_play
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "vsl_play", {
        event_category: "engagement",
        event_label: "VSL Play",
      })
    }
    // Meta Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("trackCustom", "VSLPlay")
    }
  }

  const handleCheckout = () => {
    window.location.href = CHECKOUT_URL
  }

  return (
    <section 
      id="vsl" 
      className="bg-background py-16 sm:py-20 lg:py-24"
      aria-labelledby="vsl-title"
    >
      <div className="px-4 mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 animate-fade-in">
          <Badge className="mb-4 inline-flex bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-semibold tracking-wide">
            VÍDEO EDUCATIVO
          </Badge>
          <h2 
            id="vsl-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground"
          >
            Antes de tentar resolver, comece por entender.
          </h2>
        </div>

        {/* Player de Vídeo - usando video.mp4 local */}
        <div className="max-w-4xl mx-auto mb-10 animate-slide-up delay-100">
          <div className="video-wrapper relative aspect-video w-full" role="region" aria-label="Player de vídeo educativo sobre ginecomastia">
            {!isPlaying ? (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-muted/50 hover:bg-muted transition-colors duration-300 rounded-xl"
                aria-label="Reproduzir vídeo educativo"
              >
                <div className="relative z-10 text-center px-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-accent/90 rounded-full flex items-center justify-center shadow-xl hover:bg-accent transition-colors mx-auto">
                    <Play className="h-8 w-8 sm:h-10 sm:w-10 text-accent-foreground ml-1" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm sm:text-base text-muted-foreground/80">
                    Clique para assistir ao vídeo explicativo
                  </p>
                </div>
                
                {/* Imagem de placeholder (capa do e-book) - cobre todo o wrapper mantendo aspect-ratio */}
                <div className="absolute inset-0 z-0 rounded-xl overflow-hidden">
                  <img
                    src="/capa.png"
                    alt="Preview do guia educativo"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>
              </button>
            ) : (
              <video
                src="/video.mp4"
                autoPlay
                playsInline
                controls
                className="w-full h-full object-contain rounded-xl bg-black"
                title="Vídeo educativo: Entendendo a Ginecomastia Masculina"
                poster="/capa.png"
              />
            )}
          </div>
        </div>

        {/* Roteiro/Resumo do VSL */}
        <div className="max-w-3xl mx-auto space-y-6 animate-slide-up delay-200">
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="border-primary/20">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Abertura</h3>
                    <p className="text-sm text-muted-foreground">
                      O aumento da região mamária pode ser gordura, tecido glandular ou outros fatores que precisam de avaliação.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Desenvolvimento</h3>
                    <p className="text-sm text-muted-foreground">
                      Gordura responde a composição corporal; tecido glandular não. Hormonas, medicamentos e saúde também influenciam.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Apresentação</h3>
                    <p className="text-sm text-muted-foreground">
                      O guia &ldquo;Entendendo a Ginecomastia Masculina&rdquo; — material educativo simples e responsável.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">O que você aprende</h3>
                    <p className="text-sm text-muted-foreground">
                      Diferença ginecomastia/pseudoginecomastia, causas, hormonas, sinais de alerta, papel do exercício e alimentação.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quebra de expectativa */}
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <span className="text-destructive font-bold text-lg">!</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Quebra de Expectativa</h3>
                  <p className="text-sm text-muted-foreground">
                    Este não é um produto que promete curar ginecomastia com exercícios ou dietas. O objetivo é fornecer informação para que você compreenda melhor o problema e saiba procurar o caminho adequado.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Oferta no VSL */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-5 text-center">
              <h3 className="font-semibold text-foreground mb-2">Oferta</h3>
              <p className="text-sm text-muted-foreground mb-4">
                O acesso ao guia digital está disponível por apenas <strong className="text-accent font-bold text-lg">199 MT</strong>.
              </p>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
                onClick={handleCheckout}
              >
                Clique no botão abaixo para acessar o guia
                <Play className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </CardContent>
          </Card>

          {/* Aviso médico */}
          <div className="text-center text-xs text-muted-foreground/70 p-4 bg-muted/30 rounded-lg">
            {DISCLAIMER_SHORT}
          </div>
        </div>
      </div>
    </section>
  )
}