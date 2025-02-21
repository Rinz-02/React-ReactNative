import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import  App from './assets/indexApp.jsx'
import { ItemOne,ItemTwo,ItemThree } from './assets/Chapter/MuiTab.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
      <App/>
  </StrictMode>
  </BrowserRouter>
)

// <BrowserRouter>
  //  <StrictMode>
  //   <App/>
  //   <Routes>
  //          <Route path="/first" element={<First/>}/>
  //          <Route path="/second" element={<Second/>}/>
  //          <Route path="/third" element={<Third/>}/>
  //        </Routes>
         
  // </StrictMode>,
  // </BrowserRouter>


