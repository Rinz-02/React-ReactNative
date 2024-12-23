import React, { useState } from "react";

export function List() {

    const [items,setItems] = useState([
    { id: 0, name: "First" },
    { id: 1, name: "Second" },
    { id: 2, name: "Third" },
  ]);

  function reverseClick(){

    const{name} = items.find((i) => id.id === id);
    console.log("clicke" ,`${name}`)

  }

  return(
    <>
    {items.map(({id,name}) =>(
       <p key={id} onClick={() => reverseClick(id)}>{name}</p>
    ) )}
    </>
  )
}