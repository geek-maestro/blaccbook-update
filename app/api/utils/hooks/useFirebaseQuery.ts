import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export const useFirebaseQuery = <T>(
  key: string[],
  queryFn: () => Promise<T>,
  options?: Partial<UseQueryOptions<T>>
) => {
  return useQuery<T>({
    queryKey: key,
    queryFn,
    ...options,
  });
};
