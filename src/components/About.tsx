import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              BLC Remodeling – Shaping the Future of Bellevue Homes
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At BLC Remodeling, we don't just renovate homes—we create living spaces that reflect your lifestyle, 
              enhance your daily experience, and add lasting value to your Bellevue property. As a premier 
              Bellevue remodeling contractor, we design solutions that seamlessly combine innovation, 
              functionality, and timeless beauty.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-primary">Our Vision: Making Homes Extraordinary</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our goal is simple: to make every Bellevue home renovation project extraordinary. From the initial 
                consultation to the final walkthrough, you'll experience meticulous attention to detail, 
                superior craftsmanship, and personalized service that sets us apart from other remodeling contractors.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe the best home renovations are those that feel perfectly natural—spaces that flow 
                seamlessly, function effortlessly, and inspire you every day. That's what we build.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Licensed & Insured</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">5⭐</div>
                  <div className="text-sm text-muted-foreground">Customer Rating</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Why Choose BLC Remodeling for Your Bellevue Project?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏗️</span>
                </div>
                <h4 className="font-semibold mb-2">Expert Craftsmanship</h4>
                <p className="text-sm text-muted-foreground">
                  Skilled artisans with decades of experience in luxury home renovations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📋</span>
                </div>
                <h4 className="font-semibold mb-2">Licensed & Insured</h4>
                <p className="text-sm text-muted-foreground">
                  Fully licensed contractor with comprehensive insurance protection
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⏰</span>
                </div>
                <h4 className="font-semibold mb-2">On-Time Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Committed to completing projects on schedule and within budget
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💎</span>
                </div>
                <h4 className="font-semibold mb-2">Premium Materials</h4>
                <p className="text-sm text-muted-foreground">
                  Only the finest materials and fixtures for lasting quality and beauty
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;