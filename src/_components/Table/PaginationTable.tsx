'use client';

import { useProducts } from '@/_services/products';
import { Product } from '@/_services/products/types';

import { Badge, Paper, Rating, Space, Title } from '@mantine/core';
import { MantineReactTable, MRT_ColumnDef as MRTColumnDef } from 'mantine-react-table';
import { useMemo } from 'react';

export function PaginationTable() {
  const { data, isError, isFetching, isLoading } = useProducts();

  const columns = useMemo<MRTColumnDef<Product>[]>(
    () => [
      {
        accessorKey: 'code',
        header: 'Code',
      },
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'price',
        header: 'Price',
        accessorFn: (row) => `$${row.price?.toFixed(2)}`,
      },
      {
        accessorKey: 'category',
        header: 'Category',
      },
      {
        accessorKey: 'rating',
        header: 'Reviews',
        Cell: ({ cell }) => <Rating defaultValue={cell.getValue<number>()} readOnly />,
      },
      {
        accessorKey: 'inventoryStatus',
        header: 'Status',
        Cell: ({ cell }) => {
          const status = cell.getValue<'INSTOCK' | 'OUTOFSTOCK' | 'LOWSTOCK'>();
          let color: 'red' | 'yellow' | 'green' = 'red';
          if (status === 'INSTOCK') color = 'green';
          else if (status === 'LOWSTOCK') color = 'yellow';
          return <Badge color={color}>{status}</Badge>;
        },
        filterVariant: 'select',
        mantineFilterSelectProps: {
          data: [
            { label: 'In Stock', value: 'INSTOCK' },
            { label: 'Out of Stock', value: 'OUTOFSTOCK' },
            { label: 'Low Stock', value: 'LOWSTOCK' },
          ],
        },
      },
    ],
    [],
  );

  return (
    <Paper withBorder radius='md' p='md' mt='lg'>
      <Title order={5}>Pagination Example</Title>
      <Space h='md' />
      <MantineReactTable
        columns={columns}
        data={data ?? []}
        initialState={{ density: 'md' }}
        enableDensityToggle={false}
        mantinePaperProps={{ shadow: '0', withBorder: false }}
        mantineFilterTextInputProps={{
          sx: { borderBottom: 'unset', marginTop: '8px' },
          variant: 'filled',
        }}
        mantineFilterSelectProps={{
          sx: { borderBottom: 'unset', marginTop: '8px' },
          variant: 'filled',
        }}
        mantineToolbarAlertBannerProps={
          isError
            ? { color: 'error', children: 'Error fetching data' }
            : undefined
        }
        rowCount={data?.length ?? 0}
        state={{
          isLoading,
          showAlertBanner: isError,
          showProgressBars: isFetching,
        }}
      />
    </Paper>
  );
}
