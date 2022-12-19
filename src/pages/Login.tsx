import { Button, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { DisplayCentered, PasswordIpt, CheckSession } from '../shared/components';

export const Login: React.FC = () => {
  let usersStorage: = localStorage.getItem('usersStorage');
  if(usersStorage === null){
    usersStorage = []
  }

  const emailInput = useRef();
  const passwordInput = useRef();

  const myFunction = () => {
    console.log(emailInput);
    console.log(passwordInput);
    console.log(usersStorage);
  };

  return (
    <DisplayCentered>
      <TextField label="Email" inputRef={emailInput} variant="standard" sx={{ width: '30ch' }}></TextField>
      <PasswordIpt label="Senha" inputRef={passwordInput}></PasswordIpt>
      <CheckSession label="Permanecer Conectado"></CheckSession>
      <br />
      <Button onClick={myFunction}>Entrar</Button>
      <br />
      <Typography variant="subtitle1">Ainda não tem uma conta?</Typography>
      <Link to={'/cadastro'}>Cadastre-se.</Link>
    </DisplayCentered>
  );
};
