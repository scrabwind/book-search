import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useBooks = () => {
  return useQuery({
    queryKey: ["book"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCSnC9lKxYGJfyzU9a6istxkrUNBkuf87s"
      )

      return data
    }
  })
}

const App = () => {
  const { data, isPending } = useBooks()

  // useQuery({
  //   queryKey: ["todos"],
  //   queryFn: async () => {
  //     const { data } = await axios.get(
  //       `https://www.googleapis.com/books/v1/volumes`,
  //       {
  //         params: {
  //           key: import.meta.env.VITE_API_KEY,
  //           q: `dairy intitle`,
  //           keyes: import.meta.env.VITE_API_KEY
  //         }
  //       }
  //     )

  //     setBooks(data)
  //   }
  // })

  return (
    <>
      {/* <div>{JSON.stringify(data?.items)}</div> */}
      <div>
        {isPending ? (
          "Loading"
        ) : (
          <div>
            {data?.items.map((val: any) => (
              <div key={val.id}>{val?.volumeInfo.title}</div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default App
