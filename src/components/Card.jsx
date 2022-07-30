import React from 'react'
import '../styles/Card.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Card({ img, title, description, hasImg, id, deleteCard}){
  return(
    <div className='card-container'>
      <AiOutlineCloseCircle onClick={() => deleteCard(id)} className='card-destroyer'/>
      <img src={hasImg? URL.createObjectURL(img) : ''}
        alt='' 
        className='card-image' />
      <h1 className='card-title'>{title}</h1>
      <p className='card-text'>{description}</p>
    </div>
  );
}

export default Card;