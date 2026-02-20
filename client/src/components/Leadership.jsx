import React from 'react';
import './Leadership.css';

const Leadership = () => {
  const roles = [
    {
      icon: '👑',
      title: 'House Captain - Emerald House',
      organization: 'Adani International School',
      period: '2024-25'
    },
    {
      icon: '⭐',
      title: 'SOUL Leadership Delegate',
      organization: 'School of Ultimate Leadership',
      period: '2025'
    },
    {
      icon: '🇮🇳',
      title: 'Viksit Bharat Youth Icon',
      organization: 'Young Leaders Dialogue',
      period: '2025'
    },
    {
      icon: '🌍',
      title: 'Harvard Model UN',
      organization: 'HMUN India 2025',
      period: '2024'
    }
  ];

  return (
    <section id="leadership" className="leadership-professional">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Leadership</span>
          <h2 className="section-title">
            Roles & <span className="accent-text">Impact</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="leadership-grid">
          {roles.map((role, index) => (
            <div key={index} className="leadership-card card-elevated">
              <div className="leadership-icon">{role.icon}</div>
              <h3 className="leadership-title">{role.title}</h3>
              <p className="leadership-org">{role.organization}</p>
              <span className="leadership-period">{role.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;