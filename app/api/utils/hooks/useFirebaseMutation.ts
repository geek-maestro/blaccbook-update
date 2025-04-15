// hooks/useFirebaseMutation.ts
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

export const useFirebaseMutation = <TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: UseMutationOptions<TData, Error, TVariables>
) => {
  return useMutation<TData, Error, TVariables>({
    mutationFn,
    ...options,
  });
};
