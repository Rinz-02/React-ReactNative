
 import React, { useState } from 'react'
 
 export default function ToDoListEx() {

    const [Todo,setTodo] = useState([]);
    const [item,setItem] = useState('');

    function add(){
        setTodo([...Todo,item]);
    }

    return(
        <section>
            <div >
                <input value={item} onChange={(event) => setItem(event.target.value)}></input>
            </div>
            <div>
                <button onClick={add}>Add</button>
            </div>

            {Todo.map((value,index) => (
                <p key={index}> {value}</p>
            )) }


        </section>
    )
 }
 