import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import logoImage from "@/assets/lightning-ads-logo-new.png"

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
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              isActive 
                ? "bg-gradient-primary bg-clip-text text-transparent" 
                : "text-muted-foreground hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent transition-all"
            }>
              Home
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => 
              isActive 
                ? "bg-gradient-primary bg-clip-text text-transparent" 
                : "text-muted-foreground hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent transition-all"
            }>
              Services
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive 
                ? "bg-gradient-primary bg-clip-text text-transparent" 
                : "text-muted-foreground hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent transition-all"
            }>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive 
                ? "bg-gradient-primary bg-clip-text text-transparent" 
                : "text-muted-foreground hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent transition-all"
            }>
              Contact
            </NavLink>
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
              <NavLink to="/" className={({ isActive }) => 
                isActive 
                  ? "bg-gradient-primary bg-clip-text text-transparent" 
                  : "text-muted-foreground hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent transition-all"
              }>
                Home
              </NavLink>
              <NavLink to="/services" className={({ isActive }) => 
                isActive 
                  ? "bg-gradient-primary bg-clip-text text-transparent" 
                  : "text-muted-foreground hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent transition-all"
              }>
                Services
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => 
                isActive 
                  ? "bg-gradient-primary bg-clip-text text-transparent" 
                  : "text-muted-foreground hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent transition-all"
              }>
                About
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => 
                isActive 
                  ? "bg-gradient-primary bg-clip-text text-transparent" 
                  : "text-muted-foreground hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent transition-all"
              }>
                Contact
              </NavLink>
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