import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Form } from "./Form"

describe("Form", () => {
  const inputText = "Some input"
  it("Form input shows correctly", async () => {
    const user = userEvent.setup()
    render(<Form onSubmit={vi.fn()} />)

    const input = screen.getByLabelText("Search")

    expect(input).toBeVisible()

    await user.type(input, inputText)

    expect(input).toHaveDisplayValue(inputText)
  })
  it("Form select shows correctly", async () => {
    const user = userEvent.setup()
    render(<Form onSubmit={vi.fn()} />)

    const select = screen.getByDisplayValue("All ebooks")

    expect(select).toHaveDisplayValue("All ebooks")

    await user.selectOptions(select, "Full text")

    expect(select).toHaveDisplayValue("Full text")
  })

  it("Submits form with correct data", async () => {
    const user = userEvent.setup()
    const handleSubmit = vi.fn()
    render(<Form onSubmit={handleSubmit} />)

    const input = screen.getByLabelText("Search")

    const select = screen.getByDisplayValue("All ebooks")

    const search = screen.getByText("Search", { selector: "button" })

    await user.type(input, inputText)
    await user.selectOptions(select, "Full text")
    await user.click(search)

    expect(handleSubmit).toHaveBeenCalled()
    expect(handleSubmit).toHaveBeenCalledWith(
      {
        query: inputText,
        filter: "full"
      },
      expect.anything() // Second argument is event
    )
  })
})
