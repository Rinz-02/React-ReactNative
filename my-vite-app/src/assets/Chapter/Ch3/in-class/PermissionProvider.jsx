import React, { createContext } from "react";

const {Provider,Consumer} = createContext("permission");

export class PermissionProvider extends React.Component{
    state = {
        first : true,
        second : false,
        third : true

    };

    render(){
        return <Provider value={this.state}>{this.props.children}</Provider>
       
        
    }
}

export const PermissionConsumer = ({name,children}) => (
    <Consumer>{(value) => value[name] && children}</Consumer>
)