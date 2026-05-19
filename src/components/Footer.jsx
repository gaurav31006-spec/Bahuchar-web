// Footer.jsx

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Company Info */}
        <div className="footer-box">
          <h2>Bahuchar Industry</h2>
          <p>
            We provide precision machining and industrial job work
            services including threading, rolling, lathe machine work,
            drilling, cutting, fabrication, and custom machine parts.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-box">
          <h3>Services</h3>
          <ul>
            <li>Threading Work</li>
            <li>Rolling Work</li>
            <li>Lathe Machine Job Work</li>
            <li>Drilling & Cutting</li>
            <li>Fabrication Work</li>
            <li>* All Type Of Job Work *</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p>📍 Rajkot, Gujarat</p>
          <p>📞 +91 98980 96768</p>
          <p>📞 +91 98242 23414</p>
          <p>📞 +91 84602 10522</p>
          <p>📞 +91 99784 10408</p>
          <p>✉️ bahucharindustry@gmail.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Bahuchar Industry. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}