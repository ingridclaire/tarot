import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { shuffleDeck, pullCard } from '../deck/deckSlice';

const Clarity = () => {
  const dispatch = useDispatch();
  const deck = useSelector(state => state.deck);

  const pickCard = () => {
    dispatch(pullCard())
  }
  return (
    <div>
      <h2>Clarity Spread</h2>
      <button onClick={() => dispatch(shuffleDeck())}>Shuffle Deck</button>
      <button onClick={() => dispatch(pullCard())}>Pull Card</button>
      {deck.current && (
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/${deck.current.image}`} alt={deck.current.character}/>
        </div>
      )}
    </div>
  )
}

export default Clarity