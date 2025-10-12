import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  email: z.string().trim().email("Invalid email address").max(255),
  business: z.string().trim().min(1, "Business name is required").max(200),
  advertisingOn: z.string().trim().max(500),
  budget: z.string().trim().max(100),
});

type FormData = z.infer<typeof formSchema>;

const ConsultationSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", data);
      toast.success("Thank you! We'll contact you soon.");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Got a Query? Schedule a Free
              <br />
              Consultation Session with Our Ad Expert
            </span>
          </h2> */}

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight ">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Got a Query? Schedule a Free Consultation Session with Our Ad
              Expert
            </span>{" "}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto ">Schedule a call:</p>
          <Button className="bg-gradient-primary hover:shadow-electric transition-all duration-300 group">
            Get Started{" "}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border/30">
            <h3 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Contact us
              </span>
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Full Name*
                  </label>
                  <Input
                    {...register("fullName")}
                    placeholder="Type Of Full Name"
                    className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
                  />
                  {errors.fullName && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Phone*
                  </label>
                  <Input
                    {...register("phone")}
                    placeholder="Type Of Phone Number"
                    className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Email*
                  </label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Type Of Email Address*"
                    className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Business*
                  </label>
                  <Input
                    {...register("business")}
                    placeholder="Business Name, Web, Etc"
                    className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
                  />
                  {errors.business && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.business.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm text-foreground mb-2">
                  Advertising On
                </label>
                <Textarea
                  {...register("advertisingOn")}
                  placeholder="Facebook & Instagram"
                  className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50 min-h-[100px]"
                />
                {errors.advertisingOn && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.advertisingOn.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-foreground mb-2">
                  Advertisement Budget Monthly
                </label>
                <Input
                  {...register("budget")}
                  placeholder="Advertisement Budget Monthly $"
                  className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
                />
                {errors.budget && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.budget.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-electric transition-all duration-300 text-lg py-6 group"
              >
                Submit{" "}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
