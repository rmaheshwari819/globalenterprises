import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/gbl/gblwithoutbg.png';
import cross from '../../assets/cross.png';
import humberg from '../../assets/humberg.png';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [show, setShow] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 250) {
        if (window.scrollY > lastScrollY) {
          setShow('minusTrans');
        } else {
          setShow('shadow-sm');
        }
      } else {
        setShow('translate-y-0');
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav className={`borderMain ${show}`}>
        <div
          className="px-lg-5 px-3 navbar d-flex justify-content-between m-auto"
          style={{ height: '100px' }}
        >
          <div className="d-flex">
            <Link
              style={{ textDecoration: 'none' }}
              to="/"
              className="navbar-logo"
            >
              <img src={Logo} alt="" className="img-fluid navbarlogoherer" />
            </Link>
          </div>
          <div className="d-flex">
            <ul
              className={
                click ? 'nav-menu active my-auto' : 'nav-menu my-auto '
              }
            >
              <div
                className="menu-icon border"
                onClick={handleClick}
                aria-hidden="true"
              >
                {click ? (
                  <img
                    src={cross}
                    className="img-fluid menu-icons "
                    style={{ position: 'absolute', top: '30px', right: '40px' }}
                    alt="menu-icon"
                  />
                ) : (
                  <img
                    src={cross}
                    className="img-fluid menu-icons "
                    style={{ position: 'absolute', top: '30px', right: '40px' }}
                    alt="menu-icon"
                  />
                )}
              </div>

              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/works"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Works
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item d-lg-none">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Quote
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-links">
                  <button className="buttonDesign me-auto">Quote</button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="menu-icon" onClick={handleClick} aria-hidden="true">
            {click ? (
              <img
                src={humberg}
                className="img-fluid menu-icons"
                alt="menu-icon"
              />
            ) : (
              <img
                src={humberg}
                className="img-fluid menu-icons"
                alt="menu-icon"
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
