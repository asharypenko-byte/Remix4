"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.")
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        })
      } else {
        alert(result.error || "Произошла ошибка при отправке заявки")
      }
    } catch (error) {
      console.error("Ошибка:", error)
      alert("Произошла ошибка при отправке заявки")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAddressClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      // Для мобильных устройств - открываем навигатор с маршрутом
      window.open(
        "https://yandex.ru/maps/10740/mytischi/?ll=37.750828%2C55.929335&mode=routes&rtext=~55.929198%2C37.750652&rtt=auto&z=17",
        "_blank",
      )
    } else {
      // Для десктопа - открываем карты с точкой магазина
      window.open("https://yandex.ru/maps/org/rodion/187716621646/", "_blank")
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Готовы обсудить ваш проект или ответить на любые вопросы о нашей продукции.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-bold mb-6">Наше расположение</h3>
            <div className="w-full h-96 rounded-lg overflow-hidden" style={{ position: "relative" }}>
              <a
                href="https://yandex.ru/maps/org/rodion/187716621646/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#333",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0px",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  padding: "2px 4px",
                  borderRadius: "2px",
                }}
              >
                Rodion
              </a>
              <a
                href="https://yandex.ru/maps/10740/mytischi/category/upholstered_furniture/184107877/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#333",
                  fontSize: "12px",
                  position: "absolute",
                  top: "20px",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  padding: "2px 4px",
                  borderRadius: "2px",
                }}
              >
                Мягкая мебель в Мытищах
              </a>
              <iframe
                src="https://yandex.ru/map-widget/v1/?indoorLevel=2&ll=37.750828%2C55.929335&mode=poi&poi%5Bpoint%5D=37.750652%2C55.929198&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D187716621646&z=17"
                width="100%"
                height="100%"
                frameBorder="1"
                allowFullScreen={true}
                style={{ position: "relative" }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Приезжайте к нам в шоурум для личного знакомства с коллекцией
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">Контактная информация</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Телефон</h4>
                    <a href="tel:+79647634277" className="text-muted-foreground hover:text-accent">
                      +7 (964) 763-42-77
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:mastersdim@yandex.ru" className="text-muted-foreground hover:text-accent">
                      mastersdim@yandex.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Адрес шоурума</h4>
                    <button
                      onClick={handleAddressClick}
                      className="text-muted-foreground hover:text-accent text-left cursor-pointer transition-colors"
                    >
                      г. Мытищи, Олимпийский проспект, 29с1
                      <br />
                      ТЦ «Формат», 2 этаж
                    </button>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Часы работы</h4>
                    <p className="text-muted-foreground">Ежедневно 10:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
