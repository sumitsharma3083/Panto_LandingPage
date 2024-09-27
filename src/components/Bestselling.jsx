import React, {useState} from 'react'
import Classes from './Bestselling.module.css'
import {productType} from '../utils/productcat'
import ProductData from '../utils/productData.json'
import ProductCard from './ProductCard'

import Button from './UI/Button'

const Bestselling = () => {
    const [activeProductId, setActiveProductId] = useState(null);
  
    const handleButtonSelect = (productId) => {  
        setActiveProductId(productId);
      };


    

  return (
    <div className={Classes.wrapper}>
        <h1 className={Classes.mainHeading} style={{textAlign:"center", textTransform:"capitalize", fontSize:"25px"}}>Best selling product</h1>
          <div style={{textAlign:"center"}}>
            <div style={{display:"inline-block", background:"#eee", borderRadius:"30px", padding:"5px"}}>
              
                {productType.map(product=>{
                    return (
                        <Button onClick={()=>{handleButtonSelect(product.id)}} key={product.id} style={{borderRadius:"30px", padding:"10px",border:"none", marginRight:"5px",background:`${activeProductId == product.id ? "#fff" : "none"}`, cursor:"pointer"}} >
                           {product.name}
                       </Button>
                    
                    )
                })}
            </div>
          </div>

          <div className={Classes.productWrapper}>
                    {ProductData.map(product=>{
                            return <ProductCard id={product.id} imageUrl={product.imageUrl} price={product.price} type={product.type} name={product.name} rating={product.rating}/>
                    })}
          </div>
    </div>
  )
}

export default Bestselling