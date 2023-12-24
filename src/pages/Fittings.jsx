import React from 'react';
import ProductsDetails from '../components/ProductsDetails/ProductsDetails';
import FittingsImage from '../assets/fittingInside.jpg';

const Fittings = () => {
  const post = {
    title: 'Fittings',
    metaDescription:
      'Parmeshwar Steel - Manufacturer of Stainless Steel Pipes, Carbon Steel Pipe Fittings & Stainless Steel Flanges from Mumbai, Maharashtra, India.',
    imageSection: FittingsImage,
    h1: 'Fittings',
    heading1Main:
      'Fittings Manufacturer & Supplier in India - Parmeshwar Steel Center',

    aboutSection: {
      paragraph1:
        'Parmeshwar steel center is a prominent Forged Fittings Manufacturer in India, offering superior quality products with an unwavering commitment to excellence. Our state of the art infrastructure enables us to produce and supply Forged Fittings consistently. With experienced engineers, customer centric operations, we are one of the largest Forged Fittings Manufacturer in the industry. We also offer custom-size Forged Fittings to meet our customers industrial needs at a reasonable price.',
    },

    productTables: {
      title: 'Types of Fittings',
      pointHead:
        'Forged Fittings Manufacturer, Elbow Forged Fittings Supplier, Tee Forged Fittings Manufacturer in India',
      pointPara:
        'We provide a vast variety of forged fittings. Our fittings are manufactured from top components and are customized to your specific needs. We provide many different kinds of forged fittings, such as:',
      point1Para:
        'While purchasing forged fittings, you need to be aware of a few important requirements, sizes, and grades.',
      point1Head: 'Forged Fittings Grades & Specifications:',
      heading: [{ Srno: 'Sr.no', title: 'Fittings' }],
      heading1: [{ Srno: 'Forged Fittings', title: 'Specifications' }],
      points: [
        { id: '1', points: 'IC Fittings' },
        { id: '2', points: 'Dairy Fittings' },
        { id: '3', points: 'BSPT Fittings' },
        { id: '4', points: 'BSPP Fittings' },
        { id: '5', points: 'NPT Fittings' },
        { id: '6', points: 'Pipe Fittings' },
        { id: '7', points: 'Compression Fittings' },
        { id: '8', points: 'DOT Fittings' },
        { id: '9', points: 'Hydrolic Fittings' },
      ],
      points1: [
        { id: 'Type of Forged Fitting', points: 'IC Fittings' },
        { id: 'Size', points: '½ NB to 48NB.' },
        { id: 'Type', points: 'Seamless / ERW / Welded / Fabricated.' },
      ],
    },
    ifTrue: 'true',
    tablefittingIfTrue: 'true',
    tablefittingIfTrueExtra: 'true',
  };
  return <ProductsDetails {...post} />;
};

export default Fittings;
