import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';

import Home from './Home';
import client from './client';
import GlobalStyle from './components/GlobalStyles';

export default () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
