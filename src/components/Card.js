import React from 'react'

function Card({ img, title, description}){
  return(
    <div className='card-container'>
      <img src={img} alt='' className='card-image'/>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Card;