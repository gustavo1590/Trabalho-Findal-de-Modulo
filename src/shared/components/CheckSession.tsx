import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

interface CheckSessionProps {
  label: string;
}

const CheckSession: React.FC<CheckSessionProps> = ({ label }) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label={label} />
    </FormGroup>
  );
};

export default CheckSession;
