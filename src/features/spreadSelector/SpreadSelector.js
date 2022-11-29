import React from 'react'
import styles from './SpreadSelector.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSelection, clearSelection, selectCurrentSpread, selectSpreadOptions } from './spreadSelectorSlice';

const SpreadSelector = () => {
  const dispatch = useDispatch();
  const currentSpread = useSelector(selectCurrentSpread)
  const options = useSelector(selectSpreadOptions)

  const handleChange = (e) => dispatch(setSelection(e.target.value))
  
  return (
    <div>
      <select onChange={handleChange}>
        <option value={null}>Choose your spread</option>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  )
}

export default SpreadSelector