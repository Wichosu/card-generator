import React from 'react'
import '../styles/FormCard.css'

function FormCard(){
    return(
        <form className='Form-container'>
            <label> img</label>
            <input type='file' name="" id="" />
            <label>Title</label>
            <input type='text' />
            <label>Text</label>
            <input type='text' />
        </form>
    );
}

export default FormCard;