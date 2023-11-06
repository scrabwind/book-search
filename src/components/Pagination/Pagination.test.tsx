import "@testing-library/jest-dom/vitest"
import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { Pagination, type PaginationProps } from "./Pagination"

describe("Pagination", () => {
  const defaultProps: PaginationProps = {
    isFetching: false,
    isFirstPage: false,
    isLastPage: false,
    onPaginationClick: () => {},
    page: 2
  }
  it("Displays correct page", () => {
    render(<Pagination {...defaultProps} />)

    const pagination = screen.getByRole("navigation")

    expect(pagination).toHaveTextContent(`Current Page: ${defaultProps.page}`)
  })

  it("Buttons disabled on fetching", () => {
    render(
      <Pagination
        {...defaultProps}
        isFetching={true}
      />
    )

    const [prevPage, nextPage] = screen.getAllByRole("button")

    expect(prevPage).toBeDisabled()
    expect(nextPage).toBeDisabled()
  })

  it("Previous page button disabled", () => {
    render(
      <Pagination
        {...defaultProps}
        isFirstPage={true}
      />
    )

    const [prevPage] = screen.getAllByRole("button")

    expect(prevPage).toBeDisabled()
  })

  it("Next page button disabled", () => {
    render(
      <Pagination
        {...defaultProps}
        isLastPage={true}
      />
    )

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, nextPage] = screen.getAllByRole("button")

    expect(nextPage).toBeDisabled()
  })

  it("Pagination click invoked", () => {
    const clickHandle = vi.fn()
    render(
      <Pagination
        {...defaultProps}
        onPaginationClick={clickHandle}
      />
    )

    const [prevPage, nextPage] = screen.getAllByRole("button")

    prevPage.click()
    nextPage.click()

    expect(clickHandle).toHaveBeenCalledTimes(2)
  })
})
