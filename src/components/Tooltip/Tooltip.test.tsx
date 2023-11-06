import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Tooltip } from "./Tooltip"

describe("Tooltip", () => {
  const defaultText = "Default Text"
  it("Text visible", () => {
    render(<Tooltip text={defaultText} />)
    const visibleText = screen.getByTestId("tooltip-text")

    expect(visibleText).toHaveTextContent(defaultText)
  })

  it("Tooltip visible on hover with correct text", async () => {
    const user = userEvent.setup()
    render(<Tooltip text={defaultText} />)

    const tooltip = screen.getByRole("button")

    let content = screen.queryByRole("tooltip")

    expect(content).toBeNull()

    await user.hover(tooltip)

    content = await screen.findByRole("tooltip")

    expect(content).toBeVisible()

    expect(content).toHaveTextContent(defaultText)
  })
})
