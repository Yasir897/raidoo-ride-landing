import { Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Company Name */}
          <h3 className="text-xl font-bold">Raidoo</h3>
          
          {/* Twitter */}
          <a 
            href="https://twitter.com/raidoo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          
          {/* Contact */}
          <p className="text-xs text-primary-foreground/70">
            Contact with Us: contact@raidoo.com
          </p>
          
          {/* Copyright */}
          <p className="text-xs text-primary-foreground/60 pt-2">
            © 2025 Raidoo. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
