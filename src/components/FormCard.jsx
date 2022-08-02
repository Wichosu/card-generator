import React, {useState} from 'react'
import '../styles/FormCard.css';
import {v4 as uuidv4} from 'uuid';

function FormCard(props){
  //hooks
  const [selectedImage, setSelectedImage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [hasImg, setHasImg] = useState(false);

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const changeDescription = (e) => {
    setDescription(e.target.value)
  }

  const imageChange = (e) => {
    if(e.target.files && e.target.files.length > 0){
      setSelectedImage(e.target.files[0]);
      setHasImg(true)
    }
  }

  const verifyImg = () => {
    if(!hasImg){
      alert('missing image, please selected one')
    }
  }

  const sendForm = (e) => {
    e.preventDefault();

    const newCard = {
      id: uuidv4(),
      image: selectedImage,
      title: title,
      description: description,
      hasImg: hasImg
    }
    setSelectedImage()
    setHasImg()
    setDescription('')
    setTitle('')
    props.onSubmit(newCard);
  }

  return(
    <form onSubmit={sendForm} className='form-container'>
      <label htmlFor='image_upload' className='form-file-label'>img...</label>
      <input 
        type='file' 
        name='image_upload'
        id='image_upload'
        accept='.jpg, .jpeg, .png'
        className='form-file'
        onChange={imageChange} 
        required />
      {selectedImage && (
        <img
          src={URL.createObjectURL(selectedImage)}
          alt=""
          className='form-image'
        />
      )}
      <input 
        placeholder='title...'
        type='text'
        name='title'
        id='title'
        maxLength={40}
        onChange={changeTitle} 
        value={title}
        className='form-text'
        required />
      <textarea
        placeholder='text...'
        name='textarea'
        rows={5} 
        cols={40}
        maxLength={160} 
        onChange={changeDescription}
        value={description}
        className='form-text'
        required />
      <button className='form-text' onClick={verifyImg}>CREATE</button>
    </form>
  );
}

export default FormCard;