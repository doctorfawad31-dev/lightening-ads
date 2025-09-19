import { Zap, LucideIcon } from "lucide-react"
import GoogleAdsLogo from "@/assets/icons/google-ads-logo.png"
import FacebookLogo from "@/assets/icons/facebook-original.png"
import TikTokLogo from "@/assets/icons/tiktok-logo.png"
import SnapchatLogo from "@/assets/icons/snapchat-logo.png"
import LinkedInLogo from "@/assets/icons/linkedin-logo.png"
import PinterestLogo from "@/assets/icons/pinterest-logo.png"
import TwitterLogo from "@/assets/icons/twitter-logo.png"

interface PlatformItem {
  iconSrc?: string
  iconComponent?: LucideIcon
  name: string
  color: string
}

const PlatformBanner = () => {
  const platforms: PlatformItem[] = [
    { 
      iconSrc: GoogleAdsLogo, 
      name: "Google Ads", 
      color: "#4285F4"
    },
    { 
      iconSrc: FacebookLogo, 
      name: "Meta", 
      color: "#1877F2"
    },
    { 
      iconSrc: TikTokLogo, 
      name: "TikTok", 
      color: "#000000"
    },
    { 
      iconSrc: SnapchatLogo, 
      name: "Snapchat", 
      color: "#FFFC00"
    },
    { 
      iconSrc: LinkedInLogo, 
      name: "LinkedIn", 
      color: "#0A66C2"
    },
    { 
      iconSrc: PinterestLogo, 
      name: "Pinterest", 
      color: "#E60023"
    },
    { 
      iconSrc: TwitterLogo, 
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
                <div className="w-16 h-16 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center mb-2 group-hover:bg-gray-700/80 transition-all duration-300 group-hover:scale-110 border border-gray-600/30">
                  {IconComponent ? (
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-primary/80" />
                  ) : (
                    <img 
                      src={platform.iconSrc} 
                      alt={`${platform.name} logo`}
                      className="w-12 h-12 object-contain rounded-full"
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