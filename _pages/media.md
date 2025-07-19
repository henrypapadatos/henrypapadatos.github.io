---
layout: page
title: Media Coverage
permalink: /media/
nav: true
nav_order: 3
---

<div class="media-coverage">
  <div class="container">
    
    <!-- Authored Pieces section -->
    <div class="media-section">
      <h2 class="section-title">Authored Pieces</h2>
      <div class="articles-grid">
        
        <!-- TIME article -->
        <div class="article-card">
          <a href="https://time.com/7213772/paris-ai-summit-must-set-global-standards/" target="_blank" class="article-link">
            <div class="article-image">
              <img src="{{ '/assets/img/media/Paris-AI-Summit.jpg' | relative_url }}" alt="Global AI Standards" class="feature-img">
              <div class="article-overlay">
                <div class="outlet-logo">
                  <img src="{{ '/assets/img/media/time-logo.png' | relative_url }}" alt="TIME Logo" class="logo-img">
                </div>
              </div>
            </div>
            <div class="article-content">
              <div class="article-info">
                <h3 class="article-title">Leaders at the Paris AI Summit Must Set Global Standards or Risk a Destructive Race</h3>
                <p class="article-summary">
                  The Paris AI Summit could be a turning point for global AI governance.
                </p>
                <p class="article-meta">
                  <span class="author">Henry Papadatos and Chloé Touzet</span><span class="date-connector"> on </span><span class="date">February 2025</span>
                </p>
              </div>
            </div>
          </a>
        </div>

        <!-- AI frontiers article -->
        <div class="article-card">
          <a href="https://ai-frontiers.org/articles/how-the-eus-code-of-practice-advances-ai-safety" target="_blank" class="article-link">
            <div class="article-image">
              <img src="{{ '/assets/img/media/cop.jpg' | relative_url }}" alt="Global AI Standards" class="feature-img">
              <div class="article-overlay">
                <div class="outlet-logo ai-frontiers">
                  <img src="{{ '/assets/img/media/aifrontiers-logo-cropped.svg' | relative_url }}" alt="AI frontiers Logo" class="logo-img">
                </div>
              </div>
            </div>
            <div class="article-content">
              <div class="article-info">
                <h3 class="article-title">How the EU's Code of Practice Advances AI Safety</h3>
                <p class="article-summary">
                  The Code provides a powerful incentive to push frontier developers toward measurably safer practices.
                </p>
                <p class="article-meta">
                  <span class="author">Henry Papadatos</span><span class="date-connector"> on </span><span class="date">July 2025</span>
                </p>
              </div>
            </div>
          </a>
        </div>
        
      </div>
    </div>
    
    <!-- Featured in section -->
    <div class="media-section">
      <h2 class="section-title">Featured in</h2>
      <div class="featured-grid">
        
        <!-- TIME feature -->
        <div class="featured-card">
          <a href="https://time.com/7026972/saferai-study-xai-meta/" target="_blank" class="featured-link">
            <div class="featured-content">
              <div class="outlet-logo">
                <img src="{{ '/assets/img/media/time-logo.png' | relative_url }}" alt="TIME Logo" class="logo-img">
              </div>
              <div class="featured-info">
                <h3 class="featured-title">AI Safety Study Reveals Gaps in Risk Management</h3>
                <p class="featured-meta">
                  <span class="date">November 2024</span>
                </p>
              </div>
            </div>
          </a>
        </div>
        
        <!-- Euractiv feature -->
        <div class="featured-card">
          <a href="https://www.euractiv.com/section/digital/news/top-ai-companies-suffer-from-poor-ai-risk-management-says-french-non-profit/" target="_blank" class="featured-link">
            <div class="featured-content">
              <div class="outlet-logo">
                <img src="{{ '/assets/img/media/Euractiv_logo.svg' | relative_url }}" alt="Euractiv Logo" class="logo-img">
              </div>
              <div class="featured-info">
                <h3 class="featured-title">Top AI Companies Suffer from Poor AI Risk Management, Says French Non-Profit</h3>
                <p class="featured-meta">
                  <span class="date">November 2024</span>
                </p>
              </div>
            </div>
          </a>
        </div>
        
      </div>
    </div>
    
  </div>
</div>

<style>
.media-coverage {
  padding: 3rem 0;
  position: relative;
}

.media-coverage::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(135deg, 
    rgba(39, 70, 99, 0.03) 0%, 
    rgba(100, 125, 153, 0.02) 50%, 
    rgba(239, 217, 196, 0.03) 100%);
  z-index: -1;
}

.media-section {
  margin-bottom: 4rem;
  position: relative;
}

.section-title {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 3rem;
  color: var(--global-text-color);
  position: relative;
  display: inline-block;
  letter-spacing: -0.02em;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--global-theme-color), var(--global-hover-color));
  border-radius: 2px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.article-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  position: relative;
  display: flex;
  flex-direction: column;
}

.featured-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  position: relative;
}

.article-card::before,
.featured-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--global-theme-color), var(--global-hover-color));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.article-card:hover,
.featured-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.12),
    0 8px 16px rgba(0, 0, 0, 0.08);
  border-color: rgba(255, 255, 255, 0.4);
}

