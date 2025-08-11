import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PlaceOrder from './pages/placeOrder/placeOrder';
import Verify from './Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';


function App() {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
