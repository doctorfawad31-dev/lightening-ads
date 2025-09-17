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
      title: "Premium Ad Accounts",
      description: "Access high-trust advertising accounts across all major platforms with unlimited spending capabilities.",
      features: ["Facebook & Instagram", "Google Ads", "TikTok Ads", "Snapchat"],
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
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics dashboard and detailed performance reports for all your campaigns.",
      features: ["Real-time Analytics", "Custom Reports", "ROI Tracking", "Conversion Attribution"],
      badge: ""
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Assigned account manager and priority support to ensure your success every step of the way.",
      features: ["Dedicated Manager", "Priority Support", "Strategy Calls", "Onboarding"],
      badge: ""
    },
    {
      icon: Zap,
      title: "Scaling Solutions",
      description: "Advanced scaling strategies and tools to rapidly grow your advertising revenue.",
      features: ["Vertical Scaling", "Creative Testing", "Audience Expansion", "Automation"],
      badge: "Enterprise"
    }
  ]

  return (
    <section id="services" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to run successful advertising campaigns and scale your business to new heights.
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

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-electric transition-all duration-300 px-8 py-6 text-lg"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services