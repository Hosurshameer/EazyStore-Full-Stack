import React from 'react'
import { useLocation } from 'react-router-dom'
import PageTltle from './PageTltle';

export default function AdminOrderAfterClick() {

    const location=useLocation();
    const item=location.state;
  return (
    <>
    <PageTltle title="Your sticker will look like this "/>
    <div className="w-64 mx-auto mt-20 bg-blue-200">

       
        
         <img src={item.imageUrl}
         
         alt={item.name}
         className="w-small h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"

         />
       
    </div>
    </>
  )
}
