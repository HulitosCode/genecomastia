import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export function BeforeAfterSection() {
  const steps = [
    {
      phase: "Fase 1",
      title: "Entenda o Problema",
      items: [
        "Aprenda a distinguir ginecomastia de lipomastia em minutos",
        "Faça o teste rápido de autoavaliação",
        "Saiba quando a cirurgia é realmente necessária",
        "Elimine erros que estão a piorar o problema",
      ],
    },
    {
      phase: "Fase 2",
      title: "Construa o Novo Corpo",
      items: [
        "Plano de treino específico para peitoral (ginásio ou casa)",
        "Exercícios que valorizam visualmente o peito",
        "Progressão em 8 semanas para resultados reais",
        "Dieta estratégica para equilíbrio hormonal",
      ],
    },
    {
      phase: "Fase 3",
      title: "Recupere a Confiança",
      items: [
        "Truques de estilo que funcionam hoje mesmo",
        "Guarda-roupa peça a peça para disfarçar volume",
        "Rotina semanal integrada em 4 semanas",
        "Mentalidade para parar de se esconder",
      ],
    },
  ]

  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-12 sm:py-16 lg:py-24">
      <div className="px-4">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-3 sm:mb-4 bg-primary text-primary-foreground font-bold text-sm">📋 Plano Passo a Passo</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            A Sua Jornada de Transformação
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Nenhuma destas peças funciona isoladamente. É a combinação das quatro que devolve a sua liberdade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-card border-2 border-primary/20 rounded-2xl p-5 sm:p-6 relative hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-4 left-5 sm:left-6">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-md">
                  {step.phase}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mt-4 mb-4 sm:mb-6">{step.title}</h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
