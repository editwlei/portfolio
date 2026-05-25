const PortfolioComponent = `
    <!-- Main Centered Cinematic Card Shell -->
    <div class="main-shell-card">

        <!-- Header / Sticky Glass Navbar -->
        <header class="header-navbar">
            <div class="nav-container">
                <a href="#hero" class="logo">NICOLEI<span>.DEV</span></a>

                <!-- Mobile Drawer Navigation -->
                <nav class="nav-menu" id="nav-menu">
                    <ul class="nav-list">
                        <li><a href="#about" class="nav-item-link active">About</a></li>
                        <li><a href="#skills" class="nav-item-link">Skills</a></li>
                        <li><a href="#contact" class="nav-item-link">Contact</a></li>
                    </ul>
                </nav>

                <!-- Action items (Theme & Hamburger) -->
                <div class="nav-actions">
                    <button class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle visual theme">
                        <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="4" />
                            <path
                                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                        </svg>
                        <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                        </svg>
                    </button>

                    <button class="hamburger-btn" id="hamburger-btn" aria-label="Toggle navigation drawer">
                        <span class="bar line-1"></span>
                        <span class="bar line-2"></span>
                        <span class="bar line-3"></span>
                    </button>
                </div>
            </div>
        </header>

        <!-- Left Side Dock: Glowing Social Icons -->
        <aside class="sidebar-dock left-dock">
            <div class="social-column">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                    class="social-glow-icon reveal-item" data-delay="100" aria-label="GitHub Profile">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                    class="social-glow-icon reveal-item" data-delay="250" aria-label="Facebook Profile">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                    class="social-glow-icon reveal-item" data-delay="400" aria-label="LinkedIn Profile">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                </a>
                <div class="dock-line-glow"></div>
            </div>
        </aside>

        <!-- Right Side Dock: Resume Float FAB Button -->
        <aside class="sidebar-dock right-dock">
            <a href="./assets/Nicolei_Resume.pdf" class="glass-resume-fab" id="resume-btn" download="Nicolei_Resume.pdf">
                <span class="fab-glow-track"></span>
                <span class="fab-content">
                    <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    <span class="fab-text">Resume</span>
                </span>
            </a>
        </aside>

        <!-- Main Content Container -->
        <main class="content-viewport">

            <!-- HERO SECTION -->
            <section id="hero" class="hero-section">
                <div class="hero-split-grid">

                    <!-- Hero Left Column: Intro Greeting -->
                    <div class="hero-col hero-left animate-fade-in">
                        <div class="hero-badge reveal-item" data-delay="100">
                            <span class="badge-dot"></span>
                            <span class="badge-text">Available For Hire</span>
                        </div>
                        <h2 class="hero-subtext reveal-item" data-delay="200">Hello, I'm</h2>
                        <h1 class="hero-name-heading reveal-item" data-delay="300">Nicolei</h1>

                        <p class="hero-desc-para reveal-left" data-delay="450">An aspiring frontend web developer
                            passionate about crafting
                            pixel-perfect, highly interactive, and visually breathtaking digital experiences.</p>

                        <div class="hero-cta-buttons reveal-item" data-delay="600">
                            <a href="#contact" class="btn btn-primary glow-button-trigger">
                                <span class="btn-glow-span"></span>
                                <span>Get In Touch</span>
                            </a>
                        </div>
                    </div>

                    <!-- Hero Center Column: Glowing Cinematic Portrait -->
                    <div class="hero-col hero-center" id="hero-tilt-zone">
                        <div class="portrait-avatar-wrapper" id="portrait-wrapper">
                            <!-- Shared Hardware-Accelerated 3D Anti-Gravity Globe Tilt Container -->
                            <div class="portrait-tilt-globe" id="portrait-tilt-card">
                                <div class="portrait-breathing-ring"></div>
                                <div class="portrait-container-card">
                                    <img src="./assets/Profile.jpg" alt="Nicolei's portrait" class="portrait-img" draggable="false">
                                    <div class="portrait-shine-overlay"></div>
                                    <div class="cyber-corner-brackets">
                                        <span></span><span></span><span></span><span></span>
                                    </div>
                                </div>

                            <!-- Interactive Floating Technology Badges System surrounding Portrait -->
                            <div class="interactive-tech-system" id="tech-system">

                                <div class="floating-tech-badge tech-html" data-tech="HTML5">
                                    <div class="badge-glow"></div>
                                    <div class="badge-inner">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                            <path d="M2 3l1.5 15L12 22l8.5-4L22 3H2z" />
                                            <path d="M12 6H7.5l.5 5h8l-.5 5-3.5 1.5-3.5-1.5-.2-2" />
                                        </svg>
                                        <span class="badge-tooltip">HTML5</span>
                                    </div>
                                </div>

                                <div class="floating-tech-badge tech-css" data-tech="CSS3">
                                    <div class="badge-glow"></div>
                                    <div class="badge-inner">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                            <path d="M20.5 2h-17l1.5 15 8 5 8-5 1.5-15z" />
                                            <path d="M12 6H7.5l.5 5h8l-.5 5-3.5 1.5-3.5-1.5-.2-2" />
                                        </svg>
                                        <span class="badge-tooltip">CSS3</span>
                                    </div>
                                </div>

                                <div class="floating-tech-badge tech-js" data-tech="JavaScript">
                                    <div class="badge-glow"></div>
                                    <div class="badge-inner">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                            <path d="M3 3h18v18H3V3z" />
                                            <path d="M16 8h-4v8h4M12 12h3" />
                                        </svg>
                                        <span class="badge-tooltip">JavaScript</span>
                                    </div>
                                </div>

                                <div class="floating-tech-badge tech-react" data-tech="React">
                                    <div class="badge-glow"></div>
                                    <div class="badge-inner">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                            <circle cx="12" cy="12" r="2" />
                                            <path d="M12 5C7.03 5 3 8.13 3 12s4.03 7 9 7 9-3.13 9-7-4.03-7-9-7z"
                                                transform="rotate(30 12 12)" />
                                            <path d="M12 5C7.03 5 3 8.13 3 12s4.03 7 9 7 9-3.13 9-7-4.03-7-9-7z"
                                                transform="rotate(90 12 12)" />
                                            <path d="M12 5C7.03 5 3 8.13 3 12s4.03 7 9 7 9-3.13 9-7-4.03-7-9-7z"
                                                transform="rotate(150 12 12)" />
                                        </svg>
                                        <span class="badge-tooltip">React</span>
                                    </div>
                                </div>

                                <div class="floating-tech-badge tech-github" data-tech="GitHub">
                                    <div class="badge-glow"></div>
                                    <div class="badge-inner">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                        </svg>
                                        <span class="badge-tooltip">GitHub</span>
                                    </div>
                                </div>

                                <div class="floating-tech-badge tech-node" data-tech="Node.js">
                                    <div class="badge-glow"></div>
                                    <div class="badge-inner">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                            <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" />
                                            <path d="M12 6v12M8.5 9l7 6" />
                                        </svg>
                                        <span class="badge-tooltip">Node.js</span>
                                    </div>
                                </div>

                                <div class="floating-tech-badge tech-figma" data-tech="Figma">
                                    <div class="badge-glow"></div>
                                    <div class="badge-inner">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                            <path
                                                d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM9 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM9 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM15 5a3 3 0 1 1-6 0v6h6V5zM15 11a3 3 0 1 1-6 0v6a3 3 0 1 1 6 0v-12z" />
                                        </svg>
                                        <span class="badge-tooltip">Figma</span>
                                    </div>
                                </div>

                                <div class="floating-tech-badge tech-tailwind" data-tech="Tailwind CSS">
                                    <div class="badge-glow"></div>
                                    <div class="badge-inner">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                            <path
                                                d="M12 5.5c-3 0-4.5 1.5-4.5 4.5s1.5 3 4.5 3 4.5-1.5 4.5-4.5-1.5-3-4.5-3zM6 12.5C3 12.5 1.5 14 1.5 17s1.5 3 4.5 3 4.5-1.5 4.5-4.5-1.5-3-4.5-3z" />
                                        </svg>
                                        <span class="badge-tooltip">Tailwind CSS</span>
                                    </div>
                                </div>

                                <div class="floating-tech-badge tech-python" data-tech="Python">
                                    <div class="badge-glow"></div>
                                    <div class="badge-inner">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                            <path d="M12 2c-2.8 0-4.8 1.2-4.8 3.8v1.4h4.8v1.4H4.8C2.2 8.6 1 10.6 1 13.4s1.2 4.8 3.8 4.8h1.4v-4.8h4.8V22c2.8 0 4.8-1.2 4.8-3.8v-1.4h-4.8v-1.4h7.2c2.6 0 3.8-2 3.8-4.8S20.8 3.8 18.2 3.8" />
                                            <circle cx="8.5" cy="5.5" r="0.75" fill="currentColor"/>
                                            <circle cx="15.5" cy="18.5" r="0.75" fill="currentColor"/>
                                        </svg>
                                        <span class="badge-tooltip">Python</span>
                                    </div>
                                </div>

                                <div class="floating-tech-badge tech-typescript" data-tech="TypeScript">
                                    <div class="badge-glow"></div>
                                    <div class="badge-inner">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                            <path d="M3 3h18v18H3V3z" />
                                            <path d="M9 10h4v2h-2v4h-2M14 10h4v2h-4v2h4" />
                                        </svg>
                                        <span class="badge-tooltip">TypeScript</span>
                                    </div>
                                </div>

                                <div class="floating-tech-badge tech-next" data-tech="Next.js">
                                    <div class="badge-glow"></div>
                                    <div class="badge-inner">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5l-3.5-4.5v4.5H9V9h1.5l3.5 4.5V9H15v7.5h-1z" />
                                        </svg>
                                        <span class="badge-tooltip">Next.js</span>
                                    </div>
                                </div>

                                <div class="floating-tech-badge tech-mongodb" data-tech="MongoDB">
                                    <div class="badge-glow"></div>
                                    <div class="badge-inner">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                            <path d="M12 2c-.6 1.4-1.5 3-2.5 4.5S7.2 9.5 7.2 12c0 3.2 2.3 6.3 4.8 10 2.5-3.7 4.8-6.8 4.8-10 0-2.5-1.3-4-2.3-5.5S12.6 3.4 12 2z" />
                                        </svg>
                                        <span class="badge-tooltip">MongoDB</span>
                                    </div>
                                </div>

                                <div class="floating-tech-badge tech-firebase" data-tech="Firebase">
                                    <div class="badge-glow"></div>
                                    <div class="badge-inner">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                            <path d="M3.5 18.5l8-14.5 2.5 4.5-2.5 4.5h6l-6.5 5.5-7.5-5z" />
                                        </svg>
                                        <span class="badge-tooltip">Firebase</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <!-- Hero Right Column: Developer Designation -->
                    <div class="hero-col hero-right animate-fade-in delay-200 reveal-item" data-delay="500">
                        <div class="designation-card">
                            <div class="card-terminal-header">
                                <span class="terminal-dot red"></span>
                                <span class="terminal-dot yellow"></span>
                                <span class="terminal-dot green"></span>
                                <span class="terminal-title">role_matrix.sh</span>
                            </div>
                            <div class="designation-body">
                                <span class="bold-tag">Creative</span>
                                <h3 class="designation-title">
                                    <span class="typing-text-target" id="typing-role"></span><span
                                        class="typing-blinking-cursor">_</span>
                                </h3>
                                <p class="designation-subtext">Combining structural design aesthetics with semantic,
                                    efficient front-end engineering.</p>
                                <div class="terminal-stats">
                                    <div class="stat-row">
                                        <span class="stat-label">STATUS:</span>
                                        <span class="stat-value text-accent">ACTIVE_LEARNING</span>
                                    </div>
                                    <div class="stat-row">
                                        <span class="stat-label">FOCUS:</span>
                                        <span class="stat-value">INTERACTIVE UI/UX</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <!-- ABOUT ME SECTION -->
            <section id="about" class="about-section">
                <div class="section-header-centered reveal-left" data-delay="0">
                    <span class="section-tag-prefix">// 01</span>
                    <h2 class="section-title-neon">About Me</h2>
                    <div class="section-underline-glow"></div>
                </div>

                <div class="about-split-layout">
                    <!-- Left Introduction Panel -->
                    <div class="about-intro-panel premium-glass-panel reveal-left" data-delay="100">
                        <div class="intro-content">
                            <h3 class="intro-greeting">Hi, I'm Nicolei.</h3>
                            <h4 class="intro-role">Aspiring Frontend Web Architect</h4>
                            <div class="intro-divider"></div>
                            <p class="intro-description">
                                I am deeply passionate about bridging the gap between stunning visual design and semantic, high-performance code. I specialize in building futuristic user interfaces that feature micro-interactions, responsive grids, and cinematic glassmorphism.
                            </p>
                            <p class="intro-description">
                                My philosophy is simple: a premium web experience should feel intuitive, fluid, and alive. I strive to push the boundaries of modern CSS and JavaScript to create immersive digital experiences.
                            </p>
                        </div>
                        <div class="intro-ambient-glow"></div>
                    </div>

                    <!-- Right Info Grid -->
                    <div class="about-info-grid">
                        <div class="about-grid-ambient-glow"></div>
                        <div class="info-glass-card hover-tilt reveal-epic-right" data-delay="200">
                            <div class="info-card-header">
                                <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                                </svg>
                                <h4>My Journey</h4>
                            </div>
                            <p>Starting with a strong curiosity for graphics, I focus on mastering core frontend standards to build interfaces with high-fidelity visual feedback and smooth accessibility.</p>
                        </div>

                        <div class="info-glass-card hover-tilt reveal-epic-right" data-delay="400">
                            <div class="info-card-header">
                                <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                <h4>Design Philosophy</h4>
                            </div>
                            <p>Code and design are completely intertwined. My goal is to build interfaces that feel premium, clean, and alive, using sleek dark modes and cinematic lighting.</p>
                        </div>

                        <div class="info-glass-card hover-tilt reveal-epic-right" data-delay="600">
                            <div class="info-card-header">
                                <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                                </svg>
                                <h4>Passions & Goals</h4>
                            </div>
                            <p>I seek to push the boundaries of vanilla web languages, reactive frameworks, and responsive layouts to elevate modern brands and provide intuitive solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SKILLS SECTION -->
            <section id="skills" class="skills-section">
                <div class="section-header-centered reveal-left" data-delay="0">
                    <span class="section-tag-prefix">// 02</span>
                    <h2 class="section-title-neon">Technical Skills</h2>
                    <div class="section-underline-glow"></div>
                </div>

                <div class="skills-category-layout">
                    <!-- Frontend Core Hub -->
                    <div class="category-glass-panel">
                        <div class="category-header">
                            <svg class="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <h3>Frontend Core</h3>
                        </div>
                        <div class="skills-badge-grid">
                            <div class="skill-badge-premium html-badge hover-tilt reveal-scale" data-delay="100">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3l1.5 15L12 22l8.5-4L22 3H2z"/><path d="M12 6H7.5l.5 5h8l-.5 5-3.5 1.5-3.5-1.5-.2-2"/></svg>
                                <span>HTML5</span>
                            </div>
                            <div class="skill-badge-premium css-badge hover-tilt reveal-scale" data-delay="150">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.5 2h-17l1.5 15 8 5 8-5 1.5-15z"/><path d="M12 6H7.5l.5 5h8l-.5 5-3.5 1.5-3.5-1.5-.2-2"/></svg>
                                <span>CSS3</span>
                            </div>
                            <div class="skill-badge-premium js-badge hover-tilt reveal-scale" data-delay="200">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3h18v18H3V3z"/><path d="M16 8h-4v8h4M12 12h3"/></svg>
                                <span>JavaScript</span>
                            </div>
                            <div class="skill-badge-premium ts-badge hover-tilt reveal-scale" data-delay="250">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3h18v18H3V3z"/><path d="M9 10h4v2h-2v4h-2M14 10h4v2h-4v2h4"/></svg>
                                <span>TypeScript</span>
                            </div>
                            <div class="skill-badge-premium react-badge hover-tilt reveal-scale" data-delay="300">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="2"/><path d="M12 5C7.03 5 3 8.13 3 12s4.03 7 9 7 9-3.13 9-7-4.03-7-9-7z" transform="rotate(30 12 12)"/><path d="M12 5C7.03 5 3 8.13 3 12s4.03 7 9 7 9-3.13 9-7-4.03-7-9-7z" transform="rotate(90 12 12)"/><path d="M12 5C7.03 5 3 8.13 3 12s4.03 7 9 7 9-3.13 9-7-4.03-7-9-7z" transform="rotate(150 12 12)"/></svg>
                                <span>React</span>
                            </div>
                            <div class="skill-badge-premium next-badge hover-tilt reveal-scale" data-delay="350">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5l-3.5-4.5v4.5H9V9h1.5l3.5 4.5V9H15v7.5h-1z"/></svg>
                                <span>Next.js</span>
                            </div>
                            <div class="skill-badge-premium tailwind-badge hover-tilt reveal-scale" data-delay="400">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5.5c-3 0-4.5 1.5-4.5 4.5s1.5 3 4.5 3 4.5-1.5 4.5-4.5-1.5-3-4.5-3zM6 12.5C3 12.5 1.5 14 1.5 17s1.5 3 4.5 3 4.5-1.5 4.5-4.5-1.5-3-4.5-3z"/></svg>
                                <span>Tailwind CSS</span>
                            </div>
                        </div>
                    </div>

                    <!-- Backend & Data Hub -->
                    <div class="category-glass-panel">
                        <div class="category-header">
                            <svg class="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <ellipse cx="12" cy="5" rx="9" ry="3" />
                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                            </svg>
                            <h3>Backend & Data</h3>
                        </div>
                        <div class="skills-badge-grid">
                            <div class="skill-badge-premium node-badge hover-tilt reveal-scale" data-delay="200">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z"/><path d="M12 6v12M8.5 9l7 6"/></svg>
                                <span>Node.js</span>
                            </div>
                            <div class="skill-badge-premium python-badge hover-tilt reveal-scale" data-delay="250">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2c-2.8 0-4.8 1.2-4.8 3.8v1.4h4.8v1.4H4.8C2.2 8.6 1 10.6 1 13.4s1.2 4.8 3.8 4.8h1.4v-4.8h4.8V22c2.8 0 4.8-1.2 4.8-3.8v-1.4h-4.8v-1.4h7.2c2.6 0 3.8-2 3.8-4.8S20.8 3.8 18.2 3.8"/><circle cx="8.5" cy="5.5" r="0.75" fill="currentColor"/><circle cx="15.5" cy="18.5" r="0.75" fill="currentColor"/></svg>
                                <span>Python</span>
                            </div>
                            <div class="skill-badge-premium mongodb-badge hover-tilt reveal-scale" data-delay="300">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2c-.6 1.4-1.5 3-2.5 4.5S7.2 9.5 7.2 12c0 3.2 2.3 6.3 4.8 10 2.5-3.7 4.8-6.8 4.8-10 0-2.5-1.3-4-2.3-5.5S12.6 3.4 12 2z"/></svg>
                                <span>MongoDB</span>
                            </div>
                            <div class="skill-badge-premium firebase-badge hover-tilt reveal-scale" data-delay="350">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3.5 18.5l8-14.5 2.5 4.5-2.5 4.5h6l-6.5 5.5-7.5-5z"/></svg>
                                <span>Firebase</span>
                            </div>
                        </div>
                    </div>

                    <!-- Architecture & Tools Hub -->
                    <div class="category-glass-panel">
                        <div class="category-header">
                            <svg class="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="M12 8v4" />
                                <path d="M12 16h.01" />
                            </svg>
                            <h3>Architecture & Tools</h3>
                        </div>
                        <div class="skills-badge-grid">
                            <div class="skill-badge-premium github-badge hover-tilt reveal-scale" data-delay="300">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                                <span>GitHub</span>
                            </div>
                            <div class="skill-badge-premium git-badge hover-tilt reveal-scale" data-delay="350">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg>
                                <span>Git</span>
                            </div>
                            <div class="skill-badge-premium figma-badge hover-tilt reveal-scale" data-delay="400">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM9 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM9 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM15 5a3 3 0 1 1-6 0v6h6V5zM15 11a3 3 0 1 1-6 0v6a3 3 0 1 1 6 0v-12z"/></svg>
                                <span>Figma</span>
                            </div>
                            <div class="skill-badge-premium vscode-badge hover-tilt reveal-scale" data-delay="450">
                                <div class="skill-badge-glow"></div>
                                <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 18L14 3 20 6v12l-6 3-10-15z" /><path d="M14 21L4 6l6-3 4 6" /></svg>
                                <span>VS Code</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <!-- CONTACT SECTION -->
            <section id="contact" class="contact-section">
                <div class="section-header-centered reveal-left" data-delay="0">
                    <span class="section-tag-prefix">// 03</span>
                    <h2 class="section-title-neon">Get In Touch</h2>
                    <div class="section-underline-glow"></div>
                </div>

                <!-- Animated Two-Line Cinematic Headline -->
                <div class="contact-headline-block reveal-item" data-delay="80">
                    <div class="contact-headline-line">
                        Let's <span id="animated-headline-word" class="animated-word-glow">design</span><span
                            class="animated-cursor">|</span>
                    </div>
                    <div class="contact-headline-line contact-headline-static">
                        Incredible websites together.
                    </div>
                </div>

                <div class="contact-layout-grid">

                    <!-- Contact Left Panel: Details -->
                    <div class="contact-panel-info reveal-item" data-delay="140">
                        <div class="cyber-terminal-card">
                            <div class="terminal-bar">
                                <span class="terminal-dot red"></span>
                                <span class="terminal-dot yellow"></span>
                                <span class="terminal-dot green"></span>
                                <span class="terminal-title">contact_nodes.json</span>
                            </div>
                            <div class="terminal-body-details">
                                <h3 class="terminal-bold-head">Let's build something futuristic together.</h3>
                                <p class="terminal-para">I'm currently seeking junior frontend developer opportunities,
                                    freelance collaborations, or creative engineering challenges. Drop me a line, and
                                    let's start the dialogue.</p>

                                <div class="contact-node-list">
                                    <div class="contact-node-item">
                                        <div class="node-icon-circle">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path
                                                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <path d="M22 6l-10 7L2 6" />
                                            </svg>
                                        </div>
                                        <div class="node-text-wrap">
                                            <span class="node-label">Email:</span>
                                            <a href="mailto:nicoleidev@gmail.com"
                                                class="node-value">nicoleidev@gmail.com</a>
                                        </div>
                                    </div>
                                    <div class="contact-node-item">
                                        <div class="node-icon-circle">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </div>
                                        <div class="node-text-wrap">
                                            <span class="node-label">Location:</span>
                                            <span class="node-value">Zamboanga City, Philippines</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Right Panel: Dynamic Form -->
                    <div class="contact-panel-form reveal-item" data-delay="280">
                        <form id="portfolio-contact-form" class="cyber-glass-form" autocomplete="off">
                            <div class="form-title-wrap">
                                <h3>Transmit Transmission</h3>
                                <div class="form-pulse-indicator"></div>
                            </div>

                            <div class="form-group-field">
                                <input type="text" id="contact-name" name="name" required placeholder=" "
                                    class="form-input-element">
                                <label for="contact-name" class="form-label-floating">Full Name</label>
                                <div class="input-focus-line"></div>
                            </div>

                            <div class="form-group-field">
                                <input type="email" id="contact-email" name="email" required placeholder=" "
                                    class="form-input-element">
                                <label for="contact-email" class="form-label-floating">Email</label>
                                <div class="input-focus-line"></div>
                            </div>

                            <div class="form-group-field">
                                <input type="text" id="contact-subject" name="subject" required placeholder=" "
                                    class="form-input-element">
                                <label for="contact-subject" class="form-label-floating">Subject Topic</label>
                                <div class="input-focus-line"></div>
                            </div>

                            <div class="form-group-field">
                                <textarea id="contact-message" name="message" required placeholder=" "
                                    class="form-input-element form-textarea-element"></textarea>
                                <label for="contact-message" class="form-label-floating">Transmission Message</label>
                                <div class="input-focus-line"></div>
                            </div>

                            <button type="submit" class="form-submit-glow-btn">
                                <span class="btn-glow-span"></span>
                                <span>Send Message</span>
                                <svg class="send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            <!-- FOOTER -->
            <footer class="footer-section">
                <div class="footer-separator"></div>
                <div class="footer-container">
                    <p class="footer-copyright">&copy; 2026 NICOLEI.DEV. All rights reserved.</p>
                    <p class="footer-designation">Designed & Engineered with Pure Passion & Code.</p>
                </div>
            </footer>

        </main>

    </div>
`;
