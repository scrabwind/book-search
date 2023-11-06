import { useEffect, useState } from "react"
import { useQuery, keepPreviousData } from "@tanstack/react-query"
import axios from "axios"
import { InputForm } from "@/components/InputForm"
import { type BooksResponse } from "@/types/response"
import { CardComponent } from "@/components/Card"
import { Button } from "@/components/ui/button"
import { AlertComponent } from "@/components/AlertComponent"

const getBooks = async (query: string, index: number, filter: string) => {
  const { data } = await axios.get<BooksResponse>(
    "https://www.googleapis.com/books/v1/volumes",
    {
      params: {
        q: `${query}`,
        key: "AIzaSyCSnC9lKxYGJfyzU9a6istxkrUNBkuf87s",
        maxResults: 10,
        filter: filter,
        startIndex: index
      }
    }
  )

  return data
}

const useBooks = (query: string, index: number, filter: string) => {
  return useQuery({
    queryKey: ["book", query, index, filter],
    queryFn: async () => getBooks(query, index, filter),
    placeholderData: keepPreviousData,
    enabled: !!query
  })
}

const usePages = (index: number, maxResults: number, itemLength = 0) => {
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

const App = () => {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("")
  const [index, setIndex] = useState(0)
  const [maxResults, _setMaxResults] = useState(10)

  const { data, isLoading, isPending, isFetching, isError } = useBooks(
    query,
    index,
    filter
  )

  const { page, isFirstPage, isLastPage } = usePages(
    index,
    maxResults,
    data?.items?.length
  )

  return (
    <div className="h-full p-8 relative">
      <div className="flex gap-8">
        <InputForm
          onSubmit={({ query, filter }) => {
            setQuery(query)
            setFilter(filter)
            setIndex(0)
          }}
        />
      </div>
      {
        <div className="grid grid-cols-5 gap-4">
          {isError ? (
            <AlertComponent
              variant="destructive"
              title="There was an error getting response from server"
              description="Try again later"
            />
          ) : data ? (
            data.items?.map((item) => (
              <CardComponent
                key={item.id}
                item={item?.volumeInfo}
              />
            )) ? (
              data.totalItems === 0
            ) : (
              <AlertComponent
                variant="default"
                title="There were no results"
                description="Try searching up something different"
              />
            )
          ) : (
            <AlertComponent
              variant="default"
              title="Search for the books"
              description="You can also use filters!"
            />
          )}
        </div>
      }
      <div className="absolute bottom-0 mb-8 flex justify-center items-center gap-4">
        <Button
          disabled={isFirstPage || isLoading || isPending || isFetching}
          onClick={() => (index === 0 ? null : setIndex(index - maxResults))}
        >
          Previous
        </Button>
        <Button
          disabled={isLastPage || isLoading || isPending || isFetching}
          onClick={() => setIndex(index + maxResults)}
        >
          Next
        </Button>
        <p>Current Page: {page}</p>
      </div>
    </div>
  )
}

export default App
