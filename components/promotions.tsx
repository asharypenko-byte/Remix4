"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Promotions() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 12,
    minutes: 30,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="promotions" className="py-20 bg-gradient-to-r from-accent/5 to-accent/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-2 border-accent shadow-xl">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              🔥 Скидка до 50% на диван из шоурума до конца месяца
            </h2>

            <p className="text-xl text-muted-foreground mb-8">Успейте купить свой диван премиум-качества со скидкой!</p>

            {/* Таймер обратного отсчёта */}
            <div className="flex justify-center gap-4 mb-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-accent text-accent-foreground rounded-lg p-4 min-w-[80px]">
                    <div className="text-2xl font-bold">{value.toString().padStart(2, "0")}</div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 capitalize">
                    {unit === "days" ? "дней" : unit === "hours" ? "часов" : unit === "minutes" ? "минут" : "секунд"}
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground px-8 py-4 text-lg" asChild>
              <a href="/catalog-sale">Выбрать диван</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
