import React, { useRef } from 'react';
import ImageOne from '../../assets/img1.jpg';
import ImageTwo from '../../assets/img2.jpg';
import ImageThree from '../../assets/img3.jpg';
import ImageFor from '../../assets/img4.jpg';
import AngleChannel from '../../assets/angleMain.jpg';
import Bars from '../../assets/bars.jpg';
import ImageEight from '../../assets/img8.jpg';
import ImageTen from '../../assets/img10.jpg';
import RodsProduct from '../../assets/steelrods.jpg';

import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const productData = [
  {
    link: '/fittings-manufacturer-in-india',
    name: 'Civil Construction',
    img: ImageOne,
  },
  {
    link: '/flanges-manufacturer-in-india',
    name: 'Fabrication',
    img: ImageThree,
  },
  {
    link: '/pipes-manufacturer-in-india',
    name: 'Manpower Supply',
    img: ImageTwo,
  },
  {
    link: '/bold-fastners-manufacturer-in-india',
    name: 'Earthmovers',
    img: ImageFor,
  },
  {
    link: '/angle-channels-manufacturer-in-india',
    name: 'Crane Supply',
    img: AngleChannel,
  },
  {
    link: '/steets-plates-manufacturer-in-india',
    name: 'Electrical Works',
    img: ImageEight,
  },
  {
    link: '/bars-wires-manufacturer-in-india',
    name: 'O & M',
    img: Bars,
  },
  {
    link: '/percentage-alloys-manufacturer-in-india',
    name: 'Renovation',
    img: ImageTen,
  },
  {
    link: '/rods-manufacturer-in-india',
    name: 'Mechanical',
    img: RodsProduct,
  },
];
const ProductCardHeader = 'Global Corp Expertise';
const ProductCard = () => {
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
        delay: 0.5,
        staggerChildren: 0.2,
        type: 'spring',
        stiffness: 100,
        damping: 14,
      },
    },
  };
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
    <motion.div>
      <motion.div className="d-flex justify-content-lg-start widhheading justify-content-center align-items-center">
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate="animate"
          className=" fw-bold underline-for-heading d-inline"
        >
          {ProductCardHeader}
        </motion.h1>
      </motion.div>
      <motion.div className="py-3 grid-container">
        {productData.map((item, index) => {
          return (
            <motion.div
              variants={variants}
              initial="initial"
              whileInView="animate"
              ref={ref}
              animate={isInView && 'animate'}
              key={index}
              className="grid-item shadow "
              style={{ backgroundColor: '#Fafafa' }}
            >
              <motion.div className="">
                <img src={item.img} alt="product-img" className="imgWidth " />
              </motion.div>
              <h1 className="mt-lg-2 text-capitalize mt-4">{item.name}</h1>
              <Link to={item.link}>
                <button
                  className="mt-2 px-5 py-2 rounded-5 bg-transparent"
                  style={{ fontSize: '18px' }}
                >
                  Learn More
                </button>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
