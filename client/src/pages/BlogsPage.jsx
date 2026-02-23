import { useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";

export default function BlogsPage() {
  const { data, loading } = useApi("/blogs");
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [sortOrder, setSortOrder] = useState("newest");

  const categories = ["All Topics", "Studio", "Projects", "Awards", "Press"];
  
  const filteredBlogs = activeCategory === "All Topics" 
    ? data 
    : data.filter(blog => blog.tag === activeCategory);

  // Sort blogs
  const sortedBlogs = filteredBlogs?.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  }) || [];

  const featuredBlog = sortedBlogs[0];
  const otherBlogs = sortedBlogs.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <p className="blog-hero-label">INSIGHTS & ARTICLES</p>
          <h1 className="blog-hero-title">
            EXPLORING DESIGN,<br />
            ARCHITECTURE & INNOVATION
          </h1>
          <p className="blog-hero-subtitle">
            Design thinking, project process, and architecture insights from PT. EDRA Arsitek Indonesia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="journal-main">
        <div className="journal-container">
          {/* Journal Header */}
          <div className="journal-header">
            <h1 className="journal-title">Journal</h1>
            <p className="journal-subtitle">
              Essays, case studies, and studio notes from the practice of contemporary architecture, interior design, and thoughtful urban living.
            </p>
          </div>

          {/* Featured Article */}
          {!loading && featuredBlog && (
            <article className="journal-featured">
              <Link to={`/blog/${featuredBlog.id}`} className="journal-featured-link">
                <div className="journal-featured-image">
                  <img src={featuredBlog.image} alt={featuredBlog.title} />
                  <div className="journal-featured-overlay">
                    <div className="journal-featured-meta">
                      <span className="journal-featured-category">{featuredBlog.tag}</span>
                      <span className="journal-featured-dot">•</span>
                      <span className="journal-featured-date">{featuredBlog.date}</span>
                    </div>
                    <h2 className="journal-featured-title">{featuredBlog.title}</h2>
                    <button className="journal-read-btn">READ ARTICLE</button>
                  </div>
                </div>
              </Link>
            </article>
          )}

          {/* Content Area with Sidebar */}
          <div className="journal-content-area">
            {/* Sidebar */}
            <aside className="journal-sidebar">
              <div className="journal-sidebar-section">
                <h3 className="journal-sidebar-title">CATEGORIES</h3>
                <nav className="journal-categories">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`journal-category-btn ${activeCategory === cat ? "active" : ""}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="journal-sidebar-section">
                <h3 className="journal-sidebar-title">SORT BY</h3>
                <div className="journal-sort">
                  <button
                    className={`journal-sort-btn ${sortOrder === "newest" ? "active" : ""}`}
                    onClick={() => setSortOrder("newest")}
                  >
                    Newest first
                  </button>
                  <button
                    className={`journal-sort-btn ${sortOrder === "oldest" ? "active" : ""}`}
                    onClick={() => setSortOrder("oldest")}
                  >
                    Oldest first
                  </button>
                </div>
              </div>

              <div className="journal-sidebar-section">
                <h3 className="journal-sidebar-title">FEATURED TOPICS</h3>
                <div className="journal-topics">
                  <span className="journal-topic">Architecture of quiet luxury</span>
                  <span className="journal-topic">Inside the making of a coastal retreat</span>
                  <span className="journal-topic">Five ingredients we return to every year</span>
                </div>
              </div>
            </aside>

            {/* Articles Grid */}
            <div className="journal-grid">
              {loading && (
                <p className="journal-loading">Loading articles…</p>
              )}

              {!loading && otherBlogs.map((blog) => (
                <article className="journal-card" key={blog.id}>
                  <Link to={`/blog/${blog.id}`} className="journal-card-link">
                    <div className="journal-card-image">
                      <img src={blog.image} alt={blog.title} loading="lazy" />
                    </div>
                    <div className="journal-card-content">
                      <div className="journal-card-meta">
                        <span className="journal-card-category">{blog.tag}</span>
                        <span className="journal-card-date">{blog.date}</span>
                      </div>
                      <h3 className="journal-card-title">{blog.title}</h3>
                      <p className="journal-card-excerpt">{blog.excerpt}</p>
                    </div>
                  </Link>
                </article>
              ))}

              {!loading && filteredBlogs.length === 0 && (
                <p className="journal-no-results">
                  No articles found in this category.
                </p>
              )}
            </div>
          </div>

          {/* Pagination */}
          <div className="journal-pagination">
            <button className="journal-page-btn active">1</button>
            <button className="journal-page-btn">2</button>
            <button className="journal-page-btn">3</button>
            <button className="journal-page-btn">→</button>
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
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
