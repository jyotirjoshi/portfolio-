import React from 'react';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      title: 'Latest Update on LinkedIn',
      excerpt: 'Follow my recent activities, research breakthroughs, and community initiatives on my professional profile.',
      date: 'Latest',
      image: '/assets/linkedin-update.png',
      link: 'https://www.linkedin.com/in/mithilesh-khandwala-40b32331a/'
    },
    {
      title: 'Lessons From The Mahabharata',
      excerpt: 'Timeless wisdom for modern youth navigating life.',
      date: '2024',
      image: '/assets/mahabharata.png',
      link: 'https://www.linkedin.com/in/mithilesh-khandwala-40b32331a/recent-activity/all/'
    },
    {
      title: 'Cricket: Religion In Diverse Country',
      excerpt: 'How cricket unifies India across 1.4 billion people.',
      date: 'Oct 2021',
      image: '/assets/cricket.png',
      link: 'https://www.linkedin.com/in/mithilesh-khandwala-40b32331a/recent-activity/all/'
    }
  ];

  return (
    <section id="blog" className="blog-professional">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Blog</span>
          <h2 className="section-title">
            Thoughts & <span className="accent-text">Writings</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card card-elevated"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-overlay-icon">🔗</div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="read-more">Read on LinkedIn →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;