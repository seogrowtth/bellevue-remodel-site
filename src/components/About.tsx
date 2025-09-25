import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Clock, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-primary" />, number: "500+", label: "Gig Harbor Homes Transformed" },
    { icon: <Award className="h-8 w-8 text-primary" />, number: "20+", label: "Years Serving Gig Harbor" },
    { icon: <Clock className="h-8 w-8 text-primary" />, number: "98%", label: "Customer Satisfaction" },
    { icon: <Shield className="h-8 w-8 text-primary" />, number: "100%", label: "Licensed & Insured" },
  ];

  const features = [
    "Local Gig Harbor expertise and knowledge",
    "Licensed and fully insured professionals", 
    "Transparent pricing with detailed estimates",
    "High-quality materials and craftsmanship",
    "Comprehensive project management",
    "Clean and organized work environment"
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Gig Harbor's Most Trusted Remodeling Contractor
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over two decades, Above & Beyond Construction has been the premier choice for Gig Harbor home remodeling. Founded in 2003, our family-owned business has grown into Gig Harbor's most trusted name in kitchen remodeling, bathroom renovations, and comprehensive home improvements.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We understand that your home is more than just a building—it's where life happens. That's why every Gig Harbor kitchen remodeling project and bathroom renovation we undertake is approached with the same care and attention we'd give to our own family home.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;