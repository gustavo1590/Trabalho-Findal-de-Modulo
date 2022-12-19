import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({ label }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label={label} variant="standard" />
    </Box>
  );
};

export default Input;
