import React, { useEffect, useState } from "react";


export function ToDoList(){
    const [Todo,setTodo] = useState([]);
    const [item,setItem] = useState('');



function add(){
    setTodo([...Todo,item]);
}

function remove(index){
   const newTodo = Todo.filter((td,ind) => ind !== index);
   console.log(newTodo);
   setTodo(newTodo);
}

useEffect(() =>{
    console.log("List Changed")
},[Todo])

return(
    <section>
        <div className="text">
            <input className="todo-input" value={item} onChange={(event) =>setItem(event.target.value) }></input>
        </div>
        <div className="add">
            <button onClick={add}>Add</button>
        </div>
        {Todo.map((i, index) => (
          <div className="todo-list">
            <p key={i}>{i}</p>
            <button
              onClick={() => remove(index)}
              key={index}
              className="remove"
            >
              X
            </button>
          </div>
        ))}
    </section>
)

}