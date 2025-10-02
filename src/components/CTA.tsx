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
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-electric-blue/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-electric-purple/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow">
              <Zap className="h-12 w-12 text-foreground" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ready to Scale Your Business?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join 500+ successful businesses using our premium advertising accounts and expert management services.
          </p>

          {/* Email Signup */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input 
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 text-lg border-border/50 focus:border-primary"
              required
            />
            <Button 
              type="submit"
              className="bg-gradient-primary hover:shadow-electric transition-all duration-300 px-8 py-3 text-lg group"
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
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground mt-1">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">30-Day</div>
              <div className="text-sm text-muted-foreground mt-1">Money Back</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA