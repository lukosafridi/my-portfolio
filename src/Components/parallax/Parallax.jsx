import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const bgscroll = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)",
      }}>
      <motion.h1 style={{ y: bgscroll }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <div className="mountains"></div>
      <motion.div className="planets" style={{
        backgroundImage: `url(${type === "services" ? "planets.png" : "sun.png"})`,
      }} ></motion.div>
      <motion.div style={{ x: bgscroll }} className="starts"></motion.div>
    </div>
  )
}

export default Parallax
