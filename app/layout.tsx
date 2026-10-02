import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Entendendo a Ginecomastia Masculina | Guia Educativo 2026",
  description: "Guia educativo sobre ginecomastia masculina: diferenças entre ginecomastia e pseudoginecomastia, possíveis causas, avaliação médica, exercício, alimentação e saúde.",
  keywords: [
    "ginecomastia masculina",
    "guia educativo ginecomastia",
    "pseudoginecomastia",
    "saúde masculina",
    "aumento peito masculino",
    "exercício ginecomastia",
    "alimentação saúde masculina"
  ],
  authors: [{ name: "Entendendo a Ginecomastia Masculina" }],
  creator: "Entendendo a Ginecomastia Masculina",
  publisher: "Entendendo a Ginecomastia Masculina",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://entendendoaginecomastia.com",
    title: "Entendendo a Ginecomastia Masculina | Guia Educativo 2026",
    description: "Guia educativo sobre ginecomastia masculina: diferenças entre ginecomastia e pseudoginecomastia, possíveis causas, avaliação médica, exercício, alimentação e saúde.",
    siteName: "Entendendo a Ginecomastia Masculina",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Entendendo a Ginecomastia Masculina - Guia Educativo 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entendendo a Ginecomastia Masculina | Guia Educativo 2026",
    description: "Guia educativo sobre ginecomastia masculina: diferenças entre ginecomastia e pseudoginecomastia, possíveis causas, avaliação médica, exercício, alimentação e saúde.",
    images: ["/og-image.png"],
    creator: "@ginecomastia_guia",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#1e2a4a",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT">
      <head>
        {/* JSON-LD para produto digital */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Entendendo a Ginecomastia Masculina — Guia Educativo 2026",
              description: "Guia educativo digital sobre ginecomastia masculina: diferenças entre ginecomastia e pseudoginecomastia, possíveis causas, avaliação médica, exercício, alimentação e saúde.",
              brand: {
                "@type": "Brand",
                name: "Entendendo a Ginecomastia Masculina",
              },
              offers: {
                "@type": "Offer",
                url: "https://entendendoaginecomastia.com",
                priceCurrency: "MZN",
                price: "199",
                availability: "https://schema.org/InStock",
              },
              category: "Livro Digital Educativo",
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        {/* Google Analytics - substitua G-XXXXXXXXXX pelo seu ID real */}
        {/* <GoogleAnalytics gaId="G-XXXXXXXXXX" /> */}
      </body>
    </html>
  )
}