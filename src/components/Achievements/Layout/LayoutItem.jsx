import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

export default function Layout({ title, image, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        layout="position"
        transition={{ layout: { duration: 1, type: "spring" } }}
        onClick={() => setIsOpen(!isOpen)}
        className="card"
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        }}
      >
        <motion.div layout="position" className="avatar">
          <motion.div layout="position" className="circle">
            <motion.img
              layout="position"
              className="image-logo"
              src={image}
              alt="logo"
            />
          </motion.div>
          <motion.h3>{title}</motion.h3>
        </motion.div>

        {isOpen && (
          <motion.div>
            <p className="expand">{content}</p>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
