import React from 'react'
import Items from './Items'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function Item() {
  const {itemName} = useParams();
  return (
    <div>
     Item : {itemName}
      
    </div>
  )
}
