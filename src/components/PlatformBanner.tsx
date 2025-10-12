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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Power Your Ads with Premium Agency Accounts
            </span>{" "}
           
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto px-4">
            Get access to premium, aged advertising accounts across Google, Meta, TikTok, Snapchat, LinkedIn and 40+ platforms. Say goodbye to sudden bans and spending limits.
          </p>
        </div>

        {/* Platform Icons Grid */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
          {/* Top Row - Large Icons */}
          <div className="flex justify-center items-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap">
            {platforms.slice(0, 4).map((platform, index) => {
              const IconComponent = platform.iconComponent
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-secondary/70 transition-all duration-300 group-hover:scale-110 border border-border/30">
                    {IconComponent ? (
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 text-primary group-hover:text-primary/80" />
                    ) : (
                      <img 
                        src={platform.iconSrc} 
                        alt={`${platform.name} logo`}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain rounded-full"
                      />
                    )}
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                    {platform.name}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Bottom Row - Small Icons */}
          <div className="flex justify-center items-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap">
            {platforms.slice(4, 8).map((platform, index) => {
              const IconComponent = platform.iconComponent
              return (
                <div 
                  key={index + 4}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-secondary/70 transition-all duration-300 group-hover:scale-110 border border-border/30">
                    {IconComponent ? (
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-primary group-hover:text-primary/80" />
                    ) : (
                      <img 
                        src={platform.iconSrc} 
                        alt={`${platform.name} logo`}
                        className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain rounded-full"
                      />
                    )}
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
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