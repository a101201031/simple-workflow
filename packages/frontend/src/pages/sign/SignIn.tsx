import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  useToast,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { fetcher } from 'helper';
import React, { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

interface SginInTypes {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string().email('Must be a vaild email.'),
});

export const SignIn: FC = () => {
  const {
    register,
    handleSubmit,
    formState,
    errors,
    setError,
  } = useForm<SginInTypes>({
    resolver: yupResolver(schema),
  });

  const toast = useToast();

  const onSubmit = useCallback(
    async (data: SginInTypes) => {
      try {
        const { accessToken } = await fetcher.post<{ accessToken: string }>({
          path: '/token',
          bodyParams: data,
        });
      } catch (e) {
        setError('email', {});
        setError('password', { shouldFocus: true });
        toast({
          title: 'Failed Sign In',
          description: 'Check Email or Password',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    },
    [setError, toast],
  );

  return (
    <Flex h="calc(100vh - 52px)" align="center" justifyContent="center">
      <Box
        p="32px"
        m="12px"
        minW="340px"
        w="400px"
        borderWidth="1px"
        borderRadius="16px"
        boxShadow="lg"
      >
        <Box textAlign="center" mb="20px">
          <Heading>Sign In</Heading>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input name="email" type="email" autoFocus ref={register} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
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
          </FormControl>

          <Button
            type="submit"
            colorScheme="teal"
            width="full"
            mt="32px"
            isLoading={formState.isSubmitting}
          >
            Sign In !
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
