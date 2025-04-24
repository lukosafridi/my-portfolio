import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/contact/Contact";
import Hero from "./Components/hero/Hero";
import Parallax from "./Components/parallax/Parallax";
// import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/services/Services";
import Practice from "./Components/Practce/Practice";
// import Dndani from './Components/Dnd_home/Dndani';
// import Dndheader from './Components/dndheader/Dndheader';

function App() {
  const homevariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6, // optional duration here too
        ease: "easeOut",
      },
    },
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: 90 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const slidin = {
    hidden: {
      opacity: 0,
      x: -900,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      }
    }
  }
  

  return (
    // <BrowserRouter>

    // <div className='main-body'>
    //   <div className='main-header'>
    //     <Dndheader/>
    //   </div>
    //   <div className='home'>
    //     <Dndani/>
    //   </div>
    // </div>
    // </BrowserRouter>
    <BrowserRouter>
      <div className="App">
        <motion.section
          id="Home"
          variants={homevariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          exit="hidden"
        >
          <Navbar />
          <Practice/>
          <Hero />
        </motion.section>

        <motion.section
          variants={rotateIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          exit="hidden"
        >
          <Parallax type="services" />
        </motion.section>

        <motion.section
          id="About"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          exit="hidden"
        >
          <Services />
        </motion.section>

        <motion.section
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          exit="hidden"
        >
          <Parallax type="portfolio" />
        </motion.section>

        {/* <Portfolio /> */}

        <motion.section
          id="Contact"
          variants={slidin}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          exit="hidden"
        >
          <Contact />
        </motion.section>
      </div>
    </BrowserRouter>
  );
}

export default App;
