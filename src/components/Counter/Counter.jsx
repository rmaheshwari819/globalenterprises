import React, { useRef, useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Counter.css';
import { motion, useInView } from 'framer-motion';

const Counter = ({ className, ...rest }) => {
  const [counterOn, setCounterOn] = useState(false);
  const variants = {
    initial: {
      x: 0,
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
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-50px' });
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <motion.div
        className="my-5"
        variants={variants}
        initial="initial"
        whileInView="animate"
        ref={ref}
        animate={isInView && 'animate'}
      >
        <motion.div className="py-5 bgCounterImage">
          <div className="container py-lg-5 py-md-2 py-0 text-white">
            <div className="row  text-center justify-content-center ">
              <div className="col-12 col-md-6 col-lg-3 my-lg-0 my-md-4 my-4">
                <h1 className="">
                  {counterOn && (
                    <CountUp start={0} end={10} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <h3 className="">On the market</h3>
              </div>
              <div className="col-12 col-md-6 col-lg-3 my-lg-0 my-md-4 my-4">
                <h1 className="">
                  {counterOn && (
                    <CountUp start={0} end={1000} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <h3>Hours</h3>
              </div>

              <div className="col-12 col-md-6 col-lg-3 my-lg-0 my-md-4 my-4">
                <h1>
                  {counterOn && (
                    <CountUp start={0} end={20} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <h3>Completed Projects</h3>
              </div>
              <div className="col-12 col-md-6 col-lg-3 my-lg-0 my-md-4 my-4">
                <h1>
                  {counterOn && (
                    <CountUp start={0} end={40} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <h3>Cities Delivered</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </ScrollTrigger>
  );
};

export default Counter;
