import React from 'react'
import '../styles/Card.css';

function Card({ img, title, description}){
  return(
    <div className='card-container'>
      <img src={require(`../imgs/${img}.jpeg`)}
           alt='' 
           className='card-image'/>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Card;