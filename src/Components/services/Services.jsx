import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

const Services = () => {



    // const services = [
    //     {
    //         title: "Branding",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error atque facilis magnam saepe quidem excepturi quisquam consectetur maxime. Voluptatibus sapiente at dignissimos rem earum consequatur perspiciatis ex unde est!",

    //     },
    // ]

    const ref = useRef();

    const isMobile = window.innerWidth <= 600;
    const isInView = useInView(ref, { margin: "-100px" });



    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 1,
                StaggerChildren: 0.5
            }
        }
    }



    return (

        <div>
            {isMobile ? (
                <div
                    className='services'
                    variants={variants}
                    initial="initial"
                    // animate="animate" 
                    // whileInView="animate"
                    ref={ref}
                    animate={isInView && "animate"}
                >
                    <div className='textcontainer' variants={variants}>
                        <p>Focus on helping your brand grow<br /> and move forward</p>
                        <hr />
                    </div>
                    <div className='titlecontainer' variants={variants}>
                        <div className='title'>
                            <img src="/people.webp" alt="" />
                            <h1>
                                <b>Unique</b> Ideas
                            </h1>
                        </div>
                        <div className='title'>
                            <h1>
                                <b>For Your</b> Business.
                            </h1>
                            <button>WHAT WE DO?</button>
                        </div>
                    </div>
                    <div className='listcontainer' variants={variants} initial="initial" animate="animate" >
                        <div className="box" whileHover={{ backgroundColor: 'lightgray', color: 'black', transitionDuration: '0.5s' }}>
                            <h2>Branding</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error atque facilis magnam.</p>
                            <button>Go</button>
                        </div>
                        <div className="box" whileHover={{ backgroundColor: 'lightgray', color: 'black', transitionDuration: '0.5s' }}>
                            <h2>Branding</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error atque facilis magnam.</p>
                            <button>Go</button>
                        </div>
                    </div>
                </div>
            ) : (
                <motion.div
                    className='services'
                    variants={variants}
                    initial="initial"
                    // animate="animate" 
                    // whileInView="animate"
                    ref={ref}
                    animate={isInView && "animate"}
                >
                    <motion.div className='textcontainer' variants={variants}>
                        <p>Focus on helping your brand grow<br /> and move forward</p>
                        <hr />
                    </motion.div>
                    <motion.div className='titlecontainer' variants={variants}>
                        <div className='title'>
                            <img src="/people.webp" alt="" />
                            <h1>
                                <b>Unique</b> Ideas
                            </h1>
                        </div>
                        <div className='title'>
                            <h1>
                                <b>For Your</b> Business.
                            </h1>
                            <button>WHAT WE DO?</button>
                        </div>
                    </motion.div>
                    <motion.div className='listcontainer' variants={variants} initial="initial" animate="animate" >
                        <motion.div className="box" whileHover={{ backgroundColor: 'lightgray', color: 'black', transitionDuration: '0.5s' }}>
                            <h2>Branding</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error atque facilis magnam saepe quidem excepturi quisquam consectetur maxime. Voluptatibus sapiente at dignissimos rem earum consequatur perspiciatis ex unde est!</p>
                            <button>Go</button>
                        </motion.div>
                        <motion.div className="box" whileHover={{ backgroundColor: 'lightgray', color: 'black', transitionDuration: '0.5s' }}>
                            <h2>Branding</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error atque facilis magnam saepe quidem excepturi quisquam consectetur maxime. Voluptatibus sapiente at dignissimos rem earum consequatur perspiciatis ex unde est!</p>
                            <button>Go</button>
                        </motion.div>
                        <motion.div className="box" whileHover={{ backgroundColor: 'lightgray', color: 'black', transitionDuration: '0.5s' }}>
                            <h2>Branding</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error atque facilis magnam saepe quidem excepturi quisquam consectetur maxime. Voluptatibus sapiente at dignissimos rem earum consequatur perspiciatis ex unde est!</p>
                            <button>Go</button>
                        </motion.div>
                        <motion.div className="box" whileHover={{ backgroundColor: 'lightgray', color: 'black', transitionDuration: '0.5s' }}>
                            <h2>Branding</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error atque facilis magnam saepe quidem excepturi quisquam consectetur maxime. Voluptatibus sapiente at dignissimos rem earum consequatur perspiciatis ex unde est!</p>
                            <button>Go</button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default Services
