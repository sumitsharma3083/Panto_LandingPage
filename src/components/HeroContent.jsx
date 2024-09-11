import React from 'react'

const HeroContent = () => {
  return (
    <div>
        <h1 style={{textAlign:"center", fontSize:"60px", color:"#fff", width:"70%", margin:"auto"}}>Make your interior more minimilistic & modern</h1>
        <p style={{textAlign:"center", color:"#aaa", width:"40%", margin:"auto"}}>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
        <div style={{textAlign:"center", marginTop:"20px"}}>
        <input type="text" placeholder='Search your furniture' style={{height:"30px", width:"200px", padding:"10px",borderRadius:"100px",border:"1px solid #ccc", background:"#333", opacity:"0.8", color:"#fff"}}  />
        </div>
    </div>
  )
}

export default HeroContent