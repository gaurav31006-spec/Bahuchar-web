import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <section className="section contact-section">
      <div className="container">

        <SectionTitle
          title="Contact Us"
          subtitle="Get in touch with Bahuchar Industry"
        />

        <div
          className="contact-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

          <div
            className="contact-info card"
            style={{
              maxWidth: "700px",
              width: "100%",
              textAlign: "center",
            }}
          >

            <h2>Bahuchar Industry</h2>

            <p>
              Need Threading, Rolling, Job Work or Custom Machining Parts?
              Contact Bahuchar Industry directly by phone call.
            </p>

            <div className="info-box">
              <h4 style={{ textAlign: "left" }}>📍 Factory Location</h4>

              <div  style={{ textAlign: "left" ,paddingLeft:"20px"}}>
                <a
                  href="https://maps.app.goo.gl/9AcynjtvvVb3vaeD8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="info-box">
              <h4 style={{ textAlign: "left" }} >📞 Phone</h4>

              <div className="phone-box">
                <p>+91 9898096768</p>

                <a href="tel:+919898096768" className="call-btn">
                  Call Now
                </a>
              </div>

              <div className="phone-box">
                <p>+91 9824223414</p>

                <a href="tel:+919824223414" className="call-btn">
                  Call Now
                </a>
              </div>
            </div>

            <div className="info-box">
              <h4 style={{ textAlign: "left" }}>✉️ Email</h4>

              <div className="phone-box">
                <p>info@bahucharindustry.com</p>

                <a
                  href="mailto:info@bahucharindustry.com"
                  className="call-btn"
                >
                  Send Mail
                </a>
              </div>
            </div>

            <div className="info-box">
              <h4>🕒 Working Hours</h4>
              <p>Mon - Sat : 7:00 AM - 10:00 PM</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}