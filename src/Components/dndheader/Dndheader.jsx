import React from 'react';
import './dndheader.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Dndheader = () => {
  return (
    <>
    <div className='header-left'>
        <Link to="#"><motion.img className='logo' src="/logo.png" alt="Not Availabe"/></Link>
    </div>
    <div className='header-right'>
        <Link to="#"><motion.img className='print-mark' src="/print-mark.png" alt="Image Not Available"/></Link>
    </div>
    </>
  )
}

export default Dndheader