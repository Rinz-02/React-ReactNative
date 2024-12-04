import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyButton } from './App_component'
import  './Style.css'
import Profile from './App_component'
import { MyButton1 } from './App_Comp'
import { Profile1 } from './App_Comp'
import { Click } from './App_Comp'

function App() {
  return (
    <div>
      <Profile/>
      <h2>This is my Page!</h2>
      <MyButton/>
      <Click/>
     
    </div>
  );
}

export default App
