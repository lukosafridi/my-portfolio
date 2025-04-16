import React from 'react';
import './dnd.scss';
import { motion } from 'framer-motion';

const Dndani = () => {
  return (
    <div className='hero'>
      <motion.img className='asterisk' src="/Asterisk.png" alt="Image Not Available"/>
      <motion.img className='gameboy' src="/gameboy.png" alt="Image Not Available"/>
      <motion.img className='dndtxt' src="/DND.png" alt="Image Not Available"/>
      <p><span>a brand design studio.</span></p>
    </div>
  )
}

export default Dndani