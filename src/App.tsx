/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import ToursListing from '@/pages/ToursListing';
import TourDetail from '@/pages/TourDetail';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import BuildItinerary from '@/pages/BuildItinerary';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<ToursListing />} />
        <Route path="/tours/:id" element={<TourDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/build-itinerary" element={<BuildItinerary />} />
        <Route path="/destinations" element={<div className="pt-32 text-center">Destinations Page Coming Soon</div>} />
      </Routes>
    </Router>
  );
}
