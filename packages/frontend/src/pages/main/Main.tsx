import { Box, Flex, Skeleton, Spacer, Text } from '@chakra-ui/react';
import React, { FC, Suspense } from 'react';
import { useHistory } from 'react-router-dom';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { MeSelector } from 'stores';
import { SideChild, SideContents } from 'styles';
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdSubdirectoryArrowRight,
} from 'react-icons/md';

interface MenuActiveTypes {
  active: 'appr' | undefined;
}

const MenuActiveAtom = atom<MenuActiveTypes>({
  key: 'MenuActiveAtom',
  default: { active: 'appr' },
});

export const Main: FC = () => {
  const { push } = useHistory();

  if (localStorage.getItem('accessToken') !== '123123123123') {
    push('/');
  }
  const [activeMenu, setActiveMenu] = useRecoilState(MenuActiveAtom);
  const apprClick = (e: React.MouseEvent) => {
    setActiveMenu({ active: activeMenu.active ? undefined : 'appr' });
  };

  return (
    <Box bgColor="gray.700" h="100vh" w="240px">
      <Flex
        h="80px"
        p="8px"
        border="1px solid"
        borderColor="gray.600"
        textAlign="right"
        alignItems="center"
      >
        <Suspense fallback={<Skeleton w="100%" h="100%" />}>
          <MyInfo></MyInfo>
        </Suspense>
      </Flex>
      <Flex
        flexDir="column"
        justifyContent="space-around"
        alignContent="space-around"
      >
        <SideContents>
          <MdKeyboardArrowRight />
          <Box w="150px">
            <Text isTruncated>Main Page</Text>
          </Box>
          <Spacer />
        </SideContents>
        <SideContents onClick={apprClick}>
          {activeMenu.active ? (
            <MdKeyboardArrowDown />
          ) : (
            <MdKeyboardArrowRight />
          )}
          <Box w="150px">
            <Text isTruncated>Appr. Management</Text>
          </Box>
          <Spacer />
        </SideContents>
        <SideChild>
          <MdSubdirectoryArrowRight />
          <Box w="150px">
            <Text isTruncated>Request for Appr.</Text>
          </Box>
          <Spacer />
        </SideChild>
        <SideChild>
          <MdSubdirectoryArrowRight />
          <Box w="150px">
            <Text isTruncated>Apprroval</Text>
          </Box>
          <Spacer />
        </SideChild>
        <SideChild>
          <MdSubdirectoryArrowRight />
          <Box w="150px">
            <Text isTruncated>Appr. history</Text>
          </Box>
          <Spacer />
        </SideChild>
        <SideContents>
          <MdKeyboardArrowRight />
          <Box w="150px">
            <Text isTruncated>Organization Chart</Text>
          </Box>
          <Spacer />
        </SideContents>
      </Flex>
    </Box>
  );
};

const MyInfo: FC = () => {
  const me = useRecoilValue(MeSelector);
  return (
    <Box h="100%" w="100%">
      <Text>{me.group?.groupName || 'None Group.'}</Text>
      <Text fontWeight="bold">{me.userName}</Text>
    </Box>
  );
};
