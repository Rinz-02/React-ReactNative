import { Component } from "react";
import React from "react";
import { useState } from "react";

export class ClassState extends React.Component{

    state ={
        name: "",
    };

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                name : "Eant",
            })
        },3000)
    }
    render(){
        return<>
        <p>Name is : {this.state.name}</p>
        </>
    }
}

export function Counter(){
    const[count, setCount] = useState(0);

    function increaseCount(){

        setTimeout(() => {
            setCount(count+1);
        },3000)
    }

    function decreaseCount(){
        setTimeout(() => {
            setCount(count-1)
        }, 3000);
    }

    return<>
    <p>Count : {count}</p>
    <button onClick={increaseCount}n>Count</button>
    <button onClick={decreaseCount}n>DecreaseCount</button>
    
    </>
}



export function UseStaeEg(){
     const[name,setName] = useState("");


     setTimeout(()=> {
        setName("Eant");
     },3000);

     return<>
     <p>Name is : {name}</p>
     </>
}