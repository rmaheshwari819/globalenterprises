import React, { useRef } from 'react';
import ImageOne from '../../assets/gbl/civilconst.jpg';
import ImageTwo from '../../assets/gbl/structural-steel-fabrication.jpg';
import ImageThree from '../../assets/gbl/manpower.jpeg';
import ImageFor from '../../assets/gbl/earthmover.png';
import AngleChannel from '../../assets/gbl/crane.webp';
import Bars from '../../assets/gbl/o&m.jpeg';
import ImageEight from '../../assets/gbl/electric.jpeg';
import ImageTen from '../../assets/gbl/transport3.webp';
import RodsProduct from '../../assets/gbl/renovation.webp';

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
    img: ImageTwo,
  },
  {
    link: '/pipes-manufacturer-in-india',
    name: 'Manpower Supply',
    img: ImageThree,
  },
  {
    link: '/bold-fastners-manufacturer-in-india',
    name: 'Earthmovers',
    img: ImageFor,
  },
  {
    link: '/steets-plates-manufacturer-in-india',
    name: 'Electrical Works',
    img: ImageEight,
  },
  {
    link: '/angle-channels-manufacturer-in-india',
    name: 'Crane Supply',
    img: AngleChannel,
  },
  {
    link: '/percentage-alloys-manufacturer-in-india',
    name: 'Transportation',
    img: ImageTen,
  },
  {
    link: '/bars-wires-manufacturer-in-india',
    name: 'O & M, Erection',
    img: Bars,
  },
  {
    link: '/rods-manufacturer-in-india',
    name: 'Renovation',
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
