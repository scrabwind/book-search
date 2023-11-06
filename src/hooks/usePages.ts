import { useEffect, useState } from "react"

export const usePages = (index: number, maxResults: number, itemLength = 0) => {
  const [page, setPage] = useState(1)
  const [isFirstPage, setIsFirstPage] = useState(true)
  const [isLastPage, setIsLastPage] = useState(false)

  useEffect(() => {
    const nextPage = Math.round(index / maxResults) + 1
    setPage(nextPage)
    setIsFirstPage(index === 0)
    setIsLastPage(maxResults > itemLength) // Doesn't work when last page has 10 elements but totalItems from googleAPI is not working for actual pagination
  }, [index, itemLength, maxResults])

  return { page, isFirstPage, isLastPage }
}
