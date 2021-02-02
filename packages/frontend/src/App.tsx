import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  ChakraProvider,
  Container,
  Flex,
  Spacer,
} from '@chakra-ui/react';

export const App = () => {
  return (
    <ChakraProvider>
      <Flex mh="64px" mt="auto" bg="gray.700" p="3" alignItems="center">
        <Box p="2" bg="red.400">
          LOGO
        </Box>
        <Spacer />
        <Box>
          <ButtonGroup colorScheme="gray">
            <Button variant="link" m="0px 15px">
              Sign in
            </Button>
            <Button variant="outline" m="0px 15px">
              Sign on
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
      <Container></Container>
    </ChakraProvider>
  );
};
