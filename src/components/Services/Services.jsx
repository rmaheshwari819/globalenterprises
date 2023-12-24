import React, { useRef } from 'react';
import 'react-multi-carousel/lib/styles.css';
import qualityAssurance from '../../assets/qualityAssurance.png';
import customManufacturing from '../../assets/customManufacturing.png';
import competitvePrice from '../../assets/competativeprice.png';
import quickDelivery from '../../assets/quickDelivery.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Services.css';
import { motion, useInView } from 'framer-motion';

const serviceData = [
  {
    icon: customManufacturing,
    heading: 'Custom Manufacturing Products',
    subheading:
      'We manufactures products according to customer&apos;s demand and needs as per their requirements ',
  },
  {
    icon: qualityAssurance,
    heading: 'Quality Assurance',
    subheading:
      'For our clients, we provide products of the finest quality. We promise that only top-notch materials are used to manufacture our products.',
  },
  {
    icon: quickDelivery,
    heading: 'Quick Delivery',
    subheading:
      'To make sure that our customers receive a variety of Products on time, we have the largest warehouse and godowns.',
  },
  {
    icon: competitvePrice,
    heading: 'Competitive Price',
    subheading:
      'We offer products in the steel market at the lowest prices thanks to our manufacturing plant.',
  },
];

const Services = () => {
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
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={isInView && 'animate'}
      className="px-lg-5 px-4 py-lg-5 py-4 servicesbgBig"
    >
      <motion.div variants={variants}>
        <motion.h1
          variants={variants}
          className="fw-bold underline-for-heading text-white"
        >
          Services
        </motion.h1>
      </motion.div>

      <MultiItemCarousel />
    </motion.div>
  );
};

export default Services;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="nextArrorDesign" onClick={onClick}>
      <BsArrowRight className="" color="white" size={25} onClick={onClick} />
    </button>
  );
};

// Custom Prev Arrow component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="prevArrorDesign" onClick={onClick}>
      <BsArrowLeft className="" color="white" onClick={onClick} size={25} />
    </button>
  );
};

const MultiItemCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const variants = {
    initial: {
      x: -100,
      y: 0,
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
  return (
    <Slider {...settings}>
      {serviceData.map((item, index) => (
        <motion.div
          variants={variants}
          key={index}
          className="px-2 d-flex justify-content-center my-5 postionArrow"
        >
          <div
            // variants={variants}
            className="d-flex"
            style={{
              width: '320px',
              maxWidth: '100%',
              height: '300px',
              backgroundColor: '#fff',
              opacity: '82%',
              borderRadius: '10%',
              boxShadow: '1px 1px 31px 8px rgba(0,0,0,0.83)',
            }}
          >
            <div className="d-flex flex-column justify-content-center shadow px-3">
              <span>
                <img
                  src={item.icon}
                  alt=""
                  className="img-fluid"
                  style={{ width: '90px', height: '90px' }}
                />
              </span>
              <h4 className="mt-4">{item.heading}</h4>
              <p className="mt-1">{item.subheading}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </Slider>
  );
};
