import React, { useEffect, useState } from 'react'
import './load-more-data.css'
export default function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const[products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null);
    const [disablebutton, setDisablebutton]= useState(false);

    async function fetchProducts(){
        try{
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
                count ===0 ? 0 : count *20
            }`)

            const result = await response.json();

            if(result && result.products && result.products.length){
                setProducts((prevData)=> [...prevData, ...result.products]);
                setLoading(false);
            }
        }catch(e){
            setError(e.message);
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[count])

    useEffect(()=>{
        if(products.length === 100)setDisablebutton(true)
    },[products])

    if(loading){
        return <div>Loading data ! Please wait....</div>
    }

  return (
    <div className='load-more-container'>
        <div className='product-container'>
            {  products && products.length 
             ?  products.map((item, index)=>{
                return(
                    <div key={index} className='product'>
                        <img src={item.thumbnail} alt="" />
                       <p>{item.title}</p>
                       <p>{item.price}</p>

                
                    </div>
                )
                
              })
                :null 
            }
        </div>
        <div className='button-container'>
            <button hidden={disablebutton} onClick={()=>setCount(count+1)}>Load More Products</button>
        </div>
    </div>
  )
}
