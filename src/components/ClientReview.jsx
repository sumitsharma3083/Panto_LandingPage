import React from 'react'
import styles from './ClientReview.module.css'

const ClientReview = () => {
  return (
     <div className={styles.wrapper}>
            <h1 className={styles.tag}>Testimonials</h1>
            <h1 className={styles.heading}>our client reviews</h1>
            <div className={styles.gridContainer}>
                    <div>
                        Review1
                    </div>
                    <div>
                        Review2
                    </div>
                    <div>
                        Review3
                    </div>
            </div>
     </div>
  )
}

export default ClientReview