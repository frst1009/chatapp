import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
    const navigate = useNavigate();
    const change = (path) => {
        navigate(path);
      };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>change('/login')}>Login</Button>
          <Button color="inherit" onClick={()=>change('/signup')}>Sign in</Button>
          <Button color="inherit" onClick={()=>change('/main')}>Main Page</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}