import React from 'react'
import '../styles/Card.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdOutlineEdit, MdOutlineEditOff } from 'react-icons/md';


function Card({ img, title, description, hasImg, id, deleteCard}){
  return(
    <div className='card-container'>
      <MdOutlineEdit className='card-edit'></MdOutlineEdit>
      <MdOutlineEditOff></MdOutlineEditOff>
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