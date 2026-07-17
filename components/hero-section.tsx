"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Clock } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const handlePayment = async () => {
    const paymentRes = await fetch('/api/payment', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: 199,
        reference: `GINECO${Date.now()}`,
        description: "E-book — O Guia Completo da Ginecomastia Masculina"
      })
    })

    const paymentData = await paymentRes.json()

    if (paymentData?.data?.checkout_url) {
      window.location.href = paymentData.data.checkout_url
    }
  }

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="px-4 pt-10 pb-8 sm:pt-14 sm:pb-10 lg:pt-20 lg:pb-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center max-w-5xl mx-auto">

          <div className="space-y-5 order-2 lg:order-1">
            <Badge className="bg-accent/10 text-accent border-accent/20 px-3 py-1 text-xs font-semibold">
              <Clock className="inline h-3 w-3 mr-1" />
              EDIÇÃO PRÁTICA 2026
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              Pare de se Esconder.
              <span className="text-primary block mt-1">Recupere a Confiança.</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg">
              O guia definitivo com treino, nutrição, estilo e mentalidade para resolver a ginecomastia de vez — sem cirurgia.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-4 w-4 text-primary font-bold text-xs">⚡</span>
                <span>Acesso imediato</span>
              </div>
            </div>

            <div className="pt-1">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-xl font-medium line-through text-muted-foreground/60">365 MT</span>
                <span className="text-4xl sm:text-5xl font-bold text-accent">199 MT</span>
                <Badge variant="destructive" className="text-xs font-bold px-2 py-0.5">
                  -45%
                </Badge>
              </div>

              <Button
                size="lg"
                className="w-full sm:w-auto text-base px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-xl shadow-accent/20 transition-all duration-300 hover:scale-[1.02]"
                onClick={handlePayment}
              >
                Garantir Meu Guia Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-muted-foreground/70 mt-2">
                Pagamento seguro via PaySuite
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
              <Image
                src="/capa.png"
                alt="O Guia Completo da Ginecomastia Masculina"
                width={400}
                height={560}
                className="w-full h-auto drop-shadow-2xl rounded-xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
