import { Flex } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';

export const SideContents = chakra(Flex, {
  baseStyle: {
    px: '16px',
    py: '0px',
    h: '40px',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
