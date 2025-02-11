import React, { useState,useEffect } from "react";

export function Demo(){
    
    const[products,setProducts] = useState([]);
    useEffect(() => {    
                fetch('https://v2.jokeapi.dev/joke/Any')
                .then(resource => resource.json())
                .then(productsData => setProducts(productsData))
                .catch((error) => console.log("Error 404 Products not found"))
        },[])

        return<>
           
            <p>{products.type === "single" ? products.joke : (
                <>
                 <p>{products.setup}</p>
                 <p>{products.delivery}</p></>

            )}</p>
        </>
}