import React from 'react';
import './Quality.css';
import { motion } from 'framer-motion';
import QualityCheck from '../../assets/qualityCheck.jpg';
import Layout from '../../components/Layout/Layout';
import { Helmet } from 'react-helmet';
const headline = 'Quality';

const Quality = () => {
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

  const textVariantsSlow = {
    initial: {
      x: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
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
        <title>{headline} - Parmeshwar Steel Center</title>
        <meta
          name="description"
          content="Parmeshwar Steel - Manufacturer of Stainless Steel Pipes, Carbon Steel Pipe Fittings & Stainless Steel Flanges from Mumbai, Maharashtra, India."
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
      <motion.div
        variants={backgroundImage}
        initial="initial"
        animate="animate"
        className="text-center text-white bgImageQuality"
        style={{ padding: '80px 0px' }}
      >
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate="animate"
          className=" display-3 fw-bold "
        >
          {headline}
        </motion.h1>
      </motion.div>
      <motion.div
        variants={textVariantsSlow}
        initial="initial"
        animate="animate"
        className="my-5 container"
      >
        <motion.div className="d-flex">
          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="fw-bold underline-for-heading"
          >
            Quality Policy & Quality Assurance
          </motion.h1>
        </motion.div>
        <motion.div
          variants={textVariantsSlow}
          initial="initial"
          animate="animate"
          className="row py-4"
        >
          <motion.div className="py-lg-3 py-0 col-lg-6 col-12">
            <motion.div className="row ">
              <motion.div className="col-lg-6 py-lg-3 py-0 col-md-6 col-12">
                <motion.div>
                  <motion.div className="d-flex justify-content-center">
                    <motion.img
                      src={QualityCheck}
                      alt="qualityCheckImage"
                      className="img-fluid"
                    />
                  </motion.div>
                  <motip
                    className="mt-lg-3 mt-2"
                    style={{ fontSize: '17px', textAlign: 'justify' }}
                  >
                    The company has over two-decade long record of servicing
                    clienteles on both national and international ground.
                  </motip>
                </motion.div>
              </motion.div>
              <div className="col-lg-6 col-md-6 col-12">
                <div>
                  <p
                    className="mt-lg-3 mt-2"
                    style={{ fontSize: '17px', textAlign: 'justify' }}
                  >
                    The business attaches important emphasis on ensuring
                    obedience to quality standards at all levels. The basic
                    thrust of the quality philosophy is summed up in the
                    company's Quality Policy which serves as the bench mark of
                    all functions executed by the company.
                  </p>
                  <p
                    className="mt-lg-3 mt-2"
                    style={{ fontSize: '17px', textAlign: 'justify' }}
                  >
                    Strict quality declaration system is being surveyed in all
                    our departments and Total Quality Management is applied to
                    rationalize and all the measures and practices in operation
                    to achieve high average of efficiency.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="py-lg-3 py-0 col-lg-6 col-12 d-flex flex-column alignborderforQuality">
            <p
              className="mt-lg-3 mt-2"
              style={{ fontSize: '17px', textAlign: 'justify' }}
            >
              We are committed to furnishing superior quality products at an
              inexpensive price with schedule constancy. The company has
              industrialized quality objectives and work plans for a quality
              organization. We follow rigorous quality control standards by
              reviewing and nursing each production process.
            </p>
            <p
              className="mt-lg-3 mt-2"
              style={{ fontSize: '17px', textAlign: 'justify' }}
            >
              Each product of our range is tested as per the internationally
              accepted standards using various test procedures. We also
              facilitate specific testing as per the client's requirement. For
              quality control, we have a team of quality-checking staff.
            </p>
            <p
              className="mt-lg-3 mt-2"
              style={{ fontSize: '17px', textAlign: 'justify' }}
            >
              The materials supplied by us are as per the norms tested by
              Government recognized laboratories. AS AN ISO 9001: 2008 As An ISO
              9001: 2008 We adhere to strict quality control and have developed
              our in-house quality control process. This process involves the
              use of famous Toyota production system methods like the kanban
              system, poka yoke, and just in time.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Quality;
