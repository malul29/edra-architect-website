"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import { resolveMediaUrl } from "@/lib/mediaUrl";

const CATS = ["All", "High Rise", "Mall", "Residence", "Private House", "Office", "Public Facility", "Interior"];

const CATEGORY_TITLES = {
    "All": "WHAT WE HAVE DONE",
    "High Rise": "HIGH RISE BUILDING",
    "Mall": "SHOPPING MALL",
    "Residence": "RESIDENTIAL PROJECTS",
    "Private House": "PRIVATE HOUSING",
    "Office": "OFFICE BUILDING",
    "Public Facility": "PUBLIC FACILITY",
    "Interior": "INTERIOR DESIGN"
};

// Local fallback images committed to git
const FALLBACK_IMAGES = {
    "All": "/media/gateway-pasteur-bandung-main.png",
    "High Rise": "/media/tod-poris-plawad-gallery-0.png",
    "Mall": "/media/gateway-pasteur-bandung-gallery-0.png",
    "Residence": "/media/la-montana-apartment-main.png",
    "Private House": "/media/jimbaran-avenue-main.png",
    "Office": "/media/gateway-pasteur-bandung-gallery-1.png",
    "Public Facility": "/media/tod-poris-plawad-gallery-1.png",
    "Interior": "/media/the-mansion-main.png",
};

export default function ProjectsClient({ initialData }) {
    const [active, setActive] = useState("All");
    const PAGE_SIZE = 12;
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    useEffect(() => { setVisibleCount(PAGE_SIZE); }, [active]);

    const filtered = active === "All" ? initialData : initialData.filter(p => p.category === active);
    const visible = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;
    const heroTitle = CATEGORY_TITLES[active] || active.toUpperCase();

    const masonryItems = useMemo(() => {
        const prepared = visible.map((project, index) => ({
            project,
            variant: getEditorialVariant(project.id, index),
        }));

        const columns = [[], [], [], []];
        const heights = [0, 0, 0, 0];
        const weightMap = { standard: 1, tall: 1.5, feature: 0.85, wide: 0.9, landscape: 0.8 };

        for (const item of prepared) {
            const targetCol = heights.indexOf(Math.min(...heights));
            columns[targetCol].push(item);
            heights[targetCol] += weightMap[item.variant] || 1;
        }

        return columns.flat();
    }, [visible]);

    const heroImage = useMemo(() => {
        if (!initialData || initialData.length === 0) {
            return FALLBACK_IMAGES[active] || FALLBACK_IMAGES["All"];
        }
        const categoryProjects = active === "All" ? initialData : initialData.filter(p => p.category === active);
        if (categoryProjects.length > 0) {
            const randomProject = categoryProjects[Math.floor(Math.random() * categoryProjects.length)];
            const resolved = resolveMediaUrl(randomProject.image);
            if (resolved && resolved !== "/edra-logo.png") return resolved;
        }
        return FALLBACK_IMAGES[active] || FALLBACK_IMAGES["All"];
    }, [initialData, active]);

    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="services-hero" style={{ position: "relative", overflow: "hidden", height: "25vh", minHeight: "25vh" }}>
                <SafeImage
                    src={heroImage}
                    fallbackSrc={FALLBACK_IMAGES["All"]}
                    alt={heroTitle}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                    priority
                    quality={75}
                />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 100%)",
                    zIndex: 1,
                    pointerEvents: "none"
                }} />
                <div className="services-hero-content" style={{ position: "relative", zIndex: 2 }}>
                    <p className="services-hero-label">OUR PROJECTS</p>
                    <h1 className="services-hero-title" style={{ fontSize: "clamp(1.8rem, 3.5vw, 4rem)" }}>{heroTitle}</h1>
                </div>
            </section>

            <div style={{ minHeight: "100vh", background: "#000000", color: "#f5f5f5" }}>
                {/* ── FILTER TABS ── */}
                <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    flexWrap: "wrap", gap: ".5rem", padding: "1.75rem var(--px) 1.25rem",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                }}>
                    <div style={{ display: "flex", gap: "clamp(.8rem,2.5vw,2.5rem)", flexWrap: "wrap" }}>
                        {CATS.map(c => (
                            <button key={c} onClick={() => setActive(c)} style={{
                                background: "none", border: "none", padding: "6px 0",
                                fontSize: ".85rem", letterSpacing: ".14em", textTransform: "uppercase",
                                cursor: "pointer",
                                color: active === c ? "#ffffff" : "rgba(255,255,255,.45)",
                                fontWeight: active === c ? 600 : 400,
                                borderBottom: active === c ? "2px solid #ffffff" : "2px solid transparent",
                                transition: "color .2s, border-color .2s",
                            }}>{c}</button>
                        ))}
                    </div>
                    <span className="label" style={{ color: "rgba(255,255,255,.55)" }}>{filtered.length} Projects</span>
                </div>

                {/* ── MASONRY GRID ── */}
                <div style={{ padding: "2rem 0 4rem" }}>
                    {initialData.length === 0 ? (
                        <p className="label" style={{ textAlign: "center", padding: "8vh", color: "rgba(255,255,255,.55)" }}>No projects yet.</p>
                    ) : (
                        <div className="projects-masonry-grid">
                            {masonryItems.map((item, i) => <ProjectCard key={`${item.project.id}-${i}`} project={item.project} variant={item.variant} revealIndex={i} />)}
                        </div>
                    )}
                </div>

                {/* ── VIEW MORE BUTTON ── */}
                {hasMore && (
                    <div style={{ display: "flex", justifyContent: "center", paddingBottom: "6rem" }}>
                        <button
                            onClick={() => setVisibleCount(v => v + PAGE_SIZE)}
                            style={{
                                background: "transparent", border: "1px solid rgba(255,255,255,0.35)",
                                color: "#fff", padding: "0.85rem 2.8rem", fontSize: ".8rem",
                                letterSpacing: ".18em", textTransform: "uppercase", cursor: "pointer",
                                fontFamily: "var(--sans)", fontWeight: 500,
                                transition: "background .2s, border-color .2s, color .2s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#111"; e.currentTarget.style.borderColor = "#fff"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; }}
                        >
                            View More ({filtered.length - visibleCount} remaining)
                        </button>
                    </div>
                )}
            </div>

            {/* ── PROJECT CTA ── */}
            <section className="project-cta-section">
                <div className="project-cta-background">LET'S TALK</div>
                <div className="project-cta-content">
                    <h2 className="project-cta-title">ABOUT<br />YOUR PROJECT!</h2>
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

