import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonDefault, DisplayCentered, Input, PasswordIpt } from '../shared/components';

export const Cadastro: React.FC = () => {
  return (
    <DisplayCentered>
      <Input label="Nome"></Input>
      <Input label="Email"></Input>
      <PasswordIpt label="Senha"></PasswordIpt>
      <PasswordIpt label="Repita a senha"></PasswordIpt>
      <br />
      <ButtonDefault name="Cadastrar"></ButtonDefault>
      <br />
      <Typography variant="subtitle1">Já possui uma conta?</Typography>
      <Link to={'/'}>Fazer Login.</Link>
    </DisplayCentered>
  );
};
