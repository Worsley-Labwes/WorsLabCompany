function About() {
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

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    alignItems: 'start'
  };

  const sectionStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const sectionTitleStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '20px',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px'
  };

  const paragraphStyle = {
    lineHeight: '1.7',
    color: '#666',
    marginBottom: '15px'
  };

  const timelineStyle = {
    gridColumn: 'span 2',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginTop: '30px'
  };

  const timelineItemStyle = {
    display: 'flex',
    marginBottom: '20px',
    alignItems: 'flex-start'
  };

  const yearStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '5px 15px',
    borderRadius: '20px',
    fontWeight: 'bold',
    marginRight: '20px',
    minWidth: '80px',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>About Us</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          Learn more about our journey, mission, and values
        </p>
      </div>

      <div style={contentStyle}>
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Our Story</h2>
          <p style={paragraphStyle}>
            Our company has been providing top-notch services since 1990. 
            Founded with a vision to revolutionize the industry, we have 
            grown from a small startup to a leading provider of technology 
            solutions.
          </p>
          <p style={paragraphStyle}>
            We specialize in various fields including technology consulting, 
            market analysis, and product development. Our commitment to 
            excellence has earned us the trust of clients worldwide.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Our Mission</h2>
          <p style={paragraphStyle}>
            To empower businesses with innovative solutions that drive growth 
            and success. We believe in creating value through technology and 
            strategic thinking.
          </p>
          <h3 style={{ color: '#333', marginTop: '25px', marginBottom: '15px' }}>
            Our Values
          </h3>
          <ul style={{ color: '#666', lineHeight: '1.7' }}>
            <li>Innovation and creativity</li>
            <li>Client-first approach</li>
            <li>Integrity and transparency</li>
            <li>Continuous improvement</li>
            <li>Teamwork and collaboration</li>
          </ul>
        </div>

        <div style={timelineStyle}>
          <h2 style={sectionTitleStyle}>Our Journey</h2>
          <div style={timelineItemStyle}>
            <div style={yearStyle}>1990</div>
            <div>
              <strong style={{ color: '#333' }}>Company Founded</strong>
              <p style={{ margin: '5px 0', color: '#666' }}>
                Started as a small technology consulting firm with 3 employees.
              </p>
            </div>
          </div>
          <div style={timelineItemStyle}>
            <div style={yearStyle}>2000</div>
            <div>
              <strong style={{ color: '#333' }}>Expansion</strong>
              <p style={{ margin: '5px 0', color: '#666' }}>
                Expanded services to include market analysis and opened second office.
              </p>
            </div>
          </div>
          <div style={timelineItemStyle}>
            <div style={yearStyle}>2010</div>
            <div>
              <strong style={{ color: '#333' }}>International Growth</strong>
              <p style={{ margin: '5px 0', color: '#666' }}>
                Established international presence with offices in 5 countries.
              </p>
            </div>
          </div>
          <div style={timelineItemStyle}>
            <div style={yearStyle}>2020</div>
            <div>
              <strong style={{ color: '#333' }}>Digital Transformation</strong>
              <p style={{ margin: '5px 0', color: '#666' }}>
                Pioneered digital solutions and became industry leader in innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;