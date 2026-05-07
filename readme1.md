🗂️ My Portfolio — Complete Project Documentation & Interview Guide

React · Vite · Tailwind CSS v4 · EmailJS · Lucide React · React Icons
This document covers the complete project overview, data flow, file structure, and every possible interview question with detailed answers in simple words.

📌 Table of Contents

Project Overview
Tech Stack — Every Tool Explained
Folder & File Structure
Complete Data Flow
Interview Questions — General
Interview Questions — React
Interview Questions — CSS & Tailwind
Interview Questions — Performance
Interview Questions — JavaScript & Forms
Interview Questions — Bugs & Improvements
Interview Questions — Deployment
Interview Questions — Design & UX

1. Project Overview
   My Portfolio is a single-page application (SPA) built entirely with React. It is a personal developer portfolio that showcases who I am, what skills I have, what projects I have built, and how someone can contact me.
   There is no backend server written from scratch. The only backend service used is EmailJS, which handles sending the contact form email without needing a Node.js or Express server.
   What the Portfolio Contains
   SectionWhat it DoesHeroLanding screen with my name, title, social links, and two CTA buttonsSkillsAuto-scrolling marquee of all technologies I knowProjectsCards showing my 3 projects with images, tags, and linksContactForm with Name, Email, Message that sends a real email via EmailJS

2. Tech Stack — Every Tool Explained
   React 19
   React is the main library used to build the UI. Everything you see on screen is a React component. React updates only the parts of the page that change, instead of reloading the whole page — this makes it very fast. Version 19 is the latest major version.
   Vite
   Vite is the build tool. It starts the development server almost instantly (unlike older tools like Create React App which were slow). It also bundles all the code into small optimized files for production using the npm run build command.
   Tailwind CSS v4
   Tailwind is a utility-first CSS framework. Instead of writing separate CSS files, you write class names directly in JSX — like bg-primary, text-sm, rounded-full, flex. It makes styling very fast. Version 4 uses a new @import "tailwindcss" syntax and the @theme block for custom design tokens.
   EmailJS
   EmailJS is a third-party service that sends emails directly from the browser without needing a backend server. The contact form calls EmailJS's API with your Service ID, Template ID, and Public Key. EmailJS then sends the email to your inbox on your behalf.
   Lucide React
   Lucide React is an icon library. Icons like ArrowRight, Send, Mail, Menu, X, ChevronDown, DownloadIcon are all imported from this package and rendered as SVG components.
   React Icons
   React Icons is another icon library that provides icons from popular icon packs. In this project, FaGithub from react-icons/fa and FaLinkedin from react-icons/fa6 are used for the social media links.
   @tailwindcss/vite
   This is a Vite plugin that integrates Tailwind CSS directly into Vite's build pipeline. It replaces the older PostCSS approach and makes the setup simpler and faster.

