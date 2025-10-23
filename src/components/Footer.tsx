import { Mail, Phone, MapPin } from "lucide-react"
import logoImage from "@/assets/lightning-ads-logo-new.png"

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 md:py-12 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={logoImage} 
                alt="Lightning Ads Logo" 
                className="h-8 sm:h-10 md:h-11 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering businesses with premium advertising accounts and expert campaign management. 
              Your success is our mission.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@lightningads.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Premium Ad Accounts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Campaign Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Account Protection</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Analytics & Reporting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dedicated Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              {/* <li><a href="/support" className="hover:text-primary transition-colors">Support</a></li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex md:space-x-6 space-x-3 md:text-sm text-[11.3px] text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
          <div className="md:text-sm text-[12.9px] text-muted-foreground mt-4 md:mt-0 md:text-left text-center">
            © 2025 Lightning Ads. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer