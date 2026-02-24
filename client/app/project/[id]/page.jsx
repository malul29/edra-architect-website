"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useApi } from "../../../hooks/useApi";
import Lightbox from "../../../components/Lightbox";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function ProjectDetailPage({ params }) {
    const { id } = use(params);
    const router = useRouter();
    const { data: apiData } = useApi("/portfolio");
    const [project, setProject] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    useEffect(() => {
        if (apiData && apiData.length > 0) {
            // Handle both numeric and string IDs
            const found = apiData.find(p => {
                if (typeof p.id === 'number') {
                    return p.id === parseInt(id);
                }
                return String(p.id) === String(id);
            });

            if (found) {
                setProject(found);
            } else {
                router.push("/projects");
            }
        }
    }, [id, apiData, router]);

    // Parse gallery images - handle both string and array
    let galleryImages = [];
    if (project?.gallery) {
        if (typeof project.gallery === 'string') {
            try {
                galleryImages = JSON.parse(project.gallery);
            } catch {
                galleryImages = [project.gallery];
            }
        } else if (Array.isArray(project.gallery)) {
            galleryImages = project.gallery;
        }
    }

    // If no gallery, use main image
    if (galleryImages.length === 0 && project?.image) {
        galleryImages = [project.image];
    }

    const handleOpenLightbox = (index) => {
        setLightboxIndex(index);
    };

    const handleCloseLightbox = () => {
        setLightboxIndex(null);
    };

    const handleNextImage = () => {
        if (lightboxIndex !== null && galleryImages.length > 0) {
            setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
        }
    };

    const handlePrevImage = () => {
        if (lightboxIndex !== null && galleryImages.length > 0) {
            setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    if (!project) {
        return (
            <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="project-detail-page">
            <Header />
            {/* Hero Section */}
            <section className="project-detail-hero">
                <div className="project-detail-hero-img">
                    <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} priority />
                </div>
                <div className="project-detail-hero-overlay" />
                <div className="project-detail-hero-content">
                    <div className="project-detail-meta">
                        <span>{project.category}</span>
                        <span>·</span>
                        <span>{project.year}</span>
                    </div>
                    <h1 className="project-detail-title">{project.title}</h1>
                    <p className="project-detail-location">{project.location}</p>
                </div>
            </section>

            {/* Description Section */}
            <section className="project-detail-description">
                <div className="project-detail-container">
                    <div className="project-detail-desc-content">
                        <h2>About the Project</h2>
                        <p>{project.description || "A stunning architectural masterpiece that combines innovative design with functional excellence. This project represents our commitment to creating spaces that inspire and endure."}</p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            {galleryImages.length > 0 && (
                <section className="project-detail-gallery-section">
                    <div className="project-detail-container">
                        <h2 className="project-detail-gallery-title">Project Gallery</h2>
                    </div>

                    <div className="project-gallery-grid">
                        {galleryImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="gallery-grid-item"
                                onClick={() => handleOpenLightbox(idx)}
                            >
                                <Image src={img} alt={`${project.title} - ${idx + 1}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                                <div className="gallery-grid-overlay">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="15 3 21 3 21 9" />
                                        <polyline points="9 21 3 21 3 15" />
                                        <line x1="21" y1="3" x2="14" y2="10" />
                                        <line x1="3" y1="21" x2="10" y2="14" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Lightbox */}
            <Lightbox
                images={galleryImages}
                currentIndex={lightboxIndex}
                onClose={handleCloseLightbox}
                onNext={handleNextImage}
                onPrev={handlePrevImage}
            />

            {/* Back Button */}
            <section className="project-detail-back">
                <div className="project-detail-container">
                    <button onClick={() => router.back()} className="detail-back-btn">
                        ← Back to Projects
                    </button>
                </div>
            </section>
            <Footer />
        </div>
    );
}
