import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Dumbbell, Apple, Shirt, CalendarCheck, Brain } from "lucide-react"

export function LearningPathSection() {
  const learningModules = [
    {
      icon: BookOpen,
      title: "Entender o Inimigo",
      description:
        "Ginecomastia vs. Lipomastia — saiba exatamente com o que está a lidar e quando a cirurgia é realmente necessária.",
    },
    {
      icon: Dumbbell,
      title: "Treino de Choque Peitoral",
      description:
        "Plano completo para ginásio e casa, sem equipamento. Exercícios específicos para levantar e definir o peitoral.",
    },
    {
      icon: Apple,
      title: "Dieta e Saúde Hormonal",
      description:
        "Estratégia nutricional para otimizar testosterona e reduzir estrogénio. Alimentos a incluir e a evitar.",
    },
    {
      icon: Shirt,
      title: "Guia de Estilo Imediato",
      description:
        "Truques visuais usados por especialistas em imagem masculina para camuflar volume hoje mesmo.",
    },
    {
      icon: CalendarCheck,
      title: "Rotina Semanal Integrada",
      description:
        "Plano de 4 semanas que junta treino, nutrição e estilo num só plano fácil de seguir.",
    },
    {
      icon: Brain,
      title: "Mentalidade e Confiança",
      description:
        "Mudanças de mentalidade para parar de se esconder e começar a viver sem vergonha do corpo.",
    },
  ]

  return (
    <section className="px-4 py-12 sm:py-16 lg:py-24">
      <div className="text-center mb-8 sm:mb-12">
        <Badge className="mb-3 sm:mb-4 bg-primary text-primary-foreground font-bold text-sm">📘 Conteúdo Completo</Badge>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-balance">
          O Que Encontra Neste Guia
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          6 módulos práticos que atacam o problema em todas as frentes: corpo, hormônios, imagem e mente
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {learningModules.map((item, index) => (
          <Card key={index} className="p-5 sm:p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="bg-primary/15 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center">
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                Módulo {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
