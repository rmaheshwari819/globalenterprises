import React, { useRef } from 'react';
import { Table } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';

const dataone = [
  { cities: 'Banglore' },
  { cities: 'Mumbai' },
  { cities: 'Chennai' },
  { cities: 'Hyderabad' },
  { cities: 'Kolkata' },
  { cities: 'Pune' },
];

const datatwo = [
  { cities: 'New Delhi' },
  { cities: 'Ahmedabad' },
  { cities: 'Jaipur' },
  { cities: 'Surat' },
  { cities: 'Salem' },
  { cities: 'Gandhinagar' },
];

const datathree = [
  { cities: 'Bhiwandi' },
  { cities: 'Tiruppur' },
  { cities: 'Sivakasi' },
  { cities: 'Jamnagar' },
  { cities: 'Thiruvananthapuram' },
  { cities: 'Rajahmundry' },
];

const datafour = [
  { cities: 'Bhubaneshwar' },
  { cities: 'Vijaywada' },
  { cities: 'Firozabad' },
  { cities: 'Bakaro Steel City' },
  { cities: 'Rajkot' },
  { cities: 'Bharush' },
];

const datafive = [
  { cities: 'Panna' },
  { cities: 'Raipur' },
  { cities: 'Cochin' },
  { cities: 'Ludhiana' },
  { cities: 'Panipat' },
  { cities: 'Durgapur' },
];

const datasix = [
  { cities: 'Peenya' },
  { cities: 'Pimpri-Chinchwad' },
  { cities: 'Channapatna' },
  { cities: 'Kharagpur' },
  { cities: 'Nashik' },
  { cities: 'Bareilly' },
];

const dataseven = [
  { cities: 'Varanasi' },
  { cities: 'Haldia' },
  { cities: 'Rourkela' },
  { cities: 'Banglore' },
  { cities: 'Moradabad' },
  { cities: 'Inodore' },
];
const dataeight = [
  { cities: 'Visakhapatnam' },
  { cities: 'Trivandrum' },
  { cities: 'Pithampur' },
  { cities: 'Dibrugarh' },
  { cities: 'Angul' },
  { cities: 'Gwalior' },
];

const datanine = [
  { cities: 'Coimbatore' },
  { cities: 'Kannur' },
  { cities: 'Nagpur' },
  { cities: 'Vadodara' },
  { cities: 'Rudrapur' },
  { cities: 'Noida' },
];

const dataten = [
  { cities: 'Agra' },
  { cities: 'Bhagalpur' },
  { cities: 'Jamshedpur' },
  { cities: 'Bhilai' },
  { cities: 'Lucknow' },
  { cities: 'Kanpur' },
];
const dataelven = [
  { cities: 'Thane' },
  { cities: 'Bhopal' },
  { cities: 'Navi Mumbai' },
  { cities: 'Vasai' },
  { cities: 'Bikaner' },
  { cities: 'Maharashtra' },
];

const tableContentPara =
'Global Corp. dealt in the realm of Civil Construction & Renovation, Fabrication & Painting, Operation & Maintenance, Manpower Supply, Earthmover Services, Crane Supply, and Electrical Works';

const headerTagForCities = 'We provide services in below cities in India';
const headerforManufacturer = 'COMPANY PERFORMING AREAS IN';
const TableContent = () => {
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
        stiffness: 80,
        damping: 20,
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
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={isInView && 'animate'}
    >
      <motion.h3
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="pb-3 text-center paddingSupplirePara"
      >
        {tableContentPara}
      </motion.h3>
      <motion.div className="px-lg-5 px-3">
        <motion.div className="my-3">
          <motion.h4 variants={textVariants} className="">
            {headerTagForCities}
          </motion.h4>
        </motion.div>
        <motion.div className="py-2 bg-primary">
          <h6 className="text-white my-auto text-center">
            {headerforManufacturer}
          </h6>
        </motion.div>
        <Table bordered responsive="md" style={{ border: '1px solid #000' }}>
          <tbody variants={textVariants} className="text-center">
            <tr>
              {dataone.map((item) => (
                <td>{item.cities}</td>
              ))}
            </tr>
            <tr>
              {datatwo.map((item) => (
                <td>{item.cities}</td>
              ))}
            </tr>
            <tr>
              {datathree.map((item) => (
                <td>{item.cities}</td>
              ))}
            </tr>
            <tr>
              {datafour.map((item) => (
                <td>{item.cities}</td>
              ))}
            </tr>
            <tr>
              {datafive.map((item) => (
                <td>{item.cities}</td>
              ))}
            </tr>
            <tr>
              {datasix.map((item) => (
                <td>{item.cities}</td>
              ))}
            </tr>
            <tr>
              {dataseven.map((item) => (
                <td>{item.cities}</td>
              ))}
            </tr>
            <tr>
              {dataeight.map((item) => (
                <td>{item.cities}</td>
              ))}
            </tr>
            <tr>
              {datanine.map((item) => (
                <td>{item.cities}</td>
              ))}
            </tr>
            <tr>
              {dataten.map((item) => (
                <td>{item.cities}</td>
              ))}
            </tr>
            <tr>
              {dataelven.map((item) => (
                <td>{item.cities}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </motion.div>
    </motion.div>
  );
};

export default TableContent;
