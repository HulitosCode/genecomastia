import { CheckCircle2, Shield, Clock, Heart, Lock, FileText } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: FileText,
      title: "Guia Completo e Prático",
      description: "6 módulos com mais de 40 páginas de conteúdo accionável. Cada módulo termina com passos práticos para aplicar imediatamente.",
    },
    {
      icon: Shield,
      title: "Estratégia Multi-Frente",
      description: "Não é só treino. É treino + nutrição + estilo + mentalidade. A combinação que realmente funciona para resolver o problema de raiz.",
    },
    {
      icon: Clock,
      title: "Resultados Visíveis em Semanas",
      description: "Os primeiros resultados aparecem entre 4 a 8 semanas. Mudanças na postura e confiança desde a primeira semana.",
    },
    {
      icon: Heart,
      title: "Para Homens de Todas as Idades",
      description: "Seja pubertade, stress ou genética — o guia adapta-se ao seu caso. Funciona em casa ou no ginásio.",
    },
    {
      icon: Lock,
      title: "Sem Dieta Maluca ou Sofrimento",
      description: "Regra 80/20: mantenha o alinhamento 80% do tempo. Os outros 20% são para viver sem culpa.",
    },
    {
      icon: CheckCircle2,
      title: "Garantia de 7 Dias",
      description: "Se não gostar do conteúdo por qualquer motivo, devolvemos 100% do seu dinheiro. Sem perguntas.",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-12 sm:py-16 lg:py-24">
      <div className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-balance">
              Por Que Este Guia Funciona
            </h2>
            <p className="text-base sm:text-lg lg:text-xl opacity-90">
              A abordagem mais completa e realista para qualquer homem que queira parar de se esconder
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 bg-white/10 backdrop-blur-sm p-4 sm:p-5 rounded-xl hover:bg-white/15 transition-all duration-300">
                <benefit.icon className="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 text-accent" />
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-1">{benefit.title}</h3>
                  <p className="opacity-85 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
