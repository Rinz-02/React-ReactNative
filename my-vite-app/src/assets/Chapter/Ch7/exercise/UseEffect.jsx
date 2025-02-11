import React, { useState } from 'react'
import './Button.css'
export default function HandleClick() {
  const[mode,setMode] = useState(true);

  return (
    <body className={mode? "light" : "dark"}>
        <button className={mode? "light" : "dark"} onClick={() => {setMode(!mode)}}>Button</button>
    </body>
  )
}
