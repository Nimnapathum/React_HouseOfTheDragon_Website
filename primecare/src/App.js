// import React, { useState } from "react"
// import Navbar from "./Components/Navbar/Navbar"
// import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contactus from "./pages/Contactus";

// const App = () => {

//   const [theme , setTheme] = useState('light')



//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar theme={theme} setTheme={setTheme}/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/About' element={<About/>}/>
//         <Route path='/ContactUs' element={<Contactus/>}/>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App


import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
//import Contactus from "./pages/Contactus";
import History from "./Components/History/History";
import PlayArea from "./pages/PlayArea";
import ContactUs from "./Components/ContactUs/ContactUs2";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          {/* <Route path='/ContactUs' element={<Contactus />} /> */}
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/history' element={<History/>} />
          <Route path='/playarea' element={<PlayArea/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
