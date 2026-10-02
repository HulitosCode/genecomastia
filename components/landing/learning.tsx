"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Zap, 
  Search, 
  Stethoscope, 
  Dumbbell, 
  Apple, 
  Moon, 
  Heart 
} from "lucide-react"

const learningCards = [
  {
    number: "01",
    title: "Ginecomastia x Pseudoginecomastia",
    description: "Explicar a diferença entre tecido glandular e acumulação de gordura de forma clara e visual.",
    icon: Brain,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    number: "02",
    title: "Possíveis causas",
    description: "Conhecer fatores que podem estar relacionados ao aumento das mamas masculinas.",
    icon: Search,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    number: "03",
    title: "Hormonas e prolactina",
    description: "Compreender de forma educativa como determinadas alterações hormonais podem estar relacionadas.",
    icon: Zap,
    color: "text-amber-600",
    bgColor: "bg-amber-100 dark:bg-amber-900/20",
  },
  {
    number: "04",
    title: "Quando procurar um médico",
    description: "Conhecer sinais e situações que justificam avaliação profissional.",
    icon: Stethoscope,
    color: "text-red-600",
    bgColor: "bg-red-100 dark:bg-red-900/20",
  },
  {
    number: "05",
    title: "Exercício físico",
    description: "Entender o que treino pode melhorar na composição corporal e aquilo que não consegue tratar.",
    icon: Dumbbell,
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    number: "06",
    title: "Alimentação",
    description: "Conhecer princípios gerais relacionados à alimentação equilibrada e controlo do peso.",
    icon: Apple,
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900/20",
  },
  {
    number: "07",
    title: "Hábitos e saúde",
    description: "Informações sobre sono, álcool, esteroides e outros fatores.",
    icon: Moon,
    color: "text-violet-600",
    bgColor: "bg-violet-100 dark:bg-violet-900/20",
  },
  {
    number: "08",
    title: "Imagem corporal e bem-estar",
    description: "Estratégias para lidar melhor com a preocupação relacionada à aparência corporal.",
    icon: Heart,
    color: "text-pink-600",
    bgColor: "bg-pink-100 dark:bg-pink-900/20",
  },
] as const

export function LearningSection() {
  return (
    <section 
      id="aprender" 
      className="bg-muted/30 py-16 sm:py-20 lg:py-24"
      aria-labelledby="aprender-title"
    >
      <div className="px-4 mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 animate-fade-in">
          <Badge className="mb-4 inline-flex bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-semibold tracking-wide">
            O QUE VOCÊ VAI ENCONTRAR
          </Badge>
          <h2 
            id="aprender-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground"
          >
            O que você vai encontrar no guia?
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Conteúdo organizado em 8 pilares essenciais para você compreender o assunto com clareza.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningCards.map((card, index) => (
            <Card 
              key={card.number} 
              className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up h-full"
              style={{ animationDelay: `${100 + index * 80}ms` }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Número e ícone */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl font-bold text-muted-foreground/30">{card.number}</span>
                  <div className={`${card.bgColor} ${card.color} p-3 rounded-xl`}>
                    <card.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug flex-1">
                  {card.title}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}