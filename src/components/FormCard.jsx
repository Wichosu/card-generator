import React from 'react'
import '../styles/FormCard.css'

function FormCard(){
  return(
    <form className='form-container'>
      <label htmlFor='image_upload' className='form-file-label'>img...</label>
      <input 
        type='file' 
        name='image_upload'
        id='image_upload'
        accept='.jpg, .jpeg, .png'
        className='form-file' />
      <label>Title</label>
      <input type='text' />
      <label>Text</label>
      <textarea name='textarea' rows={10} cols={40} />
      <button>Create</button>
    </form>
  );
}

export default FormCard;