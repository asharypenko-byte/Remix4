import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, message } = await request.json()

    // Валидация данных
    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: "Все поля обязательны для заполнения" }, { status: 400 })
    }

    // Формируем текст письма
    const emailContent = `
Новая заявка с сайта Клöвер

Имя: ${name}
Телефон: ${phone}
Email: ${email}

Сообщение:
${message}

---
Отправлено: ${new Date().toLocaleString("ru-RU")}
    `.trim()

    // В реальном проекте здесь будет отправка через email сервис
    // Например, через Nodemailer, SendGrid, или другой сервис
    console.log("Отправка письма на asharypenko@gmail.com:")
    console.log(emailContent)

    // Имитируем успешную отправку
    return NextResponse.json({
      success: true,
      message: "Заявка успешно отправлена",
    })
  } catch (error) {
    console.error("Ошибка при отправке заявки:", error)
    return NextResponse.json({ error: "Произошла ошибка при отправке заявки" }, { status: 500 })
  }
}
