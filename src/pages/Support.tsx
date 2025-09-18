import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  Headphones, 
  MessageSquare, 
  Mail, 
  Phone,
  Clock,
  Search,
  FileText,
  Video,
  Users,
  Zap,
  Shield,
  Target
} from "lucide-react"

const Support = () => {
  const supportChannels = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      responseTime: "< 2 minutes",
      badge: "Fastest"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed assistance via email",
      availability: "24/7",
      responseTime: "< 2 hours",
      badge: ""
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      availability: "9 AM - 6 PM EST",
      responseTime: "Immediate",
      badge: ""
    },
    {
      icon: Video,
      title: "Screen Share",
      description: "Get hands-on help with your campaigns",
      availability: "By appointment",
      responseTime: "Same day",
      badge: "Premium"
    }
  ]

  const resources = [
    {
      icon: FileText,
      title: "Knowledge Base",
      description: "Comprehensive guides and documentation",
      count: "200+ Articles"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video walkthroughs",
      count: "50+ Videos"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other Lightning Ads users",
      count: "1,000+ Members"
    },
    {
      icon: FileText,
      title: "API Documentation",
      description: "Technical documentation for developers",
      count: "Complete Docs"
    }
  ]

  const faqs = [
    {
      question: "How do I get started with agency accounts?",
      answer: "Getting started is simple! Contact our team through live chat or email, and we'll guide you through the onboarding process. Most clients can get their accounts set up within 24-48 hours."
    },
    {
      question: "What platforms do you support?",
      answer: "We provide premium agency accounts for Google Ads, Meta (Facebook & Instagram), TikTok, Snapchat, LinkedIn, Twitter/X, Pinterest, Reddit, and 35+ other advertising platforms."
    },
    {
      question: "Are there any spending limits on agency accounts?",
      answer: "No! One of the main benefits of our premium agency accounts is unlimited spending capabilities. You can scale your campaigns without worrying about daily or monthly spending restrictions."
    },
    {
      question: "How do you protect accounts from bans?",
      answer: "We use advanced account warming techniques, compliance monitoring, and risk management strategies. Our accounts are aged and have established trust scores, significantly reducing the risk of bans."
    },
    {
      question: "Do you offer campaign management services?",
      answer: "Yes! We offer full-service campaign management including setup, optimization, A/B testing, and detailed reporting. You can also choose to manage campaigns yourself with our accounts."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 live chat and email support, phone support during business hours, screen sharing sessions, and each client gets a dedicated account manager for personalized assistance."
    },
    {
      question: "Can I use multiple accounts for the same business?",
      answer: "Yes, many of our clients use multiple accounts across different platforms or even multiple accounts on the same platform for different campaigns or geographic targeting."
    },
    {
      question: "How quickly can I start running ads?",
      answer: "Once your accounts are set up (usually within 24-48 hours), you can start running ads immediately. Our team can help with campaign setup if needed."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Support Center
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get the help you need to succeed with your advertising campaigns. Our expert team is here to support you 24/7.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for help articles, guides, or FAQs..."
                className="pl-12 py-4 text-lg border-primary/30 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Get Help Now
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to get support from our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => {
              const IconComponent = channel.icon
              return (
                <Card key={index} className="text-center border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-electric relative">
                  {channel.badge && (
                    <Badge className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground">
                      {channel.badge}
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <div className="mx-auto p-4 bg-gradient-primary/10 rounded-lg w-fit mb-4 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{channel.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-4">
                      {channel.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{channel.availability}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Response: {channel.responseTime}
                      </p>
                    </div>
                    
                    <Button className="w-full bg-gradient-primary hover:shadow-electric transition-all duration-300">
                      Contact Now
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Self-Help Resources
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers and learn at your own pace with our comprehensive resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon
              return (
                <Card key={index} className="text-center border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-electric cursor-pointer">
                  <CardHeader>
                    <div className="mx-auto p-4 bg-gradient-primary/10 rounded-lg w-fit mb-4 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-2">
                      {resource.description}
                    </CardDescription>
                    <Badge variant="outline" className="border-primary/30">
                      {resource.count}
                    </Badge>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to the most common questions about our services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Still Need Help?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Can't find what you're looking for? Send us a message and we'll get back to you quickly.
              </p>
            </div>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Submit a Support Request</CardTitle>
                <CardDescription className="text-center">
                  Fill out the form below and our team will respond within 2 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>
                
                <div>
                  <Label htmlFor="priority">Priority Level</Label>
                  <select className="w-full p-2 border border-border rounded-lg bg-background text-foreground">
                    <option>Low - General question</option>
                    <option>Medium - Account issue</option>
                    <option>High - Campaign problem</option>
                    <option>Urgent - Critical business impact</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your issue in detail..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-primary hover:shadow-electric transition-all duration-300">
                  Submit Support Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Support