import React, { Component } from "react";

export class MyInput extends Component(){
    onChange(){
        console.log("onClick");
    }
    onBlur(){
        console.log("onBlur")
    }

    render(){
        return(<>
        <input onChange={this.onChange} onBlur={this.onBlur}></input>
        </>)
    }
}