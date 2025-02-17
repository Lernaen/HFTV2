import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getAllJobs } from '../apis/jobs'

export function useJobs() {
  const query = useQuery({ queryKey: ['jobs'], queryFn: getAllJobs })
  return {
    ...query,
  }
}

export function useJobsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
    },
  })

  return mutation
}
