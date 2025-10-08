import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import BookDemoModal from './components/BookDemoModal';

// Animation classes
const animationClasses = {
  nav: 'animate-slide-down',
  item: 'animate-fade-in',
  dropdown: 'animate-dropdown',
  button: 'animate-scale-in'
};

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cursorRef = useRef(null);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation items
  const navItems = [
    { 
      name: 'Communities', 
      path: '/',
      dropdown: [
        { name: 'Apartments', path: '/apartments' },
        { name: 'Gated Communities', path: '/gated-communities' },
        { name: 'Villas', path: '/villas' },
        { name: 'Plotted Development', path: '/plotted' }
      ]
    },
    { 
      name: 'Locks', 
      path: '/locks',
      dropdown: [
        { name: 'Smart Locks', path: '/smart-locks' },
        { name: 'Digital Locks', path: '/digital-locks' },
        { name: 'Access Control', path: '/access-control' }
      ]
    },
    { 
      name: 'Brands', 
      path: '/brands',
      dropdown: [
        { name: 'Our Technology', path: '/technology' },
        { name: 'Partners', path: '/partners' },
        { name: 'Success Stories', path: '/success-stories' }
      ]
    },
    { 
      name: 'Business', 
      path: '/business'
      // No dropdown for Business
    },
    { 
      name: 'Company', 
      path: '/company',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    { 
      name: 'Login', 
      path: '/login'
      // No dropdown for Login
    }
  ];

  const handleNavClick = (index, path) => {
    setActiveItem(index);
    if (path === '/login') {
      navigate('/login');
    }
  };

  const handleMouseEnter = (e) => {
    if (!e || !e.currentTarget) return;
    
    try {
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const cursor = target.querySelector('.cursor-effect');
      if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        cursor.classList.add('active');
      }
    } catch (error) {
      console.error('Error in handleMouseEnter:', error);
    }
  };

  const handleMouseLeave = (e) => {
    if (!e || !e.currentTarget) return;
    
    try {
      const cursor = e.currentTarget.querySelector('.cursor-effect');
      if (cursor) {
        cursor.classList.remove('active');
      }
    } catch (error) {
      console.error('Error in handleMouseLeave:', error);
    }
  };

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close dropdown when route changes
  useEffect(() => {
    setHoveredItem(null);
  }, [location]);

  return (
    <>
      <nav 
        ref={navbarRef}
        className={`navbar ${scrolled ? 'scrolled' : ''} ${animationClasses.nav}`}
      >
        <div className="nav-container">
          <div className="nav-logo-container">
            <Link 
              to="/" 
              className="nav-logo hover-effect"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-effect"></span>
              mygate
            </Link>
          </div>
          
          <div className="nav-content">
            <ul className="nav-links">
              {navItems.map((item, index) => (
            <li 
              key={index}
              className={`nav-item ${activeItem === index ? 'active' : ''} ${item.dropdown ? 'has-dropdown' : ''} ${animationClasses.item}`}
              onMouseEnter={(e) => {
                setActiveItem(index);
                if (item.dropdown) setHoveredItem(index);
                handleMouseEnter(e);
              }}
              onMouseLeave={(e) => {
                setHoveredItem(null);
                setActiveItem(null);
                handleMouseLeave(e);
              }}
            >
              {item.path === '/login' ? (
                <Link 
                  to={item.path} 
                  className="nav-link hover-effect"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="cursor-effect"></span>
                  {item.name}
                </Link>
              ) : (
                <span 
                  className="nav-link hover-effect"
                  onClick={() => handleNavClick(index, item.path)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="cursor-effect"></span>
                  {item.name}
                  {item.dropdown && <span className="dropdown-arrow">▼</span>}
                </span>
              )}
              
              {item.dropdown && hoveredItem === index && (
                <div className={`dropdown-menu ${animationClasses.dropdown}`}>
                    {item.dropdown.map((subItem, subIndex) => (
                      <div 
                        key={subIndex}
                        className="dropdown-item-wrapper"
                        style={{
                          animation: `fadeIn 0.3s ease-out ${0.1 * subIndex}s forwards`,
                          opacity: 0,
                          transform: 'translateY(10px)'
                        }}
                      >
                        <Link 
                          to={subItem.path}
                          className="dropdown-item hover-effect"
                          onClick={() => setHoveredItem(null)}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <span className="cursor-effect"></span>
                          {subItem.name}
                        </Link>
                      </div>
                    ))}
                </div>
              )}
              
              <span className="nav-underline"></span>
            </li>
            ))}
            </ul>
            
            <div className="nav-actions">
              <button 
                className={`book-btn hover-effect ${animationClasses.button}`}
                onClick={() => setShowDemoModal(true)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="cursor-effect"></span>
                Book Demo
              </button>
            </div>
          </div>
        </div>
        </nav>
        
        {showDemoModal && (
          <BookDemoModal onClose={() => setShowDemoModal(false)} />
        )}
      </>
    );
  }
  
  export default Navbar;
