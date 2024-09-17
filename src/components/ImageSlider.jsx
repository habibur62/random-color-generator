import React, { useEffect, useState } from 'react'
import './ImageSlider.css'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'


export default function ImageSlider({url, limit}) {

  const [images , setImages] = useState([]);
  const [currnetSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try{
        setLoading(true);
        const response = await fetch(getUrl);
        const data = await response.json();

        if(data){
          setImages(data);
          setLoading(false);
        }
    }catch(e){
      setErrorMessage(e.errorMessage);
      setLoading(false);
    }
  }


  useEffect(()=>{
    if(url !== '')fetchImages(`${url}?page=1&limit=${limit}`)
  },[url]);


  if(loading){
    <div>Loading !! please wait...</div>
  }
  if(errorMessage!=null){
    <div>Error occured ! {errorMessage}</div>
  }

  const handleleft = () =>{
    setCurrentSlide(currnetSlide === 0 ? images.length-1 : currnetSlide-1 )
  }

  
  const handleright = () =>{
    setCurrentSlide(currnetSlide === images.length-1 ? 0  : currnetSlide+1 )
  }


  return (
    <div>
      <div className="container">
      <BsArrowLeftCircleFill onClick={handleleft} className='arrow-left'/>

          {
            images && images.length ?
            images.map((imageItem, index)=>{
              return(
                <img src={imageItem.download_url} alt=""
                 key={imageItem.id}
                  className={ currnetSlide === index ? "current-image" : "current-image hide-current-image"} 
                />
              )
            })
            : null
          }
          <BsArrowRightCircleFill onClick={handleright} className='arrow-right'/>
          <span className="circle-indicators">
          {
            images && images.length ?
            images.map ((_, index)=>{
              return(
                <button key={index} className={currnetSlide ===index ? 
                  "current-indecator" : "current-indecator hide-current-indecator"
                }></button>
              )
            }) :null
          }
          </span>


      </div>
    </div>
  )
}
