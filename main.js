const blogPosts = [
    {
        id: 'getting-started-with-react-hooks',
        title: 'Getting Started with React Hooks',
        date: '2024-01-15',
        excerpt: 'A comprehensive guide to React Hooks and how they can simplify your component logic.',
        file: 'posts/getting-started-with-react-hooks.md'
    },
    {
        id: 'python-async-best-practices',
        title: 'Python Async Programming Best Practices',
        date: '2024-01-10',
        excerpt: 'Learn how to write efficient asynchronous Python code with asyncio and best practices.',
        file: 'posts/python-async-best-practices.md'
    },
    {
        id: 'building-scalable-apis',
        title: 'Building Scalable APIs with FastAPI',
        date: '2024-01-05',
        excerpt: 'Tips and tricks for building high-performance APIs using FastAPI and Python.',
        file: 'posts/building-scalable-apis.md'
    }
];

const CAREER_START_YEAR = 2013;

function calculateYears() {
    const currentYear = new Date().getFullYear();
    return currentYear - CAREER_START_YEAR;
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function updateAllYearsReferences() {
    const experienceYears = calculateYears();
    const currentYear = new Date().getFullYear();

    requestAnimationFrame(() => {
        const experienceElements = document.querySelectorAll('#experience-years, .years-experience');
        experienceElements.forEach(element => {
            element.textContent = experienceYears;
        });

        const footerElement = document.getElementById('footer-years');
        if (footerElement) {
            footerElement.textContent = `© ${CAREER_START_YEAR} - ${currentYear} Paweł Stępak`;
        }

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content',
                `Full Stack Developer with ${experienceYears}+ years of experience specializing in Python, JavaScript, Django, React, and Anthropic Claude AI integration. Expert in building scalable web applications.`
            );
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content',
                `Full Stack Developer with ${experienceYears}+ years of experience specializing in Python, JavaScript, Django, React, and Anthropic Claude AI integration.`
            );
        }

        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content',
                `Full Stack Developer with ${experienceYears}+ years of experience specializing in Python, JavaScript, Django, React, and Anthropic Claude AI integration.`
            );
        }
    });
}

function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    const themeToggle = document.querySelector('.theme-toggle');

    if (html.getAttribute('data-theme') === 'light') {
        html.removeAttribute('data-theme');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
        themeToggle.setAttribute('aria-label', 'Switch to light theme');
    } else {
        html.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
        themeToggle.setAttribute('aria-label', 'Switch to dark theme');
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    const themeToggle = document.querySelector('.theme-toggle');

    if (savedTheme === 'light') {
        html.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙';
        themeToggle.setAttribute('aria-label', 'Switch to dark theme');
    } else {
        html.removeAttribute('data-theme');
        themeIcon.textContent = '☀️';
        themeToggle.setAttribute('aria-label', 'Switch to light theme');
    }
}

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
        });

        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                showSection(targetId);
            }
        });
    });

    window.navLinks = navLinks;
    window.sections = sections;
}

function showSection(sectionId) {
    window.navLinks.forEach(l => {
        l.classList.remove('active');
        l.removeAttribute('aria-current');
    });

    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    if (navLink) {
        navLink.classList.add('active');
        navLink.setAttribute('aria-current', 'page');
    }

    window.sections.forEach(section => section.classList.remove('active'));
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.setAttribute('tabindex', '-1');
        targetSection.focus();
    }
}

function showBlogList() {
    window.navLinks.forEach(l => {
        l.classList.remove('active');
        l.removeAttribute('aria-current');
    });
    const blogNavLink = document.querySelector(`[href="#blog"]`);
    if (blogNavLink) {
        blogNavLink.classList.add('active');
        blogNavLink.setAttribute('aria-current', 'page');
    }

    window.sections.forEach(section => section.classList.remove('active'));
    const blogSection = document.getElementById('blog');
    if (blogSection) {
        blogSection.classList.add('active');
        blogSection.setAttribute('tabindex', '-1');
        blogSection.focus();
    }

    renderBlogList();
}

function showPost(postId) {
    showSection('post');
    loadPost(postId);
}

function renderBlogList() {
    const blogList = document.getElementById('blog-list');
    if (!blogList) return;

    const postsHtml = blogPosts.map(post => `
        <article class="post-card" role="button" tabindex="0" 
                 onclick="showPost('${post.id}')" 
                 onkeydown="handlePostCardKeydown(event, '${post.id}')"
                 aria-label="Read blog post: ${post.title}">
            <div class="post-meta">${formatDate(post.date)}</div>
            <h2>${post.title}</h2>
            <p class="post-excerpt">${post.excerpt}</p>
            <span class="read-more" aria-hidden="true">Read more →</span>
        </article>
    `).join('');

    blogList.innerHTML = `<div class="posts-grid">${postsHtml}</div>`;
}

function handlePostCardKeydown(event, postId) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showPost(postId);
    }
}

async function loadPost(postId) {
    const postContent = document.getElementById('post-content');
    if (!postContent) return;

    const post = blogPosts.find(p => p.id === postId);

    if (!post) {
        postContent.innerHTML = '<div class="error" role="alert">Post not found</div>';
        return;
    }

    postContent.innerHTML = '<div class="loading" aria-live="polite">Loading post...</div>';

    try {
        const response = await fetch(post.file);
        if (!response.ok) throw new Error('Post not found');

        const markdown = await response.text();

        await waitForScript('marked');

        const html = marked.parse(markdown);

        postContent.innerHTML = `
            <article class="post-full">
                <header class="post-header">
                    <h1>${post.title}</h1>
                    <div class="meta">Published on ${formatDate(post.date)}</div>
                </header>
                <div class="post-content">
                    ${html}
                </div>
            </article>
        `;

        if (typeof Prism !== 'undefined') {
            requestAnimationFrame(() => {
                Prism.highlightAll();
            });
        }

    } catch (error) {
        console.error('Error loading post:', error);
        postContent.innerHTML = `
            <div class="error" role="alert">
                <h2>Post not found</h2>
                <p>The blog post you're looking for doesn't exist or couldn't be loaded.</p>
            </div>
        `;
    }
}

function waitForScript(scriptName) {
    return new Promise((resolve) => {
        if (window[scriptName]) {
            resolve();
            return;
        }

        const checkInterval = setInterval(() => {
            if (window[scriptName]) {
                clearInterval(checkInterval);
                resolve();
            }
        }, 100);

        setTimeout(() => {
            clearInterval(checkInterval);
            resolve();
        }, 5000);
    });
}

function handleError(error, context) {
    console.error(`Error in ${context}:`, error);
}

function init() {
    try {
        updateAllYearsReferences();
        initTheme();
        initNavigation();

        requestAnimationFrame(() => {
            renderBlogList();
        });

        console.log('Portfolio initialized successfully');
    } catch (error) {
        handleError(error, 'initialization');
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else if (document.readyState === 'interactive') {
    init();
} else {
    init();
}