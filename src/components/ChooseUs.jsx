import React from 'react'
import Classes from './Chooseus.module.css'


const ChooseUs = () => {
  return (
    <div className={Classes.wrapper}>
        <div className={Classes.item1}>
            <h1 style={{width:"80%"}}>Why Choosing us</h1>
        </div>
        <div className={Classes.item2}>
             <h2 style={{fontSize:"20px", marginBottom:"10px"}}>Luxury Facilities</h2>
             <p style={{fontSize:"13px", lineHeight:"25px"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, soluta aut provident ad corporis blanditiis possimus praesentium facere eaque perspiciatis.
             </p>
             <a href="#" className={Classes.infoLink}>More info</a>
        </div>
        <div className={Classes.item3}>
            <h2 style={{fontSize:"20px", marginBottom:"10px"}}>Affordable price</h2>
            <p style={{fontSize:"13px", lineHeight:"25px"}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, soluta aut provident ad corporis blanditiis possimus praesentium facere eaque perspiciatis.
            </p>
            <a href="#" className={Classes.infoLink}>More info</a>
        </div>
        <div className={Classes.item4}>
            <h2 style={{fontSize:"20px", marginBottom:"10px"}}>Many choices</h2>
            <p style={{fontSize:"13px", lineHeight:"25px"}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, soluta aut provident ad corporis blanditiis possimus praesentium facere eaque perspiciatis.
            </p>
            <a href="#" className={Classes.infoLink}>More info</a>
        </div>
    </div>
  )
}

export default ChooseUs