3. Folder & File Structure
   My_Portfolio/
   │
   ├── public/
   │ └── Aher_Pankaj.pdf → CV file (for download button)
   │
   ├── asset/
   │ ├── Yojak.png → Screenshot of Yojak project
   │ ├── Portfolio.png → Screenshot of Portfolio project
   │ └── github.jpg → Image used for SQL project card
   │
   ├── src/
   │ ├── main.jsx → Entry point — mounts React into index.html
   │ ├── App.jsx → Root component — assembles all sections
   │ ├── index.css → Global styles, Tailwind config, animations
   │ │
   │ ├── layout/
   │ │ └── Navbar.jsx → Top navigation bar (sticky, mobile menu)
   │ │
   │ └── sections/
   │ ├── Hero.jsx → First visible section (intro + CTAs)
   │ ├── Skills.jsx → Skills marquee strip
   │ ├── Project.jsx → Projects grid with cards
   │ └── Contact.jsx → Contact form + contact info
   │
   ├── Components/
   │ ├── Button.jsx → Reusable primary button component
   │ └── AnimatedBorderBtn.jsx → Download CV button with animated SVG border
   │
   ├── .env → Stores EmailJS credentials (not committed to git)
   ├── index.html → HTML shell file — has <div id="root">
   ├── vite.config.js → Vite config — plugins, path alias (@)
   └── package.json → Dependencies and scripts
   What Each File Does
   main.jsx — This is where React starts. It finds the <div id="root"> in index.html and renders the entire React app inside it using createRoot. It also wraps the app in <StrictMode> which helps catch bugs during development.
   App.jsx — This is the root layout. It imports all section components (Navbar, Hero, Skills, Project, Contact) and puts them in order inside a <div>. Whatever order they are placed here, that is the order they appear on screen.
   index.css — This file defines the global styles. It uses Tailwind's @theme block to define custom CSS variables (like --color-primary: #20b2a6). It also defines all the custom animations like fade-in, slow-drift, float, and marquee using @keyframes.
   Navbar.jsx — The navigation bar fixed to the top of the screen. It has a logo, nav links, and a "Contact Me" button. On mobile it shows a hamburger icon that toggles a dropdown menu.
   Hero.jsx — The first section the user sees. It has my name and description, a "Contact Me" button, an animated Download CV button, floating particle dots, and social media links.
   Skills.jsx — An auto-scrolling horizontal strip (marquee) showing all my tech skills with their logos, duplicated to create a seamless infinite loop.
   Project.jsx — Shows 3 project cards in a grid. Each card has an image, hover animation, project title, description, tech tags, and links to the live site and GitHub.
   Contact.jsx — A contact form with Name, Email, and Message fields. On submit it calls EmailJS to send the email. Shows success or error feedback. Also has a contact info panel on the right side.
   Button.jsx — A reusable button component that accepts className, size, and children as props. The size prop (sm, default, lg) controls padding and font size.
   AnimatedBorderBtn.jsx — The "Download CV" button with a custom animated SVG border that draws itself around the button when hovered.

4. Complete Data Flow
Flow 1: App Startup
index.html loads in browser
↓
<script src="/src/main.jsx"> runs
    ↓
React mounts into <div id="root">
    ↓
App.jsx renders: Navbar → Hero → Skills → Project → Contact
    ↓
Each component renders its JSX to the screen
    ↓
CSS animations start (fade-in, marquee, particles drift)
Flow 2: Page Navigation (Navbar)
User clicks a nav link e.g. "Skills"
    ↓
Browser scrolls to the element with id="skills"
    ↓
This works because <a href="#skills"> and <section id="skills"> match
    ↓
scroll-behavior: smooth in index.css makes it animate smoothly
Flow 3: Mobile Menu Toggle
User clicks the hamburger icon (Menu icon from Lucide)
    ↓
onClick fires: setIsMobileMenuOpen(prev => !prev)
    ↓
isMobileMenuOpen state becomes true
    ↓
React re-renders Navbar
    ↓
The {isMobileMenuOpen && <div>...mobile menu...</div>} block now renders
    ↓
Mobile menu appears with nav links
    ↓
User clicks X icon → state becomes false → menu disappears
Flow 4: Skills Marquee
skills array is defined with 10 skill objects (title + SVG logo)
    ↓
In JSX: [...skill, ...skill] creates an array of 20 items (duplicated)
    ↓
All 20 are rendered as flex items in a row
    ↓
CSS animation "marquee" runs: translateX(0) → translateX(-50%)
    ↓
Since content is duplicated, when the first half scrolls out,
the second half looks identical — creating an infinite loop
Flow 5: Project Card Hover
User hovers over a project card
    ↓
Tailwind "group" class on the parent div activates
    ↓
group-hover: classes on children apply:

