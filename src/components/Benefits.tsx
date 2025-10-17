import { CheckCircle, Clock, DollarSign, Shield } from "lucide-react";
import teamImage from "@/assets/team-analytics.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Instant Account Access",
      description:
        "Get pre-warmed agency accounts ready to spend within 24 hours. No waiting for account approval.",
    },
    {
      icon: Shield,
      title: "Ban-Proof Accounts",
      description:
        "Aged accounts with established trust scores and compliance history. Virtually ban-proof infrastructure.",
    },
    {
      icon: DollarSign,
      title: "Unlimited Spending",
      description:
        "No daily limits or spending restrictions. Scale your campaigns as high as your budget allows.",
    },
    {
      icon: CheckCircle,
      title: "Account Replacement",
      description:
        "If any account gets restricted, we replace it immediately at no extra cost. Your campaigns never stop.",
    },
  ];

  return (
    <section className="md:py-20 py-10">
      <div className="container mx-auto md:px-6 px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            {/* <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Why Choose Lightning Ads?
              </span>
            </h2> */}
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight md:px-0 px-2">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Why Choose Lightning Ads?
              </span>{" "}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto md:px-0 px-2">
              We provide premium marketing agency accounts that eliminate the
              biggest pain points: account bans, spending limits, and approval
              delays. Focus on scaling, not account management.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="p-3 bg-gradient-primary/10 rounded-lg group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-electric">
              <img
                src={teamImage}
                alt="Lightning Ads Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/20" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 lg:-left-6 -left-2 bg-card border border-border rounded-xl sm:p-6 p-1.5 shadow-glow">
              <div className="md:text-2xl text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                $2.5M+
              </div>
              <div className="md:text-sm text-xs text-muted-foreground">
                Revenue Generated This Month
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
