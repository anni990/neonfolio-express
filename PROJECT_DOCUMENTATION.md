# NeonFolio Express - Portfolio Project Documentation

## 📋 Project Overview

**Project Name:** NeonFolio Express  
**Owner:** Aniket Kumar Mishra  
**Type:** Personal Portfolio Website  
**Purpose:** Showcase Machine Learning Engineer portfolio with modern, interactive UI  
**Homepage:** https://anni990.me  
**Tech Stack:** React + TypeScript + Vite + TailwindCSS + ShadcN UI

---

## 🏗️ Complete Project Structure

```
neonfolio-express/
├── .git/                           # Git version control
├── .vite/                          # Vite cache
├── dist/                           # Production build output
├── node_modules/                   # Dependencies
├── public/                         # Static assets
│   ├── images/                     # Project and portfolio images
│   │   ├── my/                     # Personal images (8 files)
│   │   ├── 1brc.png
│   │   ├── CopyRight.jpg
│   │   ├── GreenSathi-new.png
│   │   ├── Morphai.png
│   │   ├── Renewable.png
│   │   ├── bombay-techfest.jpg
│   │   ├── developer-portrait.jpg
│   │   ├── heart-research-poster.png
│   │   ├── ibm-iot.jpg
│   │   ├── nptel.png
│   │   └── portfolio-img.png
│   ├── pdf/                        # PDF documents
│   ├── resume/                     # Resume files
│   ├── CNAME                       # Custom domain config
│   ├── favicon.ico
│   ├── og-image.jpeg               # Open Graph image
│   └── placeholder.svg
│
├── src/                            # Source code
│   ├── components/                 # React components
│   │   ├── layout/                 # Layout components (3 files)
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── SocialLinks.tsx
│   │   │
│   │   ├── modals/                 # Modal components (2 files)
│   │   │   ├── CertificateModal.tsx
│   │   │   └── ProjectModal.tsx
│   │   │
│   │   ├── sections/               # Page sections (8 files)
│   │   │   ├── About.tsx
│   │   │   ├── Certifications.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Internships.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── ResearchWork.tsx
│   │   │   └── Skills.tsx
│   │   │
│   │   └── ui/                     # ShadCN UI components (50 files)
│   │       ├── TerminalText.tsx
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       └── use-toast.ts
│   │
│   ├── hooks/                      # Custom React hooks (3 files)
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   └── useTheme.tsx
│   │
│   ├── lib/                        # Utility libraries
│   │   └── utils.ts
│   │
│   ├── pages/                      # Page components (4 files)
│   │   ├── AllProjects.tsx
│   │   ├── CopyrightSearch.tsx
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   │
│   ├── App.css                     # App-specific styles
│   ├── App.tsx                     # Main App component
│   ├── index.css                   # Global styles & Tailwind
│   ├── main.tsx                    # Entry point
│   └── vite-env.d.ts              # Vite TypeScript definitions
│
├── .gitignore                      # Git ignore rules
├── CNAME                           # GitHub Pages domain
├── README.md                       # Project readme
├── bun.lockb                       # Bun lock file
├── components.json                 # ShadCN config
├── eslint.config.js               # ESLint configuration
├── index.html                      # HTML entry point
├── package-lock.json              # NPM lock file
├── package.json                    # Project dependencies
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.app.json              # TypeScript app config
├── tsconfig.json                  # TypeScript base config
├── tsconfig.node.json             # TypeScript node config
└── vite.config.ts                 # Vite configuration
```

---

## 🛠️ Technology Stack

### Core Technologies
- **Framework:** React 18.3.1
- **Language:** TypeScript 5.5.3
- **Build Tool:** Vite 5.4.1
- **Styling:** TailwindCSS 3.4.11
- **UI Components:** ShadCN UI (Radix UI primitives)
- **Routing:** React Router DOM 6.26.2
- **Icons:** Lucide React 0.462.0

### Key Libraries
- **State Management:** @tanstack/react-query 5.56.2
- **Form Handling:** react-hook-form 7.53.0 + zod 3.23.8
- **Email Service:** emailjs-com 3.2.0
- **Theme:** next-themes 0.3.0
- **Animations:** tailwindcss-animate 1.0.7
- **Carousel:** embla-carousel-react 8.3.0
- **Charts:** recharts 2.12.7
- **Notifications:** sonner 1.5.0

### Development Tools
- **Linter:** ESLint 9.9.0
- **Deployment:** gh-pages 6.3.0
- **Typography:** @tailwindcss/typography 0.5.15

---

## 📄 Page Structure

### Main Routes
1. **/** - Home/Index page (main portfolio)
2. **/projects** - All projects showcase
3. **/copyright-search** - Copyright search tool
4. ***** - 404 Not Found page

### Home Page Sections (in order)
1. **Hero** - Introduction with terminal animation
2. **About** - Personal information and interests
3. **Skills** - Technical skills with category filters
4. **Projects** - Featured projects showcase
5. **Internships** - Work experience
6. **Research Work** - Academic/research contributions
7. **Certifications** - Certificates and achievements
8. **Contact** - Contact form with EmailJS integration

---

## 🎨 Design System

