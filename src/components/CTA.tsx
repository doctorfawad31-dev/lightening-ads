import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Zap } from "lucide-react"
import { useState } from "react"

const CTA = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <section className="py-10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute top-20 left-20 md:w-64 md:h-64 w-40 h-40 bg-electric-blue/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 md:w-96 md:h-96 w-56 h-56 bg-electric-purple/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto md:px-6 px-3 relative z-10">
        <div className="max-w-4xl mx-auto md:text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow">
              <Zap className="md:h-12 md:w-12 sm:h-8 sm:w-8 h-5 w-5 text-foreground" />
            </div>
          </div>
          
          {/* <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ready to Scale Your Business?
            </span>
          </h2> */}
           <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight md:px-4 px-1">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
                 Ready to Scale Your Business?
            </span>{" "}
           
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto md:px-4 px-1">
            Join 500+ successful businesses using our premium advertising accounts and expert management services.
          </p>

          {/* Email Signup */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input 
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 md:text-lg text-sm border-border/50 focus:border-primary"
              required
            />
            <Button 
              type="submit"
              className="bg-gradient-primary hover:shadow-electric transition-all duration-300 px-8 py-3 md:text-lg group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mb-8">
            No credit card required • Setup in 24 hours • Cancel anytime
          </p>

          {/* Alternative CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 text-lg border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              Schedule a Call
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="px-8 py-3 text-lg hover:bg-primary/10 transition-all duration-300"
            >
              View Pricing
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30">
            <div className="text-center">
              <div className="text-md sm:text-xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="md:text-sm text-xs text-muted-foreground mt-1">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-md sm:text-xl md:text-3xl font-bold text-primary">99.9%</div>
              <div className="md:text-sm text-xs text-muted-foreground mt-1">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-md sm:text-xl md:text-3xl font-bold text-primary">30-Day</div>
              <div className="md:text-sm text-xs text-muted-foreground mt-1">Money Back</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA