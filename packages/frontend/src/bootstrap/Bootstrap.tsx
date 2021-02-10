import { ChakraProvider } from '@chakra-ui/react';
import { App } from 'App';
import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { theme } from 'theme';

export const Bootstrap: FC = () => (
  <RecoilRoot>
    <ChakraProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </RecoilRoot>
);
