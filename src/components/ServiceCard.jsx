import { motion } from "framer-motion";

export default function ServiceCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card"
    >
      <h3>{title}</h3>
      <br />
      <p>{desc}</p>
    </motion.div>
  );
}