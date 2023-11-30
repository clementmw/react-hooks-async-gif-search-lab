import React from 'react'
import '../components/style.css/Giflist.css'



function GifList({title, price, description,image }) {


  return (
    <>
    <ul>
        <li>Title: {title}</li>
        <li>Price: {price}</li>
        <li>Description: {description}</li>
        <img className='picture' src={image || "https://i.imgur.com/QkIa5tT.jpeg"} alt='clothes'/>
    </ul>
    
    </>
  )
}

export default GifList