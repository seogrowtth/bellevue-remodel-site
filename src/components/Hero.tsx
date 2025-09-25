import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          BELLEVUE HOME REMODELING
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Transform your Bellevue home with expert craftsmanship and innovative design. 
          Professional kitchen remodeling, bathroom renovation, and complete home renovation services 
          that exceed expectations and add lasting value to your property.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Get Free Consultation
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white hover:text-primary">
            View Our Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;