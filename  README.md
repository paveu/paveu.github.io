# Paweł Stępak - Developer Portfolio & Blog

A clean, modern personal website and blog built with vanilla HTML, CSS, and JavaScript. Features dark/light mode toggle and markdown-based blog posts.

## 🌟 Features

- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Mode** - Toggle between themes (defaults to dark)
- **Markdown Blog** - Write posts in markdown files
- **Syntax Highlighting** - Code blocks with Prism.js
- **Fast Loading** - No build process, pure HTML/CSS/JS
- **SEO Friendly** - Clean structure and semantic HTML

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Customize** your information in `index.html`
3. **Add blog posts** as markdown files in the `posts/` folder
4. **Deploy** to GitHub Pages or any static hosting

## 📁 Project Structure

```
├── index.html          # Main website file
├── posts/              # Blog posts in markdown
│   ├── getting-started-with-react-hooks.md
│   ├── python-async-best-practices.md
│   └── building-scalable-apis.md
└── README.md          # This file
```

## ✏️ Adding New Blog Posts

1. **Create a markdown file** in the `posts/` folder:
```markdown
# Your Post Title

Your content here with **markdown** formatting...

```javascript
console.log('Code blocks work great!');
```
```

2. **Update the blog posts array** in `index.html`:
```javascript
const blogPosts = [
    {
        id: 'your-new-post',
        title: 'Your New Post Title',
        date: '2024-01-20',
        excerpt: 'Brief description...',
        file: 'posts/your-new-post.md'
    },
    // ... other posts
];
```

## 🎨 Customization

### Personal Information
Update these sections in `index.html`:
- Your name and title
- Bio and about text
- Skills and technologies
- Contact links (GitHub, LinkedIn, etc.)

### Styling
Modify CSS variables in the `:root` section:
```css
:root {
    --primary: #3b82f6;      /* Primary color */
    --accent: #06b6d4;       /* Accent color */
    /* ... other variables */
}
```

### Theme Colors
Both light and dark themes are defined. Customize in the CSS:
- Dark mode: Default `:root` variables
- Light mode: `[data-theme="light"]` variables

## 🌐 Deployment Options

### GitHub Pages (Recommended)
1. Create a repository named `paveu.github.io`
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://paveu.github.io`

### Other Hosting
- **Netlify**: Drag & drop deployment
- **Vercel**: Connect GitHub repository
- **Surge.sh**: Command-line deployment

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript** - Interactive functionality
- **Marked.js** - Markdown parsing
- **Prism.js** - Syntax highlighting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Found a bug or have a suggestion? Please open an issue or submit a pull request.

---

Built with ❤️ by [Paweł Stępak](https://github.com/paveu)