### Color Palette
```css
/* Light Mode */
--background: 210 40% 98%
--foreground: 222 47% 11%
--primary: 196 84% 55%      /* Code Blue */
--secondary: 160 58% 52%    /* Code Green */

/* Dark Mode */
--background: 222 47% 11%
--foreground: 210 40% 98%
--primary: 196 84% 55%
--secondary: 160 58% 52%

/* Custom Colors */
code-blue: #61DAFB
code-green: #4ECCA3
code-dark: #333333
code-gray: #F8F9FA
code-terminal: #263238
```

### Typography
- **Sans Serif:** SF Pro Display, system-ui, Roboto
- **Monospace:** SF Mono, Menlo, Monaco, Consolas

### Custom Animations
- `fade-in` - Fade in with slide up
- `slide-in/out` - Horizontal slide
- `float` - Floating effect
- `pulse-light` - Subtle pulse
- `rotate-slow` - Slow rotation
- `bounce-light` - Light bounce
- `typing` - Terminal typing effect

### Utility Classes
- `.glass-panel` - Glassmorphism effect
- `.code-block` - Code display styling
- `.hover-card` - Card hover effects
- `.mesh-background` - Grid mesh background
- `.blur-backdrop` - Blurred backdrop

---

## 🎯 Key Features

### 1. Skills Section
- **Categories:** Development, GenAI, Machine Learning, Tools
- **Filter System:** Interactive category filtering
- **Skills Listed:**
  - **Development:** HTML/CSS, JavaScript, Tailwind CSS, Node.js, Express, MongoDB, SQL, Flask, NoSQL
  - **GenAI:** LLMs, Python, LangChain, RAG Models, Vector DBs
  - **ML:** Machine Learning, Scikit-learn, Data Analysis, Pandas, NumPy
  - **Tools:** Git, Docker, CI/CD, Azure

### 2. Theme System
- Light/Dark mode toggle
- Persistent theme preference
- Smooth transitions
- Custom dark mode colors

### 3. Contact Form
- EmailJS integration
- Form validation with Zod
- Success/error notifications
- Responsive design

### 4. Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Touch-friendly interactions
- Optimized images

### 5. Animations
- Intersection Observer for scroll animations
- Stagger animations for lists
- Hover effects on cards
- Terminal typing effect
- Floating elements

---

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build
npm run preview

# Run linter
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

---

## 📦 Build Configuration

### Vite Config
- **Base Path:** `./` (relative for GitHub Pages)
- **Output Directory:** `dist`
- **Assets Directory:** `assets`
- **Path Alias:** `@` → `src`

### Deployment
- **Platform:** GitHub Pages
- **Domain:** anni990.me
- **Build Command:** `npm run build`
- **Deploy Command:** `npm run deploy`

---

## 🔧 Configuration Files

### package.json
- Project metadata
- Scripts for dev/build/deploy
- Dependencies and devDependencies

### tailwind.config.ts
- Custom color scheme
- Animations and keyframes
- Font families
- Plugin configurations

### vite.config.ts
- React plugin
- Path aliases
- Build optimization
- Rollup options

### tsconfig.json
- TypeScript compiler options
- Path mappings
- Module resolution

### components.json
- ShadCN UI configuration
- Component styling preferences
- Import aliases

---

## 📝 Important Notes

### Personal Information
- **Name:** Aniket Kumar Mishra
- **Title:** Machine Learning Engineer
- **Domain:** anni990.me
- **Resume Location:** `/resume/Aniket Kumar Mishra resume.pdf`

### Current Active Category
- Skills section defaults to **GenAI** category
- Can be changed in `Skills.tsx` line 14

### Icon System
- Using Lucide React icons
- Custom icons for each skill
- Consistent sizing (w-10 h-10)

### Email Integration
- Uses EmailJS for contact form
- Configuration needed in Contact.tsx
- Service ID, Template ID, User ID required

---

## 🎨 Custom Components

### Layout Components
1. **Navbar** - Sticky navigation with theme toggle
2. **Footer** - Footer with social links
3. **SocialLinks** - Floating social media icons

### Section Components
1. **Hero** - Landing section with terminal effect
2. **About** - Personal info with interests
3. **Skills** - Filterable skills grid
4. **Projects** - Project cards with modals
5. **Internships** - Work experience timeline
6. **ResearchWork** - Research publications
7. **Certifications** - Certificate showcase
8. **Contact** - Contact form

### Modal Components
1. **ProjectModal** - Detailed project view
2. **CertificateModal** - Certificate viewer

---

## 🔍 File Sizes & Metrics
- **Total Source Files:** ~76 files in src/
- **UI Components:** 50 ShadCN components
- **Section Components:** 8 main sections
- **Pages:** 4 route pages
- **Public Assets:** 25+ images
- **Total Dependencies:** 40+ packages

---

## 🌐 Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript support required
- CSS Grid and Flexbox support
- Intersection Observer API

---

## 📱 Responsive Breakpoints
```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1400px /* Container max-width */
```

---

## 🎯 Future Enhancement Areas
1. Blog section integration
2. Project filtering and search
3. Performance optimization
4. SEO improvements
5. Analytics integration
6. Progressive Web App (PWA)
7. Internationalization (i18n)
8. Accessibility improvements (WCAG)

---

## 📚 Documentation Resources
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [ShadCN UI Documentation](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

---

**Last Updated:** 2025-11-30  
**Version:** 0.0.0  
**Maintained By:** Aniket Kumar Mishra
