import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-black">404 - Page Not Found</h1>
      <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
    </div>  
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home /> } />

          <Route path="*" element={<NotFound />} />

        </Routes>

        <Footer/>

    </BrowserRouter>
  );
};

export default App