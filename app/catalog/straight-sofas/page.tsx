"use client"

import { useState, useRef, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react"

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  images?: string[]
  specifications?: {
    category?: string
    width?: string
    depth?: string
    mechanism?: string
    sleepingWidth?: string
    sleepingLength?: string
    warranty?: string
    frame?: string
    height?: string
    properties?: string
    style?: string
    seatingCapacity?: string
    sleepingCapacity?: string
    upholstery?: string
    filling?: string
    dimensions?: string
    application?: string
    country?: string
    mainTitle?: string
    sleepingArea?: string
    seatHeight?: string
    tolerance?: string
    mechanismTitle?: string
    frameTitle?: string
    fillingTitle?: string
    pillowFillingTitle?: string
    pillowFilling?: string
    legMaterialTitle?: string
    legMaterial?: string
    legColorTitle?: string
    legColor?: string
    decorativePillowsTitle?: string
    decorativePillows?: string
    deliveryTitle?: string
    delivery?: string
    [key: string]: string | undefined
  }
}

interface Mechanism {
  id: number
  name: string
  description: string
  image: string
  products: Product[]
}

function ProductCarousel({ images, productName }: { images: string[]; productName: string }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full h-64 bg-secondary/20 rounded-lg overflow-hidden">
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
  )
}

