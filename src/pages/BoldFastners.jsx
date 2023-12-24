import React from 'react';
import ProductsDetails from '../components/ProductsDetails/ProductsDetails';
import BoltsImage from '../assets/boltInside.jpg';

const BoldFastners = () => {
  const post = {
    title: 'Bold / Fastners',
    metaDescription:
      'Parmeshwar Steel - Manufacturer of Stainless Steel Pipes, Carbon Steel Pipe Fittings & Stainless Steel Flanges from Mumbai, Maharashtra, India.',
    imageSection: BoltsImage,
    h1: 'Bold / Fastners',
    aboutSection: {
      paragraph1:
        'A fastener or fastening is a hardware device that mechanically joins or affixes two or more objects together. In general, fasteners are used to create non-permanent joints that is, joints that can be removed or dismantled without damaging the joining components',
    },

    productTables: {
      title: 'Types of Bold / Fastners',
      title1: 'Metal Available for Bold / Fastners',
      heading: [{ Srno: 'Sr.no', title: 'Bold / Fastners' }],
      heading1: [{ Srno: 'Sr.no', title: 'Metal' }],
      points: [
        { id: '1', points: 'Sheer Bolts' },
        { id: '2', points: 'Long Bolts' },
        { id: '3', points: 'Steel Eye Bolts' },
        { id: '4', points: 'Automotive Bolts' },
        { id: '5', points: 'Coated Bolts' },
        { id: '6', points: 'Threaded Bolts' },
        { id: '7', points: 'Anti-theft Bolts' },
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

export default BoldFastners;
