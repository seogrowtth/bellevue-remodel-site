import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import kitchenImage from "@/assets/kitchen-remodel.jpg";
import bathroomImage from "@/assets/bathroom-remodel.jpg";
import homeExterior from "@/assets/home-exterior.jpg";

const Services = () => {
  const services = [
    {
      title: "Bellevue Kitchen Remodeling",
      description: "Complete kitchen transformations with custom cabinetry, premium countertops, and modern appliances. Our kitchen remodeling services combine functionality with stunning design to create the heart of your Bellevue home.",
      image: kitchenImage,
      features: ["Custom Cabinet Design", "Granite & Quartz Countertops", "Modern Appliance Installation", "Kitchen Island Design"]
    },
    {
      title: "Bellevue Bathroom Remodeling", 
      description: "Luxury bathroom renovations featuring spa-like amenities, custom tile work, and modern fixtures. Transform your bathroom into a personal retreat with our expert bathroom remodeling services.",
      image: bathroomImage,
      features: ["Walk-in Shower Installation", "Custom Vanity Design", "Luxury Tile Work", "Modern Fixture Upgrades"]
    },
    {
      title: "Complete Home Renovation",
      description: "Full-scale home renovations that reimagine your entire living space. From structural changes to finishing touches, we handle every aspect of your Bellevue home transformation project.",
      image: homeExterior,
      features: ["Structural Modifications", "Open Floor Plans", "Energy Efficiency Upgrades", "Exterior Renovations"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Complete Solutions for Every Bellevue Home
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BLC Remodeling specializes in comprehensive home renovation services throughout Bellevue. 
            Our expert team combines years of experience with innovative design solutions to deliver 
            exceptional results that enhance both beauty and functionality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;