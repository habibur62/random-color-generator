import React, { useState } from 'react'
import Modal from './modal';
import './modal.css'
export default function modalTest() {
    const [ showModalPopup, setShowModalPopup] = useState(false);
    const handleModalPopup = () =>{
        setShowModalPopup(!showModalPopup);
    }
    const handleOnClose = () =>{
      setShowModalPopup(!showModalPopup)
    }
  return (
    <div className='modaltest'>
        <button onClick={handleModalPopup}>Open Modal Popup</button>
        {
            showModalPopup && <Modal onClose ={handleOnClose}/>
        }
    </div>
  )
}
