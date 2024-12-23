import React, { createContext, useEffect, useState } from "react";

export const ScreenContext = createContext();

 export function ScreenContextProvider({children}){
    const [screenSize,setScreenSize] = useState({
        width : window.innerWidth,
        height : window.innerHeight
    })

    useEffect(() => {
        function AdjustSize() {
             setScreenSize({
                width : window.innerWidth,
                height : window.innerHeight
             })
        }
         window.addEventListener("resize" , AdjustSize);

  return() => {
   window.removeEventListener("resize", AdjustSize);
}
    })

   
   return(
    <ScreenContext.Provider value={{screenSize}}>
        {children}
    </ScreenContext.Provider>
   )

}

 




