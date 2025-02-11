import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import { DefaultTab,DefaultTab2,DefaultTab3 } from './assets/Chapter/MuiTab.jsx';
import { First,Second,Third } from './App.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <StrictMode>
    <App/>
    <Routes>
           <Route path="/first" element={<First/>}/>
           <Route path="/second" element={<Second/>}/>
           <Route path="/third" element={<Third/>}/>
         </Routes>
         
  </StrictMode>,
  </BrowserRouter>
)




