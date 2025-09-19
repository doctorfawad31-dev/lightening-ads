import { Facebook, MessageCircle, Play, Target, Users, Zap, Chrome, Search } from "lucide-react"

const PlatformBanner = () => {
  const platforms = [
    { icon: Search, name: "Google", color: "text-blue-500" },
    { icon: Facebook, name: "Meta", color: "text-blue-600" },
    { icon: Play, name: "TikTok", color: "text-pink-500" },
    { icon: MessageCircle, name: "Snapchat", color: "text-yellow-400" },
    { icon: Users, name: "LinkedIn", color: "text-blue-700" },
    { icon: Target, name: "Pinterest", color: "text-red-500" },
    { icon: Chrome, name: "Twitter", color: "text-sky-500" },
    { icon: Zap, name: "More", color: "text-primary" }
  ]

  return (
    <section className="bg-card/50 backdrop-blur-sm py-8">
      <div className="container mx-auto px-6">
        {/* Platform Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <platform.icon className="w-8 h-8 text-primary group-hover:text-primary/80" />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {platform.name}
              </span>
            </div>
          ))}
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