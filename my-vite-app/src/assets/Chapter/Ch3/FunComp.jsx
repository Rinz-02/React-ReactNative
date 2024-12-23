import React from "react";


//functional component(Stateless)
function MyButton(props){
    const {disabled,text} = props;
    return(
        <>
        <button disabled={disabled}>{text}</button>
        </>
    )
}
export function FunEg(){

    const object = {
        first : {
            disabled : true,
            text : "first"
        },
        second : {
            disabled : false,
            text : "second"
        }
    }

    return(
        <>
        <MyButton disabled={object.first.disabled} text={object.first.text}/>
        <MyButton disabled={object.second.disabled} text={object.second.text}/>
        </>
    )
}