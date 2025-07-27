function Services() {
  const containerStyle = {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '50px'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px'
  };

  const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '50px'
  };

  const serviceCardStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer'
  };

  const serviceIconStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
    display: 'block'
  };

  const serviceTitleStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '15px',
    fontWeight: 'bold'
  };

  const serviceDescStyle = {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px'
  };

  const featureListStyle = {
    listStyle: 'none',
    padding: '0'
  };

  const featureItemStyle = {
    color: '#666',
    marginBottom: '8px',
    paddingLeft: '20px',
    position: 'relative'
  };

  const ctaStyle = {
    backgroundColor: '#f8f9fa',
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
    marginTop: '40px'
  };

  const services = [
    {
      icon: '💻',
      title: 'Technology Consulting',
      description: 'Transform your business with cutting-edge technology solutions tailored to your specific needs.',
      features: ['Digital Strategy Planning', 'System Architecture Design', 'Technology Implementation', 'Performance Optimization']
    },
    {
      icon: '📊',
      title: 'Market Analysis',
      description: 'Gain competitive advantage with comprehensive market research and data-driven insights.',
      features: ['Competitive Analysis', 'Market Trends Research', 'Customer Behavior Analysis', 'ROI Forecasting']
    },
    {
      icon: '🚀',
      title: 'Product Development',
      description: 'From concept to launch, we help you build products that resonate with your target market.',
      features: ['Product Strategy', 'Prototype Development', 'User Experience Design', 'Market Testing']
    },
    {
      icon: '🎯',
      title: 'Business Strategy',
      description: 'Strategic planning and execution to help your business achieve its long-term objectives.',
      features: ['Strategic Planning', 'Process Optimization', 'Change Management', 'Performance Metrics']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud and scale your operations with secure, reliable cloud infrastructure.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Security Implementation', 'Cost Optimization']
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions and risk management.',
      features: ['Security Audits', 'Threat Assessment', 'Security Training', '24/7 Monitoring']
    }
  ];

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Our Services</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          Comprehensive solutions to drive your business forward
        </p>
      </div>

      <div style={servicesGridStyle}>
        {services.map((service, index) => (
          <div 
            key={index}
            style={serviceCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={serviceIconStyle}>{service.icon}</div>
            <h3 style={serviceTitleStyle}>{service.title}</h3>
            <p style={serviceDescStyle}>{service.description}</p>
            <ul style={featureListStyle}>
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} style={featureItemStyle}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: '#007bff',
                    fontWeight: 'bold'
                  }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={ctaStyle}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>
          Ready to Get Started?
        </h2>
        <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1rem' }}>
          Contact us today to discuss how we can help transform your business
        </p>
        <a 
          href="/contact"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '15px 30px',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1.1rem',
            display: 'inline-block',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Contact Us Now
        </a>
      </div>
    </div>
  );
}

export default Services;