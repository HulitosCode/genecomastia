"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Stethoscope, UserCheck } from "lucide-react"

const DISCLAIMER_FULL = `Este produto possui finalidade exclusivamente educativa e informativa. Não fornece diagnóstico, prescrição ou tratamento médico individualizado e não substitui consulta com médico, nutricionista, psicólogo ou outro profissional de saúde habilitado.

Caso apresente sintomas, alterações recentes, dor, nódulos, secreção pelo mamilo, alterações hormonais ou outras preocupações relacionadas à sua saúde, procure avaliação profissional.`

export function MedicalDisclaimerSection() {
  return (
    <section 
      id="aviso-medico" 
      className="bg-background py-12 sm:py-16"
      aria-labelledby="aviso-medico-title"
    >
      <div className="px-4 mx-auto max-w-3xl">
        <Card className="border-destructive/20 bg-destructive/5 shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-destructive" aria-hidden="true" />
              </div>
              <div>
                <Badge variant="destructive" className="mb-1 text-xs">
                  AVISO IMPORTANTE
                </Badge>
                <CardTitle className="text-xl font-bold text-destructive" id="aviso-medico-title">
                  Aviso Médico Obrigatório
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p className="text-foreground font-medium">
              {DISCLAIMER_FULL.split('\n\n')[0]}
            </p>
            <p>
              {DISCLAIMER_FULL.split('\n\n')[1]}
            </p>
            <div className="pt-2 border-t border-border/50 flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5 text-xs">
                <Stethoscope className="h-3.5 w-3.5 text-destructive" aria-hidden="true" />
                <span>Procure avaliação médica</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <UserCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                <span>Não substitui consulta profissional</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <AlertTriangle className="h-3.5 w-3.5 text-amber-600" aria-hidden="true" />
                <span>Finalidade exclusivamente educativa</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}