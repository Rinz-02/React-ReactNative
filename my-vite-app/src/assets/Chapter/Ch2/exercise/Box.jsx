import React, { createContext } from "react";
import { A } from "./A";

export const ContextName = createContext()

export default function Box_function({userName}){

    return<>
    <div> 
        <ContextName.Provider value={userName}> <A /> </ContextName.Provider> 
    </div>
    </>
}