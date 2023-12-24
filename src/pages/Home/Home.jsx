import React from 'react';
import Layout from '../../components/Layout/Layout';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import IndustryServe from '../../components/IndustryServe/IndustryServe';
import Slider from '../../components/Slider/Slider';
import Counter from '../../components/Counter/Counter';
import { Helmet } from 'react-helmet';
const headline = 'Pipe Fittings, Flanges Manufacturer and Suppliers in India';

const Home = () => {
  return (
    <>
      <Layout>
        <div>
          <Helmet>
            <title>{headline} - Parmeshwar Steel Center</title>
            <meta
              name="description"
              content="Parmeshwar Steel Centre - Manufacturer of Stainless Steel Pipes, Carbon Steel Pipe Fittings & Stainless Steel Flanges from Mumbai, Maharashtra, India."
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
          <Banner />
          <About />
          <Services />
          <IndustryServe />
          <Slider />
          <Counter />
        </div>
      </Layout>
    </>
  );
};

export default Home;
