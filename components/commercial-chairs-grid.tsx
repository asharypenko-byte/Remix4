"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react"
import ImageModal from "./image-modal"

const products = [
  {
    id: 1,
    name: "Честерфилд",
    description: "Классический английский диван с каретной стяжкой для элитных интерьеров.",
    fullCharacteristics: `ОСНОВНЫЕ ХАРАКТЕРИСТИКИ

Диван для отдыха 3-местный 247 х 94 х 80
Диван для отдыха 2-местный 179,5 х 94 х 80
Кресло для отдыха 106 х 94 х 80
Пуф 92 х 63 х 45

МЕХАНИЗМ ТРАНСФОРМАЦИИ: Нет

КАРКАС: Бук, сосна, березовая фанера, ДСП

НАПОЛНЕНИЕ:
Змеевидный пружинный блок, высокоэластичный пенополиуретан, высококачественный синтепон
Материал ножек: Пластик
Бельевой ящик: Нет
Декоративные подушки: В комплект не входят
Вариант доставки: В собранном виде
Высота от пола до посадочного места ‒ 45 см

Допустимая погрешность габаритов по ГОСТу 19917-2014 ±20 мм`,
    images: ["/chesterfield-1.webp", "/chesterfield-2.webp"],
  },
  {
    id: 2,
    name: "Токио",
    description: "Минималистичный диван в японском стиле для современных интерьеров.",
    fullCharacteristics: `ОСНОВНЫЕ ХАРАКТЕРИСТИКИ

Диван для отдыха 3-хм
185 х 83,5 х 80,5 (без спального места, бельевой короб не устанавливается)
Изменение габаритов: - не увеличивается max на 110 см
Высота посадочного места: 44,5 см
Ширина посадочного места: 162 см
Глубина посадочного места: 59 см
Высота ножки: 22,5 см

Диван для отдыха 2-хм
131 х 83,5 х 80,5 (без спального места, бельевой короб не устанавливается)
Изменение габаритов: - увеличивается max на 54 см - уменьшается max на 56 см
Высота посадочного места: 44,5 см
Ширина посадочного места: 108 см
Глубина посадочного места: 59 см
Высота ножки: 22,5 см

Кресло для отдыха
75 х 83,5 х 80,5 (без спального места, бельевой короб не устанавливается)
Изменение габаритов: - увеличивается max на 110 см - не уменьшается
Высота посадочного места: 44,5 см
Ширина посадочного места: 54 см
Глубина посадочного места: 59 см
Высота ножки: 22,5 см

Кресло для отдыха детское
45 х 43 х 55 (без спального места, бельевой короб не устанавливается)
Габаритные размеры не меняет.`,
    images: ["/tokyo-1.jpg", "/tokyo-2.webp"],
  },
  {
    id: 3,
    name: "Сиена",
    description: "Элегантный итальянский диван с изогнутыми формами для ресторанов и кафе.",
    fullCharacteristics: `ОСНОВНЫЕ ХАРАКТЕРИСТИКИ

Диван 194 х 90 х 77 (95)
Кресло для отдыха 112 х 90 х 77 (95) или 94 х 90 х 77 (95)

МЕХАНИЗМ ТРАНСФОРМАЦИИ: Нет

КАРКАС: Сосна, березовая фанера

НАПОЛНЕНИЕ:
Высокоэластичная резиновая лента, высокоэластичный пенополиуретан, высококачественный синтепон
Наполнитель подушек: Холлофайбер
Материал ножек: Массив бука
Стандартный цвет накладок: Орех, венге, молочный, белый, слоновая кость, натуральное дерево
Бельевой ящик: Нет
Декоративные подушки: Входят в комплект
Вариант доставки: В собранном виде
Высота от пола до посадочного места ‒ 46 см

Допустимая погрешность габаритов по ГОСТу 19917-2014 ±20 мм`,
    images: ["/siena-1.webp", "/siena-2.webp"],
  },
  {
    id: 4,
    name: "Кресло Прага",
    description: "Универсальное кресло европейского стиля для дома и гостиниц.",
    fullCharacteristics: `ОСНОВНЫЕ ХАРАКТЕРИСТИКИ

Кресло 77 х 84 х 80 (Бельевой ящик не устанавливается)
Габаритный размер не меняет.
Механизм трансформации: Нет
Высота от пола до посадочного места 42 см
Глубина посадочного места 52 см
Ширина посадочного места 77 см
Допустимая погрешность габаритов по Госту 19917-93 ±20 мм

Описание:
Каркас: Березовая фанера, массив бука
Наполнение:
- эластичная резиновая лента,
- высокоэластичный пенополиуретан
Материал ножек: Массив бука
Стандартный цвет ножек: Орех (На выбор цветных ножек может быть: венге, молочный, слоновая кость, белый, натуральное дерево)
Декоративные подушки: В комплект не входят
Вариант доставки: В собранном виде`,
    images: ["/prague-1.webp", "/prague-2.webp", "/prague-3.jpg"],
  },
  {
    id: 5,
    name: "Кресло Бари",
    description: "Итальянское офисное кресло с поворотным механизмом.",
    fullCharacteristics: `ОСНОВНЫЕ ХАРАКТЕРИСТИКИ

Кресло 76 х 89 х 96 (Бельевой ящик не устанавливается)
Габаритный размер не меняет.
Механизм трансформации: Нет
Пуф 55 х 58 х 42 (Бельевой ящик не устанавливается)
Высота от пола до посадочного места 45 см
Глубина посадочного места 55 см
Допустимая погрешность габаритов по Госту 19917-93 ±20 мм

Описание:
Каркас: Березовая фанера, массив бука
Наполнение: высокоэластичный пенополиуретан высококачественный синтепон
Материал ножек: Массив бука
Стандартный цвет ножек: Орех (На выбор цвет ножек может быть: венге, молочный, слоновая кость, белый, натуральное дерево)
Декоративные подушки: В комплект не входят
Вариант доставки: В собранном виде`,
    images: ["/bari-1.jpg", "/bari-2.webp"],
  },
  {
    id: 6,
    name: "Кресло Женева",
    description: "Премиальное кресло для руководителей с анатомической формой.",
    fullCharacteristics: `ОСНОВНЫЕ ХАРАКТЕРИСТИКИ

Кресло-кровать 96 х 95,5 х 94
Спальное место 74 х 200

МЕХАНИЗМ ТРАНСФОРМАЦИИ: «Кинг»

КАРКАС: березовая фанера

НАПОЛНЕНИЕ: змеевидный пружинный блок, высокоэластичный пенополиуретан

НАПОЛНИТЕЛЬ ПОДУШЕК: холлофайбер

МАТЕРИАЛ НОЖЕК: массив бука

СТАНДАРТНЫЙ ЦВЕТ НОЖЕК: орех (на выбор цвет ножек может быть: венге, молочный, белый, слоновая кость, натуральное дерево)

БЕЛЬЕВОЙ ЯЩИК: есть, но не предназначен для полноценного использования (на короб ложится спинка при раскладке)

ДЕКОРАТИВНЫЕ ПОДУШКИ: входят в комплект

ВАРИАНТ ДОСТАВКИ: в собранном виде

Высота от пола до посадочного места ‒ 44 см
Допустимая погрешность габаритов по ГОСТу 19917-2014 ±20 мм`,
    images: ["/geneva-1.webp", "/geneva-2.webp"],
  },
  {
    id: 7,
    name: "Кресло Непал",
    description: "Экологичное кресло с ручным плетением для лаунж-зон.",
    fullCharacteristics: `ОСНОВНЫЕ ХАРАКТЕРИСТИКИ

Кресло - 70х90х81(84) (Бельевой ящик не устанавливается)
Габаритный размер не меняет.
Глубина посадочного места 55 см
Высота от пола до посадочного места 42 см
Допустимая погрешность габаритов по Госту 19917-93 ±20 мм

КАРКАС: Березовая фанера, ДВП

НАПОЛНЕНИЕ: ППУ контурной резки, высококачественный синтепон, фанера, эластичная резиновая лента, ножки массив бука с металлическим держателем в месте крепления

ДЕКОРАТИВНЫЕ ПОДУШКИ: В комплект не входят

ВАРИАНТ ДОСТАВКИ: В собранном виде`,
    images: ["/nepal-1.webp", "/nepal-2.webp"],
  },
]

