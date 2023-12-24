import React from 'react';
import ProductsDetails from '../components/ProductsDetails/ProductsDetails';
import AngleImage from '../assets/angleinside.png';

const AngleChannels = () => {
  const post = {
    title: 'Angle / Channels',
    metaDescription:
      'Parmeshwar Steel - Manufacturer of Stainless Steel Pipes, Carbon Steel Pipe Fittings & Stainless Steel Flanges from Mumbai, Maharashtra, India.',
    imageSection: AngleImage,
    h1: 'Angle / Channels',
    aboutSection: {
      paragraph1:
        'Angle is popularly applied by modern buildings, equipment, factory shops & warehouses and everyday life for its low cost and reliable performances. They tend to be used as supporting or structural components for construction.',
    },

    productTables: {
      title: 'Types of Angle / Channels',
      title1: 'Metal Available for Angle / Channels',
      heading: [{ Srno: 'Sr.no', title: 'Angle / Channels' }],
      heading1: [{ Srno: 'Sr.no', title: 'Metal' }],
      points: [
        { id: '1', points: 'Basic Angle' },
        { id: '2', points: 'Equal Angle' },
        { id: '3', points: 'Unequal Angle' },
        { id: '4', points: 'C Channels' },
        { id: '5', points: 'Hat Channels' },
        { id: '6', points: 'U Channels' },
        { id: '7', points: 'J Channels' },
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

export default AngleChannels;
