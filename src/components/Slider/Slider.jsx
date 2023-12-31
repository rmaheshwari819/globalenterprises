import React from 'react';
import Diamond from '../../assets/gbl/hzl.png';
import Nation from '../../assets/gbl/hzl-vedenta.jpeg';
import Sumitomo from '../../assets/gbl/vedanta.png';
import Welspon from '../../assets/welspon.jpg';
import ShivanAutoTech from '../../assets/shivam autotech.jpg';
import BKT from '../../assets/bkt.png';
import JBMGroup from '../../assets/jbm group.png';
import Hydrobenjg from '../../assets/hydrobenj ind pvt ltd.jpg';
import './Slider.css';

const imagesData = [
  {
    class: 'sliderImageSize',
    images: Diamond,
  },
  {
    class: 'sliderImageSize',

    images: Nation,
  },
  {
    class: 'sliderImageSize',

    images: Sumitomo,
  },
  {
    class: 'sliderImageSize',

    images: Welspon,
  },
  {
    class: 'slideImageExtraLarge',
    images: ShivanAutoTech,
  },
  {
    class: 'slideImageExtraLarge',
    images: BKT,
  },
  {
    class: 'slideImageExtraLarge',
    images: JBMGroup,
  },
  {
    class: 'slideImageExtraLarge',
    images: Hydrobenjg,
  },
  {
    class: 'sliderImageSize',
    images: Diamond,
  },
  {
    class: 'sliderImageSize',

    images: Nation,
  },
  {
    class: 'sliderImageSize',

    images: Sumitomo,
  },
  {
    class: 'sliderImageSize',

    images: Welspon,
  },
  {
    class: 'slideImageExtraLarge',
    images: ShivanAutoTech,
  },
  {
    class: 'slideImageExtraLarge',
    images: BKT,
  },
  {
    class: 'slideImageExtraLarge',
    images: JBMGroup,
  },
  {
    class: 'slideImageExtraLarge',
    images: Hydrobenjg,
  },
  {
    class: 'sliderImageSize',
    images: Diamond,
  },
  {
    class: 'sliderImageSize',

    images: Nation,
  },
  {
    class: 'sliderImageSize',

    images: Sumitomo,
  },
  {
    class: 'sliderImageSize',

    images: Welspon,
  },
  {
    class: 'slideImageExtraLarge',
    images: ShivanAutoTech,
  },
  {
    class: 'slideImageExtraLarge',
    images: BKT,
  },
  {
    class: 'slideImageExtraLarge',
    images: JBMGroup,
  },
  {
    class: 'slideImageExtraLarge',
    images: Hydrobenjg,
  },
  {
    class: 'sliderImageSize',
    images: Diamond,
  },
  {
    class: 'sliderImageSize',

    images: Nation,
  },
  {
    class: 'sliderImageSize',

    images: Sumitomo,
  },
  {
    class: 'sliderImageSize',

    images: Welspon,
  },
  {
    class: 'slideImageExtraLarge',
    images: ShivanAutoTech,
  },
  {
    class: 'slideImageExtraLarge',
    images: BKT,
  },
  {
    class: 'slideImageExtraLarge',
    images: JBMGroup,
  },
  {
    class: 'slideImageExtraLarge',
    images: Hydrobenjg,
  },
];
const customStyles = {
  // Define your custom CSS variables here
  '--t': '60s',
};
const Slider = () => {
  return (
    <div className="py-5">
      <div className="d-flex justify-content-center">
        <h1 className="fw-bold text-center underline-for-heading d-inline">
          Client Portfolio
        </h1>
      </div>
      <div className="logos">
        <div className="logos-slide" style={customStyles}>
          {imagesData.map((item, index) => {
            return (
              <img
                key={index}
                src={item.images}
                alt=""
                className={item.class}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
