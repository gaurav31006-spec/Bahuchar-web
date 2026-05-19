import SectionTitle from "../components/SectionTitle";

export default function Gallery() {
  const images = [
    "3d751803-e9e5-4cc2-b664-1eafb498fbfe.png",
    "7aebcf15-ac5c-46bb-a549-7877028506a3.png",
    "918fdb61-13e1-4272-89bc-d56bb795614e.png",
    "fd5ae552-cb0d-4a8f-bbc0-cbc9bd972f43.png",
    "660d74d3-82e9-4088-8215-9c31e8c16173.png",
    "76d02168-c2a4-4048-b453-daafbe396526.png",
    "9adc8533-0887-4932-afc2-3b2a6beafa4e.png",
    "e3afc567-dc2f-467d-bfbc-3b9c4464c20f.png"
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="Gallery"
          subtitle="Our workshop and industrial work"
        />

        <div className="grid gallery">
          {images.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}