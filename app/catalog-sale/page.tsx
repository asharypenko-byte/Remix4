import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CatalogGrid from "@/components/catalog-grid"

export const metadata: Metadata = {
  title: "Каталог диванов - Клöвер",
  description:
    "Полный каталог премиальных диванов от Клöвер. Угловые, прямые, модульные системы и мебель для заведений.",
}

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero секция каталога */}
        <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Каталог диванов в наличии </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {"Откройте для себя нашу коллекцию премиальных диванов.\nОт классических прямых моделей до современных модульных систем."}
            </p>
          </div>
        </section>

        <CatalogGrid />
      </main>

      <Footer />
    </div>
  )
}
