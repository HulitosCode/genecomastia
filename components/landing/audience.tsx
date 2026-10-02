"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

const forWhom = [
  "percebeu aumento da região do peito;",
  "quer compreender melhor a ginecomastia;",
  "tem dúvidas entre gordura e tecido glandular;",
  "procura informação educativa organizada;",
  "quer entender quando procurar avaliação médica;",
  "deseja aprender sobre exercício e alimentação sem falsas promessas.",
] as const

const notForWhom = [
  "diagnóstico médico;",
  "prescrição de medicamentos;",
  "tratamento individualizado;",
  "promessa de cura;",
  "substituto de consulta médica.",
] as const

function CheckItem({ text, icon: Icon, color }: { text: string; icon: React.ComponentType<{ className?: string }>; color: string }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <Icon className={cn("h-5 w-5 flex-shrink-0 mt-0.5", color)} aria-hidden="true" />
      <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
    </div>
  )
}

export function AudienceSection() {
  return (
    <section 
      id="publico" 
      className="bg-muted/30 py-16 sm:py-20 lg:py-24"
      aria-labelledby="publico-title"
    >
      <div className="px-4 mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 animate-fade-in">
          <Badge className="mb-4 inline-flex bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-semibold tracking-wide">
            PARA QUEM É ESTE GUIA?
          </Badge>
          <h2 
            id="publico-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground"
          >
            Para quem é este guia?
          </h2>
        </div>

        {/* Duas colunas */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* É PARA QUEM */}
          <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20 animate-slide-up delay-100">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Check className="h-6 w-6 text-green-600 dark:text-green-400" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl font-bold text-green-800 dark:text-green-200">É PARA QUEM</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-1">
              {forWhom.map((item, index) => (
                <CheckItem 
                  key={index} 
                  text={item} 
                  icon={Check} 
                  color="text-green-600 dark:text-green-400" 
                />
              ))}
            </CardContent>
          </Card>

          {/* NÃO É */}
          <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20 animate-slide-up delay-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <X className="h-6 w-6 text-red-600 dark:text-red-400" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl font-bold text-red-800 dark:text-red-200">NÃO É</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-1">
              {notForWhom.map((item, index) => (
                <CheckItem 
                  key={index} 
                  text={item} 
                  icon={X} 
                  color="text-red-600 dark:text-red-400" 
                />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Resumo */}
        <div className="mt-10 text-center animate-slide-up delay-300">
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Este guia foi feito para quem busca <strong className="text-foreground">informação confiável e organizada</strong> para tomar decisões mais conscientes sobre a própria saúde, sem promessas milagrosas.
          </p>
        </div>
      </div>
    </section>
  )
}