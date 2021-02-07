import React, { FC } from 'react';
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
  FormErrorMessage,
} from '@chakra-ui/react';
import { fetcher } from 'helper';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

interface AccountSignUpTypes {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const schema = Yup.object().shape({
  email: Yup.string().email(),
  username: Yup.string()
    .min(3)
    .max(20)
    .matches(
      /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
      'Need characters including only a number and a lower/upper letter.',
    ),
  password: Yup.string()
    .min(8, 'Minimum password length to 8 characters.')
    .max(15, 'Maximum password length to 15 characters.')
    .matches(
      /(?=.*?[0-9])(?=.*?[a-zA-Z])*/,
      'Need characters including a number and a lower/upper letter.',
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

export const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState,
    errors,
  } = useForm<AccountSignUpTypes>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: AccountSignUpTypes) => {
    const reqSignUp = {
      path: '/register',
      bodyParams: data,
    };
    console.log(reqSignUp);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isRequired isInvalid={!!errors.email}>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="example@aaa.com"
                autoFocus
                ref={register}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt="24px" isRequired isInvalid={!!errors.username}>
              <FormLabel>Username</FormLabel>
              <Input name="username" type="name" ref={register} />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt="24px" isRequired isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="********"
                ref={register}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              <FormHelperText>
                Make sure it's at least 8 characters including a number and a
                lowercase letter.
              </FormHelperText>
            </FormControl>

            <FormControl
              mt="24px"
              isRequired
              isInvalid={!!errors.confirmPassword}
            >
              <FormLabel>Confirm Password</FormLabel>
              <Input
                name="confirmPassword"
                type="password"
                placeholder="********"
                ref={register}
              />
              <FormErrorMessage>
                {errors.confirmPassword?.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              w="full"
              mt="24px"
              colorScheme="green"
              type="submit"
              isLoading={formState.isSubmitting}
            >
              Create Account!
            </Button>
          </form>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
