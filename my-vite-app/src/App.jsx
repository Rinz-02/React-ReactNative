
import './App.css'
import React, { createContext } from 'react'
import My_List from './assets/Chapter/Ch5/HandlerParam';
import { List } from './assets/Chapter/Ch5/LIstFunction';
import EventHandler from './assets/Chapter/Ch5/HigherOrderHandler';
import { ToDoList } from './assets/Chapter/Ch5/ToDoList';
import { InputChange } from './assets/Chapter/Ch5/InputOnChange';
import { Bookshop } from './assets/Chapter/Ch6/Rruseable/BookShop';




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


function App() {
 

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

     <Bookshop />
   
  </>)
}
//   export function reverse() { 
//     this.setState(this.state.items.reverse());
// }

export default App
