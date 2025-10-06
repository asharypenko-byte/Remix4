import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CornerSofasGrid from "@/components/corner-sofas-grid"

export const metadata: Metadata = {
  title: "Угловые диваны - Клöвер",
  description: "Премиальные угловые диваны от Клöвер. Максимальный комфорт и стиль для вашей гостиной.",
}

export default function CornerSofasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Угловые диваны</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Угловые диваны премиум-класса для максимального комфорта. Идеальное решение для просторных гостиных и
              семейного отдыха.
            </p>
          </div>
        </section>

        <CornerSofasGrid />
      </main>

      <Footer />
    </div>
  )
}
