import React, { useState } from 'react';
import './Achievements.css';

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const achievements = [
    {
      image: '/assets/achievement-research.png',
      icon: '🏆',
      title: 'IRIS National Science Fair',
      subtitle: 'Gold Medal Winner',
      description: 'Selected from 6,000 students and 640 projects. Qualified for International Science and Engineering Fair, USA.',
      year: '2026',
      category: 'Research'
    },
    {
      image: '/assets/achievement-math.png',
      icon: '🎯',
      title: 'AIME Qualifier',
      description: 'Cleared AMC with scores of 120 and 117. Qualified for the prestigious AIME.',
      year: '2025',
      category: 'Mathematics'
    },
    {
      image: '/assets/achievement-research.png',
      icon: '📄',
      title: 'Research Publication',
      description: 'Published paper in Scopus-indexed journal on environmental science.',
      year: '2025',
      category: 'Research'
    },
    {
      image: '/assets/achievement-leadership.png',
      icon: '⭐',
      title: 'SOUL Leadership Conclave',
      subtitle: 'Youngest Delegate',
      description: 'Selected twice among 200 youth leaders. Met PM Modi.',
      year: '2025',
      category: 'Leadership'
    },
    {
      image: '/assets/achievement-award.png',
      icon: '🎖️',
      title: 'Viksit Bharat Youth Icon',
      description: 'Selected for Young Leaders Dialogue 2025. Met PM Modi and national leaders.',
      year: '2025',
      category: 'Leadership'
    },
    {
      image: '/assets/achievement-math.png',
      icon: '💯',
      title: 'AP Microeconomics',
      subtitle: 'Perfect Score 5/5',
      description: 'Achieved perfect score in AP examination.',
      year: '2024',
      category: 'Academics'
    },
    {
      image: '/assets/achievement-leadership.png',
      icon: '🌍',
      title: 'Harvard Model UN India',
      description: 'Represented Libya in UN General Assembly at HMUN India 2025.',
      year: '2024',
      category: 'Leadership'
    },
    {
      image: '/assets/achievement-leadership.png',
      icon: '🥇',
      title: 'MUN Best Delegate',
      description: 'Best Delegate representing India as Finance Minister.',
      year: '2024',
      category: 'Leadership'
    },
    {
      image: '/assets/achievement-award.png',
      icon: '🎖️',
      title: 'Ministry Recognition',
      description: 'Certificate from Ministry of Youth Affairs & Sports as Pathbreaker.',
      year: '2025',
      category: 'Recognition'
    },
    {
      image: '/assets/achievement-math.png',
      icon: '✅',
      title: 'Cambridge Checkpoint',
      subtitle: 'Full Marks',
      description: 'Achieved full marks in Cambridge Checkpoint Examinations.',
      year: '2024',
      category: 'Academics'
    },
    {
      image: '/assets/achievement-leadership.png',
      icon: '👑',
      title: 'House Captain - Emerald House',
      description: 'Elected House Captain and led team to victory.',
      year: '2024-25',
      category: 'Leadership'
    },
    {
      image: '/assets/achievement-research.png',
      icon: '🌟',
      title: 'Emerging Scholar Award',
      description: 'International Seminar: Mindful Minds in a Digital World.',
      year: '2025',
      category: 'Recognition'
    }
  ];

  const categories = ['All', 'Research', 'Mathematics', 'Leadership', 'Academics', 'Recognition'];

  const filteredAchievements = selectedCategory === 'All'
    ? achievements
    : achievements.filter(a => a.category === selectedCategory);

  return (
    <section id="achievements" className="achievements-professional">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">
            Achievements & <span className="accent-text">Recognition</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="achievements-grid">
          {filteredAchievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              {/* Image Section */}
              <div className="achievement-image-wrapper">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="achievement-image"
                />
                <div className="achievement-icon-overlay">{achievement.icon}</div>
              </div>

              {/* Content Section */}
              <div className="achievement-content">
                <div className="achievement-header">
                  <span className="achievement-year">{achievement.year}</span>
                  <span className="achievement-category">{achievement.category}</span>
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
                {achievement.subtitle && (
                  <h4 className="achievement-subtitle">{achievement.subtitle}</h4>
                )}
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;