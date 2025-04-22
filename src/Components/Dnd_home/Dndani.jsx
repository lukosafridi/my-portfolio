import React, { useEffect, useState, useRef } from "react";
import "./dnd.scss";
import { motion } from "framer-motion";

// const scalani = {
//   hover: {
//     scale: [1,1.1,1,1.1,1],
//     transition: {
//       duration: .5,
//       repeat: Infinity,
//     }
//   }
// }

const rorateani = {
  start: {
    rotate: 0,
  },
  end: {
    rotate: 360,
    transition: {
      duration: 8,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

// const mousetrack = {
//   start: {
//     rotateX: rotate.x,
//     rotateY: rotate.y,
//     transition: { type: "spring", stiffness: 120, damping: 15 },
//   },
// };

const Dndani = () => {

  const imageRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imageRef.current) return;

      const bounds = imageRef.current.getBoundingClientRect();
      const x = e.clientX - (bounds.left + bounds.width / 2);
      const y = e.clientY - (bounds.top + bounds.height / 2);

      setRotate({
        x: -(y / 20),
        y: x / 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hero">
      <motion.img
        variants={rorateani}
        initial="start"
        animate="end"
        className="asterisk"
        src="/Asterisk.png"
        alt="Image Not Available"
      />
      <motion.img
        ref={imageRef}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}

        className="gameboy"
        src="/gameboy.png"
        alt="Image Not Available"
      />
      <motion.img className="dndtxt" src="/DND.png" alt="Image Not Available" />
      <p>
        <span>a brand design studio.</span>
      </p>
    </div>
  );
};

export default Dndani;
