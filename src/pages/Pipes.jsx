import React from 'react';
import ProductsDetails from '../components/ProductsDetails/ProductsDetails';
import PipesImage from '../assets/pipesInside.jpg';

const Pipes = () => {
  const post = {
    title: 'Pipes',
    metaDescription:
      'Parmeshwar Steel - Manufacturer of Stainless Steel Pipes, Carbon Steel Pipe Fittings & Stainless Steel Flanges from Mumbai, Maharashtra, India.',
    h1: 'Pipes',
    imageSection: PipesImage,
    aboutSection: {},
    productTables: {
      title: 'Types of Pipes',
      title1: 'Metal Available for Pipes',
      heading: [{ Srno: 'Sr.no', title: 'Pipes' }],
      heading1: [{ Srno: 'Sr.no', title: 'Metal' }],
      points: [
        { id: '1', points: 'Rounded Pipes' },
        { id: '2', points: 'Metal Tube' },
        { id: '3', points: 'Sheeting Pipe' },
        { id: '4', points: 'Threaded Pipe' },
        { id: '5', points: 'Casted Pipe' },
        { id: '6', points: 'Header Pipe' },
      ],
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

export default Pipes;
