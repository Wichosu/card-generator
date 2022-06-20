import React, {useState} from 'react'
import '../styles/FormCard.css';

function FormCard(){

  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if(e.target.files && e.target.files.length > 0){
      setSelectedImage(e.target.files[0]);
    }
  }

  return(
    <form className='form-container'>
      <label htmlFor='image_upload' className='form-file-label'>img...</label>
      <input 
        type='file' 
        name='image_upload'
        id='image_upload'
        accept='.jpg, .jpeg, .png'
        className='form-file'
        onChange={imageChange} />
      {selectedImage && (
        <div className='form-image-container'>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Your image"
            className='form-image'
          />
        </div>
      )}
      <label>Title</label>
      <input type='text' />
      <label>Text</label>
      <textarea name='textarea' rows={10} cols={40} />
      <button>Create</button>
    </form>
  );
}

export default FormCard;