- Image scales up (group-hover:scale-110)
- Overlay buttons appear (group-hover:opacity-100)
- Title color changes (group-hover:text-primary)
- Arrow icon moves (group-hover:translate-x-1 group-hover:-translate-y-1)
  ↓
  User clicks the ArrowUpRight or GitHub icon
  ↓
  <a href={project.link}> navigates to the live site or GitHub repo
  Flow 6: Contact Form Submission
  User types Name, Email, Message into the form inputs
  ↓
  Each input has onChange={e => setFormData({...formData, field: e.target.value})}
  ↓
  formData state updates with each keystroke (controlled inputs)
  ↓
  User clicks "Send Message"
  ↓
  handleSubmit(e) fires:
  e.preventDefault() — stops page reload
  setIsLoading(true) — shows "Sending..." on button
  ↓
  Reads EmailJS credentials from import.meta.env.VITE\_\*
  ↓
  Calls emailjs.send(serviceId, templateId, {name, email, message}, publicKey)
  ↓
  EmailJS API sends the email to your inbox
  ↓
  If SUCCESS:
  setSubmitStatus({ type: "success", message: "Message sent!" })
  setFormData({ name: "", email: "", message: "" }) — clears form
  If FAILURE:
  setSubmitStatus({ type: "error", message: error.text })
  ↓
  setIsLoading(false) — button returns to normal
  ↓
  Green or red feedback card renders below the button
  Flow 7: Download CV Button
  User clicks "Download CV" button (AnimatedBorderBtn)
  ↓
  onClick handler creates a hidden <a> element
  ↓
  Sets href = "/Aher_Pankaj.pdf" (file in public/ folder)
  ↓
  Sets download = "Aher_Pankaj_CV.pdf"
  ↓
  Programmatically clicks the link
  ↓
  Browser downloads the PDF file

5. Interview Questions — General
   Q1. Can you explain what your portfolio project is?
   My portfolio is a single-page application built with React and Vite. It showcases my skills, projects, and a working contact form. It has four sections — Hero, Skills, Projects, and Contact. The contact form sends real emails using EmailJS without needing any backend server.

Q2. Why did you build a portfolio?
A portfolio proves what I can build better than just listing skills on a resume. It demonstrates React knowledge, responsive design, CSS animations, API integration (EmailJS), and component-based architecture — all in one real project.

Q3. What is a Single Page Application (SPA)?
In a traditional website, clicking a link loads a completely new HTML page from the server. In an SPA, the browser loads only one HTML page (index.html) at startup. All navigation after that is handled by JavaScript — it shows/hides components without reloading the page. React Router or anchor scroll handles navigation. This makes the app feel fast with no full page reloads.

Q4. What does "no backend" mean here? How does the contact form work without a server?
Normally, to send an email from a form, you would need a Node.js or Express backend that calls a mail server. In this project, EmailJS acts as the backend. EmailJS is a third-party service that provides a JavaScript SDK. You call emailjs.send() directly from the browser with your credentials, and EmailJS's own servers handle the actual email delivery. So no custom backend code is needed.

Q5. What are the three projects shown in the portfolio?

Yojak Blogging Website — A full-stack blog with React, Appwrite backend, Redux, and Tailwind.
Student Management System — A relational SQL database project using MySQL.
My Portfolio — This very portfolio website built with React and Tailwind.

Q6. What is Vite and why did you use it?
Vite is a modern build tool and development server. It starts the dev server almost instantly using native ES modules. Older tools like Create React App used Webpack which was very slow to start. Vite only processes files that are actually requested, not the entire codebase at once. For production builds it uses Rollup to bundle everything efficiently.

Q7. What does npm run dev do?
It starts Vite's development server (defined in package.json scripts as "dev": "vite"). Vite serves your project at http://localhost:5173 with Hot Module Replacement (HMR), which means when you save a file, only that component updates in the browser without a full page reload.

