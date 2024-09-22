import React from 'react'
import useFetch from '.'

export default function UseFetchHookTest() {

    const  {data, error, pending} = useFetch(
        "https://dummyjson.com/products",
        {}
    );

  return (
    <div>
        <h2>Use Fetch Hook</h2>
        {
            pending ? <h3>Pending ! Please wait</h3>:null
        }
        {
            data && data.products && data.products.length ?
            data.products.map((productItem)=>{
                return(
                    <p key={productItem.id}>{productItem.title}</p>
                )
            })
            : null
        }
    </div>
  )
}
