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
let scriptsLoaded = false;

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
        if (typeof updatePrismTheme !== 'undefined') updatePrismTheme('dark');
    } else {
        html.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
        themeToggle.setAttribute('aria-label', 'Switch to dark theme');
        if (typeof updatePrismTheme !== 'undefined') updatePrismTheme('light');
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

function updatePrismTheme(theme) {
    const existingPrismCSS = document.querySelector('link[href*="prism"]');
    if (existingPrismCSS) {
        existingPrismCSS.remove();
    }

    const prismCSS = document.createElement('link');
    prismCSS.rel = 'stylesheet';

    if (theme === 'light') {
        prismCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css';
    } else {
        prismCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
    }

    document.head.appendChild(prismCSS);

    if (typeof Prism !== 'undefined') {
        requestAnimationFrame(() => {
            Prism.highlightAll();
        });
    }
}

function loadBlogScripts() {
    if (scriptsLoaded) return Promise.resolve();
    scriptsLoaded = true;

    return new Promise((resolve) => {
        const markedScript = document.createElement('script');
        markedScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js';
        markedScript.onload = () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
            updatePrismTheme(currentTheme);

            const prismScript = document.createElement('script');
            prismScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
            prismScript.onload = () => {
                const essentialLanguages = [
                    { name: 'javascript', url: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js' },
                    { name: 'typescript', url: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js' },
                    { name: 'python', url: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js' },
                    { name: 'css', url: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-css.min.js' },
                    { name: 'json', url: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js' },
                    { name: 'bash', url: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js' }
                ];

                let languagesLoaded = 0;
                const totalLanguages = essentialLanguages.length;

                function loadNextLanguage(index) {
                    if (index >= totalLanguages) {
                        resolve();
                        return;
                    }

                    const lang = essentialLanguages[index];
                    const langScript = document.createElement('script');
                    langScript.src = lang.url;
                    langScript.onload = () => {
                        languagesLoaded++;
                        loadNextLanguage(index + 1);
                    };
                    langScript.onerror = () => {
                        languagesLoaded++;
                        loadNextLanguage(index + 1);
                    };
                    document.head.appendChild(langScript);
                }

                loadNextLanguage(0);

                setTimeout(() => {
                    resolve();
                }, 8000);
            };
            prismScript.onerror = () => {
                resolve();
            };
            document.head.appendChild(prismScript);
        };
        markedScript.onerror = () => {
            resolve();
        };
        document.head.appendChild(markedScript);

        setTimeout(() => {
            resolve();
        }, 15000);
    });
}

function needsBlogScripts(hash) {
    if (!hash) return false;
    if (hash === 'blog') return true;
    if (hash.startsWith('blog/')) return true;
    return blogPosts.find(post => post.id === hash) !== undefined;
}

function handleHashChange() {
    const hash = window.location.hash.substring(1);

    if (needsBlogScripts(hash)) {
        loadBlogScripts().then(() => {
            processHashChange(hash);
        }).catch(() => {
            processHashChange(hash);
        });
    } else {
        processHashChange(hash);
    }
}

function processHashChange(hash) {
    if (hash) {
        if (hash.startsWith('blog/')) {
            const postId = hash.substring(5);
            const post = blogPosts.find(p => p.id === postId);
            if (post) {
                showPost(postId);
            } else {
                showSection('blog');
            }
        } else if (hash === 'blog' || hash === 'about' || hash === 'contact') {
            showSection(hash);
        } else if (blogPosts.find(post => post.id === hash)) {
            showPost(hash);
        } else {
            showSection('about');
        }
    } else {
        showSection('about');
    }
}

function showSection(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(l => {
        l.classList.remove('active');
        l.removeAttribute('aria-current');
    });

    if (sectionId === 'post') {
        const blogNavLink = document.querySelector('.nav-link[href="#blog"]');
        if (blogNavLink) {
            blogNavLink.classList.add('active');
            blogNavLink.setAttribute('aria-current', 'page');
        }
    } else {
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (navLink) {
            navLink.classList.add('active');
            navLink.setAttribute('aria-current', 'page');
        }
    }

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.setAttribute('tabindex', '-1');
    }
}

function showPost(postId) {
    showSection('post');
    loadPost(postId);
}

function showBlogList() {
    window.location.hash = 'blog';
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

    window.location.hash = `blog/${postId}`;
    postContent.innerHTML = '<div class="loading" aria-live="polite">Loading post...</div>';

    try {
        const response = await fetch(post.file);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const markdown = await response.text();
        await waitForScript('marked');
        const cleanedMarkdown = markdown.replace(/^#\s+.*$/m, '').trim();
        const html = marked.parse(cleanedMarkdown);

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
        postContent.innerHTML = `
            <div class="error" role="alert">
                <h2>Post not found</h2>
                <p>The blog post you're looking for doesn't exist or couldn't be loaded.</p>
                <p>Error: ${error.message}</p>
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
        }, 10000);
    });
}

function handleError(error, context) {
    console.error(`Error in ${context}:`, error);
}

function init() {
    try {
        updateAllYearsReferences();
        initTheme();
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();
        requestAnimationFrame(() => {
            renderBlogList();
        });
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