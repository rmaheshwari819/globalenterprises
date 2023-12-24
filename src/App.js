import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Fittings from './pages/Fittings';
import Pipes from './pages/Pipes';
import Flanges from './pages/Flanges';
import ICFittings from './pages/BoldFastners';
import BarsWires from './pages/BarsWires';
import SteelPlates from './pages/SteelPlates';
import AngleChannels from './pages/AngleChannels';
import PercentageAlloys from './pages/PercentageAlloys';
import Rods from './pages/Rods';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader/Preloader';
import About from './components/About/About';
import Quality from './pages/Quality/Quality';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 200);
  });
  return (
    <>
      {!loading ? (
        <Preloader />
      ) : (
        <div className="App container-width">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Product />} />
            <Route path="/works" element={<Quality />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/fittings-manufacturer-in-india"
              element={<Fittings />}
            />
            <Route path="/pipes-manufacturer-in-india" element={<Pipes />} />
            <Route
              path="/flanges-manufacturer-in-india"
              element={<Flanges />}
            />
            <Route
              path="/bold-fastners-manufacturer-in-india"
              element={<ICFittings />}
            />
            <Route
              path="/angle-channels-manufacturer-in-india"
              element={<AngleChannels />}
            />
            <Route path="/rods-manufacturer-in-india" element={<Rods />} />
            <Route
              path="/bars-wires-manufacturer-in-india"
              element={<BarsWires />}
            />
            <Route
              path="/steets-plates-manufacturer-in-india"
              element={<SteelPlates />}
            />

            <Route
              path="/percentage-alloys-manufacturer-in-india"
              element={<PercentageAlloys />}
            />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
