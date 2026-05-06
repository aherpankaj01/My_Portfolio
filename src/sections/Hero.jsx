import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import Button from "../../Components/Button";
import { AnimatedBorderBtn } from "../../Components/AnimatedBorderBtn";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  left: `${(i * 37.3 + 11) % 100}%`,
  top: `${(i * 51.7 + 7) % 100}%`,
  duration: `${15 + ((i * 7.3) % 20)}s`,
  delay: `${(i * 1.3) % 5}s`,
  size: i % 3 === 0 ? "w-2 h-2" : i % 3 === 1 ? "w-1.5 h-1.5" : "w-1 h-1",
}));

const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-highlight/4 blur-[100px] pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className={`absolute ${p.size} rounded-full opacity-50`}
            style={{
              backgroundColor: "var(--color-primary)",
              left: p.left,
              top: p.top,
              animation: `slow-drift ${p.duration} ease-in-out infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background pointer-events-none" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              Software Engineer
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in animation-delay-100">
              Crafting <span className="text-primary glow-text">digital</span>
              <br />
              experiences with
              <br />
              <span className="font-serif italic font-normal text-white/90 text-6xl md:text-7xl lg:text-8xl">
                precision.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-in animation-delay-200">
              Hi, I'm{" "}
              <span className="text-foreground font-medium">Aher Pankaj</span> —
              a software engineer interested in Java, JavaScript & SQL. I build
              scalable, performant web applications that users love.
            </p>
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 mb-10">
            <a href="#contact">
              <Button size="lg" className="group">
                Contact Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <AnimatedBorderBtn />
          </div>

          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
            <span className="text-sm text-muted-foreground">Follow:</span>
            {[
              {
                icon: FaGithub,
                href: "https://github.com/aherpankaj01",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/pankaj-aher-136486236",
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary hover:border-primary/30 hover:scale-110 transition-all duration-300 text-lg"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-8 mt-12 animate-fade-in animation-delay-500">
            {[
              { value: "3+", label: "Projects Shipped" },
              { value: "5+", label: "Technologies" },
              { value: "100%", label: "Passion" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-primary glow-text">
                  {value}
                </div>
                <div className="text-xs text-muted-foreground tracking-wider uppercase mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#skills"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
