import React from 'react'
import '../styles/Card.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdOutlineEdit, MdOutlineEditOff } from 'react-icons/md';
import { useState } from 'react';


function Card({ img, title, description, hasImg, id, deleteCard}){

  const [edit, setEdit] = useState(false)
  const [header, setHead] = useState(title)
  
  const editMode = () => {
    setEdit(!edit)
  }

  const editHeader = (e) => {
    setHead(e.target.value)
  }

  return(
    <div className='card-container'>
      {
        edit? <MdOutlineEditOff
                onClick={editMode} 
                className='card-edit' />
              : 
              <MdOutlineEdit 
                onClick={editMode}
                className='card-edit' />
      }
      <img
        src={hasImg? URL.createObjectURL(img) : ''}
        alt='' 
        className='card-image' />
      {
        edit? <input 
                type='text'
                placeholder={header} 
                onChange={editHeader}/>
              :
              <h1 
                onClick={edit? editHeader : ''}
                className='card-title'>{header}
              </h1>
      }
      
      <p className='card-text'>{description}</p>
      <AiOutlineCloseCircle
        onClick={() => deleteCard(id)} 
        className='card-destroyer' />
    </div>
  );
}

export default Card;