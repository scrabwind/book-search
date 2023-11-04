import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { InputForm } from "@/components/InputForm"
import { type BooksResponse } from "@/types/response"

const getBooks = async (query: string) => {
  const { data } = await axios.get<BooksResponse>(
    "https://www.googleapis.com/books/v1/volumes",
    {
      params: {
        q: `${query}`,
        key: "AIzaSyCSnC9lKxYGJfyzU9a6istxkrUNBkuf87s"
      }
    }
  )

  return data
}

const useBooks = (query: string) => {
  return useQuery({
    queryKey: ["book", query],
    queryFn: async () => getBooks(query),
    enabled: !!query
  })
}

const App = () => {
  const [title, setTitle] = useState("")

  const { data } = useBooks(title)

  return (
    <>
      <InputForm
        onSubmit={(data) => {
          setTitle(data.query)
        }}
      />
      {[data?.items[2]].map((item) => (
        <>
          {/* <img
            src={item?.volumeInfo?.imageLinks?.thumbnail}
            alt={item?.volumeInfo?.title}
          /> */}
          <span key={item?.id}>{JSON.stringify(item?.volumeInfo)}</span>
        </>
      ))}
    </>
  )
}

export default App
