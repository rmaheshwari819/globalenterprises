import React from 'react';
import { SlLocationPin } from 'react-icons/sl';
import { TfiEmail } from 'react-icons/tfi';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { VscDebugStepInto } from 'react-icons/vsc';
import './Contact.css';
import Layout from '../../components/Layout/Layout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const address = [
  {
    icons: <LiaPhoneVolumeSolid size={60} color="blue" />,
    personInfo: '8000074330, 9784098800',
    contact: 'tel:9784098800',
    namesperson: '(Mohd. Sharif, Rohit Maheshwari)',
  },
  {
    icons: <TfiEmail size={60} color="blue" />,
    personInfo: 'eglobalenterprises1@gmail.com',
    contact: 'mailto:eglobalenterprises1@gmail.com',
    namesperson: 'Email',
  },
  {
    icons: <VscDebugStepInto size={60} color="blue" />,
    namesperson: 'GSTIN',
    personInfo: '27FDEPP1007A1Z4',
  },
  {
    icons: <SlLocationPin size={60} color="blue" />,
    name: 'Office Address',
    subpara:
      'Shop No. 16, Pratap Pura Market, Zawar Mines - 313901, Udaipur (Raj.)',
  },
  {
    icons: <SlLocationPin size={60} color="blue" />,
    name: 'Godown Address',
    subpara:
      '32, Nakoda Complex Hiran Magri Sector 4, Udaipur (Raj.) - 313002',
  },
  {
    icons: <SlLocationPin size={60} color="blue" />,
    name: 'Home Address',
    subpara:
      'A-136 Murshid Nagar Sector 12 Hiran Magri Saweena, Udaipur (Raj.) - 313002',
  },
];

const headline = 'Contact';

const Contact = () => {
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

  const Cardvariants = {
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
        duration: 0.8,
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
          content="Global Enterprises - Proving best solutions in Man Power, Civil, Fabrication, Earthmover, Crane and Electrical in Zawar Mines from Udaipur, Rajasthan, India."
        />
        <meta
          name="keywords"
          content="Civil Construction & Renovation, Fabrication & Painting, Operation & Maintenance, Manpower Supply, Earthmover Services, Crane Supply, and Electrical Works"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Helmet>
      <motion.div className=" ">
        <motion.div
          variants={backgroundImage}
          initial="initial"
          animate="animate"
          className="text-center text-white bgImageContact"
          style={{ padding: '80px 0px' }}
        >
          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="display-3 fw-bold "
          >
            Contact
          </motion.h1>
        </motion.div>

        <motion.div
          className="py-5 bgimgcontacthere"
          variants={backgroundImage}
          initial="initial"
          animate="animate"
        >
          <div className="px-lg-5 px-md-3 px-2">
            <motion.div
              variants={Cardvariants}
              initial="initial"
              whileInView="animate"
              className="d-flex flex-wrap "
            >
              {address.map((item, index) => {
                return (
                  <motion.div className="col-lg-4 col-md-6 col-12 my-lg-4 my-3 px-lg-2 px-md-2 px-0">
                    <motion.div className="d-flex justify-content-center">
                      <motion.div className="contactContainer shadow text-center py-3 px-5  d-flex flex-column justify-content-evenly align-items-center">
                        <motion.span className="mt-3">{item.icons}</motion.span>
                        <motion.span className="">{item.gstin}</motion.span>
                        <motion.h4 className="">
                          <Link
                            to={item.contact}
                            className="link-tagfooter text-black"
                          >
                            {item.personInfo}
                          </Link>
                        </motion.h4>
                        <motion.span className="">
                          {item.namesperson}
                        </motion.span>
                        <motion.h3 className="mt-1">{item.name}</motion.h3>
                        <motion.p className="">{item.subpara}</motion.p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Contact;
