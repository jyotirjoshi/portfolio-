import React from 'react';
import './Research.css';

const Research = () => {
  const projects = [
    {
      icon: '🔬',
      title: 'Data-Driven Analysis of Energy Balance',
      category: 'Earth & Environmental Science',
      description: 'Comprehensive analysis of energy balance and surface flux patterns over Indian agro-ecosystems.',
      achievements: ['IRIS Gold Medal', 'ISEF USA Qualified', 'Presented in New Delhi']
    },
    {
      icon: '📄',
      title: 'Scopus-Indexed Publication',
      category: 'Environmental Science',
      description: 'Published research paper focusing on environmental science and sustainable agriculture.',
      achievements: ['Peer-reviewed', 'Scopus-indexed', 'Cited by researchers']
    },
    {
      icon: '📊',
      title: 'Mathematics of Money',
      category: 'Economics & Finance',
      description: 'Advanced course at Johns Hopkins CTY exploring mathematical principles in economics.',
      achievements: ['Johns Hopkins CTY', 'Excellent evaluation', '22-day intensive']
    }
  ];

  return (
    <section id="research" className="research-professional">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Research</span>
          <h2 className="section-title">
            Projects & <span className="accent-text">Publications</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="research-grid">
          {projects.map((project, index) => (
            <div key={index} className="research-card card-elevated">
              <div className="research-icon">{project.icon}</div>
              <span className="research-category">{project.category}</span>
              <h3 className="research-title">{project.title}</h3>
              <p className="research-description">{project.description}</p>
              <div className="research-achievements">
                {project.achievements.map((achievement, idx) => (
                  <span key={idx} className="achievement-tag">{achievement}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;