Q8. What is the public/ folder and how is it different from src/assets/?
Files in public/ are served exactly as-is at the root URL. So public/Aher_Pankaj.pdf is accessible at /Aher_Pankaj.pdf. Vite does not process these files. The asset/ folder (inside the project) is imported into components as JavaScript modules — Vite processes and optimizes them (hashing filenames for cache busting). Images used in components go in asset/, static files like PDFs go in public/.

6. Interview Questions — React
   Q9. What are components? How are they used in this project?
   A component is a JavaScript function that returns JSX (HTML-like code). In this project, each section (Hero, Skills, Project, Contact) is a separate component. Smaller reusable pieces like Button and AnimatedBorderBtn are also components. App.jsx assembles them all. This keeps the code organized — each component handles its own logic and UI.

Q10. What is JSX?
JSX stands for JavaScript XML. It lets you write HTML-like syntax inside JavaScript. For example:
jsxconst element = <h1 className="title">Hello</h1>;
The browser cannot read JSX directly. Vite + Babel transforms it into regular JavaScript (React.createElement(...)) during the build process.

Q11. What is useState and where is it used?
useState is a React hook that lets a component remember a value between renders. When the state changes, React re-renders the component. In this project:

Navbar uses useState(false) to track if the mobile menu is open or closed
Contact uses useState({name:"", email:"", message:""}) for form field values
Contact uses useState(false) for the loading state of the submit button
Contact uses useState({type: null, message: ""}) for the success/error feedback

Q12. What are props?
Props (short for properties) are values passed from a parent component to a child component. In this project, Button accepts className, size, and children as props. AnimatedBorderBtn accepts children. This makes components reusable — the same Button can look different based on what props you pass.

Q13. What is the children prop?
children is a special React prop that represents whatever JSX you put between the opening and closing tags of a component. For example:
jsx<Button>Contact Me <ArrowRight /></Button>
Inside Button.jsx, {children} renders the text "Contact Me" and the arrow icon.

Q14. What is e.preventDefault() in the form submit handler?
By default, when an HTML form is submitted, the browser refreshes the page (because forms were designed to send data to a server in traditional web development). e.preventDefault() stops this default browser behavior so that React can handle the submission with JavaScript instead.

Q15. What is the spread operator (...formData) used for in the form state?
When updating one field in the form, you don't want to lose the other fields. The spread operator copies all existing fields first:
jssetFormData({ ...formData, name: e.target.value })
This means: keep email and message as they are, just update name. Without the spread, you would overwrite the entire object and lose the other fields.

Q16. What is a controlled input?
A controlled input is an <input> whose value is controlled by React state. Every keystroke updates the state, and the state value is set as the input's value prop. This means React always knows exactly what is in the input. In this project all three form inputs are controlled — each has value={formData.name} and onChange={(e) => setFormData(...)}.

Q17. Why is the skills array duplicated with [...skill, ...skill]?
The marquee animation moves the content from right to left by 50% of its total width. If you only have 10 items and the animation moves them off-screen, there would be a gap. By duplicating the array to 20 items and moving 50%, the second copy of the 10 items fills exactly where the first copy was. This creates a seamless infinite loop with no gap.

Q18. What is the group class in Tailwind?
group is a Tailwind class applied to a parent element. It allows child elements to change styles when the parent is hovered using group-hover: prefix classes. For example:
jsx<div className="group">
<img className="group-hover:scale-110" />

  <h3 className="group-hover:text-primary" />
</div>
When the parent <div> is hovered, both the image and the heading change styles simultaneously. This is used in the project cards.

Q19. What is import.meta.env and how are environment variables used?
import.meta.env is Vite's way of reading environment variables. Variables defined in the .env file with the prefix VITE* are available in the browser code. For example:
VITE_EMAILJS_SERVICE_ID=service_abc123
In the component:
jsconst serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
The VITE* prefix is required — Vite intentionally does not expose variables without this prefix to prevent accidentally leaking server secrets.

