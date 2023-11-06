import { useState } from "react"
import { Form } from "@/components/Form/Form"
import { Card } from "@/components/Card/Card"
import { Alert } from "@/components/Alert/Alert"
import { Pagination } from "@/components/Pagination/Pagination"
import { useBooks, usePages } from "./Home.hooks"

export function Home() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("")
  const [index, setIndex] = useState(0)
  const [maxResults, _setMaxResults] = useState(10)

  const { data, isFetching, isError } = useBooks(query, index, filter)

  const { page, isFirstPage, isLastPage } = usePages(
    index,
    maxResults,
    data?.items?.length
  )

  const onPaginationClick = (isNextPage: boolean) => {
    isNextPage ? setIndex(index + maxResults) : setIndex(index - maxResults)
  }

  return (
    <div className="h-full p-8 relative">
      <div className="flex gap-8">
        <Form
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
            <Alert
              variant="destructive"
              title="There was an error getting response from server"
              description="Try again later"
            />
          ) : data ? (
            data.totalItems === 0 ? (
              <Alert
                variant="default"
                title="There were no results"
                description="Try searching up something different"
              />
            ) : (
              data.items?.map((item) => (
                <Card
                  key={item.id}
                  item={item?.volumeInfo}
                />
              ))
            )
          ) : (
            <Alert
              variant="default"
              title="Search for the books"
              description="You can also use filters!"
            />
          )}
        </div>
      }
      <Pagination
        isFetching={isFetching}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        onPaginationClick={onPaginationClick}
        page={page}
      />
    </div>
  )
}
