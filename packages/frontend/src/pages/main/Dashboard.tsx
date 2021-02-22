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
  const approvals = useRecoilValue(ApprSelector);
  return (
    <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
      <Box
        p="8px"
        bgColor="gray.600"
        borderWidth="1px"
        borderRadius="16px"
        boxShadow="lg"
        textAlign="right"
      >
        <Heading size="lg" fontSize="24px">
          Hello, {me.userName}
        </Heading>
        <Text>{me.group?.groupName || 'None Group.'}</Text>
        <Text>{me.email}</Text>
      </Box>
      <Box>
        <ApprTables />
      </Box>
    </Flex>
  );
};

interface Data {
  name: string;
  age: number;
}

const ApprTables: FC = () => {
  const approvals = useRecoilValue(ApprSelector);
  const data = React.useMemo<Approval[]>(() => approvals, []);
  const columns = React.useMemo<Column<Approval>[]>(
    () => [
      {
        Header: 'Approval Form',
        accessor: 'approvalFormName',
      },
      {
        Header: 'user',
        accessor: (data) => data.user.userName,
      },
      {
        Header: 'status',
        accessor: 'status',
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
  } = useTable<Approval>({ columns, data });

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
