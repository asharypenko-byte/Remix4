"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "/elegant-classic-sofa.png",
      alt: "Классический диван в интерьере",
    },
    {
      id: 2,
      src: "/modern-living-room-corner-sofa.png",
      alt: "Угловой диван в современной гостиной",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Кожаный диван в кабинете",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Модульный диван в просторной гостиной",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Кресла в интерьере спальни", // заменил "Особая серия" на "Кресла"
    },
    {
      id: 6,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Компактный диван в скандинавском стиле",
    },
  ]

  const handlePrev = () => {
    if (activeImage === null) return
    setActiveImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    if (activeImage === null) return
    setActiveImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Галерея наших работ</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Взгляните на наши диваны в реальных интерьерах наших клиентов.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setActiveImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {activeImage !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-accent"
              onClick={() => setActiveImage(null)}
            >
              <X className="h-8 w-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="max-w-4xl max-h-[80vh]">
              <img
                src={galleryImages[activeImage].src || "/placeholder.svg"}
                alt={galleryImages[activeImage].alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
