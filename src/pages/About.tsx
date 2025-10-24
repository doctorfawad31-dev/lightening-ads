import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp,
  Shield,
  Zap
} from "lucide-react"
const teamAnalytics = "https://res.cloudinary.com/djecn7fxz/image/upload/v1759382970/Overlay_Shadow_a8rhot.png"

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Lightning Ads",
      "description": "Leading provider of premium agency advertising accounts helping businesses scale campaigns without restrictions",
      "foundingDate": "2020",
      "numberOfEmployees": "50-100",
      "slogan": "High-Trust Marketing Solutions"
    }
  };

  const stats = [
    { number: "500+", label: "Active Clients", icon: Users },
    { number: "$50M+", label: "Ad Spend Managed", icon: Target },
    { number: "98%", label: "Client Satisfaction", icon: Award },
    { number: "40+", label: "Supported Platforms", icon: TrendingUp }
  ]

  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize the security and compliance of all agency accounts, ensuring long-term stability for your campaigns."
    },
    {
      icon: TrendingUp,
      title: "Performance Focus",
      description: "Our team is dedicated to maximizing your advertising ROI through data-driven optimization and strategic planning."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of platform changes and industry trends to provide cutting-edge advertising solutions."
    }
  ]

  return (
    <>
      <SEO 
        title="About Lightning Ads - Premium Advertising Account Provider"
        description="Learn about Lightning Ads, the leading provider of premium agency advertising accounts. We help businesses scale campaigns without restrictions across 40+ platforms including Google, Meta, and TikTok."
        keywords="about lightning ads, advertising agency, premium ad accounts provider, agency account services, marketing solutions"
        canonical="/about"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section with Stats */}
        <section className="relative md:pt-44 pt-12 md:pb-12 overflow-hidden">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto text-center">
            
               <h2 className="text-[23.4px] md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight ">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  About Lightning Ads
                </span>{" "}
              </h2>
            <p className="text-[13px] md:text-lg text-white leading-relaxed max-w-3xl mx-auto ">
              We're the leading provider of premium agency advertising accounts, helping businesses scale their campaigns without restrictions across all major platforms.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="pt-6 pb-6">
                      <div className="mx-auto p-2 bg-gradient-primary/10 rounded-lg w-fit mb-3">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-[19.9px] md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
                        {stat.number}
                      </div>
                      <div className="text-[11.1px] text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="md:py-20 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[22px] md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-center md:text-left">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Our Story
                </span>{" "}
              </h2>
              <p className="text-[12.9px] md:text-lg text-white leading-relaxed max-w-3xl mx-auto ">
                Lightning Ads was founded with a simple mission: to remove the barriers that prevent businesses from scaling their advertising campaigns. We recognized that account restrictions, spending limits, and platform bans were holding back countless entrepreneurs and agencies.
              </p>
              <br />
              <p className="text-[12.9px] md:text-lg text-white leading-relaxed max-w-3xl mx-auto ">
                Since our inception, we've built relationships with premium account providers across all major advertising platforms, allowing us to offer aged, warmed accounts with unlimited spending capabilities and high trust scores.
              </p><br />
              <p className="text-[12.9px] md:text-lg text-white leading-relaxed max-w-3xl mx-auto ">
                Today, we serve over 500 active clients, managing more than $50M in monthly ad spend across Google, Meta, TikTok, Snapchat, and 40+ other platforms.
              </p><br />
              <Button className="bg-gradient-primary hover:shadow-electric transition-all duration-300">
                Get Started
              </Button>
            </div>
            <div>
              <img 
                src={teamAnalytics} 
                alt="Our Team" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="md:py-20 py-10 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[22px] md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight ">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Our Values
                </span>{" "}
              </h2>
            <p className="text-[12.9px] md:text-lg text-white leading-relaxed max-w-3xl mx-auto ">
              The principles that guide everything we do and shape our commitment to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-electric">
                  <CardHeader>
                    <div className="mx-auto p-4 bg-gradient-primary/10 rounded-lg w-fit mb-4 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="md:text-2xl text-[23px] mb-4">{value.title}</CardTitle>
                    <CardDescription className="text-muted-foreground md:text-base text-[14.8px]">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="md:py-20 py-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
          
             <h2 className="text-[22px] md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight ">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Ready to Scale Your Campaigns?
                </span>{" "}
              </h2>
            <p className="text-[12.9px] md:text-lg text-white leading-relaxed max-w-3xl mx-auto ">
              Join hundreds of successful advertisers who trust Lightning Ads for their agency account needs.
            </p> <br />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-electric transition-all duration-300 md:text-base text-[13.1px]">
                Get Agency Accounts
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10 md:text-base text-[13.1px]">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}

export default About