"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react"
import ImageModal from "./image-modal"

const modularProducts = [
  {
    id: 1,
    name: "Наполи-3",
    briefDescription:
      "Модульная система с механизмом трансформации «пума». Возможность создания различных конфигураций для любого интерьера.",
    description: "Модульная система с возможностью создания различных конфигураций.",
    characteristics: [
      "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
      "Диван-кровать 182 х 115 х 93 (102)",
      "Спальное место 140 х 182",
      "",
      "Кресло-кровать (Пума) 91 х 115 х 93 (102)",
      "Спальное место 91 х 140",
      "Кресло для отдыха 91 х 115 х 93 (102)",
      "Секция угловая 115 х 115 х 93 (102)",
      "Оттоманка 91 х 181 х 93 (102)",
      "Боковина 21 х 115 х 92",
      "Пуф 91 х 115 х 45",
      "Подголовник 50 х 27",
      "Полуматрас 91 х 63 х 15",
      "Высота от пола до посадочного места ‒ 45 см",
      "",
      "Допустимая погрешность габаритов по ГОСТу 19917-2014 ±20 мм",
      "",
      "МЕХАНИЗМ ТРАНСФОРМАЦИИ: «пума»",
      "КАРКАС: бук, сосна, березовая фанера, ЛДСП",
      "НАПОЛНЕНИЕ: змеевидный пружинный блок, высокоэластичный пенополиуретан, высококачественный синтепон",
      "МАТЕРИАЛ НОЖЕК: массив бука",
      "СТАНДАРТНЫЙ ЦВЕТ НОЖЕК: венге, (на выбор цвет ножек может быть: орех, молочный, слоновая кость, белый, натуральное дерево)",
      "БЕЛЬЕВОЙ ЯЩИК: есть (по желанию) в оттоманке и кресле (ЛДСП)",
      "ДЕКОРАТИВНЫЕ ПОДУШКИ: в комплект не входят",
      "ВАРИАНТ ДОСТАВКИ: в разборном виде",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-0n4cn8mltIvlEikh1fkmtVJM9Lelrq.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-ek4S9ByBp1ytAnYWgXOyImYWm3SnF8.webp",
    ],
  },
  {
    id: 2,
    name: "Берлони-7 Про Макс",
    briefDescription:
      "Премиальная модульная система с механизмом трансформации «конрад тройного сложения». Элегантный дизайн и высокое качество исполнения.",
    description: "Премиальная модульная система с расширенным функционалом.",
    characteristics: [
      "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
      "Диван – кровать 168 х 110 х 88 (102)",
      "Спальное место 166 х 196",
      "",
      "Кресло для отдыха без короба 84 х 110 х 88 (102)",
      "Оттоманка 84 х 175 х 88 (102)",
      "Угловая секция 45° 106 х 100 х 88 (102)",
      "Боковина 28 х 108",
      "Высота от пола до посадочного места 49 см",
      "",
      "Допустимая погрешность габаритов по ГОСТу 19917-93 ±20 мм",
      "",
      "МЕХАНИЗМ ТРАНСФОРМАЦИИ: «конрад тройного сложения»",
      "КАРКАС: бук, сосна, березовая фанера",
      "НАПОЛНЕНИЕ: змеевидный пружинный блок, высокоэластичный пенополиуретан + пенополиуретан с памятью формы (Memory), высококачественный синтепон высокоэластичная резиновая лента",
      "НАПОЛНИТЕЛЬ ПОДУШЕК: холлофайбер",
      "МАТЕРИАЛ НОЖЕК: массив бука",
      "СТАНДАРТНЫЙ ЦВЕТ НОЖЕК: венге (на выбор цвет ножек может быть: орех, молочный, белый, слоновая кость, натуральное дерево)",
      "БЕЛЬЕВОЙ ЯЩИК: есть (только в оттоманке) (ЛДСП)",
      "ДЕКОРАТИВНЫЕ ПОДУШКИ: в комплект не входят",
      "ВАРИАНТ ДОСТАВКИ: в разборном виде",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-v6YS7yJ4qaiB8dTmQ0bw94FMdQCGAh.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-XzMYN0tWWWqwkciagO6GaCV3UIuW4S.webp",
    ],
  },
  {
    id: 3,
    name: "Бостон",
    briefDescription:
      "Классическая модульная система с механизмом трансформации «тик-так». Идеальное сочетание комфорта и функциональности.",
    description: "Классическая модульная система в американском стиле.",
    characteristics: [
      "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
      "Диван-кровать 193 х 112 х 74 (95), 170 х 112 х 74 (95), 150 х 112 х 74 (95)",
      "Cпальное место 193 х 158, 170 х 158, 150 х 158",
      "Оттоманка с 1 боковиной 127 х 177 х 74 (95), 114 х 177 х 74 (95), 105 х 177 х 74 (95)",
      "Секция малой оттоманки 139 х 112 х 74 (95), 127 х 112 х 74 (95), 117 х 112 х 74 (95)",
      "Секция угловая 90° 112 х 112 х 74 (95)",
      "Кресло для отдыха 97 х 112 х 74 (95), 85 х 112 х 74 (95), 75 х 112 х 74 (95)",
      "Боковина 29,5 х 105 х 63",
      "Пуф 97 х 97 х 49, 85 х 85 х 49, 75 х 75 х 49",
      "Высота от пола до посадочного места ‒ 49 см",
      "",
      "Допустимая погрешность габаритов по ГОСТу 19917-2014 ‒ ±20 мм",
      "",
      "МЕХАНИЗМ ТРАНСФОРМАЦИИ: «тик-так»",
      "КАРКАС: березовая фанера, ЛДСП (короб)",
      "НАПОЛНЕНИЕ: змеевидный пружинный блок, высокоэластичная резиновая лента, высокоэластичный пенополиуретан марки HR, высокоэластичный пенополиуретан с памятью формы (Memory foam), высококачественный синтепон",
      "НАПОЛНИТЕЛЬ ПОДУШЕК: холлофайбер",
      "МАТЕРИАЛ НОЖЕК: массив бука",
      "СТАНДАРТНЫЙ ЦВЕТ НОЖЕК: орех (на выбор цвет ножек может быть: венге, молочный, слоновая кость, белый, натуральное дерево)",
      "БЕЛЬЕВОЙ ЯЩИК: есть (ЛДСП)",
      "ДЕКОРАТИВНЫЕ ПОДУШКИ: в комплект не входят",
      "ВАРИАНТ ДОСТАВКИ: в разборном виде",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-QSlEAGMXhINZcpgaYToV1ffCRxVqSv.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-FzIrKRZF6tjfJ7IwNVi04aRxcQZt3f.webp",
    ],
  },
  {
    id: 4,
    name: "Римини-1",
    briefDescription:
      "Элегантная модульная система с механизмом трансформации «конрад тройного сложения». Итальянский стиль и безупречное качество.",
    description: "Элегантная модульная система в итальянском стиле.",
    characteristics: [
      "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
      "Диван-кровать с 1 боковиной 180 х 109 х 89 (99)",
      "Cпальное место 150 х 190",
      "",
      "Секция угловая 120 х 120 х 89 (99)",
      "Кресло для отдыха с 1 боковиной 104 х 109 х 89 (99)",
      "Кресло-кровать с 2 боковинами 133 х 109 х 89 (99)",
      "Cпальное место 70 х 190",
      "Кресло для отдыха без боковины отдельностоящее 57 х 109 х 89 (99)",
      "Кресло для отдыха с реклайнером без боковины 75 х 109 х 89 (99)",
      "Боковина 29 х 106 х 69",
      "Высота от пола до посадочного места ‒ 45 см",
      "",
      "Допустимая погрешность габаритов по ГОСТу 19917-2014 ±20 мм",
      "",
      "МЕХАНИЗМ ТРАНСФОРМАЦИИ: «конрад тройного сложения»",
      "КАРКАС: бук, сосна, березовая фанера, ЛДСП, ДСП",
      "НАПОЛНЕНИЕ: змеевидный пружинный блок, высокоэластичный пенополиуретан, высококачественный синтепон",
      "НАПОЛНИТЕЛЬ ПОДУШЕК: холлофайбер",
      "МАТЕРИАЛ НОЖЕК: массив бука",
      "СТАНДАРТНЫЙ ЦВЕТ НОЖЕК: орех, венге, молочный, слоновая кость, белый, натуральное дерево",
      "БЕЛЬЕВОЙ ЯЩИК: нет",
      "ДЕКОРАТИВНЫЕ ПОДУШКИ: в комплект не входят",
      "ВАРИАНТ ДОСТАВКИ: в разборном виде",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-0fX1Fh7lpfFgEO0svfHuSvhxLVeDDX.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-D5ioFDVoXwzWgtCayjoVyUHY8SVpQQ.webp",
    ],
  },
  {
    id: 5,
    name: "Редфорд",
    briefDescription:
      "Современная модульная система с механизмом трансформации «дельфин». Минималистичный дизайн и максимальная функциональность.",
    description: "Современная модульная система с минималистичным дизайном.",
    characteristics: [
      "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
      "Диван – кровать 202 х 125 х 75 (90); 182 х 125 х 75(90); 162 х 125 х 75 (90)",
      "Спальное место 198 х 160; 178 х 193; 158 х 193",
      "",
      "Оттоманка 101 х 210 х 75 (90); 91 х 210 х 75 (90); 81 х 210 х 75 (90)",
      "Секция угловая 121 х 121 х 75 (90)",
      "Боковина 15 х 117",
      "Секция малой оттоманки 137 х 123,5 х 75 (90); 127 х 123,5 х 75 (90); 117 х 123,5 х 75 (90)",
      "Кресло для отдыха 101 х 125 х 75 (90); 91 х 125 х 75 (90); 81 х 125 х 75 (90)",
      "Высота от пола до посадочного места ‒ 43,5 см",
      "",
      "Допустимая погрешность габаритов по ГОСТу 19917-2014 ±20 мм",
      "",
      "МЕХАНИЗМ ТРАНСФОРМАЦИИ: «дельфин»",
      "КАРКАС: бук, сосна, березовая фанера",
      "НАПОЛНЕНИЕ: змеевидный пружинный блок, высокоэластичный пенополиуретан, высококачественный синтепон",
      "НАПОЛНИТЕЛЬ ПОДУШЕК: холлофайбер",
      "МАТЕРИАЛ НОЖЕК: массив бука",
      "СТАНДАРТНЫЙ ЦВЕТ НОЖЕК: орех, венге, молочный, слоновая кость, белый, натуральное дерево",
      "БЕЛЬЕВОЙ ЯЩИК: есть в кресле и оттоманке (ЛДСП)",
      "ДЕКОРАТИВНЫЕ ПОДУШКИ: в комплект не входят",
      "ВАРИАНТ ДОСТАВКИ: в разборном виде",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-rVm1uOF8FHk1NpMC1kKQsg6ev2Z49Z.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-ngVV4Ur4Sw37YPkXBaQNoeX4LXhvy3.webp",
    ],
  },
  {
    id: 6,
    name: "Джакарта",
    briefDescription:
      "Экзотическая модульная система с механизмом трансформации «конрад двойного сложения». Уникальный дизайн с регулируемыми подголовниками.",
    description: "Экзотическая модульная система с уникальным дизайном.",
    characteristics: [
      "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
      "Диван-кровать 170 х 114 х 82 (101)",
      "Спальное место 170 х 190",
      "Кресло для отдыха 85 х 114 х 82 (101)",
      "Кресло-реклайнер с проводным пультом 85 х 114 х 82 (101)",
      "Угловая секция 90˚ 125 х 125 х 82 (101)",
      "Угловая секция 45˚ 109 х 108 х 82 (101)",
      "Оттоманка 85 х 190 х 82 (101)",
      "Малая оттоманка 121 х 114 х 82 (101)",
      "Боковина с трещоткой: 26 х 107 х 54",
      "Боковина 12 х 106 х 68,5",
      "Высота от пола до посадочного места 49 см",
      "",
      "Допустимая погрешность габаритов по Госту 19917-2014 ±20 мм",
      "",
      "МЕХАНИЗМ ТРАНСФОРМАЦИИ: «конрад двойного сложения»",
      "КАРКАС: бук, сосна, березовая фанера, ДВП",
      "НАПОЛНЕНИЕ: высокоэластичная резиновая лента, высококачественный синтепон, высокоэластичный пенополиуретан с памятью формы (мемори)",
      "МАТЕРИАЛ НОЖЕК: передние массив бука (задние металл)",
      "СТАНДАРТНЫЙ ЦВЕТ НОЖЕК: орех, (на выбор цвет ножек может быть: орех, молочный, слоновая кость, белый, натуральное дерево)",
      "БЕЛЬЕВОЙ ЯЩИК: нет",
      "ДЕКОРАТИВНЫЕ ПОДУШКИ: в комплект не входят",
      "ВАРИАНТ ДОСТАВКИ: в разборном виде",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-AwrOxqU9Jrz5szi3XzYRXuV84FnGTG.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-f5ZhRpAWZsSbMOutVznJSIjYyVcblQ.webp",
    ],
  },
  {
    id: 7,
    name: "Парма",
    briefDescription:
      "Компактная модульная система с механизмом трансформации «пума». Идеальное решение для небольших пространств.",
    description: "Компактная модульная система для небольших пространств.",
    characteristics: [
      "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
      "Диван-кровать без боковин 172 х 105 х 66 (96), спальное место 172 х 151",
      "Оттоманка с 1-й боковиной 107 х 175 х 66 (96)",
      "Боковина 20 х 100 х 66",
      "Высота от пола до посадочного места 46 см",
      "",
      "Допустимая погрешность габаритов по ГОСТу 19917-93 ±20 мм",
      "",
      "МЕХАНИЗМ ТРАНСФОРМАЦИИ: «пума»",
      "КАРКАС: сосна, березовая фанера, ЛДСП Дуб Роше",
      "НАПОЛНЕНИЕ: змеевидный пружинный блок, высокоэластичный пенополиуретан, высококачественный синтепон",
      "НАПОЛНИТЕЛЬ ПОДУШЕК: холлофайбер",
      "МАТЕРИАЛ НОЖЕК: металл (черный)",
      "БЕЛЬЕВОЙ ЯЩИК: есть (в оттоманке)",
      "ДЕКОРАТИВНЫЕ ПОДУШКИ: в комплект не входят",
      "ВАРИАНТ ДОСТАВКИ: в разборном виде",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-FXuh15StfEAoIMd6fVIqCQmgIFRRSy.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-UZTjRluRE2cUTA66dgWSZn7RYDmiMx.webp",
    ],
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

export default function ModularSystemsGrid() {
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null)
  const productRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  useEffect(() => {
    if (expandedProduct !== null && productRefs.current[expandedProduct]) {
      const element = productRefs.current[expandedProduct]
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [expandedProduct])

  const toggleProduct = (productId: number) => {
    setExpandedProduct(expandedProduct === productId ? null : productId)
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {modularProducts.map((product) => {
            const isExpanded = expandedProduct === product.id
            const isExpandable = [1, 2, 3, 4, 5, 6, 7].includes(product.id)

            return (
              <div
                key={product.id}
                ref={(el) => {
                  productRefs.current[product.id] = el
                }}
                className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all hover-bronze-outline"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className={`${isExpandable && !isExpanded ? "lg:w-1/3" : "lg:w-2/5"} p-6`}>
                    <ProductCarousel images={product.images} productName={product.name} />
                  </div>

                  <div
                    className={`${isExpandable && !isExpanded ? "lg:w-2/3" : "lg:w-3/5"} p-6 flex flex-col justify-between`}
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">{product.name}</h3>

                      {isExpandable && !isExpanded ? (
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {"briefDescription" in product ? product.briefDescription : product.description}
                        </p>
                      ) : (
                        <>
                          <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-foreground mb-3">Характеристики:</h4>
                            <ul className="space-y-2">
                              {product.characteristics.map((char, index) => (
                                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                  {char && <span className="text-primary mt-1">•</span>}
                                  <span
                                    className={
                                      char.startsWith("ОСНОВНЫЕ") ||
                                      char.startsWith("МЕХАНИЗМ") ||
                                      char.startsWith("КАРКАС") ||
                                      char.startsWith("НАПОЛНЕНИЕ") ||
                                      char.startsWith("НАПОЛНИТЕЛЬ") ||
                                      char.startsWith("МАТЕРИАЛ") ||
                                      char.startsWith("СТАНДАРТНЫЙ") ||
                                      char.startsWith("БЕЛЬЕВОЙ") ||
                                      char.startsWith("ДЕКОРАТИВНЫЕ") ||
                                      char.startsWith("ВАРИАНТ")
                                        ? "font-semibold"
                                        : ""
                                    }
                                  >
                                    {char}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex justify-end gap-3">
                      {isExpandable && (
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-primary text-primary hover:bg-accent hover:text-white bg-transparent transition-colors"
                          onClick={() => toggleProduct(product.id)}
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
                      )}
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
          })}
        </div>
      </div>
    </section>
  )
}
