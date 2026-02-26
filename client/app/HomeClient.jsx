"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApi } from "../hooks/useApi";
import gsap from "gsap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HERO_IMG = "/hero.jpg";

export default function Home() {
    const { data: portfolio } = useApi("/portfolio");
    const heroRef = useRef(null);
    const stripRef = useRef(null);
    const trackRef = useRef(null);

    // Subtle parallax on hero with mouse move
    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        const img = el.querySelector(".hero-img");
        if (!img) return;

        let currentScrollY = window.scrollY;
        let ticking = false;

        if (currentScrollY > window.innerHeight * 0.2) {
            img.style.transform = `scale(1.04) translateY(${currentScrollY * 0.12}px)`;
        } else {
            img.style.transform = `scale(1.04) translate(0px, 0px)`;
        }

        let mouseX = 0;
        let mouseY = 0;
        let mouseAnimFrame = null;

        const updateMouseParallax = () => {
            if (!img || currentScrollY > window.innerHeight * 0.2) return;
            const moveX = mouseX * 2;
            const moveY = mouseY * 2;
            img.style.transform = `scale(1.04) translate(${moveX}px, ${moveY}px)`;
            mouseAnimFrame = null;
        };

        const onMouseMove = (e) => {
            if (currentScrollY > window.innerHeight * 0.2) return;
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xPercent = (clientX / innerWidth - 0.5) * 2;
            const yPercent = (clientY / innerHeight - 0.5) * 2;
            mouseX = xPercent;
            mouseY = yPercent;
            if (!mouseAnimFrame) {
                mouseAnimFrame = requestAnimationFrame(updateMouseParallax);
            }
        };

        const updateScrollParallax = () => {
            if (!img) { ticking = false; return; }
            if (currentScrollY > window.innerHeight * 0.2) {
                const translateY = currentScrollY * 0.12;
                img.style.transform = `scale(1.04) translateY(${translateY}px)`;
            } else {
                img.style.transform = `scale(1.04) translate(0px, 0px)`;
            }
            ticking = false;
        };

        const onScroll = () => {
            currentScrollY = window.scrollY;
            if (!ticking) {
                requestAnimationFrame(updateScrollParallax);
                ticking = true;
            }
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("scroll", onScroll);
            if (mouseAnimFrame) cancelAnimationFrame(mouseAnimFrame);
        };
    }, []);

    // Horizontal drag gallery with custom cursor
    useEffect(() => {
        const viewport = stripRef.current;
        const track = trackRef.current;
        if (!viewport || !track) return;
        if (!portfolio || portfolio.length === 0) return;

        let isDown = false;
        let startX = 0;
        let startPos = 0;
        let currentX = 0;
        let velocity = 0;
        let lastPointerX = 0;
        let lastTime = 0;
        let anim = null;
        currentX = Number(gsap.getProperty(track, "x")) || 0;

        const getBounds = () => {
            const vw = viewport.clientWidth;
            const tw = track.scrollWidth;
            const max = 0;
            const min = Math.min(0, vw - tw);
            return { min, max };
        };

        const setX = (x) => {
            const { min, max } = getBounds();
            const clamped = Math.max(min, Math.min(max, x));
            currentX = clamped;
            gsap.set(track, { x: currentX });
        };

        let hasDragged = false;

        const onPointerDown = (e) => {
            e.preventDefault();
            isDown = true;
            hasDragged = false;
            if (anim) anim.kill();
            startX = e.clientX;
            startPos = currentX;
            lastPointerX = e.clientX;
            lastTime = performance.now();
            velocity = 0;
            viewport.classList.add('dragging');
            if (viewport.setPointerCapture) {
                try { viewport.setPointerCapture(e.pointerId); } catch (err) { }
            }
        };

        const onPointerMove = (e) => {
            if (!isDown) return;
            const dx = e.clientX - startX;
            if (Math.abs(dx) > 3) {
                e.preventDefault();
                hasDragged = true;
                setX(startPos + dx);
                const now = performance.now();
                const dt = now - lastTime;
                if (dt > 0) {
                    velocity = (e.clientX - lastPointerX) / dt;
                    lastPointerX = e.clientX;
                    lastTime = now;
                }
            }
        };

        const finishInertia = () => {
            const amplitude = velocity * 240;
            const target = currentX + amplitude;
            const { min, max } = getBounds();
            const clamped = Math.max(min, Math.min(max, target));
            if (Math.abs(clamped - currentX) < 2) return;
            const duration = Math.min(0.9, Math.max(0.35, Math.abs(amplitude) / 500));
            anim = gsap.to(track, {
                x: clamped,
                duration,
                ease: "power3.out",
                onUpdate: () => { currentX = gsap.getProperty(track, "x"); },
            });
        };

        const onPointerUp = (e) => {
            if (!isDown) return;
            isDown = false;
            viewport.classList.remove('dragging');
            if (viewport.releasePointerCapture && e.pointerId != null) {
                try { viewport.releasePointerCapture(e.pointerId); } catch (err) { }
            }
            if (hasDragged) {
                finishInertia();
            } else {
                const targetLink = e.target.closest('a');
                if (targetLink && targetLink.href) targetLink.click();
            }
            const rect = viewport.getBoundingClientRect();
            if (e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom) {
                viewport.classList.add('hovering');
            } else {
                viewport.classList.remove('hovering');
            }
        };

        const onLinkClick = (e) => {
            if (hasDragged) { e.preventDefault(); e.stopPropagation(); }
        };

        const handleMouseMove = (e) => {
            const rect = viewport.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            viewport.style.setProperty("--cursor-x", `${x}%`);
            viewport.style.setProperty("--cursor-y", `${y}%`);
        };

        const handleMouseEnter = () => viewport.classList.add('hovering');
        const handleMouseLeave = () => viewport.classList.remove('hovering');
        const handleContextMenu = (e) => { e.preventDefault(); return false; };

        const links = track.querySelectorAll('.proj-thumb');
        links.forEach(link => link.addEventListener('click', onLinkClick, true));

        viewport.addEventListener("pointerdown", onPointerDown);
        viewport.addEventListener("pointermove", onPointerMove);
        viewport.addEventListener("pointerup", onPointerUp);
        viewport.addEventListener("pointercancel", onPointerUp);
        viewport.addEventListener('mousemove', handleMouseMove);
        viewport.addEventListener('mouseenter', handleMouseEnter);
        viewport.addEventListener('mouseleave', handleMouseLeave);
        viewport.addEventListener('contextmenu', handleContextMenu);
        viewport.addEventListener('selectstart', handleContextMenu);

        return () => {
            if (anim) anim.kill();
            isDown = false;
            viewport.classList.remove('dragging');
            links.forEach(link => link.removeEventListener('click', onLinkClick, true));
            viewport.removeEventListener("pointerdown", onPointerDown);
            viewport.removeEventListener("pointermove", onPointerMove);
            viewport.removeEventListener("pointerup", onPointerUp);
            viewport.removeEventListener("pointercancel", onPointerUp);
            viewport.removeEventListener('mousemove', handleMouseMove);
            viewport.removeEventListener('mouseenter', handleMouseEnter);
            viewport.removeEventListener('mouseleave', handleMouseLeave);
            viewport.removeEventListener('contextmenu', handleContextMenu);
            viewport.removeEventListener('selectstart', handleContextMenu);
        };
    }, [portfolio]);

    // ── Scroll-triggered animations via IntersectionObserver ──────────────────
    useEffect(() => {
        // Animate elements with .reveal class when they enter viewport
        const revealEls = document.querySelectorAll('.reveal');
        if (!revealEls.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        revealEls.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // ── Stat counter animation ────────────────────────────────────────────────
    useEffect(() => {
        const counters = document.querySelectorAll('.stat-number[data-target]');
        if (!counters.length) return;

        const animateCounter = (el) => {
            const target = parseInt(el.getAttribute('data-target'), 10);
            const suffix = el.getAttribute('data-suffix') || '';
            const duration = 1800;
            const start = performance.now();

            const update = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(eased * target);
                el.textContent = current + suffix;
                if (progress < 1) requestAnimationFrame(update);
            };
            requestAnimationFrame(update);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        counters.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const featured = portfolio || [];

    const scrollToProjects = () => {
        const projectsSection = document.querySelector('.projects-strip');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <Header />
            {/* ── HERO ── */}
            <section className="hero" ref={heroRef}>
                <Image
                    className="hero-img"
                    src={HERO_IMG}
                    alt="Featured project – EDRA Architect"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="hero-shade" />
                <div className="hero-bottom">
                    <span className="hero-meta">EDRA Arsitek— Jakarta, Indonesia</span>
                    <span className="hero-meta" style={{ opacity: 0.5 }}>Est. 1999</span>
                </div>
                <button
                    className="hero-scroll"
                    onClick={scrollToProjects}
                    aria-label="Scroll down to projects"
                >
                    <span className="hero-scroll-text">Scroll Down</span>
                    <span className="hero-scroll-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </button>
            </section>

            {/* ── PROJECT STRIP (horizontal gallery) ── */}
            {featured.length > 0 && (
                <section className="projects-strip" ref={stripRef}>
                    <div className="projects-track" ref={trackRef}>
                        {featured.map((p) => (
                            <Link
                                href={`/project/${p.id}`}
                                key={p.id}
                                className="proj-thumb"
                                aria-label={p.title}
                                onDragStart={(e) => e.preventDefault()}
                            >
                                <img src={p.image} alt={p.title} loading="lazy" draggable="false" />
                                <div className="proj-thumb-overlay" />
                                <div className="proj-thumb-caption">
                                    <span className="proj-thumb-title">{p.title}</span>
                                    <span className="proj-thumb-view">VIEW MORE</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* ── STATEMENT SECTION ── */}
            <section className="statement-section">
                <div className="container">
                    <h2 className="statement-main reveal reveal-up">
                        Innovative &amp; Inspiring Design Solutions
                    </h2>
                    <p className="statement-sub reveal reveal-up" style={{ transitionDelay: '0.15s' }}>
                        We Plan, Design Projects and Coordinate Construction for You
                    </p>
                </div>
            </section>

            {/* ── ABOUT SECTION ── */}
            <section className="home-about-section">
                <div className="home-about-container">
                    {/* Left Side - Content */}
                    <div className="home-about-content">
                        <div className="home-about-content-inner">
                            <div className="home-about-eyebrow reveal reveal-left">About EDRA</div>

                            <h2 className="home-about-title reveal reveal-up" style={{ transitionDelay: '0.1s' }}>
                                SHAPING INDONESIA&apos;S
                                <span className="title-highlight">ARCHITECTURAL</span>
                                LANDSCAPE
                            </h2>

                            <p className="home-about-lead reveal reveal-up" style={{ transitionDelay: '0.2s' }}>
                                Since 1999, PT. EDRA Arsitek Indonesia has been at the forefront
                                of architectural innovation, delivering projects that define spaces
                                and inspire communities.
                            </p>

                            <div className="home-about-principles">
                                {[
                                    { num: "01", title: "Design Excellence", desc: "Every project reflects our commitment to exceptional design and precision" },
                                    { num: "02", title: "Sustainable Innovation", desc: "Integrating environmental consciousness with cutting-edge solutions" },
                                    { num: "03", title: "Client Partnership", desc: "Collaborative approach ensuring vision becomes reality" },
                                ].map((p, i) => (
                                    <div className="principle-item reveal reveal-up" key={p.num} style={{ transitionDelay: `${0.1 * i + 0.3}s` }}>
                                        <div className="principle-icon">{p.num}</div>
                                        <div className="principle-text">
                                            <h4>{p.title}</h4>
                                            <p>{p.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/about" className="home-about-cta reveal reveal-up" style={{ transitionDelay: '0.6s' }}>
                                <span>Explore Our Story</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Stats & Image */}
                    <div className="home-about-visual reveal reveal-right">
                        <div className="home-about-image-wrapper">
                            <Image
                                src="/about-teaser.jpg"
                                alt="EDRA Architecture"
                                className="home-about-image"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            <div className="home-about-overlay"></div>
                        </div>

                        <div className="home-about-stats-card">
                            <div className="stats-grid">
                                <div className="stat-box">
                                    <div className="stat-number" data-target="25" data-suffix="+">25+</div>
                                    <div className="stat-label">Years<br />Experience</div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-number" data-target="200" data-suffix="+">200+</div>
                                    <div className="stat-label">Completed<br />Projects</div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-number" data-target="50" data-suffix="+">50+</div>
                                    <div className="stat-label">Expert<br />Team Members</div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-number" data-target="15" data-suffix="+">15+</div>
                                    <div className="stat-label">Industry<br />Awards</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICES TEASER ── */}
            <section className="home-services-section">
                <div className="container">
                    <h2 className="section-title reveal reveal-up">Our Services</h2>
                    <div className="home-services-grid">
                        {[
                            {
                                title: "Architecture",
                                id: 1,
                                description: "Full range of architectural services including design, technical consultancy, interior design, and conservation services."
                            },
                            {
                                title: "Management",
                                id: 2,
                                description: "Project management for residential, commercial and public facilities with full service from concept to completion."
                            },
                            {
                                title: "Construction",
                                id: 3,
                                description: "Strong construction project management with outstanding implementation and flawless delivery on time and budget."
                            },
                        ].map((service, i) => (
                            <div className="home-service-card reveal reveal-up" key={service.id} style={{ transitionDelay: `${i * 0.15}s` }}>
                                <div className="home-service-content">
                                    <h3 className="home-service-title">{service.title}</h3>
                                    <p className="home-service-description">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="home-services-button-wrapper reveal reveal-up" style={{ transitionDelay: '0.45s' }}>
                        <Link href="/services" className="liquid-glass-button">
                            <span>View All Services</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── CLIENT LOGOS CAROUSEL ── */}
            <section className="clients-carousel-section reveal reveal-up">
                <div className="clients-carousel-wrapper">
                    <div className="clients-carousel-track">
                        {[
                            { name: "PILAR ARTHA MANDIRI", logo: "/client-4.png" },
                            { name: "BINAKARYA PROPERTINDO GROUP", logo: "/client-5.png" },
                            { name: "PT. ANUGRAH DUTA MANDIRI", logo: "/client-1.png" },
                            { name: "MEGAKARYA PROPERTI GROUP", logo: "/client-2.png" },
                            { name: "RURARAHA DEVELOPMENT", logo: "/client-3.png" },
                        ]
                            .concat([
                                { name: "PILAR ARTHA MANDIRI", logo: "/client-4.png" },
                                { name: "BINAKARYA PROPERTINDO GROUP", logo: "/client-5.png" },
                                { name: "PT. ANUGRAH DUTA MANDIRI", logo: "/client-1.png" },
                                { name: "MEGAKARYA PROPERTI GROUP", logo: "/client-2.png" },
                                { name: "RURARAHA DEVELOPMENT", logo: "/client-3.png" },
                            ])
                            .concat([
                                { name: "PILAR ARTHA MANDIRI", logo: "/client-4.png" },
                                { name: "BINAKARYA PROPERTINDO GROUP", logo: "/client-5.png" },
                                { name: "PT. ANUGRAH DUTA MANDIRI", logo: "/client-1.png" },
                                { name: "MEGAKARYA PROPERTI GROUP", logo: "/client-2.png" },
                                { name: "RURARAHA DEVELOPMENT", logo: "/client-3.png" },
                            ])
                            .concat([
                                { name: "PILAR ARTHA MANDIRI", logo: "/client-4.png" },
                                { name: "BINAKARYA PROPERTINDO GROUP", logo: "/client-5.png" },
                                { name: "PT. ANUGRAH DUTA MANDIRI", logo: "/client-1.png" },
                                { name: "MEGAKARYA PROPERTI GROUP", logo: "/client-2.png" },
                                { name: "RURARAHA DEVELOPMENT", logo: "/client-3.png" },
                            ])
                            .map((client, index) => (
                                <div className="client-logo-item" key={index}>
                                    <Image src={client.logo} alt={client.name} width={150} height={100} style={{ objectFit: "contain" }} />
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* ── PROJECT CTA ── */}
            <section className="project-cta-section">
                <div className="project-cta-background">LET&apos;S TALK</div>
                <div className="project-cta-content reveal reveal-up">
                    <h2 className="project-cta-title">
                        ABOUT<br />YOUR PROJECT!
                    </h2>
                    <Link href="/contact" className="project-cta-button">
                        SEND REQUEST
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </section>
            <Footer />
        </>
    );
}
