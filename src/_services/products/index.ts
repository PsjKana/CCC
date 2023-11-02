import { fetcher } from '@/_services/global/api';

import { Product } from './types';

import { useQuery } from '@tanstack/react-query';

export const getProducts = async () => {
  const res = await fetcher<{ data: Product[] }>('/mock/products.json');

  return res.data;
};

export const useProducts = () =>
  useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: () => getProducts(),
    keepPreviousData: true,
  });
