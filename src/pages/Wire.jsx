import React from 'react';
import ProductsDetails from '../components/ProductsDetails/ProductsDetails';
import WireBarsImage from '../assets/barsImage.jpg';

const Wire = () => {
  const post = {
    title: 'Wire',
    metaDescription:
      'Parmeshwar Steel - Manufacturer of Stainless Steel Pipes, Carbon Steel Pipe Fittings & Stainless Steel Flanges from Mumbai, Maharashtra, India.',
    imageSection: WireBarsImage,
    h1: 'Wire',
    aboutSection: {
      paragraph1:
        'Flanges are used to connect pipes with each other, to valves, to fittings, and to specialty items such as strainers and pressure vessels. A cover plate can be connected to create a blind flange. Flanges are joined by bolting, and sealing is often completed with the use of gaskets or other methods.',
    },
    productTables: {
      title: 'Types of Flanges',
      title1: 'Metal Available for Flanges',
      heading: [{ Srno: 'Sr.no', title: 'Flanges' }],
      heading1: [{ Srno: 'Sr.no', title: 'Metal' }],

      points1: [
        { id: '1', points: 'MS' },
        { id: '2', points: 'Copper' },
        { id: '3', points: 'Steel' },
        { id: '4', points: 'Bronze' },
        { id: '5', points: 'Stainless-Steel' },
        { id: '6', points: 'Alluminium' },
        { id: '7', points: 'Nickel' },
        { id: '8', points: 'Monel' },
        { id: '9', points: 'Gunmetel' },
        { id: '10', points: 'Brass' },
        { id: '11', points: 'Non-Ferrous Allow' },
        { id: '12', points: 'Ferrous Allow' },
      ],
    },
  };
  return <ProductsDetails {...post} />;
};

export default Wire;
