import React from 'react'
import styles from './CardSlot.module.css';

const CardSlot = ({ card, cardClass, cardId }) => {
  return (
    <div id={cardId} className={styles[cardClass]}>
   {card && <img
      src={`${process.env.PUBLIC_URL}/images/${card.image}`}
      alt={card.character}
    />}
  </div>
  )
}

export default CardSlot