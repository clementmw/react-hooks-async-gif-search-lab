import React, { useEffect } from 'react'
import { useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

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
   const handleSubmit = (searchTerm) => {
          console.log(searchTerm)
   }

  
   
    
  return (
    <div>
        <GifSearch
            submit = {handleSubmit}
        />
        {fetchproducts}
        
    
    
    </div>
  )
}

export default GifListContainer