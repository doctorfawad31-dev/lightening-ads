import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-main.png";
import heroImage2 from "@/assets/hero-main1.png";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(heroImage);

  useEffect(() => {
    const handleResize = () => {
      // Switch to heroImage2 on medium screens and below (less than 1024px)
      if (window.innerWidth < 1024) {
        setCurrentImage(heroImage2);
      } else {
        setCurrentImage(heroImage);
      }
    };

    // Set initial image
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[560px] flex items-center justify-center overflow-hidden mt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentImage}
          alt="High-Trust Marketing Solutions"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-xl text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              High-Trust Marketing Solutions
            </span>
          </h1>

          <p className="text-sm md:text-base text-white/80 mb-6 max-w-lg">
            Access aged, warmed marketing agency accounts with unlimited
            spending limits. Skip restrictions and scale immediately.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-electric transition-all duration-300 px-6 h-12 text-sm font-medium group"
            >
              Get Agency Accounts
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-6 h-12 text-sm font-medium border-white/30 hover:border-white/50 hover:bg-white/5 transition-all duration-300 group text-white"
            >
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform fill-current" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            <div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-xs text-white/70 mt-1">Active Campaigns</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                $10M+
              </div>
              <div className="text-xs text-white/70 mt-1">Ad Spend Managed</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-xs text-white/70 mt-1">
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