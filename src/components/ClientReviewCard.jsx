import React from 'react'
import styles from './ClientReviewCard.module.css'

const ClientReviewCard = (props) => {
  return (
    <div key={props.key} className={styles.cardWrapper}>
         <img src={props.bgImage} alt="bg-image" className={styles.bgImg} />
           <div className={styles.dataContaier}>
                <img src={props.clientImg} alt="" className={styles.profilePic} />
                <p className={styles.clientName}>{props.name}</p>
                <p className={styles.clientReview}>
                    {props.review}
                </p>
                {/* <p> TODO: RATING  </p> */}
            </div>   
    </div> 
  )
}

export default ClientReviewCard