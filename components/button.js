import React from 'react';
import Button from '@material-ui/core/Button';

export default function ButtonComp({color, name, onClick}) {
    
  return (
      <Button variant="contained" color={color} onClick={onClick}>
        {name}
      </Button>
  );
}
