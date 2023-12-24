import React from 'react';
import { motion } from 'framer-motion';
import './Banner.css';
import { Link } from 'react-router-dom';
const Banner = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };
  const backgroundImage = {
    initial: {
      x: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div>
      <motion.div
        variants={backgroundImage}
        initial="initial"
        animate="animate"
        className="test"
      >
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          className="text-white px-lg-5 px-md-5 px-2"
        >
          <motion.h1
            variants={textVariants}
            style={{ fontWeight: 700 }}
            className="display-3 text-lg-start text-md-start text-center"
          >
            We Deliver Excellence
            {/* To Provide Quality Services that exceeds the expectation of our esteemed Customers */}
          </motion.h1>
          <motion.h4
            variants={textVariants}
            className="text-lg-start my-5 text-md-start text-center"
          >
            Civil Construction & Renovation, Fabrication & Painting, 
            Operation & Maintenance, Manpower Supply, Earthmover Services, Crane Supply, 
            and Electrical Works.
          </motion.h4>
          <motion.div
            variants={textVariants}
            className="d-flex justify-content-center justify-content-md-start justify-content-lg-start"
          >
            <Link to="/services">
              <motion.button className="buttonBanner py-2 mx-lg-0 mx-md-0 mx-3">
                View More
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                variants={textVariants}
                className="buttonBannerMobile py-2  mx-3"
              >
                Quote
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
