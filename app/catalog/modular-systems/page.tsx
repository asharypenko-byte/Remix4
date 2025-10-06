import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ModularSystemsGrid from "@/components/modular-systems-grid"

export const metadata: Metadata = {
  title: "Модульные системы - Клöвер",
  description: "Премиальные модульные диваны от Клöвер. Создайте идеальную конфигурацию для вашего пространства.",
}

export default function ModularSystemsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Модульные системы</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Создайте идеальную конфигурацию дивана для вашего пространства. Модульные системы позволяют легко менять
              форму и размер мебели.
            </p>
          </div>
        </section>

        <ModularSystemsGrid />
      </main>

      <Footer />
    </div>
  )
}
