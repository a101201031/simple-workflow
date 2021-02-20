import { chakra, Flex } from '@chakra-ui/react';

export const SideContents = chakra(Flex, {
  baseStyle: {
    px: '16px',
    py: '0px',
    h: '40px',
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor: 'pointer',
  },
});

export const SideChild = chakra(Flex, {
  baseStyle: {
    pl: '32px',
    pr: '16px',
    py: '0px',
    h: '40px',
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor: 'pointer',
  },
});
