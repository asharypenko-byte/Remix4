import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t-2 border-accent">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold tracking-tight text-accent">Клöвер</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Эксклюзивные диваны премиум-класса, созданные с вниманием к каждой детали.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4 text-accent">Коллекции</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  {"Модульные системы"}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  {"Угловые диваны"}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  {"Прямые диваны"}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  {"Мебель для заведений и кресла"}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  {"В наличии"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4 text-accent">Информация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Гарантия
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  {""}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  {""}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4 text-accent">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">г. Мытищи, Олимпийский проспект, 29с1 </li>
              <li>
                <a href="tel:+74951234567" className="text-muted-foreground hover:text-accent transition-colors">
                  +7 (964) 763-42-77
                </a>
              </li>
              <li>
                <a
                  href="mailto:mastersdim@yandex.ru"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  mastersdim@yandex.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/30 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">© 2025 Клöвер. Все права защищены.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground text-sm hover:text-accent transition-colors">
              {""}
            </Link>
            <Link href="#" className="text-muted-foreground text-sm hover:text-accent transition-colors">
              {""}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
