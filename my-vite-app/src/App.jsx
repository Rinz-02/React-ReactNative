
import './App.css'
import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Route ,Redirect} from "react-router-dom";
import Product from './assets/Chapter/Ch9/exercise/Product';
import axios from "axios";
import { useEffect } from 'react';
import ExerciseForm from './assets/Chapter/Exercise/ExerciseForm';

  // function ChoosePage({page}){
  //   const Page = [Page1,Page2,Page3] [page];

  //   return<>
  //   <Page />
  //   </>
  // }

  // export const userContext = createContext("Eant Nyein Han");

//   const items = [

// { id: 0, name: "First" },
// { id: 1, name: "Second" },
// { id: 2, name: "Third" }

// ];


function functionRouteExe() {
 

  // let userName = "Eant";
  // const [page,setPage] = useState(0);
  // return (
  //   <div>
  //   <UserContext.Provider value={userName}>
  //     <button onClick={() => setPage(0)} disabled={page === 0 }>Page1</button>
  //     <button onClick={() => setPage(1)} disabled={page === 1 }> Page2</button>
  //     <button onClick={() => setPage(2)} disabled={page === 2}>Page3</button>
  //     <ChoosePage page ={page} />
  //   </UserContext.Provider>

  //   </div>
  // );

  return(<>
  <Route path="/" component={Product} />
  <Route path="/RouteExe/:productName" component={Product} />
     
  </>)
}
//   export function reverse() { 
//     this.setState(this.state.items.reverse());
// }

export default App

// function App(){
//   const[items,setItems] = useState([]);

//   useEffect(() => {
//     async function getItems() {
//       const req = await axios.get("http://localhost:8080/userList");
//       console.log(req.data.items);
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

function App(){
  return<>
     <ExerciseForm />
  </>
}
