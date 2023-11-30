import React, { useEffect } from 'react'
import { useState } from 'react'
import GifList from './GifList'

function GifListContainer() {
    const [products, setproducts] = useState([])
    useEffect (()=> {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(data => setproducts(data))
    },[])
   const fetchproducts = products.map ((product)=>{
    return(
        <GifList key={product.id}
        title={product.title} 
        price={product.price}  
        description={product.description}
        image={product.images[0]}
    />

    )
   
   
   })
  
   
    
  return (
    <div>{fetchproducts}</div>
  )
}

export default GifListContainer