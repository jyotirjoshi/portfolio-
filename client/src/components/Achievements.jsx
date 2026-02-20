import React, { useState } from 'react';
import './Achievements.css';

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const defaultLink = 'https://www.linkedin.com/in/mithilesh-khandwala-40b32331a/';

  const achievements = [
    {
      image: 'https://media.licdn.com/dms/image/v2/D5622AQGmuQSWPhD5sA/feedshare-shrink_800/B56ZwaVmXEHQAg-/0/1769968396219?e=1773273600&v=beta&t=ycmkEAaZvdOgbo-mfzN83CYR6MoB1XDgh30ZBJ4amzk',
      icon: '🏆',
      title: 'IRIS National Science Fair',
      subtitle: 'Gold Medal Winner',
      description: 'Selected from 6,000 students and 640 projects. Qualified for International Science and Engineering Fair, USA.',
      year: '2026',
      category: 'Research',
      link: 'https://www.linkedin.com/posts/mithilesh-khandwala-40b32331a_i-won-a-gold-medal-at-the-iris-national-science-activity-7423785550735720448-6wNL?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAFGA0ywBkqD6Bs2FFMcFsrCC0oo1jB7pP-g&utm_campaign=whatsapp'
    },
    {
      image: '/assets/achievement-math.png',
      icon: '🎯',
      title: 'AIME Qualifier',
      description: 'Cleared AMC with scores of 120 and 117. Qualified for the prestigious AIME.',
      year: '2025',
      category: 'Mathematics',
      link: defaultLink
    },
    {
      image: '/assets/achievement-research.png',
      icon: '📄',
      title: 'Research Publication',
      description: 'Published paper in Scopus-indexed journal on environmental science.',
      year: '2025',
      category: 'Research',
      link: defaultLink
    },
    {
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHgBmb_2tQ22A/feedshare-shrink_800/B56ZVAe7SKHsAg-/0/1740543605942?e=1773273600&v=beta&t=xXv_nwEkHhuZIOt45n8dm_SioI_5XJ-UfIcYRUfzms0',
      icon: '⭐',
      title: 'SOUL Leadership Conclave',
      subtitle: 'Youngest Delegate',
      description: 'Selected twice among 200 youth leaders. Met PM Modi.',
      year: '2025',
      category: 'Leadership',
      link: 'https://www.linkedin.com/posts/mithilesh-khandwala-40b32331a_soulleadershipconclave-activity-7300369038864498689-NJRJ/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFGA0ywBkqD6Bs2FFMcFsrCC0oo1jB7pP-g&utm_campaign=whatsapp'
    },
    {
      image: 'https://media.licdn.com/dms/image/v2/D5622AQFlRVReZIlzWQ/feedshare-shrink_800/B56ZaMvgX3GkAo-/0/1746118021109?e=1773273600&v=beta&t=GtrpQVIEadA94koNDSVMhfr_NR6Oh0yPHkqMku0lMfs',
      icon: '🎖️',
      title: 'Viksit Bharat Youth Icon',
      description: 'Selected for Young Leaders Dialogue 2025. Met PM Modi and national leaders.',
      year: '2025',
      category: 'Leadership',
      link: 'https://www.linkedin.com/posts/mithilesh-khandwala-40b32331a_received-a-certificate-of-appreciation-from-activity-7323749807762657280-8uVY/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFGA0ywBkqD6Bs2FFMcFsrCC0oo1jB7pP-g&utm_campaign=whatsapp'
    },
    {
      image: 'https://media.licdn.com/dms/image/v2/D5622AQEZI6wnFVv8Eg/feedshare-shrink_2048_1536/B56ZfkoeVtHUAs-/0/1751887508852?e=1773273600&v=beta&t=dX_A_u6-Qb46vWP2HrVkr0dxR7hZu_jvT01rVyTWsGY',
      icon: '💯',
      title: 'AP Microeconomics',
      subtitle: 'Perfect Score 5/5',
      description: 'Achieved perfect score in AP examination.',
      year: '2024',
      category: 'Academics',
      link: 'https://www.linkedin.com/posts/mithilesh-khandwala-40b32331a_thrilled-to-share-that-i-scored-a-55-on-activity-7347948793335566337-auN3/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFGA0ywBkqD6Bs2FFMcFsrCC0oo1jB7pP-g&utm_campaign=whatsapp'
    },
    {
      image: 'https://media.licdn.com/dms/image/v2/D5622AQGv2DDA800AOw/feedshare-shrink_800/B56Zi5BkfRHQAk-/0/1755450874788?e=1773273600&v=beta&t=4_aSKJo8DTAvqmthPU4mL2XvNotY8z8gjFAyqqDFT6Y',
      icon: '🌍',
      title: 'Harvard Model UN India',
      description: 'Represented Libya in UN General Assembly at HMUN India 2025.',
      year: '2024',
      category: 'Leadership',
      link: 'https://www.linkedin.com/posts/mithilesh-khandwala-40b32331a_i-have-been-a-part-of-the-harvard-model-united-activity-7362894632273268739-16bw/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFGA0ywBkqD6Bs2FFMcFsrCC0oo1jB7pP-g&utm_campaign=whatsapp'
    },
    {
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHAfxuWyHhtqw/feedshare-shrink_800/feedshare-shrink_800/0/1731210658504?e=1773273600&v=beta&t=VhAAL3zzf77_-nffwpdIJ7wjE5dUWtOdir29zZ8qojI',
      icon: '🥇',
      title: 'MUN Best Delegate',
      subtitle: 'Best Delegate',
      description: 'Best Delegate representing India as Finance Minister.',
      year: '2024',
      category: 'Leadership',
      link: 'https://www.linkedin.com/posts/mithilesh-khandwala-40b32331a_mun2024-financeminister-onenationoneelection-activity-7261223794369863680-6dFs/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFGA0ywBkqD6Bs2FFMcFsrCC0oo1jB7pP-g&utm_campaign=whatsapp'
    },
    {
      image: '/assets/achievement-award.png',
      icon: '🎖️',
      title: 'Ministry Recognition',
      description: 'Certificate from Ministry of Youth Affairs & Sports as Pathbreaker.',
      year: '2025',
      category: 'Recognition',
      link: defaultLink
    },
    {
      image: '/assets/achievement-math.png',
      icon: '✅',
      title: 'Cambridge Checkpoint',
      subtitle: 'Full Marks',
      description: 'Achieved full marks in Cambridge Checkpoint Examinations.',
      year: '2024',
      category: 'Academics',
      link: defaultLink
    },
    {
      image: '/assets/achievement-leadership.png',
      icon: '👑',
      title: 'House Captain - Emerald House',
      description: 'Elected House Captain and led team to victory.',
      year: '2024-25',
      category: 'Leadership',
      link: defaultLink
    },
    {
      image: '/assets/achievement-research.png',
      icon: '🌟',
      title: 'Emerging Scholar Award',
      description: 'International Seminar: Mindful Minds in a Digital World.',
      year: '2025',
      category: 'Recognition',
      link: defaultLink
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
            <a
              key={index}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-card-link"
            >
              <div className="achievement-card">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;