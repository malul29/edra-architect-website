import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import gsap from "gsap";

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

    // Initialize transform on mount
    if (currentScrollY > window.innerHeight * 0.2) {
      img.style.transform = `scale(1.04) translateY(${currentScrollY * 0.12}px)`;
    } else {
      img.style.transform = `scale(1.04) translate(0px, 0px)`;
    }

    // Mouse move parallax with RAF
    let mouseX = 0;
    let mouseY = 0;
    let mouseAnimFrame = null;

    const updateMouseParallax = () => {
      if (!img || currentScrollY > window.innerHeight * 0.2) return;

      const moveX = mouseX * 2; // 2px max movement
      const moveY = mouseY * 2;

      img.style.transform = `scale(1.04) translate(${moveX}px, ${moveY}px)`;
      mouseAnimFrame = null;
    };

    const onMouseMove = (e) => {
      if (currentScrollY > window.innerHeight * 0.2) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate movement range (-1 to 1)
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      mouseX = xPercent;
      mouseY = yPercent;

      if (!mouseAnimFrame) {
        mouseAnimFrame = requestAnimationFrame(updateMouseParallax);
      }
    };

    // Scroll parallax with RAF for smooth updates
    const updateScrollParallax = () => {
      if (!img) {
        ticking = false;
        return;
      }

      if (currentScrollY > window.innerHeight * 0.2) {
        // After scrolling past 20% of viewport, use scroll parallax only
        // Reduced multiplier from 0.18 to 0.12 for smoother effect
        const translateY = currentScrollY * 0.12;
        img.style.transform = `scale(1.04) translateY(${translateY}px)`;
      } else {
        // Reset to center when at top
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
      if (mouseAnimFrame) {
        cancelAnimationFrame(mouseAnimFrame);
      }
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
      e.preventDefault(); // Prevent browser link preview/tooltip and drag behaviors
      isDown = true;
      hasDragged = false;
      if (anim) anim.kill();
      startX = e.clientX;
      startPos = currentX;
      lastPointerX = e.clientX;
      lastTime = performance.now();
      velocity = 0;
      viewport.classList.add('dragging');

      // Capture pointer for reliable drag tracking
      if (viewport.setPointerCapture) {
        try {
          viewport.setPointerCapture(e.pointerId);
        } catch (err) {
          console.warn('Pointer capture failed:', err);
        }
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
        onUpdate: () => {
          currentX = gsap.getProperty(track, "x");
        },
      });
    };

    const onPointerUp = (e) => {
      if (!isDown) return;
      isDown = false;
      viewport.classList.remove('dragging');

      // Release pointer capture
      if (viewport.releasePointerCapture && e.pointerId != null) {
        try {
          viewport.releasePointerCapture(e.pointerId);
        } catch (err) {
          console.warn('Pointer release failed:', err);
        }
      }

      if (hasDragged) {
        finishInertia();
      } else {
        // Programmatically trigger a click if it was just a tap (not a drag)
        // We do this because e.preventDefault() in pointerdown blocks native clicks
        // We find the closest anchor tag that was tapped
        const targetLink = e.target.closest('a');
        if (targetLink && targetLink.href) {
          // Trigger navigation programmatically
          targetLink.click();
        }
      }

      // Always re-check hovering state after drag ends
      const rect = viewport.getBoundingClientRect();
      if (e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom) {
        viewport.classList.add('hovering');
      } else {
        viewport.classList.remove('hovering');
      }
    };

    // Prevent link navigation when dragging
    const onLinkClick = (e) => {
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Custom cursor tracking
    const handleMouseMove = (e) => {
      const rect = viewport.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      viewport.style.setProperty("--cursor-x", `${x}%`);
      viewport.style.setProperty("--cursor-y", `${y}%`);
    };

    const handleMouseEnter = () => {
      viewport.classList.add('hovering');
    };

    const handleMouseLeave = () => {
      viewport.classList.remove('hovering');
    };

    // Prevent context menu and long touches that might trigger browser UI
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Attach click handlers to all project links
    const links = track.querySelectorAll('.proj-thumb');
    links.forEach(link => {
      link.addEventListener('click', onLinkClick, true);
    });

    // Add all event listeners
    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", onPointerUp);
    viewport.addEventListener("pointercancel", onPointerUp);
    viewport.addEventListener('mousemove', handleMouseMove);
    viewport.addEventListener('mouseenter', handleMouseEnter);
    viewport.addEventListener('mouseleave', handleMouseLeave);
    viewport.addEventListener('contextmenu', handleContextMenu);
    viewport.addEventListener('selectstart', handleContextMenu); // Prevent text selection UI

    return () => {
      if (anim) anim.kill();
      isDown = false;
      viewport.classList.remove('dragging');

      // Remove link click handlers
      links.forEach(link => {
        link.removeEventListener('click', onLinkClick, true);
      });

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

  const featured = portfolio;

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.projects-strip');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" ref={heroRef}>
        <img
          className="hero-img"
          src={HERO_IMG}
          alt="Featured project – EDRA Architect"
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
                to={`/project/${p.id}`}
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
          <h2 className="statement-main">
            Innovative & Inspiring Design Solutions
          </h2>
          <p className="statement-sub">
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
              <div className="home-about-eyebrow">About EDRA</div>

              <h2 className="home-about-title">
                SHAPING INDONESIA'S
                <span className="title-highlight">ARCHITECTURAL</span>
                LANDSCAPE
              </h2>

              <p className="home-about-lead">
                Since 1999, PT. EDRA Arsitek Indonesia has been at the forefront
                of architectural innovation, delivering projects that define spaces
                and inspire communities.
              </p>

              <div className="home-about-principles">
                <div className="principle-item">
                  <div className="principle-icon">01</div>
                  <div className="principle-text">
                    <h4>Design Excellence</h4>
                    <p>Every project reflects our commitment to exceptional design and precision</p>
                  </div>
                </div>
                <div className="principle-item">
                  <div className="principle-icon">02</div>
                  <div className="principle-text">
                    <h4>Sustainable Innovation</h4>
                    <p>Integrating environmental consciousness with cutting-edge solutions</p>
                  </div>
                </div>
                <div className="principle-item">
                  <div className="principle-icon">03</div>
                  <div className="principle-text">
                    <h4>Client Partnership</h4>
                    <p>Collaborative approach ensuring vision becomes reality</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="home-about-cta">
                <span>Explore Our Story</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side - Stats & Image */}
          <div className="home-about-visual">
            <div className="home-about-image-wrapper">
              <img
                src="/about-teaser.jpg"
                alt="EDRA Architecture"
                className="home-about-image"
              />
              <div className="home-about-overlay"></div>
            </div>

            <div className="home-about-stats-card">
              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Years<br />Experience</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Completed<br />Projects</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Expert<br />Team Members</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">15+</div>
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
          <h2 className="section-title">Our Services</h2>
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
            ].map((service) => (
              <div className="home-service-card" key={service.id}>
                <div className="home-service-content">
                  <h3 className="home-service-title">{service.title}</h3>
                  <p className="home-service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="home-services-button-wrapper">
            <Link to="/services" className="liquid-glass-button">
              <span>View All Services</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS CAROUSEL ── */}
      <section className="clients-carousel-section">
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
                  <img src={client.logo} alt={client.name} />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT CTA ── */}
      <section className="project-cta-section">
        <div className="project-cta-background">LET'S TALK</div>
        <div className="project-cta-content">
          <h2 className="project-cta-title">
            ABOUT<br />YOUR PROJECT!
          </h2>
          <Link to="/contact" className="project-cta-button">
            SEND REQUEST
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
