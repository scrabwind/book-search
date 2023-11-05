import { useEffect, useState } from "react"
import { useQuery, keepPreviousData } from "@tanstack/react-query"
import axios from "axios"
import { InputForm } from "@/components/InputForm"
import { type BooksResponse } from "@/types/response"
import { CardComponent } from "@/components/Card"
import { Button } from "@/components/ui/button"

const getBooks = async (
  query: string,
  index: number,
  filter: string,
  orderBy: string
) => {
  const { data } = await axios.get<BooksResponse>(
    "https://www.googleapis.com/books/v1/volumes",
    {
      params: {
        q: `${query}`,
        key: "AIzaSyCSnC9lKxYGJfyzU9a6istxkrUNBkuf87s",
        maxResults: 10,
        orderBy: orderBy,
        filter: filter,
        startIndex: index
      }
    }
  )

  return data
}

const useBooks = (
  query: string,
  index: number,
  filter: string,
  orderBy: string
) => {
  return useQuery({
    queryKey: ["book", query, index, filter, orderBy],
    queryFn: async () => getBooks(query, index, filter, orderBy),
    placeholderData: keepPreviousData
    // enabled: !!query
  })
}

const App = () => {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("")
  const [orderBy, setOrderBy] = useState("")
  const [index, setIndex] = useState(0)
  const [page, setPage] = useState(1)

  const { data } = useBooks(query, index, filter, orderBy)

  useEffect(() => {
    const page = Math.round(index / 10) + 1
    setPage(page)
  }, [index])

  return (
    <div className="h-full p-8 relative">
      <div className="flex gap-8">
        <InputForm
          onSubmit={({ query, filter, orderBy }) => {
            setQuery(query)
            setFilter(filter)
            setOrderBy(orderBy)
          }}
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data?.items?.map((item) =>
          item ? (
            <CardComponent
              key={item.id}
              item={item}
            />
          ) : null
        )}
      </div>
      <div className="absolute bottom-0 my-8 flex justify-center items-center gap-4">
        <Button
          disabled={index === 0}
          onClick={() => (index === 0 ? null : setIndex(index - 10))}
        >
          Previous
        </Button>
        <Button onClick={() => setIndex(index + 10)}>Next</Button>
        <p>Current Page: {page}</p>
      </div>
    </div>
  )
}

export default App
