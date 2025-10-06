import type React from "react"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import ScrollToTop from "@/components/scroll-to-top"

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const openSans = Open_Sans({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Клöвер | Диваны премиум-качества с доставкой по России",
  description:
    "Более 500 моделей диванов премиум-качества в наличии. От производителя — без переплат. Бесплатная доставка, рассрочка 0%, гарантия 5 лет.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
