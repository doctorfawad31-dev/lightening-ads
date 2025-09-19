import { Zap, LucideIcon } from "lucide-react"
import GoogleIcon from "@/assets/icons/google.svg"
import MetaIcon from "@/assets/icons/meta.svg"
import TikTokIcon from "@/assets/icons/tiktok.svg"
import SnapchatIcon from "@/assets/icons/snapchat.svg"
import LinkedInIcon from "@/assets/icons/linkedin.svg"
import PinterestIcon from "@/assets/icons/pinterest.svg"
import XIcon from "@/assets/icons/x.svg"

interface PlatformItem {
  iconSrc?: string
  iconComponent?: LucideIcon
  name: string
  color: string
}

const PlatformBanner = () => {
  const platforms: PlatformItem[] = [
    { 
      iconSrc: GoogleIcon, 
      name: "Google", 
      color: "#4285F4"
    },
    { 
      iconSrc: MetaIcon, 
      name: "Meta", 
      color: "#1877F2"
    },
    { 
      iconSrc: TikTokIcon, 
      name: "TikTok", 
      color: "#000000"
    },
    { 
      iconSrc: SnapchatIcon, 
      name: "Snapchat", 
      color: "#FFFC00"
    },
    { 
      iconSrc: LinkedInIcon, 
      name: "LinkedIn", 
      color: "#0A66C2"
    },
    { 
      iconSrc: PinterestIcon, 
      name: "Pinterest", 
      color: "#E60023"
    },
    { 
      iconSrc: XIcon, 
      name: "Twitter", 
      color: "#000000"
    },
    { 
      iconComponent: Zap, 
      name: "More", 
      color: "hsl(var(--primary))"
    }
  ]

  return (
    <section className="pt-24 pb-8 bg-background">
      <div className="container mx-auto px-6">
        {/* Platform Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
          {platforms.map((platform, index) => {
            const IconComponent = platform.iconComponent
            return (
              <div 
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  {IconComponent ? (
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-primary/80" />
                  ) : (
                    <img 
                      src={platform.iconSrc} 
                      alt={`${platform.name} logo`}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(39%) sepia(79%) saturate(4851%) hue-rotate(212deg) brightness(95%) contrast(101%)' }}
                    />
                  )}
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {platform.name}
                </span>
              </div>
            )
          })}
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Agency Account Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Access premium, aged advertising accounts across Google, Meta, TikTok, 
            Snapchat, LinkedIn, and 40+ platforms. No more account bans or spending 
            limits.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PlatformBanner