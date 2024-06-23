import React from 'react';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <div classNanme="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <Highlights />
        <Testimonials />
        <About />
        <Footer />
      </Router>
    </div>
  );
}

export default App;