function ProductCarousel({ images, productName }: { images: string[]; productName: string }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleImageClick = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <div
        onClick={handleImageClick}
        className="block relative w-full h-64 bg-secondary/20 rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
      >
        <img
          src={images[currentImage] || "/placeholder.svg"}
          alt={`${productName} - изображение ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors z-10"
              aria-label="Предыдущее изображение"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors z-10"
              aria-label="Следующее изображение"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setCurrentImage(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-colors z-10 ${
                    index === currentImage ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Перейти к изображению ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <ImageModal
        images={images}
        currentIndex={currentImage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={productName}
      />
    </>
  )
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const productRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isExpanded && productRef.current) {
      const headerOffset = 100
      const elementPosition = productRef.current.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [isExpanded])

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      ref={productRef}
      id={`product-${product.id}`}
      className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all hover-bronze-outline"
    >
      <div className="flex flex-col lg:flex-row">
        <div className={`${!isExpanded ? "lg:w-1/3" : "lg:w-2/5"} p-6`}>
          <ProductCarousel images={product.images} productName={product.name} />
        </div>

        <div className={`${!isExpanded ? "lg:w-2/3" : "lg:w-3/5"} p-6 flex flex-col justify-between`}>
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4">{product.name}</h3>

            {!isExpanded && <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>}

            {isExpanded && (
              <>
                <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Характеристики:</h4>
                  <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line">
                    {product.fullCharacteristics}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-end gap-3">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-accent hover:text-white bg-transparent transition-colors"
              onClick={handleToggle}
            >
              {isExpanded ? (
                <>
                  Свернуть <ChevronUp className="ml-2 w-4 h-4" />
                </>
              ) : (
                <>
                  Подробнее <ChevronDown className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8" asChild>
              <a href="https://wa.me/79647634277" target="_blank" rel="noopener noreferrer">
                Заказать консультацию
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CommercialChairsGrid() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