Q20. What is StrictMode in main.jsx?
React.StrictMode is a wrapper component that activates additional checks and warnings during development. It intentionally renders components twice to help detect side effects. It does nothing in production — it only runs in development and produces no visible output.

Q21. What is forwardRef and is it used in this project?
forwardRef allows a parent component to pass a ref down to a DOM element inside a child component. It is not explicitly used in this project's current state but would be useful if React Hook Form's register() needed to attach to the Button or Input component's underlying DOM element.

Q22. What is the difference between export default and export const?
In this project, both are used:

Button.jsx uses export default Button — imported as import Button from "./Button"
AnimatedBorderBtn.jsx uses export const AnimatedBorderBtn (named export) — imported as import { AnimatedBorderBtn } from "./AnimatedBorderBtn"
Contact.jsx exports both: export const Contact and export default Contact

Named exports let you export multiple things from one file. Default exports are the "main" thing a file exports.

7. Interview Questions — CSS & Tailwind
   Q23. What is Tailwind CSS and how does it work?
   Tailwind is a utility-first CSS framework. Instead of writing a .card { background: white; border-radius: 8px; } in a CSS file, you write the classes directly on the element: className="bg-white rounded-lg". Every class does exactly one CSS thing. Tailwind v4 (used here) scans your JSX files and generates only the CSS classes that are actually used — keeping the final CSS file very small.

Q24. What is @theme in Tailwind v4?
@theme is a new feature in Tailwind v4 that lets you define design tokens (custom CSS variables) directly in your CSS file. In index.css:
css@theme {
--color-primary: #20b2a6;
--color-background: #0f1418;
}
These become available as Tailwind utilities like bg-primary, text-background, border-primary automatically — without needing to extend the config in tailwind.config.js.

Q25. What is backdrop-filter: blur and the .glass utility?
backdrop-filter: blur() applies a blur effect to everything behind an element. The .glass class in index.css combines semi-transparent background, backdrop blur, and a subtle border to create a "frosted glass" effect. It is used on the Navbar, skill cards, project cards, and contact form to give the dark UI a layered, depth-like appearance.

Q26. What are CSS custom properties (variables) and how are they used?
CSS custom properties are variables defined with -- prefix. They are defined in :root or @theme and accessed with var():
css--color-primary: #20b2a6;
color: var(--color-primary);
Tailwind v4 uses these under the hood. The AnimatedBorderBtn uses stroke="var(--color-primary)" on the SVG path so the animated border always uses the correct theme color.

Q27. How does the animated border on the Download CV button work?
It uses an inline SVG with a <path> that draws the button's outline shape. The path has strokeDasharray="400 550" and strokeDashoffset="400" — this makes the stroke appear as a short segment. When hovered, a CSS animation (animated-border) changes the strokeDashoffset from 400 to -550, which moves the visible segment all the way around the path, creating the effect of a border "drawing itself" around the button on hover.

Q28. What are @keyframes animations and how are they used?
@keyframes define custom CSS animations. In index.css, several are defined:

fade-in — elements start invisible, blurred, shifted down; animate to visible, sharp, in place
slow-drift — particles in Hero section slowly move around in random directions
float — an element gently bobs up and down
marquee — moves the skills strip from 0 to -50% horizontally, creating the scrolling effect

These are applied with utility classes like animate-fade-in, animate-marquee, animate-float.

Q29. What is animation-delay and why are there multiple delay classes?
Animation delay makes an element wait before starting its animation. The Hero section staggers its elements: the badge appears first (no delay), then the heading (100ms later), then the description (200ms), then the buttons (300ms), then social links (400ms), then the scroll indicator (800ms). This creates a cascade effect where content appears one after another instead of all at once — giving a polished, intentional feel.

Q30. What does overflow-hidden on the skills section do?
The marquee animation moves the skills strip horizontally. Without overflow-hidden, the content that moves outside the container's bounds would be visible and break the layout. overflow-hidden clips anything that goes beyond the container, so only what is inside the visible area is shown — making the marquee look clean.

