import React from 'react';
import Layout from '../../components/Layout/Layout';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import IndustryServe from '../../components/IndustryServe/IndustryServe';
import Slider from '../../components/Slider/Slider';
import Counter from '../../components/Counter/Counter';
import { Helmet } from 'react-helmet';
const headline = 'Global Enterprises - Man Power, Civil, Fabrication, Earthmover, Crane and Electrical in Zawar Mines from Udaipur, Rajasthan, India';

const Home = () => {
  return (
    <>
      <Layout>
        <div>
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
