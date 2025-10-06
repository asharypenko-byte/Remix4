import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative hero-pattern">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Диваны премиум-качества с доставкой по России
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Более 500 моделей в наличии. От производителя — без переплат.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#catalog"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors text-lg"
              >
                Перейти в каталог
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/79647634277"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-accent text-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors text-lg"
              >
                Получить консультацию
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden soft-shadow">
            <img
              src="/stylish-premium-sofa.png"
              alt="Стильный диван премиум-качества в современном интерьере"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm p-4 rounded-lg soft-shadow">
              {/* обновляю название модели в hero секции */}
              <p className="font-sans text-lg font-semibold">Премиальное качество в каждой детали</p>
              <p className="text-sm text-muted-foreground">Коллекция 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
