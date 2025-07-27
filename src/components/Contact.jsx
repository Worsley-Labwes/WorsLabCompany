import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

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
    gap: '50px',
    alignItems: 'start'
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    margin: '10px 0',
    border: '2px solid #e0e0e0',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical',
    fontFamily: 'Arial, sans-serif'
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
    marginTop: '20px'
  };

  const infoStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const infoItemStyle = {
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    borderLeft: '4px solid #007bff'
  };

  const successMessageStyle = {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '20px',
    border: '1px solid #c3e6cb',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Contact Us</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          Get in touch with us to discuss your project or ask any questions
        </p>
      </div>

      <div style={contentStyle}>
        <div style={formStyle}>
          <h2 style={{ color: '#333', marginBottom: '30px' }}>Send us a Message</h2>
          
          {isSubmitted && (
            <div style={successMessageStyle}>
              <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              required
            />
            <button 
              type="submit"
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
              disabled={isSubmitted}
            >
              {isSubmitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>

        <div style={infoStyle}>
          <h2 style={{ color: '#333', marginBottom: '30px' }}>Get in Touch</h2>
          
          <div style={infoItemStyle}>
            <h3 style={{ color: '#333', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              📍 Address
            </h3>
            <p style={{ color: '#666', margin: '0' }}>
              123 Business Street<br />
              Suite 100<br />
              City, State 12345
            </p>
          </div>

          <div style={infoItemStyle}>
            <h3 style={{ color: '#333', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              📞 Phone
            </h3>
            <p style={{ color: '#666', margin: '0' }}>
              (555) 123-4567
            </p>
          </div>

          <div style={infoItemStyle}>
            <h3 style={{ color: '#333', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              ✉️ Email
            </h3>
            <p style={{ color: '#666', margin: '0' }}>
              info@mycompany.com
            </p>
          </div>

          <div style={infoItemStyle}>
            <h3 style={{ color: '#333', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              🕒 Business Hours
            </h3>
            <p style={{ color: '#666', margin: '0' }}>
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;