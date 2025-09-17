import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Director",
      company: "TechFlow Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Lightning Ads transformed our advertising performance. We saw a 300% increase in ROAS within the first month. Their team is incredible!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "GrowthLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The account quality and support are unmatched. We've been able to scale from $10K to $100K monthly ad spend without any issues.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "CEO",
      company: "Digital Dynamics",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Finally, an agency that actually delivers results. Our conversion rates doubled and customer acquisition costs decreased by 40%.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Growth Hacker",
      company: "StartupBoost",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Lightning Ads gave us access to premium accounts that we couldn't get elsewhere. The ROI has been phenomenal from day one.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our 
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with Lightning Ads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-electric group">
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-lightning-yellow fill-lightning-yellow" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 text-lg italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by 500+ companies worldwide</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold">TechFlow</div>
            <div className="text-2xl font-bold">GrowthLab</div>
            <div className="text-2xl font-bold">Digital Dynamics</div>
            <div className="text-2xl font-bold">StartupBoost</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials