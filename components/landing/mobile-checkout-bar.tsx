"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { useState, useEffect } from "react"
import { CHECKOUT_URL, PRODUCT_INFO } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function MobileCheckoutBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollY / docHeight

      // Mostrar após 30% do scroll
      if (scrollPercent > 0.3) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Esconder perto do footer (últimos 15%)
      if (scrollPercent > 0.85) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCheckout = () => {
    if (CHECKOUT_URL !== "COLOCAR_LINK_DO_CHECKOUT_AQUI") {
      window.location.href = CHECKOUT_URL
    }
  }

  if (!isVisible || isHidden) return null

  return (
    <div 
      className={cn(
        "mobile-checkout-bar",
        "animate-slide-up"
      )}
      role="region"
      aria-label="Barra de compra rápida"
    >
      <div className="px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <ShoppingCart className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              <span>Entendendo a Ginecomastia Masculina — Guia Educativo 2026</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-medium line-through text-muted-foreground/60">
                {PRODUCT_INFO.originalPrice} {PRODUCT_INFO.currency}
              </span>
              <span className="text-xl font-bold text-accent">
                {PRODUCT_INFO.price} {PRODUCT_INFO.currency}
              </span>
            </div>
          </div>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-3 whitespace-nowrap shadow-lg"
            onClick={handleCheckout}
          >
            QUERO ACESSAR
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  )
}