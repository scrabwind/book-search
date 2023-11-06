import { getBooks } from "@/api/getBooks"
import { keepPreviousData, useQuery } from "@tanstack/react-query"

export const useBooks = (query: string, index: number, filter: string) => {
  return useQuery({
    queryKey: ["book", query, index, filter],
    queryFn: async () => getBooks(query, index, filter),
    placeholderData: keepPreviousData,
    enabled: !!query
  })
}
