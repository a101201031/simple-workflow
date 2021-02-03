import React, { FC } from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export const SignUp: FC = () => {
  return (
    <ChakraProvider>
      <Flex w="100vw" h="100vh" align="center" justifyContent="center">
        <Box p="4px"></Box>
        <Box
          p="32px"
          minW="340px"
          maxW="500px"
          borderWidth={1}
          borderRadius="32px"
          boxShadow="lg"
        >
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="example@aaa.com" />
          </FormControl>
          <FormControl mt={6} isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="*******" />
            <FormHelperText>
              Make sure it's at least 15 characters OR at least 8 characters
              including a number and a lowercase letter.
            </FormHelperText>
          </FormControl>
          <FormControl mt={6} isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" placeholder="*******" />
          </FormControl>
          <Button w="full" mt={6} colorScheme="green" type="submit">
            Create Account!
          </Button>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
