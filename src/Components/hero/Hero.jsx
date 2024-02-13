import './hero.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const textvariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollbtn: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const slidingtextvariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
        }
    }
}

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textvariants} initial="initial" animate="animate">
                    <motion.h2 variants={textvariants}>Shahzaib Afridi</motion.h2>
                    <motion.h1 variants={textvariants}>Web Developer and Wordpress Developer</motion.h1>
                    <motion.div variants={textvariants} className="buttons">
                        <Link variants={textvariants} to="#">Download My CV</Link>
                        <Link variants={textvariants} to="#">Contact Me</Link>
                    </motion.div>
                    <motion.img variants={textvariants} animate="scrollbtn" src="./scroll.png" alt="" />
                </motion.div>

            </div>
            <motion.div className="slidingtextcontaier"
                variants={slidingtextvariants}
                initial="initial"
                animate="animate">
                Creater Developer Youtuber
            </motion.div>
            <div className="imageContainer">
                <img src="./hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero
