import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';


const items = [
    {
        id: 1,
        title: "React Portfolio",
        img: "https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nemo deleniti corrupti maxime, tempore sequi tempora minus iste necessitatibus voluptas sint fugiat soluta magnam aperiam laboriosam at fuga laudantium odit."
    },
    {
        id: 2,
        title: "JavaScript Project",
        img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nemo deleniti corrupti maxime, tempore sequi tempora minus iste necessitatibus voluptas sint fugiat soluta magnam aperiam laboriosam at fuga laudantium odit."
    },
    {
        id: 3,
        title: "Wordpress Website",
        img: "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nemo deleniti corrupti maxime, tempore sequi tempora minus iste necessitatibus voluptas sint fugiat soluta magnam aperiam laboriosam at fuga laudantium odit."
    },
    {
        id: 4,
        title: "Bootstrap portfolio",
        img: "https://images.pexels.com/photos/225769/pexels-photo-225769.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nemo deleniti corrupti maxime, tempore sequi tempora minus iste necessitatibus voluptas sint fugiat soluta magnam aperiam laboriosam at fuga laudantium odit."
    },
];


const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });


    const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);





    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imgcontainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textcontainer" style={{y}} >
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href="#">See Demo</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {


    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })


    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })


    return (
        <div id='Portfolio' className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressbar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio
