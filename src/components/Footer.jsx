import React from 'react'

const Footer = ({ t }) => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📞 +84 342 134 941</p>
          <p>📧 tourvietn@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">WhatsApp</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#tours">Tours</a>
          <a href="#activities">Activities</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.footer}</p>
      </div>
    </footer>
  )
}

export default Footer
