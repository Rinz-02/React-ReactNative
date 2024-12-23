import React, { Component } from "react";

export class StateEg extends Component{


    state = {
        first: true,
        second: false
    }
  

    render(){

        setTimeout( () => {
            //change state value
            this.setState({    
                first: false,
                second : true
            })
            //3seconds
        },3000)

        const {first,second} = this.state;
        return(
            <>
            <button disabled={first}>First</button>
            <button disabled={second}>Second</button>
            </>
        )
    }

}

export function StateFun (){
     
    const object = {
        first : true,
        second : false
    }
    
    return(
        <>
        <button disabled={object.first}>First</button>
        <button disabled={object.second}>Second</button>
        </>
    )
}