8. Interview Questions — Performance
   Q31. Is this project using lazy loading? Should it?
   The current version does not use lazy loading. Since this is a single-page portfolio (not a multi-page app with routes), all components are imported directly in App.jsx. Lazy loading would only help if there were multiple pages/routes. However, adding React.lazy() for sections could still improve initial load time slightly by deferring off-screen sections.

Q32. How does Vite optimize the production build?
Running npm run build tells Vite to:

Bundle all JavaScript modules into optimized chunks
Tree-shake — remove any code that is not actually used
Minify — remove whitespace, shorten variable names
Hash file names — main.a3b9d2.js — so browsers know to fetch new versions when code changes
Optimize images imported through the module system

Q33. What is HMR (Hot Module Replacement)?
HMR is a Vite feature during development. When you save a file, instead of refreshing the entire page, Vite sends only the changed module to the browser and swaps it in place. This means the page updates instantly and the existing state is preserved. For example, if you have a form half-filled and you change the button color in CSS, the form stays filled — only the button color updates.

Q34. Why is Math.random() used for particle positions a performance issue?
In the Hero section, Math.random() is called inside the component render function for each particle's left, top, animation-duration, and animation-delay. This means every time the component re-renders, new random positions are generated — causing the particles to jump to new positions. The fix is to generate the positions once outside the component (in a constant) or use useMemo() so they are only calculated once.

9. Interview Questions — JavaScript & Forms
   Q35. What is async/await and why is it used in handleSubmit?
   async/await is a way to handle asynchronous operations (things that take time) in a clean, readable way. emailjs.send() is an async operation — it makes a network request to EmailJS's server and waits for a response. Using await makes the code wait for that response before continuing. async before the function declaration enables the use of await inside it. try/catch handles any errors that occur.

Q36. What is try/catch/finally in the form handler?

try — runs the main code (send the email)
catch (err) — runs if any error occurs (network failure, wrong credentials, etc.)
finally — runs no matter what (success or failure) — used here to setIsLoading(false) so the button always returns to its normal state

Q37. What does e.target.value mean in the onChange handler?
e is the browser event object. e.target is the DOM element that triggered the event (the input). e.target.value is the current text value of that input. So onChange={(e) => setFormData({...formData, name: e.target.value})} reads the input's current value and stores it in state every time the user types a character.

Q38. Why is the submitStatus.type checked with && before rendering the feedback card?
jsx{submitStatus.type && <div>...</div>}
submitStatus.type starts as null. In JavaScript, null && anything evaluates to null (falsy), so nothing renders. After a submission, it becomes "success" or "error" (truthy strings), so the feedback div renders. This is called conditional rendering — only show something when there is something to show.

10. Interview Questions — Bugs & Improvements
    Q39. What bugs exist in the original project?
    BugFileDescriptionDuplicate iconNavbar.jsx<Menu size={24} /> hardcoded below the conditional icon — hamburger always shows twiceisScrolled unusedNavbar.jsxState declared but no scroll event listener attached — navbar never changes on scrollEmpty <img src="">Hero.jsxBoth image tags have empty src — broken image icons showCSS typoHero.jsxabsolute-bottom-4 is not valid Tailwind — should be absolute bottom-4 (space-separated)lg:grid-cols incompleteHero.jsxMissing column count — lg:grid-cols-2 was intended but the number is missingemailjs not importedContact.jsxemailjs.send() is called but emailjs is never imported — throws ReferenceErrorerror vs errContact.jsxcatch(err) but then references error (undefined) — crashes on any failed sendEmail type missingContact.jsxtype="email" placed on <label> not on <input> — browser email validation doesn't workFake contact infoContact.jsxpedro@example.com, +1 555, San Francisco — placeholder data never updatedNamed export missingButton.jsxButton only has export default but Contact.jsx imports it as { Button } (named) — crashTypoAnimatedBorderBtn.jsx"Downlaod CV" — should be "Download CV"

