import { Menu, X } from "lucide-react";
import Button from "../../Components/Button";
import { useState, useEffect } from "react";

const navLink = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong shadow-xl shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors duration-300 group flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Aher Pankaj
        </a>

        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLink.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-white/5 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground cursor-pointer rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in border-t border-border/40">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {navLink.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={closeMenu}
                className="text-base text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl py-3 px-4 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a href="#contact" onClick={closeMenu}>
                <Button className="w-full">Contact Me</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
