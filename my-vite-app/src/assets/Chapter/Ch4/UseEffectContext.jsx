import React, { createContext, useEffect } from "react";

export const UserContext = createContext();

function fetchUser(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({id : 1, name : "William"})
        },2000)
    })
}

export function UserProvider({children}){
    const[user,setUser] = useStae({name : "name..."});

    useEffect(() => {
        fetchUser.then(user => {
            setUser(user)
        });
    },[])

    return(
        <>
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
        </>
    )

}