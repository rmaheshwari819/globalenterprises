import React from 'react';
import { SlLocationPin } from 'react-icons/sl';
import { FiMail } from 'react-icons/fi';
import { HiOutlinePhone } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Logo from '../../assets/gbl/gblcircle.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="px-lg-5 px-md-4 px-3 footerBackground">
      <div className="">
        <div className="d-flex flex-wrap justify-content-between py-lg-5 py-4 ">
          <div className="col-lg-3 col-md-6 col-12 my-lg-0 my-md-3 mt-3  ">
            <div className="px-2">
              <img
                className="footerLogoHere pb-4 img-fluid"
                src={Logo}
                alt="logo"
              />
              <div className="">
                <h6>
                  <SlLocationPin size={20} className="me-1 " /> Office Address
                  :-
                </h6>
                <p className="ms-4 px-1 ">
                  Shop No. 16, Pratap Pura Market, Zawar Mines - 313901, Udaipur (Raj.)
                </p>
              </div>
              <div className="">
                <h6>
                  <SlLocationPin size={20} className="me-1 " /> Godown Address
                  :-
                </h6>
                <p className="ms-4 px-1 ">
                  32, Nakoda Complex H.M. Sector 4, <br></br>A-136 Murshid Nagar Sec 12 Saweena Udaipur (Raj.) - 313002
                </p>
              </div>

              <div className="mt-3">
                <ul className="list-unstyled">
                <li>
                    <Link to="tel:8000074330" className="link-tagfooter">
                      <HiOutlinePhone size={20} className="me-1" /> +91
                      8000074330 (Mohd. Sharif)
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:9784098800" className="link-tagfooter">
                      <HiOutlinePhone size={20} className="me-1" /> +91
                      9784098800 (Rohit Maheshwari)
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="mailto:eglobalenterprises@gmail.com"
                      className="link-tagfooter"
                    >
                      <FiMail size={20} className="me-1" /> eglobalenterprises1@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 my-lg-0 my-md-3 mt-3  ">
            <div className="px-2 ">
              <h4 className="pb-4">Services</h4>
              <ul className="list-unstyled">
                <Link to="/fittings" className="link-tagfooter">
                  <li className="">Civil Construction</li>
                </Link>
                <Link to="/pipes" className="link-tagfooter">
                  <li className="mt-lg-3 mt-md-3 mt-3">Fabrication & Erection</li>
                </Link>
                <Link to="/flanges" className="link-tagfooter">
                  <li className="mt-lg-3 mt-md-3 mt-3">Man Power Supply</li>
                </Link>
                <Link to="/bold-fastners" className="link-tagfooter">
                  <li className="mt-lg-3 mt-md-3 mt-3">Earthmovers Services</li>
                </Link>
                <Link to="/angle-channels" className="link-tagfooter">
                  <li className="mt-lg-3 mt-md-3 mt-3">Crane Supply</li>
                </Link>
                <Link to="/steets-plates" className="link-tagfooter">
                  <li className="mt-lg-3 mt-md-3 mt-3">Electrical Works</li>
                </Link>
                <Link to="/wires-bars" className="link-tagfooter">
                  <li className="mt-lg-3 mt-md-3 mt-3">Transportation</li>
                </Link>
                <Link to="/percentage-alloys" className="link-tagfooter">
                  <li className="mt-lg-3 mt-md-3 mt-3">Operation & Maintenence</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 my-lg-0 my-md-3 mt-3 ">
            <div className="px-2">
              <h4 className="pb-4">Quick Links</h4>
              <ul className="list-unstyled">
                <li className="">
                  <Link to="/" className="link-tagfooter">
                    Home
                  </Link>
                </li>
                <li className="mt-lg-3 mt-md-3 mt-3">
                  <Link to="/services" className="link-tagfooter">
                    Services
                  </Link>
                </li>
                <li className="mt-lg-3 mt-md-3 mt-3">
                  <Link to="/works" className="link-tagfooter">
                    Works
                  </Link>
                </li>
                <li className="mt-lg-3 mt-md-3 mt-3">
                  <Link to="/contact" className="link-tagfooter">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 my-lg-0 my-md-3 mt-3 ">
            <div className="px-2">
              <h4 className="pb-4">Find Us On Google</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d300.16015502779885!2d73.73541829896692!3d24.347288896623542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1703448515416!5m2!1sen!2sin"
                style={{ width: '100%', height: '250px' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="my-auto parafotter py-3 ">
          &copy; {new Date().getFullYear()} Global Enterprises. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
