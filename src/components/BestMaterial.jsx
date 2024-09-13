import React from 'react';
import styles from './BestMaterial.module.css'



const ImageContentGrid = () => {
    return (
        <div className={styles.wrapper}>
               <div className={styles.gridContainer}>
                    <div className={styles.contentWrapper}>
                            <p className={styles.tag}>materials</p>
                            <h2 className={styles.heading}>Very serious materials for making furniture</h2>
                            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in ea sint optio velit quibusdam harum iste numquam, odit nemo quos molestiae recusandae dolore exercitationem nam esse architecto quia consectetur.</p>
                    </div>

                    <div className={styles.imageWrapper}>
                      <img src="https://via.placeholder.com/150" alt="Image" className={styles.image} />
                    </div>
                </div>
        </div>
     
    );
  };
  
  export default ImageContentGrid;