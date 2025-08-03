# Paweł Stępak - Developer Portfolio & Blog

A modern, responsive personal website and blog built with vanilla HTML, CSS, and JavaScript. Features a sleek dark/light theme toggle, dynamic content loading, and professional portfolio sections.

## 🌟 Features

- **🎨 Dual Theme Support** - Dark mode (default) and light mode with smooth transitions
- **📱 Fully Responsive** - Optimized for all devices with mobile-first design
- **⚡ Fast & Lightweight** - No frameworks, pure HTML/CSS/JS for optimal performance
- **📝 Dynamic Blog System** - Markdown-based posts with syntax highlighting
- **🔍 SEO Optimized** - Semantic HTML, meta tags, and Open Graph support
- **♿ Accessibility First** - ARIA labels, keyboard navigation, and screen reader support
- **🎯 Single Page Application** - Hash-based routing with dynamic content loading
- **🎨 Modern Design** - Clean UI with gradients, hover effects, and smooth animations

## 🚀 Live Demo

Visit the live site: [https://paveu.pl](https://paveu.pl)

## 📁 Project Structure

```
portfolio/
├── index.html          # Main SPA with all sections
├── styles.css          # Complete styling with theme variables
├── main.js            # App logic, routing, and blog system
├── CNAME              # Custom domain configuration
├── posts/             # Blog posts in markdown format
│   ├── getting-started-with-react-hooks.md
│   ├── python-async-best-practices.md
│   └── building-scalable-apis.md
└── README.md          # Project documentation
```

## 🎯 Key Sections

### Portfolio Sections
- **About** - Professional introduction with dynamic experience calculation
- **Skills** - Categorized technical skills (Frontend, Backend, AI/ML, DevOps)
- **Blog** - Technical articles with markdown rendering
- **Contact** - Professional contact information and links

### Technical Features
- **Theme System** - CSS custom properties with localStorage persistence
- **Dynamic Years** - Automatic calculation of experience years (since 2013)
- **Lazy Loading** - Scripts loaded only when needed for better performance
- **Error Handling** - Graceful fallbacks for failed content loading
- **SEO Meta Tags** - Dynamic meta descriptions with experience years

## 🛠️ Technologies & Libraries

### Core Technologies
- **HTML5** - Semantic markup with ARIA accessibility
- **CSS3** - Modern features (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript** - ES6+ with async/await

### External Libraries (CDN)
- **Marked.js** - Markdown parsing for blog posts
- **Prism.js** - Syntax highlighting with multiple languages
- **Inter Font** - Modern typography from Google Fonts

### Development Features
- **CSS Custom Properties** - Theme variables for easy customization
- **Async Script Loading** - Performance optimized resource loading
- **Mobile-First Design** - Responsive breakpoints and touch optimization

## ⚙️ Configuration

### Personal Information
Update your details in `index.html`:

```html
<!-- Hero section -->
<h1>Hi, I'm Paweł 👋</h1>
<p>Full Stack Developer with <span id="experience-years"></span>+ years...</p>

<!-- About section -->
<p>I'm a software engineer specializing in...</p>

<!-- Skills sections -->
<div class="skill-list">
    <span class="skill-tag">React</span>
    <span class="skill-tag">Python</span>
    <!-- Add your skills -->
</div>

<!-- Contact links -->
<a href="https://github.com/paveu">GitHub</a>
<a href="https://www.linkedin.com/in/pawelstepak">LinkedIn</a>
```

### Blog Configuration
Add new posts to the `blogPosts` array in `main.js`:

```javascript
const blogPosts = [
    {
        id: 'your-post-slug',
        title: 'Your Post Title',
        date: '2024-01-20',
        excerpt: 'Brief description for the post card...',
        file: 'posts/your-post-slug.md'
    }
    // ... existing posts
];
```

### Theme Customization
Modify CSS variables in `styles.css`:

```css
:root {
    --primary: #3b82f6;      /* Primary blue */
    --secondary: #64748b;    /* Secondary gray */
    --bg: #0f172a;          /* Dark background */
    --accent: #60a5fa;      /* Accent blue */
    /* ... other variables */
}

[data-theme="light"] {
    --primary: #1d4ed8;     /* Light theme primary */
    --bg: #ffffff;          /* Light background */
    /* ... light theme overrides */
}
```

## ✏️ Adding Blog Posts

### 1. Create Markdown File
Create a new file in `posts/` folder:

```markdown
# Your Post Title

Your introduction paragraph...

## Section Heading

Content with **bold** and *italic* text.

```javascript
// Code blocks with syntax highlighting
console.log('Hello, World!');
```

## Another Section

More content here...
```

### 2. Update Blog Array
Add the post to `main.js`:

```javascript
const blogPosts = [
    {
        id: 'your-new-post',           // URL slug
        title: 'Your New Post',       // Display title
        date: '2024-01-20',           // Publication date
        excerpt: 'Brief summary...',   // Card description
        file: 'posts/your-new-post.md' // File path
    },
    // ... existing posts
];
```

### 3. Supported Languages
Prism.js syntax highlighting supports:
- JavaScript/TypeScript
- Python
- CSS
- JSON
- Bash/Shell
- And many more...

## 🌐 Deployment Options

### GitHub Pages (Current Setup)
1. **Repository**: Must be named `username.github.io` for user pages
2. **Custom Domain**: Configured via `CNAME` file (`paveu.pl`)
3. **Auto-deploy**: Pushes to main branch automatically deploy

### Alternative Hosting
- **Netlify**: Drag & drop or Git integration
- **Vercel**: Connect GitHub repository for auto-deploys
- **Surge.sh**: CLI-based deployment
- **Firebase Hosting**: Google's hosting platform

## 📱 Browser Support

### Fully Supported
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Features Used
- CSS Custom Properties
- CSS Grid & Flexbox
- ES6+ JavaScript
- Async/Await
- Local Storage API

## 🎨 Design Features

### Visual Elements
- **Gradient Backgrounds** - Subtle gradients for depth
- **Hover Animations** - Interactive feedback on buttons/cards
- **Smooth Transitions** - Theme switching and state changes
- **Typography** - Inter font for modern, readable text
- **Color System** - Consistent color palette with semantic naming

### User Experience
- **Loading States** - Feedback during content loading
- **Error Handling** - Graceful fallbacks for failed requests
- **Keyboard Navigation** - Full keyboard accessibility
- **Touch Optimization** - Mobile-friendly interactions

## 🔧 Development

### Local Development
```bash
# Clone repository
git clone https://github.com/paveu/paveu.github.io.git
cd paveu.github.io

# Serve locally (any static server)
python -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000
```

### Code Organization
- **Modular CSS** - Organized by components and responsive design
- **Clean JavaScript** - Separated concerns with clear function naming
- **Semantic HTML** - Proper document structure and accessibility
- **Performance** - Optimized loading and minimal dependencies

## 📊 Performance Features

### Optimization Techniques
- **Lazy Script Loading** - External libraries loaded only when needed
- **Minimal Dependencies** - Only essential external resources
- **Efficient DOM Manipulation** - Minimal reflows and repaints
- **CDN Resources** - Fast loading from Cloudflare CDN

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Contributing

Found a bug or have a suggestion?
1. **Fork** the repository
2. **Create** a feature branch
3. **Commit** your changes
4. **Push** to the branch
5. **Open** a Pull Request

## 🔗 Links

- **Live Site**: [https://paveu.pl](https://paveu.pl)
- **GitHub**: [https://github.com/paveu](https://github.com/paveu)
- **LinkedIn**: [https://www.linkedin.com/in/pawelstepak](https://www.linkedin.com/in/pawelstepak)

---

**Built with ❤️ by [Paweł Stępak](https://github.com/paveu) | Last updated: 2025**