function ProjectCard({ project, variant, revealIndex }) {
    const imageSrc = resolveMediaUrl(project.image);
    const fallback = FALLBACK_IMAGES[project.category] || FALLBACK_IMAGES["All"];

    return (
        <Link
            href={`/project/${project.slug || project.id}`}
            className="project-masonry-card"
            data-variant={variant}
            style={{ "--reveal-delay": `${(revealIndex % 20) * 45}ms` }}
        >
            <div className="project-masonry-frame">
                <SafeImage
                    src={imageSrc}
                    fallbackSrc={fallback}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
                    className="project-masonry-image"
                    loading="lazy"
                    quality={75}
                />
                <div className="project-masonry-overlay">
                    <h3 className="project-masonry-title">{project.title}</h3>
                    <p className="project-masonry-location">{project.location}</p>
                </div>
            </div>
        </Link>
    );
}

function getEditorialVariant(id, index) {
    const slot = index % 12;
    const seed = hashId(`${id}-${index}`);

    // Predominantly portrait blocks with occasional tall cards.
    if ((slot === 2 || slot === 5 || slot === 9 || slot === 11) && seed % 100 < 82) return "tall";

    // Add a rare horizontal break to avoid repetitive rhythm.
    if ((slot === 4 || slot === 8) && seed % 100 < 28) return "landscape";

    return "standard";
}

function hashId(id) {
    let hash = 0;
    const value = String(id);
    for (let i = 0; i < value.length; i++) {
        hash = (Math.imul(31, hash) + value.charCodeAt(i)) >>> 0;
    }
    return hash;
}
