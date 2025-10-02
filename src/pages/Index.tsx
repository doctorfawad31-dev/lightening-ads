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
import SEO from "@/components/SEO"

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lightning Ads",
    "description": "Premium advertising agency accounts with unlimited spending limits across all major platforms",
    "url": "https://lightningads.com",
    "logo": "https://lovable.dev/opengraph-image-p98pqg.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "Sales",
      "email": "support@lightningads.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/lightningads"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  };

  return (
    <>
      <SEO 
        title="Lightning Ads - Premium Marketing Agency Accounts"
        description="Access aged, warmed marketing agency accounts with unlimited spending limits across Google, Meta, TikTok, and 40+ platforms. Skip restrictions and scale immediately."
        keywords="premium ad accounts, agency accounts, Google Ads accounts, Meta advertising, TikTok ads, unlimited ad spend, aged accounts, warmed accounts, advertising agency"
        canonical="/"
        structuredData={structuredData}
      />
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
    </>
  )
}

export default Index