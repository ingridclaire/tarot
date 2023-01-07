import React from 'react'
import styles from './SpreadSelector.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSelection, clearSelection } from './spreadSelectorSlice';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SpreadSelector = () => {
  const dispatch = useDispatch();
  const spread = useSelector(state => state.spreadSelector)

  const handleChange = (e) => dispatch(setSelection(e.target.value))

  return (
    <div className={styles.spread}>
      <FormControl fullWidth>
        <InputLabel sx={{color: 'black'}} id="demo-simple-select-label">Card Spread</InputLabel>
        <Select
        sx={{backgroundColor: 'rgba(230, 0, 115, 0.8)', borderRadius: '15px', fontSize: '22px'}}
          labelId="spread-select-label"
          id="spread-select"
          value={spread.current}
          label="Card Spread"
          onChange={handleChange}
        >
          {spread.options.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SpreadSelector