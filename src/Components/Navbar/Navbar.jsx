import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          My Portfolio
        </motion.span>
        <motion.div className="socials"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <Link to="#"><motion.img src="/facebook.png" alt="Not Availabe"
            whileHover={{ opacity: 1, scale: 1.3 }}
            transition={{ duration: 0.3 }}
          /></Link>
          <Link to="#"><motion.img src="/instagram.png" alt="Not Availabe"
            whileHover={{ opacity: 1, scale: 1.3 }}
            transition={{ duration: 0.3 }}
          /></Link>
          <Link to="#"><motion.img src="/twitter.png" alt="Not Availabe"
            whileHover={{ opacity: 1, scale: 1.3 }}
            transition={{ duration: 0.3 }}
          /></Link>
          <Link to="#"><motion.img src="/youtube.png" alt="Not Availabe"
            whileHover={{ opacity: 1, scale: 1.3 }}
            transition={{ duration: 0.3 }}
          /></Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
