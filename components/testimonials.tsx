"use client"

import { Star } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useState } from "react"
import Autoplay from "embla-carousel-autoplay"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Анна",
      content:
        "Заказывала модульные системы для гостиной. Качество превзошло все ожидания! Очень удобный, красивый и качественный. Доставили точно в срок, собрали аккуратно. Рекомендую!",
      rating: 5,
    },
    {
      id: 2,
      name: "Михаил",
      content:
        "Покупал угловые диваны. Отличное соотношение цены и качества. Материалы премиальные, сборка качественная. Семья довольна покупкой. Спасибо команде Клöвер!",
      rating: 5,
    },
    {
      id: 3,
      name: "Елена",
      content:
        "Второй раз покупаю мебель в Клöвер. Всегда высокое качество и отличный сервис. Консультанты помогли выбрать идеальную модель под наш интерьер. Очень довольна!",
      rating: 5,
    },
    {
      id: 4,
      name: "Дмитрий",
      content:
        "Приобрел диван-кровать Калипсо. Механизм работает плавно, матрас удобный. Качество ткани на высоте - не выгорает и легко чистится. Отличная покупка для небольшой квартиры!",
      rating: 5,
    },
    {
      id: 5,
      name: "Ольга",
      content:
        "Заказывала кресло-реклайнер Шеридан. USB-разъемы очень удобны, механизм работает бесшумно. Велюр приятный на ощупь. Муж в восторге от функции поворота на 360 градусов!",
      rating: 5,
    },
    {
      id: 6,
      name: "Александр",
      content:
        "Купил угловой диван Мерлин. Механизм тик-так очень надежный, места для сна достаточно. Шенил качественный, не скатывается. Металлические ножки добавляют стильности!",
      rating: 5,
    },
    {
      id: 7,
      name: "Татьяна",
      content:
        "Взяла кушетку Джерси для спальни. Ящик из ЛДСП вместительный, независимый пружинный блок обеспечивает отличную поддержку. Ткань погодка очень практичная!",
      rating: 5,
    },
    {
      id: 8,
      name: "Сергей",
      content:
        "Приобрел модульный диван Римини-2. Механизм конрад работает безупречно, антивандальный велюр выдерживает активное использование. Габариты идеально подошли для гостиной!",
      rating: 5,
    },
  ]

  const [autoplay] = useState(() => Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Более 2000 довольных клиентов уже оценили качество наших диванов
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplay]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-background border border-border p-6 rounded-xl soft-shadow h-full">
                    <div className="flex items-center mb-4">
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
