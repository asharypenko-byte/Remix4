"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ImageModal from "./image-modal"

const products = [
  {
    id: 1,
    name: "Диван-кровать «Турин»",
    description:
      'Данная модель имеет механизм расскладывания "выкатная еврокнижка". На боковом каркасе, матрац пружинный блок и высокоэлластичный пенополиуротан. Габарит дивана: 216*103. Спальное место: 150*190.',
    originalPrice: 124875,
    salePrice: 85000,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-6ii6jVykTGdVU30hbccrRodmdP1C7I.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-zQKDqiuhUyepwTUc95MHXSN7ZpU4Rj.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-E0YfzITQbPlL6qs0nZAFFgF91BE6Ia.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-56yrPhm1C5QrzJLymLojx1ciZ7EmDF.jpeg",
    ],
  },
  {
    id: 2,
    name: "Прямой диван «502 П»",
    description:
      "Шагающая еврокнижка на ножках, полностью на металокаркасе и сварной металлической сетке. Матрац - блок независимых пружин и высокоэлластичный ППУ, марки HS. Габарит дивана: 228*103. Спальное место 155*200.",
    originalPrice: 109800,
    salePrice: 75000,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-4Qu6SsJLa18ygov7hZXcYkWz1LsNTW.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-yEOlFo2thRkzQ9Bo9S93OwPU9E0Lek.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-a380ixXKAqmIHvAVXklKjMKsZFAlTK.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-Rg95F5ia1a4Q8cmwQbhKaR71dGhx27.jpeg",
    ],
  },
  {
    id: 3,
    name: "Диван-кровать Маркиз",
    description: "Механизм аккордеон, ткань антивандальная. Габариты: 195*120. Спальное место: 165*205.",
    originalPrice: 104040,
    salePrice: 78000,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-5WSIzzAQzjAJyoVuqjLMs61Uo3W6bB.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-UB0ypMjP5WSlHksHOszE0HTREcSZh6.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-PC7pAUd3o4Do1lbHFpoySVdVolLANk.jpeg",
    ],
  },
  {
    id: 4,
    name: "Николь",
    description: "Диван-кровать с механизмом аккордеон. Ткань шенил. Габариты: 178*110. Спальное место: 165*205.",
    originalPrice: 107318,
    salePrice: 78000,
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-9MdP2uV321KchHxzdt1gX3w6fntonQ.jpeg"],
  },
  {
    id: 5,
    name: "Дориан",
    description:
      "Диван-кровать с механизмом аккордеон, наполнитель матраца Высокоэлластичный пенополиуротан (ППУ), на заказ можно предположить три вида матраца разной высоты. Габарит: 178*107. Спальное место: 165*205",
    originalPrice: 106382,
    salePrice: 85000,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-CgWKKckjKdyfVdWCcnmMG69ZBohUIi.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-rhCk3rBEUx5yzhlkoNtngasRQ8GnL7.jpeg",
    ],
  },
  {
    id: 6,
    name: "Бруно",
    description:
      "Кресло-кровать с механизмом аккордеон. Ткань антивандальная, велюр, матрац ППУ. Габарит: 92*105. Спальное место: 80*205.",
    originalPrice: 72580,
    salePrice: 55000,
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-jqUkzt9lFupNmdNqCi0wsMGqoXCyx7.jpeg"],
  },
  {
    id: 7,
    name: "Меркурий",
    description:
      "Диван-кровать с механизмом аккордеон. Ткань велюр, матрац ППУ. Габарит: 220*120. Спальное место: 190*205.",
    originalPrice: 114100,
    salePrice: 86000,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-SyfRNWfdAftACT0j1vMGC4ZFujnmZg.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-8EBwuWif9zLoQ0WalBE1q4E7qh3r5x.jpeg",
    ],
  },
  {
    id: 8,
    name: "Виконт",
    description:
      "Диван-кровать с механизмом аккордеон. Ткань велюр, матрац ППУ, марка HR. В подлокотниках ящики для хранения + USB выход. Габарит: 246*113. Спальное место: 190*205.",
    originalPrice: 146980,
    salePrice: 117000,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-NIegPv5GsFT31tmniZQmWGBxBda5en.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-Qs5LgYO8T5DtMCju8WuVeQLPBKjiZL.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-uq4uGzhvZR5eJ3Z1EkBv5j4z4v800j.jpeg",
    ],
  },
  {
    id: 9,
    name: "Стенли",
    description:
      "Диван-кровать с механизмом аккордеон. Массив бука, ткань мех (эффект каракульча), матрац ППУ. Габарит: 174*113. Спальное место: 150*205",
    originalPrice: 175450,
    salePrice: 140555,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-0TmFrbVbqyGlhgM4DaMrUkIKcEAsSx.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-hKTOA2XE2Ul7eKW9hGeayUW4JvaxpG.jpeg",
    ],
  },
  {
    id: 10,
    name: "Амадей",
    description:
      "Диван-кровать из массива бука, ткань жаккард, матрац независимый пружинный блок. Габарит: 180*120. Спальное место: 165*205.",
    originalPrice: 169555,
    salePrice: 127000,
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-kuuWIavRPGknGUNaUbP0hQ4Ymco1PQ.jpeg"],
  },
  {
    id: 11,
    name: "Кресло Амадей",
    description: "Кресло из массива бука, ткань жаккард, наполнитель ППУ. Габарит: 77. Глубина: 95, Высота: 102.",
    originalPrice: 85503,
    salePrice: 77000,
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-mTGBTKtdbzqy3cMuXs5LcIwCZ9jTGi.jpeg"],
  },
  {
    id: 12,
    name: "Угловой диван-кровать",
    description:
      "Диван-кровать с механизмом аккордеон. Широкие вместительные подлокотники. В оттоманке бельевой ящик. В одном из подлокотников USB выход. Ткань антивандальный велюр, матрац ППУ. Габарит: 305. Оттоманка: 175. Спальное место: 165*205.",
    originalPrice: 213532,
    salePrice: 155000,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.jpg-zPiZExuB11Hqk5B9SNhl1AJZRR3aKj.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9.jpg-FNeIto2bDScQcGzpYm3NcbhjgFzaii.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10.jpg-VyMj1fX1bpfFybJtNuobiGcuyuMEmZ.jpeg",
    ],
  },
  {
    id: 14,
    name: "Калипсо-13",
    description:
      "Еврокнижка с механизмом тик-так, ткань шенил, матрац независимый пружинный блок. Габарит: 214*110. Спальное место: 150*195.",
    originalPrice: 143220,
    salePrice: 114577,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-GhJKCDjMhBpw4PVu82lc60ym5YuFoH.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-STHiVqPP7wLw7gtheHsdy0p63CwV1E.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-nwVEwy3xkzA7TBDQqR38vmnJQF0EB4.jpeg",
    ],
  },
  {
    id: 15,
    name: "Грация-3",
    description: "Еврокнижка с механизмом тик-так, ткань велюр, матрац ППУ. Габарит: 225*104. Спальное место: 150*194.",
    originalPrice: 166738,
    salePrice: 130000,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-NmRBwjX8ck8hMaPuCBPB8o4FL7sQhT.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-SRRrx5nO4McjMv0ivNb28vkXEOb0fp.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-6vbpyG9KKxLwGqvLcL2edZlci183Q0.jpeg",
    ],
  },
  {
    id: 16,
    name: "Мурано",
    description:
      "Диван кровать с механизмом книжка, ткань жаккард, матрац ППУ. Габарит: 223*103. Спальное место: 130*200.",
    originalPrice: 154748,
    salePrice: 85000,
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-7zJhISHdCZjUrDB27vZA6uV3r3D4f7.jpeg"],
  },
  {
    id: 17,
    name: "Дрёма",
    description:
      "Диван-кровать с механизмом еврософа, ткань шенил, матрац ППУ. Габарит: 226*90. Спальное место: 155*200.",
    originalPrice: 104698,
    salePrice: 83000,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-QMuBWTVsUkGwt4GvGmIfaVQ9wGhhBw.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-VlS7m8QOqfr7UfEru9VJFAluUN1XoA.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-mlnc0yDE0IHQ2Uu6aYYk3iNM7HViYa.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-fliANzRZwNY0fLJNv9fai3VfqVt44G.jpeg",
    ],
  },
  {
    id: 20,
    name: "Токио",
    description: "Кресло с ножками из бука, ткань велюр. Габарит: 75*80.5.",
    originalPrice: 71808,
    salePrice: 53000,
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10.jpg-CGfg7GI1DJwQ16a6bQJSNT3Eb5tDN7.jpeg"],
  },
  {
    id: 21,
    name: "Матео",
    description:
      "Модульный диван-кровать с механизмом пума, вместительный бельевой ящик, ткань шенил, матрац ППУ разной плотности. Габарит: 283*170. Спальное место: 150*240.",
    originalPrice: 184320,
    salePrice: 155000,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-GhJKCDjMhBpw4PVu82lc60ym5YuFoH.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-STHiVqPP7wLw7gtheHsdy0p63CwV1E.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-nwVEwy3xkzA7TBDQqR38vmnJQF0EB4.jpeg",
    ],
  },
  {
    id: 22,
    name: "Честерфилд",
    description: "Кресло с ножками, ткань велюр, сидушка мемори. Габарит: 106*94.",
    originalPrice: 79618,
    salePrice: 63000,
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-5LIfzTscQoXsH1CmGc84umEUCR0wgh.jpeg"],
  },
  {
    id: 23,
    name: "Токио",
    description: "2-ух местный диван с ножками из бука, ткань велюр, наполнитель ППУ. Габарит: 131*80.5.",
    originalPrice: 92664,
    salePrice: 69498,
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-RCDHwhpk2HI9xg0Ug2nVwpXSQG4Cwj.jpeg"],
  },
  {
    id: 24,
    name: "Бари",
    description:
      "Кресло с пуфом на ножках из бука, ткань жаккардовый шенил, наполнитель РРУ. Габарит кресла:76*80. Высота: 96.",
    originalPrice: 139887,
    salePrice: 95000,
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-7zJhISHdCZjUrDB27vZA6uV3r3D4f7.jpeg"],
  },
  {
    id: 25,
    name: "Лорд",
    description: "Кресло с пуфом на ножках, ткань велюр, наполнитель мемори. Габарит кресла: 78*80. Высота: 100.",
    originalPrice: 155295,
    salePrice: 93000,
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-xTl5HVByZG4sbU3hCUfOdh3TtwrB3z.jpeg"],
  },
  {
    id: 26,
    name: "Прага",
    description: "Кресло на ножках из бука, ткань мех, матрац ППУ. Габарит: 74*84.",
    originalPrice: 86638,
    salePrice: 65000,
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.jpg-ENL70pRyHX9QOqc5q9a1kSaUhpYOUw.jpeg"],
  },
  {
    id: 27,
    name: "Шеридан",
    description:
      "Кресло-рек лайнер, автоматическое с USB разъемом, вращается на 360 градусов и качается, ткань велюр. Габарит:90*101. Высота: 108.",
    originalPrice: 129778,
    salePrice: 87000,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-L3mvqxArNUc0bsw439wrOhl4xieX50.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-VNBnCCG0MldlD8U4gLEqmtbfbpVQs2.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-3S01Ltx19Q2T0fLpNaIRDaQt0tCT7p.jpeg",
    ],
  },
].filter(
  (product) =>
    !(product.id === 13 && product.name === "Турин") && !(product.id === 19 && product.name === "Честерфилд"),
)

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

export default function CatalogGrid() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow relative hover-bronze-outline"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 p-6">
                  <ProductCarousel images={product.images} productName={product.name} />
                </div>

                <div className="lg:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{product.name}</h3>
                    {product.description && (
                      <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {product.originalPrice !== product.salePrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice.toLocaleString("ru-RU")} ₽
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary">
                        {product.salePrice.toLocaleString("ru-RU")} ₽
                      </span>
                    </div>

                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8" asChild>
                      <a href="https://wa.me/79647634277" target="_blank" rel="noopener noreferrer">
                        Купить
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
