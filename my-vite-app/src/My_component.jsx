import { Component } from "react";

export class First extends Component{
    render(){
        return(
            <p>First</p>
        )
    }
}

export class Second extends Component{
    render(){
        return(
            <p>Second</p>
        )
    }
}

class MyComponent extends Component{
    render(){
        return <section>{this.props.children}</section>
           
        
    }
}

MyComponent.First = First;
MyComponent.Second = Second;

export default MyComponent;

