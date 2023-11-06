import { useEffect, useState } from "react"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getBooks } from "@/api/getBooks"

export const usePages = (index: number, maxResults: number, itemLength = 0) => {
  const [page, setPage] = useState(1)
  const [isFirstPage, setIsFirstPage] = useState(true)
  const [isLastPage, setIsLastPage] = useState(false)

  useEffect(() => {
    const page = Math.round(index / maxResults) + 1
    setPage(page)
    setIsFirstPage(index === 0)
    setIsLastPage(maxResults > itemLength) // Doesn't work when last page has 10 elements but totalItems from googleAPI is not working for actual pagination
  }, [index, itemLength])

  return { page, isFirstPage, isLastPage }
}

export const useBooks = (query: string, index: number, filter: string) => {
  return useQuery({
    queryKey: ["book", query, index, filter],
    queryFn: async () => getBooks(query, index, filter),
    placeholderData: keepPreviousData,
    enabled: !!query
  })
}
