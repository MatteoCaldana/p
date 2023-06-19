import React from "react";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultipleSelectCheckmarks = ({ state, setState, list }) => {
  const handleChange = (event) => {
    const { target: { value }, } = event;
    setState(typeof value === 'string' ? value.split(',') : value,);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          multiple
          value={state}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {list.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={state.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}


export default MultipleSelectCheckmarks;