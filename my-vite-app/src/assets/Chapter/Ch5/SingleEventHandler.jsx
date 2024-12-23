import React, { Component } from "react";

export class MyButton extends Component{
    onClick(){
        console.log("onClick")
    }

    render(){
        return(<>
        <button onClick={this.onClick}>{this.props.children}</button>
        </>)
    }
}