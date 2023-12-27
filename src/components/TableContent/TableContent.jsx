import React, { useRef } from 'react';
import { Table } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';

const dataone = [
  { cities: 'Zawar' },
  { cities: 'Dariba' },
  { cities: 'Chanderiya' },
  { cities: 'Agucha' },
  { cities: 'Kayad' },
  { cities: 'Devpura' },
];

const datatwo = [
  { cities: 'Udaipur' },
  { cities: 'Rajsamand' },
  { cities: 'Chittorgarh' },
  { cities: 'Gulabpura' },
  { cities: 'Bhilwara' },
  { cities: 'Ajmer' },
];

const datathree = [
  { cities: 'Bijayanagar' },
  { cities: 'Jamar Khotra' },
  { cities: 'Bhalariya' },
  { cities: 'Debari' },
  { cities: 'Dakan Kotra' },
  { cities: 'Baroi' },
];

const datafour = [
  { cities: 'Dakan Khotra' },
  { cities: 'Rampura' },
  { cities: 'Firozabad' },
  { cities: 'Zawar Mala' },
  { cities: 'Mochia' },
  { cities: 'Balarai' },
];

const tableContentPara =
'Global Enterprises dealt in the realm of Civil Construction & Renovation, Fabrication & Painting, Operation & Maintenance, Manpower Supply, Earthmover Services, Crane Supply, and Electrical Works';

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
          </tbody>
        </Table>
      </motion.div>
    </motion.div>
  );
};

export default TableContent;
