import React, { Component } from "react";
export class MyButton extends Component{

    //if there is no prop is given ,use this as prop(default prop)
    static defaultProps = {
        disabled : false,
        text : "My Button"
    };
    render(){
        const {disabled,text} = this.props;
        return(
            //receive pararmeter
            <button disabled={disabled}>{text}</button>
        )
    }
}

export class PropEg extends Component{

    state = {
        myList : ["first","second","third"]
    }
    render(){
        return(
            <>
            {/*give parameter*/}
            <MyButton text={"With Param"} disabled={true}/>
            <MyList myList={this.state.myList}/>
            </>
        )
    }
}

export class MyList extends Component{
    render(){
        const {myList} = this.props;
        return(
            <>
            <ul>
                {myList.map(i => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
            </>
        )
    }

}