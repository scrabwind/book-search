import { useEffect, useState } from "react"
import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData
} from "@tanstack/react-query"
import axios from "axios"
import { InputForm } from "@/components/InputForm"
import { type BooksResponse } from "@/types/response"
import { CardComponent } from "@/components/Card"
import { Button } from "@/components/ui/button"

const getBooks = async (query: string, index: number) => {
  const { data } = await axios.get<BooksResponse>(
    "https://www.googleapis.com/books/v1/volumes",
    {
      params: {
        q: `${query}`,
        key: "AIzaSyCSnC9lKxYGJfyzU9a6istxkrUNBkuf87s",
        maxResults: 10,
        orderBy: "relevance",
        startIndex: index
      }
    }
  )

  return data
}

const useBooks = (query: string, index: number) => {
  return useQuery({
    queryKey: ["book", query, index],
    queryFn: async () => getBooks(query, index),
    placeholderData: keepPreviousData
    // enabled: !!query
  })
}

const App = () => {
  const [title, setTitle] = useState("")
  const [index, setIndex] = useState(0)
  const [page, setPage] = useState(1)

  const { data } = useBooks(title, index)

  useEffect(() => {
    const page = index / 10 + 1
    setPage(page)
  }, [index])

  return (
    <div className="h-full p-8 relative">
      <InputForm
        onSubmit={(data) => {
          setTitle(data.query)
        }}
      />
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
          previous page
        </Button>
        <Button onClick={() => setIndex(index + 10)}>next page</Button>
        <span>Current Page: {page}</span>
      </div>
    </div>
  )
}

export default App

// {/* <>
//           {/* <img
//             src={item?.volumeInfo?.imageLinks?.thumbnail}
//             alt={item?.volumeInfo?.title}
//           /> */}
//           {}

//         </> */}
