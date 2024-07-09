import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Signup from './components/Auth/Signup';
import POIList from './components/POI/POIList';
import EventList from './components/Events/EventList';
import Donation from './components/Donation';
import PropertySale from './components/PropertySale';
import Rules from './components/Rules';
import History from './components/History';
import PhotoGallery from './components/PhotoGallery';
import GoogleMap from './components/GoogleMap';
import './styles/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pois" element={<POIList />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/property-sale" element={<PropertySale />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/map" element={<GoogleMap />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
