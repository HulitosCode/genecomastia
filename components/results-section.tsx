"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos M.",
      age: 28,
      location: "Maputo",
      text: "Durante anos evitei ir à praia. Depois deste guia, comecei a usar camisola de compressão e finalmente saí com os amigos sem vergonha. O treino em casa já me deu resultados visíveis em 6 semanas.",
      rating: 5,
    },
    {
      name: "Miguel A.",
      age: 35,
      location: "Beira",
      text: "Pensava que só a cirurgia resolveria. O teste de autoavaliação mostrou que era lipomastia. Com a dieta e o treino do Módulo 2, o meu peito mudou completamente. Economizei milhares de meticals.",
      rating: 5,
    },
    {
      name: "André S.",
      age: 22,
      location: "Nampula",
      text: "A parte de estilo foi uma revolução. Nunca imaginei que as camisas certas pudessem fazer tanta diferença. Hoje visto-me com confiança no trabalho e nas redes sociais.",
      rating: 5,
    },
    {
      name: "Pedro R.",
      age: 41,
      location: "Quelimane",
      text: "O plano semanal integrado é genial. Treino, dieta e estilo tudo num só cronograma. Não preciso de pensar — é só seguir. Já perdi 8kg e o peito está muito melhor.",
      rating: 5,
    },
    {
      name: "Fernando D.",
      age: 30,
      location: "Xai-Xai",
      text: "A parte de mentalidade mudou a minha vida. Percebi que o julgamento que mais pesava era o meu próprio. Hoje saio à praia sem pensar duas vezes. Recomendo a todos os homens.",
      rating: 5,
    },
    {
      name: "Ricardo P.",
      age: 26,
      location: "Inhambane",
      text: "Comecei com as flexões em casa porque não tinha ginásio perto. Em 2 meses já tinha resultados. Agora inscrevi-me no ginásio e estou a progredir ainda mais. O guia vale cada metical.",
      rating: 5,
    },
  ]

  return (
    <section className="bg-gradient-to-b from-muted/30 to-background py-12 sm:py-16 lg:py-24">
      <div className="px-4">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-3 sm:mb-4 bg-accent text-accent-foreground font-bold text-sm">💬 Histórias Reais</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Quem Já Transformou a Sua Confiança
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Homens reais em Moçambique que decidiram agir e já colhem os resultados
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-5 sm:p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/30 hover:scale-[1.02]">
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <Quote className="h-7 w-7 sm:h-8 sm:w-8 text-accent/20 mb-2" />

              <p className="text-muted-foreground leading-relaxed mb-4 italic text-sm sm:text-base">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="border-t pt-3 sm:pt-4">
                <p className="font-bold text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {testimonial.age} anos — {testimonial.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
