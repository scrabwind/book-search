import { Button } from "@/components/ui/button"

export type PaginationProps = {
  isFirstPage: boolean
  isFetching: boolean
  isLastPage: boolean
  page: number
  onPaginationClick: (isNextPage: boolean) => void
}

export function Pagination({
  isFirstPage,
  isLastPage,
  isFetching,
  page,
  onPaginationClick
}: PaginationProps) {
  return (
    <nav className="absolute bottom-0 mb-8 flex justify-center items-center gap-4">
      <Button
        disabled={isFirstPage || isFetching}
        onClick={() => onPaginationClick(false)}
      >
        Previous
      </Button>
      <Button
        disabled={isLastPage || isFetching}
        onClick={() => onPaginationClick(true)}
      >
        Next
      </Button>
      <p>Current Page: {page}</p>
    </nav>
  )
}
