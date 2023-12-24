import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import './Layout.css';
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        {children}

        <Footer />
        <Link
          to="https://wa.me/919869037711"
          target="_blank"
          className="whatsapp_float d-flex justify-content-center align-items-center"
        >
          <AiOutlineWhatsApp className="" size={50} />
        </Link>
      </div>
    </>
  );
};

export default Layout;
