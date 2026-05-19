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
              <th>Work</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Center Lathe Machine</td>
              <td>Turning & threading work</td>
            </tr>

            <tr>
              <td>Radial Drilling Machine</td>
              <td>Heavy drilling operations</td>
            </tr>

            <tr>
              <td>Threading Machine</td>
              <td>Rod & shaft threading</td>
            </tr>

            <tr>
              <td>Hydraulic Rolling Machine</td>
              <td>Industrial thread rolling</td>
            </tr>

            <tr>
              <td>Shaft Finishing Machine</td>
              <td>Polishing & finishing</td>
            </tr>

            <tr>
              <td>Machining Setup</td>
              <td>Custom industrial job work</td>
            </tr>

          </tbody>

        </table>

      </div>
    </section>
  );
}