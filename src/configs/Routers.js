import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import FlashMessage from "../components/FlashMessage/FlashMessage"
import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Main from "../pages/Main"
import AboutUs from "../pages/AboutUs"
import ContactUs from "../pages/ContactUs"
import NotFound from "../pages/NotFound"
import UserAccount from "../pages/UserAccount"
import WishList from "../pages/WishList"
import Shop from "../pages/Shop"
import Cart from "../pages/Cart"

function Routers() {
  return (
    <Router>
      <Header />
      <FlashMessage />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/my-account" element={<UserAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routers
