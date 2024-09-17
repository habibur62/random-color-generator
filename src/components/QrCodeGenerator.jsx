import React, { useState } from 'react'
import QRCode from 'react-qr-code'
export default function QrCodeGenerator() {

    const [ qrCode, setQrCode] = useState('');
    const [input, setInput]= useState('');

    const handleGenerateQrCode = () =>{
        setQrCode(input);
    }


  return (
    <div>
        <h2>QR Code Generator</h2>
        <div>
            <input onChange={(e)=> setInput(e.target.value)} type="text" name="qr-code" placeholder='Enter your value here'/>
            <button disabled={input&& input.trim() !==''?false:true} onClick={handleGenerateQrCode}>Generate</button>
        </div>
        <div>
            <QRCode id="qr-code-value" value={qrCode} size={200} bgColor="#fff" />

        </div>
    </div>  
  )
}
