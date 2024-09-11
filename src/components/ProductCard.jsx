import React from 'react'

const ProductCard = ({...rest}) => {
      const {id,price,name,imageUrl,rating, type} = rest
  return (
    <div style={{backgroundColor:"#fff", borderRadius:"10px"}}>
               <img src="" alt="Myimg" style={{width:"100%", height:"400px"}} />
               <div>
                  <span>{type}</span>
                  <p>{name}</p>
                  <span>{price}</span>
               </div>
    </div>
  )
}

export default ProductCard