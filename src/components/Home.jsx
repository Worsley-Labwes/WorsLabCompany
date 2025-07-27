function Home() {
  const containerStyle = {
    padding: '40px 20px',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const heroStyle = {
    backgroundColor: '#fff',
    padding: '60px 40px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px'
  };

  const titleStyle = {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold'
  };

  const subtitleStyle = {
    fontSize: '1.3rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '30px'
  };

  const ctaButtonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s'
  };

  const featuresStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '50px'
  };

  const featureCardStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <div style={heroStyle}>
        <h1 style={titleStyle}>Welcome to Our Company</h1>
        <p style={subtitleStyle}>
          We are dedicated to delivering excellence in all our services. 
          With over 30 years of experience, we provide innovative solutions 
          that drive success for businesses worldwide.
        </p>
        <a 
          href="/contact" 
          style={ctaButtonStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Get Started Today
        </a>
      </div>

      <div style={featuresStyle}>
        <div style={featureCardStyle}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>Quality Service</h3>
          <p style={{ color: '#666', lineHeight: '1.5' }}>
            We maintain the highest standards in everything we do, ensuring 
            exceptional results for our clients.
          </p>
        </div>
        <div style={featureCardStyle}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>Expert Team</h3>
          <p style={{ color: '#666', lineHeight: '1.5' }}>
            Our team consists of industry professionals with decades of 
            combined experience and expertise.
          </p>
        </div>
        <div style={featureCardStyle}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>Innovation</h3>
          <p style={{ color: '#666', lineHeight: '1.5' }}>
            We stay ahead of industry trends and leverage cutting-edge 
            technology to deliver innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;