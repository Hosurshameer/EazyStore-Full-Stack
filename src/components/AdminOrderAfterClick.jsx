import React from 'react'
import { useLocation } from 'react-router-dom'

export default function AdminOrderAfterClick() {

    const location=useLocation();
    const item=location.state;
  return (
    <div>
        
         <img src={item.imageUrl} alt={item.name}/>
       
    </div>
  )
}