Q40. How would you fix the emailjs not imported bug?
Two options:

Install the npm package: npm install @emailjs/browser and import it: import emailjs from "@emailjs/browser"
Add the CDN script tag in index.html: <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script> and use window.emailjs.send(...) in the component

Q41. What improvements would you make to this project?

Add a custom 404 page
Add loading skeleton for project images
Make the Navbar glass effect activate only after scrolling (fix the unused isScrolled state)
Replace Math.random() particles with deterministic positions
Add form input validation messages (e.g., "Please enter a valid email")
Add aria-label on social icon links for accessibility
Add a back-to-top button
Add SEO meta tags in index.html
Add React.lazy() for each section for better initial load time
Fix the mobile menu so links close the menu on click (onClick={closeMenu})

11. Interview Questions — Deployment
    Q42. How would you deploy this project?
    The easiest way is Vercel:

Push code to GitHub
Go to vercel.com and connect your GitHub repo
Vercel auto-detects Vite and sets the correct build settings
Add your .env variables in Vercel's dashboard under Settings → Environment Variables
Every push to main branch auto-deploys

Q43. Why does a React SPA need a special rewrite rule on Vercel?
When a user visits yoursite.com/projects, the browser sends a real HTTP request to Vercel's server for the path /projects. But the file /projects/index.html doesn't exist — only /index.html does. Without a rewrite rule, Vercel returns 404. The vercel.json rewrite rule tells Vercel: "for any URL, always serve index.html and let React handle the rest."

Q44. What are environment variables and why should they not be committed to GitHub?
Environment variables store sensitive configuration like API keys and passwords. If you commit your .env file to GitHub, anyone can see your EmailJS keys and use them to send emails as you. The .gitignore file should always include .env. On Vercel, you add them manually in the dashboard instead.

Q45. What does npm run build produce?
It creates a dist/ folder containing:

index.html — the single HTML file
assets/ — all JS, CSS, and image files with hashed names (e.g., index.a3b9d2.js)

This dist/ folder is what Vercel uploads to its CDN and serves to users worldwide.

12. Interview Questions — Design & UX
    Q46. Why is the portfolio dark-themed?
    Dark themes reduce eye strain for developers who spend long hours on screens. They also make colorful elements (like the teal primary color #20b2a6) pop more visually. The dark background (#0f1418) with glass-effect cards creates a modern, professional developer aesthetic.

Q47. What is the primary color in this project and where is it used?
The primary color is #20b2a6 — a teal/cyan shade. It is defined as --color-primary in @theme. It is used for: the animated glow on text (glow-text), the SVG border on the Download CV button, the active dot in the "Available for Work" badge, skill card hover highlights, form input focus rings, and project card hover borders. Consistent use of one accent color gives the portfolio visual identity.

Q48. Why are animations added to the Hero section with staggered delays?
Staggered animations guide the user's eye through the content in a logical order. The badge appears first → then the heading → then the description → then the buttons → then social links. This creates a sense of the page "coming alive" and feels intentional rather than everything dumping on screen at once. Each element has a progressively longer animation-delay to achieve this cascade.

Q49. What is the purpose of the "Available for Work" badge?
It immediately communicates my employment status to any recruiter or hiring manager who visits the portfolio. The green pulsing dot suggests activity and availability. It is placed in the Hero section where it gets maximum visibility — the first thing people see.

Q50. Why is scroll-behavior: smooth added in global CSS?
Without it, clicking a nav link like <a href="#skills"> jumps the page instantly to that section — jarring and abrupt. scroll-behavior: smooth makes the browser animate the scroll transition smoothly. It is a one-line CSS property on the html element that significantly improves the user experience.

End of Portfolio Interview Guide — covers all files, all flows, and 50 interview questions with complete answers.
