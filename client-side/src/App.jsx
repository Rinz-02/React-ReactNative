import { useState } from "react";
import viteLogo from "/vite.svg";
// import './App.css'
// import axios from 'axios'
import { BrowserRouter as Router,  Link } from "react-router-dom"; 
import { Route,Routes } from "react-router-dom";
import { DefaultTab,DefaultTab2,DefaultTab3, MuiTab } from './assets/Chapter/MuiTab.jsx';
import TemporaryDrawer from "./assets/Chapter/Application.jsx";
// function Get(){
//   const[items,setItems] = useState([]);

//   useEffect(() => {
//     async function getItems() {
//       const req = await axios.get("http://localhost:8080/userList");
//       console.log(items);
//       setItems(req.data.items);
//     }

//     getItems();
//   }, []);

//   return(
//     <ul>
//       {items.map((item) => {
//         <li key={item}>{item}</li>
//       })}
//       <li>List</li>
//     </ul>
//   )
// }
function App() {
  const [link, setLink] = useState([
    { url: "/first", name: "First Page" },
    { url: "/second", name: "Second Page" },
    { url: "/third", name: "Third Page" },
  ]);
  return <TemporaryDrawer link={link} />;
}


export function First() {
  return (
    <>
      <p>First Page</p>
    </>
  );
}
export function Second() {
  return (
    <>
      <p>Second Page</p>
    </>
  );
}
export function Third() {
  return (
    <>
      <p>Third Page</p>
    </>
  );
}

 function f(){

    return(<>
      <MuiTab/>
      </>)
}

export default App;