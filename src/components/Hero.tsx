import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-main.png";
import heroImageMobile from "@/assets/hero-main5.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative md:min-h-screen min-h-[90vh] flex items-center justify-center overflow-hidden mt-16 sm:mt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="High-Trust Marketing Solutions"
          className="hidden md:block
            w-full h-full object-cover
            object-[90%_center]
            transition-all duration-500
          "
        />
        <img
          src={heroImageMobile}
          alt="High-Trust Marketing Solutions"
          className="md:hidden
            w-full h-full
            object-contain
            transition-all duration-500
          "
        />
        {/* Overlay for text readability */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 lg:from-black/50 lg:via-black/30 lg:to-black/50" />
        <div className="md:hidden absolute inset-0 bg-gray-900/90" />
      </div>

     {/* Content (Responsive alignment) */}
<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center 
                justify-center lg:justify-start">
  <div className="max-w-xl text-center lg:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
      <span className="bg-gradient-primary bg-clip-text text-transparent">
        High-Trust Marketing Solutions
      </span>
    </h1>

    <p className="text-sm sm:text-base text-foreground/80 mb-6 max-w-md sm:max-w-lg mx-auto lg:mx-0">
      Access aged, warmed marketing agency accounts with unlimited spending limits. 
      Skip restrictions and scale immediately.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start">
      <Button
        size="lg"
        className="bg-gradient-primary hover:shadow-electric transition-all duration-300 px-6 h-12 text-sm sm:text-base font-medium group"
      >
        Get Agency Accounts
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="px-6 h-12 text-sm sm:text-base font-medium border-foreground/30 hover:border-foreground/50 hover:bg-foreground/5 transition-all duration-300 group"
      >
        <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform fill-current" />
        Watch Demo
      </Button>
    </div>

    {/* Stats */}
    <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start">
      <div>
        <div className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          500+
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground mt-1">
          Active Campaigns
        </div>
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          $10M+
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground mt-1">
          Ad Spend Managed
        </div>
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          98%
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground mt-1">
          Client Satisfaction
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default Hero;
