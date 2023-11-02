'use client';

import { Paper, Space, Title } from '@mantine/core';
import { MantineReactTable, MRT_ColumnDef as MRTColumnDef } from 'mantine-react-table';
import { useMemo } from 'react';

type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
  country: string;
};

// nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    name: {
      firstName: 'Sea-Jong',
      lastName: 'Park',
    },
    address: 'Straße 123',
    city: 'Stadt 123',
    state: 'Schleswig-Holstein',
    country: 'Germany',
  },
  {
    name: {
      firstName: 'Alexander',
      lastName: 'Rahlf',
    },
    address: 'Straße 234',
    city: 'Stadt 234',
    state: 'Hamburg',
    country: 'Germany',
  },
  {
    name: {
      firstName: 'Jan',
      lastName: 'Wollschläger',
    },
    address: 'Straße 345',
    city: 'Stadt 345',
    state: 'Leipzig',
    country: 'Germany',
  },
  {
    name: {
      firstName: 'Tobias',
      lastName: 'Demmig',
    },
    address: 'Straße 456',
    city: 'Stadt 456',
    state: 'Hamburg',
    country: 'Germany',
  },
  {
    name: {
      firstName: 'Tobias',
      lastName: 'Wagner',
    },
    address: 'Straße 567',
    city: 'Stadt 567',
    state: 'Hamburg',
    country: 'Germany',
  },
];

export const SimpleTable = () => {
  // should be memoized or stable
  const columns = useMemo<MRTColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name.firstName', // access nested data with dot notation
        header: 'First Name',
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address', // normal accessorKey
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    [],
  );

  return (
    <Paper withBorder radius='md' p='md'>
      <Title order={5}>Simple Table</Title>
      <Space h='md' />
      <MantineReactTable
        columns={columns}
        data={data}
        mantinePaperProps={{ shadow: '0', withBorder: false }}
      />
    </Paper>
  );
};
