import React from 'react'
import Classes from './Navigation.module.css'
import bagImg from '../assets/bag.png'


const Navigation = () => {
  return (
    <div className={Classes.navigation}>
          
            <h1 style={{fontSize:"24px", display:"inline-block", paddingLeft:"20px"}}>Panto</h1>
              <div style={{textAlign:"center", width:"100%"}}>
              <ul className={Classes.navList}>
                <li className={Classes.linkitem}>
                  <a href="#" className={Classes.link}>
                  Furniture
                  </a>
                </li>
                <li className={Classes.linkitem}>
                   <a href="#" className={Classes.link}>
                    Shop
                  </a>
                </li>
                <li className={Classes.linkitem}>
                   <a href="#" className={Classes.link}>
                    About us
                  </a>
                </li>
                <li  className={Classes.linkitem}>
                   <a href="#" className={Classes.link}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div style={{paddingRight:"20px"}}>
              <img src={bagImg} alt="Cart-bag" style={{height:"32px", width:"32px"}} />
            </div>
    </div>
  )
}

export default Navigation