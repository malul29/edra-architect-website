"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useApi, apiPost, apiPut, apiDelete } from "../../../hooks/useApi";
import RichTextEditor from "../../../components/RichTextEditor";

export default function DashboardPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("projects");
    const [showForm, setShowForm] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    // Check authentication
    useEffect(() => {
        if (!localStorage.getItem("edra_admin")) {
            router.push("/admin/login");
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("edra_admin");
        router.push("/admin/login");
    };

    const handleTabChange = (newTab) => {
        if (hasUnsavedChanges && showForm) {
            if (!window.confirm("You have unsaved changes. Are you sure you want to leave?")) {
                return;
            }
            setHasUnsavedChanges(false);
        }
        setActiveTab(newTab);
        setShowForm(false);
        setEditingItem(null);
        // Scroll dashboard main back to top
        const main = document.querySelector(".dashboard-main");
        if (main) main.scrollTop = 0;
    };

    return (
        <div className="dashboard">
            {/* Sidebar */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                    <Image src="/edra-logo.png" alt="EDRA" className="sidebar-logo" width={80} height={80} />
                    <h2>CMS Dashboard</h2>
                </div>

                <nav className="sidebar-nav">
                    <button
                        className={`sidebar-nav-item ${activeTab === "projects" ? "active" : ""}`}
                        onClick={() => handleTabChange("projects")}
                    >
                        <span>📁</span> Projects
                    </button>
                    <button
                        className={`sidebar-nav-item ${activeTab === "blogs" ? "active" : ""}`}
                        onClick={() => handleTabChange("blogs")}
                    >
                        <span>📝</span> Blog Articles
                    </button>

                    <button
                        className={`sidebar-nav-item ${activeTab === "settings" ? "active" : ""}`}
                        onClick={() => handleTabChange("settings")}
                    >
                        <span>⚙️</span> Settings
                    </button>
                </nav>

                <a href="/" target="_blank" rel="noopener noreferrer" className="sidebar-view-site">
                    <span>🌐</span> View Site
                </a>

                <button className="sidebar-logout" onClick={handleLogout}>
                    <span>🚪</span> Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <div>
                        <h1 className="dashboard-title">
                            {activeTab === "projects" && "Manage Projects"}
                            {activeTab === "blogs" && "Manage Blog Articles"}
                            {activeTab === "settings" && "Settings"}
                        </h1>
                        <p className="dashboard-subtitle">
                            {activeTab === "projects" && "Add, edit, or remove portfolio projects"}
                            {activeTab === "blogs" && "Create and manage blog articles"}
                            {activeTab === "settings" && "Configure dashboard settings"}
                        </p>
                    </div>

                    {(activeTab === "projects" || activeTab === "blogs") && (
                        <button className="btn-add-new" onClick={() => setShowForm(true)}>
                            + Add New
                        </button>
                    )}
                </div>

                <div className="dashboard-content">
                    {activeTab === "projects" && (
                        <ProjectsManager
                            showForm={showForm}
                            setShowForm={setShowForm}
                            editingItem={editingItem}
                            setEditingItem={setEditingItem}
                            setHasUnsavedChanges={setHasUnsavedChanges}
                        />
                    )}
                    {activeTab === "blogs" && (
                        <BlogsManager
                            showForm={showForm}
                            setShowForm={setShowForm}
                            editingItem={editingItem}
                            setEditingItem={setEditingItem}
                            setHasUnsavedChanges={setHasUnsavedChanges}
                        />
                    )}

                    {activeTab === "settings" && <SettingsPanel />}
                </div>
            </main>
        </div>
    );
}

// ── Skeleton Loader ──────────────────────────────────────────────────────────
function SkeletonCard() {
    return (
        <div className="item-card skeleton-card">
            <div className="skeleton skeleton-image" />
            <div className="item-content">
                <div className="skeleton skeleton-title" />
                <div className="skeleton skeleton-meta" />
                <div className="skeleton skeleton-badge" />
            </div>
        </div>
    );
}

// ── Projects Manager ─────────────────────────────────────────────────────────
function ProjectsManager({ showForm, setShowForm, editingItem, setEditingItem, setHasUnsavedChanges }) {
    const { data: projects, loading, refetch } = useApi("/portfolio");
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        category: "",
        year: "",
        image: "",
        description: "",
        gallery: []
    });

    useEffect(() => {
        if (editingItem) {
            setFormData({
                ...editingItem,
                gallery: editingItem.gallery || []
            });
            setShowForm(true);
        }
    }, [editingItem, setShowForm]);

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setHasUnsavedChanges(true);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result });
                setHasUnsavedChanges(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleGalleryUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        const readers = files.map(file => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(file);
            });
        });

        Promise.all(readers).then(images => {
            setFormData({ ...formData, gallery: [...formData.gallery, ...images] });
            setHasUnsavedChanges(true);
        });
    };

    const removeGalleryImage = (index) => {
        const newGallery = formData.gallery.filter((_, i) => i !== index);
        setFormData({ ...formData, gallery: newGallery });
        setHasUnsavedChanges(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingItem) {
                await apiPut("/portfolio", editingItem.id, formData);
            } else {
                await apiPost("/portfolio", formData);
            }
            setFormData({ title: "", location: "", category: "", year: "", image: "", description: "", gallery: [] });
            setShowForm(false);
            setEditingItem(null);
            setHasUnsavedChanges(false);
            refetch();
        } catch (error) {
            alert("Error saving project: " + error.message);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this project?")) return;
        try {
            await apiDelete("/portfolio", id);
            refetch();
        } catch (error) {
            alert("Error deleting project");
        }
    };

    const handleCancel = () => {
        setShowForm(false);
        setEditingItem(null);
        setFormData({ title: "", location: "", category: "", year: "", image: "", description: "", gallery: [] });
        setHasUnsavedChanges(false);
    };

    if (showForm) {
        return (
            <div className="form-panel">
                <h3>{editingItem ? "Edit Project" : "Add New Project"}</h3>
                <form onSubmit={handleSubmit} className="dashboard-form">
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Project Title *</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => handleInputChange("title", e.target.value)}
                                placeholder="e.g., Modern Villa"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Location *</label>
                            <input
                                type="text"
                                value={formData.location}
                                onChange={(e) => handleInputChange("location", e.target.value)}
                                placeholder="e.g., Jakarta, Indonesia"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Category *</label>
                            <select
                                value={formData.category}
                                onChange={(e) => handleInputChange("category", e.target.value)}
                                required
                            >
                                <option value="">Select category</option>
                                <option value="High Rise">High Rise</option>
                                <option value="Mall">Mall</option>
                                <option value="Residence">Residence</option>
                                <option value="Private House">Private House</option>
                                <option value="Office">Office</option>
                                <option value="Public Facility">Public Facility</option>
                                <option value="Interior">Interior</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Year *</label>
                            <input
                                type="text"
                                value={formData.year}
                                onChange={(e) => handleInputChange("year", e.target.value)}
                                placeholder="e.g., 2024"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Image *</label>
                        <div className="image-upload-group">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileUpload}
                                className="file-input"
                            />
                            <span className="upload-separator">OR</span>
                            <input
                                type="url"
                                value={formData.image}
                                onChange={(e) => handleInputChange("image", e.target.value)}
                                placeholder="Enter image URL (https://...)"
                                className="url-input"
                            />
                        </div>
                        {formData.image && (
                            <div className="image-preview">
                                <img src={formData.image} alt="Preview" />
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => handleInputChange("description", e.target.value)}
                            placeholder="Project description..."
                            rows="4"
                        />
                    </div>

                    <div className="form-group">
                        <label>Project Gallery</label>
                        <p className="field-hint">Upload multiple images for the project gallery</p>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleGalleryUpload}
                            className="file-input"
                        />
                        {formData.gallery && formData.gallery.length > 0 && (
                            <div className="gallery-preview">
                                {formData.gallery.map((img, index) => (
                                    <div key={index} className="gallery-thumbnail">
                                        <img src={img} alt={`Gallery ${index + 1}`} />
                                        <button
                                            type="button"
                                            className="btn-remove-gallery"
                                            onClick={() => removeGalleryImage(index)}
                                            title="Remove image"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn-secondary" onClick={handleCancel}>
                            Cancel
                        </button>
                        <button type="submit" className="btn-primary">
                            {editingItem ? "Update Project" : "Add Project"}
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="items-list">
                <div className="items-grid">
                    {[1, 2, 3, 4, 5, 6].map(i => <SkeletonCard key={i} />)}
                </div>
            </div>
        );
    }

    return (
        <div className="items-list">
            {projects?.length === 0 ? (
                <div className="empty-state">
                    <p>No projects yet. Click &quot;Add New&quot; to create your first project.</p>
                </div>
            ) : (
                <div className="items-grid">
                    {projects?.map((project) => (
                        <div key={project.id} className="item-card">
                            <img src={project.image} alt={project.title} className="item-image" />
                            <div className="item-content">
                                <h4>{project.title}</h4>
                                <p className="item-meta">{project.location} • {project.year}</p>
                                <span className="item-badge">{project.category}</span>
                            </div>
                            <div className="item-actions">
                                <a
                                    href={`/project/${project.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-view"
                                >
                                    View
                                </a>
                                <button
                                    className="btn-edit"
                                    onClick={() => setEditingItem(project)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn-delete"
                                    onClick={() => handleDelete(project.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// ── Blogs Manager ─────────────────────────────────────────────────────────────
function BlogsManager({ showForm, setShowForm, editingItem, setEditingItem, setHasUnsavedChanges }) {
    const { data: blogs, loading, refetch } = useApi("/blogs");
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        date: "",
        tag: "",
        image: "",
        excerpt: "",
        author: "",
        client: "",
        content: []
    });

    useEffect(() => {
        if (editingItem) {
            setFormData(editingItem);
            setShowForm(true);
        }
    }, [editingItem, setShowForm]);

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setHasUnsavedChanges(true);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result });
                setHasUnsavedChanges(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingItem) {
                await apiPut("/blogs", editingItem.id, formData);
            } else {
                await apiPost("/blogs", formData);
            }
            setFormData({ title: "", subtitle: "", date: "", tag: "", image: "", excerpt: "", author: "", client: "", content: [] });
            setShowForm(false);
            setEditingItem(null);
            setHasUnsavedChanges(false);
            refetch();
        } catch (error) {
            alert("Error saving article: " + error.message);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this article?")) return;
        try {
            await apiDelete("/blogs", id);
            refetch();
        } catch (error) {
            alert("Error deleting article");
        }
    };

    const handleCancel = () => {
        setShowForm(false);
        setEditingItem(null);
        setFormData({ title: "", subtitle: "", date: "", tag: "", image: "", excerpt: "", author: "", client: "", content: [] });
        setHasUnsavedChanges(false);
    };

    if (showForm) {
        return (
            <div className="form-panel article-editor-panel">
                <h3>{editingItem ? "Edit Article" : "Write New Article"}</h3>
                <form onSubmit={handleSubmit} className="dashboard-form article-editor-form">
                    {/* Basic Info Section */}
                    <div className="editor-section">
                        <h4 className="editor-section-title">Basic Information</h4>

                        <div className="form-group">
                            <label>Article Title *</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => handleInputChange("title", e.target.value)}
                                placeholder="e.g., Designing light for a desert hillside residence"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Subtitle/Hero Description</label>
                            <textarea
                                value={formData.subtitle || ""}
                                onChange={(e) => handleInputChange("subtitle", e.target.value)}
                                placeholder="A brief description shown in the hero section..."
                                rows="2"
                            />
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label>Published Date *</label>
                                <input
                                    type="text"
                                    value={formData.date}
                                    onChange={(e) => handleInputChange("date", e.target.value)}
                                    placeholder="e.g., Feb 2026"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Category *</label>
                                <select
                                    value={formData.tag}
                                    onChange={(e) => handleInputChange("tag", e.target.value)}
                                    required
                                >
                                    <option value="">Select category</option>
                                    <option value="Architecture">Architecture</option>
                                    <option value="Interior">Interior</option>
                                    <option value="Construction">Construction</option>
                                    <option value="Design">Design</option>
                                    <option value="Studio">Studio</option>
                                    <option value="Projects">Projects</option>
                                    <option value="Awards">Awards</option>
                                    <option value="Press">Press</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label>Author Name</label>
                                <input
                                    type="text"
                                    value={formData.author || ""}
                                    onChange={(e) => handleInputChange("author", e.target.value)}
                                    placeholder="e.g., Arden Zwerlin"
                                />
                            </div>

                            <div className="form-group">
                                <label>Client Name(s)</label>
                                <input
                                    type="text"
                                    value={formData.client || ""}
                                    onChange={(e) => handleInputChange("client", e.target.value)}
                                    placeholder="e.g., Joshua Jacobs, Lillian Steele"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Featured Image *</label>
                            <div className="image-upload-group">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    className="file-input"
                                />
                                <span className="upload-separator">OR</span>
                                <input
                                    type="url"
                                    value={formData.image}
                                    onChange={(e) => handleInputChange("image", e.target.value)}
                                    placeholder="Enter image URL (https://...)"
                                    className="url-input"
                                />
                            </div>
                            {formData.image && (
                                <div className="image-preview">
                                    <img src={formData.image} alt="Preview" />
                                </div>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Article Excerpt *</label>
                            <textarea
                                value={formData.excerpt}
                                onChange={(e) => handleInputChange("excerpt", e.target.value)}
                                placeholder="Brief description shown in article listings..."
                                rows="3"
                                required
                            />
                        </div>
                    </div>

                    {/* Article Content Section */}
                    <div className="editor-section">
                        <h4 className="editor-section-title">Article Content</h4>
                        <p className="editor-section-subtitle">
                            Build your article using content blocks. Add paragraphs, headings, quotes, and images.
                        </p>

                        <RichTextEditor
                            value={formData.content || []}
                            onChange={(newContent) => handleInputChange("content", newContent)}
                        />
                    </div>

                    {/* Actions */}
                    <div className="form-actions article-editor-actions">
                        <button type="button" className="btn-secondary" onClick={handleCancel}>
                            Cancel
                        </button>
                        <button type="submit" className="btn-primary">
                            {editingItem ? "Update Article" : "Publish Article"}
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="items-list">
                <div className="items-grid">
                    {[1, 2, 3, 4].map(i => <SkeletonCard key={i} />)}
                </div>
            </div>
        );
    }

    return (
        <div className="items-list">
            {blogs?.length === 0 ? (
                <div className="empty-state">
                    <p>No articles yet. Click &quot;Add New&quot; to write your first article.</p>
                </div>
            ) : (
                <div className="items-grid">
                    {blogs?.map((blog) => (
                        <div key={blog.id} className="item-card">
                            <img src={blog.image} alt={blog.title} className="item-image" />
                            <div className="item-content">
                                <h4>{blog.title}</h4>
                                <p className="item-meta">{blog.date}</p>
                                <span className="item-badge">{blog.tag}</span>
                                <p className="item-excerpt">{blog.excerpt}</p>
                            </div>
                            <div className="item-actions">
                                <a
                                    href={`/blog/${blog.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-view"
                                >
                                    View
                                </a>
                                <button
                                    className="btn-edit"
                                    onClick={() => setEditingItem(blog)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn-delete"
                                    onClick={() => handleDelete(blog.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// ── Settings Panel ────────────────────────────────────────────────────────────
function SettingsPanel() {
    return (
        <div className="settings-panel">
            <div className="settings-section">
                <h3>Account Information</h3>
                <p>Username: <strong>admin</strong></p>
                <p>Role: <strong>Administrator</strong></p>
            </div>

            <div className="settings-section">
                <h3>System Info</h3>
                <p>Version: 1.0.0</p>
                <p>Last Updated: Feb 2026</p>
            </div>

            <div className="settings-section">
                <h3>Quick Links</h3>
                <a href="/" target="_blank" rel="noopener noreferrer" className="settings-link">
                    → View Live Site
                </a>
                <a href="/projects" target="_blank" rel="noopener noreferrer" className="settings-link">
                    → View Projects Page
                </a>
                <a href="/blogs" target="_blank" rel="noopener noreferrer" className="settings-link">
                    → View Blog Page
                </a>
            </div>
        </div>
    );
}



