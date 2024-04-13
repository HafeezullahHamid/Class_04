// import React from 'react'

// const Routes =()=>  {
//   return (
//   <div>Routes</div>
//   )
// }

// export default Routes;




import { BrowserRouter , Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Contact from "./Contact";

const MyRoutes = () => {
  return (
    <div>
      <BrowserRouter>
          <Link to="/home">  Home</Link>
          <Link to="/about">  About</Link>
          <Link to="/contact">  Contact</Link>
      

        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MyRoutes;
