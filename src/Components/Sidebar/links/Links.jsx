import './links.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
const itemsVariants = {
  open: {
    y: 0,
    opacity: 1,

  },
  closed: {
    y: 50,
    opacity: 0,

  }
}


const Links = () => {

  const items = [
    "Home", "About", "Portfolio", "Contact"
  ]

  return (
    <motion.div className='links' variants={variants}>
      {items.map(items => (
        <motion.Link to={`#${items}`} key={items} variants={itemsVariants} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          {items}
        </motion.Link>
      ))}
    </motion.div>
  )
}

export default Links
