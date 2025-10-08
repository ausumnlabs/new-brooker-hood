import React, { useState } from 'react';
import './Hero.css';

function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    existingUser: '',
    society: '',
    city: '',
    rwaMember: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>Advanced AUSUMN solutions for India's finest communities</h1>
        <ul>
          <li>✔ Trusted by 1 lakh RWA members</li>
          <li>✔ Equipped with 220+ features</li>
          <li>✔ GDPR-ready solution</li>
        </ul>
        <button className="whatsapp-btn">Connect on WhatsApp</button>
        <div className="ratings">
          <div>⭐ 4.7/5 App Store</div>
          <div>⭐ 4.5/5 Play Store</div>
        </div>
      </div>

      <div className="hero-right">
        <form className="demo-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="mobile" 
            placeholder="Mobile" 
            value={formData.mobile} 
            onChange={handleChange} 
            required 
          />
          <select name="existingUser" value={formData.existingUser} onChange={handleChange} required>
            <option value="">Existing Mygate user</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <input 
            type="text" 
            name="society" 
            placeholder="Society name" 
            value={formData.society} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="city" 
            placeholder="City" 
            value={formData.city} 
            onChange={handleChange} 
            required 
          />
          <select name="rwaMember" value={formData.rwaMember} onChange={handleChange} required>
            <option value="">RWA Member</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
