import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  TrendingUp,
  Target,
  Zap,
  Award,
  Heart,
  Coffee,
  Laptop
} from "lucide-react"

const Careers = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Lightning Ads"
    },
    "description": "Join Lightning Ads and help revolutionize digital advertising by providing premium account solutions"
  };

  const openPositions = [
    {
      title: "Senior Campaign Manager",
      department: "Marketing",
      location: "New York, NY / Remote",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      description: "Lead high-performance advertising campaigns across multiple platforms including Google, Meta, TikTok, and more.",
      requirements: ["5+ years in digital advertising", "Google Ads & Meta certified", "Experience with agency accounts"],
      icon: Target
    },
    {
      title: "Account Protection Specialist",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      salary: "$65,000 - $90,000",
      description: "Ensure the security and compliance of premium advertising accounts through advanced monitoring and protection strategies.",
      requirements: ["3+ years in ad operations", "Understanding of platform policies", "Risk management experience"],
      icon: Zap
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "New York, NY",
      type: "Full-time",
      salary: "$70,000 - $100,000 + Commission",
      description: "Drive growth by building relationships with agencies and advertisers seeking premium account solutions.",
      requirements: ["B2B sales experience", "Knowledge of digital advertising", "Strong communication skills"],
      icon: TrendingUp
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      salary: "$60,000 - $85,000",
      description: "Analyze campaign performance data and provide insights to optimize advertising strategies across platforms.",
      requirements: ["SQL proficiency", "Experience with analytics tools", "Statistical analysis skills"],
      icon: Award
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness programs and mental health support."
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible working hours, unlimited PTO, and remote work options to help you maintain a healthy balance."
    },
    {
      icon: Laptop,
      title: "Professional Growth",
      description: "Learning budget, conference attendance, certification reimbursements, and career advancement opportunities."
    },
    {
      icon: DollarSign,
      title: "Financial Benefits",
      description: "Competitive salary, performance bonuses, 401(k) matching, and stock options for eligible employees."
    }
  ]

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe the best results come from working together, sharing knowledge, and supporting each other's growth."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We're always looking for better ways to solve problems and improve our services for clients."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from client service to internal processes."
    }
  ]

  return (
    <>
      <SEO 
        title="Careers at Lightning Ads - Join Our Team"
        description="Join Lightning Ads and help revolutionize digital advertising. Explore career opportunities in campaign management, sales, analytics, and more. Competitive benefits and remote options."
        keywords="advertising careers, marketing jobs, campaign manager jobs, digital advertising careers, remote marketing jobs"
        canonical="/careers"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Join Our Team
                </span>
              </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Help us revolutionize digital advertising by providing premium account solutions to businesses worldwide.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-electric transition-all duration-300">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and shape our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-electric">
                  <CardHeader>
                    <div className="mx-auto p-4 bg-gradient-primary/10 rounded-lg w-fit mb-4 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-4">{value.title}</CardTitle>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Open Positions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our growing team and help shape the future of digital advertising.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => {
              const IconComponent = position.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-electric">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                      <div className="lg:col-span-2">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-gradient-primary/10 rounded-lg">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                            <p className="text-muted-foreground mb-4">{position.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {position.requirements.map((req, reqIndex) => (
                                <Badge key={reqIndex} variant="outline" className="border-primary/30">
                                  {req}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <DollarSign className="h-4 w-4" />
                          <span>{position.salary}</span>
                        </div>
                        <Badge className="bg-gradient-primary text-primary-foreground">
                          {position.department}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button className="bg-gradient-primary hover:shadow-electric transition-all duration-300">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Benefits & Perks
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We take care of our team so they can take care of our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-electric">
                  <CardHeader>
                    <div className="mx-auto p-4 bg-gradient-primary/10 rounded-lg w-fit mb-4 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-4">{benefit.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Ready to Make an Impact?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't see a position that fits? We're always looking for talented individuals to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-electric transition-all duration-300">
                Send Your Resume
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}

export default Careers