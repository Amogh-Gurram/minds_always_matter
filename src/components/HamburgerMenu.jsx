import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Make sure you're using this
import "@fontsource/lora";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(); // 🟢 Ref to the entire component

  const toggleMenu = () => setOpen(!open);

  // 🟡 Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} style={{ position: 'relative' }}>
      {/* Hamburger Icon */}
      <div
        onClick={toggleMenu}
        style={{
          cursor: 'pointer',
          width: '70px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          paddingRight: '50px',
        }}
      >
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            style={{
              height: '6px',
              width: '100%',
              backgroundColor: '#ffdaed',
              borderRadius: '2px',
              transition: '0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '45px',
            right: 0,
            backgroundColor: '#2d4b2c',
            borderRadius: '12px',
            padding: '12px 16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 100,
            minWidth: '140px',
            color: '#f4d3d3',
            fontFamily: 'Lora',
            fontSize: '16px',
            animation: 'fadeIn 0.3s ease-in-out',
          }}
        >
          <Link to="/purpose" style={linkStyle}>Purpose</Link>
          <Link to="/about" style={linkStyle}>About Us</Link>
          <Link to="/events" style={linkStyle}>Events</Link>
          <Link to="/donate" style={linkStyle}>Donate</Link>
        </div>
      )}
    </div>
  );
}

const linkStyle = {
  display: 'block',
  padding: '6px 0',
  color: '#f4d3d3',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
};
