import React, { useEffect, useState } from 'react'

export default function RandomColorGenerator() {

    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");


    function randowColorUtility(e){
        return Math.floor(Math.random()*e)
    }
    
    function handleCreateRandomHexColor(){
       
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

    let hexColor ="#";

    for(let i =0; i<6;i++){
        hexColor += hex[randowColorUtility(hex.length)]
    }

    setColor(hexColor);
    }

    function handleCreateRandomRgbColor(){
        const r = randowColorUtility(256);
        const g = randowColorUtility(256);
        const b = randowColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(()=>{
        if(typeOfColor === "rgb")handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    },[typeOfColor]);
    


  return (
    <div 
    style={{
        width: "100vw",
        height: "100vh",
        background: color,
    }}>
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button onClick={
            typeOfColor ==="hex"
            ? handleCreateRandomHexColor
            :handleCreateRandomRgbColor
        }>Generate Random Color</button>

        <div>
            <h2>{typeOfColor ==="hex"?"HEX Color": "RGB Color"}</h2>
            <h4>{color}</h4>
        </div>
    </div>
  )
}
