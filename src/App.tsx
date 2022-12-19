import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppStyled from './shared/components/AppStyled';
import theme from './shared/themes/theme';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyled mode="light">
        <AppRoutes />
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
