import React from 'react'
import '../styles/Card.css';

function Card({ img, title, description}){
  return(
    <div className='card-container'>
      <img src={URL.createObjectURL(img)}
           alt='' 
           className='card-image'/>
      <h1 className='card-title'>{title}</h1>
      <p className='card-text'>{description}</p>
    </div>
  );
}

export default Card;