import { AlertTriangle, Ban, Droplets, Dumbbell, HeartCrack, Shirt } from "lucide-react"

export function FearSection() {
  const fears = [
    {
      icon: Shirt,
      text: "Evita ir à praia ou piscina por vergonha de tirar a camisola",
    },
    {
      icon: HeartCrack,
      text: "Sente ansiedade ao escolher roupa no verão — tudo parece grudar no peito",
    },
    {
      icon: Ban,
      text: "Recusa convites sociais por medo de julgamento",
    },
    {
      icon: AlertTriangle,
      text: "Passa o dia a ajustar a roupa para disfarçar o volume",
    },
    {
      icon: Droplets,
      text: "Já experimentou dietas malucas e treinos sem resultado",
    },
    {
      icon: Dumbbell,
      text: "Sente que tentou de tudo, mas o problema nunca desaparece",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-accent/5 to-background py-12 sm:py-16 lg:py-20">
      <div className="px-4">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-balance">
            Se Identifica Com Alguma Destas Situações?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            A ginecomastia afeta <strong className="text-primary">1 em cada 3 homens</strong> em algum momento da vida.
            Você <strong className="text-primary">não está sozinho</strong> — e a culpa <strong className="text-primary">não é sua</strong>.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {fears.map((fear, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-5 sm:p-6 flex items-start gap-3 sm:gap-4 hover:shadow-lg hover:border-accent/50 transition-all duration-300"
            >
              <div className="bg-accent/15 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                <fear.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <p className="font-medium leading-relaxed text-sm sm:text-base">{fear.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
