import React from 'react'
import styles from './ClientReview.module.css'
import ClientReviewCard from './ClientReviewCard'
import ClientData from '../utils/ClientData.json'


const ClientReview = () => {
  return (
     <div className={styles.wrapper}>
            <h1 className={styles.tag}>Testimonials</h1>
            <h1 className={styles.heading}>our client reviews</h1>
            <div className={styles.gridContainer}>
              {ClientData.map(data=>{
                return  <ClientReviewCard key={data.id} bgImage={data.bgImage} clientImg={data.clientImg} review={data.review} name={data.clientName}/>
              })}
                     
                       
            </div>
     </div>
  )
}

export default ClientReview