import React from 'react'

const ProductCard = ({...rest}) => {
      const {id,price,name,imageUrl,rating, type} = rest
  return (
    <div style={{backgroundColor:"#fff", borderRadius:"20px"}}>
               <img src={imageUrl} alt="Myimg" style={{width:"100%", height:"200px", borderTopLeftRadius:"20px", borderTopRightRadius:"20px"}} />
               <div style={{padding:"10px"}} >
                  <span style={{color: "#aaa", fontWeight:"400"}}>{type}</span>
                  <p style={{color: "#000", fontWeight:"400"}}>{name}</p>
                  <span  style={{paddingTop:"20px", display:"inline-block", fontWeight:"400"}}>${price}</span>
                  {/* TODO: RATING AND ADD REMAINING */}
               </div>
    </div>
  )
}

export default ProductCard