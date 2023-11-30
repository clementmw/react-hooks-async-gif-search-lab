import React from 'react'
import '../components/style.css/Giflist.css'
import { useState } from 'react'


function GifSearch({submit}) {

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleSubmit = (e)=> {
            e.preventDefault();
            submit(search);
    }




  return (

    <>
    <form onSubmit={handleSubmit}>

    <input type="text" 
        placeholder="Search Gifs" 
        value={search} 
        onChange={handleSearch}
    />
    <button type='submit'>Search</button>
    </form>
   
    
    </>
  )
}

export default GifSearch