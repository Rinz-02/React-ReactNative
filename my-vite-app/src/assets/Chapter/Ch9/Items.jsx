import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Item from './Item';

function Items() {

    const[Item,setItem] = useState();
    const navigate = useHistory();

    function findItem(){
        navigate.push(`/item/${Item}`);
    }
  return (
    <div>
      <p>Item Page</p>
      <input value={Item} onChange={(e) => {setItem(e.target.value)}}></input>
      <button onClick={findItem}>Find</button>
    </div>
  )
}

export default Items
