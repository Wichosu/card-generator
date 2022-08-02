import React from 'react'
import '../styles/Card.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdOutlineEdit, MdOutlineEditOff } from 'react-icons/md';
import { useState } from 'react';


function Card({ img, title, description, hasImg, id, deleteCard}){

  const [edit, setEdit] = useState(false)
  const [header, setHead] = useState(title)
  const [paragraph, setParagraph] = useState(description)
  const [image, setImage] = useState(img)
  
  const editMode = () => {
    setEdit(!edit)
  }

  const editHeader = (e) => {
    setHead(e.target.value)
  }

  const editParagraph = (e) => {
    setParagraph(e.target.value)
  }

  const editImage = (e) => {
    setImage(e.target.files[0])
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
      {
        edit? <input
                type='file'
                accept='.jpg, .jpeg, .png'
                onChange={editImage} />
              :
              <img
                src={URL.createObjectURL(image)}
                alt='' 
                className='card-image' />
      }
      {
        edit? <input 
                type='text'
                placeholder={header} 
                onChange={editHeader} />
              :
              <h1 
                onClick={edit? editHeader : ''}
                className='card-title'>{header}
              </h1>
      }
      {
        edit? <input
                type='text'
                placeholder={paragraph}
                onChange={editParagraph} />
              :
              <p 
                className='card-text'>{paragraph}
              </p>
      }
      <AiOutlineCloseCircle
        onClick={() => deleteCard(id)} 
        className='card-destroyer' />
    </div>
  );
}

export default Card;