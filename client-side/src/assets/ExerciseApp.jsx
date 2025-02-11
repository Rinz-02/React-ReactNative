import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react'

export default function  ExerciseApp(){
  const[list,setList] =useState([]);

  useEffect(() => {
    async function getList(){
      const request = await axios.get("http://localhost:8080/List");
      console.log(request);
     setList(request.data.name)
      
    }

    getList();
  },[]);


  return(
    <ul>
      {list && list.map((lists) => {
        <li key={lists}>{lists}</li>
      })}
    </ul>
  )
}

