"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, ChevronDown } from "lucide-react"

const catalogItems = [
  { name: "Модульные системы", href: "/catalog/modular-systems" },
  { name: "Угловые диваны", href: "/catalog/corner-sofas" },
  { name: "Прямые диваны", href: "/catalog/straight-sofas" },
  { name: "Мебель для заведений и кресла", href: "/catalog/commercial-and-chairs" },
  { name: "В наличии", href: "/catalog-sale" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)
  const catalogTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  const handleCatalogMouseEnter = () => {
    if (catalogTimeoutRef.current) {
      clearTimeout(catalogTimeoutRef.current)
      catalogTimeoutRef.current = null
    }
    setIsCatalogOpen(true)
  }

  const handleCatalogMouseLeave = () => {
    catalogTimeoutRef.current = setTimeout(() => {
      setIsCatalogOpen(false)
    }, 300)
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault()
      const element = document.getElementById(targetId)
      if (element) {
        const headerOffset = 80 // Height of sticky header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border soft-shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-sans text-3xl font-bold tracking-tight text-black drop-shadow-sm">
            КЛ<span className="text-accent">Ö</span>ВЕР
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="relative" onMouseEnter={handleCatalogMouseEnter} onMouseLeave={handleCatalogMouseLeave}>
            <button className="flex items-center text-sm font-medium hover:text-accent transition-colors">
              Каталог
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isCatalogOpen && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="bg-white rounded-lg shadow-lg border border-border py-2">
                  {catalogItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a
            href="/#promotions"
            onClick={(e) => handleSmoothScroll(e, "promotions")}
            className="text-sm font-medium hover:text-accent transition-colors cursor-pointer"
          >
            Акции
          </a>
          <a
            href="/#testimonials"
            onClick={(e) => handleSmoothScroll(e, "testimonials")}
            className="text-sm font-medium hover:text-accent transition-colors cursor-pointer"
          >
            Отзывы
          </a>
          <a
            href="/#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="text-sm font-medium hover:text-accent transition-colors cursor-pointer"
          >
            Контакты
          </a>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="tel:+79647634277"
            className="flex items-center text-sm font-medium hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            +7 (964) 763-42-77
          </a>
          <Link
            href="https://wa.me/79647634277"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors rounded-lg"
          >
            Связаться с нами
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="space-y-2">
              <button
                onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                className="flex items-center justify-between w-full text-sm font-medium py-2 hover:text-accent transition-colors"
              >
                Каталог
                <ChevronDown className={`h-4 w-4 transition-transform ${isCatalogOpen ? "rotate-180" : ""}`} />
              </button>
              {isCatalogOpen && (
                <div className="pl-4 space-y-2">
                  {catalogItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm py-2 text-muted-foreground hover:text-accent transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a
              href="/#promotions"
              onClick={(e) => handleSmoothScroll(e, "promotions")}
              className="text-sm font-medium py-2 hover:text-accent transition-colors cursor-pointer"
            >
              Акции
            </a>
            <a
              href="/#testimonials"
              onClick={(e) => handleSmoothScroll(e, "testimonials")}
              className="text-sm font-medium py-2 hover:text-accent transition-colors cursor-pointer"
            >
              Отзывы
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="text-sm font-medium py-2 hover:text-accent transition-colors cursor-pointer"
            >
              Контакты
            </a>
            <a
              href="tel:+79647634277"
              className="flex items-center text-sm font-medium py-2 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-4 w-4 mr-2" />
              +7 (964) 763-42-77
            </a>
            <Link
              href="https://wa.me/79647634277"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors rounded-lg text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
