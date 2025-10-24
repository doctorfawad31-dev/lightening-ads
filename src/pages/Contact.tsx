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
import { useState } from "react"
import { toast } from "sonner"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  // ✅ Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  // ✅ Send email using your own SMTP module
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    try {
      const response = await fetch("https://softnixt-mail-management-tool-v1.vercel.app/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify({
          smtpConfig: {
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            user: import.meta.env.VITE_SMTP_USER,
            pass: import.meta.env.VITE_SMTP_PASS,
          },
          to: "service@lightning-ads.com",
          subject: `New Customer Request: ${formData.subject || "General Inquiry"}`,
          text: `
New Customer Message:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Subject: ${formData.subject}
Message: ${formData.message}
`,
          html: `
  <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 24px; border-radius: 10px; color: #000000; max-width: 600px; margin: auto; border: 1px solid #e0e0e0;">
    <h2 style="color: #92000a; text-align: center; margin-bottom: 20px;">New Contact Message</h2>
    <div style="background: #ffffff; border-radius: 8px; padding: 16px; border: 1px solid #ddd;">
      <p style="margin: 10px 0; font-size: 15px;"><strong style="color:#92000a;">Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p style="margin: 10px 0; font-size: 15px;"><strong style="color:#92000a;">Email:</strong> ${formData.email}</p>
      <p style="margin: 10px 0; font-size: 15px;"><strong style="color:#92000a;">Company:</strong> ${formData.company || "N/A"}</p>
      <p style="margin: 10px 0; font-size: 15px;"><strong style="color:#92000a;">Subject:</strong> ${formData.subject}</p>
      <p style="margin: 10px 0; font-size: 15px;"><strong style="color:#92000a;">Message:</strong></p>
      <div style="background: #f6f6f6; padding: 12px; border-left: 3px solid #92000a; border-radius: 5px; margin-top: 5px;">
        ${formData.message}
      </div>
    </div>
    <p style="text-align: center; font-size: 13px; color: #777; margin-top: 25px;">
      This message was sent from Ligtning-ads's <strong style="color:#000;">Contact Form</strong>.
    </p>
  </div>
`,
          from: import.meta.env.VITE_SMTP_USER,
        }),
      })

      const data = await response.json()
      if (response.ok) {
        // setStatus("Message sent successfully!")
        toast.success("Thank you! We'll contact you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        })
      } else {
        // setStatus(`Failed: ${data.error || "Unknown error"}`)
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      // setStatus(`Error: ${err.message}`)
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false)
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Lightning Ads",
      "telephone": "+971 58 543 4233",
      "email": "service@lightning-ads.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dubai Silicon Oasis",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "",
        "addressCountry": "UAE"
      }
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      contact: "service@lightning-ads.com",
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
      contact: "+971 58 543 4233",
      available: "9 AM - 8 PM EST"
    }
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: "Main Office",
      info: "Dubai Silicon Oasis"
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
              <h2 className="text-[23.4px] md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight ">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Contact Us
                </span>{" "}
              </h2>
              <p className="text-[13px] md:text-lg text-white leading-relaxed max-w-3xl mx-auto ">
                Ready to scale your advertising campaigns? Get in touch with our team of experts and start your journey to unlimited ad spend today.
              </p>
            </div>

            {/* Get in Touch Section */}
            <div className="text-center md:mb-8 mb-4">
              <h2 className="text-[22px] md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight ">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Get in touch
                </span>{" "}
              </h2>
              <p className="text-[13px] md:text-lg text-white leading-relaxed max-w-3xl mx-auto ">
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
                      <h3 className="md:text-lg text-[17.7px] font-semibold mb-2">{method.title}</h3>
                      <p className="md:text-sm text-[13.1px] text-muted-foreground mb-4">
                        {method.description}
                      </p>
                      <p className="md:text-sm text-[13px] text-primary font-medium mb-1">{method.contact}</p>
                      <p className="md:text-xs text-[10.9px] text-muted-foreground">{method.available}</p>
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
                  <CardTitle className="md:text-2xl  text-[23.1px]">
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Contact us
                    </span>
                  </CardTitle>
                  <CardDescription className="md:text-xs  text-[11.1px] text-white">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Full Name*</Label>
                        <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder="enter your first name" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder="enter your last name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email*</Label>
                        <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="enter your email" required />
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" value={formData.company} onChange={handleChange} placeholder="enter your company name" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="enter your subject of email" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="enter your message to sent" required />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary hover:shadow-electric transition-all duration-300"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>

                    {status && (
                      <p className={`text-center mt-2 ${status.startsWith("✅") ? "text-green-500" : "text-red-500"}`}>
                        {status}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>

              {/* Office Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="md:text-2xl text-[22px] font-bold mb-6">
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
                            <h4 className="md:text-base text-[15.3px] font-semibold mb-2">{info.title}</h4>
                            <p className="text-muted-foreground whitespace-pre-line md:text-base text-[15.4px] ">{info.info}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <Card className="border-border/50 bg-gradient-primary/5">
                  <CardHeader>
                    <CardTitle className="md:text-xl text-[19.4px]">
                      <span className="bg-gradient-primary bg-clip-text text-transparent">
                        Need Immediate Help?
                      </span>
                    </CardTitle>
                    <CardDescription className="md:text-xs text-[11.1px]">
                      For urgent matters or immediate assistance with your campaigns.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button className="w-full bg-gradient-primary hover:shadow-electric transition-all duration-300 md:text-base text-[13.1px]">
                        Start Live Chat
                      </Button>
                      <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 md:text-base text-[13.3px] ">
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
              <h2 className="text-[22px] md:text-4xl font-bold mb-4">
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
                  <AccordionTrigger className="text-left hover:no-underline text-base text-[14.9px]">
                    How quickly can I get started?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Most clients can get their agency accounts set up within 24-48 hours after completing our onboarding process.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border/50 rounded-lg px-6 bg-card/50">
                  <AccordionTrigger className="text-left hover:no-underline text-base text-[16px]">
                    What platforms do you support?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We provide agency accounts for Google Ads, Meta (Facebook & Instagram), TikTok, Snapchat, LinkedIn, Twitter/X, and 40+ other advertising platforms.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border/50 rounded-lg px-6 bg-card/50">
                  <AccordionTrigger className="text-left hover:no-underline text-base text-[16px]">
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