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
  ArrowRight
} from "lucide-react"

const Services = () => {
const services = [
    {
      icon: Target,
      title: "Google Ads Agency Accounts",
      description: "Premium Google Ads accounts with unlimited spending limits and established trust scores for Search, Display, and YouTube campaigns.",
      features: ["Search Campaigns", "Display Network", "YouTube Advertising", "Shopping Campaigns"],
      badge: "Most Popular"
    },
    {
      icon: Users,
      title: "Meta (Facebook & Instagram)",
      description: "Aged Meta advertising accounts for Facebook and Instagram with high trust scores and no spending restrictions.",
      features: ["Facebook Ads", "Instagram Ads", "Reels Advertising", "Stories Promotion"],
      badge: ""
    },
    {
      icon: TrendingUp,
      title: "TikTok for Business",
      description: "High-performance TikTok advertising accounts for reaching younger demographics with creative campaign formats.",
      features: ["In-Feed Ads", "Branded Effects", "TopView Campaigns", "Spark Ads"],
      badge: "Trending"
    },
    {
      icon: Shield,
      title: "Snapchat Ads Manager",
      description: "Premium Snapchat advertising accounts for creative AR campaigns and story advertising formats.",
      features: ["Snap Ads", "Story Ads", "Collection Ads", "AR Lenses"],
      badge: ""
    },
    {
      icon: BarChart3,
      title: "LinkedIn Business & Twitter/X",
      description: "Professional B2B advertising accounts for LinkedIn and Twitter/X with advanced targeting capabilities.",
      features: ["Sponsored Content", "Message Ads", "Promoted Tweets", "Lead Generation"],
      badge: ""
    },
    {
      icon: Zap,
      title: "40+ Additional Platforms",
      description: "Access agency accounts across Pinterest, Reddit, YouTube, Bing, and 35+ other advertising platforms.",
      features: ["Pinterest Business", "Reddit Ads", "Bing Ads", "YouTube Premium"],
      badge: "Enterprise"
    }
  ]

  return (
    <section id="services" className="md:py-20 py-10 bg-card/20">
      <div className="container mx-auto md:px-6 px-3">
        <div className="md:mb-16 mb-6 md:text-center">
          {/* <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Agency Account Solutions
            </span>
          </h2> */}
           <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight md:px-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
               Agency Account Solutions
            </span>{" "}
           
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto md:px-4">
            Access premium, aged advertising accounts across Google, Meta, TikTok, Snapchat, LinkedIn, and 40+ platforms. No more account bans or spending limits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-electric">
                {service.badge && (
                  <Badge className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground">
                    {service.badge}
                  </Badge>
                )}
                
                <CardHeader>
                  <div className="p-3 bg-gradient-primary/10 rounded-lg w-fit md:mb-4 group-hover:shadow-glow transition-all duration-300">
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
                      <li key={featureIndex} className="flex items-center text-sm text-white">
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

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-electric transition-all duration-300 px-8 py-6 md:text-lg"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services