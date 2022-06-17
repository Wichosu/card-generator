import React from 'react'
import '../styles/FormCard.css'

function FormCard(){
  return(
    <form className='form-container'>
      <label for='image_upload'>img</label>
      <input 
        type='file' 
        name='image_upload'
        id='image_upload'
        accept='.jpg, .jpeg, .png' />
      <label>Title</label>
      <input type='text' />
      <label>Text</label>
      <input type='text' />
      <button type="submit">Create</button>
    </form>
  );
}

export default FormCard;