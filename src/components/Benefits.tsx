import { CheckCircle, Clock, DollarSign, Shield } from "lucide-react"
import teamImage from "@/assets/team-analytics.jpg"

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Lightning Fast Setup",
      description: "Get your campaigns running in under 24 hours with our streamlined onboarding process."
    },
    {
      icon: DollarSign,
      title: "Higher ROI Guaranteed",
      description: "Our proven strategies deliver 3x better performance than industry averages."
    },
    {
      icon: Shield,
      title: "100% Compliance",
      description: "All accounts are fully compliant with platform policies and thoroughly vetted."
    },
    {
      icon: CheckCircle,
      title: "Success Guaranteed",
      description: "We don't succeed unless you do. Your success is our top priority."
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose 
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {" "}Lightning Ads
              </span>
              ?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              We're not just another marketing agency. We're your partners in growth, 
              providing the tools, accounts, and expertise you need to dominate your market.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="p-3 bg-gradient-primary/10 rounded-lg group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-electric">
              <img 
                src={teamImage} 
                alt="Lightning Ads Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/20" />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-glow">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                $2.5M+
              </div>
              <div className="text-sm text-muted-foreground">
                Revenue Generated This Month
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits