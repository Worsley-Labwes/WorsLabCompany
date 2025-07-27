import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    transition: 'background-color 0.3s'
  };

  const linkHoverStyle = {
    backgroundColor: '#555'
  };

  return (
    <nav style={navStyle}>
      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
        My Company
      </div>
      <div>
        <Link 
          to="/" 
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          About
        </Link>
        <Link 
          to="/services" 
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Services
        </Link>
        <Link 
          to="/contact" 
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;