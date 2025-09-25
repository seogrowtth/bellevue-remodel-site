const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">BLC Remodeling</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted Bellevue remodeling contractor specializing in kitchen remodeling, 
              bathroom renovation, and complete home transformations.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Licensed • Insured • Bonded<br />
              Contractor License #BLCREM*123AB
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Kitchen Remodeling</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Bathroom Renovation</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Home Additions</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Complete Renovations</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Custom Carpentry</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Bellevue, WA</li>
              <li>Redmond, WA</li>
              <li>Kirkland, WA</li>
              <li>Mercer Island, WA</li>
              <li>Newcastle, WA</li>
              <li>Sammamish, WA</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📞 (425) 555-0123</p>
              <p>✉️ info@blcremodeling.com</p>
              <p>📍 Serving Greater Bellevue Area</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-primary-foreground/60">
                Business Hours:<br />
                Mon-Fri: 8AM-6PM<br />
                Sat: 9AM-4PM<br />
                Sun: By Appointment
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 BLC Remodeling. All rights reserved. | Licensed Bellevue Remodeling Contractor
          </p>
          <p className="text-sm text-primary-foreground/40 mt-2">
            Keywords: Bellevue home remodeling, bellevue kitchen remodeling, bellevue bathroom remodeling, bellevue remodeling contractor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;