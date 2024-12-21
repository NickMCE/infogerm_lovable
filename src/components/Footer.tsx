import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-20 px-4 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">InfoGerm</h3>
            <p className="text-sm text-muted-foreground">
              Empowering the next generation of tech leaders through practical education and hands-on experience.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#internships" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Internships
                </a>
              </li>
              <li>
                <a href="#bootcamps" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Bootcamps
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates on bootcamps and internships.
            </p>
            <div className="flex gap-2">
            <a href="https://www.instagram.com/infogerm/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover-scale">
                <Instagram className="w-4 h-4" />
              </Button>
            </a>
            <a href="https://x.com/info_germ" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover-scale">
                <Twitter className="w-4 h-4" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/company/infogerm" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover-scale">
                <Linkedin className="w-4 h-4" />
              </Button>
            </a>
            <a href="https://www.facebook.com/infogerm" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover-scale">
                <Facebook className="w-4 h-4" />
              </Button>
            </a>
          </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;