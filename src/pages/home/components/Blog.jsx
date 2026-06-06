import React from 'react';
import './Blog.scss';

const Blog = () => {
  const posts = [
    {
      id: 1,
      tag: 'Care Tips',
      date: 'March 12, 2024',
      title: 'The Ultimate Guide to Teeth Whitening at Home',
      excerpt: 'Discover the safest and most effective ways to maintain a bright smile between dental visits.',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDz8TUb18TbXh5RMPt5Rmo71Mxdn1mHdWjYcV4yL2SCa1YmXVebVMbUmLvul-ThWpRTL4OsdSiMB14q7GU9uzjuqSDsoVIgFtSPi9h3rW4z1UcwvlraHD4zqT9BMiXzGUCQVm62lDuH-Q1UoRNr6c90lrVKYDmghwZ-dOiC0DL9imAJ8vcNhNQyeqOSpBopE9kOvq4EKYa-xaznETOQQEWg8F00Z5y5DPF973zVWcZPFkNsMX6HPHpmq2r93QDaL-Vyvp5eFuDS_Y'
    },
    {
      id: 2,
      tag: 'Technology',
      date: 'March 05, 2024',
      title: 'Why Digital Scans are Replacing Traditional Molds',
      excerpt: 'How 3D intraoral scanning is revolutionizing the patient experience and treatment accuracy.',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD57sAzmzsoclmA9BaGIvAMPrhp1WXDw7txcwGxUWtl2ITZPRtQ_iMA5gLMd-8mYCdugfp0g8g9ocmSIC5XlLNzwX7_B9Ew0lch8Ikjxlggx7JhWwrY5H5HB-wVVz0bk8rdlRY2osn8GhkU015yNdTdRZ3eOzIx8nyfLkjUaO-FNMji3V249kXn1OE28IKNwYXzAcpGyL-wMTimYr_NJbjIaJOGx5phXstDm9-v4sGwF6MLFH6Y2Q_5ONOyKg83X2rCDrktCcIe-Kw'
    },
    {
      id: 3,
      tag: 'Clinic News',
      date: 'February 28, 2024',
      title: 'DentaCare Named Top Dental Clinic of the Year',
      excerpt: 'We are proud to announce our recent recognition for excellence in patient care and clinical innovation.',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtAL1sRFUfzKIQ-hic374xNEaKquYUfy-wXmwcHw0ZG0279yJiX65fk_0-mA2UadB8iOuVOg5orYdKSLfFjlZIAhUCOjKK_u4XiIz9Qjj1RsUoDRuGDlv605tvFt_rCCU6UV2Lm4eeqwLRvyRlPS_nPpydh7DWisyyyjH_PjGPGTngxYNYLcuAGHzoOQIexyT2T0_7S8j69UvFWLaMy3BrfbIAtiJvPaoBvZwcNAlgqllFYeVzmclLzyMPzgElduto-SrgvRB_Omg'
    }
  ];

  return (
    <section className="blog">
      <div className="blog__container container-max">
        <div className="blog__header">
          <div className="blog__header-text">
            <h2 className="blog__title">Dental Wellness Blog</h2>
            <p className="blog__subtitle">Latest insights and tips for your oral health.</p>
          </div>
          <a className="blog__view-all" href="#">
            View all news <span className="material-symbols-outlined">arrow_outward</span>
          </a>
        </div>
        
        <div className="blog__grid">
          {posts.map((post) => (
            <article key={post.id} className="blog__card">
              <div className="blog__img-wrapper">
                <img 
                  src={post.imgSrc} 
                  alt={post.title} 
                  className="blog__img"
                />
                <div className="blog__tag">{post.tag}</div>
              </div>
              
              <div className="blog__body">
                <p className="blog__date">{post.date}</p>
                <h4 className="blog__post-title">{post.title}</h4>
                <p className="blog__excerpt">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
