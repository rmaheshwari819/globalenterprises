import React from 'react';
import ProductsDetails from '../components/ProductsDetails/ProductsDetails';
import PercentageAlloysImage from '../assets/specialalloy.jpg';

const PercentageAlloys = () => {
  const post = {
    title: 'Percentage Alloys',
    metaDescription:
      'Parmeshwar Steel - Manufacturer of Stainless Steel Pipes, Carbon Steel Pipe Fittings & Stainless Steel Flanges from Mumbai, Maharashtra, India.',
    h1: 'Percentage Alloys',
    imageSection: PercentageAlloysImage,
    aboutSection: {
      paragraph1:
        'Alloys are not pure metals but the combination of two or more elements, one of which must be a metal. The result of this mixture is a material whose properties are significantly different from those of the constituent elements. For this reason, there is a wide range of characteristics that are achievable depending on the specific compound, and an equally wide range of applications. Alloys have the following characteristics:',
    },

    productTables: {
      title: 'Types of Flanges',
      title1: 'Metal Available for Percentage Alloys',
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

export default PercentageAlloys;
