import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Service from './components/Service';
import HowBuySell from './components/HowBuySell';
import MyMain from './components/MyMain';
import SubHeader from './components/SubHeader';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AuctionCreator from './components/AuctionCreator';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import Bidder from './components/Bidder';



function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Routes>
        <Route path="/" element={<MyMain />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/howbuysell" element={<HowBuySell />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
           {/* Sub header routes */}
        <Route path='/AuctionCreator' element={<AuctionCreator />} />
        <Route path='/Bidder' element={<Bidder />} />
      </Routes>
      
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
