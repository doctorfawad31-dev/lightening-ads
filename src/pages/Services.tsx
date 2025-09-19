import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  Users,
  ArrowRight,
  Globe,
  Smartphone,
  Video,
  Camera
} from "lucide-react"
import platformsHero from "@/assets/platforms-hero.jpg"
import agencyDashboard from "@/assets/agency-dashboard.jpg"
import scalingSolutions from "@/assets/scaling-solutions.jpg"
import GoogleAdsOfficial from "@/assets/icons/google-ads-official.png"
import MetaOfficial from "@/assets/icons/meta-official.png"
import TikTokOfficial from "@/assets/icons/tiktok-official.png"
import SnapchatOfficial from "@/assets/icons/snapchat-official.png"
import LinkedInOfficial from "@/assets/icons/linkedin-official.png"
import TwitterXOfficial from "@/assets/icons/twitter-x-official.png"

const Services = () => {
  const platformServices = [
    {
      iconSrc: GoogleAdsOfficial,
      title: "Google Ads Agency Accounts",
      description: "Premium Google Ads accounts with unlimited spending limits and high trust scores.",
      features: ["Search Campaigns", "Display Network", "YouTube Advertising", "Shopping Campaigns"],
      badge: "Most Popular"
    },
    {
      iconSrc: MetaOfficial,
      title: "Meta (Facebook & Instagram)",
      description: "Aged Meta advertising accounts for Facebook and Instagram campaigns.",
      features: ["Facebook Ads", "Instagram Ads", "Reels Advertising", "Stories Promotion"],
      badge: ""
    },
    {
      iconSrc: TikTokOfficial,
      title: "TikTok for Business",
      description: "High-performance TikTok advertising accounts for reaching younger demographics.",
      features: ["In-Feed Ads", "Branded Effects", "TopView Campaigns", "Spark Ads"],
      badge: "Trending"
    },
    {
      iconSrc: SnapchatOfficial,
      title: "Snapchat Ads",
      description: "Premium Snapchat advertising accounts for creative campaign formats.",
      features: ["Snap Ads", "Story Ads", "Collection Ads", "AR Lenses"],
      badge: ""
    },
    {
      iconSrc: TwitterXOfficial,
      title: "Twitter/X Advertising",
      description: "Professional Twitter advertising accounts for B2B and engagement campaigns.",
      features: ["Promoted Tweets", "Video Ads", "Conversation Ads", "Takeover Campaigns"],
      badge: ""
    },
    {
      iconSrc: LinkedInOfficial,
      title: "LinkedIn Business",
      description: "Enterprise LinkedIn advertising accounts for professional targeting.",
      features: ["Sponsored Content", "Message Ads", "Dynamic Ads", "Lead Gen Forms"],
      badge: "Enterprise"
    }
  ]

  const mainServices = [
    {
      icon: Target,
      title: "Premium Agency Accounts",
      description: "Access aged, warmed advertising accounts with established trust scores and unlimited spending limits across all platforms.",
      features: ["Aged Facebook & Instagram", "High-Trust Google Ads", "Warmed TikTok Accounts", "Unlimited Spending Limits"],
      badge: "Most Popular"
    },
    {
      icon: TrendingUp,
      title: "Campaign Management",
      description: "Full-service campaign optimization and management by our team of certified experts.",
      features: ["Campaign Setup", "A/B Testing", "Performance Optimization", "Reporting"],
      badge: ""
    },
    {
      icon: Shield,
      title: "Account Protection",
      description: "Advanced account warming and protection services to ensure long-term campaign stability.",
      features: ["Account Warming", "Compliance Monitoring", "Risk Management", "24/7 Support"],
      badge: ""
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${platformsHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        </div>
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Advertising Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive agency account solutions across all major advertising platforms. Scale your campaigns without restrictions.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-electric transition-all duration-300">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Services */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Supported Platforms
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access premium agency accounts across all major advertising platforms with unlimited spending capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformServices.map((service, index) => (
              <Card key={index} className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-electric">
                {service.badge && (
                  <Badge className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground">
                    {service.badge}
                  </Badge>
                )}
                
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gray-800/80 flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                    <img src={service.iconSrc} alt={`${service.title} logo`} className="h-6 w-6 object-contain" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full group border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Core Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete agency account management and optimization services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-electric">
                  {service.badge && (
                    <Badge className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground">
                      {service.badge}
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <div className="p-3 bg-gradient-primary/10 rounded-lg w-fit mb-4 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full group border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Visual Sections with Images */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src={agencyDashboard} 
                alt="Agency Dashboard" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Advanced Analytics & Reporting
                </span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Get comprehensive insights into your campaign performance across all platforms with our advanced dashboard and reporting tools.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Real-time performance tracking
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Cross-platform campaign analysis
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Custom reporting dashboards
                </li>
              </ul>
              <Button className="bg-gradient-primary hover:shadow-electric transition-all duration-300">
                View Demo
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Scaling Solutions
                </span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Rapidly scale your advertising campaigns with our proven methodologies and advanced automation tools.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Automated campaign optimization
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Multi-platform scaling strategies
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Advanced audience targeting
                </li>
              </ul>
              <Button className="bg-gradient-primary hover:shadow-electric transition-all duration-300">
                Learn More
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={scalingSolutions} 
                alt="Scaling Solutions" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Services