import React from "react";

import { BrowserRouter } from "react-router-dom";
import './index.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {

  return (
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Features />
        <Reviews />
        <Footer />
      </BrowserRouter>
  )
}

export default App