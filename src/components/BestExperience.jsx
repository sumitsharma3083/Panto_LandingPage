import React from 'react';
import styles from './BestExp.module.css'



const ImageContentGrid = () => {
    return (
        <div className={styles.wrapper}>
               <div className={styles.gridContainer}>
                    <div className={styles.imageWrapper}>
                    <img src="https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg" alt="Image" className={styles.image} />
                    </div>
                    <div className={styles.contentWrapper}>
                    <p className={styles.tag}>EXPERIENCES</p>
                    <h2 className={styles.heading}>We provide you the best experience</h2>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in ea sint optio velit quibusdam harum iste numquam, odit nemo quos molestiae recusandae dolore exercitationem nam esse architecto quia consectetur.</p>
                    </div>
                </div>
        </div>
     
    );
  };
  
  export default ImageContentGrid;