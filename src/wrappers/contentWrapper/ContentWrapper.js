import React from 'react'
import styles from './ContentWrapper.module.css';

const ContentWrapper = ({children}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tarot Reads</h1>
      {children}
    </div>
  )
}

export default ContentWrapper