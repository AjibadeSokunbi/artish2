import { React, useState } from 'react'
import { motion } from "framer-motion";
import "./hire.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaPaintBrush } from 'react-icons/fa';
import { BsPencil } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { SiVlcmediaplayer } from 'react-icons/si';
import { GiArchiveResearch } from 'react-icons/gi';
import { TbWorldUpload } from 'react-icons/tb';

const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };

const Hire = () => {
    const [counter, setCounter] = useState(0);

    const increase = () => {
      setCounter(count => count = 20);
    }
  return (

    <section id='hire'>
        <ProgressBar bgColor={"#CBC3E3"} className="progressBar" completed={counter} />
        <div className="hireText">
            <h3>STEP 1</h3>
            <h2>What do you need help with?</h2>
            <h4>Select a Gig</h4>
            <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="container hire__container"
      >
        <motion.article
          whileHover={{
            scale: 1.1,
          }}
          variants={textAnimate}
          className="hire__item"
          onClick={increase}
          
        >
          
          <h3>
          <BsPencil className='hire__icons'/>
            Writing</h3>
        
        </motion.article>
        <motion.article
          whileHover={{
            scale: 1.1,
          }}
          variants={textAnimate}
          className="hire__item"onClick={increase}
        >
          
          <h3>
          <FaLaptopCode className='hire__icons'/>
            Engineering</h3>
        
        </motion.article>
        <motion.article
          whileHover={{
            scale: 1.1,
          }}
          variants={textAnimate}
          className="hire__item"onClick={increase}
        >
          
          <h3>
          <TbWorldUpload/>
            Web3</h3>
        
        </motion.article>
        <div className="mobile2">
          <motion.article
            whileHover={{
              scale: 1.1,
            }}
            variants={textAnimate}
            className="hire__item"onClick={increase}
          >
          
            <h3>
           < GiArchiveResearch className='hire__icons'/>
                Research</h3>
          </motion.article>
        </div>
        <div className="mobile">
          <motion.article
            whileHover={{
              scale: 1.1,
            }}
            variants={textAnimate}
            className="hire__item"onClick={increase}
          >
          
            <h3>
            <FaPaintBrush className='hire__icons'/> 
                Design</h3>
          </motion.article>
        </div>
        <div className="mobile">
          <motion.article
            whileHover={{
              scale: 1.1,
            }}
            variants={textAnimate}
            className="hire__item"onClick={increase}
          >
          
            <h3>
            <SiVlcmediaplayer className='hire__icons'/>
                Media Marketing</h3>
          </motion.article>
        </div>
      </motion.div>       
        </div>
    </section>
  )
}

export default Hire