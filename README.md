# 🚀 Pankaj Aher — Developer Portfolio

A modern, responsive developer portfolio built with **React** and **Tailwind CSS**, showcasing my projects, skills, and a live contact form.

---

## ✨ Features

- ⚡ **Blazing fast** — built with Vite and React 19
- 📱 **Fully responsive** — works on all screen sizes
- 🎨 **Smooth animations** — CSS keyframe animations and transitions
- 📧 **Live contact form** — powered by EmailJS (no backend needed)
- 📄 **CV download** — one-click resume download
- 🌙 **Dark theme** — clean dark UI throughout
- ♿ **Accessible** — semantic HTML and keyboard navigation

---

## 🛠️ Tech Stack

| Technology      | Purpose                   |
| --------------- | ------------------------- |
| React 19        | UI library                |
| Vite            | Build tool & dev server   |
| Tailwind CSS v4 | Styling                   |
| EmailJS         | Contact form (serverless) |
| Lucide React    | Icons                     |
| React Icons     | Social & tech icons       |

---

## 📁 Project Structure

```
My_Portfolio/
├── public/
│   └── Aher_Pankaj.pdf       # CV file for download
├── src/
│   ├── layout/
│   │   ├── Navbar.jsx         # Sticky navigation bar
│   │   └── Footer.jsx         # Page footer
│   ├── sections/
│   │   ├── Hero.jsx           # Landing / intro section
│   │   ├── Skills.jsx         # Skills marquee + grid
│   │   ├── Project.jsx        # Projects showcase
│   │   └── Contact.jsx        # Contact form
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles & animations
├── Components/
│   ├── Button.jsx             # Reusable button
│   └── AnimatedBorderBtn.jsx  # Animated download CV button
├── asset/                     # Project images
├── .env                       # Environment variables
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/aherpankaj01/My_Portfolio.git

# 2. Navigate into the project
cd My_Portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root of the project and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📬 Author

**Aher Pankaj**
