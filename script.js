/* ==========================================================================
   Nicolei's Modern Futuristic Portfolio Interactive Logic (Optimized)
   ========================================================================== */

const initializePortfolioSystem = () => {
  // --- PREVENT DUPLICATE INITIALIZATION ---
  if (window.portfolioSystemInitialized) {
    console.warn("Portfolio system already initialized. Skipping duplicate run.");
    return;
  }
  window.portfolioSystemInitialized = true;

  // Adaptive Performance Profile Detector (Viewport + UA check)
  const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isLaptopOrMobile = window.innerWidth <= 1200 || isMobile;
  console.log(`System Initialized: running in ${isMobile ? 'Mobile Adaptive' : (isLaptopOrMobile ? 'Laptop Smooth' : 'Desktop Cinematic')} performance profile.`);

  // Record dynamic startup timestamp to drive seamless background fly-in animation during loading screen
  window.portfolioStartTime = performance.now();

  // --- 1. INJECT SEPARATED COMPONENTS ---
  const loaderContainer = document.getElementById('loader-component');
  const portfolioContainer = document.getElementById('portfolio-component');

  try {
    if (loaderContainer && typeof LoaderComponent !== 'undefined') {
      loaderContainer.innerHTML = LoaderComponent;
    }
  } catch (err) {
    console.error("Failed to inject LoaderComponent:", err);
  }

  try {
    if (portfolioContainer && typeof PortfolioComponent !== 'undefined') {
      portfolioContainer.innerHTML = PortfolioComponent;
    }
  } catch (err) {
    console.error("Failed to inject PortfolioComponent:", err);
  }

  // --- 1b. SYSTEM INITIALIZER & PAGE LOADER TIMELINE ---
  window.loaderFadeOutTime = null;
  window.loaderCompleted = false;

  // Safe fallback stub for the Scroll Reveal Observer
  let initializeRevealObserver = () => {
    console.warn("Scroll Reveal Observer has not been initialized yet.");
  };

  const completeLoader = () => {
    if (window.loaderCompleted) return;
    window.loaderCompleted = true;

    try {
      document.body.classList.remove('no-scroll');
    } catch (err) {
      console.error("Failed to update body scrolling state:", err);
    }

    // Initialization moved to sync with loader fade-out

    // Synchronize both overlay fade-out and body .loaded class clearing with the 2500ms logo reform start trigger
    setTimeout(() => {
      try {
        const activeLoader = document.getElementById('loader');
        if (activeLoader) {
          activeLoader.classList.add('fade-out');
          setTimeout(() => {
            try {
              if (activeLoader.parentNode) activeLoader.parentNode.removeChild(activeLoader);
            } catch (removeErr) { }
          }, 3500); // Safe clean up after fade-out transition completes
        }
      } catch (err) {
        console.error("Failed to fade out loader:", err);
      }

      try {
        document.body.classList.add('loaded'); // Mark page as fully loaded to trigger cinematic profile blur clearing!
      } catch (classErr) { }

      // Delaying the scroll observer until the loader has vanished guarantees no entrance animations fire invisibly!
      try {
        if (typeof initializeRevealObserver === 'function') {
          initializeRevealObserver();
        }
      } catch (err) {
        console.error("Failed to run initializeRevealObserver:", err);
      }
    }, 2500);

    if (window.loaderFadeOutTime === null) {
      window.loaderFadeOutTime = performance.now();
    }
  };

  // Instant opening experience: trigger reveal fade-out transition after 100ms
  setTimeout(completeLoader, 100);


  // --- 1b. BACKGROUND SYSTEMS DEACTIVATED FOR PURE 60FPS PERFORMANCE PASS ---


  // --- 3. CUSTOM CURSOR REMOVED FOR MAXIMUM FPS AND LOW LATENCY NATIVE INTERACTION ---


  // --- 4. DYNAMIC ROLE AUTO-TYPING CYCLE ---
  (() => {
    try {
      const typingTarget = document.getElementById('typing-role');
      if (!typingTarget) return;

      const rolesArray = [
        'Frontend Developer & Designer',
        'Creative Web Innovator',
        'Interaction Architect',
        'UI/UX Craftsman'
      ];

      let roleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 90;

      const executeRoleTyping = () => {
        try {
          if (!typingTarget) return;
          const currentRole = rolesArray[roleIndex];

          if (isDeleting) {
            typingTarget.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
          } else {
            typingTarget.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 90;
          }

          if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 2200;
            isDeleting = true;
          } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % rolesArray.length;
            typingSpeed = 600;
          }
        } catch (typeErr) { }

        setTimeout(executeRoleTyping, typingSpeed);
      };

      setTimeout(executeRoleTyping, 1800);
    } catch (err) {
      console.error("Failed to initialize role typing loop:", err);
    }
  })();


  // --- 4b. HERO HEADLINE DYNAMIC TYPING CYCLE ---
  (() => {
    try {
      const headlineTarget = document.getElementById('animated-headline-word');
      if (!headlineTarget) return;

      const headlineWords = ['design', 'build', 'create'];

      let headlineWordIndex = 0;
      let headlineCharIndex = 0;
      let headlineIsDeleting = false;
      let headlineTypingSpeed = 100;

      const executeHeadlineTyping = () => {
        try {
          if (!headlineTarget) return;

          const currentWord = headlineWords[headlineWordIndex];

          if (headlineIsDeleting) {
            headlineTarget.textContent = currentWord.substring(0, headlineCharIndex - 1);
            headlineCharIndex--;
            headlineTypingSpeed = 50;
          } else {
            headlineTarget.textContent = currentWord.substring(0, headlineCharIndex + 1);
            headlineCharIndex++;
            headlineTypingSpeed = Math.floor(Math.random() * 60) + 70;
          }

          if (!headlineIsDeleting && headlineCharIndex === currentWord.length) {
            headlineTypingSpeed = 2000;
            headlineIsDeleting = true;
          } else if (headlineIsDeleting && headlineCharIndex === 0) {
            headlineIsDeleting = false;
            headlineWordIndex = (headlineWordIndex + 1) % headlineWords.length;
            headlineTypingSpeed = 400;
          }
        } catch (headErr) { }

        setTimeout(executeHeadlineTyping, headlineTypingSpeed);
      };

      setTimeout(executeHeadlineTyping, 1800);
    } catch (err) {
      console.error("Failed to initialize headline typing loop:", err);
    }
  })();


  // --- 5. INTERACTIVE 3D PERSPECTIVE CARD TILT (DESKTOP ONLY) ---
  (() => {
    try {
      const tiltCards = document.querySelectorAll('.hover-tilt');
      if (!tiltCards || tiltCards.length === 0 || isMobile) return;

      tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          try {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const width = rect.width;
            const height = rect.height;

            const tiltX = ((y / height) - 0.5) * -15;
            const tiltY = ((x / width) - 0.5) * 15;

            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
          } catch (tiltErr) { }
        });

        card.style.transition = 'transform 0.1s ease';

        card.addEventListener('mouseleave', () => {
          try {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
          } catch (leaveErr) { }
        });
      });
    } catch (err) {
      console.error("Failed to initialize perspective card tilts:", err);
    }
  })();


  // --- 6. DYNAMIC ACTIVE MENU UNDERLINES & SCROLL REVEALS (CACHED & THROTTLED) ---
  (() => {
    try {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-item-link');

      // Bind observer installer function
      initializeRevealObserver = () => {
        try {
          if (typeof IntersectionObserver === 'undefined') {
            document.querySelectorAll('.scroll-reveal, .reveal-item, .reveal-scale').forEach(el => {
              try { el.classList.add('revealed', 'is-visible'); } catch (classErr) { }
            });
            return;
          }

          const legacyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              try {
                if (entry.isIntersecting) {
                  entry.target.classList.add('revealed');
                } else {
                  entry.target.classList.remove('revealed');
                }
              } catch (obsErr) { }
            });
          }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

          document.querySelectorAll('.scroll-reveal').forEach(el => legacyObserver.observe(el));

          const itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              try {
                if (entry.isIntersecting) {
                  const delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
                  if (delay > 0) {
                    setTimeout(() => {
                      try { entry.target.classList.add('is-visible'); } catch (delayErr) { }
                    }, delay);
                  } else {
                    entry.target.classList.add('is-visible');
                  }
                } else {
                  entry.target.classList.remove('is-visible');
                }
              } catch (obsItemErr) { }
            });
          }, {
            threshold: 0.08,
            rootMargin: '0px 0px -30px 0px'
          });

          document.querySelectorAll('.reveal-item, .reveal-scale, .reveal-left, .reveal-right, .reveal-up-cinematic, .reveal-epic-right').forEach(el => {
            itemObserver.observe(el);
          });
        } catch (obsInitErr) {
          console.error("Error setting up IntersectionObservers:", obsInitErr);
          document.querySelectorAll('.scroll-reveal, .reveal-item, .reveal-scale').forEach(el => {
            el.classList.add('revealed', 'is-visible');
          });
        }
      };

      if (sections.length === 0 || navLinks.length === 0) return;

      // DOM elements for scrubbed scroll animations
      const introPanel = document.querySelector('.about-intro-panel');
      const infoCards = document.querySelectorAll('.info-glass-card');
      const categoryPanels = document.querySelectorAll('.category-glass-panel');
      const sectionHeaders = document.querySelectorAll('.section-header-centered');

      // Caching layout bounds to prevent DOM reading/layout thrashing on scroll
      let sectionPositions = [];
      let introOffsetTop = 0;
      let introHeight = 0;
      let headerOffsets = [];
      let catOffsets = [];

      const cacheScrollBounds = () => {
        try {
          sectionPositions = Array.from(sections).map(section => ({
            top: section.offsetTop,
            height: section.offsetHeight,
            id: section.getAttribute('id')
          }));
          introOffsetTop = introPanel ? introPanel.offsetTop : 0;
          introHeight = introPanel ? introPanel.offsetHeight : 0;
          headerOffsets = Array.from(sectionHeaders).map(h => ({ top: h.offsetTop, height: h.offsetHeight }));
          catOffsets = Array.from(categoryPanels).map(p => ({ top: p.offsetTop, height: p.offsetHeight }));
        } catch (err) { }
      };

      cacheScrollBounds();
      window.addEventListener('resize', cacheScrollBounds);

      const updateActiveNavLink = () => {
        try {
          let scrollPos = window.scrollY + 180;

          sectionPositions.forEach(pos => {
            if (scrollPos >= pos.top && scrollPos < pos.top + pos.height) {
              navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${pos.id}`) {
                  // Only mutate the class list if the state has changed
                  if (!link.classList.contains('active')) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                  }
                }
              });
            }
          });
        } catch (scrollErr) { }
      };

      // Throttled scroll listener using requestAnimationFrame for flawless physics
      let scrollScheduled = false;
      window.addEventListener('scroll', () => {
        if (!scrollScheduled) {
          scrollScheduled = true;
          requestAnimationFrame(() => {
            updateActiveNavLink();

            const scrollY = window.scrollY;
            const vCenter = window.innerHeight / 2;

            // --- BATCH DOM WRITES (ZERO-LAYOUT REFLOWS!) ---
            if (introPanel) {
              const dist = vCenter - (introOffsetTop - scrollY + introHeight / 2);
              introPanel.style.setProperty('--scroll-parallax-y', `${dist * 0.15}px`);

              // Next-level Left Pull Physics
              const absDist = Math.abs(dist);
              const offset = Math.max(0, Math.min((absDist / vCenter) * 35, 70));
              introPanel.style.setProperty('--scroll-cascade-left', `${-offset}px`);
            }

            sectionHeaders.forEach((header, i) => {
              const offset = headerOffsets[i];
              if (!offset) return;
              const dist = vCenter - (offset.top - scrollY + offset.height / 2);
              header.style.setProperty('--scroll-parallax-header', `${dist * 0.25}px`);
            });

            categoryPanels.forEach((panel, i) => {
              const offset = catOffsets[i];
              if (!offset) return;
              const distY = (offset.top - scrollY + offset.height / 2) - vCenter;
              const normY = Math.max(-1, Math.min(1, distY / vCenter));

              const dist = Math.abs(distY);
              const norm = Math.max(0, Math.min(1, dist / (window.innerHeight * 0.65)));

              const scale = 1 - (norm * 0.15);
              const opacity = 1 - Math.pow(norm, 2.5);

              panel.style.setProperty('--scroll-tilt-x', `${normY * -15}deg`);
              panel.style.setProperty('--scroll-scale', scale);
              panel.style.setProperty('--scroll-opacity', Math.max(0, opacity));
            });

            // Global scroll progress
            const scrollTotal = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
            const scrollProgress = scrollHeight > 0 ? scrollTotal / scrollHeight : 0;
            document.documentElement.style.setProperty('--scroll-progress', scrollProgress);

            scrollScheduled = false;
          });
        }
      }, { passive: true });

    } catch (err) {
      console.error("Failed to initialize active menu scroll observer:", err);
    }
  })();


  // --- 7. MOBILE HAMBURGER DRAWER SYSTEM ---
  (() => {
    try {
      const hamburgerBtn = document.getElementById('hamburger-btn');
      const navMenu = document.getElementById('nav-menu');
      const navItems = document.querySelectorAll('.nav-item-link');
      if (!hamburgerBtn || !navMenu) return;

      const toggleMobileDrawer = () => {
        try {
          hamburgerBtn.classList.toggle('active');
          navMenu.classList.toggle('drawer-active');
          document.body.classList.toggle('no-scroll');
        } catch (toggleErr) { }
      };

      hamburgerBtn.addEventListener('click', toggleMobileDrawer);

      navItems.forEach(item => {
        item.addEventListener('click', () => {
          try {
            if (navMenu.classList.contains('drawer-active')) {
              toggleMobileDrawer();
            }
          } catch (itemClickErr) { }
        });
      });
    } catch (err) {
      console.error("Failed to initialize mobile hamburger drawer:", err);
    }
  })();


  // --- 8. GLOBAL DARK/LIGHT THEME CONTROLLER & PERSISTENCE ---
  (() => {
    try {
      const themeToggle = document.getElementById('theme-toggle');

      const savedTheme = localStorage.getItem('nicolei-theme');
      if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      }

      if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          try {
            if (document.body.classList.contains('light-theme')) {
              document.body.classList.remove('light-theme');
              document.body.classList.add('dark-theme');
              localStorage.setItem('nicolei-theme', 'dark');
            } else {
              document.body.classList.remove('dark-theme');
              document.body.classList.add('light-theme');
              localStorage.setItem('nicolei-theme', 'light');
            }
          } catch (toggleErr) { }
        });
      }
    } catch (err) {
      console.error("Failed to initialize theme controller:", err);
    }
  })();


  // --- 9. CONTACT FORM INTERACTIVE SUCCESS TRANSITIONS ---
  (() => {
    try {
      const contactForm = document.getElementById('portfolio-contact-form');
      if (!contactForm) return;

      contactForm.addEventListener('submit', (e) => {
        try {
          e.preventDefault();

          const submitBtn = contactForm.querySelector('.form-submit-glow-btn');
          if (!submitBtn) return;
          const submitBtnText = submitBtn.querySelector('span');
          const originalText = submitBtnText ? submitBtnText.textContent : 'Send Message';

          if (submitBtnText) submitBtnText.textContent = 'TRANSMITTING...';
          submitBtn.style.pointerEvents = 'none';
          submitBtn.style.opacity = '0.7';

          setTimeout(() => {
            try {
              if (submitBtnText) submitBtnText.textContent = 'TRANSMITTED SUCCESSFULLY!';
              submitBtn.style.background = 'linear-gradient(135deg, #00e676 0%, #00b0ff 100%)';
              submitBtn.style.boxShadow = '0 0 20px rgba(0, 230, 118, 0.4)';

              contactForm.reset();

              setTimeout(() => {
                try {
                  if (submitBtnText) submitBtnText.textContent = originalText;
                  submitBtn.style.pointerEvents = 'auto';
                  submitBtn.style.opacity = '1';
                  submitBtn.style.background = '';
                  submitBtn.style.boxShadow = '';
                } catch (btnResetErr) { }
              }, 3500);
            } catch (timeoutErr) { }
          }, 1800);
        } catch (submitErr) { }
      });
    } catch (err) {
      console.error("Failed to initialize contact form transitions:", err);
    }
  })();


  // --- 10. INTERACTIVE HOLOGRAPHIC 3D TECHNOLOGY GLOBE (RECONCILED, OPTIMIZED SCATTER & ORBIT) ---
  (() => {
    try {
      const techSystem = document.getElementById('tech-system');
      if (!techSystem) return;

      const badges = Array.from(techSystem.querySelectorAll('.floating-tech-badge'));
      const N_total = badges.length;
      if (N_total === 0) return;

      // Dynamic Adaptive Quality System (Curated to 13 total Skillset Badges):
      // - High-End Desktop: 13 active badges (dense, beautiful, anti-gravity holographic globe)
      // - Mid-Range Laptop: 8 active badges (balanced performance mode)
      // - Mobile Devices: 6 active badges (lightweight touch mode)
      const maxBadges = isMobile ? 6 : (isLaptopOrMobile ? 8 : 13);

      let zoomFactor = 1.0;
      let targetZoom = 1.0;
      const minZoom = 0.12;
      const maxZoom = 1.15;
      let isDragging = false;
      let lastPointerX = 0;
      let lastPointerY = 0;

      let angleX = 0.3;
      let angleY = 0.5;

      const autoSpeedX = 0.001;
      const autoSpeedY = 0.0022;

      let dragVelocityX = 0;
      let dragVelocityY = 0;



      // Cache container dimensions to completely prevent layout thrashing (no getBoundingClientRect inside frames!)
      let containerWidth = 320;
      let containerHeight = 320;

      const updateGlobeDimensions = () => {
        try {
          const rect = techSystem.getBoundingClientRect();
          containerWidth = rect.width || 320;
          containerHeight = rect.height || 320;
        } catch (e) { }
      };

      updateGlobeDimensions();
      window.addEventListener('resize', updateGlobeDimensions, { passive: true });

      // Throttled and passive scroll event listener for the scatter expansion effect!
      let targetScrollProgress = 0;
      let currentScrollProgress = 0;

      window.addEventListener('scroll', () => {
        targetScrollProgress = Math.min(1.0, window.scrollY / 450);
      }, { passive: true });

      const badgeStates = [];

      badges.forEach((badge, i) => {
        if (i >= maxBadges) {
          badge.style.display = 'none'; // Hides extra logos on weaker systems
          return;
        }
        badge.style.display = 'block'; // Ensures active badges are visible!
        try {
          const offset = 2 / maxBadges;
          const y = ((i * offset) - 1) + (offset / 2);
          const r = Math.sqrt(1 - y * y);
          const phi = i * Math.PI * (3 - Math.sqrt(5));

          const x = Math.cos(phi) * r;
          const z = Math.sin(phi) * r;

          const state = {
            element: badge,
            name: badge.getAttribute('data-tech'),
            origX: x,
            origY: y,
            origZ: z,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() * 0.15 + 0.05) * (Math.random() > 0.5 ? 1 : -1),
            scaleMultiplier: 1.0,
            // Reconciled DOM states
            lastTransform: '',
            lastOpacity: '',
            lastZIndex: 0
          };

          badgeStates.push(state);

          if (!isMobile) {
            badge.addEventListener('pointerenter', () => {
              state.scaleMultiplier = 1.25;
            });
            badge.addEventListener('pointerleave', () => {
              state.scaleMultiplier = 1.0;
            });
          }

          badge.addEventListener('pointerdown', (e) => {
            try {
              badge.style.transform += ' scale(1.4)';
              setTimeout(() => {
                try {
                  badge.style.transform = badge.style.transform.replace(' scale(1.4)', '');
                } catch (trErr) { }
              }, 150);

              badges.forEach(b => b.classList.remove('touch-active'));
              badge.classList.add('touch-active');
            } catch (downErr) { }
          });
        } catch (badgeInitErr) { }
      });

      document.addEventListener('pointerdown', () => {
        try {
          badges.forEach(b => b.classList.remove('touch-active'));
        } catch (err) { }
      });

      techSystem.style.pointerEvents = 'auto';
      techSystem.style.cursor = 'grab';

      techSystem.addEventListener('pointerdown', (e) => {
        try {
          isDragging = true;
          techSystem.style.cursor = 'grabbing';
          lastPointerX = e.clientX;
          lastPointerY = e.clientY;
          dragVelocityX = 0;
          dragVelocityY = 0;

          techSystem.setPointerCapture(e.pointerId);
        } catch (dragDownErr) { }
      });

      techSystem.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        try {
          const dx = e.clientX - lastPointerX;
          const dy = e.clientY - lastPointerY;

          angleY += dx * 0.005;
          angleX -= dy * 0.005;

          dragVelocityY = dx * 0.005;
          dragVelocityX = -dy * 0.005;

          lastPointerX = e.clientX;
          lastPointerY = e.clientY;
        } catch (dragMoveErr) { }
      });

      techSystem.addEventListener('pointerup', (e) => {
        try {
          isDragging = false;
          techSystem.style.cursor = 'grab';
          techSystem.releasePointerCapture(e.pointerId);
        } catch (dragUpErr) { }
      });

      techSystem.addEventListener('pointercancel', (e) => {
        isDragging = false;
        techSystem.style.cursor = 'grab';
      });

      techSystem.addEventListener('wheel', (e) => {
        try {
          e.preventDefault();
          const zoomDelta = -e.deltaY * 0.00015;
          targetZoom = Math.max(minZoom, Math.min(maxZoom, targetZoom + zoomDelta));
        } catch (whErr) { }
      }, { passive: false });

      let touchStartDist = 0;
      let baseZoom = 1.0;

      techSystem.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
          try {
            e.preventDefault();
            touchStartDist = Math.hypot(
              e.touches[0].clientX - e.touches[1].clientX,
              e.touches[0].clientY - e.touches[1].clientY
            );
            baseZoom = targetZoom;
          } catch (tsErr) { }
        }
      }, { passive: false });

      techSystem.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2 && touchStartDist > 0) {
          try {
            e.preventDefault();
            const dist = Math.hypot(
              e.touches[0].clientX - e.touches[1].clientX,
              e.touches[0].clientY - e.touches[1].clientY
            );

            const scale = 1 + (dist / touchStartDist - 1) * 0.45;
            targetZoom = Math.max(minZoom, Math.min(maxZoom, baseZoom * scale));
          } catch (tmErr) { }
        }
      }, { passive: false });

      techSystem.addEventListener('touchend', () => {
        touchStartDist = 0;
      }, { passive: true });

      const tickGlobeLoop = () => {
        try {
          const now = performance.now();
          zoomFactor += (targetZoom - zoomFactor) * 0.045;

          // Interpolate scroll progress on frames
          currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.07;

          const portraitWrapper = document.getElementById('portrait-wrapper');
          const isMobileScreen = window.innerWidth <= 480;
          const responsiveScalar = isMobileScreen ? 0.92 : 1.15;
          
          // Decouple physics sphere radius calculations from techSystem container's visual padding/hitbox expansion
          const refRect = portraitWrapper ? portraitWrapper.getBoundingClientRect() : null;
          const refWidth = refRect ? refRect.width : 320;
          const baseRadius = (refWidth / 2) * responsiveScalar;
          const sphereRadius = baseRadius * zoomFactor;

          const cx = containerWidth / 2;
          const cy = containerHeight / 2;

          if (!isDragging) {
            angleX += autoSpeedX + dragVelocityX;
            angleY += autoSpeedY + dragVelocityY;

            dragVelocityX *= 0.95;
            dragVelocityY *= 0.95;
          }

          const currentAngleX = angleX;
          const currentAngleY = angleY;

          const cosX = Math.cos(currentAngleX);
          const sinX = Math.sin(currentAngleX);
          const cosY = Math.cos(currentAngleY);
          const sinY = Math.sin(currentAngleY);

          // Lightweight, high-performance scattered intro glide-in decay & delayed logo emergence
          let easedProgress = 1.0;
          let introOpacityMultiplier = 1.0;
          if (window.loaderFadeOutTime !== null) {
            const introStartTime = window.loaderFadeOutTime;
            const elapsed = now - introStartTime;

            // 1. Logos fade in smoothly over the first 1200ms
            introOpacityMultiplier = Math.min(1.0, elapsed / 1200);

            // 2. Wait 2500ms, then reform over 2800ms
            const delayOffset = 2500; // Synchronize with cinematic text and blur fade out
            const badgeElapsed = Math.max(0, elapsed - delayOffset);
            const badgeProgress = Math.max(0, 1 - (badgeElapsed / 2800)); // Slow, luxury 2.8 seconds glide-in reform
            easedProgress = Math.pow(badgeProgress, 3); // Elegant cubic smooth decay from 1 to 0
          }

          // Dynamic radial projection scatter multiplier (2.2 startup scatter for a wider, soft elegant reveal)
          const scatterFactor = (easedProgress * 2.2) + (currentScrollProgress * 1.4);

          badgeStates.forEach((state, i) => {
            try {
              const vx = state.origX;
              const vy = state.origY;
              const vz = state.origZ;

              // Rotate around X-axis
              const y1 = vy * cosX - vz * sinX;
              const z1 = vy * sinX + vz * cosX;

              // Rotate around Y-axis
              const rx = vx * cosY + z1 * sinY;
              const ry = y1;
              const rz = -vx * sinY + z1 * cosY;

              const currentRadius = sphereRadius;

              // Outward projection vector for scatter expansion animation
              const scatterX = rx * currentRadius * scatterFactor;
              const scatterY = ry * currentRadius * scatterFactor;

              const sx = cx + rx * currentRadius + scatterX;
              const sy = cy + ry * currentRadius + scatterY;

              const badgeRadiusOffset = isMobileScreen ? 22 : 26;
              const currentX = sx - badgeRadiusOffset;
              const currentY = sy - badgeRadiusOffset;
              const currentZ = rz * currentRadius * (1 - easedProgress * 0.5);

              const depthPercent = (rz + 1) / 2; // 0 for furthest back, 1 for closest forward

              // Correct reversed depth formulas: foreground badges should be larger and more opaque
              const currentScale = (0.75 + 0.3 * depthPercent) * state.scaleMultiplier * zoomFactor * (1 - easedProgress * 0.3);
              const currentOpacity = (0.35 + 0.65 * depthPercent) * (1.0 - currentScrollProgress * 0.35) * introOpacityMultiplier;

              state.rotation += state.rotationSpeed;
              const selfTwirl = state.rotation;

              // Build transform matrix string (GPU-friendly translate3d)
              const transformString = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, ${currentZ.toFixed(1)}px) scale(${currentScale.toFixed(3)}) rotate(${selfTwirl.toFixed(1)}deg)`;

              // VIRTUAL DOM-STYLE STYLE STATE RECONCILIATION: only mutate DOM elements when the values change!
              if (state.lastTransform !== transformString) {
                state.element.style.transform = transformString;
                state.lastTransform = transformString;
              }

              const opacityString = currentOpacity.toFixed(3);
              if (state.lastOpacity !== opacityString) {
                state.element.style.opacity = opacityString;
                state.lastOpacity = opacityString;
              }

              // Correct reversed z-index depth layering: foreground badges (rz >= 0) must be z-index 10, background (rz < 0) must be z-index 2
              const zIndexVal = rz >= 0 ? 10 : 2;
              if (state.lastZIndex !== zIndexVal) {
                state.element.style.zIndex = zIndexVal;
                state.lastZIndex = zIndexVal;
              }
            } catch (badgeTickErr) { }
          });

        } catch (globeTickErr) { }
        requestAnimationFrame(tickGlobeLoop);
      };

      // Defer technology globe physics loop until loading overlay completes and page is fully loaded to prevent startup frame drops
      const startDeferredGlobe = () => {
        if (document.body.classList.contains('loaded')) {
          tickGlobeLoop();
        } else {
          setTimeout(startDeferredGlobe, 100);
        }
      };
      startDeferredGlobe();
    } catch (err) {
      console.error("Failed to initialize technology holographic globe system:", err);
    }
  })();

  // ── Unified Hero Tilt: Portrait + Globe Synchronized (DESKTOP ONLY) ─────────────────
  (() => {
    try {
      const zone = document.getElementById('hero-tilt-zone');
      const wrapper = document.getElementById('portrait-wrapper');
      const card = document.getElementById('portrait-tilt-card');
      if (!zone || !wrapper || !card) return;

      const shine = card.querySelector('.portrait-shine-overlay');

      // Block native browser dragging and selection triggers on the profile globe completely
      card.addEventListener('dragstart', e => e.preventDefault());

      const TILT_MAX = 20;
      const TILT_EASE = 0.10; // Single premium ease coefficient for ultra-responsive, butter-smooth cursor tracking
      const PERSPECTIVE = 1000; // Refined cinematic perspective scale

      let mRX = 0, mRY = 0;
      let cRX = 0, cRY = 0;

      let isHovering = false;
      let isLoopRunning = false;
      let fadeDone = false;

      const lerp = (a, b, f) => a + (b - a) * f;
      const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

      function startLoop() {
        if (isLoopRunning) return;
        isLoopRunning = true;
        requestAnimationFrame(tick);
      }

      function tick() {
        if (!isLoopRunning) return;

        try {
          // Direct cinematic single-interpolation tracking
          cRX = lerp(cRX, isHovering ? mRX : 0, TILT_EASE);
          cRY = lerp(cRY, isHovering ? mRY : 0, TILT_EASE);

          // Apply 3D tilt to the shared .portrait-tilt-globe container for perfect synchronization of all layers
          card.style.transform =
            `perspective(${PERSPECTIVE}px) ` +
            `rotateX(${cRX.toFixed(3)}deg) ` +
            `rotateY(${cRY.toFixed(3)}deg)`;

          // Dynamically translate and adjust opacity of the premium ambient shine overlay!
          if (shine) {
            const currentNX = cRY / TILT_MAX;
            const currentNY = -cRX / TILT_MAX;

            const shineX = currentNX * 35; // Max 35px translation
            const shineY = currentNY * 35;

            shine.style.transform = `translate3d(${shineX.toFixed(1)}px, ${shineY.toFixed(1)}px, 0)`;

            // Fade in the shine opacity based on whether we are hovering, perfectly eased
            const targetOpacity = isHovering ? 1.0 : 0.0;
            const currentOpacity = parseFloat(shine.style.opacity || '0');
            const newOpacity = lerp(currentOpacity, targetOpacity, 0.1);
            shine.style.opacity = newOpacity.toFixed(3);
          }

          // Sleep condition: when not hovering and tilt has settled close to zero, sleep the loop!
          if (!isHovering && Math.abs(cRX) < 0.01 && Math.abs(cRY) < 0.01) {
            cRX = 0;
            cRY = 0;
            card.style.transform = `perspective(${PERSPECTIVE}px) rotateX(0deg) rotateY(0deg)`;
            if (shine) {
              shine.style.transform = 'translate3d(0px, 0px, 0)';
              shine.style.opacity = '0';
            }
            isLoopRunning = false;
            return;
          }
        } catch (tickErr) { }

        requestAnimationFrame(tick);
      }

      function onMove(clientX, clientY) {
        try {
          const r = zone.getBoundingClientRect();
          const nx = clamp((clientX - (r.left + r.width / 2)) / (r.width / 2), -1, 1);
          const ny = clamp((clientY - (r.top + r.height / 2)) / (r.height / 2), -1, 1);

          mRY = nx * TILT_MAX;
          mRX = -ny * TILT_MAX;
        } catch (moveErr) { }
      }

      // Event listeners restricted to desktop to prevent layout fight gesture conflicts on mobile
      if (!isMobile) {
        zone.addEventListener('mouseenter', () => {
          isHovering = true;
          if (!fadeDone) { card.style.animation = 'none'; fadeDone = true; }
          startLoop();
        });

        zone.addEventListener('mousemove', e => {
          onMove(e.clientX, e.clientY);
          startLoop();
        });

        zone.addEventListener('mouseleave', () => {
          isHovering = false;
          mRX = 0; mRY = 0;
        });
      }
    } catch (err) {
      console.error("Failed to initialize unified tilt loop:", err);
    }
  })();

  // --- DYNAMIC 3D CURSOR TILT FOR .hover-tilt CARDS ---
  try {
    const tiltCards = document.querySelectorAll('.hover-tilt');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        card.style.setProperty('--tilt-x', `${rotateX}deg`);
        card.style.setProperty('--tilt-y', `${rotateY}deg`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--tilt-x', '5deg');
        card.style.setProperty('--tilt-y', '-5deg');
      });
    });
  } catch (err) {
    console.error("Failed to initialize hover-tilt tracking:", err);
  }

};

// Bulletproof execution trigger to handle direct file loading, local servers, and hot reloads!
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePortfolioSystem);
} else {
  initializePortfolioSystem();
}
