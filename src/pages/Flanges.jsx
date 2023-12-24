import React from 'react';
import ProductsDetails from '../components/ProductsDetails/ProductsDetails';
import FlangesImage from '../assets/flangesInside.jpg';

const Flanges = () => {
  const post = {
    title: 'Flanges',
    metaDescription:
      'Parmeshwar Steel - Manufacturer of Stainless Steel Pipes, Carbon Steel Pipe Fittings & Stainless Steel Flanges from Mumbai, Maharashtra, India.',
    h1: 'Flanges',
    imageSection: FlangesImage,
    heading1Main:
      'Flanges Manufacturer & Supplier in India – Parmeshwar Steel Center',
    aboutSection: {
      paragraph1:
        'Parmeshwar Steel Center is a leading Flanges Manufacturer in India, supplying high-quality products consistently with our superior infrastructure. Our experienced engineers and value-driven business operations make us one of the largest and most trusted Flanges Manufacturer in the industry. We specialize in custom-size Flanges to meet our customers unique industrial needs. we have ruled this industry as the Best Flanges Manufacturers and Flanges Suppliers in India.',
    },

    productTables: {
      title: 'Types of Flanges',
      pointHead:
        'Slip-On Flanges Manufacturer, Socketweld Flanges Supplier, Flanges Manufacturer in India',
      pointPara:
        '	At Parmeshwar steel center, we use high-quality raw materials and have skilled professionals to ensure that our Socketweld Flanges and Slip-On Flanges meet global standards and have excellent heat and damage resistance. When selecting a Flanges manufacturer in India, quality and experience are critical factors to consider. Our Flanges are used across various industries due to their high corrosion resistance and weldability. We offer various grades & materials such as Stainless Steel, Carbon Steel, Alloy Steel, Duplex Steel, etc. based on customer needs. Additionally, we are a leading Pipes Manufacturer in India.',
      title1: 'Metal Available for Flanges',
      heading: [{ Srno: 'Sr.no', title: 'Flanges' }],
      points: [
        { id: '1', points: 'Weld neck Flange' },
        { id: '2', points: 'Slip on Flange' },
        { id: '3', points: 'Blind Flange' },
        { id: '4', points: 'Socket Weld Flange' },
        { id: '5', points: 'Pipe Flange' },
        { id: '6', points: 'Threaded Flange' },
        { id: '7', points: 'Lap Joint Flange (RTJ)' },
      ],
    },
    ifFlangesTrue: 'true',
    tableFlangesIfTrue: 'true',
  };
  return <ProductsDetails {...post} />;
};

export default Flanges;
