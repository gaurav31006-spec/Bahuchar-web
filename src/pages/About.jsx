import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function About() {

  const partners = [
    {
      name: "Kaushik Yadav ",
      // role: "Production Head",
      phone: "+91 9898096768",
      image: "Gemini_Generated_Image_i4a94hi4a94hi4a9.png",
      experience: "15+ Years Experience"
    },

    {
      name: "Rajesh Yadav",
      role: "Operations Partner",
      phone: "+91 9824223414",
      image: "ChatGPT Image May 13, 2026, 02_43_23 PM.png",
      experience: "15+ Years Experience"
    },

    {
      name: "Vimal Yadav",
      // role: "Quality Supervisor",
      phone: "+91 8460210522",
      image: "/ChatGPT Image May 13, 2026, 02_47_36 PM.png",
      experience: "13+ Years Experience"
    },

    {
      name: "Dharmesh Yadav",
      // role: "Client Relations",
      phone: "+91 9978410408",
      image: "ChatGPT Image May 13, 2026, 02_39_51 PM.png",
      experience: "13+ Years Experience"
    }
  ];

  return (
    <>

      {/* ABOUT SECTION */}

      <section className="section">

        <div className="container">

          <SectionTitle
            title="About Bahuchar Industry"
            subtitle="Trusted industrial machining & job-work company"
          />

          <motion.div
            className="card about-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h3>Who We Are</h3>

            <br />

            <p>
              Bahuchar Industry specializes in precision machining,
              threading, rolling, fabrication and industrial job work
              solutions for engineering industries.
            </p>

            <br />

            <p>
              Our mission is to deliver high-quality industrial services
              with accuracy, timely delivery and customer satisfaction.
            </p>

            <br />

            <p>
              With advanced machinery and skilled workforce,
              we provide reliable machining solutions for multiple industries.
            </p>

          </motion.div>

        </div>

      </section>

      {/* PARTNERS SECTION */}

      <section className="section partner-section">

        <div className="container">

          <SectionTitle
            title="Meet Our Leadership"
            subtitle="Experienced professionals behind Bahuchar Industry"
          />

          <div className="grid">

            {partners.map((partner, index) => (

              <motion.div
                className="card partner-card"
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >

                <img
                  src={partner.image}
                  alt={partner.name}
                  className="partner-img"
                />

                <h3>{partner.name}</h3>

                <p className="partner-role">
                  {partner.phone}
                </p>

                <p className="partner-exp">
                  {partner.experience}
                </p>

                <a
                  href={`tel:${partner.phone}`}
                  className="btn"
                >
                  Call Now
                </a>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
}