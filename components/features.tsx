import { Truck, CreditCard, Shield, Users } from "lucide-react"

export default function Features() {
  return (
    <section className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-background p-6 rounded-xl soft-shadow text-center">
            <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Truck className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-sans text-lg font-semibold mb-2">Доставка</h3>
            <p className="text-muted-foreground text-sm">По всей России для заказов от 50 000 ₽</p>
          </div>

          <div className="bg-background p-6 rounded-xl soft-shadow text-center">
            <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <CreditCard className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-sans text-lg font-semibold mb-2">Рассрочка 0%</h3>
            <p className="text-muted-foreground text-sm">До 24 месяцев без переплат и скрытых комиссий</p>
          </div>

          <div className="bg-background p-6 rounded-xl soft-shadow text-center">
            <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-sans text-lg font-semibold mb-2">Гарантия 5 лет</h3>
            <p className="text-muted-foreground text-sm">Полная гарантия на каркас и механизмы</p>
          </div>

          <div className="bg-background p-6 rounded-xl soft-shadow text-center">
            <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-sans text-lg font-semibold mb-2">Индивидуальный подбор</h3>
            <p className="text-muted-foreground text-sm">Персональная консультация дизайнера</p>
          </div>
        </div>
      </div>
    </section>
  )
}
