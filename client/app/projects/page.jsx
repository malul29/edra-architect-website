"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApi } from "../../hooks/useApi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const CATS = ["All", "High Rise", "Mall", "Residence", "Private House", "Office", "Public Facility", "Interior"];

// Mapping from category to hero title
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

// Fallback images if no project images available
const FALLBACK_IMAGES = {
    "All": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    "High Rise": "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop",
    "Mall": "https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?q=80&w=2070&auto=format&fit=crop",
    "Residence": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    "Private House": "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&w=2070&auto=format&fit=crop",
    "Office": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    "Public Facility": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    "Interior": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
};

export default function ProjectsPage() {
    const { data: apiData, loading } = useApi("/portfolio");
    const [active, setActive] = useState("All");

    const filtered = active === "All" ? (apiData || []) : (apiData || []).filter(p => p.category === active);

    // Get the title based on active category, fallback to category name if not mapped
    const heroTitle = CATEGORY_TITLES[active] || active.toUpperCase();

    // Get hero image from actual project data
    const heroImage = useMemo(() => {
        if (!apiData || apiData.length === 0) {
            return FALLBACK_IMAGES[active] || FALLBACK_IMAGES["All"];
        }

        // Get a random project from the active category
        const categoryProjects = active === "All" ? apiData : apiData.filter(p => p.category === active);

        if (categoryProjects.length > 0) {
            // Pick a random project for variety
            const randomProject = categoryProjects[Math.floor(Math.random() * categoryProjects.length)];
            return randomProject.image || FALLBACK_IMAGES[active] || FALLBACK_IMAGES["All"];
        }

        return FALLBACK_IMAGES[active] || FALLBACK_IMAGES["All"];
    }, [apiData, active]);

    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="services-hero" style={{
                background: `url(${heroImage}) center/cover no-repeat`,
                position: "relative"
            }}>
                {/* Dark overlay for readability */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.5)",
                    zIndex: 1
                }}></div>

                <div className="services-hero-content" style={{ position: "relative", zIndex: 2 }}>
                    <p className="services-hero-label">OUR PROJECTS</p>
                    <h1 className="services-hero-title" style={{ fontSize: "clamp(2rem, 7vw, 8rem)", whiteSpace: "nowrap" }}>{heroTitle}</h1>
                </div>
            </section>

            <div style={{ minHeight: "100vh", background: "#1a1a1a" }}>
                {/* ── FILTER TABS ── */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: ".5rem",
                    padding: "3rem var(--px) 2rem",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                }}>
                    <div style={{ display: "flex", gap: "clamp(.8rem,2.5vw,2.5rem)", flexWrap: "wrap" }}>
                        {CATS.map(c => (
                            <button key={c} onClick={() => setActive(c)} style={{
                                background: "none",
                                border: "none",
                                padding: "6px 0",
                                fontSize: ".85rem",
                                letterSpacing: ".14em",
                                textTransform: "uppercase",
                                cursor: "pointer",
                                color: active === c ? "#ffffff" : "rgba(255,255,255,.5)",
                                fontWeight: active === c ? 600 : 400,
                                borderBottom: active === c ? "2px solid #ffffff" : "2px solid transparent",
                                transition: "color .2s, border-color .2s",
                            }}>{c}</button>
                        ))}
                    </div>
                    <span className="label" style={{ color: "rgba(255,255,255,.6)" }}>{filtered.length} Projects</span>
                </div>

                {/* ── MASONRY GRID ── */}
                <div style={{ padding: "2rem 0.5rem 8rem" }}>
                    {loading ? (
                        <p className="label" style={{ textAlign: "center", padding: "8vh", color: "rgba(255,255,255,.6)" }}>Loading…</p>
                    ) : (
                        <div style={{
                            columns: "4 280px",
                            columnGap: "0.5rem"
                        }}>
                            {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
                        </div>
                    )}
                </div>
            </div>

            {/* ── PROJECT CTA ── */}
            <section className="project-cta-section">
                <div className="project-cta-background">LET'S TALK</div>
                <div className="project-cta-content">
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

// Deterministic aspect ratio based on project id (stable, no re-shuffle on re-render)
function hashId(id) {
    let h = 0;
    const s = String(id);
    for (let i = 0; i < s.length; i++) {
        h = (Math.imul(31, h) + s.charCodeAt(i)) >>> 0;
    }
    return h;
}

// 5 aspect ratio options: [paddingBottom %, label]
const ASPECT_RATIOS = [
    "133%",   // portrait tall   (3:4)
    "120%",   // portrait        (5:6)
    "100%",   // square          (1:1)
    "75%",    // landscape       (4:3)
    "60%",    // landscape wide  (5:3)
];

function ProjectCard({ project }) {
    const [hov, setHov] = useState(false);
    const ratio = ASPECT_RATIOS[hashId(project.id) % ASPECT_RATIOS.length];

    return (
        <Link
            href={`/project/${project.id}`}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                breakInside: "avoid",
                marginBottom: "0.5rem",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "2px",
                display: "block",
                textDecoration: "none",
            }}
        >
            {/* Fixed-ratio frame */}
            <div style={{ position: "relative", width: "100%", paddingBottom: ratio, overflow: "hidden" }}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                        transition: "transform .65s cubic-bezier(.25,.46,.45,.94)",
                        transform: hov ? "scale(1.06)" : "scale(1)",
                    }}
                />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: hov
                        ? "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.78) 100%)"
                        : "rgba(0,0,0,0)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    padding: "1.5rem",
                    opacity: hov ? 1 : 0,
                    transition: "opacity .35s ease, background .35s ease",
                }}>
                    <h3 style={{
                        fontFamily: "var(--sans)",
                        fontSize: "clamp(0.95rem, 1.5vw, 1.3rem)",
                        fontWeight: 700,
                        color: "#fff",
                        margin: "0 0 .3rem",
                        lineHeight: 1.15,
                        letterSpacing: ".02em",
                        textTransform: "uppercase",
                    }}>
                        {project.title}
                    </h3>
                    <p style={{
                        fontSize: ".7rem",
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.75)",
                        margin: 0,
                        fontWeight: 400,
                    }}>
                        {project.location}
                    </p>
                </div>
            </div>
        </Link>
    );
}
