import React from 'react';
import './Spinner.css';
const Spinner = () => {
  return (
    <div className="spinner">
      <div className="loader">
        <div className="part">P</div>
        <div className="part">P</div>
        <div className="part">P</div>
      </div>
    </div>
  );
};

export default Spinner;
