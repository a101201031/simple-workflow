import {
  Box,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Approval } from 'models';
import React, { FC } from 'react';
import { Column, useTable } from 'react-table';
import { useRecoilValue } from 'recoil';
import { ApprSelector, MeSelector } from 'stores';

export const Dashboard: FC = () => {
  const me = useRecoilValue(MeSelector);

  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >
      <Flex
        w="320px"
        h="240px"
        p="16px"
        bgColor="gray.800"
        borderWidth="1px"
        borderRadius="16px"
        boxShadow="lg"
      >
        <Box w="64px" h="64px" bgColor="red">
          IMG
        </Box>
        <Box textAlign="right">
          <Heading fontSize="24px">Hello, {me.userName}</Heading>
          <Text>{me.group?.groupName || 'None Group.'}</Text>
          <Text>{me.email}</Text>
          <Text fontWeight="bold">Edit Profile</Text>
        </Box>
      </Flex>

      <Box
        w="60%"
        h="30%"
        p="8px"
        bgColor="gray.800"
        borderWidth="1px"
        borderRadius="16px"
        boxShadow="lg"
      >
        <ApprTables />
      </Box>
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
