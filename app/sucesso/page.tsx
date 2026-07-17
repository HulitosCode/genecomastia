import { CheckCircle, Download, ArrowLeft, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 sm:px-6">
      <div className="w-full max-w-md text-center">

        <div className="mb-6 flex justify-center">
          <div className="bg-primary/10 p-4 rounded-full">
            <CheckCircle className="h-14 w-14 text-primary" />
          </div>
        </div>

        <h1 className="mb-3 text-2xl sm:text-3xl font-bold tracking-tight">
          Pagamento Confirmado!
        </h1>

        <p className="mb-6 text-sm sm:text-base text-muted-foreground">
          Parabéns! O seu acesso ao guia está liberado. Descarregue o e-book abaixo.
        </p>

        <div className="mb-6">
          <Image
            src="/capa.png"
            alt="E-book Ginecomastia"
            width={160}
            height={224}
            className="w-24 sm:w-28 h-auto mx-auto rounded-lg shadow-lg mb-4"
          />
          <p className="text-xs text-muted-foreground">6 Módulos · 40+ páginas</p>
        </div>

        <a
          href="/O-Guia-Completo-da-Ginecomastia-Masculina.pdf"
          download
        >
          <Button className="w-full text-base px-6 py-5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20 transition-all duration-300">
            <Download className="mr-2 h-5 w-5" />
            Descarregar E-book Agora
          </Button>
        </a>

        <p className="text-xs text-muted-foreground/70 mt-3">
          Salve este link para aceder ao conteúdo sempre que precisar.
        </p>

        <div className="mt-8 pt-6 border-t border-border/50">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-sm">
              <ArrowLeft className="h-4 w-4" />
              Voltar à Página Inicial
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
