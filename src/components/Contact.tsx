import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Transform Your Bellevue Home?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact BLC Remodeling today for your free consultation and project estimate. 
              Let's discuss how we can bring your vision to life with professional Bellevue home remodeling services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Get Your Free Consultation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" type="tel" />
                <Input placeholder="Project Address (Bellevue)" />
                <select className="w-full p-3 border border-input rounded-md bg-background">
                  <option value="">Select Project Type</option>
                  <option value="kitchen">Kitchen Remodeling</option>
                  <option value="bathroom">Bathroom Remodeling</option>
                  <option value="full-home">Complete Home Renovation</option>
                  <option value="addition">Home Addition</option>
                  <option value="other">Other</option>
                </select>
                <Textarea 
                  placeholder="Tell us about your project vision and goals..."
                  className="min-h-32"
                />
                <Button className="w-full" size="lg">
                  Schedule Free Consultation
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">📞</span>
                      </span>
                      <span>(425) 555-0123</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">✉️</span>
                      </span>
                      <span>info@blcremodeling.com</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-white text-sm">📍</span>
                      </span>
                      <span>Serving Bellevue, WA<br />and surrounding areas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Business Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>By Appointment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Service Areas</h3>
                  <p className="text-muted-foreground mb-3">
                    We proudly serve Bellevue and the greater Seattle metropolitan area:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bellevue</li>
                    <li>• Redmond</li>
                    <li>• Kirkland</li>
                    <li>• Mercer Island</li>
                    <li>• Newcastle</li>
                    <li>• Sammamish</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;