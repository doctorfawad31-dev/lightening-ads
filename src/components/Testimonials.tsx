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
    <div className="flex-shrink-0 md:w-[350px] sm:w-[250px] w-[200px] md:mx-4 mx-2">
      <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-electric group h-full">
        <CardContent className="md:p-6 p-1.5">
          {/* Author */}
          <div className="flex items-center space-x-3 md:mb-4 mb-2">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="md:w-12 md:h-12 h-8 w-8 rounded-full object-cover border-2 border-primary/30"
            />
            <div>
              <div className="font-semibold text-foreground">{testimonial.name}</div>
              <div className="md:text-sm text-xs text-muted-foreground">
                {testimonial.role} • {testimonial.company}
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1 md:mb-4 mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="md:h-4 md:w-4 h-2 w-2 text-lightning-yellow fill-lightning-yellow" />
            ))}
          </div>

          {/* Content */}
          <p className="text-muted-foreground md:text-sm text-xs leading-relaxed">
            "{testimonial.content}"
          </p>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <section className="md:py-20 py-10 bg-card/20 overflow-hidden">
      <div className="container mx-auto md:px-6 px-3">
        <div className="text-center mb-12">
        
           <h2 className="text-[22px] md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight md:px-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              What Our Clients Say
            </span>{" "}
           
          </h2>
          <p className="text-[13.1px] md:text-lg text-white leading-relaxed max-w-3xl mx-auto ">
            Don't just take our word for it. Here's what industry leaders say about working with Lightning Ads.
          </p>
        </div>

        {/* First Row - Scroll Right to Left */}
        <div className="relative md:mb-6 mb-3 overflow-hidden">
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