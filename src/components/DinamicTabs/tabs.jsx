import React, { useState } from 'react'



export default function tabs({tabsContent, onChange}) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const handleOnClick = (index) =>{
        setCurrentTabIndex(index)
        onChange(index);
    }


  return (
    <div className='wrapper'>
        <div className='heading'>
            {
                tabsContent.map((tabItem,index)=>{
                    return(
                    <div className={ currentTabIndex === index ? "active":''} key={index} onClick={()=> handleOnClick(index)}>
                        <span className='label'>{tabItem.label}</span>
                    </div>
                    )
                })
            }
        </div>
        <div className='content' style={{color:'red'}}>
            { tabsContent[currentTabIndex]&& tabsContent[currentTabIndex].content}
        </div>
        
    </div>
  )
}
