import React from 'react'
import '../styles/Card.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdOutlineEdit, MdOutlineEditOff } from 'react-icons/md';
import { useState } from 'react';


function Card({ img, title, description, hasImg, id, deleteCard}){

  const [edit, setEdit] = useState(true)

  const editMode = () => {
    setEdit(!edit)
  }

  return(
    <div className='card-container'>
      {
        edit? <MdOutlineEdit onClick={editMode}/> : <MdOutlineEditOff onClick={editMode}/>
      }
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