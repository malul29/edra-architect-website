"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <>
            <Header />
            <div className="about-page-redesign">

                {/* ── HERO ── */}
                <section className="about-redesign-hero">
                    <div className="about-redesign-hero-content">
                        <p className="section-label">About EDRA</p>
                        <h1 className="about-redesign-hero-title">
                            Shaping Indonesia's<br />
                            Built Environment<br />
                            <span className="highlight">for 25+ Years</span>
                        </h1>
                    </div>
                    <div className="about-redesign-hero-watermark">EDRA</div>
                </section>

                {/* ── STORY ── */}
                <section className="about-redesign-story">
                    <div className="container">
                        <div className="about-redesign-story-wrapper">
                            {/* Decorative Text */}
                            <div className="about-redesign-story-deco" aria-hidden="true">
                                STORY
                            </div>
                            
                            {/* Content Grid */}
                            <div className="about-redesign-story-content">
                                {/* Image Column */}
                                <div className="about-redesign-story-image-wrap">
                                    <div className="about-redesign-story-image-accent"></div>
                                    <div className="about-redesign-story-image-frame">
                                        <Image
                                            src="/about-teaser.jpg"
                                            alt="PT EDRA Arsitek Indonesia Story"
                                            fill
                                            style={{ objectFit: "cover" }}
                                            sizes="(max-width: 992px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                                
                                {/* Text Column */}
                                <div className="about-redesign-story-text">
                                    <h2 className="about-redesign-story-title">
                                        Architectural Excellence<br />
                                        <span>Since 1999</span>
                                    </h2>
                                    <div className="about-redesign-story-divider"></div>
                                    <p className="lead">
                                        PT. EDRA Arsitek Indonesia has been at the forefront of architectural excellence
                                        for over 25 years, transforming ideas into iconic spaces across Indonesia.
                                    </p>
                                    <p>
                                        PT. EDRA Arsitek Indonesia was established in 1999 as an architect studio.
                                        With 25+ years of experience, we provide comprehensive services in
                                        planning, concept design, project supervision, tender, and construction across
                                        real estate, apartments, hotels, malls, office buildings, and land area utilization.
                                    </p>
                                    <p>
                                        Led by experienced professionals, our team combines technical expertise with creative
                                        vision. We are committed to delivering every creation as a masterpiece, maintaining
                                        professionalism and earning our clients' trust through exceptional work.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── STATS ── */}
                <section className="about-redesign-stats">
                    <div className="container">
                        <div className="about-redesign-stats-grid">
                            <div className="about-redesign-stat-card">
                                <div className="about-redesign-stat-number">25+</div>
                                <div className="about-redesign-stat-label">Years of Excellence</div>
                                <p>Over two decades of architectural innovation</p>
                            </div>
                            <div className="about-redesign-stat-card">
                                <div className="about-redesign-stat-number">200+</div>
                                <div className="about-redesign-stat-label">Projects Delivered</div>
                                <p>Across residential, commercial, and public sectors</p>
                            </div>
                            <div className="about-redesign-stat-card">
                                <div className="about-redesign-stat-number">50+</div>
                                <div className="about-redesign-stat-label">Expert Team</div>
                                <p>Architects, designers, and project managers</p>
                            </div>
                            <div className="about-redesign-stat-card">
                                <div className="about-redesign-stat-number">15+</div>
                                <div className="about-redesign-stat-label">Cities Served</div>
                                <p>Building communities nationwide</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── ACHIEVEMENTS ── */}
                <section className="about-redesign-services">
                    <div className="container">
                        <div className="about-redesign-services-header">
                            <h2>What We Have Done</h2>
                            <p>Delivering exceptional projects across diverse sectors throughout Indonesia</p>
                        </div>
                        <div className="about-redesign-services-grid">
                            <div className="about-redesign-service-card">
                                <div className="about-redesign-service-icon">01</div>
                                <h3>High-Rise Buildings</h3>
                                <p>
                                    Successfully completed numerous residential towers, commercial office buildings,
                                    and mixed-use developments. Our portfolio includes iconic structures that define
                                    city skylines across Indonesia.
                                </p>
                            </div>
                            <div className="about-redesign-service-card">
                                <div className="about-redesign-service-icon">02</div>
                                <h3>Luxury Residences</h3>
                                <p>
                                    Designed and built premium villas, high-end apartments, and exclusive residential
                                    estates. Each project showcases our commitment to craftsmanship and attention
                                    to detail.
                                </p>
                            </div>
                            <div className="about-redesign-service-card">
                                <div className="about-redesign-service-icon">03</div>
                                <h3>Hospitality Projects</h3>
                                <p>
                                    Delivered world-class hotels, resorts, and boutique accommodations that blend
                                    functionality with memorable guest experiences. Creating spaces that inspire
                                    and welcome.
                                </p>
                            </div>
                            <div className="about-redesign-service-card">
                                <div className="about-redesign-service-icon">04</div>
                                <h3>Public Facilities</h3>
                                <p>
                                    Developed institutional buildings, community centers, and civic spaces that serve
                                    the public good. Infrastructure that strengthens communities and enhances quality
                                    of life.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── VALUES ── */}
                <section className="about-redesign-values">
                    <div className="about-redesign-values-container">
                        <h2 className="about-redesign-values-title">Our Core Values</h2>
                        <div className="about-redesign-values-grid">
                            <div className="about-redesign-value-item">
                                <h3>Excellence</h3>
                                <p>We pursue the highest standards in every aspect of our work, never settling for mediocrity.</p>
                            </div>
                            <div className="about-redesign-value-item">
                                <h3>Innovation</h3>
                                <p>We embrace new technologies and methods while respecting timeless design principles.</p>
                            </div>
                            <div className="about-redesign-value-item">
                                <h3>Integrity</h3>
                                <p>We build lasting relationships through transparency, honesty, and ethical practices.</p>
                            </div>
                            <div className="about-redesign-value-item">
                                <h3>Sustainability</h3>
                                <p>We design for longevity and environmental responsibility in every project we undertake.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ── TEAM ── */}
                <section className="mt-section">
                    {/* Organic accent blobs */}
                    <div className="mt-blob mt-blob--1" aria-hidden="true" />
                    <div className="mt-blob mt-blob--2" aria-hidden="true" />
                    <div className="mt-blob mt-blob--3" aria-hidden="true" />
                    <div className="mt-blob mt-blob--4" aria-hidden="true" />

                    {/* Photo cards */}
                    <div className="mt-cards">
                        {[
                            { 
                                img: "/Megawati Nyonri.png", 
                                name: "Ar. Megawati Nyonri", 
                                role: "President Director", 
                                tilt: "left",
                                imgStyle: { objectFit: "cover", objectPosition: "bottom", transform: "scale(1.15) translateY(4%)" }
                            },
                            { 
                                img: "/Ning Widyastuti.png", 
                                name: "Ning Widyastuti", 
                                role: "Operational Director", 
                                tilt: "right",
                                imgStyle: { objectFit: "cover", objectPosition: "bottom", transform: "scale(1.4) translateY(12%)" }
                            },
                        ].map((m) => (
                            <div className={`mt-card mt-card--${m.tilt}`} key={m.name}>
                                <div className="mt-card-backdrop" />
                                <div className="mt-card-frame">
                                    <Image
                                        src={m.img}
                                        alt={m.name}
                                        fill
                                        style={m.imgStyle}
                                        sizes="(max-width: 768px) 45vw, 280px"
                                    />
                                </div>
                                <div className="mt-card-info">
                                    <h3>{m.name}</h3>
                                    <div className="mt-card-divider" aria-hidden="true" />
                                    <p>{m.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Heading below */}
                    <div className="mt-heading">
                        <h2 className="mt-heading-title">MEET THE<br />TEAM</h2>
                        <p className="mt-heading-sub">
                            A passionate group of architects and visionaries dedicated to
                            creating meaningful and enduring spaces.
                        </p>
                    </div>
                </section>

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

            </div>
            <Footer />
        </>
    );
}
