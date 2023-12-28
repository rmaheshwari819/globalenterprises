import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slider1 from '../../assets/gbl/slider1.png';
import Slider2 from '../../assets/gbl/slider2.jpg';
import Slider3 from '../../assets/gbl/slider3.png';
import Slider4 from '../../assets/gbl/slider4.png';
import Slider5 from '../../assets/gbl/slider5.png';
import Slider6 from '../../assets/gbl/slider6.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './BannerSlider.css';
const BannerSlider = () => {
  const BannerData = [
    {
      image: Slider1,
      heading: 'Civil Construction & Renovation',
      subheading:
        'From ground-up construction to meticulous renovations, we bring expertise, precision, and a keen eye to project.',
    },
    {
      image: Slider2,
      heading: 'Fabrication & Mechanical Job',
      subheading:
        'We specialize in precision fabrication, crafting customized structures with cutting-edge technology and secure assembly of heavy equipment',
    },
    {
      image: Slider3,
      heading: 'Operation & Maintenance',
      subheading:
        'We excel in seamless operation and maintenance services, ensuring optimal functionality and longevity for your assets',
    },
    {
      image: Slider4,
      heading: 'Earthmovers & Crane Supply',
      subheading:
        'We provide top-tier Earthmover Services, offering heavy-duty equipment for efficient project execution, deliver reliable lifting solutions',
    },
    {
      image: Slider5,
      heading: 'Man Power & Electrical Works',
      subheading:
        'From installations to intricate system designs, we deliver top-notch solutions that meet the highest industry standards.',
    },
    {
      image: Slider6,
      heading: 'Structure & Equipment Erection',
      subheading:
        'Our dedicated team is committed to keeping your operations running smoothly and efficiently.',
    },
  ];

  return (
    <Carousel fade indicators={false} interval={4000} draggable={true}>
      {BannerData.map((item, index) => (
        <Carousel.Item key={index}>
          <motion.div className="img-container">
            <motion.div style={{ width: '100%', height: '100%' }}>
              <motion.img
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.3 }}
                transition={{ duration: 12.5, ease: 'easeInOut' }}
                src={item.image}
                style={{ width: '100%', height: '100%', contain: 'cover' }}
                alt={item.heading}
              />
            </motion.div>

            <div className="textbox-design px-lg-0 px-md-0 px-sm-0 px-2">
              <motion.h1
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
              >
                {item.heading}
              </motion.h1>
              <motion.h2
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
              >
                {item.subheading}
              </motion.h2>
              <Link to="/services">
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
                  className="mt-lg-5 mt-md-5 mt-sm-4 mt-3"
                >
                  Read more
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerSlider;
