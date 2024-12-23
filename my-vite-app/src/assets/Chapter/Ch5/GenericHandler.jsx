import React, { Component } from "react";
import { reverse } from "../../../App";
export class MyList extends Component(){


 onReverseClick = reverse.bind(this);
render(){
    const {state : {items} ,onReverseClick} = this;

    return(<>
    <button onClick={onReverseClick}>Reverse</button>
    <ul>
        {items.map((v,i) => (
            <li key={i}>{v}</li>
        ))}
    </ul>
    </>)

}

}

