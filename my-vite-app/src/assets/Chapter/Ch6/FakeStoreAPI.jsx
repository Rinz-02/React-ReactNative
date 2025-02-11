import React, { useEffect, useState } from "react";
import '../Ch6/store.css'

export function StoreAPI(){

    const[products,setProducts] = useState([]);
    
    useEffect(() => {    
            fetch('https://fakestoreapi.com/products')
            .then(resource => resource.json())
            .then(productsData => setProducts(productsData))
            .catch((error) => console.log("Error 404 Products not found"))
    },[])

    return<section className="main">

        {products.map((value,index) => (
          
             <div className="container">
           <img src={value.image}>
           </img>
            <p>
              {value.title}
              <br></br>
              <div className="price">{value.price}$</div>
              <div>{value.id}</div>
            </p>
            </div>

        ))}
    
    </section>
}