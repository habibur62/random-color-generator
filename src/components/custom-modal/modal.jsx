import React from 'react'

export default function Modal({onClose}) {
  return (
    <div id={Modal} className='modal'>
        <div className='modal-content'>
            <div className="header">
            <span onClick={onClose} className='close-modal-icon'>&times;</span>

                <h2>Header</h2>
            </div>
            <div className="body">
              body
            </div>
            <div className="footer">
              footer
            </div>

        </div>

    </div>
  )
}
