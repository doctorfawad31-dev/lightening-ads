import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import heroImage from "@/assets/lightning-hero.jpg"
import { useState, useEffect } from "react"

const Hero = () => {
  const [animationStarted, setAnimationStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Lightning Ads Hero" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <div className="bg-gradient-primary bg-clip-text text-transparent">
              <span 
                className={`inline-block opacity-0 ${animationStarted ? 'animate-word-slide-in' : ''}`}
                style={{ animationDelay: '0s' }}
              >
                Premium&nbsp;
              </span>
              <span 
                className={`inline-block opacity-0 ${animationStarted ? 'animate-word-slide-in' : ''}`}
                style={{ animationDelay: '0.3s' }}
              >
                Agency
              </span>
            </div>
            <br />
            <div>
              <span 
                className={`inline-block opacity-0 ${animationStarted ? 'animate-word-slide-in' : ''}`}
                style={{ animationDelay: '0.8s' }}
              >
                Ad&nbsp;
              </span>
              <span 
                className={`inline-block opacity-0 ${animationStarted ? 'animate-word-slide-in' : ''}`}
                style={{ animationDelay: '1.1s' }}
              >
                Accounts
              </span>
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access aged, warmed marketing agency accounts with unlimited spending limits across all major platforms. 
            Skip the restrictions and scale immediately.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-electric transition-all duration-300 px-8 py-6 text-lg group"
            >
              Get Agency Accounts
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Active Campaigns
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                $10M+
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Ad Spend Managed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero