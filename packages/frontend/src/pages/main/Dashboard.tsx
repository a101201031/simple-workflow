import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Spacer,
  StackDivider,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { Approval } from 'models';
import React, { FC } from 'react';
import { Column, useTable } from 'react-table';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ApprSelector, MeSelector, NotiAtom } from 'stores';
import { MdClose } from 'react-icons/md';

export const Dashboard: FC = () => {
  const me = useRecoilValue(MeSelector);

  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent="space-around"
      alignContent="space-around"
      flexWrap="wrap"
    >
      <Flex w="80%" h="45%" justifyContent="space-between">
        <Flex
          w="50%"
          h="100%"
          p="16px"
          bgColor="gray.800"
          borderWidth="1px"
          borderRadius="16px"
          boxShadow="lg"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box w="256px" h="256px" bgColor="red">
            IMG
          </Box>
          <Flex flexDir="column" textAlign="right">
            <Box>
              <Heading fontSize="24px">Hello, {me.userName}</Heading>
            </Box>
            <Spacer />
            <Text>{me.group?.groupName || 'None Group.'}</Text>
            <Text>{me.email}</Text>
            <Text fontWeight="bold">Edit Profile</Text>
          </Flex>
        </Flex>

        <Box
          w="40%"
          h="100%"
          p="16px"
          bgColor="gray.800"
          borderWidth="1px"
          borderRadius="16px"
          boxShadow="lg"
        >
          <Heading m="8px">Notication</Heading>
          <Noti />
        </Box>
      </Flex>

      <Box
        w="80%"
        h="50%"
        p="16px"
        bgColor="gray.800"
        borderWidth="1px"
        borderRadius="16px"
        boxShadow="lg"
      >
        <Heading m="8px">My Request</Heading>
        <ApprTables />
      </Box>
    </Flex>
  );
};

const Noti: FC = () => {
  const [notis, setNotis] = useRecoilState(NotiAtom);

  const handleClick = (id: number) => {
    setNotis(notis.filter((noti) => noti.id !== id));
  };
  return (
    <Flex>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing="16px"
        align="stretch"
        w="100%"
        maxW="100%"
      >
        {notis.map((val, idx) => (
          <Flex
            bgColor="gray.700"
            justifyContent="space-between"
            alignItems="center"
            key={idx + 1}
          >
            <LinkBox p="4px" maxW="90%" rounded="md">
              <LinkOverlay href={`${val.notiUrl}`}>
                <Text isTruncated={true}>{val.notiMessage}</Text>
              </LinkOverlay>
            </LinkBox>
            <Box
              cursor="pointer"
              onClick={(e) => {
                handleClick(val.id);
              }}
            >
              <MdClose />
            </Box>
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
};

const ApprTables: FC = () => {
  const approvals = useRecoilValue(ApprSelector);

  const columns = React.useMemo<Column<Approval>[]>(
    () => [
      {
        Header: 'approval form',
        accessor: 'approvalFormName',
      },
      {
        Header: 'step',
        accessor: (data) => {
          const a = data.approver.find((val) => val.status === 'PENDING');
          return `${a?.step || 'error'}`;
        },
      },
      {
        Header: 'approver',
        accessor: (data) => {
          const a = data.approver.find((val) => val.status === 'PENDING');
          return `${a?.userName || 'error'}`;
        },
      },
      {
        Header: 'status',
        accessor: 'status',
      },
      {
        Header: 'request date',
        accessor: 'insertDate',
      },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<Approval>({ columns, data: approvals });

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>;
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
