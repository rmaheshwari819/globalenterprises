import React, { useRef } from 'react';
import Pipe from '../../assets/bannerBg1.jpg';
import './About.css';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const variants = {
    initial: {
      x: -200,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-50px' });
  return (
    <motion.div
      id="about"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={isInView && 'animate'}
      className="px-lg-5 px-md-4 px-3 py-5"
    >
      <div className="py-lg-5 py-0">
        <div className="d-flex flex-wrap">
          <motion.div
            variants={variants}
            className="col-lg-6 col-12 d-flex  justify-content-center align-items-center"
          >
            <motion.img
              variants={variants}
              src={Pipe}
              alt=""
              className="img-fluid "
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>
          <div className="col-lg-6 col-12 ">
            <div
              className="px-lg-4 px-0 d-flex  flex-column justify-content-evenly"
              style={{ width: '100%', height: '100%' }}
            >
              <motion.div variants={variants} className="d-flex">
                <h1 className="fw-bold underline-for-heading">About Us</h1>
              </motion.div>
              <motion.div variants={variants} className="">
                <motion.p
                  variants={variants}
                  className="mt-lg-4 mt-3"
                  style={{ fontSize: '18px', textAlign: 'justify' }}
                >
                  We, Global Enterprises founded in 2023 by our visionary
                  entrepreneurs. At Global Enterprises we pride ourselves on being a comprehensive 
                  solution provider in the realm of Civil Construction & Renovation, 
                  Fabrication & Painting, Operation & Maintenance, Manpower Supply, 
                  Earthmover Services, Crane Supply, and Electrical Works. 
                  With a commitment to excellence and a wealth of experience, 
                  we offer a diverse range of services to meet the evolving needs of our clients.
                </motion.p>
                <motion.p
                  variants={variants}
                  className="mt-lg-4 mt-3"
                  style={{ fontSize: '18px', textAlign: 'justify' }}
                >
                  At Global Enterprises, we prioritize client satisfaction, safety, 
                  and quality in every project we undertake. Our commitment to excellence 
                  has earned us a reputation as a trusted partner in the construction and 
                  related industries. Whether you are embarking on a new project or seeking 
                  reliable maintenance services, Global Enterprises is here to turn your 
                  vision into reality, we work for quality.
                </motion.p>
                <motion.p
                  variants={variants}
                  className="mt-lg-4 mt-3"
                  style={{ fontSize: '18px', textAlign: 'justify' }}
                >
                  Our satisfied and repeat customers of over 3 decades are the
                  who's and who of Civil Construction & Renovation, 
                  Fabrication & Painting, Operation & Maintenance, Manpower Supply, 
                  Earthmover Services, Crane Supply, and Electrical Works. 
                  Nuclear and other sectors in India and globally.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
