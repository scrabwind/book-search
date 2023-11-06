import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Alert } from "./Alert"

describe("Alert", () => {
  const defaultTitle = "Default title"
  const defaultDescription = "Default Description"
  it("Displays title and description", () => {
    render(
      <Alert
        title={defaultTitle}
        description={defaultDescription}
      />
    )

    const element = screen.getByRole("alert")

    expect(element).toHaveTextContent(defaultTitle)
  })

  it("Displays default variant", () => {
    render(
      <Alert
        title={defaultTitle}
        description={defaultDescription}
      />
    )

    const icon = screen.getByTestId("info-icon")

    expect(icon).toBeVisible()
  })

  it("Displays error variant", () => {
    render(
      <Alert
        title={defaultTitle}
        description={defaultDescription}
        variant="destructive"
      />
    )

    const icon = screen.getByTestId("error-icon")

    expect(icon).toBeVisible()
  })
})