.article-card:hover::before,
.featured-card:hover::before {
  opacity: 1;
}

.article-link,
.featured-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.article-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.featured-content {
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  height: 100%;
}

/* Article card image section */
.article-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.feature-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.article-card:hover .feature-img {
  transform: scale(1.05);
}

.article-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.article-card:hover .article-overlay {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.05);
}

.article-overlay .outlet-logo {
  width: 70px;
  height: 45px;
  background: transparent;
  box-shadow: none;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.article-overlay .outlet-logo.ai-frontiers {
  width: 100px;
  height: 45px;
}

.outlet-logo {
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 0.75rem;
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.outlet-logo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(39, 70, 99, 0.05) 0%, 
    rgba(100, 125, 153, 0.03) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.article-card:hover .outlet-logo,
.featured-card:hover .outlet-logo {
  transform: scale(1.1);
  box-shadow: 
    0 12px 24px rgba(0, 0, 0, 0.15),
    0 4px 8px rgba(0, 0, 0, 0.08);
}

.article-card:hover .outlet-logo::before,
.featured-card:hover .outlet-logo::before {
  opacity: 1;
}

.logo-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  z-index: 1;
  position: relative;
}

.article-info,
.featured-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.article-title,
.featured-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
  color: var(--global-text-color);
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
}

.article-card:hover .article-title,
.featured-card:hover .featured-title {
  color: var(--global-theme-color);
}

.article-summary {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--global-text-color-light);
  margin: 0 0 1rem 0;
  font-weight: 400;
}

.article-meta {
  margin: 0;
  color: var(--global-text-color-light);
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.4;
}

.featured-meta {
  margin: 0;
  color: var(--global-text-color-light);
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.author {
  font-weight: 600;
  color: var(--global-theme-color);
}

.date {
  color: var(--global-text-color-light);
  font-weight: 400;
}

.date-connector {
  color: var(--global-text-color-light);
  font-weight: 400;
}

/* Featured card dates keep the pill style */
.featured-meta .date {
  color: var(--global-theme-color);
  font-weight: 600;
  background: rgba(39, 70, 99, 0.08);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
}

.meta-separator {
  width: 4px;
  height: 4px;
  background: var(--global-text-color-light);
  border-radius: 50%;
  opacity: 0.6;
}

/* Dark mode enhancements */
[data-theme="dark"] .article-card,
[data-theme="dark"] .featured-card {
  background: rgba(33, 37, 41, 0.8);
  border-color: rgba(255, 255, 255, 0.1);
}

[data-theme="dark"] .outlet-logo {
  background: rgba(33, 37, 41, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

[data-theme="dark"] .outlet-logo::before {
  background: linear-gradient(135deg, 
    rgba(38, 152, 186, 0.1) 0%, 
    rgba(38, 152, 186, 0.05) 100%);
}

[data-theme="dark"] .featured-meta .date {
  background: rgba(38, 152, 186, 0.15);
}

[data-theme="dark"] .media-coverage::before {
  background: linear-gradient(135deg, 
    rgba(38, 152, 186, 0.05) 0%, 
    rgba(38, 152, 186, 0.02) 50%, 
    rgba(33, 37, 41, 0.03) 100%);
}

[data-theme="dark"] .article-overlay {
  background: rgba(33, 37, 41, 0.95);
}

[data-theme="dark"] .article-card:hover .article-overlay {
  background: rgba(33, 37, 41, 1);
}

/* Enhanced animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.article-card,
.featured-card {
  animation: fadeInUp 0.6s ease-out;
}

.article-card:nth-child(2),
.featured-card:nth-child(2) {
  animation-delay: 0.1s;
}

.article-card:nth-child(3),
.featured-card:nth-child(3) {
  animation-delay: 0.2s;
}

/* Responsive design improvements */
@media (max-width: 768px) {
  .articles-grid,
  .featured-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .article-content {
    padding: 1.5rem;
  }
  
  .featured-content {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
  
  .outlet-logo {
    align-self: center;
    margin-bottom: 1rem;
  }
  
  .article-image {
    height: 160px;
  }
  
  .article-overlay {
    top: 0.75rem;
    right: 0.75rem;
  }
  
  .article-overlay .outlet-logo {
    width: 55px;
    height: 35px;
  }
  
  .article-overlay .outlet-logo.ai-frontiers {
    width: 80px;
    height: 35px;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .media-coverage {
    padding: 2rem 0;
  }
}

@media (max-width: 480px) {
  .article-content,
  .featured-content {
    padding: 1.25rem;
  }
  
  .outlet-logo {
    width: 60px;
    height: 60px;
  }
  
  .article-image {
    height: 140px;
  }
  
  .article-overlay .outlet-logo {
    width: 50px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .article-overlay .outlet-logo.ai-frontiers {
    width: 70px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
}

/* Accessibility improvements */
.article-card:focus-within,
.featured-card:focus-within {
  outline: 2px solid var(--global-theme-color);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .article-card,
  .featured-card {
    animation: none;
    transition: none;
  }
  
  .article-card:hover,
  .featured-card:hover {
    transform: none;
  }
}
</style>