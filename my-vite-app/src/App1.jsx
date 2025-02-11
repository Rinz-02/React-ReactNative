import React, { useContext, useState } from "react";
import ToDoListEx from "./assets/Chapter/Ch8/exercise/ToDoListEx";



// export function listCancel(){    //you can run this function as App1 function
//     const[Condition,setCondition] = useState();

//     return(
//         <section>
//             <button onClick={() => setCondition(!Condition)}>Cancel</button>
//              {(Condition && <UserListCleanContainer/>)}
//        </section>
//     )
// }

// export function defaultProp() {
//   const validProps = {
//     myString: "My String",
//     myNumber: 100,
//     myBool: true,
//     myFunc: () => "My Return Value",
//     myArray: ["One", "Two", "Three"],
//     myObject: { myProp: "My Prop" },
//   };
//   const invalidProps = {
//     myString: 100,
//     myNumber: "My String",
//     myBool: () => "My Reaturn Value",
//     myFunc: true,
//     myArray: { myProp: "My Prop" },
//     myObject: ["One", "Two", "Three"],
//   };
//   return (
//      <MyComponent props={validProps}/>
//   );
// }

// export function label(){
//   return(<>
//   <MyComponent label="Regular Values" max={20} value={10} />
//   <MyComponent label="String Values" max="20" value="10" />
//   <MyComponent label={Number.MAX_SAFE_INTEGER} max={new Date()} value="10" />
//   </>)
// }

// export function Error() {
//   const user = new MyUser("William", "Hazel");

//   return (
//     <>
//       <UserComponent myUser={user} myDate={new Date()} myCount={1} />
//     </>
//   );
// }

export function App1() {
  <section>
    <ToDoListEx />
  </section>;
}
