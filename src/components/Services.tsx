import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Bath, Home, Hammer, PaintBucket, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <ChefHat className="h-12 w-12 text-primary" />,
      title: "Gig Harbor Kitchen Remodeling",
      description: "Transform your kitchen into the heart of your home with our expert Gig Harbor kitchen remodeling services. Custom designs that maximize functionality while creating stunning visual appeal.",
      features: ["Custom Cabinet Design", "Granite & Quartz Countertops", "Kitchen Island Construction", "Modern Appliance Integration"]
    },
    {
      icon: <Bath className="h-12 w-12 text-primary" />,
      title: "Gig Harbor Bathroom Remodeling", 
      description: "Create your personal spa retreat with our comprehensive Gig Harbor bathroom remodeling services. From powder rooms to master suites, we deliver luxurious results.",
      features: ["Walk-in Shower Installation", "Soaking Tub Placement", "Vanity & Storage Solutions", "Heated Floor Systems"]
    },
    {
      icon: <Home className="h-12 w-12 text-primary" />,
      title: "Whole Home Renovations",
      description: "Complete home transformations that reimagine your entire living space. Our Gig Harbor remodeling contractors handle everything from structural changes to finishing touches.",
      features: ["Open Floor Plan Conversions", "Room Additions", "Structural Modifications", "Smart Home Integration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Expert Gig Harbor Home Remodeling Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            As Gig Harbor's trusted remodeling contractor, Above & Beyond Construction specializes in transforming homes throughout the greater Gig Harbor area. From stunning kitchen renovations to luxurious bathroom makeovers, we bring your vision to life with unmatched craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 mt-2"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;