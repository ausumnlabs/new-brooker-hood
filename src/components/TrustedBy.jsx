import React from 'react';
import '../App.css';

const TrustedBy = () => {
  // Array of trusted company logos (replace with actual image paths)
  const companies = [
    { id: 1, name: 'Prestige', logo: 'prestige-logo.png' },
    { id: 2, name: 'Sobha', logo: 'sobha-logo.png' },
    { id: 3, name: 'Brigade', logo: 'brigade-logo.png' },
    { id: 4, name: 'Godrej', logo: 'godrej-logo.png' },
    { id: 5, name: 'Prestige', logo: 'prestige-logo.png' },
    { id: 6, name: 'Sobha', logo: 'sobha-logo.png' },
    { id: 7, name: 'Brigade', logo: 'brigade-logo.png' },
    { id: 8, name: 'Godrej', logo: 'godrej-logo.png' },
  ];

  return (
    <section className="trusted-by">
      <div className="container">
        <div className="section-header">
          <h2>AUSUMN is trusted by India's top gated communities</h2>
          <p>Join 1,00,000+ communities who trust AUSUMN for their security needs</p>
        </div>
        
        <div className="logo-grid">
          {companies.map((company) => (
            <div key={company.id} className="logo-item">
              <div className="logo-placeholder">
                {company.name} Logo
              </div>
            </div>
          ))}
        </div>
        
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">1L+</div>
            <div className="stat-label">Homes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.7/5</div>
            <div className="stat-label">App Store</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.5/5</div>
            <div className="stat-label">Play Store</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">GDPR Ready</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
