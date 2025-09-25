import { Button } from "@/components/ui/button";
import { Phone, Award, Shield, Clock } from "lucide-react";
import homeImage from "@/assets/home-exterior.jpg";

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
          Premium Gig Harbor Home Remodeling Services
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">ABOVE & BEYOND</span>
          <span className="block text-accent">CONSTRUCTION & REMODELING</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
          Transform your Gig Harbor home with expert kitchen remodeling, bathroom renovations, and comprehensive home improvement services. Quality craftsmanship that goes above and beyond your expectations in every project we complete.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100">
            <Phone className="mr-2 h-5 w-5" />
            Get Free Estimate
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
            View Our Work
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
          <div>
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-lg opacity-90">Gig Harbor Homes Remodeled</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">20+</div>
            <div className="text-lg opacity-90">Years Serving Gig Harbor</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-lg opacity-90">Customer Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;