import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CommercialChairsGrid from "@/components/commercial-chairs-grid"

export const metadata: Metadata = {
  title: "Мебель для заведений и кресла - Клöвер",
  description:
    "Премиальная мебель для коммерческих заведений и кресла от Клöвер. Стиль и долговечность для вашего бизнеса.",
}

export default function CommercialAndChairsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Мебель для заведений и кресла</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная мебель для ресторанов, кафе, отелей и офисов. Кресла премиум-класса для дома и бизнеса.
            </p>
          </div>
        </section>

        <CommercialChairsGrid />
      </main>

      <Footer />
    </div>
  )
}
