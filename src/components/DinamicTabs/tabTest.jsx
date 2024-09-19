import React from 'react'
import Tabs from './tabs'
import './tabs.css'

function RandomComponent(){
    return <h1>Some random content</h1>
}

export default function tabTest() {

    const tabs = [
        {
            label: "Tab 1",
            content: <div> This is content for Tab 1</div>
        },
        {
            label: "Tab 2",
            content: <div>this is context for tab 2</div>
        },
        {
            label: "Tab 3",
            content: <RandomComponent />
        }
    ]

    const handleChange =(currentTabIndex) =>{
        console.log(currentTabIndex);
    }

  return <Tabs tabsContent={tabs} onChange={handleChange}/>

}
 