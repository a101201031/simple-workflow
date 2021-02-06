import React, { FC, useState } from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { fetcher } from 'helper';

interface AccountSignUpTypes {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export const SignUp: FC = () => {
  const [form, setForm] = useState<AccountSignUpTypes>({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    const reqSignUp = {
      path: '/register',
      bodyParams: form,
    };
    await fetcher.post(reqSignUp);
  };

  return (
    <ChakraProvider>
      <Flex w="100vw" h="100vh" align="center" justifyContent="center">
        <Box
          p="32px"
          minW="340px"
          maxW="500px"
          borderWidth="1px"
          borderRadius="32px"
          boxShadow="lg"
        >
          <Box textAlign="center" mb="20px">
            <Heading>Sign Up</Heading>
          </Box>
          <form onSubmit={handleSubmit}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="example@aaa.com"
                autoFocus
                isInvalid={false}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="username" mt="24px" isRequired>
              <FormLabel>Username</FormLabel>
              <Input name="username" type="name" onChange={handleChange} />
            </FormControl>
            <FormControl id="password" mt="24px" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="********"
                onChange={handleChange}
              />
              <FormHelperText>
                Make sure it's at least 15 characters OR at least 8 characters
                including a number and a lowercase letter.
              </FormHelperText>
            </FormControl>
            <FormControl id="confirmPassword" mt="24px" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                name="confirmPassword"
                type="password"
                placeholder="********"
                onChange={handleChange}
              />
            </FormControl>
            <Button w="full" mt="24px" colorScheme="green" type="submit">
              Create Account!
            </Button>
          </form>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
