import './links.scss';
// import { motion } from 'framer-motion';
// mport { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}
// const itemsVariants = {
//   open: {
//     y: 0,
//     opacity: 1,

//   },
//   closed: {
//     y: 50,
//     opacity: 0,

//   }
// }


const Links = () => {

  const items = [
    "Home", "About", "Portfolio", "Contact"
  ]
  useEffect(() => {
    const handleScrollTo = (id) => {
      const element = document.getElementById(id)
        ;
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    const handleClick = (id) => {
      handleScrollTo(id)
        ;
    };

    // Clean up event listener
    return () => window.removeEventListener('click', handleClick);
  }, []);
  return (
    <motion.div className='links' variants={variants}>
      {items.map(item => (
        <ScrollLink
          to={item}
          key={item}
          spy={true}
          smooth={true}
          duration={100}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          {item}
        </ScrollLink>
      ))}
    </motion.div>
  )
}

export default Links
