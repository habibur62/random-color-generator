import React, { useEffect, useState } from 'react'
import './ScrollIndicator.css'
export default function ScrollIndicator() {
    const [ scrollPercentage, setScrollPercentage] = useState(0)
    const handleScrollPercentage = () =>{
   
        const howMuchScrolled = 
        document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight-document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled/height)*100);
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScrollPercentage)

        return ()=>{
            window.removeEventListener('scroll', ()=>{})
        }
    })




  return (
    <div className='scroll-indicator-head'>
        <h2>Scroll Indicator</h2>
        <div className='scroll-level-container'>
            <div className='scroll-level' style={{width: `${scrollPercentage}%`}}></div>

        </div>
    </div>
  )
}
