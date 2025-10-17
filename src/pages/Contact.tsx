import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Headphones
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Lightning Ads",
      "telephone": "+1-555-123-4567",
      "email": "support@lightningads.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Business Ave, Suite 100",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10001",
        "addressCountry": "US"
      }
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      contact: "support@lightningads.com",
      available: "24/7"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team instantly",
      contact: "Available on website",
      available: "9 AM - 8 PM EST"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      available: "9 AM - 8 PM EST"
    }
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: "Main Office",
      info: "123 Business Ave, Suite 100\nNew York, NY 10001"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Monday - Friday: 9 AM - 6 PM EST\nWeekends: Emergency support only"
    },
    {
      icon: Headphones,
      title: "Support Channels",
      info: "Email, Live Chat, Phone\nDedicated account managers"
    }
  ]

  return (
    <>
      <SEO 
        title="Contact Lightning Ads - Get Premium Advertising Accounts"
        description="Contact Lightning Ads to get started with premium agency advertising accounts. Email, live chat, and phone support available. Get access to unlimited ad spend across 40+ platforms."
        keywords="contact lightning ads, advertising account support, premium ad accounts, agency account help, advertising consultation"
        canonical="/contact"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section with Contact Methods */}
        <section className="relative md:pt-20 pt-12 md:pb-12 overflow-hidden">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto text-center mb-12">
              {/* <h1 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1> */}
               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight ">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                   Contact Us
                </span>{" "}
              </h2>
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto ">
              Ready to scale your advertising campaigns? Get in touch with our team of experts and start your journey to unlimited ad spend today.
            </p>
          </div>

          {/* Get in Touch Section */}
          <div className="text-center md:mb-8 mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight ">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                 Get in touch
                </span>{" "}
              </h2>
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto ">
              Choose your preferred way to reach us. Our team is ready to help you succeed.
            </p>
          </div>

          {/* Contact Methods Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-8 pb-8">
                    <div className="mx-auto p-3 bg-gradient-primary/10 rounded-lg w-fit mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {method.description}
                    </p>
                    <p className="text-sm text-primary font-medium mb-1">{method.contact}</p>
                    <p className="text-xs text-muted-foreground">{method.available}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="md:py-20 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Contact us
                  </span>
                </CardTitle>
                <CardDescription className="text-xs text-white">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-xs">Full Name*</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-xs">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-xs">Email*</Label>
                    <Input id="email" type="email" placeholder="example@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-xs">Company (Optional)</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-xs">Subject</Label>
                  <Input id="subject" placeholder="How Can We Help You?" />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-xs">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell Us About Your Advertising Needs..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-primary hover:shadow-electric transition-all duration-300">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Office Information
                  </span>
                </h3>
                <div className="space-y-6">
                  {officeInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-primary/10 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{info.title}</h4>
                          <p className="text-muted-foreground whitespace-pre-line">{info.info}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <Card className="border-border/50 bg-gradient-primary/5">
                <CardHeader>
                  <CardTitle className="text-xl">
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Need Immediate Help?
                    </span>
                  </CardTitle>
                  <CardDescription className="text-xs">
                    For urgent matters or immediate assistance with your campaigns.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-primary hover:shadow-electric transition-all duration-300">
                      Start Live Chat
                    </Button>
                    <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10">
                      Schedule a Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="md:py-20 py-10 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Frequently Asked
              </span>{" "}
              <span className="text-muted-foreground">Questions</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border/50 rounded-lg px-6 bg-card/50">
                <AccordionTrigger className="text-left hover:no-underline">
                  How quickly can I get started?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most clients can get their agency accounts set up within 24-48 hours after completing our onboarding process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/50 rounded-lg px-6 bg-card/50">
                <AccordionTrigger className="text-left hover:no-underline">
                  What platforms do you support?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We provide agency accounts for Google Ads, Meta (Facebook & Instagram), TikTok, Snapchat, LinkedIn, Twitter/X, and 40+ other advertising platforms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/50 rounded-lg px-6 bg-card/50">
                <AccordionTrigger className="text-left hover:no-underline">
                  Do you offer campaign management?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer full-service campaign management including setup, optimization, and reporting. You can also choose to manage campaigns yourself with our accounts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}

export default Contact