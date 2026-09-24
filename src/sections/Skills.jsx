const skills = [
  {
    title: "HTML5",
    color: "#E44D26",
    logo: (
      <svg width="36" viewBox="0 0 128 128">
        <path fill="#E44D26" d="M19 3l9 101 36 10 36-10 9-101z" />
        <path fill="#F16529" d="M64 117l29-8 8-90H64z" />
        <path fill="#fff" d="M64 52h18l-2 22-16 4V52z" opacity=".9" />
        <path fill="#ebebeb" d="M64 52H46l2 22 16 4V52z" opacity=".9" />
      </svg>
    ),
  },
  {
    title: "CSS3",
    color: "#264DE4",
    logo: (
      <svg width="36" viewBox="0 0 128 128">
        <path fill="#264DE4" d="M19 3l9 101 36 10 36-10 9-101z" />
        <path fill="#2965F1" d="M64 117l29-8 8-90H64z" />
        <path fill="#fff" d="M64 52h18l-2 22-16 4V52z" opacity=".9" />
        <path fill="#ebebeb" d="M64 52H46l2 22 16 4V52z" opacity=".9" />
      </svg>
    ),
  },
  {
    title: "JavaScript",
    color: "#F7DF1E",
    logo: (
      <svg width="36" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="8" fill="#F7DF1E" />
        <text
          x="50%"
          y="62%"
          textAnchor="middle"
          fontSize="56"
          fontWeight="bold"
          fill="#111"
        >
          JS
        </text>
      </svg>
    ),
  },
  {
    title: "React",
    color: "#61DAFB",
    logo: (
      <svg width="36" viewBox="0 0 128 128">
        <circle cx="64" cy="64" r="10" fill="#61DAFB" />
        <ellipse
          rx="50"
          ry="19"
          cx="64"
          cy="64"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="5"
        />
        <ellipse
          rx="50"
          ry="19"
          cx="64"
          cy="64"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="5"
          transform="rotate(60 64 64)"
        />
        <ellipse
          rx="50"
          ry="19"
          cx="64"
          cy="64"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="5"
          transform="rotate(120 64 64)"
        />
      </svg>
    ),
  },
  {
    title: "Tailwind",
    color: "#38BDF8",
    logo: (
      <svg width="36" viewBox="0 0 128 128">
        <path
          fill="#38BDF8"
          d="M64 24c-13 0-21 6.5-24 19.5 4.8-6.5 10.4-8.9 16.5-7.3 3.6.9 6.1 3.6 9 6.3 4.6 4.5 10 9.7 21.5 9.7 13 0 21-6.5 24-19.5-4.8 6.5-10.4 8.9-16.5 7.3-3.6-.9-6.1-3.6-9-6.3C81 29.2 75.5 24 64 24zm-24 29.3c-13 0-21 6.5-24 19.5 4.8-6.5 10.4-8.9 16.5-7.3 3.6.9 6.1 3.6 9 6.3 4.6 4.5 10 9.7 21.5 9.7 13 0 21-6.5 24-19.5-4.8 6.5-10.4 8.9-16.5 7.3-3.6-.9-6.1-3.6-9-6.3-4.5-4.5-10-9.7-21.5-9.7z"
        />
      </svg>
    ),
  },
  {
    title: "Java",
    color: "#f89820",
    logo: (
      <svg width="36" viewBox="0 0 128 128">
        <path
          fill="#f89820"
          d="M47 92s-4 2.4 2.9 3.2c8.3 1 12.6 .9 21.7-.9 0 0 2.4 1.5 5.7 2.8-20.4 8.7-46.1-.5-30.3-5.1zm-3.5-15.5s-4.5 3.3 2.3 4c8.7.9 15.5 1 27.4-1.3 0 0 1.7 1.7 4.3 2.6C53.4 89.4 24.9 82 43.5 76.5z"
        />
        <path
          fill="#EA2D2E"
          d="M69.3 50.7c5 5.7-1.3 10.8-1.3 10.8s12.6-6.5 6.8-14.6c-5.4-7.6-9.6-11.4 13-24.4 0 0-35.5 8.9-18.5 28.2z"
        />
        <path
          fill="#f89820"
          d="M90.5 99.2s3 2.5-3.3 4.4c-12 3.6-49.8 4.7-60.3.1-3.8-1.6 3.3-3.9 5.5-4.3 2.3-.5 3.6-.4 3.6-.4-4.1-2.9-26.8 5.7-11.5 8.2 41.7 6.8 76-3 66-8zm-53.2-38s-19 4.5-6.7 6.2c5.2.7 15.5.5 25.1-.3 7.9-.6 15.8-2 15.8-2s-2.8 1.2-4.8 2.5c-19.3 5.1-56.6 2.7-45.9-2.4 9.1-4.4 17.2-4 16.5-4zm34.2 19.1c19.6-10.2 10.5-20 4.2-18.7-1.6.3-2.3.6-2.3.6s.6-1 1.7-1.4c13-4.5 23 13.4-4 20.5 0 0 .3-.3.4-.9z"
        />
        <path
          fill="#f89820"
          d="M73 1s10.9 10.9-10.3 27.7c-17 13.4-3.9 21.1 0 29.8-9.9-8.9-17.2-16.8-12.3-24.1C57.5 23.2 77.4 18 73 1z"
        />
        <path
          fill="#f89820"
          d="M52.7 124.3c18.8 1.2 47.7-.7 48.4-9.5 0 0-1.3 3.4-15.6 6.1-16.1 3-36 2.6-47.8.7 0 0 2.4 2 15 2.7z"
        />
      </svg>
    ),
  },
  {
    title: "MySQL",
    color: "#00758F",
    logo: (
      <svg width="36" viewBox="0 0 128 128">
        <path
          fill="#00758F"
          d="M116.2 94.4c-9.2-.3-16.3 .6-22.3 3.1-1.7.7-4.4.7-4.7 2.9 .9 1 1 2.5 1.8 3.8 1.4 2.3 3.8 5.3 5.9 6.9 2.3 1.8 4.7 3.7 7.2 5.3 4.4 2.7 9.4 4.3 13.7 7 2.5 1.6 5 3.6 7.5 5.3 1.2.9 2 2.3 3.5 2.8V131c-.7-.9-1.8-1.3-2.7-2l-2.7-1.9c-2.6-1.7-5.5-3.2-8.3-4.6-5.3-2.7-11.3-4.3-16-7.6-2.4-1.6-4.8-3.6-7.2-5.5-1.2-1-1.9-2.5-3.4-3v.3c.7.9.9 2.2 1.6 3.1 1 .9 2 1.8 3 2.6 3.8 2.5 7.9 4.8 11.6 7.2 3.8 2.4 7.5 4.9 11.3 7.2 1.9 1.1 3.8 2.4 5.7 3.7v.3c-1.3-.3-2.5-1-3.8-1.6l-9.4-4.7c-5.3-2.7-10.1-5.9-14.7-9.4-2.3-1.7-3.8-4.1-6.6-5.3 .2 1.1 1 2 1.7 2.9 1.2.9 2.4 1.8 3.7 2.7 4 2.8 8.3 5.1 12.5 7.7l7.5 5.1c1.9 1.3 3.9 2.3 5.8 3.5v.3c-.8-.3-1.7-.7-2.5-1l-9.5-4.7c-5.7-2.9-10.8-6.3-15.6-9.9-.7-.5-1.4-1.1-2.1-1.6v-.3c.4.3.9.7 1.3 1-.3-1-1-1.7-1.7-2.5a14.7 14.7 0 0 1-3.2-6.3c-.3-1.3-.2-2.8-1.1-3.8-4 .9-6.7 4.8-8.6 8-2.5 4.2-4.9 9.2-5.1 14.8.2.2.1.4.3.6 3.2.9 6.4-.9 8.9-2.1 9.1-4.7 16.8-11.5 22.3-20.5.7-1.1.5-2.5 1.3-3.7 2.5.5 5.5.6 7.6 1.9 3.5 2 5.5 5.5 8.4 7.9.5-.7.2-1.6.1-2.3-.5-1.3-2.3-2-3.1-3.4-.3-.5-.4-1.1-.7-1.5l-2.4-1.7h-.5c-.5-.7-.9-1.3-1.4-2l2.9.9c1.7.9 3 2.4 4.5 3.6 3.5 2.6 6.4 5.8 9 9.2 2.9 3.8 4.9 8.1 7.2 12.3.6 1.1 1.5 2 2.1 3.1v.3c-2.7-.5-4.7-2.3-6.6-4.1-5-4.8-9-10.3-11.7-16.8-.8-2-2.2-4.1-4.3-4.7zm-9.1 .6c-.3.3-.6.5-.9.8-2.2 2.2-4.8 4-7.5 5.2-2.8 1.3-5.7 2-8.7 1.7a15 15 0 0 1-7-3.3c-.3-.3-.5-.5-.7-.8 2.4-.7 4.8-.8 6.9-1.7 3.5-1.4 5.9-4.2 9.5-5.3 1-.3 2-.5 3-.3l2.1.5 3.3 2.9z"
        />
        <path
          fill="#00758F"
          d="M10.7 1c-.6 5.2 2.1 9.6 3.4 14.3 1.3 4.5 1.9 9.2 1.4 14-.5 4.1-1.9 8-3.4 11.8-1.5 4-2.9 7.7-2.9 12.3 0 2 .3 3.9 1 5.7l1.9 5c1 2.4 1.8 5.1 2.5 7.7 .8 2.8 1.4 5.6 1.2 8.5-.2 5.2-2.3 10-4.4 14.5-2.1 4.6-4.3 8.9-4.3 14.2 0 3.6.9 6.9 2.5 9.9 1.6 3 4 5.5 6.8 7.4 2.8 1.9 6 3.1 9.3 3.7 3.3.6 6.7.5 10-.3 3.3-.8 6.4-2.3 9.2-4.2 2.8-1.9 5.2-4.3 7.1-7.1 1.9-2.8 3.2-5.9 4-9.2 .7-3.3.8-6.7.2-10-1.1-6.6-4.2-12.7-7.5-18.5-1.6-2.9-3.3-5.7-5.1-8.4-1.8-2.7-3.7-5.3-5.1-8.1-2.9-5.6-4.2-11.6-3.8-17.8 .3-5.7 1.9-11.2 4-16.5 2.1-5.3 4.5-10.3 5.8-15.7 1.3-5.5 1.1-11.2-1.8-16.1C39.4 9 36.6 5.7 33.9 2.6c-1.4-1.6-2.7-3.3-3.8-5.1-.9-1.5-1.5-3.2-1.5-5H10.7zm18.1 110.7c1.2.1 2.4.4 3.5 1 1.1.6 2.1 1.4 2.9 2.4.8 1 1.4 2.1 1.8 3.4.4 1.2.5 2.5.4 3.8-.2 1.3-.6 2.5-1.2 3.6-.7 1.1-1.5 2.1-2.5 2.8-1 .7-2.2 1.2-3.5 1.4-1.2.2-2.5.1-3.7-.3-1.2-.4-2.3-1.1-3.2-2.1-.9-1-1.5-2.2-1.8-3.5-.3-1.3-.3-2.7.1-4 .4-1.3 1.1-2.5 2-3.5.9-1 2-1.7 3.3-2.2 1.2-.5 2.5-.7 3.9-.7v.0z"
        />
      </svg>
    ),
  },
  {
    title: "Git",
    color: "#F05032",
    logo: (
      <svg width="36" viewBox="0 0 128 128">
        <path
          fill="#F05032"
          d="M124.7 58.2L69.8 3.3a11.2 11.2 0 0 0-15.8 0L42.4 14.9l14.9 14.9a13.3 13.3 0 0 1 16.8 16.9l14.4 14.4a13.3 13.3 0 1 1-7.9 7.5L66.7 54.2v36.7a13.3 13.3 0 1 1-10.9-.3V53.5a13.3 13.3 0 0 1-7.2-17.5L33.8 21.2 3.3 51.8a11.2 11.2 0 0 0 0 15.8l54.9 54.9a11.2 11.2 0 0 0 15.8 0l50.7-50.7a11.2 11.2 0 0 0 0-15.6z"
        />
      </svg>
    ),
  },
  {
    title: "DBMS",
    color: "#6C63FF",
    logo: (
      <svg width="36" viewBox="0 0 128 128">
        <ellipse cx="64" cy="28" rx="42" ry="14" fill="#6C63FF" />
        <rect x="22" y="28" width="84" height="48" fill="#6C63FF" />
        <ellipse cx="64" cy="76" rx="42" ry="14" fill="#5A54E0" />
        <ellipse cx="64" cy="58" rx="42" ry="14" fill="#7B72FF" opacity=".5" />
      </svg>
    ),
  },
  {
    title: "SQL",
    color: "#00758F",
    logo: (
      <svg width="36" viewBox="0 0 128 128">
        <ellipse cx="64" cy="28" rx="42" ry="14" fill="#00758F" />
        <rect x="22" y="28" width="84" height="48" fill="#00758F" />
        <ellipse cx="64" cy="76" rx="42" ry="14" fill="#005F6B" />
        <ellipse cx="64" cy="58" rx="42" ry="14" fill="#00939E" opacity=".5" />
      </svg>
    ),
  },
      {
        title: "Spring Boot",
        color: "#6DB33F",
        logo: (
          <svg width="36" viewBox="0 0 128 128">
            <circle cx="64" cy="64" r="56" fill="#6DB33F" />
            <path
              d="M46 44a30 30 0 1 0 36 0"
              fill="none"
              stroke="#fff"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <line
              x1="64"
              y1="30"
              x2="64"
              y2="68"
              stroke="#fff"
              strokeWidth="9"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        title: "Spring Security",
        color: "#6DB33F",
        logo: (
          <svg width="36" viewBox="0 0 128 128">
            <path
              fill="#6DB33F"
              d="M64 8l46 17v34c0 30-19 51-46 61C37 110 18 89 18 59V25z"
            />
            <circle cx="64" cy="56" r="11" fill="#fff" />
            <path fill="#fff" d="M59 62h10l4 26H55z" />
          </svg>
        ),
      },
      {
        title: "JDBC",
        color: "#5382A1",
        logo: (
          <svg width="36" viewBox="0 0 128 128">
            <ellipse cx="64" cy="28" rx="42" ry="14" fill="#5382A1" />
            <rect x="22" y="28" width="84" height="48" fill="#5382A1" />
            <ellipse cx="64" cy="76" rx="42" ry="14" fill="#3F6885" />
            <ellipse cx="64" cy="52" rx="42" ry="14" fill="#6C9BBB" opacity=".5" />
            <rect x="50" y="88" width="28" height="18" rx="4" fill="#f89820" />
            <rect x="56" y="104" width="6" height="16" rx="2" fill="#f89820" />
            <rect x="66" y="104" width="6" height="16" rx="2" fill="#f89820" />
          </svg>
        ),
      },
      {
        title: "Hibernate",
        color: "#BCAE79",
        logo: (
          <svg width="36" viewBox="0 0 128 128">
            <path
              fill="#59666C"
              d="M64 6l50 29v58l-50 29-50-29V35z"
            />
            <path fill="#BCAE79" d="M64 6l50 29-50 29-50-29z" />
            <path
              d="M46 44v40M82 44v40M46 64h36"
              fill="none"
              stroke="#fff"
              strokeWidth="9"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        title: "JPA",
        color: "#3E7CB1",
        logo: (
          <svg width="36" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="16" fill="#3E7CB1" />
            <text
              x="50%"
              y="64%"
              textAnchor="middle"
              fontSize="44"
              fontWeight="bold"
              fill="#fff"
            >
              JPA
            </text>
          </svg>
        ),
      },
      {
        title: "Maven",
        color: "#C71A36",
        logo: (
          <svg width="36" viewBox="0 0 128 128">
            <path
              d="M22 108V24l42 56 42-56v84"
              fill="none"
              stroke="#C71A36"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M84 20c14 4 22 14 22 30-14-2-22-12-22-30z"
              fill="#C71A36"
              opacity=".7"
            />
          </svg>
        ),
      },
      {
        title: "PostgreSQL",
        color: "#336791",
        logo: (
          <svg width="36" viewBox="0 0 128 128">
            <circle cx="64" cy="60" r="48" fill="#336791" />
            <ellipse cx="42" cy="68" rx="14" ry="22" fill="#fff" opacity=".25" />
            <path
              d="M84 70q18 8 12 30-2 8-12 6"
              fill="none"
              stroke="#fff"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <circle cx="78" cy="46" r="5" fill="#fff" />
            <path
              d="M60 108v14M78 108v14"
              stroke="#336791"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        title: "Postman",
        color: "#FF6C37",
        logo: (
          <svg width="36" viewBox="0 0 128 128">
            <circle cx="64" cy="64" r="56" fill="#FF6C37" />
            <circle cx="76" cy="46" r="10" fill="#fff" />
            <path
              d="M32 96l34-34"
              stroke="#fff"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M70 70l16 16M60 80l12 12"
              stroke="#fff"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        title: "Vercel",
        color: "#FFFFFF",
        logo: (
          <svg width="36" viewBox="0 0 128 128">
            <path fill="#fff" d="M64 18l52 92H12z" />
          </svg>
        ),
      },
      {
        title: "Render",
        color: "#46E3B7",
        logo: (
          <svg width="36" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="24" fill="#46E3B7" />
            <path
              d="M40 100V28h30a20 20 0 0 1 0 40H40M68 68l22 32"
              fill="none"
              stroke="#111"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        title: "Neon DB",
        color: "#00E599",
        logo: (
          <svg width="36" viewBox="0 0 128 128">
            <path fill="#00E599" d="M20 20h88v88L74 78v30H20z" />
            <path fill="#0b0b0b" opacity=".55" d="M42 42h20v30z" />
          </svg>
        ),
      },
      {
        title: "Cloudinary",
        color: "#3448C5",
        logo: (
          <svg width="36" viewBox="0 0 128 128">
            <circle cx="42" cy="82" r="24" fill="#3448C5" />
            <circle cx="68" cy="58" r="32" fill="#3448C5" />
            <circle cx="98" cy="82" r="22" fill="#3448C5" />
            <rect x="42" y="82" width="56" height="24" fill="#3448C5" />
            <path
              d="M64 96V70M52 80l12-12 12 12"
              fill="none"
              stroke="#fff"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
    ];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-primary/3 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground animate-fade-in">
          Tech Stack
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 animate-fade-in animation-delay-100">
          Skills &{" "}
          <span className="font-serif italic font-normal text-primary glow-text">
            Tools
          </span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto animate-fade-in animation-delay-200">
          A curated set of technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="shrink-0 px-3 py-4">
              <span
                className="flex items-center gap-3 text-lg font-semibold
                  px-5 py-3 rounded-2xl
                  bg-white/[0.04] backdrop-blur-md
                  border border-white/[0.08]
                  text-muted-foreground/80
                  hover:text-white hover:scale-105
                  hover:border-white/20
                  hover:bg-white/[0.08]
                  hover:shadow-[0_0_24px_rgba(20,240,224,0.12)]
                  transition-all duration-300 cursor-default select-none"
              >
                <span className="flex-shrink-0">{skill.logo}</span>
                {skill.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group flex flex-col items-center gap-3 p-5 rounded-2xl
              bg-white/[0.03] border border-white/[0.06]
              hover:border-primary/30 hover:bg-white/[0.06]
              hover:shadow-[0_0_30px_rgba(20,240,224,0.08)]
              transition-all duration-400 cursor-default
              animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="group-hover:scale-110 transition-transform duration-300">
              {skill.logo}
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
