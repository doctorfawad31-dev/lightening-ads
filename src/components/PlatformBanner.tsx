import { Zap } from "lucide-react"
import GoogleAdsOfficial from "@/assets/icons/google-ads-official.png"
import MetaOfficial from "@/assets/icons/meta-official.png"
import TikTokOfficial from "@/assets/icons/tiktok-official.png"
import SnapchatOfficial from "@/assets/icons/snapchat-official.png"
import LinkedInOfficial from "@/assets/icons/linkedin-official.png"
import PinterestOfficial from "@/assets/icons/pinterest-official.png"
import TwitterXOfficial from "@/assets/icons/twitter-x-official.png"

interface PlatformItem {
  iconSrc?: string
  iconComponent?: any
  name: string
  color: string
  isLucide?: boolean
}

const PlatformBanner = () => {
  const platforms: PlatformItem[] = [
    { 
      iconSrc: GoogleAdsOfficial, 
      name: "Google Ads", 
      color: "#4285F4",
      isLucide: false
    },
    { 
      iconSrc: MetaOfficial, 
      name: "Meta", 
      color: "#1877F2",
      isLucide: false
    },
    { 
      iconSrc: TikTokOfficial, 
      name: "TikTok", 
      color: "#000000",
      isLucide: false
    },
    { 
      iconSrc: SnapchatOfficial, 
      name: "Snapchat", 
      color: "#FFFC00",
      isLucide: false
    },
    { 
      iconSrc: LinkedInOfficial, 
      name: "LinkedIn", 
      color: "#0A66C2",
      isLucide: false
    },
    { 
      iconSrc: PinterestOfficial, 
      name: "Pinterest", 
      color: "#E60023",
      isLucide: false
    },
    { 
      iconSrc: TwitterXOfficial, 
      name: "Twitter", 
      color: "#000000",
      isLucide: false
    },
    { 
      iconComponent: Zap, 
      name: "More", 
      color: "hsl(var(--primary))",
      isLucide: true
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
                  {platform.isLucide ? (
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-primary/80" />
                  ) : (
                    <img 
                      src={platform.iconSrc} 
                      alt={`${platform.name} logo`}
                      className="w-10 h-10 object-contain"
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