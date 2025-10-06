import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Collection from "@/components/collection"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import Promotions from "@/components/promotions"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Collection />
      <Process />
      <Testimonials />
      <Promotions />
      <Contact />
      <Footer />
    </main>
  )
}
