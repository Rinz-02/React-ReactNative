import React, { useState } from "react";
export function UseEg(){
    const[screenSize,setScreenSize] =useState({
        screenWidth : window.innerWidth,
        screenHeight : window.innerHeight,
    });


    useEffect( () => {
        function screenResize(){

            console.log("Event Occured!")

           setScreenSize({
             screenWidth : window.innerWidth,
            screenHeight : window.innerHeight
           })

        }

        window.addEventListener("resize" , screenResize);

        return()=> {
            window.removeEventListener("resize",screenResize)
        }


    })

    

}