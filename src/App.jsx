// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Nav';
import Home from './components/Home';
import DestinationList from './components/DestinationList';
import DestinationDetail from './components/DestinationDetail';
import ContactForm from './components/ContactForm';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationList />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* Footer component can be added here */}
      </div>
    </Router>
  );
};

export default App;