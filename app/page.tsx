import { HeroSection } from "@/components/landing/hero"
import { ProblemSection } from "@/components/landing/problem"
import { VSLVideo } from "@/components/landing/vsl-video"
import { LearningSection } from "@/components/landing/learning"
import { MythsSection } from "@/components/landing/myths"
import { AudienceSection } from "@/components/landing/audience"
import { EbookPreviewSection } from "@/components/landing/ebook-preview"
import { ContentsSection } from "@/components/landing/contents"
import { OfferSection } from "@/components/landing/offer"
import { FAQSection } from "@/components/landing/faq"
import { FinalCTASection } from "@/components/landing/final-cta"
import { MedicalDisclaimerSection } from "@/components/landing/medical-disclaimer"
import { MobileCheckoutBar } from "@/components/landing/mobile-checkout-bar"
import { FooterSection } from "@/components/landing/footer"

export default function GynecomastiaLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full mx-auto max-w-7xl">
        {/* Hero - Primeira dobra forte */}
        <HeroSection />

        {/* Identificação do Problema */}
        <ProblemSection />

        {/* VSL */}
        <VSLVideo />

        {/* O que vai aprender */}
        <LearningSection />

        {/* Mito ou Realidade */}
        <MythsSection />

        {/* Para quem é */}
        <AudienceSection />

        {/* Apresentação do E-book */}
        <EbookPreviewSection />

        {/* Conteúdo do E-book */}
        <ContentsSection />

        {/* Oferta */}
        <OfferSection />

        {/* FAQ */}
        <FAQSection />

        {/* CTA Final */}
        <FinalCTASection />

        {/* Aviso Médico */}
        <MedicalDisclaimerSection />

        {/* Footer */}
        <FooterSection />
      </div>

      {/* Barra de checkout fixa no mobile */}
      <MobileCheckoutBar />
    </div>
  )
}