import React from 'react'
import '../components/style.css/Giflist.css'
import { useState } from 'react'


function GifSearch({submit}) {

    const [search, setSearch] = useState("");

    const handleInput = (e) => {
        setSearch(e.target.value);
    }
    const handleSubmit = (e)=> {
            e.preventDefault();
            submit(search);
    }




  return (

    <>
  

    <input type="text" 
        placeholder="Search Gifs" 
        value={search} 
        onChange={handleInput}
    />
    <button onClick={handleSubmit}>Search</button>

   
    
    </>
  )
}

export default GifSearch