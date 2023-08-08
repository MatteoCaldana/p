import React, { useState } from "react";

import { IconButton, List, ListItem, TextField } from "@mui/material";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const ListForm = ({ name, state, setState, maxLen = 30 }) => {
  const [collapsed, setCollapsed] = useState(true);
  if (collapsed) {
    return (
      <List dense style={{ padding: 0 }}>
        <ListItem style={{ padding: 0 }}>
          <IconButton onClick={() => setCollapsed(false)} size="small">
            <ArrowRightIcon />
          </IconButton>
          <b>{name}:&nbsp;</b>
          <span style={{ fontSize: 13 }}>
            {state.join(',').slice(0, maxLen)}{state.join(', ').length > maxLen ? '...' : ''}
          </span>
        </ListItem>
      </List>
    );
  } else {
    return (
      <List dense style={{ padding: 0 }}>
        <ListItem style={{ padding: 0 }}>
          <IconButton onClick={() => setCollapsed(true)} size="small">
            <ArrowDropDownIcon />
          </IconButton>
          <b>{name}:</b>
        </ListItem>
        {state.map((x, i) => (
          <ListItem style={{ marginLeft: 20 }}>
            <TextField size="small" variant="standard" value={x}
              onChange={e => setState(s => s.map((_, j) => j === i ? e.target.value : _))}
            />
            <IconButton onClick={() => setState(s => s.filter((_, j) => j !== i))} size="small">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
        <ListItem>
          <IconButton onClick={() => setState(s => [...s, ""])} size="small">
            <AddIcon />
          </IconButton>
        </ListItem>
      </List>
    );
  }
}

export default ListForm;