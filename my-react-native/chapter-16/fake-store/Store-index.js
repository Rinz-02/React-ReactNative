import { registerRootComponent } from 'expo';
import App from './App';
import CartContextProvider from './chapter-16/fake-store/CartContextProvider';
import React from 'react'

const Main = () => {
  return (
    <CartContextProvider>
        <App />
    </CartContextProvider>
  )
}

registerRootComponent(Main);