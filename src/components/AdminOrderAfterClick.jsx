import React from 'react'
import { useLocation } from 'react-router-dom'
import PageTltle from './PageTltle';

export default function AdminOrderAfterClick() {

    const location=useLocation();
    const item=location.state;
  return (
    <div className="w-64 mx-auto mt-40 bg-blue-200">

       
        
         <img src={item.imageUrl}
         
         alt={item.name}
         className="w-small h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"

         />
       
    </div>
  )
}
