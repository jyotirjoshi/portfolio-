import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-professional">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Turning Knowledge into <span className="accent-text">Impact</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-grid">
          <div className="story-card card-elevated">
            <div className="card-header">
              <div className="card-icon">📖</div>
              <h3 className="card-title">My Journey</h3>
            </div>
            <div className="card-content">
              <p className="story-text">
                I am a 15-year-old student at <strong>Adani International School, Ahmedabad</strong>, 
                driven by curiosity and a passion for making a difference. My journey combines 
                scientific research, mathematical excellence, spiritual wisdom, and leadership.
              </p>
              <p className="story-text">
                From meeting <strong>PM Modi</strong> to teaching the <strong>Bhagavad Gita</strong>, 
                from winning national science competitions to representing India at international 
                platforms—every experience shapes my commitment to create meaningful impact.
              </p>
            </div>
          </div>

          <div className="focus-card card-elevated">
            <div className="focus-icon">🔬</div>
            <h4 className="focus-title">Research & Innovation</h4>
            <p className="focus-text">
              Published researcher in Scopus-indexed journals, passionate about environmental 
              science and data-driven solutions.
            </p>
          </div>

          <div className="focus-card card-elevated">
            <div className="focus-icon">🎯</div>
            <h4 className="focus-title">Academic Excellence</h4>
            <p className="focus-text">
              IRIS Gold Medalist, AIME qualifier, and perfect scorer in AP Microeconomics.
            </p>
          </div>

          <div className="focus-card card-elevated">
            <div className="focus-icon">👥</div>
            <h4 className="focus-title">Youth Leadership</h4>
            <p className="focus-text">
              Selected twice for SOUL Leadership Conclave, Viksit Bharat Youth Icon, and House Captain.
            </p>
          </div>

          <div className="focus-card card-elevated">
            <div className="focus-icon">❤️</div>
            <h4 className="focus-title">Social Impact</h4>
            <p className="focus-text">
              Teaching Bhagavad Gita to underprivileged students and working towards a Carbon Smart India.
            </p>
          </div>
        </div>

        <div className="philosophy-section">
          <div className="philosophy-card card-elevated">
            <div className="philosophy-header">
              <div className="philosophy-icon">🕉️</div>
              <h3 className="philosophy-title">My Guiding Philosophy</h3>
            </div>
            <blockquote className="philosophy-quote">
              <div className="quote-sanskrit">कर्मण्येवाधिकारस्ते मा फलेषु कदाचन</div>
              <div className="quote-translation">
                You have the right to perform your duty, but not to the fruits of your actions
              </div>
              <cite className="quote-source">— Bhagavad Gita, Chapter 2, Verse 47</cite>
            </blockquote>
            <p className="philosophy-text">
              The Bhagavad Gita has been my guide since age 11. Its teachings inspire me to focus on 
              <strong> effort rather than outcomes</strong>, to lead with <strong>compassion</strong>, 
              and to use <strong>knowledge for the greater good</strong>. This philosophy drives 
              everything I do—from scientific research to community service.
            </p>
          </div>
        </div>

        <div className="featured-section">
          <h3 className="featured-title">Featured In</h3>
          <div className="featured-logos">
            <div className="media-badge">Divya Bhaskar</div>
            <div className="media-badge">Gujarat Samachar</div>
            <div className="media-badge">Ahmedabad Mirror</div>
            <div className="media-badge">Punjab Kesari</div>
            <div className="media-badge">ANI News</div>
            <div className="media-badge">Vibes of India</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;