import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Benefits from "@/components/Benefits"
import Testimonials from "@/components/Testimonials"
import ReviewPlatforms from "@/components/ReviewPlatforms"
import CTA from "@/components/CTA"
import ConsultationSection from "@/components/ConsultationSection"
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
        <ReviewPlatforms />
        <CTA />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  )
}

export default Index