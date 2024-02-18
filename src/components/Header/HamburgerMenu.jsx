import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='primary'
        variant='outlined'
        sx={{color: 'white'}}
      >
        <MenuIcon sx={{fontSize: 40}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => history.push('/user')}>Dashboard</MenuItem>
        <MenuItem onClick={() => history.push('/add_set')}>Add Set</MenuItem>
        <MenuItem onClick={() => history.push('/gallery')}>Gallery</MenuItem>
        <MenuItem onClick={() => history.push('/info')}>Info</MenuItem>
        <MenuItem onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</MenuItem>
      </Menu>
    </div>
  );
}