import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Only parallax on larger screens
      if (window.innerWidth > 1024) {
        setScrollY(window.scrollY);
      } else {
        setScrollY(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Check on resize too
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="hero-professional">
      {/* Subtle Gradient Background */}
      <div className="hero-bg-gradient"></div>

      {/* Geometric Decoration */}
      <div className="geometric-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">

          {/* Left Content */}
          <div className="hero-text">

            {/* Professional Badge */}
            <div className="badge-professional">
              <span className="badge-dot"></span>
              <span className="badge-text">Available for Research Collaborations</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title">
              <span className="title-greeting">Hello, I'm</span>
              <span className="title-name">Mithilesh Khandwala</span>
            </h1>

            {/* Professional Subtitle */}
            <div className="hero-subtitle">
              <div className="subtitle-line"></div>
              <p className="subtitle-text">Student Researcher | Youth Leader | Scholar</p>
            </div>

            {/* Description */}
            <p className="hero-description">
              A 15-year-old researcher and leader passionate about transforming knowledge into
              meaningful impact. From winning Gold at the IRIS National Science Fair to teaching
              the Bhagavad Gita, I merge academic excellence with purposeful action.
            </p>

            {/* Key Achievements - Minimal Cards */}
            <div className="achievement-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">🏆</div>
                <div className="highlight-content">
                  <h3 className="highlight-title">IRIS Gold Medal</h3>
                  <p className="highlight-subtitle">National Science Fair Winner</p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h3 className="highlight-title">AIME Qualified</h3>
                  <p className="highlight-subtitle">AMC 10A: 120 | 10B: 117</p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">📄</div>
                <div className="highlight-content">
                  <h3 className="highlight-title">Published Research</h3>
                  <p className="highlight-subtitle">Scopus-Indexed Journal</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <a href="#achievements" className="btn-primary">
                <span>View My Work</span>
                <span className="btn-arrow">→</span>
              </a>
              <a href="#contact" className="btn-secondary">
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <span className="trust-icon">🇮🇳</span>
                <span className="trust-text">Met PM Modi 2x</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-icon">⭐</span>
                <span className="trust-text">Youngest SOUL Delegate</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-icon">📚</span>
                <span className="trust-text">Teaching Since Age 11</span>
              </div>
            </div>
          </div>

          {/* Right Side - Professional Image Card */}
          <div className="hero-image-section">
            <div
              className="image-card-professional"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            >
              {/* Decorative Frame */}
              <div className="image-frame">
                <div className="frame-corner corner-tl"></div>
                <div className="frame-corner corner-tr"></div>
                <div className="frame-corner corner-bl"></div>
                <div className="frame-corner corner-br"></div>
              </div>

              {/* Image Container */}
              <div className="image-wrapper">
                <img
                  src="/profile-picture.jpg"
                  alt="Mithilesh Khandwala"
                  className="profile-image-pro"
                />

                {/* Elegant Overlay Badge */}
                <div className="image-badge">
                  <span className="badge-emoji">🎓</span>
                  <span className="badge-label">Student Researcher</span>
                </div>
              </div>

              {/* Info Card Overlay */}
              <div className="info-card-overlay">
                <div className="info-item">
                  <div className="info-icon">🏫</div>
                  <div className="info-details">
                    <div className="info-label">School</div>
                    <div className="info-value">Adani International</div>
                  </div>
                </div>
                <div className="info-divider"></div>
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-details">
                    <div className="info-label">Location</div>
                    <div className="info-value">Ahmedabad, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="floating-stat stat-1">
              <div className="stat-number">12+</div>
              <div className="stat-label">Awards</div>
            </div>
            <div className="floating-stat stat-2">
              <div className="stat-number">200+</div>
              <div className="stat-label">Leaders Met</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Minimal */}
        <div className="scroll-indicator-pro">
          <div className="scroll-line"></div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </div>

      {/* Elegant Wave Divider */}
      <div className="wave-divider-pro">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;