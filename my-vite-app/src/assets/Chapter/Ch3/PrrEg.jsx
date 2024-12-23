import React, { useState } from "react";

export function PrrEg(){

    const [items,setItems] = useState([]);
   

    function fetchData(){

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(["first","second","third"])
            },3000)
        })
    }

    fetchData().then((items) => {
        setItems(items);
    })

    return(
        <>
        {items.map((i) => (
            <p key={i}>{i}</p>
        ))}
        </>
    )
}