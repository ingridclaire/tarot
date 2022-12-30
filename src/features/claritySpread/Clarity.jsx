import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { shuffleDeck, pullCard } from '../deck/deckSlice';
import CardSlot from '../../components/cardSlot/CardSlot';
import styles from './Clarity.module.css';

const Clarity = () => {
  const dispatch = useDispatch();
  const deck = useSelector(state => state.deck);
  const { current, pulled, remaining } = deck;

  const pickCard = () => {
    dispatch(pullCard())
  }
  return (
    <div>
      <h2>Clarity Spread</h2>
      <button disabled={remaining.length > 0} onClick={() => dispatch(shuffleDeck())}>Shuffle Deck</button>
      <button disabled={remaining.length === 0 || pulled.length === 4} onClick={() => dispatch(pullCard())}>Pull Card</button>

      <div className={styles.one_row_spread}>
        {[1,2,3,4].map((_, idx) => <CardSlot card={pulled[idx] ? pulled[idx] : null} cardClass="card-slot" cardId={`card-${idx + 1}`}/>)}
      </div>
    </div>
  )
}

export default Clarity