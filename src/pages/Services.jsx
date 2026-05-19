import SectionTitle from "../components/SectionTitle";

export default function Services() {

  const services = [
    {
      title: "Thread Rolling Work",
      desc: "High precision thread rolling services for industrial shafts, rods and engineering components with smooth finishing and durability.",
      points: [
        "External Thread Rolling",
        "Industrial Shaft Threading",
        "Precision Thread Finishing",
        "Bulk Production Support"
      ]
    },

    {
      title: "Lathe Machine Job Work",
      desc: "Professional lathe machining services for turning, facing, grooving and custom industrial components.",
      points: [
        "Turning Operations",
        "Facing & Grooving",
        "Custom Shaft Machining",
        "Heavy Duty Lathe Work"
      ]
    },

    {
      title: "Shaft Manufacturing",
      desc: "Custom industrial shaft manufacturing with precision machining and accurate dimensions.",
      points: [
        "Industrial Shafts",
        "Threaded Shafts",
        "Precision Finishing",
        "Custom Sizes Available"
      ]
    },

    {
      title: "Thread Cutting Services",
      desc: "Accurate threading solutions for rods, pipes and machine components using advanced threading machines.",
      points: [
        "Internal & External Threads",
        "Pipe Threading",
        "Fine Thread Cutting",
        "Custom Thread Design"
      ]
    },

    {
      title: "Radial Drilling Work",
      desc: "Heavy-duty drilling services for industrial metal parts and engineering components.",
      points: [
        "Precision Hole Drilling",
        "Heavy Material Drilling",
        "Industrial Components",
        "Custom Drilling Work"
      ]
    },

    {
      title: "Rolling & Forming Work",
      desc: "Industrial rolling and metal forming solutions with accurate shaping and smooth finishing.",
      points: [
        "Round Bar Rolling",
        "Metal Forming",
        "Industrial Rolling",
        "Custom Rolling Solutions"
      ]
    },

    {
      title: "Precision Machining",
      desc: "Advanced machining services for custom industrial parts and engineering applications.",
      points: [
        "Custom Machine Parts",
        "Precision Engineering",
        "Industrial Components",
        "Accurate Finishing"
      ]
    },

    {
      title: "Metal Finishing Work",
      desc: "Professional surface finishing and polishing services for industrial shafts and machined components.",
      points: [
        "Smooth Surface Finish",
        "Polishing Work",
        "Industrial Component Finishing",
        "High Quality Output"
      ]
    },

    {
      title: "All Kind Of Job Work",
      desc: "Complete industrial machining and fabrication services under one roof.",
      points: [
        "Threading & Rolling",
        "Lathe & Drilling Work",
        "Custom Fabrication",
        "Industrial Engineering Solutions"
      ]
    }
  ];

  return (
    <section className="services-section">

      <div className="container">

        <SectionTitle
          title="Our Services"
          subtitle="Professional machining and industrial job work services"
        />

        <div className="services-wrapper">

          {services.map((service, i) => (

            <div className="service-card" key={i}>

              <div className="service-content">

                <h2>{service.title}</h2>

                <p>{service.desc}</p>

                <ul>
                  {service.points.map((point, index) => (
                    <li key={index}>
                      ✔ {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="service-btn"
                >
                  Get Quote
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}