export default function StraightSofasPage() {
  const [expandedMechanism, setExpandedMechanism] = useState<number | null>(null)
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null)
  const mechanismRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})
  const productRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  const mechanisms: Mechanism[] = [
    {
      id: 4,
      name: "Аккордеон",
      description: "Компактный механизм с удобным раскладыванием",
      image: "/accordion-sofa-mechanism.jpg",
      products: [
        {
          id: 11,
          name: "Виконт",
          description: "Диван-кровать с механизмом аккордеон, ткань велюр, матрац ППУ марки HR",
          price: 117000,
          image: "/luxury-sofa-vikont.jpg",
        },
        {
          id: 12,
          name: "Маркиз",
          description: "Механизм аккордеон, ткань антивандальная",
          price: 78000,
          image: "/modern-sofa-markiz.jpg",
        },
        {
          id: 13,
          name: "Меркурий",
          description: "Диван-кровать с механизмом аккордеон, ткань велюр, матрац ППУ",
          price: 86000,
          image: "/comfortable-sofa-merkuriy.jpg",
        },
        {
          id: 14,
          name: "Николь",
          description: "Диван-кровать с механизмом аккордеон, ткань шенил",
          price: 78000,
          image: "/elegant-sofa-nikol.jpg",
        },
        {
          id: 15,
          name: "Дориан",
          description: "Диван-кровать с механизмом аккордеон, наполнитель матраца ППУ",
          price: 85000,
          image: "/stylish-sofa-dorian.jpg",
        },
        {
          id: 16,
          name: "Бруно",
          description: "Кресло-кровать с механизмом аккордеон, ткань антивандальная велюр",
          price: 55000,
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 17,
          name: "Гретта",
          description: "Диван-кровать с механизмом аккордеон, ткань велюр",
          price: 92000,
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 18,
          name: "Амадей",
          description: "Диван-кровать из массива бука, ткань жаккард, матрац независимый пружинный блок",
          price: 127000,
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 19,
          name: "Стенли",
          description: "Диван-кровать с механизмом аккордеон, массив бука, ткань мех",
          price: 140555,
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 20,
          name: "Домино",
          description: "Диван-кровать с механизмом аккордеон, ткань велюр",
          price: 89000,
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: 1,
      name: "Еврокнижка",
      description: "Надежный и простой механизм трансформации",
      image: "/eurobook-sofa-mechanism.jpg",
      products: [
        {
          id: 1,
          name: "Калипсо-12",
          description: "Еврокнижка с механизмом тик-так, ткань шенил, матрац независимый пружинный блок",
          price: 110000,
          image: "/kalipso-12-1.webp",
          images: ["/kalipso-12-1.webp", "/kalipso-12-2.webp"],
          specifications: {
            mainTitle: "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
            cornerSofa: "Угловой диван-кровать 237 х 170 х 76 (96)",
            cornerSleeping: "Спальное место 212 х 150",
            threeSeat: "Диван-кровать 3-местный 218 х 110 х 76 (96)",
            threeSeatSleeping: "Спальное место 194 х 150",
            twoSeat: "Диван-кровать 2-местный 145 х 96 х 76 (96)",
            twoSeatSleeping: "Спальное место 120 х 190",
            armchair: "Кресло-кровать 95 х 96 х 76 (96)",
            armchairSleeping: "Спальное место 70 х 190",
            restChair: "Кресло для отдыха 95 х 96 х 76 (96)",
            mechanismTitle: "МЕХАНИЗМ ТРАНСФОРМАЦИИ",
            mechanism: "«Тик-так»",
            frameTitle: "КАРКАС",
            frame: "Бук, сосна, березовая фанера, ЛДСП",
            fillingTitle: "НАПОЛНЕНИЕ",
            filling: "Пружинный блок боннель, высокоэластичный пенополиуретан, высококачественный синтепон",
            pillowFilling: "Наполнитель подушек: Холлофайбер",
            legMaterial: "Материал ножек: Прорезиненные",
            overlayMaterial: "Материал накладок: МДФ шпонированный",
            standardColor: "Стандартный цвет: Орех, венге, молочный, слоновая кость, натуральное дерево",
            storageBox: "Бельевой ящик: Есть (Фанера, можно ЛДСП)",
            decorativePillows: "Декоративные подушки: В комплект не входят",
            delivery: "Вариант доставки: В разборном виде",
          },
        },
        {
          id: 2,
          name: "Калипсо-13",
          description: "Еврокнижка с механизмом тик-так, ткань шенил, матрац независимый пружинный блок",
          price: 114577,
          image: "/kalipso-13-1.webp",
          images: ["/kalipso-13-1.webp", "/kalipso-13-2.webp"],
          specifications: {
            mainTitle: "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
            cornerSofa: "Угловой диван-кровать 232 х 170 х 76 (96)",
            cornerSleeping: "Спальное место 212 х 150",
            threeSeat: "Диван-кровать 3-местный 214 х 110 х 76 (96)",
            threeSeatSleeping: "Спальное место 194 х 150",
            twoSeat: "Диван-кровать 2-местный 140 х 96 х 76 (96)",
            twoSeatSleeping: "Спальное место 120 х 190",
            armchair: "Кресло-кровать 90 х 96 х 76 (96)",
            armchairSleeping: "Спальное место 70 х 190",
            restChair: "Кресло для отдыха 90 х 96 х 76 (96)",
            mechanismTitle: "МЕХАНИЗМ ТРАНСФОРМАЦИИ",
            mechanism: "«Тик-так»",
            frameTitle: "КАРКАС",
            frame: "Бук, сосна, березовая фанера, ЛДСП",
            fillingTitle: "НАПОЛНЕНИЕ",
            filling: "Пружинный блок боннель, высокоэластичный пенополиуретан, высококачественный синтепон",
            pillowFilling: "Наполнитель подушек: Холлофайбер",
            legMaterial: "Материал ножек: Прорезиненные",
            storageBox: "Бельевой ящик: Есть (Фанера, можно ЛДСП)",
            decorativePillows: "Декоративные подушки: В комплект не входят",
            delivery: "Вариант доставки: В разборном виде",
          },
        },
        {
          id: 3,
          name: "Грация-2",
          description: "Еврокнижка с механизмом тик-так, ткань велюр, матрац ППУ",
          price: 125000,
          image: "/gratsiya-2-1.webp",
          images: ["/gratsiya-2-1.webp", "/gratsiya-2-2.webp"],
          specifications: {
            mainTitle: "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
            cornerSofa: "Угловой диван-кровать 274 х 170 х 82 (99)",
            cornerSleeping: "Спальное место 227 х 155",
            threeSeat: "Диван-кровать 3-местный 245 х 113 х 82 (99)",
            threeSeatSleeping: "Спальное место 200 х 155",
            restChair: "Кресло для отдыха 108 х 93 х 82 (99)",
            mechanismTitle: "МЕХАНИЗМ ТРАНСФОРМАЦИИ",
            mechanism: "«Тик-так»",
            frameTitle: "КАРКАС",
            frame: "Бук, сосна, березовая фанера, ЛДСП",
            fillingTitle: "НАПОЛНЕНИЕ",
            filling: "Змеевидный пружинный блок, высокоэластичный пенополиуретан, высококачественный синтепон",
            pillowFilling: "Наполнитель подушек: Холлофайбер",
            legMaterial: "Материал ножек: Массив бука",
            legColor: "Стандартный цвет ножек: Орех, венге, молочный, белый, слоновая кость, натуральное дерево",
            storageBox: "Бельевой ящик: Есть (Фанера, можно ЛДСП)",
            decorativePillows: "Декоративные подушки: В комплект не входят",
            delivery: "Вариант доставки: В разборном виде",
          },
        },
        {
          id: 4,
          name: "Грация-3",
          description: "Еврокнижка с механизмом тик-так, ткань велюр, матрац ППУ",
          price: 130000,
          image: "/gratsiya-3-1.webp",
          images: ["/gratsiya-3-1.webp"],
          specifications: {
            mainTitle: "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
            threeSeat: "Диван – кровать 3-хм 228 х 104 х 80 (95)",
            threeSeatSleeping: "Спальное место 194 х 150",
            restChair: "Кресло для отдыха 97,5 х 91,5 х 80 (95)",
            seatHeight: "Высота от пола до посадочного места 47 см",
            seatDepth: "Глубина посадочного места без подушки 78 см, с подушкой 57 см",
            tolerance: "Допустимая погрешность габаритов по ГОСТу 19917-2014 ±20 мм",
            mechanism: "Механизм трансформации: «Тик-так»",
            frame: "Каркас: Бук, сосна, березовая фанера, ДСП, ДВП",
            filling:
              "Наполнение: змеевидный пружинный блок, высокоэластичный пенополиуретан, высококачественный синтепон",
            pillowFilling: "Наполнитель подушек: Холлофайбер",
            legMaterial: "Материал ножек: Массив бука",
            legColor:
              "Стандартный цвет ножек: Орех (На выбор цвет ножек может быть: венге, молочный, белый, слоновая кость, натуральное дерево)",
            decorativePillows: "Декоративные подушки: 2 подушки входят в комплект дивана",
            delivery: "Вариант доставки: В разборном виде",
          },
        },
        {
          id: 5,
          name: "Мальта",
          description: "Еврокнижка на ножках, ткань велюр, матрац ППУ",
          price: 95000,
          image: "/malta-1.webp",
          images: ["/malta-1.webp", "/malta-2.webp"],
          specifications: {
            mainTitle: "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
            dimensions: "Диван – кровать 236 х 109,5 х 80 (94)",
            sleepingArea: "Спальное место 194 х 152",
            seatHeight: "Высота от пола до посадочного места 47 см",
            seatDepth: "Глубина посадочного места без подушки 80 см, с подушкой 58 см",
            tolerance: "Допустимая погрешность габаритов по Госту 19917-2014 ±20 мм",
            mechanism: "Механизм трансформации: «Тик-так»",
            frame: "Каркас: Бук, сосна, березовая фанера, ДСП, ДВП",
            filling:
              "Наполнение: Змеевидный пружинный блок, высокоэластичный пенополиуретан, высококачественный синтепон",
            pillowFilling: "Наполнитель подушек: Холлофайбер",
            legMaterial: "Материал ножек: Массив бука",
            legColor:
              "Стандартный цвет ножек: Орех (На выбор цвет ножек может быть: венге, молочный, белый, слоновая кость, натуральное дерево)",
            decorativePillows: "Декоративные подушки: 2 подушки входят в комплект дивана",
            delivery: "Вариант доставки: В разборном виде",
          },
        },
      ],
    },
    {
      id: 3,
      name: "Книжка",
      description: "Классический механизм трансформации",
      image: "/book-sofa-mechanism.jpg",
      products: [
        {
          id: 9,
          name: "Омега",
          description: "Диван-кровать с механизмом книжка",
          price: 78000,
          image: "/omega-1.webp",
          images: ["/omega-1.webp", "/omega-2.webp"],
          specifications: {
            category: "Прямые диваны",
            width: "198 см",
            depth: "90 см",
            mechanism: "Книжка",
            sleepingWidth: "120 см",
            sleepingLength: "198 см",
            warranty: "18 месяцев",
            frame: "Из дерева",
            height: "93 см",
            properties: "С ящиком, Без подлокотников, Выбор обивки",
            style: "Современный, Модерн",
            seatingCapacity: "3",
            sleepingCapacity: "2",
            upholstery: "Ткань, Кожзам, Эко кожа",
            filling: "ППУ листовой (средней жесткости)",
            dimensions: "1980х900х930 мм",
            application: "Для гостиной, Для спальни",
            country: "Россия",
          },
        },
      ],
    },
    {
      id: 5,
      name: "Дельфин",
      description: "Выдвижной механизм трансформации",
      image: "/placeholder.svg?height=400&width=600",
      products: [
        {
          id: 21,
          name: "Редфорд-4",
          description: "Диван-кровать с механизмом дельфин",
          price: 98000,
          image: "/redford-4-1.webp",
          images: ["/redford-4-1.webp", "/redford-4-2.webp"],
          specifications: {
            mainTitle: "ОСНОВНЫЕ ХАРАКТЕРИСТИКИ",
            dimensions: "Диван – кровать 218 х 124,5 х 105",
            sleepingArea: "Спальное место при открытой спинке 185 х 200 (при закрытой спинке 158 х 200)",
            seatHeight: "Высота от пола до посадочного места 44 см",
            tolerance: "Допустимая погрешность габаритов по Госту 19917-2014 ±20 мм",
            mechanismTitle: "МЕХАНИЗМ ТРАНСФОРМАЦИИ",
            mechanism: "«дельфин»",
            frameTitle: "КАРКАС",
            frame: "бук, сосна, березовая фанера",
            fillingTitle: "НАПОЛНЕНИЕ",
            filling: "змеевидный пружинный блок, высокоэластичный пенополиуретан, высококачественный синтепон",
            pillowFillingTitle: "НАПОЛНИТЕЛЬ ПОДУШЕК",
            pillowFilling: "холлофайбер",
            legMaterialTitle: "МАТЕРИАЛ НОЖЕК",
            legMaterial: "массив бука",
            legColorTitle: "СТАНДАРТНЫЙ ЦВЕТ НОЖЕК",
            legColor:
              "орех (На выбор цвет ножек может быть: натуральное дерево, венге, молочный, слоновая кость, белый)",
            decorativePillowsTitle: "ДЕКОРАТИВНЫЕ ПОДУШКИ",
            decorativePillows: "в комплект не входят",
            deliveryTitle: "ВАРИАНТ ДОСТАВКИ",
            delivery: "в разборном виде",
          },
        },
      ],
    },
  ]

  const toggleMechanism = (id: number) => {
    setExpandedMechanism(expandedMechanism === id ? null : id)
  }

  const toggleProduct = (productId: number) => {
    setExpandedProduct(expandedProduct === productId ? null : productId)
  }

  useEffect(() => {
    if (expandedMechanism !== null && mechanismRefs.current[expandedMechanism]) {
      const element = mechanismRefs.current[expandedMechanism]
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [expandedMechanism])

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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-8 bg-gradient-to-br from-background to-secondary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Прямые диваны</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите механизм трансформации для вашего дивана
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-4">
              {mechanisms.map((mechanism) => (
                <div
                  key={mechanism.id}
                  ref={(el) => {
                    mechanismRefs.current[mechanism.id] = el
                  }}
                  className="bg-background border border-border rounded-lg overflow-hidden soft-shadow hover-bronze-outline"
                >
                  <button
                    onClick={() => toggleMechanism(mechanism.id)}
                    className="w-full flex items-center gap-4 p-4 bg-white hover:bg-secondary/10 transition-colors"
                  >
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-4 mb-1">
                        <h3 className="font-sans text-xl font-semibold">{mechanism.name}</h3>
                        <div className="flex gap-2">
                          {mechanism.products.slice(0, 4).map((product) => (
                            <div key={product.id} className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                          {mechanism.products.length > 4 && (
                            <div className="w-12 h-12 rounded-md bg-secondary/20 flex items-center justify-center text-xs text-muted-foreground">
                              +{mechanism.products.length - 4}
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{mechanism.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {mechanism.products.length} {mechanism.products.length === 1 ? "модель" : "моделей"}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedMechanism === mechanism.id ? (
                        <ChevronUp className="w-6 h-6 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                  </button>

                  {expandedMechanism === mechanism.id && (
                    <div className="border-t border-border p-6 bg-secondary/5">
                      <div className="space-y-6">
                        {mechanism.products.map((product) => {
                          const isExpanded = expandedProduct === product.id
                          const hasSpecifications =
                            product.specifications && Object.keys(product.specifications).length > 0

                          return (
                            <div
                              key={product.id}
                              ref={(el) => {
                                productRefs.current[product.id] = el
                              }}
                              className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all hover-bronze-outline"
                            >
                              <div className="flex flex-col lg:flex-row">
                                <div className={`${hasSpecifications && !isExpanded ? "lg:w-1/3" : "lg:w-2/5"} p-6`}>
                                  {product.images && product.images.length > 0 ? (
                                    <ProductCarousel images={product.images} productName={product.name} />
                                  ) : (
                                    <div className="relative w-full h-64 bg-secondary/20 rounded-lg overflow-hidden">
                                      <img
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  )}
                                </div>

                                <div
                                  className={`${hasSpecifications && !isExpanded ? "lg:w-2/3" : "lg:w-3/5"} p-6 flex flex-col justify-between`}
                                >
                                  <div>
                                    <h3 className="text-3xl font-bold text-foreground mb-4">{product.name}</h3>

                                    {hasSpecifications && !isExpanded ? (
                                      <p className="text-muted-foreground leading-relaxed mb-6">
                                        {product.description}
                                      </p>
                                    ) : (
                                      <>
                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                          {product.description}
                                        </p>

                                        {product.specifications && isExpanded && (
                                          <div className="mb-6">
                                            {Object.entries(product.specifications).map(([key, value]) => {
                                              if (!value) return null
                                              const labels: { [key: string]: string } = {
                                                category: "Категория",
                                                width: "Ширина",
                                                depth: "Глубина",
                                                mechanism: "Механизм дивана",
                                                sleepingWidth: "Ширина спального места",
                                                sleepingLength: "Длина спального места",
                                                warranty: "Гарантия",
                                                frame: "Каркас",
                                                height: "Высота",
                                                properties: "Свойства мягкой мебели",
                                                style: "Стиль мебели",
                                                seatingCapacity: "Число сидячих мест",
                                                sleepingCapacity: "Число спальных мест",
                                                upholstery: "Вид обивки",
                                                filling: "Наполнитель",
                                                dimensions: "Размеры",
                                                application: "Область применения",
                                                country: "Страна-производитель",
                                                mainTitle: "",
                                                sleepingArea: "Спальное место",
                                                seatHeight: "Высота от пола до посадочного места",
                                                seatDepth: "Глубина посадочного места",
                                                tolerance: "Допустимая погрешность габаритов",
                                                mechanismTitle: "",
                                                frameTitle: "",
                                                fillingTitle: "",
                                                pillowFillingTitle: "",
                                                pillowFilling: "Наполнитель подушек",
                                                legMaterialTitle: "",
                                                legMaterial: "Материал ножек",
                                                legColorTitle: "",
                                                legColor: "Стандартный цвет ножек",
                                                decorativePillowsTitle: "",
                                                decorativePillows: "Декоративные подушки",
                                                deliveryTitle: "",
                                                delivery: "Вариант доставки",
                                                cornerSofa: "Угловой диван-кровать",
                                                cornerSleeping: "Спальное место",
                                                threeSeat: "Диван-кровать 3-местный",
                                                threeSeatSleeping: "Спальное место",
                                                twoSeat: "Диван-кровать 2-местный",
                                                twoSeatSleeping: "Спальное место",
                                                armchair: "Кресло-кровать",
                                                armchairSleeping: "Спальное место",
                                                restChair: "Кресло для отдыха",
                                                overlayMaterial: "Материал накладок",
                                                standardColor: "Стандартный цвет",
                                                storageBox: "Бельевой ящик",
                                              }
                                              const label = labels[key] || key

                                              if (key.endsWith("Title")) {
                                                if (!value) return null
                                                return (
                                                  <h4 key={key} className="font-bold text-foreground mt-4 first:mt-0">
                                                    {value}
                                                  </h4>
                                                )
                                              }

                                              if (!label) return null

                                              return (
                                                <div key={key} className="flex items-start gap-2 text-muted-foreground">
                                                  <span className="text-primary mt-1">•</span>
                                                  <span>
                                                    {label && <span className="font-semibold">{label}: </span>}
                                                    {value}
                                                  </span>
                                                </div>
                                              )
                                            })}
                                          </div>
                                        )}
                                      </>
                                    )}
                                  </div>

                                  <div className="flex justify-end gap-3">
                                    {hasSpecifications && (
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
                                    <Button
                                      size="lg"
                                      className="bg-primary hover:bg-primary/90 text-white px-8"
                                      asChild
                                    >
                                      <a href="https://wa.me/79647634277" target="_blank" rel="noopener noreferrer">
                                        Купить
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
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
