"use client"

import { HeroSection } from "@/components/hero-section"
import { ResultsProofSection } from "@/components/results-proof-section"
import { CTASection } from "@/components/cta-section"

export default function GynecomastiaLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full mx-auto max-w-6xl">
        <HeroSection />
        <ResultsProofSection />
        <CTASection />

        <footer className="py-6 border-t border-border/50">
          <div className="px-4 text-center text-xs text-muted-foreground">
            <p>CONFIANÇA · CORPO · LIBERDADE — © 2026</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
