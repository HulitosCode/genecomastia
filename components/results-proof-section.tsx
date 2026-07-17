import { Star } from "lucide-react"
import Image from "next/image"

export function ResultsProofSection() {
  const testimonials = [
    {
      name: "Carlos M., 28",
      location: "Maputo",
      text: "Em 6 semanas já tinha resultados visíveis. Hoje saio à praia sem vergonha.",
    },
    {
      name: "Miguel A., 35",
      location: "Beira",
      text: "Pensava que só a cirurgia resolveria. Economizei milhares de meticals.",
    },
    {
      name: "Pedro R., 41",
      location: "Quelimane",
      text: "O plano semanal é genial. Já perdi 8kg e o peito está muito melhor.",
    },
  ]

  return (
    <section className="bg-muted/30 py-12 sm:py-16 lg:py-20">
      <div className="px-4">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-8 sm:mb-10">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Resultados Reais</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Veja a Transformação
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
            <div className="flex justify-center">
              <Image
                src="/img1.png"
                alt="Antes e depois — resultados reais da ginecomastia"
                width={600}
                height={400}
                className="w-full max-w-md h-auto rounded-xl shadow-xl"
              />
            </div>

            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-card border border-border/60 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">
                    {t.name} — {t.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-primary">6</p>
              <p className="text-xs text-muted-foreground">Módulos</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-primary">40+</p>
              <p className="text-xs text-muted-foreground">Páginas</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-primary">7</p>
              <p className="text-xs text-muted-foreground">Dias garantia</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
