import React, { createContext, useContext } from "react";
import { useState } from "react";

export const ContexUserName = createContext();  //Context can provide not only variable also function

export function UseContexEg({children}){
    const[userName,setUserName] = useState('Eant Nyein');

    return(
        <>
        <ContexUserName.Provider value={{userName,setUserName}}>
            {children}
        </ContexUserName.Provider>
        </>
    )
}

export default function AcceptData(){
    const{userName,setUserName} = useContext(ContexUserName);

    return(
        <>
        <input onChange={(event) => {
            setUserName(event.target.value);
        }}></input>
        <p>Logged In as : {userName}</p>
        </>
    )
}