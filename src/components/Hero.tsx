import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

const heroImage = "https://res.cloudinary.com/djecn7fxz/image/upload/v1759823050/main-imageeeee2121_ce0ivr.png"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden mt-20">
      {/* Mobile Background Image */}
      <div className="absolute inset-0 md:hidden">
        <img 
          src={heroImage} 
          alt="High-Trust Marketing Solutions" 
          className="w-full h-full object-cover object-center"
        />
        {/* Mobile Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Desktop Two-Column Layout */}
      <div className="relative z-10 container mx-auto px-6 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
          {/* Left Column - Content */}
          <div className="relative z-10 text-left flex flex-col justify-center py-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                High-Trust Marketing Solutions
              </span>
            </h1>
            
            <p className="text-sm md:text-base text-foreground/80 mb-6 max-w-lg">
              Access aged, warmed marketing agency accounts with unlimited spending limits. Skip restrictions and scale immediately.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-electric transition-all duration-300 px-6 h-12 text-sm font-medium group"
              >
                Get Agency Accounts
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="px-6 h-12 text-sm font-medium border-foreground/30 hover:border-foreground/50 hover:bg-foreground/5 transition-all duration-300 group"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform fill-current" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Active Campaigns
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  $10M+
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Ad Spend Managed
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image (Desktop Only) */}
          <div className="hidden md:flex items-center justify-center h-full">
            <img 
              src={heroImage} 
              alt="High-Trust Marketing Solutions" 
              className="w-full h-auto max-h-[700px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero