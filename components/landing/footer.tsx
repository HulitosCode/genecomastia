"use client"

import { Badge } from "@/components/ui/badge"
import { Stethoscope, Copyright } from "lucide-react"

const DISCLAIMER_SHORT = "Este material possui finalidade exclusivamente educativa e não substitui avaliação, diagnóstico ou tratamento realizado por profissional de saúde."

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="bg-muted/30 border-t border-border/50 py-12 sm:py-16"
      role="contentinfo"
    >
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <span className="font-bold text-lg text-foreground">Entendendo a Ginecomastia</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Guia educativo profissional sobre ginecomastia masculina. Informação responsável para decisões conscientes.
            </p>
          </div>

          {/* Links rápidos */}
          <nav aria-label="Links rápidos">
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#problema" className="text-muted-foreground hover:text-primary transition-colors">O Problema</a></li>
              <li><a href="#vsl" className="text-muted-foreground hover:text-primary transition-colors">Vídeo Explicativo</a></li>
              <li><a href="#aprender" className="text-muted-foreground hover:text-primary transition-colors">O Que Vai Aprender</a></li>
              <li><a href="#ebook" className="text-muted-foreground hover:text-primary transition-colors">Apresentação do Guia</a></li>
              <li><a href="#oferta" className="text-muted-foreground hover:text-primary transition-colors">Oferta</a></li>
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Copyright className="h-3.5 w-3.5" aria-hidden="true" />
            <span>© {currentYear} Entendendo a Ginecomastia Masculina. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-xs px-2 py-1">
              Conteúdo Educativo
            </Badge>
            <Badge variant="outline" className="text-xs px-2 py-1">
              Não é diagnóstico médico
            </Badge>
          </div>
        </div>

        {/* Disclaimer final */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/70 font-medium">
            {DISCLAIMER_SHORT}
          </p>
        </div>
      </div>
    </footer>
  )
}