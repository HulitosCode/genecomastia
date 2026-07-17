import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "CONFIANÇA · CORPO · LIBERDADE — O Guia Completo da Ginecomastia Masculina",
  description:
    "O guia definitivo para homens que querem vencer a ginecomastia: treino, nutrição, estilo e confiança. De 365 MT por apenas 199 MT. Oferta por tempo limitado.",
  openGraph: {
    title: "CONFIANÇA · CORPO · LIBERDADE — O Guia Completo da Ginecomastia Masculina",
    description: "Resgate a sua confiança, defina o peitoral e vestir o que quiser sem vergonha. Guia completo com treino, nutrição e estilo.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <GoogleAnalytics gaId="G-KG5X0KW8ZT" />
      </body>
    </html>
  )
}
