import { Search, ShoppingCart, Truck, Settings } from "lucide-react"

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: "Выбор модели",
      description: "Подберите идеальный диван из нашего каталога или закажите индивидуальный дизайн",
    },
    {
      icon: ShoppingCart,
      title: "Заказ",
      description: "Свяжитесь с нашими менеджерами для консультации и оформления заказа",
    },
    {
      icon: Truck,
      title: "Доставка",
      description: "Доставка по всей России в удобное для вас время",
    },
    {
      icon: Settings,
      title: "Установка",
      description: "Профессиональная сборка и установка мебели в вашем доме",
    },
  ]

  return (
    <section id="process" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Простой и понятный процесс от выбора до установки</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-background p-6 rounded-xl soft-shadow text-center h-full flex flex-col">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-sans text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm flex-1">{step.description}</p>
              </div>
              {/* Стрелка между шагами */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-accent/30"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-accent/30 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
