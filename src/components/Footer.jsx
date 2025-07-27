function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '40px 20px 20px',
    marginTop: 'auto'
  };

  const footerContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px'
  };

  const footerSectionStyle = {
    marginBottom: '20px'
  };

  const footerTitleStyle = {
    fontSize: '1.3rem',
    marginBottom: '15px',
    color: '#fff',
    fontWeight: 'bold'
  };

  const footerTextStyle = {
    color: '#ccc',
    lineHeight: '1.6',
    marginBottom: '10px'
  };

  const footerLinkStyle = {
    color: '#ccc',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px',
    transition: 'color 0.3s'
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '15px',
    marginTop: '15px'
  };

  const socialLinkStyle = {
    color: '#ccc',
    fontSize: '1.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s'
  };

  const copyrightStyle = {
    borderTop: '1px solid #555',
    paddingTop: '20px',
    marginTop: '30px',
    textAlign: 'center',
    color: '#999',
    gridColumn: '1 / -1'
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={footerSectionStyle}>
          <h3 style={footerTitleStyle}>My Company</h3>
          <p style={footerTextStyle}>
            Delivering excellence in technology consulting, market analysis, 
            and product development since 1990. Your success is our mission.
          </p>
          <div style={socialLinksStyle}>
            <a 
              href="#" 
              style={socialLinkStyle}
              onMouseEnter={(e) => e.target.style.color = '#007bff'}
              onMouseLeave={(e) => e.target.style.color = '#ccc'}
            >
              📘
            </a>
            <a 
              href="#" 
              style={socialLinkStyle}
              onMouseEnter={(e) => e.target.style.color = '#007bff'}
              onMouseLeave={(e) => e.target.style.color = '#ccc'}
            >
              🐦
            </a>
            <a 
              href="#" 
              style={socialLinkStyle}
              onMouseEnter={(e) => e.target.style.color = '#007bff'}
              onMouseLeave={(e) => e.target.style.color = '#ccc'}
            >
              💼
            </a>
            <a 
              href="#" 
              style={socialLinkStyle}
              onMouseEnter={(e) => e.target.style.color = '#007bff'}
              onMouseLeave={(e) => e.target.style.color = '#ccc'}
            >
              📧
            </a>
          </div>
        </div>

        <div style={footerSectionStyle}>
          <h3 style={footerTitleStyle}>Quick Links</h3>
          <a 
            href="/" 
            style={footerLinkStyle}
            onMouseEnter={(e) => e.target.style.color = '#007bff'}
            onMouseLeave={(e) => e.target.style.color = '#ccc'}
          >
            Home
          </a>
          <a 
            href="/about" 
            style={footerLinkStyle}
            onMouseEnter={(e) => e.target.style.color = '#007bff'}
            onMouseLeave={(e) => e.target.style.color = '#ccc'}
          >
            About Us
          </a>
          <a 
            href="/services" 
            style={footerLinkStyle}
            onMouseEnter={(e) => e.target.style.color = '#007bff'}
            onMouseLeave={(e) => e.target.style.color = '#ccc'}
          >
            Services
          </a>
          <a 
            href="/contact" 
            style={footerLinkStyle}
            onMouseEnter={(e) => e.target.style.color = '#007bff'}
            onMouseLeave={(e) => e.target.style.color = '#ccc'}
          >
            Contact
          </a>
        </div>

        <div style={footerSectionStyle}>
          <h3 style={footerTitleStyle}>Services</h3>
          <a 
            href="/services" 
            style={footerLinkStyle}
            onMouseEnter={(e) => e.target.style.color = '#007bff'}
            onMouseLeave={(e) => e.target.style.color = '#ccc'}
          >
            Technology Consulting
          </a>
          <a 
            href="/services" 
            style={footerLinkStyle}
            onMouseEnter={(e) => e.target.style.color = '#007bff'}
            onMouseLeave={(e) => e.target.style.color = '#ccc'}
          >
            Market Analysis
          </a>
          <a 
            href="/services" 
            style={footerLinkStyle}
            onMouseEnter={(e) => e.target.style.color = '#007bff'}
            onMouseLeave={(e) => e.target.style.color = '#ccc'}
          >
            Product Development
          </a>
          <a 
            href="/services" 
            style={footerLinkStyle}
            onMouseEnter={(e) => e.target.style.color = '#007bff'}
            onMouseLeave={(e) => e.target.style.color = '#ccc'}
          >
            Business Strategy
          </a>
        </div>

        <div style={footerSectionStyle}>
          <h3 style={footerTitleStyle}>Contact Info</h3>
          <p style={footerTextStyle}>
            📍 123 Business Street<br />
            Suite 100<br />
            City, State 12345
          </p>
          <p style={footerTextStyle}>
            📞 (555) 123-4567
          </p>
          <p style={footerTextStyle}>
            ✉️ info@mycompany.com
          </p>
        </div>

        <div style={copyrightStyle}>
          <p>&copy; 2024 My Company. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;