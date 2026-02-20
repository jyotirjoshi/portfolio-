import React from 'react';
import './Media.css';

const Media = () => {
  const features = [
    { outlet: 'Divya Bhaskar', title: 'Youngest SOUL Leader', date: 'Feb 2025' },
    { outlet: 'Gujarat Samachar', title: 'Leadership Recognition', date: 'Feb 2025' },
    { outlet: 'Ahmedabad Mirror', title: 'Student Achievement', date: 'Mar 2025' },
    { outlet: 'Punjab Kesari', title: 'Meeting PM Modi', date: 'Feb 2025' }
  ];

  return (
    <section id="media" className="media-professional">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Media</span>
          <h2 className="section-title">
            Press & <span className="accent-text">Publications</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="media-grid">
          {features.map((feature, index) => (
            <div key={index} className="media-card card-elevated">
              <div className="media-icon">📰</div>
              <h4 className="media-outlet">{feature.outlet}</h4>
              <h3 className="media-title">{feature.title}</h3>
              <span className="media-date">{feature.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;