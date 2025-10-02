import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

type TestimonialType = {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const testimonial: TestimonialType = {
    name: "Sarah Johnson",
    role: "E-commerce Director",
    company: "TechFlow Inc.",
    image: "https://res.cloudinary.com/djecn7fxz/image/upload/v1759390366/image_2_opaqsc.png",
    content: "Lightning Ads transformed our advertising performance. We saw a 300% increase in ROAS within the first month. Their team is incredible!",
    rating: 5
  }

  // Duplicate testimonials for continuous scroll effect
  const row1Testimonials = Array(8).fill(testimonial)
  const row2Testimonials = Array(8).fill(testimonial)

  const TestimonialCard = ({ testimonial, index }: { testimonial: TestimonialType; index: number }) => (
    <div className="flex-shrink-0 w-[350px] mx-4">
      <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-electric group h-full">
        <CardContent className="p-6">
          {/* Author */}
          <div className="flex items-center space-x-3 mb-4">
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

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-lightning-yellow fill-lightning-yellow" />
            ))}
          </div>

          {/* Content */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            "{testimonial.content}"
          </p>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <section className="py-20 bg-card/20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with Lightning Ads.
          </p>
        </div>

        {/* First Row - Scroll Right to Left */}
        <div className="relative mb-6 overflow-hidden">
          <div className="flex animate-scroll-left">
            {row1Testimonials.map((item, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={item} index={index} />
            ))}
            {row1Testimonials.map((item, index) => (
              <TestimonialCard key={`row1-duplicate-${index}`} testimonial={item} index={index} />
            ))}
          </div>
        </div>

        {/* Second Row - Scroll Right to Left */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left-delayed">
            {row2Testimonials.map((item, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={item} index={index} />
            ))}
            {row2Testimonials.map((item, index) => (
              <TestimonialCard key={`row2-duplicate-${index}`} testimonial={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials