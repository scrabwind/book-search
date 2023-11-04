import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { InputForm } from "@/components/InputForm"
import { type BooksResponse } from "@/types/response"
import { CardComponent } from "@/components/Card"

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
    <div className="p-8">
      <InputForm
        onSubmit={(data) => {
          setTitle(data.query)
        }}
      />
      <div className="grid grid-cols-5 gap-4">
        {data?.items?.slice(0, 10)?.map((item) =>
          item ? (
            <CardComponent
              key={item.id}
              item={item}
            />
          ) : null
        )}
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
