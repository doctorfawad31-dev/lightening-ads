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
      name: "Meta Ads", 
      color: "#1877F2"
    },
    { 
      iconSrc: SnapchatLogo, 
      name: "Snapchat", 
      color: "#FFFC00"
    },
    { 
      iconSrc: TikTokLogo, 
      name: "Tik Tok", 
      color: "#000000"
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Power Your Ads
            </span>{" "}
            <span className="text-foreground">
              with Premium Agency Accounts
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Get access to premium, aged advertising accounts across Google, Meta, TikTok, Snapchat, LinkedIn and 40+ platforms. Say goodbye to sudden bans and spending limits—focus on scaling campaigns with stability and confidence.
          </p>
        </div>

        {/* Platform Icons Grid */}
        <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
          {/* Top Row */}
          <div className="flex justify-center items-center gap-12">
            {platforms.slice(0, 4).map((platform, index) => {
              const IconComponent = platform.iconComponent
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-secondary/70 transition-all duration-300 group-hover:scale-110 border border-border/30">
                    {IconComponent ? (
                      <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:text-primary/80" />
                    ) : (
                      <img 
                        src={platform.iconSrc} 
                        alt={`${platform.name} logo`}
                        className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-full"
                      />
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {platform.name}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Bottom Row */}
          <div className="flex justify-center items-center gap-12">
            {platforms.slice(4, 8).map((platform, index) => {
              const IconComponent = platform.iconComponent
              return (
                <div 
                  key={index + 4}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-secondary/70 transition-all duration-300 group-hover:scale-110 border border-border/30">
                    {IconComponent ? (
                      <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:text-primary/80" />
                    ) : (
                      <img 
                        src={platform.iconSrc} 
                        alt={`${platform.name} logo`}
                        className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-full"
                      />
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {platform.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformBanner