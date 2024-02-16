import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function FloatingAddBtn() {
  const history = useHistory()
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" onClick={() => history.push('/add_set')}>
        <AddIcon />
      </Fab>
    </Box>
  );
}