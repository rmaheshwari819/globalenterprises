import React from 'react';
import './PreLoader.css';
import Logo from '../../assets/gbl/gblcircle.png';

const Preloader = () => {
  return (
    <div className="parmeshwarStart">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
        <img className="word" src={Logo} alt="Parmeshwar" />
      </div>
    </div>
  );
};

export default Preloader;
