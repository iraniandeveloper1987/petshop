import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FlashMessage from "../components/FlashMessage/FlashMessage";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../pages/Main";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import NotFound from "../pages/NotFound";

function Routers() {
  return (
    <Router>
      <Header />
      <FlashMessage />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Routers;
