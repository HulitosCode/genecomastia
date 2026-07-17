"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Clock } from "lucide-react"
import Image from "next/image"

export function CTASection() {
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
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="px-4">
        <div className="max-w-3xl mx-auto text-center">

          <Badge className="mb-4 sm:mb-5 text-xs px-3 py-1 bg-accent/10 text-accent border-accent/20 font-semibold">
            <Clock className="inline h-3 w-3 mr-1" />
            OFERTA POR TEMPO LIMITADO
          </Badge>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">
            Pronto Para a Mudança?
          </h2>

          <p className="text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">
            Cada dia sem agir é mais um dia a viver com vergonha. Invista em si mesmo por apenas 199 MT.
          </p>

          <div className="flex justify-center mb-6 sm:mb-8">
            <Image
              src="/capa.png"
              alt="E-book Ginecomastia"
              width={200}
              height={280}
              className="w-28 sm:w-32 h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex items-baseline justify-center gap-3 mb-5">
            <span className="text-lg font-medium line-through text-muted-foreground/50">365 MT</span>
            <span className="text-4xl sm:text-5xl font-bold text-accent">199 MT</span>
          </div>

          <Button
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg px-10 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-xl shadow-accent/20 transition-all duration-300 hover:scale-[1.02]"
            onClick={handlePayment}
          >
            Garantir Meu Guia Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              Garantia 7 dias
            </span>
            <span className="flex items-center gap-1.5">
              <span className="font-bold text-xs">⚡</span>
              Acesso imediato
            </span>
            <span className="flex items-center gap-1.5">
              Pagamento seguro
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
