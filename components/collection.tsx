import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Collection() {
  const products = [
    {
      id: 1,
      name: "Модульные системы",
      price: "от 89 900 ₽",
      image: "/images/modular-systems.png",
      href: "/catalog/modular-systems",
    },
    {
      id: 2,
      name: "Угловые диваны",
      price: "от 124 900 ₽",
      image: "/images/corner-sofa.png",
      href: "/catalog/corner-sofas",
    },
    {
      id: 3,
      name: "Прямые диваны",
      price: "от 109 900 ₽",
      image: "/images/straight-sofas.png",
      href: "/catalog/straight-sofas",
    },
    {
      id: 4,
      name: "Мебель для заведений и кресла",
      price: "от 53 000 ₽",
      image: "/images/commercial-and-chairs.png",
      href: "/catalog/commercial-and-chairs",
    },
    {
      id: 5,
      name: "В наличии",
      price: "от 53 000 ₽",
      image: "/images/storefront.png",
      href: "/catalog-sale",
    },
  ]

  return (
    <section id="catalog" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог популярных моделей</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите идеальный диван из нашей коллекции премиальной мебели
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 md:gap-8 justify-items-center">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-background border border-border rounded-xl overflow-hidden soft-shadow hover:shadow-lg transition-shadow w-full max-w-sm hover-bronze-outline ${
                product.name === "В наличии"
                  ? "ring-2 ring-green-500/30 bg-gradient-to-br from-green-50/50 to-background relative"
                  : ""
              } ${
                /* Position items in centered layout: first 3 items span 2 columns each, last 2 items positioned between them */
                products.length === 5 && index <= 2
                  ? "xl:col-span-2"
                  : products.length === 5 && index === 3
                    ? "xl:col-start-2 xl:col-span-2"
                    : products.length === 5 && index === 4
                      ? "xl:col-start-4 xl:col-span-2"
                      : ""
              }`}
            >
              {product.name === "В наличии" && <div className="absolute -top-2 -right-2 z-10"></div>}

              <Link href={product.href} className="block">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.name === "В наличии" && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-lg font-semibold text-sm shadow-lg">
                      ✓ В наличии
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-sans text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-end">
                    <Button
                      className={
                        product.name === "В наличии"
                          ? "bg-green-500 hover:bg-green-600 text-white shadow-lg"
                          : "bg-accent hover:bg-accent/90 text-accent-foreground"
                      }
                    >
                      {product.name === "В наличии" ? "Купить сейчас" : "Купить"}
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
