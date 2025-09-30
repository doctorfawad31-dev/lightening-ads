import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import logoImage from "@/assets/light-ads-logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Lightning Ads Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button className="bg-gradient-primary hover:shadow-electric transition-all duration-300">
              Get Account
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button className="bg-gradient-primary hover:shadow-electric transition-all duration-300 w-full">
                Get Account
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header