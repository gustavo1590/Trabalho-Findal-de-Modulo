import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface ButtonDefaultProps {
  name: string;
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({ name }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined">{name}</Button>
    </Stack>
  );
};

export default ButtonDefault;
