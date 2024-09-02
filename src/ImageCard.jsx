import React from 'react'
import { useNavigate } from 'react-router-dom'

const ImageCard = ({image}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/addCaption', {state: {image}})
    }
    
  return (
  <>

<div style={{display:'flex',flexDirection:'column',flexWrap:'wrap'}}>
    <div style={{
        display: 'inline-block',
        margin: '10px 10px 10px 20px',
        flexGrow: '4',
        flex: '0 0 calc(100% * (1/6)-10-10)',
    }}>
        <img 
        style={{ objectFit: 'cover', width: '250px',height: '200px',}}
        src={image.urls.regular} alt="random" 
        />
    </div>
        <button onClick={handleClick} style={{width:'250px',padding:"10px 10px",margin: '10px 10px 10px 20px',border:'none'}}>Add Caption</button>
        </div>
        </>
  )
}

export default ImageCard
