import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  function hello() {
    navigate("/contact");
  }
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Precision Machining & Job Work Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Bahuchar Industry provides high-quality threading,
            rolling, CNC machining and fabrication services.
          </motion.p>

          <button onClick={hello} className="btn">Get Quote</button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Our Services"
            subtitle="High quality industrial job work solutions"
          />

          <div className="grid">

            <ServiceCard
              title="Thread Rolling Work"
              desc="High precision industrial thread rolling for shafts, rods, and custom components."
            />

            <ServiceCard
              title="Lathe Machine Work"
              desc="Turning, facing, grooving, threading, drilling, and precision machining services."
            />

            <ServiceCard
              title="Shaft Manufacturing"
              desc="Custom industrial shafts with precision finishing and threading."
            />

            <ServiceCard
              title="Thread Cutting Work"
              desc="Accurate external threading solutions for industrial applications."
            />

            <ServiceCard
              title="Radial Drilling Work"
              desc="Heavy-duty drilling services for metal and industrial components."
            />

            <ServiceCard
              title="Rolling & Forming Work"
              desc="Industrial rolling and metal forming job work with high accuracy."
            />

            <ServiceCard
              title="Custom Machining"
              desc="Custom-built industrial parts and precision engineering solutions."
            />

            <ServiceCard
              title="Metal Finishing"
              desc="Smooth surface finishing and polishing for shafts and machined components."
            />

            <ServiceCard
              title="Industrial Job Work"
              desc="Complete machining, fabrication, threading, drilling, and rolling services."
            />

          </div>
        </div>
      </section>
    </>
  );
}