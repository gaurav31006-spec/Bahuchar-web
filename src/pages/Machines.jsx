import SectionTitle from "../components/SectionTitle";

export default function Machines() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="Machines & Infrastructure"
          subtitle="Advanced industrial machinery"
        />

        <table className="machine-table">
          <thead>
            <tr>
              <th>Machine</th>
              <th>Capacity</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Center Lathe Machine</td>
              <td>Used for turning, facing, threading, drilling, and machining cylindrical parts.</td>
            </tr>

            <tr>
              <td>Radial Drilling Machine</td>
              <td>Used for drilling large and heavy metal components</td>
            </tr>

            <tr>
              <td>Pipe / Rod Threading Machine</td>
              <td>Used for external threading on long shafts and rods.</td>
            </tr>

            <tr>
              <td>Hydraulic Thread Rolling Machine</td>
              <td>Heavy-duty rolling machine for industrial threaded components.</td>
            </tr>
            <tr>
              <td>Shaft Grinding / Finishing Machine (possible from setup)</td>
              <td>Used for finishing and polishing cylindrical shafts.</td>
            </tr>
            <tr>
              <td>Industrial Machining & Job Work Setup</td>
              <td>Your workshop also includes precision machining stations for custom industrial parts.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}