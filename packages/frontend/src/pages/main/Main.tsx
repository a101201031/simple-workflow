import { Box, Flex, Skeleton, Spinner, Text } from '@chakra-ui/react';
import { fetcher } from 'helper';
import React, { FC, Suspense, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MeAtom, MeSelector } from 'stores';

export const Main: FC = () => {
  const { push } = useHistory();

  if (localStorage.getItem('accessToken') !== '123123123123') {
    push('/');
  }
  // const [me, setMe] = useRecoilState(MeAtom);
  // const me = useRecoilValue(MeSelector);

  return (
    <Box bgColor="gray.700" h="100vh" w="320px">
      <Box h="80px" p="8px" textAlign="right" justifyContent="center">
        <Suspense fallback={<Skeleton h="100%" />}>
          <MyInfo></MyInfo>
        </Suspense>
      </Box>
      <Flex flexDirection="column"></Flex>
    </Box>
  );
};

const MyInfo: FC = () => {
  const me = useRecoilValue(MeSelector);

  return (
    <>
      <Text>{me.groupName || 'None Group.'}</Text>
      <Text>{me.userName}</Text>
    </>
  );
};
