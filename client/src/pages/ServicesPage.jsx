import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Architecture Design",
    image: "https://leadesign.com.au/wp-content/uploads/2018/11/lea-design-studio-gold-coast-blog-reading-architectural-drawings-101-part-a-header-1080x675.jpg",
    description: "We provide a full range of Architectural Services including: Plot Research, Architectural Design, Technical Consultancy, Conservation Services, External Works and Landscaping Services. We also provide a wide variety of services including Feasibility Studies and Architectural Programming.",
    features: [
      "Concept Development",
      "Drafting & 3D Modeling",
      "Feasibility Studies",
      "Permit Documentation"
    ]
  },
  {
    id: 2,
    title: "Interior Design",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop",
    description: "Creating bespoke interior environments that reflect your personality and lifestyle. Our interior design services cover spatial planning, material selection, furniture curation, and lighting design, ensuring a cohesive and functional aesthetic for residential and commercial spaces.",
    features: [
      "Spatial Planning",
      "Material & Finish Selection",
      "Furniture & Decor Curation",
      "Lighting Design Consultation"
    ]
  },
  {
    id: 3,
    title: "Project Management",
    image: "https://www.esade.edu/wp-content/uploads/2025/01/herramienta-gestion-proyectos.jpg",
    description: "Comprehensive project management for residential, commercial, and public facilities. We handle everything from project briefing and cost estimation to contractor selection and tender processes, ensuring your project is delivered on time, within budget, and to the highest standards.",
    features: [
      "Cost Estimation & Budgeting",
      "Timeline & Schedule Managment",
      "Contractor Liaison",
      "Quality Control Oversight"
    ]
  },
  {
    id: 4,
    title: "Construction",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop",
    description: "Expert construction services with a focus on precision and quality. We offer full construction management and execution, coordinating specialized consultants and trades to bring complex architectural visions to life with flawless detail and structural integrity.",
    features: [
      "Site Supervision",
      "Structural Engineering",
      "Safety & Compliance",
      "Integrated Build Solutions"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <p className="services-hero-label">WHAT WE DO</p>
          <h1 className="services-hero-title">OUR SERVICE</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-main-section">
        <div className="services-main-intro">
          <div className="services-intro-content">
            <h2 className="services-intro-title">COMPREHENSIVE EXPERTISE</h2>
            <p className="services-intro-text">
              From concept to completion, our integrated services deliver exceptional 
              architectural solutions that exceed expectations and stand the test of time.
            </p>
          </div>
        </div>

        <div className="services-container">
          {services.map((service, index) => (
            <article key={service.id} className="service-card">
              <div className="service-card-inner">
                {/* Left Side - Image */}
                <div className="service-card-image-wrapper">
                  <div className="service-card-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="service-card-image">
                    <img src={service.image} alt={service.title} loading="lazy" />
                    <div className="service-image-overlay"></div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="service-card-content">
                  <div className="service-card-header">
                    <h3 className="service-card-title">{service.title}</h3>
                    <div className="service-card-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  <p className="service-card-description">{service.description}</p>

                  <div className="service-card-features">
                    <h4 className="features-label">Key Offerings</h4>
                    <ul className="features-list">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <span className="feature-bullet"></span>
                          <span className="feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="services-process-section">
        <div className="services-container">
          <h2 className="services-process-title">HOW WE WORK</h2>
          <div className="services-process-grid">
            {["Brief & Research", "Concept", "Design Development", "Documentation", "Construction"].map((step, i) => (
              <div key={step} className="process-step">
                <div className="process-step-number">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="process-step-title">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project CTA */}
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
