/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import ToursListing from '@/pages/ToursListing';
import TourDetail from '@/pages/TourDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<ToursListing />} />
        <Route path="/tours/:id" element={<TourDetail />} />
        <Route path="/destinations" element={<div className="pt-32 text-center">Destinations Page Coming Soon</div>} />
      </Routes>
    </Router>
  );
}
