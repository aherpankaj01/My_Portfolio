import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import img from "../../asset/Yojak.png";
import img2 from "../../asset/Portfolio.png";
import img3 from "../../asset/github.jpg";

const projects = [
  {
    title: "Yojak — Blogging Platform",
    description:
      "Modern full-stack blog platform with authentication, CRUD posts, Appwrite backend, Redux state management, and a polished Tailwind UI.",
    image: img,
    tags: ["React", "Redux", "Appwrite", "Tailwind"],
    link: "https://yojak-eight.vercel.app/",
    github: "https://github.com/aherpankaj01/Yojak",
    featured: true,
  },
  {
    title: "Student Management System",
    description:
      "Relational database system managing students, courses, instructors, and enrollments with advanced SQL queries for joins, aggregation, and academic insights.",
    image: img3,
    tags: ["SQL", "MySQL", "DBMS"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "My Portfolio",
    description:
      "Modern, responsive developer portfolio showcasing projects and skills. Built with React, Tailwind CSS, and EmailJS for live contact form delivery.",
    image: img2,
    tags: ["React", "Tailwind", "EmailJS"],
    link: "#",
    github: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-highlight/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Selected{" "}
            <span className="font-serif italic font-normal text-primary glow-text">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
            A collection of work spanning full-stack web apps, database systems,
            and UI experiments — each one built with care and intention.
          </p>
        </div>

        <div
          className="group relative rounded-3xl overflow-hidden mb-8
            bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]
            hover:border-primary/30 hover:shadow-[0_0_60px_rgba(20,240,224,0.08)]
            transition-all duration-500 animate-fade-in animation-delay-200"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative overflow-hidden aspect-video lg:aspect-auto lg:min-h-80">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-primary uppercase tracking-widest">
                  Featured Project
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {projects[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {projects[0].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs bg-primary/10 border border-primary/20 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={projects[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:brightness-110 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={projects[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 hover:border-primary/40 text-sm font-medium transition-all"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden
                bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]
                hover:border-primary/30 hover:shadow-[0_0_40px_rgba(20,240,224,0.07)]
                transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${(idx + 3) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-7 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs bg-white/[0.04] border border-white/[0.08] text-muted-foreground hover:text-white hover:border-primary/40 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-600">
          <a
            href="https://github.com/aherpankaj01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/10 hover:border-primary/40 text-muted-foreground hover:text-foreground hover:shadow-[0_0_20px_rgba(20,240,224,0.1)] transition-all duration-300 text-sm font-medium"
          >
            <FaGithub className="text-lg" />
            View all projects on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
