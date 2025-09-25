import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Above & Beyond</h3>
            <p className="text-sm text-primary-foreground/80 mb-2">Construction & Remodeling</p>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Gig Harbor's premier remodeling contractor since 2003. Transforming homes throughout Pierce County with exceptional craftsmanship and personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground/80">(253) 456-7890</p>
                  <p className="text-sm text-primary-foreground/60">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-primary-foreground/80">info@abovebeyondgigharbor.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-primary-foreground/80">Gig Harbor, WA</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Gig Harbor Kitchen Remodeling</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Gig Harbor Bathroom Remodeling</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Whole Home Renovations</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Custom Additions</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Emergency Repairs</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Gig Harbor, WA</li>
              <li>Tacoma, WA</li>
              <li>University Place, WA</li>
              <li>Fox Island, WA</li>
              <li>Steilacoom, WA</li>
              <li>Lakewood, WA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Above & Beyond Construction & Remodeling. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-xs mt-2">
            Licensed General Contractor | Gig Harbor home remodeling, gig harbor kitchen remodeling, gig harbor bathroom remodeling, gig harbor remodeling contractor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;