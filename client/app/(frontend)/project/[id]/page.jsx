"use client";

import { useEffect, useMemo, useState, use } from "react";
import { useRouter } from "next/navigation";
import { useApi } from "../../../../hooks/useApi";
import Lightbox from "../../../../components/Lightbox";
import ThumbnailCarousel from "../../../../components/ThumbnailCarousel";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import SafeImage from "@/components/SafeImage";
import { resolveMediaUrl } from "@/lib/mediaUrl";

function toYouTubeEmbedURL(value) {
    if (!value || typeof value !== "string") return null;

    const raw = value.trim();
    if (!raw) return null;

    const normalized = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;

    try {
        const url = new URL(normalized);
        const host = url.hostname.replace(/^www\./i, "").toLowerCase();
        let videoId = "";

        if (host === "youtu.be") {
            videoId = url.pathname.replace(/^\//, "").split("/")[0];
        } else if (host === "youtube.com" || host === "m.youtube.com") {
            if (url.pathname.startsWith("/watch")) {
                videoId = url.searchParams.get("v") || "";
            } else if (url.pathname.startsWith("/embed/")) {
                videoId = url.pathname.split("/embed/")[1]?.split("/")[0] || "";
            } else if (url.pathname.startsWith("/shorts/")) {
                videoId = url.pathname.split("/shorts/")[1]?.split("/")[0] || "";
            }
        }

        if (!videoId) return null;

        return `https://www.youtube.com/embed/${videoId}`;
    } catch {
        return null;
    }
}

export default function ProjectDetailPage({ params }) {
    const { id } = use(params);
    const router = useRouter();
    const { data: apiData } = useApi("/portfolio");
    const [project, setProject] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [videoShouldAutoplay, setVideoShouldAutoplay] = useState(false);

    useEffect(() => {
        if (apiData && apiData.length > 0) {
            // Match by slug first, then fall back to id for backwards compatibility
            const found = apiData.find(p => p.slug === id) ||
                apiData.find(p => {
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

    const galleryImages = useMemo(() => {
        if (!project) return [];

        const parsed = [];
        if (project.gallery) {
            if (typeof project.gallery === "string") {
                try {
                    const json = JSON.parse(project.gallery);
                    if (Array.isArray(json)) {
                        parsed.push(...json.map((item) => resolveMediaUrl(item?.image || item?.imageUrl || item)));
                    } else {
                        parsed.push(resolveMediaUrl(json?.image || json?.imageUrl || json));
                    }
                } catch {
                    parsed.push(resolveMediaUrl(project.gallery));
                }
            } else if (Array.isArray(project.gallery)) {
                parsed.push(...project.gallery.map((item) => resolveMediaUrl(item?.image || item?.imageUrl || item)));
            }
        }

        const unique = parsed.filter(Boolean).filter((img, idx, arr) => arr.indexOf(img) === idx);
        if (unique.length > 0) return unique;

        if (project.image) return [resolveMediaUrl(project.image)];
        return [];
    }, [project]);

    const youtubeEmbedBase = useMemo(() => {
        if (!project) return null;
        const candidate = project.youtubeUrl || project.videoUrl || project.youtubeURL;
        return toYouTubeEmbedURL(candidate);
    }, [project]);

    const youtubeEmbedSrc = useMemo(() => {
        if (!youtubeEmbedBase) return null;

        const params = new URLSearchParams({
            rel: "0",
            modestbranding: "1",
            controls: "1",
            playsinline: "1",
            mute: "1",
        });

        params.set("autoplay", videoShouldAutoplay ? "1" : "0");
        return `${youtubeEmbedBase}?${params.toString()}`;
    }, [youtubeEmbedBase, videoShouldAutoplay]);

    useEffect(() => {
        setLightboxIndex(null);
    }, [project?.id]);

    useEffect(() => {
        if (!youtubeEmbedBase) return;

        const section = document.getElementById("project-video-section");
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVideoShouldAutoplay(true);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, [youtubeEmbedBase]);

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
                    <SafeImage src={resolveMediaUrl(project.image)} fallbackSrc="/edra-logo.png" alt={project.title} fill sizes="100vw" style={{ objectFit: "cover" }} priority quality={75} />
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
                        <ThumbnailCarousel
                            images={galleryImages}
                            onImageClick={handleOpenLightbox}
                        />
                    </div>
                </section>
            )}

            {/* Optional YouTube Video Section */}
            {youtubeEmbedSrc && (
                <section id="project-video-section" className="project-detail-video-section">
                    <div className="project-detail-video-shell">
                        <iframe
                            className="project-detail-video-iframe"
                            src={youtubeEmbedSrc}
                            title={`${project.title} video`}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
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
                onGoTo={setLightboxIndex}
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
