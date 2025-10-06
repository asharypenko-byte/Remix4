"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react"
import ImageModal from "./image-modal"

const cornerSofaProducts = [
  {
    id: 1,
    name: "Калипсо-111",
    briefDescription:
      "Угловой диван-кровать с механизмом трансформации «Еврокнижка». Классическое решение с пружинным блоком боннель и вместительным бельевым ящиком.",
    description: "Угловой диван-кровать с механизмом трансформации «Еврокнижка».",
    characteristics: [
      "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
      "Угловой диван-кровать 222 х 155 х 81 (95)",
      "Спальное место 196 х 152",
      "Диван-кровать 3-местный 223 х 102 х 81 (95)",
      "Спальное место 194 х 150",
      "Диван-кровать 2-местный 148 х 96 х 81 (95)",
      "Спальное место 120 х 190",
      "Кресло-кровать 98 х 92 х 81 (95)",
      "Спальное место 70 х 190",
      "Кресло для отдыха 98 х 92 х 81 (95)",
      "",
      "МЕХАНИЗМ ТРАНСФОРМАЦИИ «Еврокнижка»",
      "КАРКАС Бук, сосна, березовая фанера, ЛДСП",
      "",
      "НАПОЛНЕНИЕ",
      "Пружинный блок боннель, высокоэластичный пенополиуретан, высококачественный синтепон",
      "Наполнитель подушек: Холлофайбер",
      "Материал ножек: Прорезиненные",
      "Бельевой ящик: Есть (Фанера)",
      "Декоративные подушки: В комплект не входят",
      "Вариант доставки: В разборном виде",
      "Высота от пола до посадочного места ‒ 45 см",
      "",
      "Допустимая погрешность габаритов по ГОСТу 19917-2014 ±20 мм",
    ],
    images: ["/kalipso-111-1.webp", "/kalipso-111-2.webp"],
  },
  {
    id: 2,
    name: "Грация УД",
    briefDescription:
      "Угловой диван-кровать с механизмом трансформации «Тик-так». Элегантный дизайн с декоративными подушками в комплекте и возможностью выбора цвета ножек.",
    description: "Угловой диван-кровать с механизмом трансформации «Тик-так».",
    characteristics: [
      "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
      "Диван-кровать угловой 270 х 170 х 80 (100)",
      "Спальное место 225 х 149",
      "Диван-кровать 3-местный 243 х 106 х 80 (100)",
      "Спальное место 198 х 149",
      "Кресло для отдыха 96 х 86 х 80 (100)",
      "",
      "МЕХАНИЗМ ТРАНСФОРМАЦИИ «Тик-так»",
      "КАРКАС Бук, сосна, березовая фанера, ЛДСП",
      "",
      "НАПОЛНЕНИЕ",
      "Змеевидный пружинный блок, высокоэластичный пенополиуретан, высококачественный синтепон",
      "Наполнитель подушек: Холлофайбер",
      "Материал ножек: Массив бука",
      "Стандартный цвет накладок: Орех, венге, молочный, белый, слоновая кость, натуральное дерево",
      "Бельевой ящик: Есть (Фанера, можно ЛДСП)",
      "Декоративные подушки: Входят в комплект",
      "Вариант доставки: В разборном виде",
      "Высота от пола до посадочного места ‒ 45 см",
      "",
      "Допустимая погрешность габаритов по ГОСТу 19917-2014 ±20 мм",
    ],
    images: ["/gracia-ud-2.webp", "/gracia-ud-1.webp"],
  },
  {
    id: 3,
    name: "Орлеан",
    briefDescription:
      "Модульная система без механизма трансформации с высокоэластичным пенополиуретаном с памятью формы Memory Foam. Современный дизайн на металлических ножках.",
    description: "Модульная система без механизма трансформации.",
    characteristics: [
      "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
      "Диван без бок. 172 х 114,5 х 72 (97)",
      "Диван без бок. 200 х 114,5 х 72 (97)",
      "Оттоманка без бок. 86 х 186 х 72 (97)",
      "Оттоманка без бок. 100 х 186 х 72 (97)",
      "Секция угловая 114.5 х 114,5 х 72 (97)",
      "Кресло без бок. 86 х 114 х 72 (97)",
      "Кресла без бок. 100 х 114 х 72 (97)",
      "Боковина к дивану 11 х 89 х 72",
      "Боковина к оттоманке 11 х 161 х 72",
      "Высота от пола до посадочного места 49,5 см",
      "",
      "Допустимая погрешность габаритов по Госту 19917-2014 ±20 мм",
      "",
      "МЕХАНИЗМ ТРАНСФОРМАЦИИ: отсутствует",
      "КАРКАС: бук, сосна, березовая фанера",
      "НАПОЛНЕНИЕ: высокоэластичная резиновая лента, высокоэластичный пенополиуретан с памятью формы Memory Foam, высокоэластичный пенополиуретан марки HR, высококачественный синтепон",
      "НАПОЛНИТЕЛЬ ПОДУШЕК: холлофайбер",
      "МАТЕРИАЛ НОЖЕК: металлические",
      "ДЕКОРАТИВНЫЕ ПОДУШКИ: входят в комплект",
    ],
    images: ["/orlean-1.webp", "/orlean-2.webp"],
  },
  {
    id: 4,
    name: "Лофт-3",
    briefDescription:
      "Модульная система без механизма трансформации с высокоэластичным пенополиуретаном с памятью формы Memory. Металлические ножки на выбор: черный, хром или золото.",
    description: "Модульная система без механизма трансформации.",
    characteristics: [
      "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
      "Диван без бок. 169,5 х 109 х 74 (94)",
      "Диван с 1-й боковиной 197 х 109 х 74 (94)",
      "Оттоманка без короба с 1-й боковиной 111,5 х 185 х 74 (94)",
      "Боковина 27,5 х 109 х 50",
      "Высота от пола до посадочного места 46 см",
      "",
      "Допустимая погрешность габаритов по ГОСТу 19917-2014 ±20 мм",
      "",
      "КАРКАС: березовая фанера",
      "НАПОЛНЕНИЕ: высокоэластичная резиновая лента, высокоэластичный пенополиуретан с памятью формы (Memory), высокоэластичный пенополиуретан, высококачественный синтепон",
      "НАПОЛНИТЕЛЬ ПОДУШЕК: холлофайбер",
      "МАТЕРИАЛ НОЖЕК: металл (цвет ножек на выбор черный, хром, золото)",
      "ДЕКОРАТИВНЫЕ ПОДУШКИ: в комплект не входят",
      "ВАРИАНТ ДОСТАВКИ: в разборном виде",
    ],
    images: ["/loft-3-1.webp", "/loft-3-2.webp"],
  },
  {
    id: 5,
    name: "Монреаль",
    briefDescription:
      "Модульная система без механизма трансформации с высокоэластичным пенополиуретаном с памятью формы Memory. Ножки из массива бука с выбором цвета отделки.",
    description: "Модульная система без механизма трансформации.",
    characteristics: [
      "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
      "Диван 215 х 90,5 х 43,5",
      "Оттоманка 100,5 х 155 х 43,5",
      "Кресло 100,5 х 90,5 х 43,5",
      "Спинка 2-х-секционная 204 х 33,5 х 70",
      "Спинка 3-х-секционная 304 х 33,5 х 70",
      "Боковина большая 42 х 207 х 56",
      "Боковина малая 42 х 124 х 56",
      "Пуф 107 х 67 х 46",
      "Высота от пола до посадочного места 43,5 см",
      "",
      "Допустимая погрешность габаритов по Госту 19917-2014 ±20 мм",
      "",
      "МЕХАНИЗМ ТРАНСФОРМАЦИИ: «нет»",
      "КАРКАС: березовая фанера",
      "НАПОЛНЕНИЕ: высокоэластичная резиновая лента, высокоэластичный пенополиуретан разной плотности и жесткости, а также с памятью формы (Memory), высококачественный синтепон",
      "НАПОЛНИТЕЛЬ ПОДУШЕК: холлофайбер",
      "МАТЕРИАЛ НОЖЕК: массив бука",
      "СТАНДАРТНЫЙ ЦВЕТ НОЖЕК: орех (на выбор цвет ножек может быть венге, молочный, белый, слоновая кость, натуральное дерево)",
      "ДЕКОРАТИВНЫЕ ПОДУШКИ: в комплект не входят",
      "ВАРИАНТ ДОСТАВКИ: в разборном виде",
    ],
    images: ["/montreal-1.webp", "/montreal-2.webp"],
  },
  {
    id: 6,
    name: "РЕДФОРД-3",
    briefDescription:
      "Модульная система без механизма трансформации с змеевидным пружинным блоком и высокоэластичным пенополиуретаном с памятью формы Memory. Металлические ножки и декоративные подушки в комплекте.",
    description: "Модульная система без механизма трансформации.",
    characteristics: [
      "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
      "Диван с 1-ой бок. 190 х 119 х 82 (100,5)",
      "Оттоманка с 1- ой бок. 109 х 187 х 82 (100,5)",
      "Боковина 27 х 119 х 59,5",
      "Высота от пола до посадочного места 43 см",
      "",
      "Допустимая погрешность габаритов по Госту 19917-2014 ±20 мм",
      "",
      "МЕХАНИЗМ ТРАНСФОРМАЦИИ: «нет»",
      "КАРКАС: березовая фанера",
      "НАПОЛНЕНИЕ: змеевидный пружинный блок, высокоэластичный пенополиуретан разной плотности и жесткости, а также с памятью формы (memory), высококачественный синтепон",
      "НАПОЛНИТЕЛЬ ПОДУШЕК: высокоэластичный пенополиуретан",
      "НАПОЛНИТЕЛЬ ДЕКОРАТИВНЫХ ПОДУШЕК: холлофайбер",
      "МАТЕРИАЛ НОЖЕК: металл",
      "ДЕКОРАТИВНЫЕ ПОДУШКИ: входят в комплект",
      "ВАРИАНТ ДОСТАВКИ: в разборном виде",
    ],
    images: ["/redford-3-1.jpg", "/redford-3-2.webp"],
  },
  {
    id: 7,
    name: "Палладио-3",
    briefDescription:
      "Угловой диван-кровать с механизмом трансформации «Тик-так» и независимым пружинным блоком. Прорезиненные ножки и вместительный бельевой ящик.",
    description: "Угловой диван-кровать с механизмом трансформации «Тик-так».",
    characteristics: [
      "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
      "Угловой диван-кровать 262 х 170 х 76 (101)",
      "Спальное место 212 х 151",
      "Диван-кровать 3-местный 243 х 110 х 76 (101)",
      "Спальное место 194 х 151",
      "Диван-кровать 2-местный 170 х 96 х 76 (101)",
      "Спальное место 120 х 190",
      "Кресло-кровать 120 х 96 х 76 (101)",
      "Спальное место 70 х 190",
      "Кресло для отдыха 120 х 96 х 76 (101)",
      "",
      "МЕХАНИЗМ ТРАНСФОРМАЦИИ «Тик-так»",
      "КАРКАС Бук, сосна, березовая фанера, ЛДСП",
      "",
      "НАПОЛНЕНИЕ",
      "Независимый пружинный блок, высокоэластичный пенополиуретан, высококачественный синтепон",
      "Наполнитель подушек: Холлофайбер",
      "Материал ножек: Прорезиненные",
      "Бельевой ящик: Есть (Фанера, можно ЛДСП)",
      "Декоративные подушки: В комплект не входят",
      "Вариант доставки: В разборном виде",
      "Высота от пола до посадочного места ‒ 45 см",
      "",
      "Допустимая погрешность габаритов по ГОСТу 19917-2014 ±20 мм",
    ],
    images: ["/palladio-3-1.webp", "/palladio-3-2.webp"],
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

export default function CornerSofasGrid() {
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
          {cornerSofaProducts.map((product) => {
            const isExpanded = expandedProduct === product.id
            const isExpandable = true

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
