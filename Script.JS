
/**
 * BREW & BOBA - Main JavaScript
 * Features:
 * - Dark Mode / Light Mode
 * - Save theme preference
 * - Automatic product counter
 * - Contact form demo
 * - GSAP intro animation
 * - ScrollTrigger reveal animation
 * - Scroll progress bar
 * - Replay Intro button
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;

    // =====================================
    // 1. DARK MODE / LIGHT MODE
    // =====================================

    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const themeLabel = document.getElementById("theme-label");

    const themeStorageKey = "brew-boba-theme";

    function saveTheme(theme) {
        try {
            localStorage.setItem(themeStorageKey, theme);
        } catch (error) {
            console.warn("Unable to save theme preference.");
        }
    }

    function applyTheme(theme) {
        const isDark = theme === "dark";

        root.classList.toggle("dark", isDark);

        if (themeIcon) {
            themeIcon.textContent = isDark ? "☀" : "☾";
        }

        if (themeLabel) {
            themeLabel.textContent = isDark ? "Light" : "Dark";
        }

        if (themeToggle) {
            themeToggle.setAttribute("aria-pressed", String(isDark));
            themeToggle.setAttribute(
                "aria-label",
                isDark ? "Switch to light mode" : "Switch to dark mode"
            );
        }

        saveTheme(theme);
    }

    let savedTheme = null;

    try {
        savedTheme = localStorage.getItem(themeStorageKey);
    } catch (error) {
        savedTheme = null;
    }

    if (savedTheme === "dark" || savedTheme === "light") {
        applyTheme(savedTheme);
    } else {
        applyTheme(root.classList.contains("dark") ? "dark" : "light");
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const nextTheme = root.classList.contains("dark")
                ? "light"
                : "dark";

            applyTheme(nextTheme);
        });
    }

    // =====================================
    // 2. AUTOMATIC PRODUCT COUNTER
    // =====================================

    const productCards = document.querySelectorAll("#menu .menu-card");

    const productCounter = document.querySelector(
        "#home .hero-item .text-2xl.font-black"
    );

    if (productCounter && productCards.length > 0) {
        productCounter.textContent = productCards.length;
    }

    // =====================================
    // 3. CURRENT YEAR
    // =====================================

    const currentYear = document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // =====================================
    // 4. CONTACT FORM
    // =====================================

    const contactForm = document.getElementById("contact-form");
    const formNote = document.getElementById("form-note");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            const nameInput = contactForm.querySelector(
                '[name="name"]'
            );

            const customerName = nameInput
                ? nameInput.value.trim()
                : "";

            if (formNote) {
                formNote.textContent = customerName
                    ? `Thank you, ${customerName}! Your demo message is ready. Messages are not actually sent or stored.`
                    : "Thank you! This is a demo form only.";

                formNote.setAttribute("role", "status");
            }

            contactForm.reset();
        });
    }

    // =====================================
    // 5. REDUCED MOTION PREFERENCE
    // =====================================

    const motionQuery = window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;

    function prefersReducedMotion() {
        return Boolean(motionQuery && motionQuery.matches);
    }

    // =====================================
    // 6. GSAP HERO INTRO ANIMATION
    // =====================================

    const replayButton = document.getElementById("replay-intro");
    const heroItems = document.querySelectorAll(".hero-item");

    let introTimeline = null;

    function playIntro() {
        if (prefersReducedMotion() || !window.gsap) {
            heroItems.forEach((item) => {
                item.style.opacity = "1";
                item.style.transform = "none";
            });

            return;
        }

        if (introTimeline) {
            introTimeline.kill();
        }

        introTimeline = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        introTimeline.fromTo(
            heroItems,
            {
                y: 35,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                clearProps: "transform"
            }
        );

        const heroTitle = document.getElementById("hero-title");

        if (heroTitle) {
            introTimeline.fromTo(
                heroTitle,
                {
                    y: 25,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "back.out(1.4)",
                    clearProps: "transform"
                },
                "-=0.55"
            );
        }
    }

    // =====================================
    // 7. SCROLLTRIGGER ANIMATION
    // =====================================

    function setupRevealAnimations() {
        const revealElements = document.querySelectorAll(".reveal");

        if (
            !window.gsap ||
            !window.ScrollTrigger ||
            prefersReducedMotion()
        ) {
            revealElements.forEach((element) => {
                element.style.opacity = "1";
                element.style.transform = "none";
            });

            return;
        }

        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".reveal").forEach((element) => {
            gsap.fromTo(
                element,
                {
                    y: 45,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.85,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        once: true
                    }
                }
            );
        });
    }

    // =====================================
    // 8. SCROLL PROGRESS BAR
    // =====================================

    const progressBar = document.getElementById("scroll-progress");

    function updateScrollProgress() {
        if (!progressBar) return;

        const scrollableHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = scrollableHeight > 0
            ? (window.scrollY / scrollableHeight) * 100
            : 0;

        const safeProgress = Math.min(
            100,
            Math.max(0, progress)
        );

        progressBar.style.transform =
            `scaleX(${safeProgress / 100})`;

        progressBar.setAttribute(
            "aria-valuenow",
            Math.round(safeProgress)
        );
    }

    if (progressBar) {
        progressBar.style.transformOrigin = "left center";
        progressBar.style.transform = "scaleX(0)";

        window.addEventListener(
            "scroll",
            updateScrollProgress,
            { passive: true }
        );

        window.addEventListener(
            "resize",
            updateScrollProgress
        );

        updateScrollProgress();
    }

    // =====================================
    // 9. REPLAY INTRO BUTTON
    // =====================================

    if (replayButton) {
        replayButton.addEventListener("click", () => {
            playIntro();

            const homeSection = document.getElementById("home");

            if (homeSection) {
                homeSection.scrollIntoView({
                    behavior: prefersReducedMotion()
                        ? "auto"
                        : "smooth",

                    block: "start"
                });
            }
        });
    }

    // =====================================
    // 10. START ANIMATIONS
    // =====================================

    playIntro();
    setupRevealAnimations();

    // Respect changes to the user's motion preference.
    if (
        motionQuery &&
        typeof motionQuery.addEventListener === "function"
    ) {
        motionQuery.addEventListener("change", () => {
            if (prefersReducedMotion()) {
                if (introTimeline) {
                    introTimeline.kill();
                }

                heroItems.forEach((item) => {
                    item.style.opacity = "1";
                    item.style.transform = "none";
                });

                document.querySelectorAll(".reveal").forEach((element) => {
                    element.style.opacity = "1";
                    element.style.transform = "none";
                });
            }
        });
    }
});
