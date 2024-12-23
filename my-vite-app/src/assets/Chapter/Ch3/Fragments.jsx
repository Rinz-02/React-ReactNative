 import React, { Fragment } from "react";
 
 
 export class WithoutFrag extends React.Component{

    render(){
        return(
            <div>
                <h2>Without Fragments</h2>
                <p>
                    Add an extra  
                    <code> div</code>
                    "elememt."
                </p>
            </div>
        );
    }

 }
 export class WithFrag extends React.Component{
    render(){
        return(
            <Fragment>
                <h2>With Fragments</h2>
                <p>Doesn't have any unused DOM elements.</p>
            </Fragment>
        );
    }
 }

