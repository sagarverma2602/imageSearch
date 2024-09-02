import React, { useState } from 'react'
import ImageCard from './ImageCard'

const Home = () => {
    const [searchText, setSearchText] = useState('')
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)
    const client_id=import.meta.env.VITE_CLIENT_ID
    const handleSearch = () => {
        if(searchText==='') return
        fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${searchText}&client_id=${client_id}`).then(res=>res.json()).then(data=>setImages(data.results))  
    }
  return (
    <>
        Name: Sagar Verma
        <br />
        Email: Sagarv19171@gmail.com
        <div >
            <div style={{display:'flex',justifyContent:'center'}}>
                <input type='search' placeholder='Search' val={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <input type='button' value='Search' onClick={handleSearch}/>
            {images && images.length!==0 && <button onClick={()=>{setPage((prev)=>prev+1);handleSearch()}}>Next</button>}
            </div>
            <div style={{display
            :'flex', flexWrap:'wrap', justifyContent:'center' 
            }}>
                {images.map((image, index) => {
                    return <ImageCard key={index} image={image}/>
                })}
                {/* <ImageCard/> */}
            </div>
        </div>
    </>
  )
}

export default Home
