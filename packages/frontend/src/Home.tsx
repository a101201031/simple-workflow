import React, { FC } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  ChakraProvider,
  Container,
  Flex,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from 'ColorModeSwitcher';

export const Home: FC = () => {
  return (
    <ChakraProvider>
      <Flex mh="64px" p="3" alignItems="center">
        <Box p="2" bg="red.400">
          LOGO
        </Box>
        <Spacer />
        <Box>
          <ButtonGroup colorScheme="withe" alignItems="center">
            <Link to="/">
              <Button variant="link">Sign in</Button>
            </Link>
            <Spacer w="1em"></Spacer>
            <Link to="/sign-up">
              <Button variant="outline">Sign up</Button>
            </Link>
            <ColorModeSwitcher />
          </ButtonGroup>
        </Box>
      </Flex>
      <Flex alignItems="center" h="calc(100vh - 64px)">
        <Container>
          <Box>
            <Stack spacing="1em">
              <Text fontSize="48px" fontWeight="bold" textAlign="center">
                Simple Workflow
              </Text>
              <Text>
                test: "The quick brown fox jumps over the lazy dog" is an
                English-language pangram—a sentence that contains all of the
                letters of the English alphabet. Owing to its existence, Chakra
                was created. 1.
              </Text>
            </Stack>
          </Box>
        </Container>
        <Box h="500px" w="500px" bg="gray.900" m="0 50px">
          Example Image
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
