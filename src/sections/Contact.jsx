import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../../Components/Button";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aherpankaj22@gmail.com",
    href: "mailto:aherpankaj22@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: "#",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/aherpankaj01",
    href: "https://github.com/aherpankaj01",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      const emailjsLib = window.emailjs;
      if (!emailjsLib) throw new Error("EmailJS library not loaded.");

      await emailjsLib.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent! I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message:
          err?.text ||
          err?.message ||
          "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-highlight/3 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground animate-fade-in">
            Get In Touch
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/20 animate-fade-in animation-delay-300">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-primary" />
              Send a Message
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Pankaj Aher"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              <Button
                className="w-full group"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-start gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/8 border border-green-500/20 text-green-400"
                      : "bg-red-500/8 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm leading-relaxed">
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-5 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-primary" />
                Contact Details
              </h3>
              <div className="space-y-3">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.04] transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground mb-0.5">
                        {item.label}
                      </div>
                      <div className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border border-primary/20 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="font-semibold text-green-400">
                  Currently Available
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Open to full-time roles, freelance projects, and interesting
                collaborations. Let's talk about what you're building!
              </p>
              <div className="mt-5 pt-5 border-t border-white/5">
                <a
                  href="https://www.linkedin.com/in/pankaj-aher-136486236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
