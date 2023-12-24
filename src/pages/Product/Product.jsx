import React from 'react';
import './Product.css';
import Layout from '../../components/Layout/Layout';
import { motion } from 'framer-motion';
import TableContent from '../../components/TableContent/TableContent';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Helmet } from 'react-helmet';
const headline = 'Products';
const Product = () => {
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
    <Layout>
      <Helmet>
        <title>{headline} - Global Enterprises</title>
        <meta
          name="description"
          content="Global Enterprises - Manufacturer of Stainless Steel Pipes, Carbon Steel Pipe Fittings & Stainless Steel Flanges from Mumbai, Maharashtra, India."
        />
        <meta
          name="keywords"
          content="Flanges, Pipes, Bold / Fastners, Angle / Channels, Bars / Wires, percentage alloys, Rods"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Helmet>
      <motion.div className="pb-4">
        <motion.div
          variants={backgroundImage}
          initial="initial"
          animate="animate"
          className="text-center text-white imgBgProducts"
          style={{ padding: '80px 0px' }}
        >
          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="display-3 fw-bold"
          >
            Our Services
          </motion.h1>
        </motion.div>
        <div className="mt-5">
          <ProductCard />
          <TableContent />
        </div>
      </motion.div>
    </Layout>
  );
};

export default Product;
