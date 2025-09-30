import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Benefits from "@/components/Benefits"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import PlatformBanner from "@/components/PlatformBanner"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PlatformBanner />
        <Services />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default Index