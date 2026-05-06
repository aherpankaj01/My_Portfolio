import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="flex items-center gap-1.5">
          Built with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> by{" "}
          <span className="text-foreground font-medium">Aher Pankaj</span> · {year}
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/aherpankaj01"  target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-lg"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/pankaj-aher-136486236" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-lg"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
